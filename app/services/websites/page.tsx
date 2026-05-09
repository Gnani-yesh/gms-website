import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WebsitesHero } from "@/components/services/websites/hero";
import { WebsitesShowcase } from "@/components/services/websites/showcase";
import { WebsitesCapabilities } from "@/components/services/websites/capabilities";
import { WebsitesProcess } from "@/components/services/websites/process";
import { WebsitesExperience } from "@/components/services/websites/experience";
import { WebsitesCTA } from "@/components/services/websites/cta";

export const metadata: Metadata = {
  title: "Websites — GMS",
  description:
    "Premium websites engineered for ambitious modern businesses. Cinematic, fast, SEO-ready, built to compound over years.",
};

export default function WebsitesPage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />

      {/* Subtle film grain — same cinematic depth as homepage */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Soft global vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <WebsitesHero />
      <WebsitesShowcase />
      <WebsitesCapabilities />
      <WebsitesProcess />
      <WebsitesExperience />
      <WebsitesCTA />
      <Footer />
    </main>
  );
}
