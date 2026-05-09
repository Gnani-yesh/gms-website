import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { ContactHero } from "@/components/contact/hero";
import { ContactPanel } from "@/components/contact/panel";

export const metadata: Metadata = {
  title: "Contact — GMS",
  description:
    "Start a project with GMS. Hyderabad-based studio working with a small number of partners each year on websites, platforms, brands and growth.",
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <ContactHero />
      <ContactPanel />
      <Footer />
    </main>
  );
}
