# Full SEO Audit Report: Concept Tutorials (conceptutorials.com)

**Date:** March 28, 2026
**Business:** Concept Tutorials — Offline IIT JEE Coaching Institute, Indore, M.P.
**Type:** Brick-and-mortar educational institute (2 locations)
**Tech Stack:** React 18 SPA, Vite, TypeScript, TailwindCSS, React Router v6
**Audited by:** Claude Code SEO Audit (5 specialist agents)

---

## Overall SEO Health Score: 31 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 34 / 100 | 7.5 |
| Content Quality / E-E-A-T | 23% | 38 / 100 | 8.7 |
| On-Page SEO | 20% | 28 / 100 | 5.6 |
| Schema / Structured Data | 10% | 0 / 100 | 0.0 |
| Performance (CWV) | 10% | 30 / 100 | 3.0 |
| AI Search Readiness (GEO) | 10% | 26 / 100 | 2.6 |
| Local SEO | 5% | 28 / 100 | 1.4 |
| Images | 5% | 55 / 100 | 2.8 |
| **TOTAL** | **100%** | | **31 / 100** |

---

## Executive Summary

Concept Tutorials has a genuinely strong real-world story: 30+ years of operation, 12,500+ students trained, AIR 32 and AIR 35 in JEE Mains 2025, IIT Delhi and IIT Roorkee placements. **The website does not reflect this credibility.** A cluster of urgent defects actively damages trust and blocks search visibility:

1. **The site is a pure client-side SPA** — all content is JavaScript-rendered. AI crawlers and most secondary crawlers receive an empty HTML shell.
2. **Sitemap is 75% broken** — it lists 3 URLs (`/about`, `/courses`, `/contact`) that don't exist as routes, returning 404 pages.
3. **Zero structured data** — no LocalBusiness, no Course, no Review schema of any kind.
4. **8–10 testimonials contain identical wrong text** — "I got selected as Pilot in Indian Air Force through NDA" appears on JEE/IIT achiever profiles.
5. **Review text in Alumni component is never rendered** — the `testimonial.review` field is in the data but the JSX template never outputs it to the DOM.
6. **No Open Graph tags** — social sharing (WhatsApp, Instagram) produces blank previews.
7. **Legal pages are placeholders** — Privacy Policy, Terms, Refund Policy all link to `#`.

### Top 5 Critical Issues
1. Pure client-side rendering — content invisible to crawlers
2. Broken sitemap with non-existent routes
3. Zero structured data / JSON-LD
4. Duplicate/fabricated testimonial text (NDA Pilot on JEE profiles)
5. Missing Open Graph tags (critical for WhatsApp sharing in India)

### Top 5 Quick Wins
1. Fix `sitemap.xml` to only list `/` — 30 minutes
2. Add OG/Twitter tags to `index.html` — 30 minutes
3. Add canonical tag to `index.html` — 5 minutes
4. Add LocalBusiness JSON-LD to `index.html` — 2 hours
5. Fix the broken tel: link `+91919...` in `Facilities.tsx` — 5 minutes

---

## Technical SEO — Score: 34 / 100

### Architecture: Pure CSR SPA (CRITICAL)

The entire site is `<div id="root"></div>` + a JavaScript bundle. Googlebot crawls this in a **second wave** that can lag days or weeks. Bingbot, GPTBot, ClaudeBot, and PerplexityBot receive empty HTML. All 12,500+ student stats, all addresses, all testimonials, and all course names are invisible until JavaScript executes.

**Solutions (in priority order):**
1. Add `vite-plugin-prerender` or `react-snap` for static HTML snapshots at build time (fastest fix, no architecture change needed)
2. Migrate to Remix (React Router v7 — nearly identical API, adds SSR)
3. Use Vite's built-in SSR mode

### Sitemap — BROKEN

`public/sitemap.xml` lists 4 URLs. Only 1 exists:
- ✅ `https://conceptutorials.com/` — real
- ❌ `https://conceptutorials.com/about` — 404 (anchor section, not a route)
- ❌ `https://conceptutorials.com/courses` — 404 (listed only in footer, no route)
- ❌ `https://conceptutorials.com/contact` — 404 (anchor section, not a route)

**Root cause:** `scripts/generate-sitemap.js` hardcodes phantom routes. Fix the script and regenerate. Until real sub-pages exist, the sitemap should contain only `https://conceptutorials.com/`.

### robots.txt — Needs Fixes

Current issues:
- No `Sitemap:` directive
- `User-agent: *` rule is last (should be first)
- No AI crawler directives (GPTBot, ClaudeBot, PerplexityBot)
- Twitterbot / facebookexternalhit entries serve no SEO purpose

