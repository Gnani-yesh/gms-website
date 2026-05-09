"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProcessHero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 sm:pt-44 md:pt-56">
      <AmbientField />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 backdrop-blur-md"
        >
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog">
            <Link
              href="/"
              className="text-fog-muted transition-colors hover:text-fog"
            >
              GMS
            </Link>
            <span className="mx-2 text-fog-muted">/</span>
            Process
          </span>
        </motion.div>

        <div className="mx-auto mt-8 max-w-[1100px] text-center sm:mt-10 md:mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.15 }}
            className="font-display text-display-xl font-medium text-balance"
          >
            How we build.
            <br />
            <span className="italic font-light text-fog">How we operate.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
            className="mx-auto mt-7 max-w-[640px] text-pretty text-[15.5px] leading-[1.6] text-fog sm:mt-9 sm:text-[16px] md:text-[17.5px]"
          >
            The operating model behind every engagement. Six stages — three to
            build, three to operate — designed to compound past the launch.
          </motion.p>

          {/* Anchor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.6 }}
            className="mx-auto mt-12 flex flex-col items-center gap-5 md:mt-14"
          >
            <span className="h-6 w-px bg-gradient-to-b from-white/15 to-transparent" />
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-fog-muted">
              <span>Discovery</span>
              <span className="h-1 w-1 rounded-full bg-fog-muted/70" />
              <span>Strategy</span>
              <span className="h-1 w-1 rounded-full bg-fog-muted/70" />
              <span>Infrastructure</span>
              <span className="h-1 w-1 rounded-full bg-fog-muted/70" />
              <span>Launch</span>
              <span className="h-1 w-1 rounded-full bg-fog-muted/70" />
              <span>Growth</span>
              <span className="h-1 w-1 rounded-full bg-fog-muted/70" />
              <span>Refinement</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AmbientField() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[800px] overflow-hidden">
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 820,
          height: 820,
          left: "-12%",
          top: "-20%",
          background:
            "radial-gradient(closest-side, rgba(185,70,200,0.12), transparent)",
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
          top: "-10%",
          background:
            "radial-gradient(closest-side, rgba(168,136,74,0.14), transparent)",
          animationDelay: "-8s",
        }}
        animate={{ opacity: [0.78, 0.55, 0.78] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
