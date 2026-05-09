"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionAura } from "@/components/site/section-aura";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

type Variant = "saas" | "editorial" | "finance" | "commerce" | "hospitality";

const VARIANT_BY_SECTOR: Record<string, Variant> = {
  "B2B SaaS": "saas",
  "Editorial Commerce": "commerce",
  "Hospitality": "hospitality",
  "Architecture": "editorial",
  "Private Markets": "finance",
};

const TONES: Record<Variant, string> = {
  saas: "rgba(200,169,107,0.16)",
  editorial: "rgba(168,136,74,0.10)",
  finance: "rgba(61,107,255,0.14)",
  commerce: "rgba(185,70,200,0.12)",
  hospitality: "rgba(168,136,74,0.18)",
};

export function WorkIndex() {
  return (
    <section className="relative py-32 md:py-40">
      <SectionAura tone="warm" position="top-right" size={760} />
      <SectionAura tone="cool" position="bottom-left" size={680} />

      <div className="container relative">
        <div className="mb-14 flex items-center justify-between border-b border-white/[0.05] pb-6 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
          <span>
            Index · {String(CASE_STUDIES.length).padStart(2, "0")} engagements
          </span>
          <span>2024 — 2026</span>
        </div>

        <div className="space-y-14 md:space-y-20">
          {CASE_STUDIES.map((c, i) => (
            <CaseRow key={c.slug} caseStudy={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseRow({
  caseStudy: c,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  const reverse = index % 2 === 1;
  const variant: Variant = VARIANT_BY_SECTOR[c.sector] ?? "saas";
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease }}
    >
      <Link
        href={`/work/${c.slug}`}
        className="group relative grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10"
      >
        {/* Visual */}
        <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
          <div className="lift relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 transition-colors duration-500 group-hover:border-white/[0.10]">
            <CaseVisual tone={TONES[variant]} variant={variant} />
          </div>
        </div>

        {/* Caption */}
        <div
          className={`md:col-span-5 ${
            reverse ? "md:order-1" : ""
          } flex flex-col justify-center`}
        >
          <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
            <span>{index === 0 ? "Featured" : "Case study"}</span>
          </div>

          <h2 className="mt-5 max-w-[460px] font-display text-[28px] font-medium leading-[1.1] tracking-tight-display text-balance md:text-[34px] lg:text-[40px]">
            {c.hero.title}{" "}
            <span className="italic font-light text-fog">{c.hero.italic}</span>
          </h2>

          <div className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog-muted">
            <span className="text-fog">{c.client}</span>
            <span className="h-2.5 w-px bg-white/15" />
            <span>{c.sector}</span>
            <span className="h-2.5 w-px bg-white/15" />
            <span>{c.year}</span>
          </div>

          <div className="mt-3 max-w-[420px] text-[12.5px] text-fog-muted">
            {c.scope.join(" · ")}
          </div>

          <div className="mt-7 flex items-baseline gap-3 border-t border-white/[0.05] pt-5">
            <span className="font-display text-[36px] font-medium leading-none tracking-tightest text-accent md:text-[44px]">
              {c.results.primary.metric}
            </span>
            <span className="text-[12.5px] text-fog-muted">
              {c.results.primary.label}
            </span>
            <ArrowUpRight
              className="ml-auto h-5 w-5 text-fog-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function CaseVisual({
  tone,
  variant,
}: {
  tone: string;
  variant: Variant;
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-ink-900">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 100% at 50% 50%, ${tone}, rgba(15,17,21,0) 70%)`,
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="absolute inset-0 flex items-center justify-center p-7 md:p-12">
        <div className="glass-strong relative w-full max-w-[480px] rounded-xl p-5 shadow-premium md:max-w-[520px] md:p-6">
          {variant === "saas" && <SaasCard />}
          {variant === "hospitality" && <HospitalityCard />}
          {variant === "commerce" && <CommerceCard />}
          {variant === "finance" && <FinanceCard />}
          {variant === "editorial" && <EditorialCard />}
        </div>
      </div>
    </div>
  );
}

function SaasCard() {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
          NORTHWAVE · PIPELINE
        </span>
        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[8.5px] tracking-wider text-emerald-300/90">
          +1.8 PTS
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-[32px] font-medium leading-none tracking-tightest text-white">
          +218
        </span>
        <span className="font-display text-[18px] leading-none tracking-tightest text-fog">
          %
        </span>
      </div>
      <svg viewBox="0 0 320 56" className="mt-3 h-[42px] w-full" aria-hidden>
        <defs>
          <linearGradient id="wi-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#C8A96B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C8A96B" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M 0 46 L 24 42 L 48 44 L 72 34 L 96 36 L 120 26 L 144 28 L 168 18 L 192 22 L 216 12 L 240 14 L 264 6 L 288 8 L 320 2"
          fill="none"
          stroke="url(#wi-line)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="320" cy="2" r="2.5" fill="#C8A96B" />
      </svg>
      <div className="mt-3 grid grid-cols-3 gap-3 border-t border-white/[0.05] pt-3">
        {[
          { l: "ARR", v: "$2.1M" },
          { l: "ROAS", v: "4.2×" },
          { l: "CAC", v: "−34%" },
        ].map((t) => (
          <div key={t.l}>
            <div className="font-mono text-[7.5px] tracking-[0.18em] text-fog-muted">
              {t.l}
            </div>
            <div className="mt-1 font-display text-[14px] font-medium text-white">
              {t.v}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function HospitalityCard() {
  return (
    <>
      <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
        <span>HALCYON · CONCIERGE</span>
        <span className="text-emerald-300/80">LIVE</span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-[26px] font-medium leading-none tracking-tightest text-white">
          87%
        </span>
        <span className="text-[10.5px] text-fog-muted">
          occupancy · this week
        </span>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1">
        {[3, 4, 4, 5, 6, 5, 7].map((rooms, i) => (
          <div key={i} className="space-y-1">
            {Array.from({ length: rooms }).map((_, r) => (
              <div
                key={r}
                className={`h-1.5 rounded-sm ${
                  r === 0 ? "bg-accent/60" : "bg-white/15"
                }`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-white/[0.05] pt-3 font-mono text-[8.5px] tracking-[0.18em] text-fog-muted">
        <span>RevPAR · $842</span>
        <span>ADR · $1,210</span>
      </div>
    </>
  );
}

function CommerceCard() {
  return (
    <>
      <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
        <span>FIELD & FORM</span>
        <span>FW · 26</span>
      </div>
      <div className="mt-3 flex gap-3">
        <div className="relative h-[90px] w-[72px] shrink-0 overflow-hidden rounded-md ring-1 ring-white/[0.08]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #2a221b 0%, #5a4733 35%, #1a1410 100%)",
            }}
          />
          <svg
            viewBox="0 0 100 130"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <path
              d="M 38 26 L 38 36 Q 26 50 30 70 Q 34 90 38 100 L 62 100 Q 66 90 70 70 Q 74 50 62 36 L 62 26 Z"
              fill="rgba(245,238,225,0.18)"
              stroke="rgba(245,238,225,0.30)"
              strokeWidth="0.6"
            />
          </svg>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="font-display text-[14px] font-medium tracking-tight-display text-white">
              Tabletop Lamp 04
            </div>
            <div className="mt-1 text-[10px] text-fog-muted">
              Brushed brass · Linen shade
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-display text-[14px] font-medium tracking-tight-display text-white">
              $2,400
            </span>
            <span className="font-mono text-[8px] tracking-wider text-emerald-300/80">
              +312% YoY
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function FinanceCard() {
  const allocations = [
    { l: "Equities", v: "62.4%", w: 62.4 },
    { l: "Fixed Income", v: "24.1%", w: 24.1 },
    { l: "Alternatives", v: "13.5%", w: 13.5 },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-display text-[13px] font-medium tracking-tight-display text-white">
          Halcyon Capital
        </span>
        <span className="rounded-sm border border-white/10 bg-white/[0.02] px-1.5 py-0.5 font-mono text-[7px] tracking-wider text-fog-muted">
          CTL · IN
        </span>
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-[22px] font-medium leading-none tracking-tightest text-white">
          $4.2B
        </span>
        <span className="text-[10px] text-fog-muted">AUM</span>
      </div>
      <div className="mt-3 space-y-2">
        {allocations.map((a) => (
          <div key={a.l}>
            <div className="flex items-center justify-between text-[10.5px]">
              <span className="text-fog">{a.l}</span>
              <span className="font-mono text-white">{a.v}</span>
            </div>
            <div className="mt-1 h-px w-full bg-white/[0.05]">
              <div
                className="h-full bg-gradient-to-r from-white/40 to-white/10"
                style={{ width: `${a.w}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function EditorialCard() {
  return (
    <>
      <div className="flex items-center justify-between font-mono text-[8.5px] tracking-[0.22em] text-fog-muted">
        <span>— ATELIER STUDIO</span>
        <span>VOL · 026</span>
      </div>
      <div className="mt-3 flex gap-4">
        <div className="flex-1">
          <div className="font-mono text-[8px] tracking-[0.18em] text-fog-muted">
            FIELD HOUSE · 12
          </div>
          <div className="mt-2 font-display text-[20px] font-medium leading-[0.95] tracking-tightest text-white">
            Houses for{" "}
            <span className="italic font-light text-fog">quiet</span>
            <br />
            living.
          </div>
          <div className="mt-3 grid grid-cols-2 gap-y-1 font-mono text-[8px] tracking-[0.16em] text-fog-muted">
            <span>OXFORDSHIRE</span>
            <span className="text-fog">462 m²</span>
          </div>
        </div>
        <div className="relative h-[100px] w-[80px] shrink-0 overflow-hidden rounded-md ring-1 ring-white/[0.08]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #2a221b 0%, #46362a 35%, #1a1410 100%)",
            }}
          />
          <svg
            viewBox="0 0 100 120"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <path
              d="M 16 60 L 50 36 L 84 60 L 84 92 L 16 92 Z"
              fill="rgba(0,0,0,0.30)"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="0.4"
            />
            <rect
              x="44"
              y="74"
              width="12"
              height="18"
              fill="rgba(0,0,0,0.4)"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="0.4"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
