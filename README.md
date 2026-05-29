# HK Towing Website

**hk-towing.com** — React + TypeScript + Vite  
Hosted free on GitHub Pages with your custom domain.

---

## 📁 Step 1 — Add Your Images

Copy these files into the `public/images/` folder:

| File name | What it is |
|---|---|
| `logo.png` | HK Towing logo |
| `truck.jpg` | Truck photo (convert HEIC → JPG first) |
| `instagram_qr.png` | Instagram QR code |

**Convert HEIC → JPG on Mac:**
1. Open **Preview** app → open `truck_photo.HEIC`
2. File → Export → choose **JPEG** → save as `truck.jpg`
3. Place it in `public/images/`

---

## 🚀 Step 2 — Deploy to GitHub Pages

**Create a GitHub repo:**
1. Go to github.com → New repository → name it `hk-towing` → Public

**Push the code (run in Terminal from this folder):**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hk-towing.git
git push -u origin main
```

**Enable GitHub Pages:**
1. Repo → Settings → Pages
2. Source: **GitHub Actions**
3. Site auto-deploys on every push to main ✅

---

## 🌐 Step 3 — Connect hk-towing.com

1. GitHub → Settings → Pages → Custom domain → enter `hk-towing.com`
2. In Google Domains DNS, add these records:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR_USERNAME.github.io |

3. Wait ~30 mins → check "Enforce HTTPS" in GitHub Pages ✅

---

## 💻 Local Development

```bash
npm install
npm run dev
# Open http://localhost:5173
```
