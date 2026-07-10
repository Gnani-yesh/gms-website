"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const PROGRAMS = [
  {
    slug: "happy-herbals",
    client: "Happy Herbals",
    sector: "Ayurvedic E-commerce",
    discipline: "Meta Ads · WhatsApp · Growth",
    title: "From zero online presence to a system that acquires and retains",
    body: "A Shopify store, Meta ad campaigns, and a WhatsApp re-engagement engine — built so the brand acquires customers, sells, and brings them back without paying for ads every time.",
  },
  {
    slug: "dr-krishna",
    client: "Dr. Krishna Health",
    sector: "Healthcare",
    discipline: "SEO · Content",
    title: "A 15-year practice, finally findable on Google",
    body: "A content strategy built around the exact searches patients type into Google, structured to rank locally — so people who've never heard of the practice find it and book.",
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
              href={`/work/${p.slug}`}
              className="lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 hover:border-white/[0.10]"
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

              <div className="flex flex-1 flex-col px-7 pb-9 pt-7 md:px-9 md:pb-10 md:pt-8">
                <h3 className="font-display text-[24px] font-medium leading-[1.1] tracking-tight-display md:text-[28px]">
                  {p.title}
                </h3>

                <p className="mt-6 border-t border-white/[0.06] pt-6 text-[14.5px] leading-[1.65] text-fog">
                  {p.body}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-5 font-mono text-[10px] tracking-wider text-fog-muted">
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
