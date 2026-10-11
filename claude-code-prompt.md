# Portillo Roofing website upgrade — full build script

This is the complete brief. Real photos are in the Images folder (or wherever they've been dropped into this project) — use them. Real video (shingle timelapse + metal drone before/after) is coming within the week and is NOT available yet — build the infrastructure to receive it, but don't fabricate placeholder video content.

Files in scope: index.html, about.html, services.html, contact.html, thank-you.html, privacy-policy.html, terms-of-service.html, style.css.

## 0. GitHub & Netlify access setup (do this first)

- Check `git remote -v` to confirm this folder is linked to the correct GitHub repo.
- Check `gh auth status`. If not authenticated, run `gh auth login` — this produces a URL and one-time code. Pause and tell me exactly what to do; wait for me to confirm before continuing.
- If `gh` isn't installed, tell me the install command for my OS and wait for confirmation.
- Check if Netlify CLI is installed (`netlify --version`). If not, tell me to run `npm install -g netlify-cli`. Then run `netlify login` (another browser step — walk me through it) and `netlify link` to connect this folder to the existing Netlify site.
- Don't run any git push or netlify command until both are confirmed working.

## 1. Inventory the real photos before touching any code

- List everything in the Images folder (or wherever the uploaded photos landed).
- For each photo, ask me directly: is this a crew member (which one — Marco Sr., Marco Jr., Arturo, Aunel, or Noe) or a job/portfolio photo (which address or project)? Don't guess based on filename alone — confirm with me.
- After I confirm each photo's content, rename the file to something clear and unambiguous before referencing it anywhere in the code — e.g. `crew-arturo.jpg`, `crew-aunel.jpg`, `portfolio-1107-faultline-tile.jpg`. Don't leave generic names like `IMG_1212.jpg` wired into the site; a confusing filename now becomes a confusing bug later when more photos get added.
- Only after this inventory and renaming is done, move on to wiring photos into the site. Any crew member or job without a real photo yet keeps a placeholder (silhouette icon for crew, generic house icon for portfolio) — don't force a real photo where one isn't identified.

## 2. Visual direction: strategic dark sections, not a full dark-mode site

Shift the hero, footer, and major section headers to a dark charcoal base with orange accent — keep everything else (service descriptions, forms, body content, portfolio grid) on the existing light background for readability. Don't convert the whole site to dark mode.

- Dark base: a deep charcoal (e.g. `#181F27`, darker than the current `--primary-color` `#2C3E50` — use your judgment to pick one consistent charcoal and add it as a new CSS variable, e.g. `--charcoal-dark`)
- Accent: keep the existing `--accent-color: #E67E22` (orange) — it already fits this direction
- Apply this to: the hero section on index.html and about.html, the site footer, and service-category headers on services.html
- Everything else stays on the current light palette — don't touch card backgrounds, forms, or body text sections

## 3. Fix the hero — real photo where available, graceful fallback where not

- Remove the hotlinked images pointing to `kimi-web-img.moonshot.cn` — this domain must not appear anywhere in the codebase.
- If a real photo was identified in step 1 suitable for the hero (a finished roof, a job site, crew at work), build a split hero: dark charcoal panel on one side with headline/CTA, real photo on the other side, using the new charcoal/orange palette.
- If no suitable photo exists yet for a given hero, use a subtle animated dark gradient (a slow-moving soft orange light sweep across the charcoal background, canvas or CSS-driven, low file weight) rather than a static flat color — keeps some visual life without needing a photo.
- Build the hero markup so a `<video>` element can be dropped in later in place of the photo/gradient layer without restructuring anything — include a poster-frame attribute pointing at the current hero photo, respect `prefers-reduced-motion` (fall back to the static image if set), and leave a clear comment marking where the real timelapse/drone footage goes once filmed. Do not fabricate or stub in any video file now.
- Add a small trust chip in the hero: star rating and review count, linking to our actual Google Business Profile or BBB page (use a placeholder link marked TODO if you don't have the exact URL — ask me for it).

## 4. Remove the fabricated testimonials

The homepage "What Our Customers Say" section has three quotes attributed to named people who are not real customers. Remove them entirely. Replace with the review-count trust chip described in step 3, or a "read our reviews" link-out — no invented quotes, no placeholder quotes standing in for real ones.

## 5. "Meet the Crew" section

Expand the existing `#founders` section in about.html (or make it its own page — your call) into a crew grid matching the existing `.card` / `service-card` styling. Use real photos from step 1 where confirmed; silhouette placeholder otherwise. Members:

- **Marco Portillo Sr.** — Founder (use existing bio from about.html)
- **Marco Portillo Jr.** — Owner/Engineer (use existing bio from about.html)
- **Arturo** — Foreman: "Arturo leads the crew on every job site, overseeing daily work, quality control, and safety. With years of hands-on roofing experience, he's the one making sure each installation meets Portillo Roofing's standards from tear-off to final walkthrough."
- **Aunel** — Journeyman Roofer: "Aunel is a skilled installer experienced in both metal and TPO roofing systems. Known for precise, efficient work, he's a key part of what keeps projects on schedule and built to last."
- **Noe** — Journeyman Roofer: "Noe brings solid craftsmanship to every roof he works on, handling installation and repair work with the same attention to detail on every job, big or small."

Structure this as a loop-friendly array/data block so members and photos can be added or swapped later without touching layout code.

## 6. Portfolio section

- New page (portfolio.html) or homepage section: grid of project cards — photo, project name/address, description of work done, duration, and an optional "complications" field (only render if populated).
- Populate any entries where a real job photo and enough detail were confirmed in step 1. Leave the rest of the data structure empty and ready — I'll add real job entries over time from my own notes.
- Structure the data as a simple JS array or separate JSON file so entries can be added without touching HTML/CSS.
- Remove the existing "Recent Projects" section on index.html (three hotlinked stock photos with generic captions) and replace it with a short teaser (2-3 cards pulled from the same portfolio data) linking to the full portfolio.html page. Don't leave two separate, disconnected project showcases.

## 7. New service category: Interior Finishes

Add a new category on services.html alongside Metal Roofing / Shingle Replacement / Emergency Repairs:

- **Granite Countertops**
- **Epoxy Flooring**
- **Epoxy Countertops**

Match the existing service-card format (icon, short description, bullet list, CTA). Use placeholder copy for now if I haven't provided descriptions — flag it as TODO rather than inventing specific claims (pricing, warranty lengths, etc.).

## 8. "How we install it" — metal roofing build animation

On the Metal Roofing service section, add a looping illustrative animation showing the install sequence: deck and underlayment → drip edge and flashing → panels installing → hip and ridge cap. Keep it diagrammatic (flat colors, simple shapes), not photorealistic — it's an explainer, not a substitute for real photos or video.

Important: the exact placement and terminology for Z-bar/receiver, valley, and headwall flashing needs to come from me before this is finalized — the install sequence varies by system. Build it with generic stage labels for now and flag clearly in your summary that the technical sequence needs my review before this goes live.

## 9. Navigation

Add "Meet the Crew" and "Portfolio" links to the nav on every page (index, about, services, contact, thank-you), keeping the existing nav structure and mobile toggle intact.

## 10. Full-site review pass — iterate to convergence

After the above changes, review every page as a whole:
- Visual consistency across pages (spacing, card styles, button styles all match)
- Broken links, broken images, console errors
- Mobile/responsive behavior, including the new dark hero/footer sections at common breakpoints
- Consistent nav and footer everywhere, including new pages
- Overall "professional and modern" bar — would a homeowner trust this with a $20k+ job
- Accessibility: alt text on all images (including new crew/portfolio photos), color contrast on the new dark sections specifically, `prefers-reduced-motion` respected on all animations (hero gradient, install animation)
- No fabricated content anywhere — no invented stats, quotes, or claims. Flag anything uncertain to me instead of guessing.

Fix what you find, then re-review. Repeat until a fresh pass turns up nothing. Summarize what changed each round.

## 11. Git workflow

- Create a new branch (e.g. `feature/site-relaunch`) — no direct commits to main.
- Commit in logical chunks with clear messages (palette/dark-sections, hero rebuild, crew section, portfolio section, testimonials removal, interior finishes category, install animation, nav updates, review-pass fixes).
- Push the branch to GitHub.
- If Netlify gives a branch/deploy preview, share the URL so I can check it live.
- Do not merge to main or push to main until I say so. Stop after pushing and report what's ready for review.
