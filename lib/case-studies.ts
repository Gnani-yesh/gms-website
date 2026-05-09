export type CaseStudyVisual =
  | "marketing-site"
  | "platform-console"
  | "brand-sheet"
  | "editorial-spread"
  | "mobile-app"
  | "operations-dashboard"
  | "data-card"
  | "photography";

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  year: string;
  status: "Live" | "Operating" | "Archived";
  scope: string[];
  region: string;
  duration: string;
  /** Visual tone for the page accent (warm/cool/magenta). */
  tone: "warm" | "cool" | "magenta";

  hero: {
    eyebrow: string;
    title: string;
    italic: string;
    deck: string;
  };

  overview: {
    summary: string;
  };

  challenge: {
    paragraphs: string[];
  };

  solution: {
    paragraphs: string[];
    pillars: { title: string; body: string }[];
  };

  systems: {
    items: { name: string; description: string }[];
  };

  results: {
    primary: { metric: string; label: string };
    secondary: { metric: string; label: string }[];
  };

  gallery: {
    items: {
      kind: CaseStudyVisual;
      label: string;
      caption: string;
    }[];
  };

  testimonial: {
    quote: string;
    author: string;
    role: string;
  };

  closingMetrics: { label: string; value: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "northwave",
    client: "Northwave",
    sector: "B2B SaaS",
    year: "2025 — 26",
    status: "Operating",
    scope: ["Brand", "Website", "Platform", "Growth"],
    region: "Bengaluru · Singapore",
    duration: "14 months · operating",
    tone: "warm",

    hero: {
      eyebrow: "Case study · 01",
      title: "Rebuilt brand and a self-serve",
      italic: "growth engine.",
      deck:
        "A founder-led SaaS hit the wall where referrals run out. We rebuilt the brand, the marketing site, and the pipeline as one connected system.",
    },

    overview: {
      summary:
        "Northwave is a B2B studio building developer tools for engineering teams. Two years in, they had a strong product, the wrong website, and a brand that looked like every other SaaS in the category. We engaged across brand, website, platform and growth — with the goal of moving the company off founder-led referral and onto an inbound system that compounds.",
    },

    challenge: {
      paragraphs: [
        "Founder-led growth had carried Northwave to roughly $1.4M ARR through LinkedIn, podcasts and warm intros. The marketing site read like a deck. The brand was built in a weekend. Pipeline was tied to one person’s posting cadence, which meant every quiet week meant a quiet month for sales.",
        "The team needed to move from a brand that the founder defended into a brand the team could operate. They needed a marketing surface that felt as serious as the product, and a measurement layer that would tell leadership whether the next dollar should go into content, paid, or hiring.",
      ],
    },

    solution: {
      paragraphs: [
        "We rebuilt the operating layer in three connected phases — identity, surface, and growth — over fourteen weeks of build and an ongoing operating relationship.",
      ],
      pillars: [
        {
          title: "An editorial brand system",
          body: "A wordmark and palette designed for the long view. Typography that breathes, photography that doesn’t need a caption to land, and a brand book the team actually opens.",
        },
        {
          title: "A platform-grade marketing site",
          body: "Edge-rendered, sub-second, content-led architecture. Bespoke CMS and editorial pipeline so the team could publish weekly without engineering tickets.",
        },
        {
          title: "A connected growth engine",
          body: "SEO, paid media, lifecycle and content treated as one system with shared attribution. ROAS, CAC and LTV measured on the same source of truth.",
        },
      ],
    },

    systems: {
      items: [
        { name: "Brand identity & guidelines", description: "Wordmark, palette, type system, photography direction." },
        { name: "Marketing site", description: "Bespoke CMS, edge-rendered, journal pipeline, modular sections." },
        { name: "Pipeline analytics", description: "Server-side attribution, shared revenue dashboard, weekly reports." },
        { name: "Paid creative system", description: "Meta + Google creative library, naming convention, performance loop." },
        { name: "Editorial pipeline", description: "Long-form essays, distribution playbook, content ops calendar." },
        { name: "Lifecycle CRM", description: "Email sequences, signup-to-trial-to-customer journeys, retention loops." },
      ],
    },

    results: {
      primary: { metric: "+218%", label: "qualified pipeline · year over year" },
      secondary: [
        { metric: "4.2×", label: "ROAS · blended paid" },
        { metric: "−34%", label: "Customer acquisition cost" },
        { metric: "+62%", label: "Organic search sessions" },
        { metric: "8.4×", label: "LTV / CAC ratio" },
      ],
    },

    gallery: {
      items: [
        { kind: "marketing-site", label: "northwave.co", caption: "Marketing site · home" },
        { kind: "brand-sheet", label: "Brand identity", caption: "Wordmark · palette · type" },
        { kind: "platform-console", label: "Pipeline analytics", caption: "Internal · revenue dashboard" },
        { kind: "editorial-spread", label: "Journal · Vol 04", caption: "The economics of brand-led growth" },
        { kind: "mobile-app", label: "Mobile · home", caption: "Responsive marketing surface" },
        { kind: "data-card", label: "Q1 · 2026", caption: "Quarterly performance review" },
      ],
    },

    testimonial: {
      quote:
        "We stopped looking like every other SaaS. The site, the brand, the pipeline — they all started reinforcing each other. It felt like the company finally caught up to the product.",
      author: "Anita R.",
      role: "Founder & CEO, Northwave",
    },

    closingMetrics: [
      { label: "ARR · current", value: "$4.6M" },
      { label: "Pipeline · YoY", value: "+218%" },
      { label: "Engagement", value: "14 months · ongoing" },
      { label: "Surfaces shipped", value: "06" },
    ],
  },

  {
    slug: "halcyon-house",
    client: "Halcyon House",
    sector: "Hospitality",
    year: "2024 — 25",
    status: "Live",
    scope: ["Brand", "Website", "Operations Platform"],
    region: "North Goa, India",
    duration: "10 months",
    tone: "warm",

    hero: {
      eyebrow: "Case study · 02",
      title: "A house, not a hotel —",
      italic: "and the system behind it.",
      deck:
        "A twelve-room boutique on the Mandovi river needed to feel ageless from the marketing site to the concierge. We built the brand, the website and the operating system as one connected piece.",
    },

    overview: {
      summary:
        "Halcyon House is a small luxury property in North Goa with a strong founder-vision and almost no operational backbone. Bookings were on a spreadsheet. The website was a placeholder. The brand existed in the founder’s head. We engaged for ten months across identity, marketing site, and the bespoke operations platform that runs the property today.",
    },

    challenge: {
      paragraphs: [
        "The property needed to feel like an heirloom — slow, serious, written rather than designed. Most hospitality brands lean on stock photography and trend fonts. Halcyon’s founders wanted the opposite: a house that felt private and considered, and a website that signaled that within five seconds.",
        "On the operations side, the team was running bookings, housekeeping, concierge and reporting from a mix of spreadsheets, WhatsApp threads, and three different SaaS tools. Turnover was slipping. Guests were getting booked into the wrong rooms. The founders wanted one system the in-house team could own.",
      ],
    },

    solution: {
      paragraphs: [
        "We treated the marketing surface and the operations platform as two faces of the same brand. Both ran on the same content model, the same identity system, and the same operational standards.",
      ],
      pillars: [
        {
          title: "A heirloom-grade brand",
          body: "An editorial wordmark, a warm earth palette, photography that frames silence as the product. A brand book the team can keep.",
        },
        {
          title: "A cinematic marketing site",
          body: "Edge-rendered, image-heavy without being slow, with reservations and concierge enquiries running through a single intake.",
        },
        {
          title: "A bespoke operations platform",
          body: "Bookings, guest profiles, room turnover, concierge requests and reporting unified into one quiet console the team actually uses.",
        },
      ],
    },

    systems: {
      items: [
        { name: "Brand identity & book", description: "Wordmark, palette, type system, editorial photography direction." },
        { name: "Marketing site (halcyon.house)", description: "Image-led, reservation-aware, journal pipeline." },
        { name: "Booking engine", description: "Direct reservations, calendar sync, deposit handling." },
        { name: "Concierge console", description: "Pre-arrival enquiries, in-stay requests, post-stay follow-up." },
        { name: "Operations platform", description: "Rooms, turnovers, housekeeping, daily ops dashboard." },
        { name: "Reporting layer", description: "Occupancy, RevPAR, ADR, guest cohort views." },
      ],
    },

    results: {
      primary: { metric: "99.4%", label: "on-time room turnover" },
      secondary: [
        { metric: "87%", label: "Occupancy · last 12 months" },
        { metric: "$842", label: "RevPAR · steady-state" },
        { metric: "$1,210", label: "ADR · in season" },
        { metric: "+84", label: "Guest NPS · trailing" },
      ],
    },

    gallery: {
      items: [
        { kind: "marketing-site", label: "halcyon.house", caption: "Marketing site · home" },
        { kind: "brand-sheet", label: "Identity sheet", caption: "Wordmark · palette · photography" },
        { kind: "platform-console", label: "Concierge console", caption: "In-stay request management" },
        { kind: "operations-dashboard", label: "Operations · this week", caption: "Calendar · rooms · turnover" },
        { kind: "photography", label: "FIG. 04 · ELEV.", caption: "Editorial photography direction" },
        { kind: "mobile-app", label: "Concierge · mobile", caption: "Front desk handheld interface" },
      ],
    },

    testimonial: {
      quote:
        "We wanted the website and the concierge to feel like the same place. GMS is the only studio we found who treated those as the same problem. The system runs us now — we don’t run the system.",
      author: "Mira S.",
      role: "Co-founder, Halcyon House",
    },

    closingMetrics: [
      { label: "Rooms operated", value: "12" },
      { label: "Occupancy · TTM", value: "87%" },
      { label: "On-time turnover", value: "99.4%" },
      { label: "Engagement", value: "10 months · live" },
    ],
  },

  {
    slug: "field-and-form",
    client: "Field & Form",
    sector: "Editorial Commerce",
    year: "2025",
    status: "Operating",
    scope: ["Brand", "Website", "Editorial", "Growth"],
    region: "Jaipur · London",
    duration: "8 months",
    tone: "magenta",

    hero: {
      eyebrow: "Case study · 03",
      title: "An editorial commerce platform",
      italic: "engineered as a growth system.",
      deck:
        "A small studio of furniture and lighting makers needed to move from a slow Shopify into something that felt like a magazine — and grew like one.",
    },

    overview: {
      summary:
        "Field & Form designs and hand-makes a small catalog of objects in Jaipur. The product is exceptional. The website was a Shopify theme. We rebuilt the brand, the storefront, and the editorial system that drives discovery — all in eight months, with growth running afterward.",
    },

    challenge: {
      paragraphs: [
        "Field & Form’s objects are bought one at a time, often after a long browse. The original Shopify theme treated them like fast-moving consumer goods: cards, badges, prices stacked on top of each other. The conversion rate was healthy but the average order value was low and repeat rate was almost nothing.",
        "The founders wanted the website to feel like the journal of a furniture house — long object pages, editorial photography, founder essays — and they wanted the system to compound through search and email instead of paid spend.",
      ],
    },

    solution: {
      paragraphs: [
        "We rebuilt the surface and the growth program together. The website became a journal. The journal became the growth engine. Email did the rest.",
      ],
      pillars: [
        {
          title: "An editorial brand system",
          body: "A wordmark and warm earth palette that reads as quiet luxury. Photography direction shot in studio across the Jaipur catalog.",
        },
        {
          title: "An editorial commerce platform",
          body: "Long-form object pages, atelier journal, headless commerce, member accounts, repeat-buyer flows.",
        },
        {
          title: "Compounding distribution",
          body: "SEO program around object categories, weekly journal cadence, lifecycle email driving repeat purchase.",
        },
      ],
    },

    systems: {
      items: [
        { name: "Brand identity & book", description: "Wordmark, palette, type system, editorial photography direction." },
        { name: "Editorial commerce site", description: "Long-form object pages, atelier journal, member portal." },
        { name: "Headless commerce layer", description: "Catalog, cart, checkout, payments, fulfillment integration." },
        { name: "Journal pipeline", description: "Editorial cadence, distribution playbook, archival system." },
        { name: "SEO infrastructure", description: "Topical authority program, schema, internal linking." },
        { name: "Lifecycle email", description: "Welcome, abandonment, post-purchase, journal weekly." },
      ],
    },

    results: {
      primary: { metric: "+312%", label: "annual revenue · year over year" },
      secondary: [
        { metric: "+58%", label: "Average order value" },
        { metric: "44%", label: "Repeat rate · TTM" },
        { metric: "$2.10", label: "Email RPM · trailing" },
        { metric: "+184%", label: "Organic search · YoY" },
      ],
    },

    gallery: {
      items: [
        { kind: "marketing-site", label: "fieldandform.co", caption: "Storefront · object page" },
        { kind: "editorial-spread", label: "Journal · Vol 12", caption: "Atelier · winter collection" },
        { kind: "brand-sheet", label: "Identity sheet", caption: "Wordmark · palette · type" },
        { kind: "mobile-app", label: "Mobile · object page", caption: "Editorial commerce on phone" },
        { kind: "platform-console", label: "Commerce admin", caption: "Catalog · orders · members" },
        { kind: "photography", label: "FIG. 04 · STUDIO", caption: "Editorial product photography" },
      ],
    },

    testimonial: {
      quote:
        "GMS shipped a website that made us look like a museum. Then they shipped a growth program that made us profitable. We trust them with both halves of the business now.",
      author: "Rohan V.",
      role: "Founder, Field & Form",
    },

    closingMetrics: [
      { label: "Revenue · YoY", value: "+312%" },
      { label: "Repeat rate", value: "44%" },
      { label: "Engagement", value: "8 months · operating" },
      { label: "Surfaces shipped", value: "06" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

/** Returns the case study after the one at `slug`, wrapping around. */
export function getNextCaseStudy(slug: string): CaseStudy {
  const i = CASE_STUDIES.findIndex((c) => c.slug === slug);
  return CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
}
