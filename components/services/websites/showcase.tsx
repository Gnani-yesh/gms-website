"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

export function WebsitesShowcase() {
  return (
    <section id="showcase" className="relative py-40 md:py-56">
      <SectionAura tone="warm" position="top-right" size={760} />
      <SectionAura tone="cool" position="bottom-left" size={680} />

      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            eyebrow="Selected websites"
            title={
              <>
                Sites built to
                <br />
                <span className="text-fog">be remembered.</span>
              </>
            }
          />
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 self-end text-[13px] text-fog transition-colors duration-300 hover:text-white"
          >
            View all case studies
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.25}
            />
          </Link>
        </div>

        {/* Featured + supporting composition */}
        <div className="mt-20 space-y-10 md:space-y-14">
          {/* FEATURED — Northwave (B2B SaaS) */}
          <ShowcaseCard
            client="Northwave"
            sector="B2B SaaS · Studio"
            year="2025 — 26"
            href="/work"
            featured
          >
            <NorthwaveSitePreview />
          </ShowcaseCard>

          {/* Two supporting websites side-by-side */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
            <ShowcaseCard
              client="Field & Form"
              sector="Editorial Commerce"
              year="2025"
              href="/work"
            >
              <FieldAndFormSitePreview />
            </ShowcaseCard>
            <ShowcaseCard
              client="Atelier"
              sector="Architecture"
              year="2025"
              href="/work"
            >
              <AtelierSitePreview />
            </ShowcaseCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   SHOWCASE CARD WRAPPER
   ════════════════════════════════════════════ */
function ShowcaseCard({
  client,
  sector,
  year,
  href,
  featured = false,
  children,
}: {
  client: string;
  sector: string;
  year: string;
  href: string;
  featured?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.95, ease }}
    >
      <Link
        href={href}
        className="lift group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/40 hover:border-white/[0.10]"
      >
        {/* The site preview */}
        <div className={featured ? "p-3 md:p-5" : "p-3 md:p-4"}>{children}</div>

      {/* Caption rail */}
      <div className="flex items-end justify-between gap-6 border-t border-white/[0.05] px-6 pb-7 pt-5 md:px-8 md:pb-8 md:pt-6">
        <div>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog-muted">
            <span className="text-fog">{client}</span>
            <span className="h-2.5 w-px bg-white/15" />
            <span>{sector}</span>
            <span className="h-2.5 w-px bg-white/15" />
            <span>{year}</span>
          </div>
        </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-fog-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
            strokeWidth={1.5}
          />
        </div>
      </Link>
    </motion.div>
  );
}

/* ════════════════════════════════════════════
   1) NORTHWAVE — featured editorial studio site
   ════════════════════════════════════════════ */
