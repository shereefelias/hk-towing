---
name: seo-schema-markup
description: Add structured data (schema markup) to any website page to enable rich results in Google Search. Use this skill whenever the user wants to add schema markup, structured data, JSON-LD, or rich snippets to their website; when they want star ratings or FAQ dropdowns to appear in search results; when they ask "how do I get stars in Google Search", "how do I add schema", "what is structured data", "how do I get rich results", or when building or auditing tour pages, business homepages, blog posts, FAQ pages, or review sections. Works for any industry but includes specialized guidance for travel, tour operators, and local businesses. Always validate output at search.google.com/test/rich-results.
---

# SEO Schema Markup

A skill for implementing structured data (schema markup) that enables rich results in Google Search. Based on Google's official structured data documentation and schema.org specifications.

## What Schema Markup Does

Schema markup is JSON-LD code added to a page's `<head>` that tells Google *explicitly* what the content is. Without it, Google guesses. With it, Google can show visual enhancements in search results:

- ⭐⭐⭐⭐⭐ Star ratings under search results
- FAQ dropdowns directly in search (expandable Q&As without clicking)
- Breadcrumb trail showing site hierarchy in the URL
- Price, availability, and booking info for tours/products
- Business hours, phone, map info for local businesses
- Article author name and publication date

These "rich results" increase click-through rate significantly — often 20–30% — because they take up more visual space and provide information that makes users more confident before clicking.

## Implementation Format

Always use **JSON-LD** (not Microdata or RDFa — Google prefers JSON-LD).

Place this in the `<head>` section of the HTML:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TypeGoesHere",
  "property": "value"
}
</script>
```

Multiple schema types on one page: use an array, or multiple separate `<script>` blocks.

---

## Schema Selection by Page Type

### Homepage
**Use:** Organization + LocalBusiness (or industry-specific subtype)
**Enables:** Business knowledge panel, brand sitelinks

### Tour / Experience Pages
**Use:** TouristTrip (or Product) + AggregateRating + FAQPage + BreadcrumbList
**Enables:** Star ratings, FAQ dropdowns, breadcrumb trail

### Blog Posts / Articles
**Use:** Article + BreadcrumbList
**Enables:** Article-style rich result with author/date

### FAQ Page or FAQ Section
**Use:** FAQPage
**Enables:** Expandable FAQ directly in search results (high CTR impact)

### Contact / About Page
**Use:** LocalBusiness + Organization
**Enables:** Business details in search

### Review Pages / Testimonials
**Use:** Review or AggregateRating (attached to a Product/Service type)
**Enables:** Star ratings in search results

---

## Schema Priority Matrix

| Schema Type | Ranking Impact | Rich Result Visibility | Difficulty | Priority |
|-------------|---------------|----------------------|------------|---------|
| LocalBusiness | Medium | Low | Easy | 🔴 Do first |
| BreadcrumbList | Low | Medium | Easy | 🔴 Do first |
| FAQPage | Low | Very High | Easy | 🔴 Do first |
| AggregateRating | Low | Very High | Medium | 🔴 Do first |
| Article | Low | Medium | Easy | 🟡 Do second |
| TouristTrip | Medium | Medium | Medium | 🟡 Do second |
| Organization | Medium | Low | Easy | 🟡 Do second |

---

## Implementation Workflow

### Step 1: Identify page type and select schema types
Refer to the Schema Selection table above.

### Step 2: Gather the required data
For each schema type, collect:
- Business: name, URL, address, phone, hours, social links
- Tours: name, description, price, availability, itinerary
- Reviews: rating value, review count, individual reviews
- FAQ: questions and answers (must be genuinely on the page)

**Critical rule: Schema must reflect what's actually on the page.** Don't add schema for content that isn't visible to users — Google penalizes this.

### Step 3: Write the JSON-LD
Use the templates in `references/schema-templates.md` as starting points. Customize all placeholder values.

### Step 4: Add to the page
In WordPress: Use a plugin like Rank Math, Yoast SEO, or add custom JSON-LD via a child theme's `functions.php` or a header/footer code plugin.

```php
// Add to WordPress functions.php for sitewide schema
function add_custom_schema() {
    if (is_front_page()) {
        echo '<script type="application/ld+json">';
        echo json_encode($your_schema_array);
        echo '</script>';
    }
}
add_action('wp_head', 'add_custom_schema');
```

### Step 5: Validate
Test every page at: **search.google.com/test/rich-results**

Check for:
- No errors (errors prevent rich results)
- Warnings (can often be ignored unless critical fields)
- Preview of what the rich result will look like

### Step 6: Submit to Search Console
After adding schema to pages, request re-indexing via Search Console → URL Inspection → Request Indexing. Rich results typically appear within days to weeks.

---

## Common Schema Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Schema for content not on the page | Google penalty for misleading markup | Only schema what's visible to users |
| Fake or inflated ratings | Spam policy violation | Use only genuine review counts and ratings |
| Missing required fields | Schema invalid, no rich result | Check Rich Results Test for required fields |
| Wrong data types | Validation errors | Strings must be strings, numbers must be numbers |
| Dates in wrong format | Errors | Use ISO 8601: `"2025-01-15"` not `"January 15, 2025"` |
| Multiple conflicting schemas | Confuses Google | Use consistent data across all schema on a page |
| Schema only in JS (not HTML) | May not be indexed | Put in static HTML where possible |

---

## Google's Rules for Schema

1. **Only mark up content visible to users** — hidden or conditional content doesn't qualify
2. **No fake reviews** — AggregateRating must reflect genuine customer reviews
3. **Accuracy required** — all schema data must accurately represent the page content
4. **No promotional content in schema** — don't stuff keywords into schema properties
5. **Keep it updated** — outdated schema (old prices, discontinued tours) can cause issues

Violating these rules can result in a **manual action** that removes all rich results from your site until resolved via Search Console.

---

## WordPress-Specific Implementation

### Option 1: Rank Math SEO (Recommended)
- Free tier includes schema for most types
- GUI for adding FAQPage, Article, LocalBusiness, Product
- Auto-generates BreadcrumbList
- Install: Plugins → Add New → search "Rank Math SEO"

### Option 2: Yoast SEO
- Free tier includes basic schema
- Premium adds more types
- Integrates with WooCommerce for product schema

### Option 3: Custom Code (Header/Footer Scripts Plugin)
For custom JSON-LD not covered by plugins:
- Install "Insert Headers and Footers" plugin
- Add JSON-LD to the header section
- Use conditional PHP to target specific page types

### Option 4: Per-Page Custom Fields
Use Advanced Custom Fields + custom PHP to output schema dynamically based on page content (best for large sites with many tour pages).

---

## Reference Files

- `references/schema-templates.md` — Complete JSON-LD templates for all common types
- `references/wordpress-implementation.md` — WordPress-specific setup guides

See `../seo-technical-audit/references/schema-examples.md` for ready-to-use examples populated with sample data.
