"use client";

import Link from "next/link";
import Image from "next/image";
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
  image: { src: string; alt: string };
};

const CASES: CaseStudy[] = [
  {
    client: "Northwave",
    sector: "B2B SaaS",
    year: "2025 — 26",
    title: "Rebuilt brand and full marketing platform",
    metric: "+218%",
    metricLabel: "qualified pipeline · YoY",
    image: {
      src: "/mockups/home/northwave-group.png",
      alt: "Northwave dashboard rendered on a laptop and phone",
    },
  },
  {
    client: "Atelier Studio",
    sector: "Architecture",
    year: "2025",
    title: "Cinematic portfolio engineered for taste",
    metric: "4.2×",
    metricLabel: "inbound enquiries",
    image: {
      src: "/mockups/home/atelier-studio.png",
      alt: "Atelier Studio editorial site rendered on laptop and tablet",
    },
  },
  {
    client: "Halcyon Capital",
    sector: "Private Markets",
    year: "2024 — 25",
    title: "Investor portal and content infrastructure",
    metric: "84%",
    metricLabel: "lower acquisition cost",
    image: {
      src: "/mockups/home/halcyon-capital.png",
      alt: "Halcyon Capital investor dashboard rendered on laptop and tablet",
    },
  },
  {
    client: "Lumen Goods",
    sector: "Editorial Commerce",
    year: "2025",
    title: "Editorial commerce platform and growth system",
    metric: "+312%",
    metricLabel: "annual revenue",
    image: {
      src: "/mockups/home/lumen-goods.png",
      alt: "Lumen Goods storefront rendered on laptop and phone",
    },
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
                <CaseVisual image={c.image} priority={i < 2} />

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
   CASE VISUAL — cinematic device-render mockup
   ──────────────────────────────────────────── */
function CaseVisual({
  image,
  priority,
}: {
  image: { src: string; alt: string };
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-ink-900">
      {/* Subtle ambient warmth behind the image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(200,169,107,0.08), rgba(15,17,21,0) 70%)",
        }}
      />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
      />
      {/* Soft top-edge highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
    </div>
  );
}
