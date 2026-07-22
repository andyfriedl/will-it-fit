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
        <li><strong>Select your vehicle</strong><br />Choose the vehicle you want to check.</li>
        <li><strong>Add products to your cart</strong><br />Search for products and add the ones you want to test.</li>
        <li><strong>Check the fit</strong><br />See whether everything fits before you buy.</li>
      </ol>
      `,
    },
  ],
};