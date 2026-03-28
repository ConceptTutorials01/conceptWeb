# SEO Action Plan: Concept Tutorials (conceptutorials.com)

**Generated:** March 28, 2026
**Overall Score:** 31 / 100
**Target Score:** 72 / 100 (achievable within 90 days)

---

## Priority Legend

- **CRITICAL** — Blocks indexing or causes active trust damage (fix immediately)
- **HIGH** — Significantly impacts rankings (fix within 1 week)
- **MEDIUM** — Optimization opportunity (fix within 1 month)
- **LOW** — Nice to have (backlog)

---

## CRITICAL — Fix This Week

### C1. Fix the Broken Sitemap
**File:** `public/sitemap.xml` + `scripts/generate-sitemap.js`
**Time:** 30 minutes
**Impact:** Google Search Console is currently reporting "Submitted URL not found" for 3 of 4 sitemap URLs.

Replace `public/sitemap.xml` with:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://conceptutorials.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <lastmod>2026-03-28</lastmod>
  </url>
</urlset>
```

Then fix `scripts/generate-sitemap.js` to only include the `/` route, so the `postbuild` hook doesn't regenerate the broken sitemap.

---

### C2. Fix Duplicate / Wrong Testimonial Text
**File:** `src/components/Alumni.tsx`
**Time:** 1–2 hours (to collect real quotes) or 30 min (to remove placeholder text)
**Impact:** 8–10 testimonials say "I got selected as Pilot in Indian Air Force through NDA" on IIT/JEE achiever profiles. This is the most visible credibility problem on the site.

**Option A (immediate):** Remove the `review` field from all alumni objects that have the NDA Pilot text. The JSX already doesn't render it (see C3 below), so nothing changes visually.

**Option B (better):** Collect genuine testimonial quotes from each student and populate the `review` field with real text.

---

### C3. Fix Review Text Never Rendered in Alumni Component
**File:** `src/components/Alumni.tsx`, lines 179–207
**Time:** 10 minutes
**Impact:** The `testimonial.review` field is defined for all 12 students but the JSX template never outputs it. Review text is invisible to both users and crawlers.

Add this after the name/achievement block in the SwiperSlide:
```tsx
{testimonial.review && (
  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
    {testimonial.review}
  </p>
)}
```
Do this **after** fixing C2 (so you don't display the wrong text).

---

### C4. Add Open Graph + Twitter Card Tags
**File:** `index.html`
**Time:** 20 minutes
**Impact:** WhatsApp sharing (dominant in India) currently shows a blank preview. This is critical for any marketing campaigns.

Add to `<head>` (create `og-image.jpg` at 1200×630px first):
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://conceptutorials.com/" />
<meta property="og:title" content="Concept Tutorials | IIT JEE Coaching in Indore" />
<meta property="og:description" content="Indore's premier offline IIT JEE coaching with 30+ years of excellence. AIR 32 & AIR 35 in JEE Mains 2025. 12,500+ students trained." />
<meta property="og:image" content="https://conceptutorials.com/og-image.jpg" />
<meta property="og:locale" content="en_IN" />
<meta property="og:site_name" content="Concept Tutorials" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Concept Tutorials | IIT JEE Coaching in Indore" />
<meta name="twitter:description" content="30+ years of IIT JEE excellence in Indore. 12,500+ students trained." />
<meta name="twitter:image" content="https://conceptutorials.com/og-image.jpg" />
```

---

### C5. Add Canonical Tag + Fix Page Title + Geo Meta
**File:** `index.html`
**Time:** 10 minutes

```html
<!-- Replace title with: -->
<title>IIT JEE Coaching in Indore | Concept Tutorials by Parag Kher</title>

<!-- Add to <head>: -->
<link rel="canonical" href="https://conceptutorials.com/" />
<meta name="geo.region" content="IN-MP" />
<meta name="geo.placename" content="Indore" />
<meta name="geo.position" content="22.7196;75.8577" />
<meta name="ICBM" content="22.7196, 75.8577" />
```

---

### C6. Add LocalBusiness + EducationalOrganization JSON-LD Schema
**File:** `index.html`
**Time:** 2 hours
**Impact:** Makes the business machine-readable for Google Knowledge Panel, local pack, and AI Overviews.

