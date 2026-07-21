export const homePage = {
  hero: {
    headline: "Will It Fit?",
    body: "Check whether products fit in your vehicle.",
    ctaText: "Get Started - Select Your Vehicle",
    ctaHref: "/vehicles",
  },
  primaryAction: {
    eyebrow: "Initialize System",
    headline: "Start Car Selection",
    href: "/vehicles",
  },
  contentBlocks: [
    {
      type: "richText",
      title: "How it works",
      html: `
        <ol>
          <li><strong>Select your vehicle</strong><br />Choose or save your car.</li>
          <li><strong>Search for a product</strong><br />Find the item you want to check.</li>
          <li><strong>Check the fit</strong><br />See whether it fits before you buy.</li>
        </ol>
      `,
    },
  ],
};