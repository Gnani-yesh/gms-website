"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudyGallery({ study }: { study: CaseStudy }) {
  return (
    <section className="relative py-32 md:py-44">
      <div className="container">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
            05
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
          <span className="eyebrow">The live site</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, ease }}
          className="mt-6 font-display text-display-md font-medium text-balance md:max-w-[900px]"
        >
          The work,{" "}
          <span className="italic font-light text-fog">live in the world.</span>
        </motion.h2>

        <motion.figure
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, ease }}
          className="lift relative mt-16 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/40 md:mt-20"
        >
          <div className="p-3 md:p-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl ring-1 ring-white/[0.05]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(200,169,107,0.06), rgba(15,17,21,0) 70%)",
                }}
              />
              <Image
                src={study.image.src}
                alt={study.image.alt}
                fill
                sizes="(min-width: 1280px) 1140px, 100vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
            </div>
          </div>
          <figcaption className="flex items-center justify-between border-t border-white/[0.05] px-7 py-5 md:px-8 md:py-6">
            <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-fog-muted">
              <span className="text-fog">FIG. 01</span>
              <span className="h-2.5 w-px bg-white/15" />
              <span>{study.url}</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog-muted">
              {study.status === "Concept" ? "Concept ↗" : "Live ↗"}
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
