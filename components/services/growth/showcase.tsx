"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const PROGRAMS = [
  {
    client: "Northwave",
    sector: "B2B SaaS · Pipeline",
    discipline: "SEO · Content · Paid",
    title: "From founder-led referrals to a self-serve growth engine",
    primary: "+218%",
    primaryLabel: "qualified pipeline",
    metrics: [
      { l: "Organic sessions", v: "+62%" },
      { l: "ROAS · paid", v: "4.2×" },
      { l: "CAC", v: "−34%" },
    ],
  },
  {
    client: "Field & Form",
    sector: "Editorial Commerce",
    discipline: "Editorial · Social · CRM",
    title: "Editorial system that doubled as the growth engine",
    primary: "+312%",
    primaryLabel: "annual revenue",
    metrics: [
      { l: "Repeat rate", v: "44%" },
      { l: "AOV", v: "+58%" },
      { l: "Email RPM", v: "$2.1" },
    ],
  },
];

export function GrowthShowcase() {
  return (
    <section id="showcase" className="relative py-40 md:py-56">
      <SectionAura tone="warm" position="top-right" size={760} />
      <SectionAura tone="cool" position="bottom-left" size={680} />

      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            eyebrow="Selected programs"
            title={
              <>
                Growth that
                <br />
                <span className="text-fog">compounds quietly.</span>
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

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={p.client}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease, delay: i * 0.07 }}
            >
            <Link
              href="/work"
              className="lift group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 hover:border-white/[0.10]"
            >
              {/* Header strip */}
              <div className="flex items-center justify-between border-b border-white/[0.05] px-7 py-4">
                <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-fog-muted">
                  <span className="text-fog">{p.client}</span>
                  <span className="h-2.5 w-px bg-white/15" />
                  <span>{p.sector}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog-muted">
                  {p.discipline}
                </span>
              </div>

              <div className="px-7 pb-9 pt-7 md:px-9 md:pb-10 md:pt-8">
                <h3 className="font-display text-[24px] font-medium leading-[1.1] tracking-tight-display md:text-[28px]">
                  {p.title}
                </h3>

                <div className="mt-7 flex items-baseline gap-3 border-t border-white/[0.06] pt-6">
                  <span className="font-display text-[42px] font-medium leading-none tracking-tightest text-accent md:text-[52px]">
                    {p.primary}
                  </span>
                  <span className="text-[12.5px] text-fog-muted">
                    {p.primaryLabel}
                  </span>
                </div>

                {/* Metric grid */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-5">
                  {p.metrics.map((m) => (
                    <div key={m.l}>
                      <div className="font-mono text-[8px] tracking-[0.18em] text-fog-muted">
                        {m.l.toUpperCase()}
                      </div>
                      <div className="mt-1 font-display text-[18px] font-medium tracking-tight-display text-white">
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4 font-mono text-[10px] tracking-wider text-fog-muted">
                  <span>CASE STUDY</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    strokeWidth={1.5}
                  />
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
