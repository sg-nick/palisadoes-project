# Palisadoes Co-op Credit Union — Source

React + FastAPI + MongoDB site for the Palisadoes Co-operative Credit Union.

## Stack
- React 19, react-router-dom 7, Tailwind, shadcn/ui, framer-motion
- FastAPI, Motor (MongoDB), PyJWT, bcrypt

## Setup
### Backend
```
cd backend
pip install -r requirements.txt
# .env: MONGO_URL, DB_NAME, CORS_ORIGINS, JWT_SECRET
uvicorn server:app --port 8001 --reload
```
Admin auto-seeded: `admin@palisadoes.coop` / `Admin@123`

### Frontend
```
cd frontend
yarn install
# .env: REACT_APP_BACKEND_URL=http://localhost:8001
yarn start
```

## Drop-in folders (no admin panel needed)
- **Annual reports:** drop PDF files into `backend/static/reports/`
  - e.g. `annual-report-2024.pdf` — title and year auto-detected
- **Gallery photos:** drop image files into `backend/static/gallery/`
  - supported: .jpg .jpeg .png .webp .gif

Files appear on the website automatically after page refresh.

## Routes
Public nav: Home, Company Profile, Products & Services, Policies, Forms, Contact
Deep-link pages: /loans, /membership, /fip, /gallery
Admin: /admin/login, /admin/dashboard, /admin/notices, /admin/gallery, /admin/forms

## Notes
- Gallery section uses 9 fallback Unsplash images so the site is functional without uploads.
- Online Banking button redirects to https://gia.msd-tt.com/palis/login.php
- FIP page enriched with CUNA Caribbean Insurance F.I.P. content & family hero image.
