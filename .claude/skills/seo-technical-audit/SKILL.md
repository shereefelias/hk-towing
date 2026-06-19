---
name: seo-technical-audit
description: Run a comprehensive Google SEO technical audit on any website. Use this skill whenever the user wants to audit a website for SEO issues, check if a site is crawlable and indexable, review technical health, evaluate Core Web Vitals, check schema markup, inspect URL structure, verify sitemaps and robots.txt, identify why pages aren't ranking, or get a technical SEO checklist. Trigger on phrases like "audit my site", "check my SEO", "why isn't my site ranking", "technical SEO review", "is my site crawlable", "check my schema", or when someone shares a URL and asks how to improve its Google visibility.
---

# Google SEO Technical Audit

A systematic audit of a website's technical SEO health based on Google Search Central documentation. The goal is to identify what's blocking Google from crawling, indexing, or ranking the site — and provide specific, prioritized fixes.

## How Google Works (Context for the Audit)

Google operates in three stages — a site can fail at any one:
1. **Crawling** — Googlebot discovers and downloads pages via links, sitemaps, and known URLs
2. **Indexing** — Google analyzes content, picks a canonical URL, stores it in the index
3. **Serving** — Google decides whether to show the page for a given query

Audit each stage in order. A crawl block makes indexing irrelevant. An index block makes content quality irrelevant.

---

## Audit Process

### 1. Crawlability Check

Verify Googlebot can reach and download the pages.

**robots.txt** (`domain.com/robots.txt`)
- Does it exist?
- Are any important pages or directories accidentally blocked with `Disallow`?
- Is the sitemap URL listed in robots.txt?
- Red flag: `Disallow: /` blocks the entire site

**Sitemap** (`domain.com/sitemap.xml`)
- Does an XML sitemap exist?
- Is it submitted in Google Search Console?
- Does it include all important pages (tour pages, blog posts, key landing pages)?
- Are URLs in the sitemap actually live and returning 200 status?
- Flag any URLs returning 3xx, 4xx, or 5xx in the sitemap