**Recommended robots.txt:**
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

### Meta Tags — Missing Critical Tags

**Present:** charset, viewport, title, meta description
**Missing:**
- `<link rel="canonical">` — no canonical tag
- Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- Twitter Card tags
- Geographic meta tags (geo.region, geo.placename)
- Apple touch icon / web manifest

**Recommended additions to `index.html`:**
```html
<link rel="canonical" href="https://conceptutorials.com/" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://conceptutorials.com/" />
<meta property="og:title" content="Concept Tutorials | IIT JEE Coaching in Indore" />
<meta property="og:description" content="Indore's premier offline IIT JEE coaching with 30+ years of excellence. AIR 32 & AIR 35 in JEE Mains 2025. Expert faculty, small batches." />
<meta property="og:image" content="https://conceptutorials.com/og-image.jpg" />
<meta property="og:locale" content="en_IN" />
<meta property="og:site_name" content="Concept Tutorials" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Concept Tutorials | IIT JEE Coaching in Indore" />
<meta name="twitter:description" content="30+ years of IIT JEE excellence in Indore. 12,500+ students trained." />
<meta name="twitter:image" content="https://conceptutorials.com/og-image.jpg" />
<meta name="geo.region" content="IN-MP" />
<meta name="geo.placename" content="Indore" />
<meta name="geo.position" content="22.7196;75.8577" />
<meta name="ICBM" content="22.7196, 75.8577" />
```

**Note:** Create a 1200×630px OG image (`/public/og-image.jpg`) showing the Concept Tutorials logo, "IIT JEE Coaching in Indore", and key stats (AIR 32, 30+ years).

### Page Title — Needs Fix

**Current:** `Concept Tutorials | An Institute for - JEE Mains & ADV/XII - VIII + NTSE` (74 chars, no city name)
**Problems:** Missing "Indore", too long for SERP display (~55-60 char limit), "ADV" not a known search term, cluttered with dashes and plus signs
**Recommended:** `IIT JEE Coaching in Indore | Concept Tutorials` (47 chars)

### Navigation — `<button>` Instead of `<a>` Tags

All nav items in `Header.tsx` and `Footer.tsx` use `<button onClick={scrollToSection}>` instead of `<a href="#section">`. Googlebot follows `<a>` tags but does not simulate button clicks. The site's internal link graph is effectively **zero links** as seen by crawlers.

**Fix in `Header.tsx`:** Replace each `<button>` with:
```tsx
<a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>About</a>
```

### Security — EmailJS Credentials Exposed

`src/components/Contact.tsx` line ~43 hardcodes:
- Public key: `IJzHJ2bV3iE2b_iQx`
- Service ID: `service_k95g5tr`
- Template ID: `template_w7ivdov`

**Immediate action:** Enable domain restriction for this key in the EmailJS dashboard (allow only `conceptutorials.com`). Then move to a `.env` file:
```
VITE_EMAILJS_PUBLIC_KEY=IJzHJ2bV3iE2b_iQx
VITE_EMAILJS_SERVICE_ID=service_k95g5tr
VITE_EMAILJS_TEMPLATE_ID=template_w7ivdov
```

### Core Web Vitals Risk

**LCP — HIGH RISK:** Hero background is a CSS `background-image` injected via React JS. Browser preload scanner cannot discover it. LCP will likely exceed 2.5s on average mobile connections.

**CLS — HIGH RISK:**
- NewBranchPopup fires at 800ms after mount (unexpected layout shift)
- Section scroll-reveal animations (opacity-0 → opacity-100) can contribute to CLS
- Swiper slider height depends on content before images load

