"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function WebsitesHero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 sm:pt-44 md:pt-56">
      <AmbientField />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="container relative">
        {/* Service tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 backdrop-blur-md"
        >
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog">
            <Link href="/" className="text-fog-muted transition-colors hover:text-fog">
              GMS
            </Link>
            <span className="mx-2 text-fog-muted">/</span>
            Service · 01 — Websites
          </span>
        </motion.div>

        {/* Headline + subtext */}
        <div className="mx-auto mt-8 max-w-[1100px] text-center sm:mt-10 md:mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.15 }}
            className="font-display text-display-xl font-medium text-balance"
          >
            Websites built
            <br />
            like infrastructure.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
            className="mx-auto mt-7 max-w-[600px] text-pretty text-[15.5px] leading-[1.6] text-fog sm:mt-9 sm:text-[16px] md:text-[17.5px]"
          >
            We design and engineer premium websites — fast, expressive,
            SEO-ready, conversion-focused, and built to age well.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row"
          >
            <Link href="/contact" className="btn-primary">
              Start a website
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
            </Link>
            <Link href="#showcase" className="btn-ghost">
              <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
              See selected work
            </Link>
          </motion.div>
        </div>

        {/* Hero website preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease, delay: 0.55 }}
          className="relative mx-auto mt-20 max-w-[1180px] sm:mt-28 md:mt-40"
        >
          <HeroPreview />
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   HERO PREVIEW — Halcyon House luxury hospitality
   ════════════════════════════════════════════ */
function HeroPreview() {
  return (
    <div className="relative">
      {/* Soft underglow — warm earthy tones */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mx-auto h-[88%] w-[94%] translate-y-12 blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 50% 60%, rgba(168,136,74,0.18), rgba(184,149,110,0.05) 55%, transparent 78%)",
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Cinematic horizon */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[10%] top-[58%] -z-10 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
      />

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        className="glass-strong relative w-full overflow-hidden rounded-2xl shadow-premium ring-1 ring-white/[0.05]"
        style={{ aspectRatio: "16 / 10" }}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/[0.05] bg-white/[0.02] px-3 py-1">
            <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
            <span className="font-mono text-[9.5px] tracking-wider text-fog-muted">
              halcyon.house
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-white/15" />
            <span className="h-1 w-1 rounded-full bg-white/15" />
            <span className="h-1 w-1 rounded-full bg-white/15" />
          </div>
        </div>

        {/* Site body */}
        <div className="relative flex h-[calc(100%-44px)] flex-col">
          {/* Site header */}
          <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 lg:px-12 lg:py-6">
            <span className="font-display text-[12px] font-medium tracking-tight-display text-white sm:text-[13px] lg:text-[15px]">
              Halcyon House
            </span>
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              {["STAY", "STORY", "CONCIERGE", "RESERVE"].map((n) => (
                <span
                  key={n}
                  className="font-mono text-[7.5px] tracking-[0.22em] text-fog-muted sm:text-[8px] lg:text-[9px]"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Hero — text + atmospheric image area */}
          <div className="flex flex-1 gap-5 px-5 pb-4 sm:gap-8 sm:px-8 sm:pb-6 lg:gap-14 lg:px-12 lg:pb-8">
            {/* Editorial text */}
            <div className="flex flex-1 flex-col justify-center">
              <div className="font-mono text-[7.5px] uppercase tracking-[0.22em] text-fog-muted sm:text-[8.5px] lg:text-[9px]">
                — Est. MMXXII · North Goa
              </div>
              <div
                className="mt-3 font-display font-medium leading-[0.9] tracking-tightest text-white"
                style={{ fontSize: "clamp(22px, 4.4vw, 56px)" }}
              >
                A return to
                <br />
                <span className="italic font-light text-fog">the slow.</span>
              </div>
              <div className="mt-4 max-w-[220px] text-[9px] leading-[1.55] text-fog sm:text-[10px] lg:text-[11px]">
                A house, not a hotel. By the Mandovi river, written like an
                heirloom.
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 sm:px-3 sm:py-1.5">
                <span className="relative flex h-1 w-1">
                  <span className="absolute inset-0 animate-pulse-soft rounded-full bg-accent" />
                  <span className="relative h-1 w-1 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[7.5px] tracking-[0.2em] text-fog sm:text-[8.5px]">
                  RESERVATIONS · SPRING 2026
                </span>
              </div>
            </div>

            {/* Atmospheric image area */}
            <div className="relative hidden aspect-[3/4] w-[40%] overflow-hidden rounded-lg ring-1 ring-white/[0.08] sm:block lg:w-[42%]">
              {/* Earth gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(170deg, #2a221b 0%, #5a4733 30%, #1a1410 70%, #07070A 100%)",
                }}
              />
              {/* Warm light wash from upper-right */}
              <div
                className="absolute right-0 top-0 h-1/2 w-2/3 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(255,210,140,0.32), transparent 70%)",
                }}
              />
              {/* Architectural archway silhouette */}
              <svg
                viewBox="0 0 100 130"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden
              >
                {/* Horizon line */}
                <line
                  x1="0"
                  y1="92"
                  x2="100"
                  y2="92"
                  stroke="rgba(245,238,225,0.25)"
                  strokeWidth="0.4"
                />
                {/* Archway frame */}
                <path
                  d="M 22 92 L 22 50 Q 50 28 78 50 L 78 92"
                  fill="none"
                  stroke="rgba(245,238,225,0.32)"
                  strokeWidth="0.6"
                />
                {/* Inner archway shadow */}
                <path
                  d="M 26 92 L 26 52 Q 50 32 74 52 L 74 92 Z"
                  fill="rgba(0,0,0,0.18)"
                />
                {/* Distant light through arch */}
                <ellipse
                  cx="50"
                  cy="80"
                  rx="14"
                  ry="6"
                  fill="rgba(255,210,140,0.10)"
                  filter="blur(4px)"
                />
                {/* Floor plane */}
                <line
                  x1="22"
                  y1="92"
                  x2="78"
                  y2="92"
                  stroke="rgba(245,238,225,0.20)"
                  strokeWidth="0.4"
                />
              </svg>
              {/* Subtle film texture */}
              <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                }}
              />
              {/* Caption */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between font-mono text-[7px] tracking-[0.18em] text-white/70">
                <span>FIG. 04</span>
                <span>NORTH GOA</span>
              </div>
            </div>
          </div>

          {/* Footer rail */}
          <div className="flex items-center justify-between border-t border-white/[0.04] px-5 py-3 sm:px-8 lg:px-12">
            <span className="font-mono text-[7.5px] tracking-wider text-fog-muted sm:text-[8px]">
              © 2026
            </span>
            <span className="flex items-center gap-1 font-mono text-[7.5px] tracking-wider text-fog-muted sm:text-[8px]">
              RESERVE
              <span aria-hidden className="text-[9px]">↗</span>
            </span>
          </div>

          {/* Soft scan-light */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-scan opacity-[0.035]"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)",
            }}
          />

          {/* Top inner wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/3 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.04), transparent)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function AmbientField() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1200px] overflow-hidden">
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 820,
          height: 820,
          left: "-14%",
          top: "-20%",
          background:
            "radial-gradient(closest-side, rgba(168,136,74,0.16), rgba(168,136,74,0))",
        }}
        animate={{ opacity: [0.55, 0.78, 0.55] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 880,
          height: 880,
          right: "-14%",
          top: "-10%",
          background:
            "radial-gradient(closest-side, rgba(184,149,110,0.14), rgba(184,149,110,0))",
          animationDelay: "-8s",
        }}
        animate={{ opacity: [0.78, 0.55, 0.78] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <div
        className="ambient"
        style={{
          width: 1100,
          height: 460,
          left: "50%",
          top: "38%",
          transform: "translateX(-50%)",
          opacity: 0.78,
          background:
            "radial-gradient(closest-side, rgba(200,169,107,0.12), rgba(200,169,107,0))",
        }}
      />
      <motion.div
        className="ambient"
        style={{
          width: 900,
          height: 360,
          left: "50%",
          top: "78%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(closest-side, rgba(200,169,107,0.08), transparent)",
        }}
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
