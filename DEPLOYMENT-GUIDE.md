# BLE Training — Step-by-Step Deployment Guide
## Going from localhost to live at bletraining.com

This guide is written for someone coming from WordPress. No terminal
wizardry required — just follow each step.

---

## What You Need Before Starting

| Account | What it's for | Do you have it? |
|---------|--------------|-----------------|
| **GitHub** (github.com) | Stores your code | ✅ Yes — bthammond/ble-training-site |
| **Vercel** (vercel.com) | Hosts and deploys your site | ❌ Need to create (free) |
| **GoDaddy** (godaddy.com) | Your domain registrar (bletraining.com) | ✅ Yes |
| **Google Analytics** | Tracks visitors | ✅ Yes — G-1JGH1MD3XZ |
| **Google Search Console** | SEO monitoring | ❌ Need to set up (free) |
| **Mailchimp** (mailchimp.com) | Email newsletter | ✅ Yes |

### Why Vercel?

Your site is built with **Next.js** — a technology made by the same company
that makes **Vercel**. Think of it like this:

- **WordPress** needs a web host (like GoDaddy hosting or Bluehost)
- **Next.js** needs Vercel (or similar) — it's purpose-built for it

Vercel is **free** for sites like yours. It automatically rebuilds your site
every time you push code to GitHub. No FTP, no file uploads, no cPanel.

---

## STEP 1: Create a Vercel Account (5 minutes)

1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. You're in. You now have a Vercel dashboard.

---

## STEP 2: Import Your GitHub Repo (3 minutes)

1. On your Vercel dashboard, click **"Add New Project"**
2. You'll see a list of your GitHub repos
3. Find **"ble-training-site"** and click **"Import"**
4. Vercel will detect it's a Next.js project automatically
5. **IMPORTANT**: Before clicking Deploy, check these settings:
   - Framework Preset: **Next.js** (should be auto-detected)
   - Root Directory: Leave blank (or `.` — the root)
   - Build Command: `next build` (default is fine)
   - Output Directory: Leave blank (default is fine)
6. Click **"Deploy"**
7. Wait 2-3 minutes. Vercel will build your site.
8. When it's done, you'll get a URL like `ble-training-site.vercel.app`
9. **Click that URL** — you should see your site live on the internet!

---

## STEP 3: Connect Your Domain (10 minutes)

Right now your site is at `ble-training-site.vercel.app`. Let's point
`bletraining.com` to it.

### On Vercel:
1. Go to your project on Vercel
2. Click **"Settings"** → **"Domains"**
3. Type **bletraining.com** and click **"Add"**
4. Vercel will show you DNS records to add. You'll see something like:
   - Type: **A** Record → Value: **76.76.21.21**
   - Type: **CNAME** Record → Name: **www** → Value: **cname.vercel-dns.com**

### On GoDaddy:
1. Log in to **GoDaddy** → go to **My Products** → **DNS**
2. Find your DNS records for bletraining.com
3. **Edit the A record**:
   - Type: A
   - Name: @
   - Value: **76.76.21.21** (the IP Vercel gave you)
   - TTL: 600 seconds
4. **Add a CNAME record** (if it doesn't exist):
   - Type: CNAME
   - Name: www
   - Value: **cname.vercel-dns.com**
   - TTL: 600 seconds
5. **Delete any old A records** that point to GoDaddy's default IP
6. Save changes

### Wait for DNS to propagate:
- This can take **5 minutes to 48 hours** (usually 15-30 minutes)
- Go back to Vercel → Settings → Domains
- It will show a green checkmark when it's working
- Vercel automatically gives you a **free SSL certificate** (HTTPS)

---

## STEP 4: Verify Your Site is Live (2 minutes)

1. Open a new browser tab (or incognito/private window)
2. Go to **https://bletraining.com**
3. You should see your site!
4. Also check **https://www.bletraining.com** — it should redirect properly
5. Click through a few pages to make sure everything works
6. Check the cookie consent banner appears
7. Check the contact form works
8. Check the course catalog loads

---

## STEP 5: Set Up Google Search Console (10 minutes)

This tells Google your site exists and helps you appear in search results.

1. Go to **https://search.google.com/search-console**
2. Click **"Add Property"**
3. Choose **"URL prefix"** and enter **https://bletraining.com**
4. For verification, choose **"HTML tag"** method
   - Google will give you a meta tag like:
     `<meta name="google-site-verification" content="abc123..." />`
   - Tell me this code and I'll add it to your site
5. After verification, click **"Sitemaps"** in the left menu
6. Enter **sitemap.xml** and click **"Submit"**
7. Google will start crawling your site within 24-48 hours

---

## STEP 6: Verify Google Analytics is Working (5 minutes)

1. Go to **https://analytics.google.com**
2. Select your property (G-1JGH1MD3XZ)
3. Click **"Reports"** → **"Realtime"**
4. Open your live site (bletraining.com) in another tab
5. You should see **1 active user** appear in the Realtime report
6. Click around a few pages — you should see page views updating

---

## STEP 7: Connect Mailchimp (Post-Launch)

The newsletter signup currently uses mailto. To connect it to Mailchimp:

1. Log in to **Mailchimp**
2. Go to **Audience** → **Signup Forms** → **Embedded Forms**
3. Copy the form action URL (looks like `https://yourlist.us1.list-manage.com/subscribe/post?u=...`)
4. Tell me that URL and I'll wire the newsletter form to submit directly
   to Mailchimp instead of opening an email

---

## STEP 8: Set Up Automatic Deployments (Already Done!)

Here's the best part about this setup:

- Every time you push code to the `main` branch on GitHub, **Vercel
  automatically rebuilds and deploys your site**
- No FTP uploads, no file manager, no clicking "publish"
- Just push to GitHub → site updates in 2-3 minutes
- You can see deploy history on your Vercel dashboard

---

## How This Compares to WordPress

| WordPress | Your New Site (Next.js + Vercel) |
|-----------|-------------------------------|
| Log in to wp-admin | Push code to GitHub |
| Click "Update" | Vercel auto-deploys |
| Install plugins | Built into the code |
| Worry about PHP updates | No server to maintain |
| Pay for hosting ($10-30/mo) | Vercel free tier |
| Database (MySQL) | No database needed |
| Slow page loads | Lightning fast (static + CDN) |
| Vulnerable to hackers | No admin panel to hack |
| Need to backup | GitHub IS your backup |

---

## Quick Reference

| What | Where |
|------|-------|
| Your code | github.com/bthammond/ble-training-site |
| Your hosting | vercel.com (connect GitHub) |
| Your domain | godaddy.com (DNS settings) |
| Your analytics | analytics.google.com |
| Your SEO | search.google.com/search-console |
| Your email list | mailchimp.com |
| Dev server (local) | http://localhost:3001 |
| Live site | https://bletraining.com |

---

## If Something Goes Wrong

**Site shows old version after pushing code:**
→ Go to Vercel dashboard → check if deployment succeeded or failed

**Site shows "Page Not Found":**
→ Check Vercel → Settings → Domains → make sure domain is connected

**DNS not propagating:**
→ Use https://dnschecker.org to check if DNS changes have spread

**Build fails on Vercel:**
→ Check the build logs in Vercel dashboard → fix the error → push again

**Need help?**
→ Start a new Claude Code session and describe what's happening

---

*This guide was created April 2026 for BLE Training.*
*Keep it handy — you'll reference it every time you deploy.*
