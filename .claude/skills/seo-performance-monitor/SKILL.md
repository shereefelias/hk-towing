---
name: seo-performance-monitor
description: Monitor, analyze, and debug Google Search performance using Search Console data and Google's ranking systems knowledge. Use this skill whenever the user wants to analyze their Google Search performance, investigate a traffic drop, understand why a page stopped ranking, interpret Search Console data, debug indexing issues, understand the impact of a Google algorithm update, check Core Web Vitals performance, or figure out why a page isn't appearing in search results. Trigger on phrases like "my traffic dropped", "why did I lose rankings", "Search Console shows...", "my page isn't ranking", "Google algorithm update", "how do I use Search Console", "my impressions went down", or any request to analyze organic search data.
---

# SEO Performance Monitoring

A skill for monitoring Google Search performance, diagnosing ranking changes, and using Search Console effectively. Based on Google's official documentation for Search Console, debugging traffic drops, and understanding ranking systems.

## The Three-Stage Diagnostic Framework

When something goes wrong with search performance, work through these stages in order. Each stage assumes the previous is resolved.

**Stage 1: Can Google reach the page? (Crawling)**
**Stage 2: Is the page in Google's index? (Indexing)**
**Stage 3: Is the page ranked and visible for the right queries? (Serving)**

Most issues are in Stage 2 or 3. But don't skip Stage 1 — accidental robots.txt blocks are more common than people think.

---

## Google Search Console: The Primary Tool

Search Console is Google's official tool for understanding how your site performs in Search. Access at: **search.google.com/search-console**

### Core Reports to Monitor Regularly

#### Performance Report (Most Important)
- **Location:** Search Console → Performance → Search results
- **Shows:** Clicks, Impressions, CTR (click-through rate), Average Position
- **Key filters:**
  - Filter by **Query** → which search terms drive traffic
  - Filter by **Page** → which pages perform best/worst
  - Filter by **Date** → compare periods (this month vs. last month)
  - Filter by **Device** → mobile vs. desktop performance
  - Filter by **Country** → geographic breakdown

**How to use it:**
1. Set date range to last 3 months
2. Sort queries by **Impressions** descending → see where you have visibility but not clicks (CTR opportunity)
3. Sort by **Clicks** descending → your actual traffic drivers
4. Compare current period vs. prior period → identify what's growing or shrinking

