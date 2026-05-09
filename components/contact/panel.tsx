"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const SCOPES = ["Website", "Platform", "Brand", "Growth", "Multiple"];
const BUDGETS = ["< $25k", "$25 — $75k", "$75 — $200k", "$200k +"];
const TIMELINES = ["Within 30 days", "1 — 3 months", "3 — 6 months", "Exploring"];

export function ContactPanel() {
  return (
    <section className="relative pb-32 pt-12 md:pb-44 md:pt-16">
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
            <ContactForm />
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
   CONTACT FORM
   ════════════════════════════════════════════ */
function ContactForm() {
  const [scope, setScope] = useState<string>("Website");
  const [budget, setBudget] = useState<string>("$75 — $200k");
  const [timeline, setTimeline] = useState<string>("1 — 3 months");

  return (
    <form
      action="mailto:gnanimarketingsolutions@gmail.com"
      method="post"
      encType="text/plain"
      className="rounded-2xl border border-white/[0.06] bg-ink-900/50 p-7 md:p-10"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
          01
        </span>
        <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
        <span className="eyebrow">Project enquiry</span>
      </div>

      <h2 className="mt-6 font-display text-[32px] font-medium leading-[1.05] tracking-tight-display text-white md:text-[40px]">
        Start with the brief.
      </h2>

      <div className="mt-9 space-y-7">
        {/* Name + email */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <Field label="Your name" name="name" placeholder="Gnani Patel" />
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@company.com"
          />
        </div>

        {/* Company + role */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <Field label="Company" name="company" placeholder="Northwave" />
          <Field label="Role" name="role" placeholder="Founder · CEO · CMO" />
        </div>

        {/* Scope chips */}
        <SelectField
          label="Scope of engagement"
          name="scope"
          value={scope}
          options={SCOPES}
          onChange={setScope}
        />

        {/* Budget chips */}
        <SelectField
          label="Indicative budget"
          name="budget"
          value={budget}
          options={BUDGETS}
          onChange={setBudget}
        />

        {/* Timeline chips */}
        <SelectField
          label="Timeline"
          name="timeline"
          value={timeline}
          options={TIMELINES}
          onChange={setTimeline}
        />

        {/* Brief */}
        <div>
          <label
            htmlFor="brief"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted"
          >
            The brief
          </label>
          <textarea
            id="brief"
            name="brief"
            rows={5}
            placeholder="A few sentences on what you're building, who it's for, and where you'd like to be in 12 months."
            className="mt-3 w-full rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-[14.5px] leading-[1.6] text-white placeholder:text-fog-muted/70 focus:border-accent/40 focus:bg-white/[0.04] focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-7 sm:flex-row sm:items-center">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
            We respond within 2 business days
          </span>
          <button type="submit" className="btn-primary">
            Send enquiry
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-[14.5px] text-white placeholder:text-fog-muted/70 focus:border-accent/40 focus:bg-white/[0.04] focus:outline-none"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  options,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
        {label}
      </label>
      <input type="hidden" name={name} value={value} />
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`rounded-full border px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] transition-colors duration-300 ${
              value === o
                ? "border-accent/40 bg-accent/10 text-accent"
                : "border-white/[0.07] bg-white/[0.02] text-fog hover:border-white/[0.12] hover:text-white"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
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
            href="tel:+917780570992"
            value="+91 77805 70992"
          />
          <ContactRow
            icon={<MessageCircle className="h-3.5 w-3.5" strokeWidth={1.75} />}
            label="WhatsApp"
            href="https://wa.me/917780570992"
            value="+91 77805 70992"
            external
          />
          <ContactRow
            icon={<MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />}
            label="Studio"
            value="Hyderabad, India"
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
