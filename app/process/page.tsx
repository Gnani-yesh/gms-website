import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { ProcessHero } from "@/components/process-page/hero";
import { ProcessTimeline } from "@/components/process-page/timeline";
import { ProcessEngagement } from "@/components/process-page/engagement";
import { ProcessCTA } from "@/components/process-page/cta";

export const metadata: Metadata = {
  title: "Process — GMS",
  description:
    "Discovery, Strategy, Infrastructure, Launch, Growth, Refinement. The operating model behind every GMS engagement.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <ProcessHero />
      <ProcessTimeline />
      <ProcessEngagement />
      <ProcessCTA />
      <Footer />
    </main>
  );
}
