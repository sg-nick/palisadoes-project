from fastapi import FastAPI, APIRouter, HTTPException, Depends, status, UploadFile, File
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import base64
import uuid
import jwt
import bcrypt
import smtplib
from email.message import EmailMessage
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
from datetime import datetime, timezone, timedelta

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]
JWT_SECRET = os.environ.get("JWT_SECRET", "palisadoes-secret-key-change-in-prod")
JWT_ALG = "HS256"
JWT_TTL_HOURS = 12
CONTACT_TO_EMAIL = os.environ.get("CONTACT_TO_EMAIL", "")
SMTP_HOST = os.environ.get("SMTP_HOST", "")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")
SMTP_FROM_EMAIL = os.environ.get("SMTP_FROM_EMAIL", SMTP_USER)

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

app = FastAPI(title="Palisadoes Credit Union API")
api_router = APIRouter(prefix="/api")
security = HTTPBearer(auto_error=False)

# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class AdminLogin(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    token: str
    email: str

class NoticeIn(BaseModel):
    title: str
    body: str
    type: str = "info"  # info | warning | success | event
    active: bool = True
    link: Optional[str] = None
    poster_image: Optional[str] = None

class Notice(NoticeIn):
    id: str
    created_at: str

class GalleryItemIn(BaseModel):
    title: str
    category: str = "General"
    image_base64: str  # data URL or raw base64
    description: Optional[str] = ""

class GalleryItem(BaseModel):
    id: str
    title: str
    category: str
    image_base64: str
    description: str
    created_at: str

class FormItemIn(BaseModel):
    name: str
    category: str
    url: str
    size: Optional[str] = ""

class ContactMessageIn(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactMessage(ContactMessageIn):
    id: str
    created_at: str
    email_sent: bool = False

# ---------- Helpers ----------
def hash_password(pwd: str) -> str:
    return bcrypt.hashpw(pwd.encode(), bcrypt.gensalt()).decode()

def verify_password(pwd: str, hashed: str) -> bool:
    try:
        return bcrypt.checkpw(pwd.encode(), hashed.encode())
    except Exception:
        return False

def create_token(email: str) -> str:
    payload = {
        "sub": email,
        "exp": datetime.now(timezone.utc) + timedelta(hours=JWT_TTL_HOURS),
        "iat": datetime.now(timezone.utc),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALG)

def send_contact_email(payload: ContactMessageIn) -> bool:
    if not (CONTACT_TO_EMAIL and SMTP_HOST and SMTP_FROM_EMAIL):
        return False

    msg = EmailMessage()
    msg["Subject"] = f"Website contact request from {payload.name}"
    msg["From"] = SMTP_FROM_EMAIL
    msg["To"] = CONTACT_TO_EMAIL
    msg["Reply-To"] = payload.email
    msg.set_content(
        f"Name: {payload.name}\n"
        f"Email: {payload.email}\n\n"
        f"Message:\n{payload.message}\n"
    )

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10) as smtp:
        smtp.starttls()
        if SMTP_USER and SMTP_PASSWORD:
            smtp.login(SMTP_USER, SMTP_PASSWORD)
        smtp.send_message(msg)
    return True

async def require_admin(creds: Optional[HTTPAuthorizationCredentials] = Depends(security)) -> str:
    if not creds or not creds.credentials:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Missing token")
    try:
        payload = jwt.decode(creds.credentials, JWT_SECRET, algorithms=[JWT_ALG])
        email = payload.get("sub")
        admin = await db.admins.find_one({"email": email}, {"_id": 0})
        if not admin:
            raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Invalid admin")
        return email
    except jwt.PyJWTError:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Invalid token")

