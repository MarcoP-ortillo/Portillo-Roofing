# Portillo Roofing — SEO / AI-Search Site Build: Claude Code Handoff

**Owner:** Marco Portillo (marco_jr@portillo-roofing.com)
**Prepared:** 2026-10-09
**Status:** Planning is done and reviewed by a 4-seat council. Nothing is built yet.
**Repo:** `MarcoP-ortillo/Portillo-Roofing` on GitHub, deployed with Netlify. The relaunch branch `feature/crew-portfolio-update` was last committed 2026-08-08 and has not been merged.

> **To the Claude Code session reading this:** your local copy of the website is newer than the version this plan was built against. The plan was checked against GitHub `main` (last commit 2026-06-01) and `feature/crew-portfolio-update` (last commit 2026-08-08). File and line references below come from those versions. **Re-verify every reference against your copy before you act on it.** Where the newer site already solves something, mark it done. Don't redo it.

---

## 0. How to work this brief

1. Read this whole file, then `Portillo_Site_Map_v3.1.xlsx`, or the CSVs if you can't open xlsx.
2. Work the milestones **in order** (M0 → M6). Each one ends at a **council gate**: run the owner's *select council* skill on that milestone's output, then show Marco the result before moving on.
3. Never merge to `main` yourself. Each milestone goes on its own branch with a PR for Marco to approve.
4. When a fact is missing, **stop and ask**. Do not invent it, write a placeholder, or "fill it for now".

---

## 1. What this project is

Marco saw a reel by an exotic-car-rental owner who got his business cited by ChatGPT and Gemini. The playbook was:

- keyword research
- a keyword map with one page per keyword cluster
- programmatic page templates
- JSON-LD schema plus FAQs
- AI-assisted copy

We adapted it for a roofer, then the council reworked it. The main changes:

- **Roofing comes first.** Other trades sit under it, and none of them gets a page without real job proof.
- **Pages are gated.** A town page, or a service-in-a-town page, only exists once there's a completed local job with photos behind it. This avoids Google's doorway and scaled-content penalties.
- **Off-site work matters more than pages for local and AI results.** That means GBP, reviews, Bing, Yelp and BBB, all tracked in the workbook.
- **The live site has legal and accuracy problems to fix first.** These are Phase 0.

---

## 2. Files in this handoff

| File | What it is |
|---|---|
| `Portillo_Site_Map_v3.1.xlsx` | Master plan. Tabs: Read Me, **Phase 0 – Fix First**, **Page Map** (125 URLs plus 18 on-page sections), Site Skeleton, Services, Service Areas, Seed Keywords, Off-site Entity, AI Baseline, Council Log |
| `page_map.csv` | Page Map as CSV. **This is the build input.** Columns: id, phase, status, surface, path, primary_keyword, secondary_keywords, intent, title, h1, copy_must_include, schema, proof_required, proof_on_hand, index, feeds, notes |
| `seed_keywords.csv` | 256 keywords, each mapped to its target path. Marco will add Keyword Planner volumes later. |
| `phase0_fixes.csv` | The Phase 0 fix list |
| `SEO_BUILD_HANDOFF.md` | This file |

**Status values in the Page Map:**

- **Live:** the page exists now.
- **Draft:** the content exists, but the page doesn't.
- **Planned:** build it.
- **Section:** an H2 block on its parent page, not its own URL.
- **Gated:** do not build until `proof_on_hand = Y`.

---

## 3. Locked facts (owner-confirmed, 2026-10-09)

Use these exact facts everywhere: site copy, schema, meta tags, and later the GBP, BBB and Yelp profiles.

| Fact | Value |
|---|---|
| Legal name | Portillo Roofing LLC |
| Founded | **2025** |
| Experience | **25+ years of roofing experience.** Never write "25+ years in business" or "50+ years". Remove every "50+". |
| Location line | "Based in Dale, TX, serving the Austin metro" |
| Phone | (512) 629-1342 |
| Email | info@portillo-roofing.com |
| Domain | portillo-roofing.com |
| Service area (14 towns) | Austin, Round Rock, Pflugerville, Cedar Park, Georgetown, Leander, Manor, Hutto, Kyle, Buda, Bastrop, Lockhart, Dale, San Marcos |
| Specialty | Roofing: standing seam metal (including custom curved panels and tapered fascia), shingle, tile repair, flat/TPO; residential, commercial and new construction |
| Also offered | Remodeling; specialty countertops (granite, epoxy/river); any standalone trade split out of remodeling: painting, pressure washing, coatings, drywall, tile, etc. |
| Testimonials on the current site | **Not real.** "Sarah Johnson", "Mike Rodriguez" and "Jennifer Chen" must be removed. |
| TXST Apartments project | **San Marcos.** This un-gates `/areas/san-marcos/` (Phase 1) and `/areas/san-marcos/roof-replacement/` (Phase 2). |
| BBB profile | https://www.bbb.org/us/tx/dale/profile/residential-roofing/portillo-roofing-0825-1000247730/ |

