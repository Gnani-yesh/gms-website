"use client";

import { motion } from "framer-motion";
import { ServiceHeroShell } from "@/components/shared/service-hero-shell";
import { ChromeBar, ScanLight, TopInnerWash } from "@/components/shared/preview-primitives";

export function GrowthHero() {
  return (
    <ServiceHeroShell
      serviceNumber="03"
      serviceLabel="Growth"
      title={
        <>
          Growth that brings in customers,
          <br />
          not just traffic.
        </>
      }
      description={
        <>
          SEO, paid media, content and social — run as one system that builds
          on itself, not four separate retainers.
        </>
      }
      primaryLabel="Start with growth"
      ghostLabel="See selected programs"
      ghostHref="#showcase"
      tone="cool"
    >
      <GrowthPreview />
    </ServiceHeroShell>
  );
}

function GrowthPreview() {
  return (
    <div className="relative">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mx-auto h-[88%] w-[94%] translate-y-12 blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 50% 60%, rgba(61,107,255,0.16), rgba(168,136,74,0.06) 55%, transparent 78%)",
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
        <ChromeBar url="growth.gnanimarketing.com/northwave" />

        <div className="relative flex h-[calc(100%-44px)] flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.04] px-5 py-3 sm:px-7 sm:py-4 lg:px-9 lg:py-4">
            <div className="flex items-center gap-3">
              <span className="grid h-5 w-5 place-items-center rounded-md border border-white/10 bg-white/[0.03]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-display text-[12px] font-medium tracking-tight-display text-white sm:text-[13px] lg:text-[14px]">
                Northwave · Growth
              </span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3.5 lg:gap-5">
              {["OVERVIEW", "SEO", "ADS", "CONTENT", "SOCIAL"].map((n, i) => (
                <span
                  key={n}
                  className={`font-mono text-[7.5px] tracking-[0.22em] sm:text-[8px] lg:text-[8.5px] ${
                    i === 0 ? "text-white" : "text-fog-muted"
                  }`}
                >
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="grid flex-1 grid-cols-12 gap-px bg-white/[0.03]">
            {/* Sidebar — channel mix */}
            <aside className="col-span-12 hidden bg-ink-900/80 p-4 md:col-span-3 md:block md:p-5">
              <div className="font-mono text-[8px] tracking-[0.22em] text-fog-muted">
                CHANNEL MIX · Q1
              </div>
              <div className="mt-3 space-y-2.5">
                {[
                  { label: "Organic", v: "44%", w: 44 },
                  { label: "Paid · Meta", v: "26%", w: 26 },
                  { label: "Paid · Search", v: "18%", w: 18 },
                  { label: "Editorial", v: "12%", w: 12 },
                ].map((r) => (
                  <div key={r.label}>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-fog">{r.label}</span>
                      <span className="font-mono text-white">{r.v}</span>
                    </div>
                    <div className="mt-1.5 h-px w-full bg-white/[0.05]">
                      <div
                        className="h-full bg-gradient-to-r from-white/40 to-white/10"
                        style={{ width: `${r.w}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main */}
            <main className="col-span-12 bg-ink-900/60 p-4 md:col-span-9 md:p-6 lg:p-8">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-fog-muted sm:text-[8.5px]">
                    — Pipeline · Last 12 months
                  </div>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="font-display text-[28px] font-medium leading-none tracking-tightest text-white sm:text-[32px] lg:text-[40px]">
                      +218%
                    </span>
                    <span className="text-[11.5px] text-fog-muted">
                      qualified · YoY
                    </span>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[8.5px] tracking-wider text-emerald-300/90">
                  +1.8 PTS
                </span>
              </div>

              {/* Chart */}
              <svg viewBox="0 0 320 80" className="mt-4 h-[64px] w-full" aria-hidden>
                <defs>
                  <linearGradient id="growth-line" x1="0" x2="1">
                    <stop offset="0%" stopColor="#C8A96B" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#C8A96B" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="growth-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C8A96B" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#C8A96B" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[16, 32, 48, 64].map((y) => (
                  <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(255,255,255,0.04)" strokeDasharray="2 4" />
                ))}
                <path d="M 0 64 L 24 60 L 48 62 L 72 52 L 96 54 L 120 44 L 144 46 L 168 34 L 192 38 L 216 24 L 240 28 L 264 12 L 288 16 L 320 4 L 320 80 L 0 80 Z" fill="url(#growth-area)" />
                <path d="M 0 64 L 24 60 L 48 62 L 72 52 L 96 54 L 120 44 L 144 46 L 168 34 L 192 38 L 216 24 L 240 28 L 264 12 L 288 16 L 320 4" fill="none" stroke="url(#growth-line)" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="320" cy="4" r="2.5" fill="#C8A96B" />
                <circle cx="320" cy="4" r="6" fill="#C8A96B" opacity="0.18" />
              </svg>

              {/* KPI tiles */}
              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/[0.05] pt-4 md:grid-cols-4">
                {[
                  { label: "ROAS", v: "4.2×" },
                  { label: "CAC", v: "−34%" },
                  { label: "DR", v: "67" },
                  { label: "Sessions", v: "184k" },
                ].map((t) => (
                  <div key={t.label}>
                    <div className="font-mono text-[7.5px] tracking-[0.18em] text-fog-muted">
                      {t.label}
                    </div>
                    <div className="mt-1 font-display text-[14px] font-medium tracking-tight-display text-white sm:text-[16px]">
                      {t.v}
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>

          <ScanLight />
          <TopInnerWash />
        </div>
      </motion.div>
    </div>
  );
}
