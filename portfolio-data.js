/*
 * Shared project data for the homepage "Recent Projects" teaser and the
 * full Portfolio page (portfolio.html). Add real completed jobs here as
 * they become available — both pages read from this same array, so there
 * is only one place to update.
 *
 * Shape of each entry:
 * {
 *   name:          string   Project/home name or address, e.g. "Smith Residence — Round Rock, TX"
 *   photo:         string   Path to a project photo, e.g. "Images/IMG_1212.jpg". Falls back to a
 *                           generic placeholder automatically if omitted.
 *   description:   string   What work was done.
 *   duration:      string   How long the job took, e.g. "3 days"
 *   complications: string   (optional) Anything notable that came up. Omit or leave "" to hide
 *                           this field on the card entirely.
 * }
 *
 * Left empty intentionally — no real completed jobs have been entered yet,
 * so the site does not display invented project history. Add entries below
 * and both the homepage teaser and portfolio.html will pick them up
 * automatically with no other code changes needed.
 */
const PORTFOLIO_PROJECTS = [
  // {
  //   name: "Example Residence — Austin, TX",
  //   photo: "Images/IMG_1212.jpg",
  //   description: "Full tear-off and standing-seam metal roof replacement.",
  //   duration: "4 days",
  //   complications: "Rotted decking discovered under old shingles required extra framing repair."
  // },
];
