# Technical SEO Audit Checklist

Quick pass/fail checklist. Use this as the summary output at the end of every audit.

---

## Crawlability
- [ ] robots.txt exists and doesn't block important pages
- [ ] Sitemap.xml exists and is submitted to Search Console
- [ ] All sitemap URLs return 200 status
- [ ] Key content visible without JavaScript
- [ ] Internal links use standard `<a href>` tags
- [ ] No orphaned important pages

## Indexing
- [ ] No accidental `noindex` on important pages
- [ ] `rel="canonical"` on every page pointing to the correct URL
- [ ] HTTP redirects to HTTPS (301)
- [ ] www redirects to non-www (or vice versa, consistently)
- [ ] No duplicate content accessible at multiple URLs
- [ ] WordPress "Discourage search engines" is OFF
- [ ] Search Console shows pages indexed (not flagged as errors)

## On-Page Elements
- [ ] Unique `<title>` on every page (50–60 chars)
- [ ] Unique meta description on every page (150–160 chars)
- [ ] One `<h1>` per page
- [ ] All images have descriptive `alt` attributes
- [ ] Descriptive, hyphenated, lowercase URLs
- [ ] No broken internal links (404)

## Core Web Vitals (PageSpeed Insights)
- [ ] LCP < 2.5 seconds
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] Site served over HTTPS
- [ ] No mixed content warnings
- [ ] Passes Mobile Usability test

## Structured Data
- [ ] LocalBusiness schema on homepage
- [ ] Organization schema sitewide
- [ ] TouristTrip or Product schema on tour pages
- [ ] FAQPage schema on pages with FAQ sections
- [ ] Article schema on blog posts
- [ ] BreadcrumbList on all interior pages
- [ ] ReviewSnippet where reviews exist
- [ ] All schema validates at Rich Results Test

## Link Profile
- [ ] Important pages have multiple internal links
- [ ] No broken internal links
- [ ] Paid/affiliate links use `rel="sponsored"`
- [ ] Search Console → Links shows backlinks from relevant sites
