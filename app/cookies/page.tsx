import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Cookies — GMS",
  description:
    "How GMS uses cookies and similar technologies on this website, and how you can control them.",
  alternates: { canonical: "/cookies" },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "What cookies are",
    paragraphs: [
      "Cookies are small text files placed on your device when you visit a website. They're used to remember preferences, keep you signed in, and gather aggregate analytics. We use a small number of them — none for advertising or cross-site tracking.",
    ],
  },
  {
    heading: "Cookies we use",
    paragraphs: ["This site sets the following categories of cookies."],
    list: [
      "Strictly necessary — required for the site to function (theme, navigation, layout). Always on.",
      "Analytics — privacy-first, aggregate-only. We use these to understand which pages get read and where the site is breaking. No personal identifiers.",
      "Preferences — store your selections (e.g. service chips on the start-project form). Set only when you interact with those controls.",
    ],
  },
  {
    heading: "What we don't use",
    paragraphs: [
      "We don't use cookies for advertising. We don't set third-party trackers, retargeting pixels, or fingerprinting. We don't share data with ad networks or data brokers.",
    ],
  },
  {
    heading: "How long they last",
    paragraphs: [
      "Necessary and preference cookies persist until you clear them or until they expire (typically 30 days to 12 months). Analytics cookies expire within 30 days. We rotate session identifiers regularly.",
    ],
  },
  {
    heading: "How to control cookies",
    paragraphs: [
      "Every browser lets you block, delete, or limit cookies. Look for “Privacy & Security” or “Cookies” in your browser's settings. Blocking strictly necessary cookies may break the site. Blocking analytics will not affect any feature.",
      "If you'd prefer we never receive analytics signals from your device, set Do-Not-Track or Global Privacy Control in your browser. We honour both.",
    ],
  },
  {
    heading: "Updates",
    paragraphs: [
      "We update this page when our practices change. The effective date at the top of this page is the most recent revision.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions about cookies — gnanimarketingsolutions@gmail.com.",
      "GMS · Gnani Marketing Solutions · Hyderabad, India.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <LegalPage
        eyebrow="Cookies"
        title="Cookies"
        italic="& similar."
        intro="A short page about what we set, what we don't, and how to turn it all off if you'd prefer."
        effective="9 May 2026"
        sections={SECTIONS}
      />
      <Footer />
    </main>
  );
}
