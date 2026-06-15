"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionAura } from "@/components/site/section-aura";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

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
          <CaseVisual image={c.image} priority={index === 0} />
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
            <span>{c.type}</span>
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

          <div className="mt-7 flex items-center gap-3 border-t border-white/[0.05] pt-5">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog">
              View case study
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
  image,
  priority,
}: {
  image: { src: string; alt: string };
  priority?: boolean;
}) {
  return (
    <div className="lift relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 transition-colors duration-500 group-hover:border-white/[0.10]">
      {/* Ambient warmth behind */}
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
        sizes="(min-width: 1024px) 720px, (min-width: 768px) 60vw, 100vw"
        className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
      />
      {/* Top-edge highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
    </div>
  );
}