function NorthwaveSitePreview() {
  return (
    <div
      className="glass-strong relative w-full overflow-hidden rounded-xl shadow-premium ring-1 ring-white/[0.05]"
      style={{ aspectRatio: "16 / 9" }}
    >
      <ChromeBar url="northwave.co" />

      <div className="relative flex h-[calc(100%-44px)] flex-col">
        <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-6">
          <span className="font-display text-[12px] font-medium tracking-tight-display text-white md:text-[14px]">
            Northwave
          </span>
          <div className="flex items-center gap-3 md:gap-5">
            {["WORK", "STUDIO", "JOURNAL", "CONTACT"].map((n) => (
              <span
                key={n}
                className="font-mono text-[7.5px] tracking-[0.22em] text-fog-muted md:text-[8.5px]"
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center px-6 md:px-10">
          <div className="font-mono text-[7.5px] uppercase tracking-[0.22em] text-fog-muted md:text-[8.5px]">
            — Studio · Spring 2026
          </div>
          <div
            className="mt-3 max-w-[80%] font-display font-medium leading-[0.92] tracking-tightest text-white"
            style={{ fontSize: "clamp(28px, 5.5vw, 72px)" }}
          >
            Built for
            <br />
            <span className="italic font-light text-fog">the long form.</span>
          </div>
          <div className="mt-5 flex items-center gap-2.5">
            <span className="relative flex h-1 w-1">
              <span className="absolute inset-0 animate-pulse-soft rounded-full bg-accent" />
              <span className="relative h-1 w-1 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[7.5px] tracking-[0.18em] text-fog md:text-[8.5px]">
              NOW BOOKING 2026 PARTNERS
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.04] px-6 py-3 md:px-10">
          <span className="font-mono text-[7.5px] tracking-wider text-fog-muted md:text-[8px]">
            © 2026
          </span>
          <span className="flex items-center gap-1 font-mono text-[7.5px] tracking-wider text-fog-muted md:text-[8px]">
            FEATURED <span aria-hidden className="text-[9px]">↗</span>
          </span>
        </div>

        <ScanLight />
        <TopInnerWash />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   2) FIELD & FORM — editorial commerce
   ════════════════════════════════════════════ */
function FieldAndFormSitePreview() {
  return (
    <div
      className="glass-strong relative w-full overflow-hidden rounded-xl shadow-premium ring-1 ring-white/[0.05]"
      style={{ aspectRatio: "4 / 3" }}
    >
      <ChromeBar url="fieldandform.co" />

      <div className="relative flex h-[calc(100%-44px)] flex-col">
        <div className="flex items-center justify-between px-5 py-3 md:px-7 md:py-4">
          <span className="font-display text-[11px] font-medium tracking-tight-display text-white md:text-[12px]">
            Field & Form
          </span>
          <div className="flex items-center gap-2 md:gap-3">
            {["COLLECTION", "JOURNAL", "STORE"].map((n) => (
              <span
                key={n}
                className="font-mono text-[7px] tracking-[0.22em] text-fog-muted md:text-[7.5px]"
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 gap-4 px-5 pb-3 md:gap-5 md:px-7 md:pb-4">
          {/* Left text */}
          <div className="flex flex-1 flex-col justify-center">
            <div className="font-mono text-[7px] tracking-[0.22em] text-fog-muted md:text-[7.5px]">
              — Project · 027
            </div>
            <div
              className="mt-2 font-display font-medium leading-[0.92] tracking-tightest text-white"
              style={{ fontSize: "clamp(18px, 3.4vw, 36px)" }}
            >
              Objects for
              <br />
              <span className="italic font-light text-fog">the long view.</span>
            </div>
            <div className="mt-3 max-w-[160px] text-[8px] leading-[1.55] text-fog md:text-[9px]">
              Hand-crafted in Jaipur · 2026
            </div>
          </div>

          {/* Vase silhouette */}
          <div className="relative aspect-[3/4] w-[36%] shrink-0 self-center overflow-hidden rounded-md ring-1 ring-white/[0.08]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #2a221b 0%, #5a4733 35%, #1a1410 100%)",
              }}
            />
            <div
              className="absolute inset-x-2 top-0 h-1/3 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at center top, rgba(255,210,140,0.30), transparent 70%)",
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
              <ellipse
                cx="50"
                cy="106"
                rx="18"
                ry="2"
                fill="rgba(245,238,225,0.10)"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.04] px-5 py-2.5 md:px-7">
          <span className="font-mono text-[7px] tracking-wider text-fog-muted md:text-[7.5px]">
            FW · 26
          </span>
          <span className="font-mono text-[7px] tracking-wider text-fog-muted md:text-[7.5px]">
            STORE ↗
          </span>
        </div>

        <ScanLight />
        <TopInnerWash />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   3) ATELIER — architecture portfolio
   ════════════════════════════════════════════ */
function AtelierSitePreview() {
  return (
    <div
      className="glass-strong relative w-full overflow-hidden rounded-xl shadow-premium ring-1 ring-white/[0.05]"
      style={{ aspectRatio: "4 / 3" }}
    >
      <ChromeBar url="atelier.studio" />

      <div className="relative flex h-[calc(100%-44px)] flex-col">
        <div className="flex items-center justify-between px-5 py-3 md:px-7 md:py-4">
          <span className="font-mono text-[8px] tracking-[0.22em] text-fog-muted md:text-[9px]">
            ATELIER
          </span>
          <span className="font-mono text-[7px] tracking-[0.22em] text-fog-muted md:text-[7.5px]">
            INDEX · 12
          </span>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-3 md:px-7 md:pb-4">
          {/* Project meta header */}
          <div className="flex items-baseline justify-between border-b border-white/[0.05] pb-2.5">
            <div>
              <div className="font-mono text-[7px] tracking-[0.18em] text-fog-muted md:text-[7.5px]">
                FIELD HOUSE · 12
              </div>
              <div className="mt-1 font-display text-[14px] font-medium leading-tight tracking-tight-display text-white md:text-[16px]">
                Houses for{" "}
                <span className="italic font-light text-fog">quiet</span> living.
              </div>
            </div>
            <div className="text-right font-mono text-[7px] tracking-[0.18em] text-fog-muted md:text-[7.5px]">
              <div>OXFORDSHIRE</div>
              <div className="mt-0.5 text-fog">462 m²</div>
            </div>
          </div>

          {/* Architectural rendering */}
          <div className="relative mt-3 flex-1 overflow-hidden rounded-md ring-1 ring-white/[0.06]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(170deg, #1F1A14 0%, #3a2e21 50%, #0F0B07 100%)",
              }}
            />
            <svg
              viewBox="0 0 200 100"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              {/* Roof & house */}
              <path
                d="M 50 78 L 100 50 L 150 78 L 150 90 L 50 90 Z"
                fill="rgba(0,0,0,0.30)"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="0.4"
              />
              {/* Door */}
              <rect
                x="92"
                y="74"
                width="16"
                height="16"
                fill="rgba(0,0,0,0.45)"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="0.4"
              />
              {/* Windows */}
              <rect
                x="65"
                y="68"
                width="14"
                height="14"
                fill="rgba(255,210,140,0.12)"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="0.4"
              />
              <rect
                x="121"
                y="68"
                width="14"
                height="14"
                fill="rgba(255,210,140,0.12)"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="0.4"
              />
              {/* Ground line */}
              <line
                x1="0"
                y1="90"
                x2="200"
                y2="90"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="0.4"
              />
            </svg>
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
              }}
            />
            <div className="absolute inset-x-2.5 bottom-2 flex items-center justify-between font-mono text-[6.5px] tracking-[0.14em] text-white/65">
              <span>FIG. 04 · ELEV.</span>
              <span>MMXXVI</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.04] px-5 py-2.5 md:px-7">
          <span className="font-mono text-[7px] tracking-wider text-fog-muted md:text-[7.5px]">
            INDEX
          </span>
          <span className="font-mono text-[7px] tracking-wider text-fog-muted md:text-[7.5px]">
            MMXXVI ↗
          </span>
        </div>

        <ScanLight />
        <TopInnerWash />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   PRIMITIVES — shared chrome bar + accent layers
   ════════════════════════════════════════════ */
function ChromeBar({ url }: { url: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
      </div>
      <div className="flex items-center gap-2 rounded-full border border-white/[0.05] bg-white/[0.02] px-3 py-1">
        <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
        <span className="font-mono text-[9px] tracking-wider text-fog-muted">
          {url}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <span className="h-1 w-1 rounded-full bg-white/15" />
        <span className="h-1 w-1 rounded-full bg-white/15" />
        <span className="h-1 w-1 rounded-full bg-white/15" />
      </div>
    </div>
  );
}

function ScanLight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-scan opacity-[0.035]"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)",
      }}
    />
  );
}

function TopInnerWash() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-1/3 opacity-40"
      style={{
        background:
          "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,255,255,0.04), transparent)",
      }}
    />
  );
}
