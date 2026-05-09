import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Positioning } from "@/components/site/positioning";
import { Capabilities } from "@/components/site/capabilities";
import { Work } from "@/components/site/work";
import { Process } from "@/components/site/process";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-ink-950">
      <Navbar />

      {/* Subtle film grain — gives surfaces a cinematic depth */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Soft global vignette — deepens the page edges */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <Hero />
      <Positioning />
      <Capabilities />
      <Work />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
