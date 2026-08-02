# Deploying Musetta — GitHub + Vercel, step by step

You'll do this part yourself since it needs your own GitHub and Vercel
accounts — I can't create accounts or push code on your behalf. It's about
15 minutes end to end and you only do the GitHub half once.

## Part 1 — Get the code onto GitHub

**1. Download and unzip the project** you got from this chat, if you
haven't already.

**2. Create a new, empty repository on GitHub:**
   - Go to [github.com/new](https://github.com/new)
   - Name it `musetta-site` (or whatever you like)
   - Leave it **empty** — don't tick "Add a README", "Add .gitignore", or
     "Choose a license". We already have all of those.
   - Click **Create repository**
   - GitHub will show you a page with some commands — keep that tab open,
     you'll need the repository URL from it in step 4.

**3. Open a terminal and go into the project folder.** It already comes
as an initialized git repository with one commit, so there's no `git init`
needed — just rename the branch to `main` (GitHub's default):

   ```bash
   cd path/to/musetta-site
   git branch -M main
   ```

**4. Connect it to the GitHub repo you just created and push:**

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/musetta-site.git
   git push -u origin main
   ```

   (Swap in your actual GitHub username and repo name — it's the URL
   GitHub showed you in step 2.) If this is your first time pushing from
   this computer, GitHub will prompt you to sign in.

Refresh the GitHub page — you should see all the project files there.

## Part 2 — Deploy it on Vercel

**1. Go to [vercel.com](https://vercel.com)** and sign in — use "Continue
with GitHub" so the two are connected automatically.

**2. Click "Add New" → "Project".**

**3. Find `musetta-site` in the list of your GitHub repos and click
"Import".** Vercel will auto-detect it's a Next.js project — you shouldn't
need to change any build settings.

**4. Click "Deploy".** It takes about a minute. When it's done, Vercel
gives you a live URL like `musetta-site.vercel.app` — the site is now
live on the internet.

## After that

- **Every time you push to `main` on GitHub, Vercel automatically
  redeploys.** That's the whole workflow going forward: edit code, git
  commit, git push, done.
- **Custom domain:** in the Vercel project, go to Settings → Domains and
  add your own domain (e.g. `musetta.com`) — Vercel will show you the DNS
  records to add at your domain registrar.
- **Contact form emails:** see the note in `README.md` — the form works
  and validates input, but you'll need to add a `RESEND_API_KEY`
  environment variable in Vercel (Settings → Environment Variables) once
  you wire up email sending, or submissions will only show up in Vercel's
  function logs.
