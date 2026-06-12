import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { StudioHero } from "@/components/studio/hero";
import { StudioPhilosophy } from "@/components/studio/philosophy";
import { StudioPrinciples } from "@/components/studio/principles";
import { StudioFounder } from "@/components/studio/founder";
import { StudioTeam } from "@/components/studio/team";
import { StudioFacts } from "@/components/studio/facts";
import { StudioCTA } from "@/components/studio/cta";

export const metadata: Metadata = {
  title: "Studio — GMS",
  description:
    "GMS is a digital infrastructure and growth studio based in Hyderabad. Our philosophy, standards and approach to building for ambitious modern brands.",
};

export default function StudioPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <StudioHero />
      <StudioPhilosophy />
      <StudioPrinciples />
      <StudioFounder />
      <StudioTeam />
      <StudioFacts />
      <StudioCTA />
      <Footer />
    </main>
  );
}
