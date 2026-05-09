"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionAura } from "./section-aura";

type CaseStudy = {
  client: string;
  sector: string;
  year: string;
  title: string;
  metric: string;
  metricLabel: string;
  visual: "saas" | "editorial" | "finance" | "commerce";
};

const CASES: CaseStudy[] = [
  {
    client: "Northwave",
    sector: "B2B SaaS",
    year: "2025 — 26",
    title: "Rebuilt brand and full marketing platform",
    metric: "+218%",
    metricLabel: "qualified pipeline · YoY",
    visual: "saas",
  },
  {
    client: "Atelier Studio",
    sector: "Architecture",
    year: "2025",
    title: "Cinematic portfolio engineered for taste",
    metric: "4.2×",
    metricLabel: "inbound enquiries",
    visual: "editorial",
  },
  {
    client: "Halcyon Capital",
    sector: "Private Markets",
    year: "2024 — 25",
    title: "Investor portal and content infrastructure",
    metric: "84%",
    metricLabel: "lower acquisition cost",
    visual: "finance",
  },
  {
    client: "Lumen Goods",
    sector: "Editorial Commerce",
    year: "2025",
    title: "Editorial commerce platform and growth system",
    metric: "+312%",
    metricLabel: "annual revenue",
    visual: "commerce",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-40 md:py-56">
      <SectionAura tone="warm" position="top-right" size={760} />
      <SectionAura tone="cool" position="bottom-left" size={680} />

      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            index="03"
            eyebrow="Selected Work"
            title={
              <>
                Work crafted with
                <br />
                <span className="text-fog">teams who care.</span>
              </>
            }
          />
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 self-end text-[13px] text-fog transition-colors duration-300 hover:text-white"
          >
            All case studies
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.25}
            />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {CASES.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
                delay: (i % 2) * 0.08,
              }}
            >
            <Link
              href="/work"
              className="lift group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/80 hover:border-white/[0.10]"
            >
              <CaseVisual case={c} />

              <div className="px-7 pb-9 pt-7 md:px-9 md:pb-10 md:pt-8">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog-muted">
                  <span className="text-fog">{c.client}</span>
                  <span className="h-2.5 w-px bg-white/15" />
                  <span>{c.sector}</span>
                  <span className="h-2.5 w-px bg-white/15" />
                  <span>{c.year}</span>
                </div>
                <div className="mt-4 flex items-end justify-between gap-6">
                  <h3 className="max-w-[420px] font-display text-[22px] font-medium leading-[1.15] tracking-tight-display md:text-[26px]">
                    {c.title}
                  </h3>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-fog-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="mt-7 flex items-baseline gap-3 border-t border-white/[0.06] pt-5">
                  <span className="font-display text-[26px] font-medium tracking-tightest text-accent">
                    {c.metric}
                  </span>
                  <span className="text-[12.5px] text-fog-muted">
                    {c.metricLabel}
                  </span>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────
   CASE VISUALS — bespoke per project
   ──────────────────────────────────────────── */
function CaseVisual({ case: c }: { case: CaseStudy }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <Backdrop visual={c.visual} />
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="absolute inset-0 flex items-center justify-center p-7 md:p-10">
        {c.visual === "saas" && <SaasVisual />}
        {c.visual === "editorial" && <EditorialVisual />}
        {c.visual === "finance" && <FinanceVisual />}
        {c.visual === "commerce" && <CommerceVisual />}
      </div>

      {/* Soft ambient blur halo behind card */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.4), transparent 70%)",
        }}
      />

      {/* Vignette to blend into card body */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"
      />
    </div>
  );
}

function Backdrop({ visual }: { visual: CaseStudy["visual"] }) {
  const styles: Record<CaseStudy["visual"], React.CSSProperties> = {
    saas: {
      background:
        "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(200,169,107,0.16), rgba(15,17,21,0) 70%)",
    },
    editorial: {
      background:
        "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(168,136,74,0.10), rgba(15,17,21,0) 70%)",
    },
    finance: {
      background:
        "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(61,107,255,0.14), rgba(15,17,21,0) 70%)",
    },
    commerce: {
      background:
        "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(185,70,200,0.12), rgba(15,17,21,0) 70%)",
    },
  };
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={styles[visual]}
    />
  );
}

