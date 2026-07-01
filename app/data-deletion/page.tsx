import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Data Deletion Instructions — GMS",
  description:
    "How to request deletion of your personal data and connected Meta account information from GMS Platform.",
  alternates: { canonical: "/data-deletion" },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Requesting data deletion",
    paragraphs: [
      "If you have connected your Meta account (such as Facebook, Instagram, or WhatsApp) to GMS Platform and would like your associated data removed, please submit a data deletion request by following these steps:",
    ],
    list: [
      "Send an email to gnanimarketingsolutions@gmail.com.",
      "Use the subject line: Data Deletion Request.",
      "Include your full name.",
      "Include the email address associated with your GMS Platform account.",
      "Include the Facebook, Instagram, or WhatsApp Business account connected to GMS Platform (if applicable).",
    ],
  },
  {
    heading: "What happens after your request",
    paragraphs: [
      "Once we receive your request, we will verify your identity to protect your account and data. After successful verification, we will:",
    ],
    list: [
      "Delete your GMS Platform account and any associated personal data.",
      "Remove any Meta access tokens and authentication credentials stored by GMS Platform.",
      "Delete information related to your connected Meta accounts, unless we are required to retain certain data to comply with legal, regulatory, or security obligations.",
    ],
  },
  {
    heading: "Processing time",
    paragraphs: [
      "Data deletion requests are typically processed within 30 days of successful identity verification.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "If you have any questions regarding data deletion or privacy, please contact us at gnanimarketingsolutions@gmail.com.",
    ],
  },
];

export default function DataDeletionPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <LegalPage
        eyebrow="Data"
        title="Data deletion"
        italic="instructions."
        intro="At GMS Platform, we respect your privacy and provide users with the ability to request the deletion of their personal data at any time."
        effective="25 June 2026"
        sections={SECTIONS}
      />
      <Footer />
    </main>
  );
}
