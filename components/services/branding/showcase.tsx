"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";
import { getCaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

// Real brand engagements, pulled from the case-study source of truth.
const BRANDS = [getCaseStudy("happy-herbals")!, getCaseStudy("navavarna")!].map(
  (c) => ({
    slug: c.slug,
    name: c.client,
    sector: c.sector,
    year: c.year,
    discipline: c.scope.join(" · "),
    image: c.image,
  })
);

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

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {BRANDS.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease, delay: i * 0.07 }}
            >
            <Link
              href={`/work/${b.slug}`}
              className="lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/70 hover:border-white/[0.10]"
            >
              {/* Real brand work */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={b.image.src}
                  alt={b.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />
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
