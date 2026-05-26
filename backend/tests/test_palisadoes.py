"""Palisadoes Credit Union API tests."""
import os
import uuid
import pytest
import requests

BASE = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE:
    # fallback for backend-only environment
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE = line.split("=", 1)[1].strip().rstrip("/")

API = f"{BASE}/api"

ADMIN_EMAIL = "admin@palisadoes.coop"
ADMIN_PASS = "Admin@123"


@pytest.fixture(scope="session")
def token():
    r = requests.post(f"{API}/admin/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASS}, timeout=15)
    assert r.status_code == 200, f"login failed: {r.status_code} {r.text}"
    data = r.json()
    assert "token" in data and data["email"] == ADMIN_EMAIL
    return data["token"]


@pytest.fixture
def auth_headers(token):
    return {"Authorization": f"Bearer {token}"}


# ---------- Health ----------
def test_root():
    r = requests.get(f"{API}/", timeout=10)
    assert r.status_code == 200
    assert "Palisadoes" in r.json().get("message", "")


# ---------- Auth ----------
def test_login_invalid():
    r = requests.post(f"{API}/admin/login", json={"email": ADMIN_EMAIL, "password": "wrong"}, timeout=10)
    assert r.status_code == 401


def test_admin_me_no_token():
    r = requests.get(f"{API}/admin/me", timeout=10)
    assert r.status_code == 401


def test_admin_me_invalid_token():
    r = requests.get(f"{API}/admin/me", headers={"Authorization": "Bearer bogus.token.value"}, timeout=10)
    assert r.status_code == 401


def test_admin_me_valid(auth_headers):
    r = requests.get(f"{API}/admin/me", headers=auth_headers, timeout=10)
    assert r.status_code == 200
    assert r.json()["email"] == ADMIN_EMAIL


# ---------- Notices ----------
def test_notices_public_no_auth():
    r = requests.get(f"{API}/notices", timeout=10)
    assert r.status_code == 200
    assert isinstance(r.json(), list)


def test_admin_notices_requires_auth():
    r = requests.get(f"{API}/admin/notices", timeout=10)
    assert r.status_code == 401


def test_notice_crud(auth_headers):
    title = f"TEST_notice_{uuid.uuid4().hex[:6]}"
    payload = {"title": title, "body": "Hello body", "type": "info", "active": True}
    # CREATE
    r = requests.post(f"{API}/admin/notices", json=payload, headers=auth_headers, timeout=10)
    assert r.status_code == 200, r.text
    created = r.json()
    nid = created["id"]
    assert created["title"] == title
    assert created["body"] == "Hello body"

    # LIST admin
    r = requests.get(f"{API}/admin/notices", headers=auth_headers, timeout=10)
    assert r.status_code == 200
    assert any(n["id"] == nid for n in r.json())

    # LIST public should include active
    r = requests.get(f"{API}/notices", timeout=10)
    assert any(n["id"] == nid for n in r.json())

    # UPDATE
    upd = {"title": title + "_u", "body": "Updated", "type": "warning", "active": False}
    r = requests.put(f"{API}/admin/notices/{nid}", json=upd, headers=auth_headers, timeout=10)
    assert r.status_code == 200
    assert r.json()["title"] == title + "_u"
    assert r.json()["active"] is False

    # Public should NOT include inactive
    r = requests.get(f"{API}/notices", timeout=10)
    assert not any(n["id"] == nid for n in r.json())

    # DELETE
    r = requests.delete(f"{API}/admin/notices/{nid}", headers=auth_headers, timeout=10)
    assert r.status_code == 200

    # 404 after delete
    r = requests.delete(f"{API}/admin/notices/{nid}", headers=auth_headers, timeout=10)
    assert r.status_code == 404


# ---------- Gallery ----------
def test_gallery_public():
    r = requests.get(f"{API}/gallery", timeout=10)
    assert r.status_code == 200
    assert isinstance(r.json(), list)


def test_gallery_crud(auth_headers):
    tiny_png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
    title = f"TEST_gal_{uuid.uuid4().hex[:6]}"
    payload = {"title": title, "category": "Events", "image_base64": tiny_png, "description": "x"}
    r = requests.post(f"{API}/admin/gallery", json=payload, headers=auth_headers, timeout=15)
    assert r.status_code == 200, r.text
    gid = r.json()["id"]
    assert r.json()["title"] == title

    # appears in public list
    r = requests.get(f"{API}/gallery", timeout=10)
    assert any(g["id"] == gid for g in r.json())

    # DELETE
    r = requests.delete(f"{API}/admin/gallery/{gid}", headers=auth_headers, timeout=10)
    assert r.status_code == 200

    r = requests.delete(f"{API}/admin/gallery/{gid}", headers=auth_headers, timeout=10)
    assert r.status_code == 404


# ---------- Forms ----------
def test_forms_crud(auth_headers):
    payload = {"name": "TEST_form", "category": "Loans", "url": "https://example.com/x.pdf", "size": "1MB"}
    r = requests.post(f"{API}/admin/forms", json=payload, headers=auth_headers, timeout=10)
    assert r.status_code == 200
    fid = r.json()["id"]

    r = requests.get(f"{API}/forms", timeout=10)
    assert any(f["id"] == fid for f in r.json())

    r = requests.delete(f"{API}/admin/forms/{fid}", headers=auth_headers, timeout=10)
    assert r.status_code == 200


# ---------- Analytics ----------
def test_analytics_requires_auth():
    r = requests.get(f"{API}/admin/analytics", timeout=10)
    assert r.status_code == 401


def test_analytics_ok(auth_headers):
    r = requests.get(f"{API}/admin/analytics", headers=auth_headers, timeout=10)
    assert r.status_code == 200
    keys = {"total_notices", "active_notices", "gallery_items", "forms"}
    assert keys.issubset(set(r.json().keys()))