**INP — MEDIUM RISK:** Unthrottled scroll event listener in `Header.tsx` checks `window.scrollY` and performs 4 `getElementById` lookups on every scroll event. On low-end Android devices (common in India's student demographic), this elevates INP.

**Fix for LCP:** Add a `<link rel="preload" as="image">` in `index.html` for the hero image URL (get the Vite-hashed URL at build time using a Vite plugin, or move the hero image to `/public/` with a stable URL):
```html
<link rel="preload" as="image" href="/hero-bg.jpg" fetchpriority="high" />
```

### Additional Technical Issues

| Issue | File | Severity |
|---|---|---|
| Broken tel: link `tel:+91919300360180` (duplicate country code) | `Facilities.tsx:137` | High |
| Favicon uses `.jpg` (exists but references wrong file; `favicon.ico` is in `/public/`) | `index.html` | Medium |
| Copyright year hardcoded as `© 2025` | `Footer.tsx` | Low |
| "Watch Demo Lectures" button links to `"#"` in `window.open` | `Contact.tsx:289` | Medium |
| `<html lang="en">` should be `lang="en-IN"` | `index.html` | Low |
| Large unused Radix UI dependencies in `package.json` | `package.json` | Low |

---

## Content Quality / E-E-A-T — Score: 38 / 100

| Dimension | Score |
|---|---|
| Experience | 32 / 100 |
| Expertise | 30 / 100 |
| Authoritativeness | 28 / 100 |
| Trustworthiness | 22 / 100 |

### Critical: Duplicate & Fabricated Testimonial Text

**File:** `src/components/Alumni.tsx`

8–10 of 12 testimonials share the identical text:
> "Thanks to Concept Tutorials structured approach and regular mock tests, I got selected as Pilot in Indian Air Force through NDA. The teachers were always available for doubt clearing sessions."

This text is:
1. **Factually wrong** — these students achieved IIT Delhi, IIT Roorkee, NIT Trichy, and JEE percentiles of 98–99.51. None are described as NDA selections.
2. **Copy-paste duplicates** — the same string across 8+ students
3. **Never displayed** — the `testimonial.review` field is defined in the data array but the JSX template in the Swiper slide (lines 179–207) never outputs `{testimonial.review}`. The text is both wrong AND invisible.

**Fix:** Either collect real testimonial quotes from students, or remove the review text from the data array and display only the name, achievement, photo, and year (which is what the UI currently shows anyway). If you want to add reviews, they should be genuine and unique per student.

### Missing Expertise Signals

- **No faculty profiles** — Parag Kher's name appears only as a subtitle and phone label. Zero information about his qualifications, teaching experience, or subject specialization. This is the single largest E-E-A-T gap.
- **No course details** — 9 courses listed in footer only with no descriptions, syllabi, or methodology
- **No aggregate results data** — 12 individual testimonials but no year-over-year selection count
- **No blog/resource content** — no topical authority signals

### Trustworthiness Deficits

- **Privacy Policy, Terms, Refund Policy** all link to `#` — legal requirement under India's DPDPA 2023 and Consumer Protection Rules
- **Single social media channel** (Instagram only) — for a 30-year institution
- **Outlook email** (`conceptutorials@outlook.com`) instead of branded domain email
- **Tagline** ("Our object of teaching a child is to enable him to study without a Teacher") appears to be a Swami Vivekananda quote — should be attributed

### Content Opportunities

| Missing Content | SEO Impact | Effort |
|---|---|---|
| Faculty profiles with qualifications | Very High | Medium |
| Year-by-year results table (2020–2026) | High | Low |
| Course detail sections with syllabus | High | Medium |
| FAQ section (fee, batch size, timings) | High | Low |
| Legal pages (Privacy, Terms, Refund) | High | Low–Medium |
| YouTube channel / demo lectures | High | High |
| Blog with JEE preparation articles | Medium–High | High |

---

## On-Page SEO — Score: 28 / 100

### Heading Structure

- **H1:** "Clear Concepts. Real Results. Your JEE & NEET Journey Starts Here." — Present but vague; better: "IIT JEE Coaching in Indore — Concept Tutorials"
- **H2:** Appropriate on each section (About, Alumni, Facilities, Contact)
- **H3:** Present in cards

### Keyword Coverage

- "IIT JEE coaching Indore" — present in Hero badge and subtitle ✅
- "Indore" — absent from title tag, absent from H1 ❌
- "offline coaching" — present in meta description ✅
- "30+ years" — present in stats ✅
- "small batch" — mentioned in Facilities ✅
- Course names — footer only, not in body headings ❌

### Internal Linking

Zero crawlable internal links. All navigation is JavaScript buttons. No `<a>` tags pointing to section anchors exist anywhere.

---

## Schema / Structured Data — Score: 0 / 100

**Zero structured data of any kind exists in the codebase.**

### Priority 1: EducationalOrganization + LocalBusiness (Head Office)

Place in `index.html` `<head>` as a static `<script type="application/ld+json">`:

```json
{
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": "https://conceptutorials.com/#organization",
  "name": "Concept Tutorials",
  "alternateName": "Concept Tutorials by Parag Kher",
  "description": "Indore's premier offline IIT JEE coaching institute with 30+ years of excellence. Coaching for JEE Main, JEE Advanced, NTSE, and Classes 9-12. Founded by Parag Kher.",
  "url": "https://conceptutorials.com",
  "logo": { "@type": "ImageObject", "url": "https://conceptutorials.com/logo.jpg" },
  "foundingDate": "1995",
  "founder": { "@type": "Person", "name": "Parag Kher" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "113, Lokmanya Nagar",
    "addressLocality": "Indore",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "452009",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "22.7196", "longitude": "75.8577" },
  "telephone": ["+917313582568", "+919300360180", "+919960839401"],
  "email": "conceptutorials@outlook.com",
  "sameAs": ["https://www.instagram.com/concept_tutorials_/"],
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "06:00", "closes": "12:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "14:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "08:00", "closes": "14:00" }
  ],
  "priceRange": "₹₹",
  "areaServed": { "@type": "City", "name": "Indore" },
  "knowsAbout": ["IIT JEE Main", "IIT JEE Advanced", "NTSE", "Physics for JEE", "Chemistry for JEE", "Mathematics for JEE"]
}
```

> **Replace coordinates** with exact Google Maps pin coordinates. Verify founding year with Parag Kher. Add `aggregateRating` only after real Google reviews are collected.

### Priority 2: Branch 2 (Vidhyanchal Nagar)

```json
{
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": "https://conceptutorials.com/#branch-vidhyanchal",
  "name": "Concept Tutorials - Vidhyanchal Nagar Centre",
  "branchOf": { "@id": "https://conceptutorials.com/#organization" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "36, Vidhyanchal Nagar, Behind Bhuteshwar Mandir",
    "addressLocality": "Indore",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "IN"
  },
  "telephone": ["+919300360180", "+919752676676", "+919960839401"],
  "email": "conceptutorials@outlook.com",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Sunday"], "opens": "12:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "14:00" }
  ]
}
```

### Priority 3: Course Schema (add 1 block per course)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "IIT JEE Main Coaching",
  "description": "Comprehensive offline coaching for IIT JEE Main covering Physics, Chemistry, and Mathematics. Students achieved 99.51 percentile (AIR 32) in 2025.",
  "provider": { "@id": "https://conceptutorials.com/#organization" },
  "educationalLevel": "Class 11 and 12",
  "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "Onsite", "inLanguage": ["hi", "en"] }
}
```

Repeat for: IIT JEE Advanced, Class 11th Foundation, Class 12th Intensive, NTSE, Crash Course.

### Priority 4: FAQPage (AI citation benefit)

Google no longer shows FAQ rich results for commercial sites, but FAQPage schema is consumed by ChatGPT, Perplexity, and Google AI Overviews. A ready-to-use block is in the Schema section of this audit (see ACTION-PLAN.md for the full JSON).

---

## Local SEO — Score: 28 / 100

### GBP Signals on Website: 0 of 7

No Google Maps embed, no "Get Directions" link, no review widget, no GBP URL anywhere on the site.

### NAP Inconsistencies Across Components

| Element | Issue |
|---|---|
| Phone format | 3 different formats: `93003 60180`, `9300360180`, `+91 93003 60180` |
| State abbreviation | "M.P." vs "Madhya Pradesh" inconsistent across components |
| Branch 2 | Completely absent from Footer |
| Business name | "Concept Tutorials" vs "Concept Tutorials by Parag Kher" mixed |

**Choose one canonical NAP format and apply everywhere:**
- Name: `Concept Tutorials`
- Address: `113, Lokmanya Nagar, Indore, Madhya Pradesh 452009`
- Phone: `+91-93003-60180`

### Missing Maps

Neither branch has a Google Maps embed in the Contact section. This is the #1 on-page GBP signal. Add:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=[YOUR-PLACE-ID]"
  width="100%" height="300" style="border:0" allowfullscreen loading="lazy">
</iframe>
```

