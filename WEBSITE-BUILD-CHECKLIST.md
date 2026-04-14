# Website Build Checklist
## Use this checklist for every new site you build with Claude

---

## 🏗️ PHASE 1: Foundation

### Brand & Design
- [ ] Define brand colors (primary, secondary, accent)
- [ ] Choose fonts (heading + body)
- [ ] Get logo files (dark + light versions, PNG + SVG)
- [ ] Define tone of voice (professional, warm, casual, etc.)
- [ ] Get real photos (team, facilities, products) or source stock photos

### Technical Setup
- [ ] Scaffold Next.js project with TypeScript + Tailwind
- [ ] Set up GitHub repo and push initial commit
- [ ] Create `.claude/launch.json` for dev server
- [ ] Set up dev environment (port, hot reload)

### Data & Content
- [ ] Write or import all page content
- [ ] Collect business info (address, phone, email, hours)
- [ ] Gather team bios and headshots
- [ ] Import any existing data (courses, products, locations, etc.)

---

## 📄 PHASE 2: Pages

### Core Pages
- [ ] Home page with hero, value proposition, CTAs
- [ ] About page with founder bio, mission, company profile
- [ ] Services page with clear service descriptions
- [ ] Contact page with working form
- [ ] Locations page (if applicable)

### Supporting Pages
- [ ] FAQ page (15-20 questions with Schema.org markup)
- [ ] "Why [Company]" page with differentiators + comparison table
- [ ] Blog landing page with article structure
- [ ] Course catalog or product catalog (if applicable)

### Legal Pages (REQUIRED)
- [ ] Privacy Policy (CCPA, COPPA, data retention, Do Not Track)
- [ ] Terms of Service (acceptable use, IP, disclaimer)
- [ ] Cookie Policy (list every cookie, purpose, duration)
- [ ] Accessibility Statement (WCAG 2.1 AA commitment)

---

## 🎨 PHASE 3: Design & UX

### Navigation
- [ ] Clean nav bar (5-7 items max)
- [ ] One standout CTA button in nav
- [ ] Mobile hamburger menu
- [ ] Logo links to home page

### Content Flow
- [ ] Hero → Social proof → Services → Testimonials → CTA
- [ ] Every page has at least one CTA
- [ ] No dead-end pages
- [ ] "What happens next" after form submission

### Visual Elements
- [ ] Partner/client logos band
- [ ] Step-by-step process section
- [ ] Stats section with real numbers
- [ ] Testimonials with attribution
- [ ] Team photos or headshots

### Responsive Design
- [ ] Test on mobile (375px)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1440px)

---

## 🔒 PHASE 4: Security & Compliance

### Security Headers
- [ ] HSTS (Strict-Transport-Security)
- [ ] X-Frame-Options: SAMEORIGIN
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy
- [ ] Permissions-Policy
- [ ] X-XSS-Protection

### Form Security
- [ ] Sanitize all user inputs (strip newlines for mailto)
- [ ] Email validation (proper regex)
- [ ] Rate limiting consideration
- [ ] No hardcoded secrets in source code

### Cookie Compliance
- [ ] Cookie consent banner (Accept/Decline)
- [ ] Decline disables analytics tracking
- [ ] Cookie Policy page listing all cookies

### Content Protection (if applicable)
- [ ] Disable right-click on protected content
- [ ] Disable copy/paste shortcuts
- [ ] Block print on protected pages
- [ ] Iframe sandboxing on embedded content

---

## 🔍 PHASE 5: SEO & Analytics

### Metadata
- [ ] Unique title and description on every page
- [ ] Keywords on key pages
- [ ] Canonical URLs where needed
- [ ] OpenGraph tags (title, description, image)
- [ ] Twitter Card tags

### Technical SEO
- [ ] sitemap.xml (or sitemap.ts for Next.js)
- [ ] robots.txt
- [ ] Schema.org structured data (Organization, FAQ, LocalBusiness)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text on all images

### Analytics
- [ ] Google Analytics GA4 installed
- [ ] Test that events are tracking
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google

### Favicons
- [ ] favicon.ico
- [ ] Apple touch icon
- [ ] manifest.json
- [ ] og:image for social sharing

---

## ⚡ PHASE 6: Performance

### Images
- [ ] Compress all images (target: <500KB each)
- [ ] Generate WebP versions
- [ ] Use next/Image instead of raw <img> tags
- [ ] Lazy loading on below-fold images

### Code
- [ ] Remove dev dependencies from production (mammoth, sharp, etc.)
- [ ] Remove dev files (scripts, temp files, .txt notes)
- [ ] Update .gitignore
- [ ] No console.log statements in production
- [ ] No TODO/FIXME/HACK comments

### Audit
- [ ] Run Lighthouse audit (target: 90+ on all scores)
- [ ] Check Core Web Vitals
- [ ] Test page load time (<3 seconds)

---

## 📝 PHASE 7: Content Quality

### Copy
- [ ] Read every page out loud — does it sound human?
- [ ] Remove AI-sounding phrases ("leverage", "robust", "bespoke", etc.)
- [ ] Match the founder's voice (how they'd say it at dinner)
- [ ] CTAs tell people what they GET, not what they DO
- [ ] No claims without proof
- [ ] Check for typos and grammar

### Legal Content
- [ ] Company name consistent everywhere
- [ ] Year references are current
- [ ] No placeholder text ("Lorem ipsum", "Coming soon" on live content)
- [ ] Contact info accurate on all pages

---

## 🚀 PHASE 8: Pre-Launch

### Final Sweep
- [ ] Test all links (internal + external)
- [ ] Test all forms (do they actually submit?)
- [ ] Test on 3 browsers (Chrome, Safari, Firefox)
- [ ] Test on real mobile device
- [ ] Check 404 page works
- [ ] Verify cookie banner appears on first visit

### Accounts Needed
- [ ] GitHub (code hosting)
- [ ] Vercel or hosting provider (deployment)
- [ ] Domain registrar (GoDaddy, etc.)
- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Email marketing (Mailchimp, etc.)

### Deployment
- [ ] Merge PR on GitHub
- [ ] Connect repo to hosting (Vercel)
- [ ] Configure custom domain
- [ ] Enable HTTPS (SSL certificate)
- [ ] Test live site
- [ ] Submit sitemap to Google Search Console

---

*Created April 2026 for BLE Training. Use for all future builds.*
