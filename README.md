# 🚀 ContestHub — Upcoming Coding Contests Tracker

**ContestHub** is a modern, responsive web app that lists upcoming programming contests (Codeforces, LeetCode, AtCoder, CodeChef, etc.) in a clean card UI.  
It demonstrates API integration, client/server code, responsive UI, and small production considerations — a compact, resume-ready full-stack project.

---

## 🔎 Project Summary

- **Purpose:** Aggregate and display upcoming coding contests from multiple sources so competitive programmers can quickly see what's next.
- **Frontend:** HTML, CSS (modern theme), JavaScript (fetch + DOM manipulation).
- **Backend (optional / recommended):** Node.js + Express — used to proxy and merge contest APIs (recommended when using private API keys like Clist.by).
- **APIs used:** Clist.by (recommended for reliable coverage, **requires API key**), `kontests.net` (public-ish endpoints for some platforms), Codeforces official API.
- **Showcase options:** Local demo, recorded video, or static frontend deploy (Hugging Face Spaces / GitHub Pages) using public APIs.

---

## ✨ Features

- Fetches and aggregates upcoming contests from multiple platforms
- Responsive **card grid** UI (modern theme)
- **Search** to filter contests by name
- English-only filtering (removes non-English contest names)
- Easy to run locally (full stack) or deploy frontend-only

---

## 📁 Project Structure

```bash
contesthub/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
└── README.md



  
