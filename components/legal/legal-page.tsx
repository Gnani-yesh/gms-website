"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

interface LegalPageProps {
  eyebrow: string;
  title: string;
  italic?: string;
  intro: string;
  effective: string;
  sections: LegalSection[];
}

export function LegalPage({
  eyebrow,
  title,
  italic,
  intro,
  effective,
  sections,
}: LegalPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-36 sm:pt-44 md:pt-52">
        <AmbientField />
        <div className="absolute inset-0 -z-10 grid-bg opacity-25" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
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
            <span className="text-fog">{eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="mt-12 font-display text-display-lg font-medium leading-[0.95] tracking-tightest text-balance md:mt-16"
          >
            {title}
            {italic && (
              <>
                <br />
                <span className="italic font-light text-fog">{italic}</span>
              </>
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted"
          >
            <span>Effective</span>
            <span className="h-2.5 w-px bg-white/15" />
            <span className="text-fog">{effective}</span>
            <span className="h-2.5 w-px bg-white/15" />
            <span>Hyderabad · IN</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mt-10 max-w-[680px] text-[16px] leading-[1.7] text-fog md:text-[17px]"
          >
            {intro}
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            {/* Sticky TOC */}
            <aside className="md:sticky md:top-32 md:col-span-3 md:h-fit">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
                Contents
              </div>
              <ol className="mt-5 space-y-3">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#section-${i + 1}`}
                      className="group flex items-baseline gap-3 text-[13px] text-fog transition-colors duration-300 hover:text-white"
                    >
                      <span className="font-mono text-[10px] tracking-[0.18em] text-fog-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{s.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            {/* Body */}
            <article className="md:col-span-9">
              <div className="space-y-16 md:space-y-20">
                {sections.map((s, i) => (
                  <LegalSectionBlock key={s.heading} section={s} index={i} />
                ))}
              </div>

              {/* Footer rail */}
              <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-9 sm:flex-row sm:items-center">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
                  Questions about this document?
                </span>
                <a
                  href="mailto:gnanimarketingsolutions@gmail.com"
                  className="accent-link font-display text-[15px] tracking-tight-display text-white"
                >
                  gnanimarketingsolutions@gmail.com
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function LegalSectionBlock({
  section,
  index,
}: {
  section: LegalSection;
  index: number;
}) {
  return (
    <motion.section
      id={`section-${index + 1}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease }}
      className="scroll-mt-32"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
      </div>
      <h2 className="mt-5 font-display text-[26px] font-medium leading-[1.15] tracking-tight-display text-white md:text-[32px]">
        {section.heading}
      </h2>
      <div className="mt-6 max-w-[680px] space-y-5 text-[15px] leading-[1.75] text-fog md:text-[16px]">
        {section.paragraphs?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {section.list && (
          <ul className="space-y-2.5 pt-1">
            {section.list.map((item) => (
              <li key={item} className="flex items-baseline gap-3">
                <span className="mt-1 h-px w-3 shrink-0 bg-white/20" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.section>
  );
}

function AmbientField() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] overflow-hidden">
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 720,
          height: 720,
          left: "-12%",
          top: "-20%",
          background:
            "radial-gradient(closest-side, rgba(168,136,74,0.08), transparent)",
        }}
        animate={{ opacity: [0.55, 0.78, 0.55] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 760,
          height: 760,
          right: "-12%",
          top: "-10%",
          background:
            "radial-gradient(closest-side, rgba(61,107,255,0.07), transparent)",
          animationDelay: "-8s",
        }}
        animate={{ opacity: [0.78, 0.55, 0.78] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