**Not confirmed. Ask Marco before using any of these:** "Licensed", "1000+ roofs", "5★ rating", "Lifetime warranty", "BBB Accredited", "24/7 emergency hotline", insurance carrier and limits, and whose 25+ years of experience it is (Marco Sr.? the crew?).

---

## 4. Non-negotiable rules

1. **No fabrication.** That means no invented reviews, testimonials, prices, job counts, project facts, certifications or photos. AI-written copy may only restate facts Marco supplied. FTC 16 CFR Part 465 (in force Oct 2024) bans fake and AI-generated testimonials.
2. **Texas insurance compliance** (Ins. Code §4102.163; Bus. & Com. Code §27.02; Ins. Code ch. 707). A website counts as advertising (28 TAC §21.102).
   - **Allowed:** inspect the roof, photograph damage, write a repair scope, meet the adjuster on site *as the contractor*, explain the general claim process.
   - **Banned:** negotiate, represent you, "fair coverage", "maximize your claim", "direct insurance billing", "we handle your claim", and anything about waiving, covering or rebating the deductible.
   - Every insurance-related page states plainly that the homeowner pays their deductible.
   - The quote/contract template (`generate_quote.js`, in Marco's quote system) needs the §27.02 deductible notice on any insurance-funded job of $1,000 or more.
3. **One keyword, one page.** A page's primary keyword never appears as another page's secondary. The workbook generator enforces this; keep it enforced in the build.
4. **Gates are hard.** A `Gated` row is not built, linked or put in the sitemap until Marco marks proof `Y`.
5. **No placeholders ship.** The build fails if any output HTML contains `[`, `TODO`, `TBD`, `placeholder`, `lorem` or `example.com`. Allow-list legitimate brackets in JSON-LD.
6. **Only real photos**, and only with consent. Remove every image hotlinked through `kimi-web-img.moonshot.cn` (those are competitors' photos). Publish GC/builder jobs only with the builder's OK.
7. **Don't break existing URLs.** Every `.html` URL gets a 301 redirect (see §9).

---

## 5. Milestones

### M0 — Recon and plan (no code changes)
- Diff your newer local site against the assumptions here: pages, images, testimonials, insurance copy, claims, the portfolio implementation, `_redirects`, and how the Netlify form works.
- Report which Phase 0 items are already fixed, which remain, and anything new.
- Propose the build approach (see M2), including how pages get generated from `page_map.csv`.
- **Council gate:** run the council on the recon and the proposed approach. Present it to Marco and wait for his approval.

### M1 — Phase 0 fixes (branch `fix/phase-0`)
Source: `phase0_fixes.csv`, re-verified against your copy.

| # | Severity | Fix |
|---|---|---|
| 1 | Critical | Remove all competitor images hotlinked through `kimi-web-img.moonshot.cn`. On old `main` they were in index.html (6), services.html (4), about.html (2) and contact.html (1). Replace them with Marco's real photos from `/Images/`, or with nothing. |
| 2 | Critical | Remove the three fake testimonials. Either hide the testimonials block until there are real reviews, or replace it with a "Read our reviews on Google / BBB" link. |
| 3 | Critical | Rewrite the insurance copy. On old `services.html` it read: "work directly with your insurance company to ensure you get fair coverage" and "Direct insurance billing". Make it compliant per §4.2. |
| 4 | Critical | Add the deductible notice to the quote template, or flag it to Marco if that template isn't in this repo. |
| 5 | High | Use "Founded 2025 · 25+ years of roofing experience" everywhere. Remove every "50+ years". |
| 6 | High | Remove or flag "Licensed" (Texas has no state roofing license), "1000+", "5★", "Lifetime warranty" and "BBB Accredited". Keep any of these only if Marco confirms it with a source. |
| 7 | Medium | Add `noindex` to `/thank-you/`. |

- **Done when:** a grep for `moonshot`, `Sarah Johnson`, `fair coverage`, `Direct insurance billing` and `50+` returns nothing, and the site renders with no broken images.
- **Council gate:** run the council (red-team focus) on the diff, then open the PR.

### M2 — Infrastructure (branch `feat/site-structure`)
- **URL structure.** Folder-style URLs (`/services/roof-repair/`), plus the 301 map in §9.
- **Page generation.** Recommended (the council should confirm in M0): a small Node build script with no framework or a minimal one.
  - It reads `data/business.json` (the locked facts in §3), `data/pages.csv` (from `page_map.csv`) and per-page content files.
  - It renders one HTML template per surface and writes static files.
  - It keeps the existing look (dark charcoal/copper) and `style.css`.
  - Netlify runs it as the build command.
  - If the newer site already has a generator, use that instead.
- **Fail-closed.** If a page is missing any `copy_must_include` field, or has a null fact, the build skips that page and prints why. It never emits a partial page.
- **Static project pages.** Project pages must be real static HTML; most AI crawlers don't run JS. Move the content out of `portfolio-data.js` into data files, and render both `/projects/` and `/projects/<slug>/` statically.
- **Generated files:** `sitemap.xml` (Live and Planned pages only, never Gated), `robots.txt`, and canonical tags.
  - `robots.txt` must allow Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User and PerplexityBot.
  - Don't block Google-Extended or GPTBot unless Marco asks.
- **JSON-LD partials** per surface (§8). One `#org` entity, referenced by `@id` from every page.
- **Build check** for placeholders (§4.5) and a duplicate-keyword check (§4.3).
- **IndexNow ping** on deploy (Bing). Leave the Search Console and Bing Webmaster verification files for Marco to add.
- **Council gate** before the PR.

### M3 — Templates (same branch or `feat/templates`)
Build one template per surface, using the required fields in §7: Home, Static, Hub, Roofing service, Trade service, Section (an H2 block inside a parent), City, Project, Guide, Service × City.
- **Council gate:** run the council on the rendered templates, using sample real data from one project (TXST Apartments, San Marcos).

### M4 — Phase 1 content (branch `content/phase-1`)
- Build the 25 Phase 1 pages in §6, but only with facts Marco supplies.
- For every page that lacks facts, hand Marco **one consolidated questionnaire**, grouped by page. Don't ask piecemeal.
- Write the meta descriptions by hand, each unique and ≤155 characters. Titles stay ≤60 characters.
- **Council gate** before the PR.

### M5 — Launch checks
- Lighthouse SEO/a11y ≥ 90 on Home, one service page and one project page.
- All 301s resolve.
- `sitemap.xml` validates.
- JSON-LD passes the Schema.org validator (validator.schema.org).
- Placeholder grep is clean.
- Mobile check at 375px.
- Netlify form still submits and lands on `/thank-you/`.

### M6 — Hand back to Marco (not code)
Produce a short checklist from the **Off-site Entity** tab. Marco does these himself:
- GBP primary category set to "Roofing contractor", Services list, service areas
- Bing Places
- Search Console and Bing Webmaster Tools verification
- A review-request routine
- Yelp, BBB and Facebook clean-up
- First run of the **AI Baseline** tab prompts (15 prompts, monthly)

---

## 6. Phase 1 build list (25 pages)

| ID | Path | Status | Owns keyword |
|---|---|---|---|
| P001 | `/` | Live → rework | roofing contractor austin |
| P002 | `/about/` | Live → rework | family owned roofing company austin |
| P003 | `/contact/` | Live → rework | portillo roofing contact |
| P004 | `/for-builders/` | New | roofing subcontractor austin |
| P005 | `/for-restoration/` | New | restoration roofing subcontractor austin |
| P006 | `/services/` | Live → becomes the roofing-only hub | roofing services austin |
| P007 | `/projects/` | Draft (relaunch portfolio) | roofing projects austin |
| P008 | `/services/roof-replacement/` | New | roof replacement austin |
| P009 | `/services/roof-repair/` | New | roof repair austin |
| P010 | `/services/metal-roofing/` (with a `#custom-fabrication` section) | New | metal roofing austin |
| P011 | `/services/flat-roofing/` | New | tpo roofing austin |
| P012 | `/services/commercial-roofing/` | New | commercial roofing austin |
| P013 | `/services/new-construction-roofing/` | New | new construction roofing austin |
| P014 | `/services/hail-damage-roof-repair/` | New, **compliance-sensitive** | hail damage roof repair austin |
| P016 | `/areas/dale/` | New (home base) | roofer dale |
| P017 | `/areas/san-marcos/` | New (TXST proof) | roofer san marcos |
| P018 | `/projects/travis-county-jail/` | Draft | proof page |
| P019 | `/projects/ut-austin-batters-eye/` | Draft | proof page |
| P020 | `/projects/inwood/` | Draft | proof page |
| P021 | `/projects/txst-apartments/` | Draft | proof page, links `/areas/san-marcos/` |
| P022 | `/projects/mendez-school/` | Draft | proof page |
| P023 | `/guides/roof-replacement-cost-austin/` | New | roof replacement cost austin |
| P024–P026 | `/thank-you/`, `/privacy-policy/`, `/terms-of-service/` | Live → move and 301 | — |

IDs match `page_map.csv` (P015 is a Section, not a page). Filter on `phase = 1` and `status ∉ {Gated, Section}`.

**Timing:** ship `/services/hail-damage-roof-repair/` and `/for-restoration/` before March 2027, when hail season starts.

---

## 7. Required content per surface (fail-closed fields)

| Surface | Must include, or the page is not built |
|---|---|
| Roofing service | 40–60 word direct answer at the top; a **dated** $/square range from Marco's own jobs and what moves it; specs (panel profile, gauge, underlayment, impact rating); typical duration; permit office; 2+ captioned project photos; 5–8 FAQs unique to this page; last-updated date |
| Hail/storm page | Everything above, plus the §4.2 compliance wording and a deductible statement |
| Trade service | Direct answer; price range from real jobs; 4+ before/after photos; scope steps; how it pairs with roofing or remodeling; unique FAQs; last-updated date |
| Section | H2 named for the service; 80–150 words; 2+ photos; typical scope or price range; contact link |
| City | Number of jobs completed in the town; 1+ project with photos; permit authority; housing stock / HOA notes; dated local hail events; what work we take in that zone; links to nearby towns. **Never a find-and-replace of another town page.** |
| Service × City | A completed job of *this* service in *this* town, with photos, plus town-specific detail |
| Project | Town, year, squares, system and materials, client type (GC / owner / public), duration, problem → fix, 6+ captioned photos, consent on file |
| Guide | Byline (Marco Portillo plus credentials); direct answer first; Marco's own numbers; cited sources; last-updated date |
| For Builders | Insurance (GL and workers' comp limits, COI on request); crew size and squares per week; lead time from PO to start; systems installed (SnapLok, mechanical-lock, TPO, curved panels); references (Travis County, UT, TXST); W-9 / lien waivers / terms; a one-field "send plans for bid" form |
| For Restoration | Overflow capacity; response time after a storm; estimate format (say Xactimate only if true); photo documentation standard; whether we'll work under their brand; insurance on file |

**Zone rules** (Service Areas tab):
- **South core** (Dale, Lockhart, Bastrop, Kyle, Buda, San Marcos): all services.
- **East / metro** (Manor, Pflugerville): roofing and remodeling, no low-ticket add-ons.
- **North** (Round Rock, Hutto, Cedar Park, Leander, Georgetown): roofing replacement, metal, commercial and new construction only. Marco sets the minimum job size.

---

## 8. Schema reference

There is one organization entity. Every other page references it by `@id`. Values marked ❓ must come from Marco; the build fails if any is still null.

```json
{
  "@context": "https://schema.org",
  "@type": ["RoofingContractor", "GeneralContractor"],
  "@id": "https://portillo-roofing.com/#org",
  "name": "Portillo Roofing LLC",
  "url": "https://portillo-roofing.com/",
  "telephone": "+1-512-629-1342",
  "email": "info@portillo-roofing.com",
  "foundingDate": "2025",
  "address": { "@type": "PostalAddress", "addressLocality": "Dale", "addressRegion": "TX", "postalCode": "❓", "addressCountry": "US" },
  "areaServed": [ { "@type": "City", "name": "Austin", "sameAs": "https://en.wikipedia.org/wiki/Austin,_Texas" } ],
  "sameAs": [
    "https://www.bbb.org/us/tx/dale/profile/residential-roofing/portillo-roofing-0825-1000247730/",
    "❓ Google Business Profile URL", "❓ Yelp", "❓ Facebook"
  ],
  "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Services", "itemListElement": [] }
}
```

- `areaServed`: all 14 towns, each with its Wikipedia `sameAs`.
- `hasOfferCatalog`: only services where Offered = Y.
- **Service and City pages:** `Service` with `provider: {"@id": ".../#org"}` and `areaServed`. Never a second business entity per town.
- **Project pages:** `Article` or `CreativeWork` with `contentLocation`, `dateCreated`, `about` (the Service) and `image[]`.
- **Guides:** `Article` with `author` set to a `Person` (Marco Portillo) and `dateModified`.
- **Every page:** `BreadcrumbList`.
- **FAQPage markup is optional.** Google dropped FAQ rich results in May 2026. Keep the FAQ text on the page anyway, because AI answers quote it.
- **No `AggregateRating` or `Review` markup about the business itself.** Google treats self-serving reviews as ineligible.
- **Skip `llms.txt`.** A study of about 300k domains found no measurable effect.

---

## 9. Redirect map (Netlify `_redirects`)

```
/index.html             /                     301
/about.html             /about/               301
/contact.html           /contact/             301
/services.html          /services/            301
/portfolio.html         /projects/            301
/privacy-policy.html    /privacy-policy/      301
/terms-of-service.html  /terms-of-service/    301
/thank-you.html         /thank-you/           301
```

The current `_redirects` has `/thank-you  /thank-you.html  200`. Replace it, and update the contact form's success `action` to `/thank-you/`. Countertop and epoxy content currently under `/services` moves to `/countertops/` and `/remodeling/` (both Phase 2). Until those pages exist, keep that content where it is.

---

## 10. Open questions for Marco

Collect the answers in one questionnaire at M0 or M4. Don't ask them one at a time.

1. **Offered?** Confirm: gutters, roof coating (silicone/elastomeric on roofs, or floor coatings only?), flooring installation, pool tile and coping, quartz countertops, countertop resurfacing, cabinet painting, deck and fence staining, roof soft-washing.
2. **Emergency service.** Is there a real after-hours phone process? If not, remove "24/7" everywhere.
3. **Claims.** Is "BBB Accredited" true? Licensed by whom? Insurance carrier and GL / workers' comp limits for `/for-builders/`?
4. **Whose 25+ years?** (Marco Sr., Marco, the crew?) What is the founder story for the About page?
5. **Project towns:** Travis County Jail, UT Batter's Eye, Inwood, Mendez School, Curved Ridges, Yuapon, Knollwood, Shoalwood. Each confirmed town can un-gate a town page.
6. **Completed jobs per town**, for the Service Areas tab. This is what un-gates town pages.
7. **Minimum job size** for north-zone towns (the council suggested $8k+).
8. **Photo consent** on past jobs, and builder OK for the GC jobs.
9. **Price ranges** ($/square, dated) for the replacement, metal, TPO and shingle pages, and for the cost guide.
10. **Keyword Planner CSV**: run the Seed Keywords tab; steps are on the Read Me tab.
11. **GBP, Yelp and Facebook URLs**, for `sameAs`.

---

## 11. Do NOT

- Build Gated pages, or link to them.
- Generate town pages by swapping the town name.
- Write prices, job counts or reviews Marco didn't give you.
- Use the words *negotiate*, *represent*, *fair coverage*, *maximize*, or anything about the deductible, except to say the homeowner pays it.
- Create a separate site or brand for the non-roofing trades. They live as sections on `/remodeling/` and `/countertops/`, and get promoted to their own page only when proof and search volume justify it.
- Move the site off GitHub/Netlify. That decision is made.
- Merge to `main`.

---

## 12. Background: council verdicts (all four: approve with changes)

| Seat | Key points |
|---|---|
| Local SEO | Gate town pages; collapse the trade hubs; fix keyword cannibalization; cut Phase 1 to about 25 pages; GBP, reviews and citations matter more than pages |
| AI search | ChatGPT pulls local results through Bing, and Gemini/AI Mode lean on GBP. Perplexity and ChatGPT cite Yelp, BBB and Angi. Schema has small effects, so keep it correct and minimal. JS-rendered content is invisible to most AI crawlers. Concrete facts and numbers on the page drive citation. |
| Owner economics | Roofing tickets ($10k+) dominate value. Pressure washing and staining are add-ons, not lead magnets. Order towns by drive time from Dale. Add a restoration-partner page. Crew lead runs a 10-minute photo routine per job. |
| Red team | Competitor photos and fake testimonials on the live site; insurance copy breaks Tex. Ins. Code §4102.163; unsourced claims; placeholders could ship |

**Decisions where Marco overrode or the council split:**
- All trades Marco named are kept, as sections, rather than cut.
- Commercial and Flat/TPO stay as separate pages; revisit once there's Keyword Planner data.

**Sources:**
- TDI, *Roofing and insurance: know the law*: https://www.tdi.texas.gov/CONSUMER/storms/roofing-and-insurance-know-the-law.html
- FTC fake-reviews rule (DWT summary): https://dwt.com/insights/2024/08/ftc-finalizes-rule-banning-fake-consumer-reviews
- Google spam policies: https://developers.google.com/search/docs/essentials/spam-policies
- Google drops FAQ rich results (SEJ): https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/
- How ChatGPT does local search (SEL): https://searchengineland.com/how-does-chatgpt-conduct-local-searches-454894
- AI search listings sources (BrightLocal): https://brightlocal.com/blog/ai-search-using-listings-sources
- llms.txt study (SEJ): https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/
