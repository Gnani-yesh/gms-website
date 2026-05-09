import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — GMS",
  description:
    "Terms of service for clients, partners and visitors using the GMS website and engaging with the studio.",
  alternates: { canonical: "/terms" },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    paragraphs: [
      "By accessing this website or engaging Gnani Marketing Solutions (“GMS”) on a project, you agree to these terms. If you don't agree, don't use the site or engage the studio.",
      "Project engagements are additionally governed by a separate written Statement of Work (“SOW”) signed before kickoff. Where the SOW and these terms conflict, the SOW takes precedence for that engagement.",
    ],
  },
  {
    heading: "The work we deliver",
    paragraphs: [
      "We deliver design, engineering, brand and growth services as scoped in writing. The SOW for each engagement names the specific deliverables, timeline, fees and acceptance criteria.",
      "We work with a small number of partners each year. We reserve the right to decline engagements that fall outside our practice or our capacity.",
    ],
  },
  {
    heading: "Fees and payment",
    paragraphs: [
      "Build phases are quoted at a fixed price, billed in two or three instalments tied to milestones. Operating phases are billed quarterly in advance with the option to cancel at the end of any quarter.",
      "Invoices are due on issue. Persistent non-payment may result in pausing the engagement until invoices are settled.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "On full payment of the fees for an engagement, we transfer ownership of final deliverables — final brand assets, code, content, working files — to the client.",
      "We retain ownership of pre-existing tooling, internal libraries, and process documentation we used to deliver the work. We retain the right to reference the engagement and use approved screenshots in our portfolio and marketing.",
    ],
  },
  {
    heading: "Confidentiality",
    paragraphs: [
      "We treat client information shared during the engagement as confidential. We don't share business strategy, financials, customer data, or unreleased work with anyone outside the engagement team without written permission.",
      "Where the engagement requires it, we sign a separate non-disclosure agreement before kickoff.",
    ],
  },
  {
    heading: "Warranties and liability",
    paragraphs: [
      "We deliver the work to a professional standard, on the timeline named in the SOW. We don't warrant outcomes that depend on factors outside our control — market conditions, third-party platforms, in-house operating decisions.",
      "Our total liability for any engagement is limited to the fees paid for that engagement. We're not liable for indirect or consequential losses.",
    ],
  },
  {
    heading: "Termination",
    paragraphs: [
      "Either party can terminate an engagement on 30 days' written notice. Operating retainers can be cancelled at the end of any quarter without penalty.",
      "On termination, we hand over all completed work, any in-progress files, and the credentials needed to continue running the systems we shipped.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions about these terms — gnanimarketingsolutions@gmail.com.",
      "GMS · Gnani Marketing Solutions · Hyderabad, India.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <LegalPage
        eyebrow="Terms"
        title="Terms of"
        italic="service."
        intro="The basic ground rules for using this website and for engaging the studio. Written to be readable in five minutes."
        effective="9 May 2026"
        sections={SECTIONS}
      />
      <Footer />
    </main>
  );
}
