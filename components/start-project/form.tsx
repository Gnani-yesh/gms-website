"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SectionAura } from "@/components/site/section-aura";

const ease = [0.16, 1, 0.3, 1] as const;

const SERVICES = ["Websites", "Platforms", "Brand", "Growth", "All four"];
const STAGES = ["Pre-launch", "Launched · early", "Growing", "Established", "Re-platforming"];
const BUDGETS = ["< $25k", "$25 — $75k", "$75 — $200k", "$200k +"];
const TIMELINES = ["Within 30 days", "1 — 3 months", "3 — 6 months", "Exploring"];

export function StartProjectForm() {
  const [services, setServices] = useState<string[]>(["Websites"]);
  const [stage, setStage] = useState<string>("Growing");
  const [budget, setBudget] = useState<string>("$75 — $200k");
  const [timeline, setTimeline] = useState<string>("1 — 3 months");

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

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
            className="md:col-span-8"
          >
            <form
              action="mailto:gnanimarketingsolutions@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-12 rounded-2xl border border-white/[0.06] bg-ink-900/50 p-8 md:p-12"
            >
              {/* SECTION 01 — About you */}
              <FormSection
                index="01"
                eyebrow="About you"
                title="Tell us who you are."
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field label="Your name" name="name" placeholder="Gnani Patel" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field
                    label="Company"
                    name="company"
                    placeholder="Northwave"
                  />
                  <Field
                    label="Role"
                    name="role"
                    placeholder="Founder · CEO · CMO"
                  />
                </div>
                <Field
                  label="Company website"
                  name="website"
                  type="url"
                  placeholder="https://"
                />
              </FormSection>

              {/* SECTION 02 — About the project */}
              <FormSection
                index="02"
                eyebrow="About the project"
                title="What are you building?"
              >
                <div>
                  <FieldLabel>Services needed</FieldLabel>
                  <input
                    type="hidden"
                    name="services"
                    value={services.join(", ")}
                  />
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SERVICES.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        active={services.includes(s)}
                        onClick={() => toggleService(s)}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-[12px] text-fog-muted">
                    Select all that apply. Most engagements run across two or
                    three.
                  </p>
                </div>

                <SelectField
                  label="Company stage"
                  name="stage"
                  value={stage}
                  options={STAGES}
                  onChange={setStage}
                />
              </FormSection>

              {/* SECTION 03 — Logistics */}
              <FormSection
                index="03"
                eyebrow="Logistics"
                title="How are you thinking about this?"
              >
                <SelectField
                  label="Indicative budget"
                  name="budget"
                  value={budget}
                  options={BUDGETS}
                  onChange={setBudget}
                />
                <SelectField
                  label="Ideal timeline"
                  name="timeline"
                  value={timeline}
                  options={TIMELINES}
                  onChange={setTimeline}
                />
              </FormSection>

              {/* SECTION 04 — Brief */}
              <FormSection
                index="04"
                eyebrow="The brief"
                title="What does success look like?"
              >
                <div>
                  <FieldLabel>Goals · 12 months out</FieldLabel>
                  <textarea
                    name="goals"
                    rows={4}
                    placeholder="Where would you like the company to be in 12 months? What's in the way today?"
                    className="mt-3 w-full rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-[14.5px] leading-[1.65] text-white placeholder:text-fog-muted/70 focus:border-accent/40 focus:bg-white/[0.04] focus:outline-none"
                  />
                </div>
                <div>
                  <FieldLabel>Anything else we should know</FieldLabel>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Reference work you admire, internal constraints, the people you've worked with before — whatever helps."
                    className="mt-3 w-full rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-[14.5px] leading-[1.65] text-white placeholder:text-fog-muted/70 focus:border-accent/40 focus:bg-white/[0.04] focus:outline-none"
                  />
                </div>
              </FormSection>

              {/* Submit */}
              <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-9 sm:flex-row sm:items-center">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
                  We respond within 2 business days
                </span>
                <button type="submit" className="btn-primary">
                  Send enquiry
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="md:col-span-4 md:sticky md:top-32 md:h-fit"
          >
            <Sidebar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FORM PRIMITIVES
   ════════════════════════════════════════════ */
function FormSection({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent">
          {index}
        </span>
        <span className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-display text-[26px] font-medium leading-[1.1] tracking-tight-display text-white md:text-[32px]">
        {title}
      </h2>
      <div className="mt-8 space-y-6">{children}</div>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
      {children}
    </label>
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
      <label htmlFor={name}>
        <FieldLabel>{label}</FieldLabel>
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
      <FieldLabel>{label}</FieldLabel>
      <input type="hidden" name={name} value={value} />
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <Chip
            key={o}
            label={o}
            active={value === o}
            onClick={() => onChange(o)}
          />
        ))}
      </div>
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] transition-colors duration-300 ${
        active
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-white/[0.07] bg-white/[0.02] text-fog hover:border-white/[0.12] hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

/* ════════════════════════════════════════════
   SIDEBAR
   ════════════════════════════════════════════ */
function Sidebar() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-white/[0.06] bg-ink-900/50 p-7 md:p-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
            What to expect
          </span>
        </div>
        <ul className="mt-6 space-y-4">
          {[
            { n: "01", body: "We respond to every enquiry within two business days." },
            { n: "02", body: "30-minute call — we listen, you ask anything." },
            { n: "03", body: "Written proposal · scope, timeline, fixed-price first phase." },
            { n: "04", body: "If we're a fit, kickoff within 2 — 4 weeks." },
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

      <div className="rounded-2xl border border-white/[0.06] bg-ink-900/50 p-7 md:p-8">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
          Direct lines
        </div>
        <ul className="mt-6 space-y-5">
          <SidebarRow
            icon={<Mail className="h-3.5 w-3.5" strokeWidth={1.75} />}
            label="Email"
            value="gnanimarketingsolutions@gmail.com"
            href="mailto:gnanimarketingsolutions@gmail.com"
            small
          />
          <SidebarRow
            icon={<Phone className="h-3.5 w-3.5" strokeWidth={1.75} />}
            label="Phone"
            value="+91 77805 70992"
            href="tel:+917780570992"
          />
          <SidebarRow
            icon={<MessageCircle className="h-3.5 w-3.5" strokeWidth={1.75} />}
            label="WhatsApp"
            value="+91 77805 70992"
            href="https://wa.me/917780570992"
            external
          />
          <SidebarRow
            icon={<MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />}
            label="Studio"
            value="Hyderabad, India"
          />
        </ul>
      </div>

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

function SidebarRow({
  icon,
  label,
  value,
  href,
  small,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  small?: boolean;
  external?: boolean;
}) {
  const inner = (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/[0.07] bg-white/[0.02] text-fog-muted">
        {icon}
      </span>
      <div>
        <div className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-fog-muted">
          {label}
        </div>
        <div
          className={`mt-1 font-display tracking-tight-display text-white ${
            small ? "text-[14px]" : "text-[16px]"
          } ${href ? "transition-colors duration-300 group-hover:text-accent" : ""}`}
        >
          {value}
        </div>
      </div>
    </li>
  );
  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block"
    >
      {inner}
    </a>
  );
}