**Server Response Codes**
- 200: OK
- 301: Permanent redirect (passes link equity — good for URL changes)
- 302: Temporary redirect (doesn't pass equity — avoid for permanent moves)
- 404: Not found
- 500: Server error (signals Googlebot to slow crawl rate)

**JavaScript Rendering**
- Is key content loaded via JavaScript? If so, Google may miss it on first crawl
- Check: disable JavaScript in browser and see if main content still appears
- Best practice: critical content should be in the HTML source, not JS-dependent

**Links**
- Are internal links using standard `<a href="...">` tags? (Not JavaScript-triggered buttons)
- Are there orphaned pages (no internal links pointing to them)?

---

### 2. Indexing Check

Verify pages are getting indexed and aren't being blocked post-crawl.

**Google Search Console**
- Run `site:domain.com` in Google to see approximate indexed pages
- Check Search Console → Index → Pages for:
  - "Not indexed" reasons (noindex tag, soft 404, duplicate without canonical, crawled but not indexed)
  - Which pages ARE indexed vs. which should be

**noindex Tags**
- Check `<meta name="robots" content="noindex">` isn't on important pages
- Check `X-Robots-Tag: noindex` in HTTP headers
- WordPress: check "Discourage search engines" setting under Settings → Reading

**Canonical Tags** (`rel="canonical"`)
- Every page should specify its canonical URL
- Pagination, filtered views, and duplicate content should point to the primary URL
- HTTP and HTTPS versions should canonical to HTTPS
- www and non-www should canonical to one consistent version
- Check: `<link rel="canonical" href="https://example.com/page/">` in `<head>`

**Duplicate Content**
- Are the same pages accessible via multiple URLs? (with/without trailing slash, http vs https, www vs non-www)
- Implement consistent redirects + canonical tags to resolve

**Content Quality Signals**
- Very thin pages (few sentences) may be crawled but not indexed
- Pages with no unique content relative to other pages on the site
- Pages Google classifies as "soft 404" (no useful content despite 200 status)

---

### 3. On-Page Technical Elements

**Title Tags** (`<title>`)
- Unique per page — no two pages should have the same title
- Descriptive and accurate — Google may rewrite if it's misleading, keyword-stuffed, or too generic
- Recommended length: ~50–60 characters (longer gets truncated in results)
- Include the primary keyword naturally
- Format: `Primary Keyword — Site Name` or `Specific Page Description | Brand`

**Meta Descriptions**
- Not a ranking factor, but affects click-through rate
- Unique per page
- 150–160 characters
- Summarize what the visitor gets from the page
- Google rewrites ~70% of them — write them anyway as they influence the rewrite

**Heading Structure**
- One `<h1>` per page — should match or closely relate to the title
- `<h2>`, `<h3>` used hierarchically for content sections
- Headings should describe content, not just style it

**Image Optimization**
- `alt` attributes on all images (what does the image show — be descriptive)
- Compressed file sizes (use WebP format where possible)
- Descriptive filenames (`egypt-nile-cruise.jpg` not `IMG_4392.jpg`)
- Lazy loading for images below the fold

**URL Structure**
- Short, descriptive, lowercase with hyphens (`/egypt-nile-cruise-10-days/` not `/tour?id=47`)
- No special characters or unnecessary parameters
- Consistent structure (e.g., `/tours/[tour-name]/`, `/blog/[post-slug]/`)
- Avoid changing URLs once indexed (causes ranking loss; requires 301 redirects if changed)

---

### 4. Core Web Vitals (Page Experience)

Google's speed and usability ranking signals. Check via PageSpeed Insights (pagespeed.web.dev).

| Metric | What It Measures | Good | Needs Work | Poor |
|--------|-----------------|------|------------|------|
| **LCP** (Largest Contentful Paint) | How fast main content loads | < 2.5s | 2.5–4s | > 4s |
| **INP** (Interaction to Next Paint) | Page responsiveness to clicks | < 200ms | 200–500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | How much elements jump during load | < 0.1 | 0.1–0.25 | > 0.25 |

**Common LCP fixes:**
- Compress and properly size hero images
- Use a CDN
- Eliminate render-blocking resources (defer non-critical JS/CSS)
- Preload the LCP image: `<link rel="preload" as="image" href="hero.jpg">`

**Common CLS fixes:**
- Set explicit `width` and `height` on images and video embeds
- Don't inject content above existing content (ads, banners, cookie notices)
- Reserve space for embeds before they load

**HTTPS**
- Site must be served over HTTPS — not optional
- Check for mixed content warnings (HTTP resources on HTTPS pages)

**Mobile Usability**
- Google uses mobile-first indexing: the mobile version is what gets indexed
- Test at search.google.com/test/mobile-friendly
- No text too small to read, no elements too close to tap, no horizontal scrolling
- If mobile has LESS content than desktop, that's what Google indexes

**Intrusive Interstitials**
- Pop-ups that cover content on mobile can be penalized
- Cookie notices and login dialogs exempt if appropriately sized

---

### 5. Structured Data (Schema Markup)

Structured data tells Google exactly what your content is, enabling rich results (star ratings, FAQ dropdowns, etc. in search). Use JSON-LD format, placed in `<script type="application/ld+json">` in the `<head>`.

**Validate at:** search.google.com/test/rich-results

**Priority schema types by page:**

| Page Type | Recommended Schema |
|-----------|-------------------|
| Homepage | Organization, LocalBusiness |
| Tour/product pages | TouristTrip or Product + Review |
| Blog posts | Article + BreadcrumbList |
| Contact/about | LocalBusiness + Organization |
| FAQ sections | FAQPage |
| Any page | BreadcrumbList |

See `references/schema-examples.md` for ready-to-use JSON-LD code for each type.

---

### 6. Link Profile

**Internal Links**
- Do important pages have multiple internal links pointing to them?
- Is the navigation logical and crawlable?
- Are there broken internal links (404)?

**External Links (Backlinks)**
- Google's PageRank is still a core signal — authoritative sites linking to you matters
- Check current backlinks via Google Search Console → Links
- No need to manually request links, but earning them through good content is the path

**Outbound Links**
- Add `rel="nofollow"` or `rel="sponsored"` to paid/affiliate links
- Add `rel="nofollow"` to user-generated content links

---

## Audit Output Format

Always structure findings in this order:

### 🔴 Critical Issues (Fix First — Blocking Crawl or Index)
List issues that prevent Google from crawling or indexing the site

### 🟡 Important Issues (Fix Next — Affecting Rankings)
List issues that hurt ranking potential but don't block indexing

### 🟢 Opportunities (Improve Further — Competitive Edge)
List improvements that could boost visibility or click-through rate

### 📋 Technical Checklist Summary
Quick pass/fail status for each audit area

---

## Tools to Use During Audit

- **Google Search Console** (search.google.com/search-console) — indexing, performance, manual actions
- **PageSpeed Insights** (pagespeed.web.dev) — Core Web Vitals
- **Rich Results Test** (search.google.com/test/rich-results) — schema validation
- **`site:domain.com`** in Google — approximate index count
- **Google's URL Inspection Tool** (in Search Console) — check individual page crawl status

---

## Reference Files

- `references/schema-examples.md` — Ready-to-use JSON-LD code for all schema types
- `references/checklist.md` — One-page printable audit checklist

---

## Image SEO

Images appear in Google Images, Discover, AI Overviews, and regular search results. They are a separate, significant traffic channel. Audit each point:

### Discovery and Indexing

- [ ] **Use `<img>` elements with `src` attribute** — Google does NOT index CSS background images (`background-image: url(...)`)
- [ ] **Alt text present and descriptive** — worst: missing; bad: keyword-stuffed; best: describes what's in the image in context
  - Bad: `<img src="egypt.jpg" alt="egypt tour egypt pyramids egypt travel">`
  - Good: `<img src="egypt.jpg" alt="Tourists at the Great Pyramid of Giza at sunset">`
- [ ] **Descriptive filenames** — `egypt-pyramids-giza.jpg` beats `IMG00234.jpg`
- [ ] **Image sitemap submitted** — especially important for images hosted on CDN domains; CDN domains can be listed in image sitemaps (verify ownership in Search Console)
- [ ] **Supported formats only** — BMP, GIF, JPEG, PNG, WebP, SVG, AVIF (match file extension to actual format)

### Responsive Images

- [ ] **Use `srcset` or `<picture>` element** for multiple sizes — provide fallback `src` attribute always
- [ ] **Avoid lazy-loading images** above the fold — can delay LCP
- [ ] **Optimize for speed** — compress images; use WebP or AVIF; images are typically the #1 page weight contributor

### Preferred Image Metadata

Control which image Google uses for rich results, Discover previews, and AI Overviews:

- [ ] **`og:image` meta tag** — specify the primary image for social sharing and Discover:
  ```html
  <meta property="og:image" content="https://site.com/images/best-image.jpg">
  ```
- [ ] **schema.org `primaryImageOfPage` or `image` property** — set on Article, BlogPosting, or WebPage:
  ```json
  {"@type": "BlogPosting", "image": "https://site.com/images/best-image.jpg"}
  ```
- [ ] **Avoid logos or text-heavy images** as og:image — Google may ignore them

### Discover-Specific Image Requirements

Images used in Discover must meet stricter specs:

- [ ] **1200 px wide minimum**
- [ ] **300,000+ total pixels** (e.g., 1280×720 ✓, 800×600 ✗)
- [ ] **16:9 aspect ratio** for best display
- [ ] **`max-image-preview:large` enabled:**
  ```html
  <meta name="robots" content="max-image-preview:large">
  ```
  Without this tag, Google won't use the large image in Discover even if the image is large.

### Image Audit Checklist Summary

| Check | Pass Criteria |
|-------|--------------|
| HTML `<img>` tags | All content images use `<img src="...">`, not CSS backgrounds |
| Alt text | Present, descriptive, not keyword-stuffed, not missing |
| Filenames | Descriptive English words, hyphens, not generic (img001.jpg) |
| File size | Compressed — use PageSpeed Insights to flag oversized images |
| Format | WebP or AVIF preferred; always provide fallback `src` |
| og:image | Set on all important pages; 1200×630 minimum |
| max-image-preview | Set to `large` on article/blog pages |
| Image sitemap | Submitted for important images, especially on CDN |