Add two `<script type="application/ld+json">` blocks in `<head>` — one for each branch. See `FULL-AUDIT-REPORT.md` for complete JSON-LD. Key notes:
- **Replace `"22.7196"` and `"75.8577"** with exact coordinates from Google Maps
- **Verify founding year** with Parag Kher before publishing
- **Do NOT add `aggregateRating`** until you have real Google reviews

---

### C7. Fix robots.txt
**File:** `public/robots.txt`
**Time:** 10 minutes

Replace with:
```
Sitemap: https://conceptutorials.com/sitemap.xml

User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
```

---

### C8. Move EmailJS Credentials to Environment Variables
**File:** `src/components/Contact.tsx`
**Time:** 30 minutes

1. Log into EmailJS dashboard → set domain restriction to `conceptutorials.com` only
2. Create `.env` file (already gitignored):
```
VITE_EMAILJS_PUBLIC_KEY=IJzHJ2bV3iE2b_iQx
VITE_EMAILJS_SERVICE_ID=service_k95g5tr
VITE_EMAILJS_TEMPLATE_ID=template_w7ivdov
```
3. Update `Contact.tsx` to use `import.meta.env.VITE_EMAILJS_PUBLIC_KEY` etc.

---

## HIGH — Fix Within 1 Week

### H1. Fix Navigation: Replace `<button>` with `<a>` Tags
**Files:** `src/components/Header.tsx`, `src/components/Footer.tsx`
**Time:** 1 hour
**Impact:** Googlebot currently sees zero internal links on the site.

Change each nav button to an anchor tag. Example:
```tsx
// Before
<button onClick={() => scrollToSection('#about')}>About</button>

// After
<a
  href="#about"
  onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}
  className="..."
>
  About
</a>
```

---

### H2. Fix Broken tel: Link (Duplicate Country Code)
**File:** `src/components/Facilities.tsx:137`
**Time:** 2 minutes

```tsx
// Before
window.open('tel:+91919300360180', '_self')
// After
window.open('tel:+919300360180', '_self')
```

---

### H3. Create Legal Pages (Privacy Policy, Terms, Refund Policy)
**Files:** Create new pages; update `src/components/Footer.tsx`
**Time:** 2–4 hours
**Impact:** Required under India's DPDPA 2023. Broken legal links are a trust signal failure.

Options:
- Add simple in-page modals or expandable sections
- Add new React Router routes `/privacy`, `/terms`, `/refund` with static content
- Use a free privacy policy generator (e.g., PrivacyPolicies.com) and host as static HTML

Update Footer.tsx:
```tsx
// Before
<a href="#" ...>Privacy Policy</a>
// After
<a href="/privacy" ...>Privacy Policy</a>
```

---

### H4. Add llms.txt for AI Search
**File:** Create `public/llms.txt`
**Time:** 30 minutes

```
# Concept Tutorials

> Concept Tutorials is an offline IIT JEE coaching institute in Indore,
> Madhya Pradesh, India, founded by Parag Kher in 1995. The institute
> has trained over 12,500 students across two campuses in Indore and
> is known for small batch sizes, personalized attention, and JEE results
> including AIR 32 (99.51 percentile) in JEE Mains 2025.

## About
Director/Founder: Parag Kher
Established: ~1995 (30+ years of operation as of 2026)

## Locations
- Head Office: 113, Lokmanya Nagar, Indore, Madhya Pradesh 452009
- New Branch: 36, Vidhyanchal Nagar, Behind Bhuteshwar Mandir, Indore

## Contact
Phone: +91-93003-60180 (Parag Kher), +91-99608-39401 (Sachin Agrawal)
Landline: +91-731-358-2568
Email: conceptutorials@outlook.com
Hours: Mon–Sat 6AM–8PM (Morning: 6AM–12PM, Evening: 2PM–8PM), Test Series: Sundays

## Results (2025 Batch)
- Ojasvee Vatsa: JEE Mains 99.51 percentile, AIR 32
- Avi Verma: JEE Mains 99.34 percentile, AIR 35
- Pranav Adkar: JEE Mains 99.20 percentile
- Devansh Parmar: JEE Mains 98.87 percentile
- Mohammad Husain: JEE Mains 98.7 percentile

## Results (2024 Batch)
- Naina Mittal: IIT Delhi
- Eshita Bhati: IIT Roorkee
- Neil Chitale: IIT Bhilai
- Naqiya Barnagarwala: NIT Trichy

## Courses Offered
IIT JEE Main, IIT JEE Advanced, Class 11th Foundation, Class 12th Intensive,
Class 10th, Class 9th, NTSE, Crash Course, Test Series (weekly)

