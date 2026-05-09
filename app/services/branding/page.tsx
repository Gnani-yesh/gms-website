import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageAtmosphere } from "@/components/shared/page-atmosphere";
import { BrandingHero } from "@/components/services/branding/hero";
import { BrandingShowcase } from "@/components/services/branding/showcase";
import { BrandingCapabilities } from "@/components/services/branding/capabilities";
import { BrandingProcess } from "@/components/services/branding/process";
import { BrandingExperience } from "@/components/services/branding/experience";
import { BrandingCTA } from "@/components/services/branding/cta";

export const metadata: Metadata = {
  title: "Branding — GMS",
  description:
    "Brand identity, creative direction, photography and editorial systems — designed for companies that want to be remembered.",
};

export default function BrandingPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />
      <PageAtmosphere />
      <BrandingHero />
      <BrandingShowcase />
      <BrandingCapabilities />
      <BrandingProcess />
      <BrandingExperience />
      <BrandingCTA />
      <Footer />
    </main>
  );
}