/* ─── 1) Northwave — quiet B2B product moment ─── */
function SaasVisual() {
  return (
    <div className="glass-strong relative w-full max-w-[420px] rounded-xl shadow-premium">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-white/[0.05] px-5 py-2.5">
        <div className="flex items-center gap-3">
          <span className="grid h-5 w-5 place-items-center rounded-md border border-white/10 bg-white/[0.03]">
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
          <span className="font-display text-[12.5px] font-medium tracking-tight-display">
            Northwave
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[8px] tracking-[0.18em] text-fog-muted">
          <span className="text-white">PIPELINE</span>
          <span>REVENUE</span>
          <span>CUSTOMERS</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="font-mono text-[8.5px] tracking-[0.18em] text-fog-muted">
              QUALIFIED · LAST 12 MO
            </div>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="font-display text-[28px] font-medium leading-none tracking-tightest text-white">
                +218
              </span>
              <span className="font-display text-[15px] leading-none tracking-tightest text-fog">
                %
              </span>
            </div>
          </div>
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[8.5px] tracking-wider text-emerald-300/90">
            +1.8 PTS
          </span>
        </div>

        <svg viewBox="0 0 320 60" className="mt-3 h-[44px] w-full" aria-hidden>
          <defs>
            <linearGradient id="cs-line" x1="0" x2="1">
              <stop offset="0%" stopColor="#C8A96B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C8A96B" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="cs-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#C8A96B" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#C8A96B" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[15, 30, 45].map((y) => (
            <line
              key={y}
              x1="0"
              x2="320"
              y1={y}
              y2={y}
              stroke="rgba(255,255,255,0.04)"
              strokeDasharray="2 4"
            />
          ))}
          <path
            d="M 0 50 L 24 46 L 48 48 L 72 38 L 96 40 L 120 30 L 144 32 L 168 22 L 192 26 L 216 16 L 240 18 L 264 8 L 288 11 L 320 4 L 320 60 L 0 60 Z"
            fill="url(#cs-area)"
          />
          <path
            d="M 0 50 L 24 46 L 48 48 L 72 38 L 96 40 L 120 30 L 144 32 L 168 22 L 192 26 L 216 16 L 240 18 L 264 8 L 288 11 L 320 4"
            fill="none"
            stroke="url(#cs-line)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="320" cy="4" r="2.5" fill="#C8A96B" />
          <circle
            cx="320"
            cy="4"
            r="6"
            fill="#C8A96B"
            opacity="0.18"
          />
        </svg>

        <div className="mt-3 grid grid-cols-3 gap-3 border-t border-white/[0.05] pt-3">
          {[
            { label: "CAC", v: "−34%" },
            { label: "ARR", v: "$2.1M" },
            { label: "LTV / CAC", v: "8.4×" },
          ].map((t) => (
            <div key={t.label}>
              <div className="font-mono text-[7.5px] tracking-[0.18em] text-fog-muted">
                {t.label}
              </div>
              <div className="mt-1 font-display text-[14px] font-medium tracking-tight-display text-white">
                {t.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── 2) Atelier — editorial cover ─── */
function EditorialVisual() {
  return (
    <div className="glass-strong relative w-full max-w-[440px] rounded-xl p-5 shadow-premium">
      <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.2em] text-fog-muted">
        <span>— ATELIER STUDIO</span>
        <span>VOL · MMXXVI · 04</span>
      </div>

      <div className="mt-4 flex gap-4">
        <div className="flex-1">
          <div className="font-mono text-[8px] tracking-[0.18em] text-fog-muted">
            FIELD HOUSE · 12
          </div>
          <div className="mt-2 font-display text-[22px] font-medium leading-[0.92] tracking-tightest text-white">
            Houses for{" "}
            <span className="italic font-light text-fog">quiet</span>
            <br />
            living.
          </div>
          <div className="mt-3 grid grid-cols-2 gap-y-1 font-mono text-[8px] tracking-[0.16em] text-fog-muted">
            <span>OXFORDSHIRE</span>
            <span className="text-fog">462 m²</span>
            <span>YEAR 2025</span>
            <span>OAK · STONE</span>
          </div>
        </div>

        {/* Architectural cover */}
        <div className="relative h-[120px] w-[100px] shrink-0 overflow-hidden rounded-md ring-1 ring-white/[0.08]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #2a221b 0%, #46362a 35%, #1a1410 100%)",
            }}
          />
          {/* Soft architectural elevation hint */}
          <svg
            viewBox="0 0 100 120"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            {/* Roof */}
            <path
              d="M 16 60 L 50 36 L 84 60 L 84 92 L 16 92 Z"
              fill="rgba(0,0,0,0.25)"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="0.4"
            />
            {/* Door */}
            <rect
              x="44"
              y="74"
              width="12"
              height="18"
              fill="rgba(0,0,0,0.4)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.4"
            />
            {/* Window slits */}
            <rect
              x="22"
              y="68"
              width="10"
              height="14"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.4"
            />
            <rect
              x="68"
              y="68"
              width="10"
              height="14"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.4"
            />
            {/* Ground */}
            <line
              x1="6"
              y1="92"
              x2="94"
              y2="92"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="0.4"
            />
          </svg>
          <div
            className="absolute inset-0 opacity-[0.20]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />
          {/* Caption */}
          <div className="absolute inset-x-2 bottom-1.5 font-mono text-[7px] tracking-[0.12em] text-white/60">
            FIG. 04 · ELEV.
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.05] pt-2.5">
        <span className="font-mono text-[7.5px] tracking-[0.18em] text-fog-muted">
          INDEX · WORK
        </span>
        <span className="font-mono text-[7.5px] tracking-[0.18em] text-fog-muted">
          MMXXVI ↗
        </span>
      </div>
    </div>
  );
}