**High impressions + low CTR = title/meta description problem** (people see you but don't click)
**Declining impressions = ranking dropped or page deindexed** (Google stopped showing you)
**Declining clicks with stable impressions = CTR problem** (you rank but people chose competitors)

#### Index Coverage Report
- **Location:** Search Console → Indexing → Pages
- **Shows:** Indexed pages, pages not indexed, and the reason for each
- **Key status types:**
  - ✅ Indexed — page is in Google's index
  - ⚠️ Crawled but not indexed — Google visited but chose not to index (quality signal)
  - ❌ Excluded by robots.txt — blocked from crawling
  - ❌ noindex tag — you told Google not to index it
  - ❌ Duplicate page — Google chose a different canonical
  - ❌ Soft 404 — page exists but seems empty/not useful

**Red flags:** Any important pages showing as "Crawled but not indexed" — this is Google's signal that the content quality isn't strong enough to index.

#### Core Web Vitals Report
- **Location:** Search Console → Experience → Core Web Vitals
- **Shows:** LCP, INP, CLS scores for mobile and desktop, URL-level breakdowns
- **Good/Needs Improvement/Poor** classification per metric
- URLs in "Poor" status have the most ranking impact — fix these first

#### URL Inspection Tool
- **Location:** Any report → click the arrow icon next to a URL, or search a URL in the top bar
- **Use for:** Checking a specific page's crawl status, seeing the last crawl date, requesting re-crawl
- **Shows:** Is it indexed? What was Google's last crawl? What canonical did Google choose? Were there errors?

---

## Diagnosing a Traffic Drop

### Step 1: Confirm the scope
Open Performance → Compare date ranges (drop period vs. prior period of same length)

Determine:
- Is it **site-wide** (all pages dropped) or **specific pages**?
- Is it **specific queries** or all queries?
- Is it **specific devices** (mobile only)?
- Is it **specific countries**?

### Step 2: Check for technical causes

**Accidental noindex or robots.txt block**
- Index Coverage → look for spike in "Excluded by robots.txt" or "noindex"
- Check robots.txt at `yourdomain.com/robots.txt`
- This is the most catastrophic and most common "sudden total drop" cause

**Manual action (penalty)**
- Search Console → Security & Manual Actions → Manual Actions
- A manual action means Google has manually penalized the site for spam policy violations
- If present: read the description, fix the issues, submit a reconsideration request

**Security issue (hacking)**
- Search Console → Security & Manual Actions → Security Issues
- Hacked sites get removed from results or show warnings in search

**Site migration or URL changes**
- Were any URLs changed recently? Old URLs need 301 redirects to new ones
- Verify redirects are in place and working

### Step 3: Check for algorithm updates

Google runs ranking system updates that cause winners and losers. These are not random.

**How to check:**
1. Go to: **status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history**
2. Match the date of your traffic drop to confirmed update dates
3. Read the Google Search Central blog for guidance on specific updates

**Types of updates:**
- **Core updates** — broad quality assessments; affect E-E-A-T, helpful content signals
- **Spam updates** — target link spam, scaled content abuse, site reputation abuse
- **Reviews updates** — now integrated into core; affects review and comparison content

**If a core update is the cause:**
- There's no quick fix — core updates assess overall site quality
- Focus on improving E-E-A-T signals, content depth, and page experience
- Recovery typically happens in the next core update (months away)
- Don't add or remove content in bulk hoping to "trick" the algorithm

### Step 4: Check for competitive changes
- Search your key queries — did a major competitor publish something better?
- Did a large domain (Wikipedia, a major news site) start ranking for your terms?
- Did Google change the SERP layout (added People Also Ask, shopping, local pack)?

### Step 5: Seasonality
- Compare year-over-year, not just month-over-month
- Travel searches have strong seasonal patterns
- A drop in winter might be normal for destinations that peak in summer

---

## Key Performance Metrics: What to Measure

| Metric | Where to Find | What It Means | Target Direction |
|--------|--------------|---------------|-----------------|
| **Total Clicks** | Performance → Search results | Actual visitors from Google | ↑ Increase |
| **Total Impressions** | Performance → Search results | How often you appear in results | ↑ Increase (visibility) |
| **Average CTR** | Performance → Search results | % who click when they see you | ↑ Increase |
| **Average Position** | Performance → Search results | Your average ranking for all queries | ↓ Lower number = better |
| **Indexed Pages** | Index → Pages | How many pages in Google | Monitor for unexpected drops |
| **LCP (mobile)** | Experience → Core Web Vitals | Main content load speed on mobile | ↓ < 2.5 seconds |
| **CLS (mobile)** | Experience → Core Web Vitals | Layout stability on mobile | ↓ < 0.1 |

### Bubble Chart Analysis
Google Search Console supports a bubble chart view (Performance → bubble chart button) that plots:
- X-axis: Average position
- Y-axis: CTR
- Bubble size: Impressions

**How to read it:**
- Pages in the top-left (position 1–5, high CTR): performing well
- Pages with high impressions + low CTR + good position: title/meta description problem
- Pages ranking in position 5–15 with decent impressions: on the edge of page 1, worth optimizing

---

## Google's Ranking Systems to Know

Understanding which systems affect your content helps interpret ranking changes.

| System | What It Does | Signs It Affected You |
|--------|-------------|----------------------|
| **Helpful Content** (now in core) | Rewards people-first content | Site-wide drops after core update; thin content pages deindexed |
| **Freshness Systems** | Favors fresh content for time-sensitive queries | Old posts that once ranked losing position to newer articles |
| **PageRank** | Links determine authority | Low rankings despite good content; competitors with more backlinks outrank |
| **Neural Matching** | Concepts over keywords | Pages ranking for unexpected related queries (or losing to more conceptually clear pages) |
| **BERT** | Query intent understanding | Specific long-tail queries returning different results |
| **Passage Ranking** | Individual page sections can rank | Individual H2 sections appear in featured snippets |
| **Site Diversity** | Max ~2 results per domain | Can't get more than 2 pages ranking simultaneously for same topic |
| **Spam Detection** | Removes spam | Sudden site-wide deindexing, manual action |

---

## Monitoring Routine

### Weekly (5 minutes)
- Check Performance → total clicks vs. prior week
- Check Security & Manual Actions for any new issues

### Monthly (30 minutes)
- Performance: compare this month to last month across key metrics
- Export top 20 queries → are you gaining or losing position?
- Core Web Vitals: any new "Poor" URLs?
- Index Coverage: any new errors?
- Check ranking updates log for any updates during the month

### Quarterly (1–2 hours)
- Full review of performance trends
- Identify top 10 pages by impressions — are they optimized for their queries?
- Identify queries with high impressions but position 5–20 — optimization opportunity
- Review which pages are "Crawled but not indexed" — can content be improved?
- Run full technical audit (see `../seo-technical-audit/SKILL.md`)

---

## Search Console Hacks

### Find quick CTR wins
Filter by position 5–15 AND impressions > 100 → these pages are almost on page 1.
A title/meta tweak or content improvement could move them to top 5, doubling traffic.

### Find featured snippet opportunities
Filter queries by position 1–3 and look for question-format queries ("how to...", "is..."). 
You're already ranking — structure a clear answer with a header question + immediate answer to capture the featured snippet.

### Identify pages Google ignores
Pages with zero impressions over 90 days = Google isn't serving them.
Check Index Coverage for why. Either improve quality or use noindex to remove them from the index (thin pages can drag down overall site quality).

### Monitor competitor query overlap
Type a competitor's query into Google — if they rank #1 and you're on page 2+, open their page and identify what they have that you don't (more detail, better structure, more reviews, schema markup, stronger E-E-A-T).

---

## Reference Files

- `references/algorithm-update-history.md` — Timeline of major Google updates and their focus areas
- `references/search-console-setup.md` — Step-by-step Search Console setup and verification guide

---

## Traffic Drop Diagnosis: Google's Official Framework

When organic traffic drops, use this structured process directly from Google's documentation.

### Step 1: Read the Graph Shape

The shape of the Performance report chart tells you the probable cause before you dig further.

| Graph Pattern | Probable Cause |
|---------------|----------------|
| **Sudden large drop, site-wide** | Algorithmic update, manual action, or site-wide security/spam issue |
| **Sudden large drop, gradual recovery** | Algorithm update that was later refined |
| **Gradual decline over weeks** | Technical issue (robots.txt change, noindex added) — technical issues roll out as Googlebot re-crawls |
| **Periodic dips, recurring same time each year** | Seasonality |
| **Impressions same, clicks dropped** | CTR issue — title/snippet doesn't attract clicks; competitors have richer results |
| **Random spike then return to baseline** | Normal fluctuation or data anomaly |

Check the [Search Console Data Anomalies page](https://support.google.com/webmasters/answer/6211453) — the drop might be a logging error or data processing change, not a real traffic drop.

### Step 2: Set the Correct Date Range

- **Use 16 months** — Settings → Date → Last 16 months
- This reveals seasonality patterns: if the same dip happened exactly one year ago, it's seasonal, not a crisis
- For historical data beyond 16 months: use the Search Analytics API or bulk data exports

### Step 3: Compare Periods

- **Date → Compare → Last 3 months vs. previous period** (recent change)
- **Date → Compare → Last 3 months year over year** (seasonality check)
- Sort the Pages table by **Clicks Difference** to identify which pages lost the most traffic

### Step 4: Filter by Search Type

- **Search type filter:** Web / Image / Video / News / Discover
- Separate the data to understand whether the drop happened in web search specifically, or in images, or Discover
- A drop in Images search is a different problem than a drop in Web search

### Step 5: Identify the Cause Category

**Algorithmic update:**
- Check the [ranking updates history page](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history) — did an update coincide with the drop?
- **Small drop (position 2→4):** Normal fluctuation. Don't make radical changes if content was performing well. Positions aren't fixed.
- **Large drop (position 4→29):** Self-assess the whole site for helpful, people-first content. May take months to recover after improvements — Google needs time to re-evaluate.
- No guarantee that changes will restore rankings — if better content exists, it will continue to rank.

**Technical issues:**
- Use the [Crawl Stats report](https://search.google.com/search-console/settings/crawl-stats) — look for spike in crawl errors
- Use the [Page Indexing report](https://search.google.com/search-console/index) — look for sudden changes in indexed vs. non-indexed counts
- Use URL Inspection Tool on affected pages
- Site-wide technical issues: sudden large drop; page-level issues: slower gradual drop as Googlebot re-crawls

**Security issues (malware/phishing):**
- Check the [Security Issues report](https://search.google.com/search-console/security-issues)
- If triggered: Google warns users before they reach your site → direct traffic loss

**Spam / manual action:**
- Check the [Manual Actions report](https://search.google.com/search-console/manual-actions)
- Review [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) for anything that might have been flagged

**Seasonality / changing interests:**
- Check affected queries in the Performance report (filter one query at a time)
- Cross-reference each query in [Google Trends](https://trends.google.com/) — if the whole web shows the same drop, it's external
- Example: travel queries in January vs. summer show dramatic seasonal variation

**Site migration or URL changes:**
- Medium sites: few weeks for Google to re-crawl and reindex
- Large sites: months
- Check site move troubleshooting documentation if drop isn't recovering

### Step 6: Monitor Average Position

Click the **Average position** toggle above the Performance chart. A dramatic, persistent drop in position that didn't recover → self-assess content quality. Normal fluctuations within a narrow range → don't act.

### Step 7: Use Google Trends for Industry Context

Google Trends shows whether a traffic drop is site-specific or industry-wide.

1. Take your top queries from the Performance report
2. Check each in [Google Trends](https://trends.google.com/)
3. If the whole industry dropped → external cause; focus on being ready when interest returns
4. If only your site dropped → internal cause; investigate content or technical issues

Also use Trends to find **rising related queries** to create new content for before competitors do.

### Quick Diagnosis Cheat Sheet

```
Traffic dropped → Open Performance report (16 months view)
├── Impressions + Clicks both dropped
│   ├── Sudden? → Check ranking updates page + Manual Actions report
│   ├── Gradual? → Check Crawl Stats + Page Indexing report for technical issue
│   └── Seasonal pattern? → Cross-check Google Trends
└── Impressions same, Clicks dropped
    └── CTR problem → Improve title tags and meta descriptions
        (competitors may have richer results — check their structured data)
```
