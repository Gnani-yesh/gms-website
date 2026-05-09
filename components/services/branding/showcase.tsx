"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const BRANDS = [
  {
    name: "Halcyon House",
    sector: "Hospitality",
    year: "2025",
    discipline: "Identity · Photography · Editorial",
    palette: ["#0F0B07", "#F5EEE1", "#B8956E", "#6B4F3A"],
    type: "Caslon · Söhne",
    italic: "House",
    wordmark: "Halcyon",
  },
  {
    name: "Field & Form",
    sector: "Editorial Commerce",
    year: "2025",
    discipline: "Identity · Photography · Packaging",
    palette: ["#1A1410", "#F5EEE1", "#B8956E", "#46362a"],
    type: "Times Three · Söhne Mono",
    italic: "& Form",
    wordmark: "Field",
  },
  {
    name: "Atelier Studio",
    sector: "Architecture",
    year: "2025",
    discipline: "Identity · Editorial · Print",
    palette: ["#07070A", "#FFFFFF", "#9B9B9B", "#1F2030"],
    type: "Söhne · Söhne Breit",
    italic: "Studio",
    wordmark: "Atelier",
  },
];

export function BrandingShowcase() {
  return (
    <section id="showcase" className="relative py-40 md:py-56">
      <SectionAura tone="warm" position="top-right" size={760} />
      <SectionAura tone="magenta" position="bottom-left" size={680} />

      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            index="02"
            eyebrow="Selected identities"
            title={
              <>
                Brands built
                <br />
                <span className="text-fog">to outlast the trend.</span>
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

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {BRANDS.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease, delay: i * 0.07 }}
            >
            <Link
              href="/work"
              className="lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/70 hover:border-white/[0.10]"
            >
              {/* Identity sheet */}
              <div className="relative flex aspect-[4/5] flex-col p-7 md:p-8">
                <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.22em] text-fog-muted">
                  <span>— IDENTITY</span>
                  <span>{b.year}</span>
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <div className="font-display font-medium leading-[0.88] tracking-tightest text-white" style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
                    {b.wordmark}
                  </div>
                  <div className="mt-0.5 font-display italic font-light leading-none tracking-tightest text-fog" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
                    {b.italic}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-1.5">
                  {b.palette.map((c, idx) => (
                    <div
                      key={c}
                      className="aspect-square rounded-sm ring-1 ring-white/5"
                      style={{
                        background: c,
                        boxShadow: idx === 1 ? "inset 0 1px 0 rgba(0,0,0,0.04)" : undefined,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-4 flex items-end justify-between border-t border-white/[0.05] pt-3 font-mono text-[8.5px] tracking-[0.18em] text-fog-muted">
                  <span>TYPE</span>
                  <span className="text-fog">{b.type}</span>
                </div>
              </div>

              {/* Caption */}
              <div className="border-t border-white/[0.05] px-7 pb-7 pt-5 md:px-8">
                <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-fog-muted">
                  <span className="text-fog">{b.name}</span>
                  <span className="h-2.5 w-px bg-white/15" />
                  <span>{b.sector}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11.5px] text-fog-muted">{b.discipline}</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-fog-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
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
