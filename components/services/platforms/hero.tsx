"use client";

import { motion } from "framer-motion";
import { ServiceHeroShell } from "@/components/shared/service-hero-shell";
import { ChromeBar, ScanLight, TopInnerWash } from "@/components/shared/preview-primitives";

export function PlatformsHero() {
  return (
    <ServiceHeroShell
      serviceNumber="02"
      serviceLabel="Platforms"
      title={
        <>
          Operations
          <br />
          <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            engineered
          </span>{" "}
          <span className="italic font-light text-fog">like infrastructure.</span>
        </>
      }
      description={
        <>
          Custom platforms, internal tools and operational systems — built as
          compounding infrastructure your team can own, extend, and run for
          years without rewriting.
        </>
      }
      primaryLabel="Start a platform"
      ghostLabel="See selected platforms"
      ghostHref="#showcase"
      tone="cool"
    >
      <PlatformPreview />
    </ServiceHeroShell>
  );
}

/* ════════════════════════════════════════════
   PLATFORM PREVIEW — Halcyon · Concierge
   The internal operations console used by the
   hospitality brand whose website is on the
   Websites page. Same brand, opposite surface.
   ════════════════════════════════════════════ */
function PlatformPreview() {
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
        <ChromeBar url="halcyon.house/admin" />

        <div className="relative flex h-[calc(100%-44px)] flex-col">
          {/* Operations header */}
          <div className="flex items-center justify-between border-b border-white/[0.04] px-5 py-3 sm:px-7 sm:py-4 lg:px-9 lg:py-4">
            <div className="flex items-center gap-3">
              <span className="grid h-5 w-5 place-items-center rounded-md border border-white/10 bg-white/[0.03]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-display text-[12px] font-medium tracking-tight-display text-white sm:text-[13px] lg:text-[14px]">
                Halcyon · Concierge
              </span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3.5 lg:gap-5">
              {["BOOKINGS", "GUESTS", "ROOMS", "REPORTS"].map((n, i) => (
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

          {/* Body — sidebar + main */}
          <div className="grid flex-1 grid-cols-12 gap-px bg-white/[0.03]">
            {/* Sidebar (md+) */}
            <aside className="col-span-12 hidden flex-col bg-ink-900/80 p-4 md:col-span-3 md:flex md:p-5">
              <div className="font-mono text-[8px] tracking-[0.22em] text-fog-muted">
                THIS WEEK
              </div>
              <div className="mt-3 space-y-1.5">
                {[
                  { label: "Arrivals", v: "12", live: true },
                  { label: "Departures", v: "8" },
                  { label: "In-house", v: "24" },
                  { label: "Concierge", v: "7" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between rounded-md border border-white/[0.05] bg-white/[0.015] px-2.5 py-2"
                  >
                    <div className="flex items-center gap-2">
                      {r.live && (
                        <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
                      )}
                      <span className="text-[10px] text-fog">{r.label}</span>
                    </div>
                    <span className="font-mono text-[10.5px] text-white">
                      {r.v}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="font-mono text-[8px] tracking-[0.22em] text-fog-muted">
                  OCCUPANCY
                </div>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="font-display text-[22px] font-medium leading-none tracking-tightest text-white">
                    87
                  </span>
                  <span className="font-display text-[12px] leading-none tracking-tightest text-fog">
                    %
                  </span>
                </div>
                <div className="mt-2 h-px bg-white/[0.05]">
                  <div className="h-full w-[87%] bg-gradient-to-r from-white/40 to-white/15" />
                </div>
              </div>
            </aside>

            {/* Main — bookings calendar */}
            <main className="col-span-12 bg-ink-900/60 p-4 md:col-span-9 md:p-6 lg:p-8">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-fog-muted sm:text-[8.5px]">
                    — Operations · 2026
                  </div>
                  <div className="mt-2 font-display text-[18px] font-medium tracking-tight-display text-white sm:text-[20px] lg:text-[24px]">
                    This week
                  </div>
                </div>
                <div className="hidden items-center gap-1.5 md:flex">
                  {["DAY", "WEEK", "MONTH"].map((r, i) => (
                    <span
                      key={r}
                      className={`rounded-md px-2 py-0.5 font-mono text-[8px] tracking-[0.18em] ${
                        i === 1
                          ? "bg-white/[0.06] text-white"
                          : "text-fog-muted"
                      }`}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Calendar grid */}
              <div className="mt-5">
                <div className="grid grid-cols-7 gap-1.5 font-mono text-[7.5px] uppercase tracking-[0.18em] text-fog-muted">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
                    <div key={d} className="text-center">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Booking blocks */}
                <div className="mt-2 space-y-1.5">
                  {[
                    [
                      [0, 3, "Goldsmith · Suite 04", "warm"],
                      [3, 4, "Mehta · 02", "warm"],
                    ],
                    [
                      [1, 5, "Foster Family · Riverside", "accent"],
                      [5, 7, "Patel · 05", "warm"],
                    ],
                    [
                      [0, 2, "Lin · 03", "warm"],
                      [2, 4, "Walters · 07", "accent"],
                      [4, 7, "Vakil · Pavilion", "warm"],
                    ],
                  ].map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="grid grid-cols-7 gap-1.5"
                    >
                      {row.map((b, i) => {
                        const [start, end, label, tone] = b as [
                          number,
                          number,
                          string,
                          string
                        ];
                        return (
                          <div
                            key={i}
                            className={`relative truncate rounded-md px-2 py-1.5 font-mono text-[7.5px] tracking-[0.14em] ${
                              tone === "accent"
                                ? "border border-accent/30 bg-accent/15 text-accent"
                                : "border border-white/[0.06] bg-white/[0.025] text-fog"
                            }`}
                            style={{
                              gridColumn: `${start + 1} / ${end + 1}`,
                            }}
                          >
                            {label}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer KPIs */}
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/[0.05] pt-4">
                {[
                  { label: "RevPAR", v: "$842" },
                  { label: "ADR", v: "$1,210" },
                  { label: "On-time", v: "99.4%" },
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
