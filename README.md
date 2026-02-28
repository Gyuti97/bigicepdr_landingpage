<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7bdc7011-9e1f-44b5-a494-1359508dbda0

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## GitHub Pages (ajánlott, automatikus)

Ez a projekt Vite + React, ezért GitHub Pages-en **buildelni kell**. A repó tartalmaz egy GitHub Actions workflow-t,
ami minden push után lebuildeli a projektet és kiteszi GitHub Pages-re.

### Lépések
1. GitHub repo → **Settings → Pages**
2. **Source**: válaszd a **GitHub Actions** opciót (ne "Deploy from a branch").
3. Pusholj a `main` branchre.
4. Repo → **Actions**: várd meg, amíg a workflow zöld (Success).

### Saját domain (www.bigicepdr.hu)
- Rackhost DNS:
  - `www` → CNAME → `gyuti97.github.io`
  - `@` → A rekordok:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153
- GitHub repo → Settings → Pages → **Custom domain**: `www.bigicepdr.hu`
- Kapcsold be az **Enforce HTTPS**-t, amikor elérhető.
