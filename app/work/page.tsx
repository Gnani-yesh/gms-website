import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { WorkHero } from "@/components/work/hero";
import { WorkIndex } from "@/components/work/index-list";
import { WorkCTA } from "@/components/work/cta";

export const metadata: Metadata = {
  title: "Selected Work — GMS",
  description:
    "Selected case studies — websites, platforms, brands and growth systems built for ambitious modern businesses.",
};

export default function WorkPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <WorkHero />
      <WorkIndex />
      <WorkCTA />
      <Footer />
    </main>
  );
}
