"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PlatformVisual } from "./platform-visual";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 sm:pt-44 md:pt-56">
      <AmbientField />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="container relative">
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-accent opacity-60 animate-pulse-soft" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog">
            Now accepting Q3 / Q4 partners
          </span>
        </motion.div>

        {/* Headline + subtext */}
        <div className="mx-auto mt-8 max-w-[1100px] text-center sm:mt-10 md:mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.15 }}
            className="font-display text-display-xl font-medium text-balance"
          >
            Digital infrastructure
            <br />
            for{" "}
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              ambitious
            </span>{" "}
            <span className="italic font-light text-fog">businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
            className="mx-auto mt-7 max-w-[600px] text-pretty text-[15.5px] leading-[1.6] text-fog sm:mt-9 sm:text-[16px] md:text-[17.5px]"
          >
            GMS designs and builds premium websites, custom platforms and growth
            systems — the digital infrastructure modern companies depend on.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.45 }}
            className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.24em] text-fog-muted"
          >
            UK &amp; Global · Based in the UK
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row"
          >
            <Link href="https://calendly.com/gnanimarketingsolutions/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
            </Link>
            <Link href="/work" className="btn-ghost">
              <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
              View selected work
            </Link>
          </motion.div>
        </div>

        {/* Cinematic visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease, delay: 0.55 }}
          className="relative mx-auto mt-20 max-w-[1180px] sm:mt-28 md:mt-40"
        >
          <PlatformVisual />
        </motion.div>

        {/* Trust strip + studio anchor — bridges into next section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1 }}
          className="mt-28 sm:mt-36 md:mt-48"
        >
          <div className="mx-auto max-w-[820px] text-center">
            <p className="eyebrow">
              Trusted by modern teams shaping their category
            </p>
          </div>
          <div className="hairline mx-auto mt-9 max-w-[820px]" />
          <div className="mx-auto mt-10 grid max-w-[920px] grid-cols-2 gap-y-9 sm:grid-cols-3 md:grid-cols-6">
            {["Northwave", "Atelier", "Lumen", "Folio", "Meridian", "Halcyon"].map(
              (name) => (
                <div
                  key={name}
                  className="text-center font-display text-[15px] tracking-tight-display text-fog-muted transition-colors duration-500 hover:text-fog"
                >
                  {name}
                </div>
              )
            )}
          </div>

          {/* Studio anchor — grounds the hero, bridges to next section */}
          <div className="mx-auto mt-20 flex flex-col items-center gap-5 md:mt-28">
            <span className="h-6 w-px bg-gradient-to-b from-white/15 to-transparent" />
            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-fog-muted/70" />
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-fog-muted">
                Studio · Swansea &amp; Hyderabad — Established MMXXII
              </span>
              <span className="h-1 w-1 rounded-full bg-fog-muted/70" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AmbientField() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1200px] overflow-hidden">
      {/* Magenta — upper-left, deep, slow breath */}
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 820,
          height: 820,
          left: "-14%",
          top: "-20%",
          background:
            "radial-gradient(closest-side, rgba(185,70,200,0.16), rgba(185,70,200,0))",
        }}
        animate={{ opacity: [0.55, 0.78, 0.55] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      {/* Cool blue — upper-right, slow breath, offset phase */}
      <motion.div
        className="ambient animate-ambient-drift"
        style={{
          width: 880,
          height: 880,
          right: "-14%",
          top: "-10%",
          background:
            "radial-gradient(closest-side, rgba(61,107,255,0.15), rgba(61,107,255,0))",
          animationDelay: "-8s",
        }}
        animate={{ opacity: [0.78, 0.55, 0.78] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      {/* Warm gold — center, beneath the visual */}
      <div
        className="ambient"
        style={{
          width: 1100,
          height: 460,
          left: "50%",
          top: "38%",
          transform: "translateX(-50%)",
          opacity: 0.78,
          background:
            "radial-gradient(closest-side, rgba(200,169,107,0.12), rgba(200,169,107,0))",
        }}
      />
      {/* Floor light — extends warmth into next section */}
      <motion.div
        className="ambient"
        style={{
          width: 900,
          height: 360,
          left: "50%",
          top: "78%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(closest-side, rgba(200,169,107,0.08), transparent)",
        }}
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
