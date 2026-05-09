import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { ServicesHero } from "@/components/services-overview/hero";
import { ServicesEcosystem } from "@/components/services-overview/ecosystem";
import { ServicesPrinciples } from "@/components/services-overview/principles";
import { ServicesCTA } from "@/components/services-overview/cta";

export const metadata: Metadata = {
  title: "Services — GMS",
  description:
    "Build, Grow, Brand — engineered as one connected operating system. Premium digital infrastructure for ambitious modern businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <ServicesHero />
      <ServicesEcosystem />
      <ServicesPrinciples />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