## Full site
https://conceptutorials.com/
```

---

### H5. Fix Favicon
**File:** `index.html`
**Time:** 5 minutes

The `favicon.ico` already exists in `/public/favicon.ico` but is unused. Update `index.html`:
```html
<!-- Remove: -->
<link rel="icon" href="/logo.jpg" />

<!-- Add: -->
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="apple-touch-icon" href="/logo.jpg" />
<meta name="theme-color" content="#0a0e1a" />
```

---

### H6. Claim Both Google Business Profile Listings
**Time:** 1–2 hours + 1–2 days for verification postcard
**Impact:** Without GBP, the institute does not appear in Google Maps local pack.

1. Go to `business.google.com`
2. Search for "Concept Tutorials, Lokmanya Nagar, Indore" — claim if found
3. Search for "Concept Tutorials, Vidhyanchal Nagar, Indore" — claim or create
4. Primary category: "Coaching Centre" (India-specific GBP category)
5. Add all 9 courses as "Services"
6. Upload minimum 10 photos per location (classrooms, exterior, faculty, result boards)
7. After verification: Get the GBP short URL and add a "Leave us a Google Review" link to the Contact section

---

## MEDIUM — Fix Within 1 Month

### M1. Add Course Schema (6 courses)
**File:** `index.html`
**Time:** 1 hour
Add Course JSON-LD blocks for IIT JEE Main, JEE Advanced, Class 11, Class 12, NTSE, and Crash Course. See `FULL-AUDIT-REPORT.md` for complete JSON.

---

### M2. Add FAQPage Schema (AI Citation Benefit)
**File:** `index.html`
**Time:** 1 hour
Add a FAQPage JSON-LD block with 8 questions covering: courses, locations, timings, batch size, fee info, online vs offline, admission process, NTSE preparation. This does NOT produce Google rich results for commercial sites but IS consumed by ChatGPT, Perplexity, and Google AI Overviews.

---

### M3. Add Google Maps Embeds to Contact Section
**File:** `src/components/Contact.tsx`
**Time:** 30 minutes
After claiming GBP, get the embed iFrame code for each branch. Add below the branch address cards.

---

### M4. Add FAQ Section to Page
**File:** `src/pages/Index.tsx` + create `src/components/FAQ.tsx`
**Time:** 2–3 hours
Create a visible FAQ section with at least 8 questions. Suggested questions:
- What is the batch size at Concept Tutorials?
- What is the fee structure? (or: "Contact us for current fee structure")
- Do you offer online classes?
- How do I get admission?
- What study materials are provided?
- What are the class timings?
- Do you have a hostel facility?
- How many IIT selections per year?

---

### M5. Add Faculty Profiles Section
**File:** Create `src/components/Faculty.tsx`
**Time:** 3–4 hours
Add minimum 4 faculty profiles: name, qualification (B.Tech IIT/NIT preferred), subject, years of experience, photo. This is the single largest E-E-A-T gap on the site.

---

### M6. Fix Performance: Hero Image LCP
**File:** `index.html` + `src/components/Hero.tsx`
**Time:** 1 hour

Option A (quick): Move `hero-bg.jpg` to `/public/hero-bg.jpg` (stable URL) and add preload:
```html
<link rel="preload" as="image" href="/hero-bg.jpg" fetchpriority="high" />
```

Option B (better): In `Hero.tsx`, replace the CSS background-image approach with a real `<img>` element with `fetchpriority="high"` and `loading="eager"`, positioned absolutely to achieve the same visual effect.

---

### M7. Submit to Key Indian Education Directories
**Time:** 2–3 hours
Priority order:
1. JustDial (justdial.com) — most critical for Indore parents
2. UrbanPro (urbanpro.com)
3. Shiksha.com
4. CollegeDekho (collegedekho.com)
5. Careers360 (careers360.com)
6. Bing Places for Business

Use canonical NAP: `Concept Tutorials | 113, Lokmanya Nagar, Indore, Madhya Pradesh 452009 | +91-93003-60180`

---

### M8. Standardize NAP Across All Components
**Files:** `Header.tsx`, `Footer.tsx`, `Contact.tsx`, `NewBranchPopup.tsx`
**Time:** 1 hour

Canonical formats:
- Phone: `+91-93003-60180` (with country code and dashes)
- State: Always `Madhya Pradesh` (never "M.P.")
- Business name: Always `Concept Tutorials` (no "by Parag Kher" as part of the name)
- Add Branch 2 to Footer contact info

---

### M9. Implement Static Pre-rendering
**Files:** `vite.config.ts`, `package.json`
**Time:** 2–4 hours
**Impact:** Solves the core SPA crawlability issue without a full framework migration.

Install and configure `vite-plugin-prerender`:
```bash
npm install vite-plugin-prerender
```

In `vite.config.ts`:
```ts
import { PrerenderPlugin } from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    PrerenderPlugin({ routes: ['/'] })
  ]
})
```

This generates a static `index.html` with all content at build time. All AI crawlers, secondary crawlers, and social sharing bots will see the full content.

---

## LOW — Backlog (90+ Days)

### L1. Add Year-by-Year Results Data
Create a Results section or page showing annual IIT/NIT selections from 2020–2026. This is the highest-authority content type for coaching institutes and will attract organic backlinks from local news and education forums.

### L2. Start a YouTube Channel
Create a YouTube channel for Parag Kher with:
- Faculty introduction video
- Short concept explanation videos (5–10 min) for JEE topics
- Result announcement videos after each JEE result
- Location tags: "Indore", "Lokmanya Nagar"

YouTube presence is the #1 off-site authority signal for AI citation in the education sector.

### L3. Build a Review Generation Workflow
After each JEE result announcement:
1. Send WhatsApp broadcast to enrolled students: "Congratulations! Please share your experience: [GBP review link]"
2. Print QR code cards pointing to review page — give to students at enrollment
3. Respond to every review within 24 hours
Target: 1 new Google review every 10 days per location

### L4. Create Individual Course Pages
Add React Router routes for:
- `/courses/iit-jee-main`
- `/courses/iit-jee-advanced`
- `/courses/ntse`
- `/courses/crash-course`

Each page: exam overview, Concept Tutorials approach, syllabus coverage, testimonials from students in that course, CTA to enroll.

### L5. Add Aggregate Results Section
Replace the 12-testimonial slider with a structured results table:
| Year | JEE Advanced Selections | JEE Mains Top Percentile | NTSE Qualifiers |
|---|---|---|---|
| 2025 | X | 99.51 (AIR 32) | X |
| 2024 | 3 (IIT Delhi, Roorkee, Bhilai) | - | X |
...

### L6. Fix Scroll Throttling (INP)
**File:** `src/components/Header.tsx`
Wrap the scroll event handler in `requestAnimationFrame` to throttle:
```tsx
let ticking = false;
const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      // existing scroll logic
      ticking = false;
    });
    ticking = true;
  }
};
```

### L7. Migrate to Branded Domain Email
Change from `conceptutorials@outlook.com` to `info@conceptutorials.com` (or `admissions@conceptutorials.com`). Free Outlook email is a minor trust signal issue for professional institutions.

### L8. Add WebSite Schema with SearchAction
Once a search function exists (or a Google Custom Search is added):
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Concept Tutorials",
  "url": "https://conceptutorials.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://conceptutorials.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### L9. Add Review Schema After Collecting Google Reviews
Once 3+ Google reviews are collected, add `aggregateRating` to the LocalBusiness schema and add individual `Review` schema nodes for alumni testimonials.

---

## Estimated Impact by Priority Tier

| Tier | Actions | Time Investment | Expected Score Lift |
|---|---|---|---|
| Critical (C1–C8) | Fix sitemap, testimonials, OG tags, schema, robots, credentials | ~8 hours | +15 points (to ~46) |
| High (H1–H6) | Fix nav links, tel:, legal pages, llms.txt, GBP | ~12 hours | +12 points (to ~58) |
| Medium (M1–M9) | Schema expansion, Maps, FAQ, Faculty, pre-render, citations | ~20 hours | +10 points (to ~68) |
| Low (L1–L9) | Results page, YouTube, review funnel, course pages | Ongoing | +4–8 points (to ~72–76) |

---

## Validation Tools

After implementing Critical changes:
- **Google Rich Results Test:** `https://search.google.com/test/rich-results` — test schema
- **Schema.org Validator:** `https://validator.schema.org` — validate JSON-LD
- **Google Search Console:** Submit the fixed sitemap, check for coverage errors
- **PageSpeed Insights:** `https://pagespeed.web.dev` — measure CWV after pre-render
- **Open Graph Debugger:** `https://developers.facebook.com/tools/debug/` — test OG tags
- **Twitter Card Validator:** `https://cards-dev.twitter.com/validator`

---

*Action plan generated by Claude Code SEO Audit Engine — March 28, 2026*
