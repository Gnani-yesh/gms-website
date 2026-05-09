import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { PlatformsHero } from "@/components/services/platforms/hero";
import { PlatformsShowcase } from "@/components/services/platforms/showcase";
import { PlatformsCapabilities } from "@/components/services/platforms/capabilities";
import { PlatformsProcess } from "@/components/services/platforms/process";
import { PlatformsExperience } from "@/components/services/platforms/experience";
import { PlatformsCTA } from "@/components/services/platforms/cta";

export const metadata: Metadata = {
  title: "Platforms — GMS",
  description:
    "Custom platforms, internal tools and operational infrastructure — engineered as compounding systems for ambitious modern businesses.",
};

export default function PlatformsPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <PlatformsHero />
      <PlatformsShowcase />
      <PlatformsCapabilities />
      <PlatformsProcess />
      <PlatformsExperience />
      <PlatformsCTA />
      <Footer />
    </main>
  );
}
