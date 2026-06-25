"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function WorkHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden py-28">
      <AmbientField />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="container relative">
        {/* Crumb */}
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
            Selected Work
          </span>
        </motion.div>

        <div className="mx-auto mt-8 max-w-[1100px] text-center sm:mt-10 md:mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.15 }}
            className="font-display text-display-xl font-medium text-balance"
          >
            A small portfolio
            <br />
            held to a high standard.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
            className="mx-auto mt-7 max-w-[640px] text-pretty text-[15.5px] leading-[1.6] text-fog sm:mt-9 sm:text-[16px] md:text-[17.5px]"
          >
            We take on a small number of clients each year. Here&apos;s some of
            the work — websites, branding and growth we&apos;re proud of.
          </motion.p>

          {/* Filter rail */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mx-auto mt-12 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] p-1.5 backdrop-blur-md"
          >
            {["All", "Websites", "Platforms", "Brand", "Growth"].map((f, i) => (
              <span
                key={f}
                className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  i === 0
                    ? "bg-white/[0.06] text-white"
                    : "text-fog-muted hover:text-fog"
                }`}
              >
                {f}
              </span>
            ))}
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
          left: "-14%",
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
          width: 880,
          height: 880,
          right: "-14%",
          top: "-10%",
          background:
            "radial-gradient(closest-side, rgba(61,107,255,0.12), transparent)",
          animationDelay: "-8s",
        }}
        animate={{ opacity: [0.78, 0.55, 0.78] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