### Title Tag Missing City Name

"Indore" does not appear in `<title>`. This is the most important geo-modifier for local search. Fix: `IIT JEE Coaching in Indore | Concept Tutorials`

### Citation Building Priority

For India coaching institutes:
1. **JustDial** — most important for Indore parents (claim immediately)
2. **UrbanPro** — high-traffic tutoring marketplace
3. **Shiksha.com** — India's largest education directory
4. **CollegeDekho** — strong for competitive exam prep
5. **Careers360** — education portal with institute profiles
6. **Google Business Profile** — claim both locations
7. **Bing Places** — claim both locations

---

## AI Search Readiness (GEO) — Score: 26 / 100

### What AI Crawlers See

When GPTBot, ClaudeBot, or PerplexityBot fetch `conceptutorials.com`, they receive:
```html
<div id="root"></div>
<script type="module" src="/assets/index-[hash].js"></script>
```
All content is invisible. These crawlers do not execute JavaScript.

### Missing: llms.txt

No `public/llms.txt` exists. Create `public/llms.txt`:

```
# Concept Tutorials

> Concept Tutorials is an offline IIT JEE coaching institute in Indore,
> Madhya Pradesh, India, founded by Parag Kher. Operating since 1995
> (30+ years), it has trained over 12,500 students across two campuses.

## About
Founded by Parag Kher. Two locations: 113 Lokmanya Nagar, Indore 452009
(Head Office) and 36 Vidhyanchal Nagar, Behind Bhuteshwar Mandir, Indore.

## Results (2025 Batch)
- Ojasvee Vatsa: JEE Mains 99.51 percentile, AIR 32
- Avi Verma: JEE Mains 99.34 percentile, AIR 35
- Pranav Adkar: JEE Mains 99.20 percentile
- Naina Mittal: IIT Delhi (2024)
- Eshita Bhati: IIT Roorkee (2024)

## Courses
IIT JEE Main, IIT JEE Advanced, Class 9–12 Foundation, NTSE, Crash Course, Test Series

## Contact
Phone: +91-93003-60180 | Email: conceptutorials@outlook.com
Hours: Mon–Sat 6AM–8PM, Test Series Sundays

## Full site
https://conceptutorials.com/
```

