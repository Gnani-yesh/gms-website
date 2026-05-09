import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { GrowthHero } from "@/components/services/growth/hero";
import { GrowthShowcase } from "@/components/services/growth/showcase";
import { GrowthCapabilities } from "@/components/services/growth/capabilities";
import { GrowthProcess } from "@/components/services/growth/process";
import { GrowthExperience } from "@/components/services/growth/experience";
import { GrowthCTA } from "@/components/services/growth/cta";

export const metadata: Metadata = {
  title: "Growth — GMS",
  description:
    "SEO, paid media, content and social — engineered as connected growth infrastructure for ambitious modern brands.",
};

export default function GrowthPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <GrowthHero />
      <GrowthShowcase />
      <GrowthCapabilities />
      <GrowthProcess />
      <GrowthExperience />
      <GrowthCTA />
      <Footer />
    </main>
  );
}
