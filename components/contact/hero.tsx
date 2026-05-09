"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 sm:pt-44 md:pt-52">
      <AmbientField />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-pulse-soft rounded-full bg-emerald-400/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog">
            <Link href="/" className="text-fog-muted transition-colors hover:text-fog">
              GMS
            </Link>
            <span className="mx-2 text-fog-muted">/</span>
            Now accepting 2026 partners
          </span>
        </motion.div>

        <div className="mx-auto mt-8 max-w-[1100px] text-center sm:mt-10 md:mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.15 }}
            className="font-display text-display-xl font-medium text-balance"
          >
            Tell us what
            <br />
            <span className="italic font-light text-fog">you&apos;re building.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
            className="mx-auto mt-7 max-w-[600px] text-pretty text-[15.5px] leading-[1.6] text-fog sm:mt-9 sm:text-[16px] md:text-[17.5px]"
          >
            We respond to every enquiry within two business days. Most
            engagements begin with a 30-minute call to understand the work
            before either side commits.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function AmbientField() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] overflow-hidden">
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 800,
          height: 800,
          left: "-12%",
          top: "-20%",
          background:
            "radial-gradient(closest-side, rgba(168,136,74,0.14), transparent)",
        }}
        animate={{ opacity: [0.55, 0.78, 0.55] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 860,
          height: 860,
          right: "-12%",
          top: "-10%",
          background:
            "radial-gradient(closest-side, rgba(61,107,255,0.10), transparent)",
          animationDelay: "-8s",
        }}
        animate={{ opacity: [0.78, 0.55, 0.78] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