# ---------- Routes: Health ----------
@api_router.get("/")
async def root():
    return {"message": "Palisadoes Credit Union API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status(input: StatusCheckCreate):
    obj = StatusCheck(**input.model_dump())
    doc = obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r["timestamp"], str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return rows

@api_router.post("/contact", response_model=ContactMessage)
async def submit_contact(payload: ContactMessageIn):
    email_sent = False
    try:
        email_sent = send_contact_email(payload)
    except Exception as exc:
        logging.warning("Contact email failed: %s", exc)

    doc = {
        **payload.model_dump(),
        "id": str(uuid.uuid4()),
        "created_at": datetime.now(timezone.utc).isoformat(),
        "email_sent": email_sent,
    }
    await db.contact_messages.insert_one(doc.copy())
    doc.pop("_id", None)
    return doc

# ---------- Auth ----------
@api_router.post("/admin/login", response_model=TokenResponse)
async def admin_login(payload: AdminLogin):
    admin = await db.admins.find_one({"email": payload.email}, {"_id": 0})
    if not admin or not verify_password(payload.password, admin["password_hash"]):
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Invalid credentials")
    token = create_token(admin["email"])
    return TokenResponse(token=token, email=admin["email"])

@api_router.get("/admin/me")
async def admin_me(email: str = Depends(require_admin)):
    return {"email": email}

# ---------- Notices ----------
@api_router.get("/notices", response_model=List[Notice])
async def list_notices_public():
    rows = await db.notices.find({"active": True}, {"_id": 0}).sort("created_at", -1).to_list(100)
    return rows

@api_router.get("/admin/notices", response_model=List[Notice])
async def list_notices_admin(email: str = Depends(require_admin)):
    rows = await db.notices.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return rows

@api_router.post("/admin/notices", response_model=Notice)
async def create_notice(payload: NoticeIn, email: str = Depends(require_admin)):
    nid = str(uuid.uuid4())
    doc = {**payload.model_dump(), "id": nid, "created_at": datetime.now(timezone.utc).isoformat()}
    await db.notices.insert_one(doc.copy())
    doc.pop("_id", None)
    return doc

@api_router.put("/admin/notices/{nid}", response_model=Notice)
async def update_notice(nid: str, payload: NoticeIn, email: str = Depends(require_admin)):
    res = await db.notices.find_one_and_update(
        {"id": nid}, {"$set": payload.model_dump()}, projection={"_id": 0}, return_document=True
    )
    if not res:
        raise HTTPException(404, "Notice not found")
    return res

@api_router.delete("/admin/notices/{nid}")
async def delete_notice(nid: str, email: str = Depends(require_admin)):
    res = await db.notices.delete_one({"id": nid})
    if res.deleted_count == 0:
        raise HTTPException(404, "Notice not found")
    return {"ok": True}

# ---------- Gallery ----------
@api_router.get("/gallery", response_model=List[GalleryItem])
async def list_gallery_public():
    rows = await db.gallery.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return rows

@api_router.post("/admin/gallery", response_model=GalleryItem)
async def create_gallery(payload: GalleryItemIn, email: str = Depends(require_admin)):
    gid = str(uuid.uuid4())
    doc = {
        **payload.model_dump(),
        "id": gid,
        "description": payload.description or "",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.gallery.insert_one(doc.copy())
    doc.pop("_id", None)
    return doc

@api_router.delete("/admin/gallery/{gid}")
async def delete_gallery(gid: str, email: str = Depends(require_admin)):
    res = await db.gallery.delete_one({"id": gid})
    if res.deleted_count == 0:
        raise HTTPException(404, "Item not found")
    return {"ok": True}

# ---------- Forms (admin manageable) ----------
@api_router.get("/forms")
async def list_forms_public():
    rows = await db.forms.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return rows

@api_router.post("/admin/forms")
async def create_form(payload: FormItemIn, email: str = Depends(require_admin)):
    fid = str(uuid.uuid4())
    doc = {**payload.model_dump(), "id": fid, "created_at": datetime.now(timezone.utc).isoformat()}
    await db.forms.insert_one(doc.copy())
    doc.pop("_id", None)
    return doc

@api_router.delete("/admin/forms/{fid}")
async def delete_form(fid: str, email: str = Depends(require_admin)):
    res = await db.forms.delete_one({"id": fid})
    if res.deleted_count == 0:
        raise HTTPException(404, "Form not found")
    return {"ok": True}

# ---------- Analytics ----------
@api_router.get("/admin/analytics")
async def analytics(email: str = Depends(require_admin)):
    notices = await db.notices.count_documents({})
    active_notices = await db.notices.count_documents({"active": True})
    gallery_count = await db.gallery.count_documents({})
    forms_count = await db.forms.count_documents({})
    return {
        "total_notices": notices,
        "active_notices": active_notices,
        "gallery_items": gallery_count,
        "forms": forms_count,
    }

# ---------- Reports & Folder-gallery (drop-in folder support) ----------
STATIC_DIR = ROOT_DIR / "static"
REPORTS_DIR = STATIC_DIR / "reports"
GALLERY_DIR = STATIC_DIR / "gallery"
REPORTS_DIR.mkdir(parents=True, exist_ok=True)
GALLERY_DIR.mkdir(parents=True, exist_ok=True)


def _parse_report_filename(fname: str):
    """Try to extract a year from a filename. Returns (year, title)."""
    import re
    stem = Path(fname).stem
    m = re.search(r"(20\d{2}|19\d{2})", stem)
    year = m.group(1) if m else ""
    # Pretty title from filename
    title = re.sub(r"[_-]+", " ", stem).strip().title()
    if year and year not in title:
        title = f"Annual Report {year}"
    return year, title


@api_router.get("/reports")
async def list_reports():
    """Returns annual reports dropped into backend/static/reports/."""
    items = []
    if REPORTS_DIR.exists():
        for f in sorted(REPORTS_DIR.iterdir(), reverse=True):
            if f.is_file() and f.suffix.lower() == ".pdf":
                year, title = _parse_report_filename(f.name)
                stat = f.stat()
                items.append({
                    "id": f.name,
                    "year": year,
                    "title": title,
                    "filename": f.name,
                    "url": f"/api/static/reports/{f.name}",
                    "size_bytes": stat.st_size,
                    "modified": datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc).isoformat(),
                })
    # Sort by year desc when possible
    items.sort(key=lambda x: x["year"], reverse=True)
    return items


@api_router.get("/gallery-folder")
async def list_gallery_folder():
    """Returns images dropped into backend/static/gallery/."""
    import re
    items = []
    exts = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
    if GALLERY_DIR.exists():
        for f in sorted(GALLERY_DIR.iterdir()):
            if f.is_file() and f.suffix.lower() in exts:
                stem = Path(f.name).stem
                title = re.sub(r"[_-]+", " ", stem).strip().title()
                items.append({
                    "id": f.name,
                    "title": title,
                    "category": "General",
                    "image_base64": f"/api/static/gallery/{f.name}",
                    "description": "",
                    "created_at": datetime.fromtimestamp(f.stat().st_mtime, tz=timezone.utc).isoformat(),
                })
    return items


# ---------- Startup ----------
@app.on_event("startup")
async def seed_admin():
    existing = await db.admins.find_one({"email": "admin@palisadoes.coop"}, {"_id": 0})
    if not existing:
        await db.admins.insert_one(
            {
                "email": "admin@palisadoes.coop",
                "password_hash": hash_password("Admin@123"),
                "created_at": datetime.now(timezone.utc).isoformat(),
            }
        )
        logging.info("Seeded default admin: admin@palisadoes.coop / Admin@123")

@app.on_event("shutdown")
async def shutdown_db():
    client.close()

app.include_router(api_router)

# Mount static for drop-in PDFs and images at /api/static/*
app.mount("/api/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)
