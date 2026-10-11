/*
 * Shared project data for the homepage "Recent Projects" teaser and the
 * full Portfolio page (portfolio.html). Add real completed jobs here as
 * they become available — both pages read from this same array, so there
 * is only one place to update.
 *
 * Shape of each entry:
 * {
 *   name:          string   Project name, e.g. "Knollwood"
 *   photo:         string   Path to a project photo, e.g. "Images/portfolio-knollwood-01.jpg".
 *                           Falls back to a generic placeholder automatically if omitted.
 *   type:          string   Job category, e.g. "New Construction — Metal & TPO"
 *   size:          string   Scope size — squares, linear feet, or whatever unit fits the job,
 *                           e.g. "40 squares" or "~30 linear ft. of tapered fascia"
 *   description:   string   What work was done.
 *   duration:      string   How long the job took, e.g. "~1 month", or a status like "In Progress"
 *   inProgress:    boolean  (optional) true shows an "In Progress" badge instead of treating
 *                           duration as a final figure.
 *   featured:      boolean  (optional) true shows a "Featured" badge — use for standout
 *                           structural/engineering work worth calling out.
 *   complications: string   (optional) Anything notable that came up. Omit or leave "" to hide
 *                           this field on the card entirely.
 * }
 *
 * Add entries below and both the homepage teaser and portfolio.html will pick them up
 * automatically with no other code changes needed.
 */
const PORTFOLIO_PROJECTS = [
  {
    name: "Travis County Jail",
    photo: "Images/portfolio-travis-county-jail-01.jpg",
    type: "Commercial — Structural Steel Frame & Curved Metal Roofing",
    size: "10 squares",
    duration: "~1.5 weeks",
    featured: true,
    description: "Commercial scope that started with the structural frame itself — heavy machinery set the posts and lifted the structure into place while it was bolted down. Once the frame was standing, the crew decked it and installed fabricated curved metal panels (non-standing-seam), plus roofing and gutters on the two rear sections. A compact footprint but a full structural-to-finish scope in under two weeks."
  },
  {
    name: "UT Austin Batter's Eye",
    photo: "Images/portfolio-ut-austin-batters-eye-01.jpeg",
    type: "Commercial / Athletic Facility — Removable Metal Panel System",
    size: "N/A (structure, not square footage)",
    duration: "~2 weeks",
    featured: true,
    description: "An honor to work on — a removable panel system on the batter's eye structure at UT Austin, engineered so individual panel sections can be pulled in high wind without compromising the standing structure. The install involved thick structural steel beams, tight and specific screw spacing for the cleat system, J-trim and receiver on every section, and a precision cutout on the far-left section for the camera opening."
  },
  {
    name: "Inwood",
    photo: "Images/portfolio-inwood-01.jpeg",
    type: "New Construction — Standing Seam Metal",
    size: "50–60 squares",
    duration: "~2 months",
    description: "New construction with a demanding roof geometry — heavy on valleys, headwalls, and ridges. Roofed in McElroy standing seam double-lock panels in dark charcoal. The cut-up roofline meant significantly more flashing and transition work per square than a typical new-build, stretching the timeline to two months."
  },
  {
    name: "Curved Ridges",
    photo: "Images/portfolio-curved-ridges-03.jpg",
    type: "Specialty Fabrication — Standing Seam Metal",
    size: "60 squares",
    duration: "~1.5 months",
    description: "A specialty install featuring custom fabricated standing seam panels curved to match the ridge geometry, eliminating the need for a Z-bar and cap. The curved panels required significantly more precise manufacturing and a meticulous install process to maintain full weather coverage across the radius — a technique most crews avoid due to the fabrication difficulty and cost."
  },
  {
    name: "Yuapon",
    photo: "Images/portfolio-yuapon-02.jpeg",
    type: "Specialty Fabrication — Tapered Metal Fascia",
    size: "~30 linear ft. of tapered fascia",
    duration: "Specialty scope",
    description: "A specialty fascia install spanning nearly 30 feet and tapering from 4 ft down to 2.5 ft. The uneven substrate created a high risk of oil canning across a surface that size, so the crew built a custom metal cleat frame on the top and bottom of the fascia to true up the substrate and keep the panel face flat and distortion-free."
  },
  {
    name: "Mendez School",
    photo: "Images/portfolio-mendez-school-01.jpg",
    type: "Commercial — TPO Roofing System",
    size: "Large-scale (multi-month)",
    duration: "Multi-month",
    description: "A large commercial TPO install including rooftop equipment footings for mechanical/HVAC machinery and extensive coping detail throughout. Multi-month scope with the coordination demands typical of an active school campus."
  },
  {
    name: "TXST Apartments",
    photo: "Images/portfolio-txst-apartments-01.jpg",
    type: "Commercial — Shingle Reroof",
    size: "~400 squares",
    duration: "Multi-month",
    description: "Large-scale shingle reroof on a tall multi-story apartment building — 400 squares of tear-off and reinstall executed in sequence to keep the structure watertight throughout, with steep access and hard-to-reach sections adding to the difficulty. A multi-month project driven by scale and building height as much as material complexity."
  },
  {
    name: "Knollwood",
    photo: "Images/portfolio-knollwood-01.jpg",
    type: "New Construction — Metal & TPO",
    size: "40 squares (20 metal / 20 TPO)",
    duration: "~1 month",
    description: "Full roof install on a new construction home combining standing seam double-lock metal panels in dark bronze with flat-roof TPO sections. The 40-square scope split evenly between the two systems, requiring careful transition detailing between the metal field and the low-slope TPO areas to keep the roof watertight at every plane change."
  },
  {
    name: "Shoalwood",
    photo: "Images/portfolio-shoalwood-02.jpg",
    type: "New Construction — Standing Seam Metal",
    size: "~40 squares",
    duration: "In Progress",
    inProgress: true,
    description: "A steep, technically demanding new construction install using SnapLok standing seam panels, with a low-pitch double-lock section requiring a different detailing approach than the rest of the roof. Currently underway."
  },
  {
    name: "Fiset",
    photo: "Images/portfolio-fiset-03.jpeg",
    type: "New Construction — Dried-In (In Progress)",
    size: "TBD",
    duration: "In Progress",
    inProgress: true,
    description: "Currently dried in, with the remaining scope still ahead."
  },
];
