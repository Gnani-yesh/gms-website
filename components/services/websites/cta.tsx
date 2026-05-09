"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function WebsitesCTA() {
  return (
    <section id="contact" className="relative py-40 md:py-56">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate overflow-hidden rounded-3xl border border-white/[0.06] bg-ink-900/60 px-6 py-24 md:px-20 md:py-44"
        >
          {/* Layered ambient — warm, restrained */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="ambient"
              style={{
                width: 820,
                height: 820,
                left: "-22%",
                top: "-32%",
                opacity: 0.7,
                background:
                  "radial-gradient(closest-side, rgba(168,136,74,0.16), transparent)",
              }}
            />
            <div
              className="ambient"
              style={{
                width: 820,
                height: 820,
                right: "-22%",
                bottom: "-32%",
                opacity: 0.7,
                background:
                  "radial-gradient(closest-side, rgba(61,107,255,0.12), transparent)",
              }}
            />
            <div
              className="ambient"
              style={{
                width: 720,
                height: 360,
                left: "50%",
                top: "65%",
                transform: "translateX(-50%)",
                opacity: 0.6,
                background:
                  "radial-gradient(closest-side, rgba(200,169,107,0.10), transparent)",
              }}
            />
            <div className="absolute inset-0 grid-bg opacity-25" />
          </div>

          {/* Top hairline accent */}
          <div className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="mx-auto max-w-[920px] text-center">
            <span className="eyebrow">— A website with GMS</span>
            <h2 className="mt-7 font-display text-display-lg font-medium text-balance">
              Build the website
              <br />
              your category{" "}
              <span className="italic font-light text-fog">
                hasn&apos;t seen yet.
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-[580px] text-pretty text-[16px] leading-[1.6] text-fog md:text-[17.5px]">
              We work with a small number of partners each year. If you&apos;re
              ready to make a serious step change in how your brand is met
              online, we&apos;d love to talk.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="mailto:gnanimarketingsolutions@gmail.com"
                className="btn-primary"
              >
                Start a website
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
              </Link>
              <Link href="/work" className="btn-ghost">
                Explore our work
              </Link>
            </div>

            <div className="mt-16 flex flex-col items-center gap-3">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
                — Direct line —
              </span>
              <a
                href="mailto:gnanimarketingsolutions@gmail.com"
                className="accent-link font-display text-[18px] tracking-tight-display text-white md:text-[19px]"
              >
                gnanimarketingsolutions@gmail.com
              </a>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog-muted">
                <a
                  href="tel:+917780570992"
                  className="transition-colors duration-300 hover:text-white"
                >
                  +91 77805 70992
                </a>
                <span className="h-2.5 w-px bg-white/15" />
                <span>Hyderabad · IN</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
