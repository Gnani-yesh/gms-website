"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { SectionAura } from "@/components/site/section-aura";
import { ContactWizard } from "@/components/contact/wizard";

const ease = [0.16, 1, 0.3, 1] as const;

export function ContactPanel() {
  return (
    <section className="relative pb-32 pt-20 md:pb-44 md:pt-28">
      <SectionAura tone="warm" position="top-right" size={680} />
      <SectionAura tone="cool" position="bottom-left" size={680} />

      <div className="container relative">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }}
            className="md:col-span-7"
          >
            <ContactWizard />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="md:col-span-5"
          >
            <ContactSidebar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CONTACT SIDEBAR
   ════════════════════════════════════════════ */
function ContactSidebar() {
  return (
    <div className="space-y-5">
      {/* Direct lines card */}
      <div className="rounded-2xl border border-white/[0.06] bg-ink-900/50 p-7 md:p-9">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
            02
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
          <span className="eyebrow">Direct lines</span>
        </div>

        <div className="mt-7 space-y-6">
          <ContactRow
            icon={<Mail className="h-3.5 w-3.5" strokeWidth={1.75} />}
            label="Email"
            href="mailto:gnanimarketingsolutions@gmail.com"
            value="gnanimarketingsolutions@gmail.com"
            small
          />
          <ContactRow
            icon={<Phone className="h-3.5 w-3.5" strokeWidth={1.75} />}
            label="Phone"
            href="tel:+447442559228"
            value="+44 7442 559228"
          />
          <ContactRow
            icon={<MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />}
            label="Studio"
            value="Hyderabad, India & Swansea, UK"
          />
        </div>
      </div>

      {/* What to expect */}
      <div className="rounded-2xl border border-white/[0.06] bg-ink-900/50 p-7 md:p-9">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
            03
          </span>
          <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
          <span className="eyebrow">What to expect</span>
        </div>

        <ul className="mt-7 space-y-4">
          {[
            { n: "01", body: "We respond to every enquiry within two business days." },
            { n: "02", body: "We schedule a 30-minute call to understand the work and the partnership." },
            { n: "03", body: "We share a written proposal — scope, timeline, and a fixed-price first phase." },
            { n: "04", body: "If we're a fit, we kick off within 2 — 4 weeks." },
          ].map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                {s.n}
              </span>
              <p className="flex-1 text-[13.5px] leading-[1.65] text-fog">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Hours */}
      <div className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-7">
        <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
          <span>Working hours</span>
          <span className="flex items-center gap-2 text-emerald-300/80">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-pulse-soft rounded-full bg-emerald-400/70" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Online
          </span>
        </div>
        <div className="mt-3 font-display text-[18px] font-medium tracking-tight-display text-white">
          10:00 — 19:00 IST
        </div>
        <div className="mt-1 text-[12.5px] text-fog-muted">
          Monday — Friday · GMT +5:30
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  href,
  value,
  small,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  value: string;
  small?: boolean;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/[0.07] bg-white/[0.02] text-fog-muted">
          {icon}
        </span>
        <div>
          <div className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-fog-muted">
            {label}
          </div>
          <div
            className={`mt-1 font-display tracking-tight-display text-white transition-colors duration-300 ${
              small ? "text-[14.5px]" : "text-[16.5px] md:text-[18px]"
            } ${href ? "group-hover:text-accent" : ""}`}
          >
            {value}
          </div>
        </div>
      </div>
      {href && (
        <ArrowUpRight
          className="mt-2 h-4 w-4 shrink-0 text-fog-muted opacity-0 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-accent"
          strokeWidth={1.5}
        />
      )}
    </div>
  );

  if (!href) return <div>{content}</div>;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block"
    >
      {content}
    </a>
  );
}