### robots.txt AI Crawler Directives

Add explicit Allow rules for GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot.

### Bug: Review Text Never Rendered

`src/components/Alumni.tsx` defines `testimonial.review` for all 12 testimonials, but the Swiper slide JSX (lines 179–207) never outputs `{testimonial.review}`. The card only renders name, achievement, photo, and year. The review text — even the 3–4 that are unique and correct — is invisible to both users and crawlers.

**Fix:** Add `{testimonial.review && <p className="text-sm text-muted-foreground mt-3">{testimonial.review}</p>}` inside the card's `relative z-10` div.

### Brand Presence

| Platform | Status |
|---|---|
| Instagram | Present (@concept_tutorials_) |
| YouTube | Not present (critical gap for coaching institutes) |
| Wikipedia/Wikidata | Not present |
| LinkedIn | Not present |
| JustDial | Unknown |
| Shiksha.com | Unknown |

---

## Images — Score: 55 / 100

**Positive:** Alumni photos use `alt={testimonial.name}` — correct.
**Issues:**
- Hero background is a CSS `background-image` — cannot have alt text; crawler sees no image
- No `og:image` for social sharing previews
- `favicon.ico` exists in `/public/` but `index.html` points to `/logo.jpg` instead
- No `loading="lazy"` on below-fold images (alumni photos)
- No `width`/`height` attributes on alumni `<img>` tags (CLS risk)

---

## Performance (CWV) — Score: 30 / 100 (estimated, not measured live)

| Metric | Risk Level | Primary Cause |
|---|---|---|
| LCP | HIGH | Hero image via CSS bg (not preloadable); JS bundle must execute first |
| CLS | HIGH | NewBranchPopup at 800ms; scroll-reveal opacity animations; Swiper height |
| INP | MEDIUM | Unthrottled scroll listener; rAF loop in MouseBackground |

**Quick CWV improvements:**
- Move hero background image to `/public/hero-bg.jpg`, add `<link rel="preload" as="image" href="/hero-bg.jpg" fetchpriority="high" />` in `index.html`
- Add `width` and `height` to all `<img>` elements
- Throttle the scroll listener in `Header.tsx` with debounce/rAF
- Consider delaying NewBranchPopup to 3s+ after page load

---

## Files Requiring Changes (Summary)

| File | Changes Needed |
|---|---|
| `index.html` | Canonical, OG tags, Twitter tags, geo meta, title fix, favicon fix, JSON-LD schema blocks, hero preload |
| `public/robots.txt` | Sitemap directive, wildcard first, AI crawler rules |
| `public/sitemap.xml` | Remove non-existent routes, keep only `/` |
| `scripts/generate-sitemap.js` | Fix routes array to match App.tsx routes |
| `src/components/Alumni.tsx` | Fix/replace duplicate testimonial text; add `{testimonial.review}` to JSX |
| `src/components/Header.tsx` | Replace `<button>` nav with `<a href="#section">` |
| `src/components/Footer.tsx` | Replace `<button>` nav with `<a>` tags; fix broken legal links |
| `src/components/Contact.tsx` | Move EmailJS keys to `.env`; fix legal page links |
| `src/components/Facilities.tsx` | Fix `tel:+91919300360180` → `tel:+919300360180` |
| `public/` | Add `llms.txt`, add `og-image.jpg` (1200×630px) |

---

*Report generated by Claude Code SEO Audit Engine — March 28, 2026*
*Powered by 5 parallel specialist agents: Technical SEO, Content Quality, Schema, Local SEO, GEO*
