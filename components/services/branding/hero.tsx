"use client";

import { motion } from "framer-motion";
import { ServiceHeroShell } from "@/components/shared/service-hero-shell";

export function BrandingHero() {
  return (
    <ServiceHeroShell
      serviceNumber="04"
      serviceLabel="Branding"
      title={
        <>
          Brands designed
          <br />
          to be remembered.
        </>
      }
      description={
        <>
          Identity, creative direction and photography that make your business
          look as good as it actually is.
        </>
      }
      primaryLabel="Start a brand"
      ghostLabel="See selected work"
      ghostHref="#showcase"
      tone="warm"
    >
      <BrandingPreview />
    </ServiceHeroShell>
  );
}

/* ════════════════════════════════════════════
   BRANDING PREVIEW — editorial brand spread
   ════════════════════════════════════════════ */
function BrandingPreview() {
  return (
    <div className="relative">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mx-auto h-[88%] w-[94%] translate-y-12 blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 50% 60%, rgba(168,136,74,0.20), rgba(184,149,110,0.06) 55%, transparent 78%)",
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        className="glass-strong relative w-full overflow-hidden rounded-2xl shadow-premium ring-1 ring-white/[0.05]"
        style={{ aspectRatio: "16 / 10" }}
      >
        {/* Editorial spread — no chrome, this is a brand book page */}
        <div className="relative grid h-full grid-cols-12 gap-px bg-white/[0.03]">
          {/* Left page — wordmark + palette */}
          <div className="col-span-12 flex flex-col bg-ink-900/80 p-6 md:col-span-5 md:p-9">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] tracking-[0.22em] text-fog-muted sm:text-[9px]">
                — IDENTITY · 01
              </span>
              <span className="font-mono text-[8px] tracking-[0.22em] text-fog-muted sm:text-[9px]">
                MMXXVI
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <div className="font-mono text-[7.5px] tracking-[0.22em] text-fog-muted sm:text-[8.5px]">
                WORDMARK · PRIMARY
              </div>
              <div
                className="mt-2 font-display font-medium leading-[0.85] tracking-tightest text-white"
                style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
              >
                Halcyon
              </div>
              <div className="mt-1 font-display italic font-light leading-none tracking-tightest text-fog" style={{ fontSize: "clamp(28px, 5vw, 64px)" }}>
                House
              </div>
              <div className="mt-4 max-w-[220px] text-[9.5px] leading-[1.6] text-fog md:text-[10.5px]">
                A house, not a hotel. A name written like an heirloom — set in
                a serif that&apos;s slow to read.
              </div>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-1">
              {[
                "#0F0B07",
                "#F5EEE1",
                "#B8956E",
                "#6B4F3A",
                "#1A1410",
              ].map((c, i) => (
                <div
                  key={c}
                  className="aspect-square rounded-sm ring-1 ring-white/5"
                  style={{
                    background: c,
                    boxShadow: i === 1 ? "inset 0 1px 0 rgba(0,0,0,0.04)" : undefined,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right page — photography */}
          <div className="relative col-span-12 overflow-hidden bg-ink-900/80 md:col-span-7">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #2a221b 0%, #5a4733 35%, #1a1410 75%, #07070A 100%)",
              }}
            />
            <div
              className="absolute right-0 top-0 h-2/3 w-1/2 blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(255,210,140,0.32), transparent 70%)",
              }}
            />
            {/* Architectural archway */}
            <svg
              viewBox="0 0 200 130"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <line x1="0" y1="98" x2="200" y2="98" stroke="rgba(245,238,225,0.20)" strokeWidth="0.4" />
              <path d="M 60 98 L 60 56 Q 100 32 140 56 L 140 98" fill="none" stroke="rgba(245,238,225,0.32)" strokeWidth="0.6" />
              <path d="M 64 98 L 64 58 Q 100 36 136 58 L 136 98 Z" fill="rgba(0,0,0,0.18)" />
              <ellipse cx="100" cy="86" rx="22" ry="9" fill="rgba(255,210,140,0.08)" filter="blur(6px)" />
            </svg>
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
              }}
            />

            {/* Top meta */}
            <div className="absolute inset-x-6 top-6 flex items-center justify-between font-mono text-[8px] tracking-[0.22em] text-white/70 sm:text-[9px]">
              <span>FIG. 04 · ELEV.</span>
              <span>NORTH GOA</span>
            </div>

            {/* Bottom caption */}
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
              <div>
                <div className="font-mono text-[7.5px] tracking-[0.22em] text-white/60 sm:text-[8.5px]">
                  — A return to
                </div>
                <div className="mt-1 font-display italic font-light text-white" style={{ fontSize: "clamp(20px, 3vw, 36px)" }}>
                  the slow.
                </div>
              </div>
              <span className="font-mono text-[7.5px] tracking-[0.22em] text-white/55 sm:text-[8.5px]">
                MMXXVI
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
