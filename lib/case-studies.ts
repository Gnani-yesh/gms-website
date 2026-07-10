export type CaseStudy = {
  slug: string;
  client: string;
  /** Industry */
  sector: string;
  year: string;
  /** Card + hero label */
  type: "Case study" | "Concept project";
  status: "Live" | "Concept";
  /** Tags / disciplines */
  scope: string[];
  /** Live site URL (no protocol) */
  url: string;
  /** Optional note, e.g. independent concept project */
  note?: string;
  /** Visual tone for the page accent (warm/cool/magenta). */
  tone: "warm" | "cool" | "magenta";

  /** Real site screenshot used in hero, index and gallery. */
  image: {
    src: string;
    alt: string;
  };

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

  /** "What this means for you" closing. */
  takeaway: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "happy-herbals",
    client: "Happy Herbals",
    sector: "Ayurvedic E-commerce",
    year: "2024 — 25",
    type: "Case study",
    status: "Live",
    scope: ["Brand", "Website", "Growth", "Ads"],
    url: "happyherbals.online",
    tone: "warm",

    image: {
      src: "/work/happy-herbals.png",
      alt: "Happy Herbals Ayurvedic e-commerce homepage",
    },

    hero: {
      eyebrow: "Case study · 01",
      title: "A 15-year Ayurvedic brand,",
      italic: "finally online.",
      deck:
        "A 15-year-old Ayurvedic business with hundreds of products and thousands of loyal customers — and zero online presence. We built the whole thing.",
    },

    overview: {
      summary:
        "Happy Herbals had been selling Ayurvedic medicines for over 15 years — hundreds of products, thousands of loyal customers, all through a physical store.",
    },

    challenge: {
      paragraphs: [
        "Nothing online. No way for someone to find them on Google, browse their products, or order from home.",
      ],
    },

    solution: {
      paragraphs: [
        "We built their entire digital presence from scratch.",
        "First the Shopify store — restructured, rewritten, and designed so customers can actually find what they need and trust what they're buying. Then Meta ad campaigns to bring in new customers consistently, spending lakhs across multiple campaigns to find what works and scale it. Then a WhatsApp system with over 3,200 customers — so the brand can stay in touch, share new products, and bring people back without spending on ads every time.",
        "Happy Herbals went from nothing online to a brand that finds new customers, sells online, and stays in touch with them — all in one place.",
      ],
      pillars: [
        {
          title: "Shopify storefront",
          body: "Restructured, rewritten and redesigned so customers can find what they need — and trust what they're buying.",
        },
        {
          title: "Meta ad campaigns",
          body: "A steady stream of new customers — lakhs spent across campaigns to find what works and scale it.",
        },
        {
          title: "WhatsApp engine",
          body: "A list of 3,200+ customers, so the brand can share new products and bring people back without paying for ads every time.",
        },
      ],
    },

    systems: {
      items: [
        { name: "Shopify store", description: "Restructured catalog, rewritten product copy, designed to make buying easy." },
        { name: "Meta ad campaigns", description: "Several ad campaigns, tested and scaled to what works." },
        { name: "WhatsApp broadcast system", description: "A list of 3,200+ customers for new-product drops and to bring people back." },
      ],
    },

    takeaway:
      "If you have a business that relies on foot traffic or word of mouth, we can build you the same kind of system — a website that sells, ads that bring people in, and a way to keep them coming back.",
  },

  {
    slug: "dr-krishna",
    client: "Dr. Krishna Health",
    sector: "Healthcare",
    year: "2025",
    type: "Case study",
    status: "Live",
    scope: ["Website", "SEO", "Content"],
    url: "drkrishnahealth.in",
    tone: "cool",

    image: {
      src: "/work/dr-krishna.png",
      alt: "Dr. Krishna Health naturopathy website homepage",
    },

    hero: {
      eyebrow: "Case study · 02",
      title: "15 years of expertise.",
      italic: "Now the internet knows about it.",
      deck:
        "A naturopathic physician with 15 years of clinical experience and no way for patients to find him online. We changed that.",
    },

    overview: {
      summary:
        "Dr. Krishna is a naturopathic physician in Hyderabad with 15 years of clinical experience.",
    },

    challenge: {
      paragraphs: [
        "Patients found him through word of mouth alone — because he had no website, no Google presence, nothing.",
        "People were searching for exactly what he offers. They just couldn't find him.",
      ],
    },

    solution: {
      paragraphs: [
        "We built him a clean, professional website that feels like the practice it represents — no clutter, no gimmicks, just clear information that earns trust. Then we built a content strategy around it — 12 articles targeting the exact searches his potential patients are typing into Google. Each article written in plain language, with real clinical information, structured to rank locally in Hyderabad.",
        "He's now indexed on Google, his clinics show up on Google Maps, and people who've never heard of him are finding his website, reading his content, and booking consultations.",
      ],
      pillars: [
        {
          title: "A website that earns trust",
          body: "Clean and professional — no clutter, no gimmicks, just clear information that feels like the practice it represents.",
        },
        {
          title: "A content strategy",
          body: "12 articles targeting the exact searches his patients type into Google, in plain language with real clinical detail.",
        },
        {
          title: "Local SEO",
          body: "Structured to rank locally — indexed on Google, clinics surfaced on Google Maps, new patients finding him.",
        },
      ],
    },

    systems: {
      items: [
        { name: "Marketing website", description: "Clean, professional, and easy to read and trust." },
        { name: "Content library", description: "12 SEO articles targeting real patient search queries." },
        { name: "Local SEO & Maps", description: "Google indexing and Google Business / Maps presence for Hyderabad." },
      ],
    },

    takeaway:
      "If you're a professional or service business that people should be finding on Google but aren't — a website and the right content strategy changes that entirely.",
  },

  {
    slug: "navavarna",
    client: "Navavarna Infra",
    sector: "Real Estate",
    year: "2024",
    type: "Case study",
    status: "Live",
    scope: ["Website", "Brand"],
    url: "navavarna.com",
    tone: "warm",

    image: {
      src: "/work/navavarna.png",
      alt: "Navavarna Infra real estate website homepage",
    },

    hero: {
      eyebrow: "Case study · 03",
      title: "Premium properties deserve",
      italic: "a premium first impression.",
      deck:
        "High-value land and luxury property for serious investors — and a website that had to earn their trust before the first conversation.",
    },

    overview: {
      summary:
        "Navavarna Infra LLP sells high-value land and property in Hyderabad — farmland communities, open plots near the Outer Ring Road, luxury residential projects. Their buyers are serious investors. First impressions matter enormously.",
    },

    challenge: {
      paragraphs: [
        "They needed a website that communicated the quality of what they sell before a single conversation happened.",
      ],
    },

    solution: {
      paragraphs: [
        "We built a four-page website in dark navy and gold — a design that feels expensive without trying too hard. Property listings laid out clearly with the details serious buyers actually need. A simple way for interested investors to reach the team. Everything written in a tone that speaks to someone making a big financial decision.",
        "When someone lands on navavarna.com, they know immediately they're dealing with a serious company.",
      ],
      pillars: [
        {
          title: "A premium website",
          body: "Four pages in dark navy and gold — a design that feels expensive without trying too hard.",
        },
        {
          title: "Clear property listings",
          body: "Laid out with the details serious buyers actually need to make a decision.",
        },
        {
          title: "An easy way to get in touch",
          body: "So interested investors can reach the team quickly, without any hassle.",
        },
      ],
    },

    systems: {
      items: [
        { name: "Four-page website", description: "Dark navy and gold identity, built to read as premium." },
        { name: "Property listings", description: "Clear layouts with the details serious buyers need." },
        { name: "Enquiry flow", description: "A straightforward way for serious buyers to get in touch." },
      ],
    },

    takeaway:
      "If your business operates at a premium level but your website doesn't reflect that — you're losing clients before they've even spoken to you.",
  },

  {
    slug: "meltd",
    client: "MELTD",
    sector: "F&B",
    year: "2025",
    type: "Concept project",
    status: "Concept",
    scope: ["Website", "Brand"],
    url: "meltd.netlify.app",
    note: "Independent concept project",
    tone: "magenta",

    image: {
      src: "/work/meltd.png",
      alt: "MELTD milkshake brand website homepage",
    },

    hero: {
      eyebrow: "Concept project · 04",
      title: "A milkshake brand built to be",
      italic: "scrolled, shared, and ordered from.",
      deck:
        "A milkshake brand concept built to be photographed before it's tasted — and ordered before you've finished scrolling.",
    },

    overview: {
      summary:
        "MELTD is a milkshake brand concept built around bold flavours and a visual identity that makes people want to take a photo before they take a sip.",
    },

    challenge: {
      paragraphs: [
        "The brief was simple — build a website that feels as good as the product tastes. Something that makes you want to order before you've finished scrolling.",
      ],
    },

    solution: {
      paragraphs: [
        "We built a product-first site that leads with visuals, keeps copy minimal, and makes the path from “I want this” to “I've ordered it” as short as possible. Fast, mobile-first, designed for a generation that decides in three seconds whether something is worth their attention.",
      ],
      pillars: [
        {
          title: "Product-first design",
          body: "Leads with visuals and keeps copy minimal — built to be scrolled and shared.",
        },
        {
          title: "A short path to order",
          body: "From “I want this” to “I've ordered it” in as few steps as possible.",
        },
        {
          title: "Fast and mobile-first",
          body: "Designed for a generation that decides in three seconds whether something is worth their attention.",
        },
      ],
    },

    systems: {
      items: [
        { name: "Product-first website", description: "Visual-led layout with minimal, punchy copy." },
        { name: "Order flow", description: "Shortest possible path from interest to order." },
        { name: "Mobile-first build", description: "Fast, responsive, designed for quick decisions." },
      ],
    },

    takeaway:
      "If you're in food, retail, or any product business — your website is your shopfront. We build ones people actually want to spend time on.",
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
