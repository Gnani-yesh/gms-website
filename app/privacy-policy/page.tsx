import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — GMS",
  description:
    "How GMS collects, uses, stores and protects information about clients, partners and visitors.",
  alternates: { canonical: "/privacy-policy" },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "Gnani Marketing Solutions (“GMS,” “we,” “us”) is a digital infrastructure and growth studio based in Hyderabad, India. This policy explains what information we collect when you visit our website, enquire about an engagement, or work with us as a partner.",
      "If anything in this document is unclear, write to us at gnanimarketingsolutions@gmail.com and we'll explain it in plain language.",
    ],
  },
  {
    heading: "Information we collect",
    paragraphs: [
      "We collect only what we need to operate the website, respond to enquiries, and run engagements. Specifically:",
    ],
    list: [
      "Contact details you submit through forms — name, email, company, phone, role.",
      "Project information you share with us — scope, budget, timeline, goals, references.",
      "Aggregate website analytics — pages visited, referrer, country, device. Stored without personally identifying any one visitor.",
      "Communication history during an engagement — emails, calls, working documents.",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: [
      "We use the information you give us to respond to enquiries, scope and deliver engagements, send you written proposals, run the operating and reporting cadence on programs we operate, and meet our legal and accounting obligations.",
      "We do not sell, rent, or share your information with third parties for marketing purposes. We do not enrich or build profiles on visitors.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "Our website uses a small number of cookies to remember your preferences and to gather aggregate analytics. We use a privacy-first analytics tool that does not set cross-site identifiers.",
      "You can read more on our cookies page, including how to opt out of analytics.",
    ],
  },
  {
    heading: "Data retention",
    paragraphs: [
      "We retain enquiry information for up to 24 months unless we begin an engagement, in which case we retain it for the duration of the engagement plus seven years (for tax and accounting reasons).",
      "Working files, analytics history and reporting are retained for the duration of the engagement and provided to you on handover. You can request deletion at any point after handover.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "You have the right to access, correct, port, or request deletion of any personal information we hold about you. We comply with the Digital Personal Data Protection Act, 2023 (India), and where relevant the GDPR for partners in the EU.",
      "Send any rights request to gnanimarketingsolutions@gmail.com. We respond within 30 days.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "We store information on infrastructure with industry-standard encryption at rest and in transit. Access to client data is limited to the team members on the engagement. We don't keep card numbers, banking credentials or production secrets in plain text.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy when our practices change. The effective date at the top of this page reflects the most recent revision. Material changes are notified to active partners directly.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "GMS · Gnani Marketing Solutions · Hyderabad, India.",
      "Email: gnanimarketingsolutions@gmail.com · Phone: +44 7442 559228.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <LegalPage
        eyebrow="Privacy"
        title="Privacy"
        italic="policy."
        intro="A short, plain-language summary of what information we collect, why we collect it, and how we keep it. We treat your information the way we'd want ours treated."
        effective="9 May 2026"
        sections={SECTIONS}
      />
      <Footer />
    </main>
  );
}