/* ─── 3) Halcyon — investor portal / fund factsheet ─── */
function FinanceVisual() {
  const allocations = [
    { label: "Equities", v: "62.4%", w: 62.4 },
    { label: "Fixed Income", v: "24.1%", w: 24.1 },
    { label: "Alternatives", v: "13.5%", w: 13.5 },
  ];
  return (
    <div className="glass-strong relative w-full max-w-[420px] rounded-xl p-5 shadow-premium">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display text-[13px] font-medium tracking-tight-display">
            Halcyon Capital
          </span>
          <span className="rounded-sm border border-white/10 bg-white/[0.02] px-1.5 py-0.5 font-mono text-[7px] tracking-[0.14em] text-fog-muted">
            CTL · IN
          </span>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[8px] tracking-wider text-fog">
          Q1 · 2026
        </span>
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-[24px] font-medium leading-none tracking-tightest text-white">
            $4.2B
          </span>
          <span className="text-[10px] text-fog-muted">AUM</span>
        </div>
        <div className="text-right">
          <div className="font-mono text-[7.5px] tracking-[0.16em] text-fog-muted">
            NAV · 12 MAR
          </div>
          <div className="mt-0.5 font-display text-[13px] tracking-tight-display text-white">
            142.18
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {allocations.map((a) => (
          <div key={a.label}>
            <div className="flex items-center justify-between text-[10.5px]">
              <span className="text-fog">{a.label}</span>
              <span className="font-mono text-white">{a.v}</span>
            </div>
            <div className="mt-1.5 h-px w-full bg-white/[0.05]">
              <div
                className="h-full bg-gradient-to-r from-white/40 to-white/10"
                style={{ width: `${a.w}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.05] pt-3 font-mono text-[8px] tracking-[0.16em] text-fog-muted">
        <span>ANNUALIZED · 5Y</span>
        <span className="text-emerald-300/90">+11.2% · +2.4 MTD</span>
      </div>
    </div>
  );
}

/* ─── 4) Lumen — editorial commerce ─── */
function CommerceVisual() {
  return (
    <div className="glass-strong relative w-full max-w-[420px] rounded-xl p-5 shadow-premium">
      <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.2em] text-fog-muted">
        <span>LUMEN GOODS</span>
        <span className="rounded-sm border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[7.5px] text-accent">
          NEW · LIMITED
        </span>
      </div>

      <div className="mt-4 flex gap-4">
        {/* Lamp render */}
        <div className="relative h-[124px] w-[96px] shrink-0 overflow-hidden rounded-md ring-1 ring-white/[0.08]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(245,238,225,0.12) 0%, rgba(245,238,225,0.04) 60%, rgba(245,238,225,0.02) 100%)",
            }}
          />
          {/* Subtle glow from lamp */}
          <div
            className="absolute inset-x-2 top-2 h-12 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,210,140,0.20), transparent 70%)",
            }}
          />
          <svg
            viewBox="0 0 96 124"
            className="absolute inset-0 h-full w-full opacity-80"
            aria-hidden
          >
            {/* Shade */}
            <path
              d="M 32 22 Q 48 12 64 22 L 68 44 L 28 44 Z"
              fill="rgba(245,238,225,0.20)"
              stroke="rgba(245,238,225,0.30)"
              strokeWidth="0.6"
            />
            {/* Top finial */}
            <ellipse cx="48" cy="14" rx="2.5" ry="1.5" fill="rgba(245,238,225,0.25)" />
            {/* Stem */}
            <line
              x1="48"
              y1="44"
              x2="48"
              y2="96"
              stroke="rgba(245,238,225,0.35)"
              strokeWidth="0.8"
            />
            {/* Base */}
            <ellipse
              cx="48"
              cy="100"
              rx="14"
              ry="3"
              fill="rgba(245,238,225,0.18)"
              stroke="rgba(245,238,225,0.30)"
              strokeWidth="0.5"
            />
            {/* Floor reflection */}
            <ellipse
              cx="48"
              cy="108"
              rx="22"
              ry="2"
              fill="rgba(245,238,225,0.06)"
            />
          </svg>
          {/* Caption */}
          <div className="absolute inset-x-2 bottom-1.5 flex items-center justify-between font-mono text-[6.5px] tracking-[0.14em] text-white/60">
            <span>FW 26</span>
            <span>04 / 12</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="font-display text-[15px] font-medium leading-tight tracking-tight-display text-white">
              Tabletop Lamp 04
            </div>
            <div className="mt-1 text-[10px] leading-relaxed text-fog-muted">
              Brushed brass · linen shade ·
              <br />
              hand-finished in Jaipur.
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[7.5px] tracking-[0.14em] text-fog-muted">
                COLOUR
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-stone-700 ring-1 ring-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-300 ring-1 ring-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-700/80 ring-1 ring-white/15" />
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="font-display text-[16px] font-medium tracking-tight-display text-white">
                $2,400
              </span>
              <span className="font-mono text-[7.5px] tracking-[0.14em] text-emerald-300/80">
                IN STOCK
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.05] pt-3 font-mono text-[8px] tracking-[0.18em] text-fog-muted">
        <span>FREE EU SHIPPING</span>
        <span>ADD TO CART ↗</span>
      </div>
    </div>
  );
}
