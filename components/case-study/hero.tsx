"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

const TONE_AMBIENT: Record<
  CaseStudy["tone"],
  { a: string; b: string; c: string }
> = {
  warm: {
    a: "rgba(168,136,74,0.16)",
    b: "rgba(184,149,110,0.13)",
    c: "rgba(200,169,107,0.10)",
  },
  cool: {
    a: "rgba(61,107,255,0.15)",
    b: "rgba(80,140,255,0.12)",
    c: "rgba(168,136,74,0.10)",
  },
  magenta: {
    a: "rgba(185,70,200,0.15)",
    b: "rgba(220,90,200,0.12)",
    c: "rgba(168,136,74,0.10)",
  },
};

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  const tone = TONE_AMBIENT[study.tone];
  return (
    <section className="relative isolate overflow-hidden pt-36 sm:pt-44 md:pt-52">
      <AmbientField {...tone} />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="container relative">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted"
        >
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-fog"
          >
            GMS
          </Link>
          <span className="text-fog-muted">/</span>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 transition-colors duration-300 hover:text-fog"
          >
            <ArrowLeft className="h-3 w-3" strokeWidth={2} />
            Selected Work
          </Link>
          <span className="text-fog-muted">/</span>
          <span className="text-fog">{study.client}</span>
        </motion.div>

        {/* Title */}
        <div className="mt-12 max-w-[1100px] md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted"
          >
            <span className="text-accent">{study.hero.eyebrow}</span>
            <span className="h-2.5 w-px bg-white/15" />
            <span>{study.client}</span>
            <span className="h-2.5 w-px bg-white/15" />
            <span>{study.sector}</span>
            <span className="h-2.5 w-px bg-white/15" />
            <span>{study.year}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
            className="mt-7 font-display text-display-xl font-medium leading-[0.95] tracking-tightest text-balance"
          >
            {study.hero.title}
            <br />
            <span className="italic font-light text-fog">
              {study.hero.italic}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mt-9 max-w-[640px] text-pretty text-[16px] leading-[1.65] text-fog md:text-[17.5px]"
          >
            {study.hero.deck}
          </motion.p>
        </div>

        {/* Hero mockup */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease, delay: 0.6 }}
          className="relative mt-20 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 md:mt-28"
        >
          <div className="relative aspect-[16/9] w-full">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(200,169,107,0.10), rgba(15,17,21,0) 70%)",
              }}
            />
            <Image
              src={study.image.src}
              alt={study.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1180px, 100vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />
          </div>
        </motion.div>

        {/* Meta rail */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.8 }}
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.05] md:mt-14 md:grid-cols-4"
        >
          {[
            { l: "Status", v: study.status },
            { l: "Year", v: study.year },
            { l: "Website", v: study.url },
            { l: "Disciplines", v: study.scope.join(" · ") },
          ].map((m) => (
            <div key={m.l} className="bg-ink-900/80 p-7 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
                {m.l}
              </div>
              <div className="mt-2 font-display text-[15px] font-medium tracking-tight-display text-white md:text-[16.5px]">
                {m.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AmbientField({
  a,
  b,
  c,
}: {
  a: string;
  b: string;
  c: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] overflow-hidden">
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 820,
          height: 820,
          left: "-12%",
          top: "-18%",
          background: `radial-gradient(closest-side, ${a}, transparent)`,
        }}
        animate={{ opacity: [0.55, 0.78, 0.55] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 880,
          height: 880,
          right: "-12%",
          top: "-8%",
          background: `radial-gradient(closest-side, ${b}, transparent)`,
          animationDelay: "-8s",
        }}
        animate={{ opacity: [0.78, 0.55, 0.78] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <div
        className="ambient"
        style={{
          width: 1100,
          height: 360,
          left: "50%",
          top: "55%",
          transform: "translateX(-50%)",
          opacity: 0.6,
          background: `radial-gradient(closest-side, ${c}, transparent)`,
        }}
      />
    </div>
  );
}
