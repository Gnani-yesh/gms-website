"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Check, Loader2 } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/* ── Field options ─────────────────────────────────────────── */
const NEEDS = [
  "Website",
  "Social Media Management",
  "Digital Ads",
  "WhatsApp Business Setup",
  "E-commerce System",
  "Business Photography",
  "Not sure yet",
];

const BUSINESS_TYPES = [
  "Retail / D2C",
  "Healthcare / Clinic",
  "Real Estate",
  "Hospitality / Café",
  "Professional Services",
  "Other",
];

const GOALS = [
  "More customers or leads",
  "Better online presence",
  "Launching something new",
  "Fixing what isn't working",
  "Not sure yet",
];

const TIMELINES = ["Within 30 days", "1–3 months", "3–6 months", "Just exploring"];

const BUDGETS = [
  "Under ₹15,000 (≈ under £140)",
  "₹15,000 – ₹40,000 (≈ £140 – £380)",
  "₹40,000 – ₹80,000 (≈ £380 – £760)",
  "₹80,000+ (≈ £760+)",
  "Prefer to discuss",
];

const CONTACT_METHODS = ["WhatsApp", "Email", "Call", "SMS"] as const;
const METHODS_NEEDING_PHONE = ["WhatsApp", "Call", "SMS"];

/** Digits-only WhatsApp destination (matches sidebar +44 7442 559228). */
const WHATSAPP_NUMBER = "447442559228";

type Answers = {
  needs: string[];
  businessType: string;
  businessTypeOther: string;
  goal: string;
  timeline: string;
  budget: string;
  notes: string;
  name: string;
  email: string;
  contactMethod: string;
  phone: string;
};

const EMPTY: Answers = {
  needs: [],
  businessType: "",
  businessTypeOther: "",
  goal: "",
  timeline: "",
  budget: "",
  notes: "",
  name: "",
  email: "",
  contactMethod: "",
  phone: "",
};

const TOTAL_STEPS = 7; // question steps; review screen sits after

export function ContactWizard() {
  const [step, setStep] = useState(0); // 0..6 questions, 7 = review
  const [a, setA] = useState<Answers>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [direction, setDirection] = useState(1);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const set = <K extends keyof Answers>(key: K, value: Answers[K]) =>
    setA((prev) => ({ ...prev, [key]: value }));

  const clearAdvance = () => {
    if (advanceTimer.current) {
      clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  };

  /** Set a single-select answer; optionally auto-advance after a brief beat. */
  const pickSingle = <K extends keyof Answers>(
    key: K,
    value: Answers[K],
    advance = true
  ) => {
    set(key, value);
    clearAdvance();
    if (advance) {
      const from = step;
      advanceTimer.current = setTimeout(() => {
        advanceTimer.current = null;
        setDirection(1);
        // Only advance if the visitor is still on the step they chose from.
        setStep((s) => (s === from ? s + 1 : s));
      }, 350);
    }
  };

  const toggleNeed = (value: string) =>
    setA((prev) => ({
      ...prev,
      needs: prev.needs.includes(value)
        ? prev.needs.filter((n) => n !== value)
        : [...prev.needs, value],
    }));

  const phoneRequired = METHODS_NEEDING_PHONE.includes(a.contactMethod);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email.trim());

  const stepValid = useMemo(() => {
    switch (step) {
      case 0:
        return a.needs.length > 0;
      case 1:
        return (
          a.businessType !== "" &&
          (a.businessType !== "Other" || a.businessTypeOther.trim() !== "")
        );
      case 2:
        return a.goal !== "";
      case 3:
        return a.timeline !== "";
      case 4:
        return a.budget !== "";
      case 5:
        return true; // notes optional
      case 6:
        return (
          a.name.trim() !== "" &&
          emailValid &&
          a.contactMethod !== "" &&
          (!phoneRequired || a.phone.trim() !== "")
        );
      default:
        return true;
    }
  }, [step, a, phoneRequired, emailValid]);

  const go = (next: number) => {
    clearAdvance();
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const encode = () => {
    const params = new URLSearchParams();
    params.append("form-name", "contact");
    params.append("needs", a.needs.join(", "));
    params.append("business-type", a.businessType);
    params.append("business-type-other", a.businessTypeOther.trim());
    params.append("goal", a.goal);
    params.append("timeline", a.timeline);
    params.append("budget", a.budget);
    params.append("notes", a.notes.trim());
    params.append("name", a.name.trim());
    params.append("email", a.email.trim());
    params.append("contact-method", a.contactMethod);
    params.append("phone", a.phone.trim());
    return params.toString();
  };

  const buildWhatsAppLink = () => {
    const businessType =
      a.businessType === "Other" && a.businessTypeOther.trim()
        ? a.businessTypeOther.trim()
        : a.businessType;
    const lines = [
      `Hi GMS — I'm ${a.name.trim()}.`,
      `Looking for: ${a.needs.join(", ")}`,
      businessType ? `Business: ${businessType}` : "",
      a.goal ? `Goal: ${a.goal}` : "",
      a.timeline ? `Timeline: ${a.timeline}` : "",
      a.budget ? `Budget: ${a.budget}` : "",
    ].filter(Boolean);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  };

  const submit = async () => {
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(),
      });
      if (!res.ok) throw new Error(`Bad status ${res.status}`);
      if (a.contactMethod === "WhatsApp") {
        window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
      }
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  /* ── Confirmation screen ─────────────────────────────────── */
  if (status === "done") {
    return (
      <Panel>
        <div className="flex flex-col items-start">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
            <Check className="h-5 w-5" strokeWidth={2} />
          </span>
          <h2 className="mt-7 font-display text-[30px] font-medium leading-[1.08] tracking-tight-display text-white md:text-[38px]">
            Thanks, {a.name.trim().split(" ")[0] || "there"} — it&apos;s sent.
          </h2>
          <p className="mt-5 max-w-[440px] text-[15px] leading-[1.65] text-fog">
            We&apos;ll get back to you within two business days by{" "}
            <span className="text-white">{a.contactMethod}</span>.
            {a.contactMethod === "WhatsApp"
              ? " We've also opened a WhatsApp message you can send us right now."
              : ""}
          </p>
        </div>
      </Panel>
    );
  }

  const onReview = step === TOTAL_STEPS;
  const businessLabel =
    a.businessType === "Other" ? a.businessTypeOther.trim() : a.businessType;

  return (
    <Panel>
      {/* Progress — light dot indicator */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
          {onReview ? "Review" : `Step ${step + 1} / ${TOTAL_STEPS}`}
        </span>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                i === step
                  ? "scale-125 bg-accent"
                  : i < step
                  ? "bg-accent/60"
                  : "bg-white/[0.12]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="relative mt-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.4, ease }}
          >
            {step === 0 && (
              <StepShell title="What do you need?" hint="Select all that apply.">
                <ChipGroup>
                  {NEEDS.map((o) => (
                    <Chip
                      key={o}
                      label={o}
                      active={a.needs.includes(o)}
                      onClick={() => toggleNeed(o)}
                    />
                  ))}
                </ChipGroup>
              </StepShell>
            )}

            {step === 1 && (
              <StepShell title="What kind of business are you?">
                <ChipGroup>
                  {BUSINESS_TYPES.map((o) => (
                    <Chip
                      key={o}
                      label={o}
                      active={a.businessType === o}
                      onClick={() => pickSingle("businessType", o, o !== "Other")}
                    />
                  ))}
                </ChipGroup>
                {a.businessType === "Other" && (
                  <input
                    autoFocus
                    value={a.businessTypeOther}
                    onChange={(e) => set("businessTypeOther", e.target.value)}
                    placeholder="Tell us what you do"
                    className={inputClass + " mt-4"}
                  />
                )}
              </StepShell>
            )}

            {step === 2 && (
              <StepShell title="What's the main goal?">
                <ChipGroup>
                  {GOALS.map((o) => (
                    <Chip
                      key={o}
                      label={o}
                      active={a.goal === o}
                      onClick={() => pickSingle("goal", o)}
                    />
                  ))}
                </ChipGroup>
              </StepShell>
            )}

            {step === 3 && (
              <StepShell title="What's your timeline?">
                <ChipGroup>
                  {TIMELINES.map((o) => (
                    <Chip
                      key={o}
                      label={o}
                      active={a.timeline === o}
                      onClick={() => pickSingle("timeline", o)}
                    />
                  ))}
                </ChipGroup>
              </StepShell>
            )}

            {step === 4 && (
              <StepShell title="What's your budget?">
                <ChipGroup>
                  {BUDGETS.map((o) => (
                    <Chip
                      key={o}
                      label={o}
                      active={a.budget === o}
                      onClick={() => pickSingle("budget", o)}
                    />
                  ))}
                </ChipGroup>
              </StepShell>
            )}

            {step === 5 && (
              <StepShell title="Anything else?" hint="Optional.">
                <textarea
                  value={a.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  rows={6}
                  placeholder="A few sentences on what you're building, who it's for, and where you'd like to be in 12 months."
                  className={inputClass + " leading-[1.6]"}
                />
              </StepShell>
            )}

            {step === 6 && (
              <StepShell title="Your details">
                <div className="space-y-6">
                  <LabeledField label="Your name">
                    <input
                      value={a.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </LabeledField>
                  <LabeledField label="Email">
                    <input
                      type="email"
                      value={a.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </LabeledField>
                  <LabeledField label="Preferred contact method">
                    <ChipGroup>
                      {CONTACT_METHODS.map((o) => (
                        <Chip
                          key={o}
                          label={o}
                          active={a.contactMethod === o}
                          onClick={() => set("contactMethod", o)}
                        />
                      ))}
                    </ChipGroup>
                  </LabeledField>
                  {phoneRequired && (
                    <LabeledField label="Phone number">
                      <input
                        type="tel"
                        autoFocus
                        value={a.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="+44 7700 900123"
                        className={inputClass}
                      />
                    </LabeledField>
                  )}
                </div>
              </StepShell>
            )}

            {onReview && (
              <StepShell title="Look right?">
                <div className="space-y-6">
                  {/* Project readback — light and flowing */}
                  <p className="text-[17px] leading-[1.5] text-white md:text-[18px]">
                    {a.needs.join(", ")}
                    {businessLabel ? (
                      <>
                        {" "}
                        for your{" "}
                        <span className="text-accent">{businessLabel}</span>{" "}
                        business
                      </>
                    ) : null}
                    .
                  </p>
                  <p className="text-[13.5px] uppercase tracking-[0.14em] text-fog-muted">
                    {[a.goal, a.timeline, a.budget]
                      .filter(Boolean)
                      .join("   ·   ")}
                  </p>
                  {a.notes.trim() && (
                    <p className="border-l-2 border-white/10 pl-4 text-[13.5px] leading-[1.6] text-fog-muted">
                      {a.notes.trim()}
                    </p>
                  )}

                  {/* Contact confirm — kept prominent to catch typos */}
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                    <div className="font-display text-[16px] font-medium tracking-tight-display text-white">
                      {a.name.trim() || "—"}
                    </div>
                    <div className="mt-1.5 text-[14px] text-fog">
                      {a.email.trim()}
                    </div>
                    {a.phone.trim() && (
                      <div className="text-[14px] text-fog">{a.phone.trim()}</div>
                    )}
                    <div className="mt-3 border-t border-white/[0.05] pt-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog-muted">
                      We&apos;ll reach you by {a.contactMethod}
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-[13px] leading-[1.6] text-red-300/90">
                      Something went wrong sending that. Please try again, or
                      email us directly at gnanimarketingsolutions@gmail.com.
                    </p>
                  )}
                </div>
              </StepShell>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav */}
      <div className="mt-9 flex flex-wrap items-center justify-between gap-x-4 gap-y-4 border-t border-white/[0.05] pt-7">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => go(step - 1)}
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted transition-colors hover:text-white disabled:opacity-40"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            Back
          </button>
        ) : (
          <span className="whitespace-nowrap font-mono text-[10.5px] uppercase tracking-[0.22em] text-fog-muted">
            We respond within 2 business days
          </span>
        )}

        {onReview ? (
          <button
            type="button"
            onClick={submit}
            disabled={status === "sending"}
            className="btn-primary disabled:opacity-60"
          >
            {status === "sending" ? (
              <>
                Sending
                <Loader2 className="h-3.5 w-3.5 animate-spin" strokeWidth={2.25} />
              </>
            ) : (
              <>
                Send it over
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
              </>
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => stepValid && go(step + 1)}
            disabled={!stepValid}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === TOTAL_STEPS - 1 ? "Review" : "Next"}
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
          </button>
        )}
      </div>
    </Panel>
  );
}

/* ── Presentational helpers ────────────────────────────────── */
const inputClass =
  "w-full rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-[14.5px] text-white placeholder:text-fog-muted/70 focus:border-accent/40 focus:bg-white/[0.04] focus:outline-none";

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-ink-900/50 p-7 md:p-10">
      {children}
    </div>
  );
}

function StepShell({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-[26px] font-medium leading-[1.1] tracking-tight-display text-white md:text-[32px]">
        {title}
      </h2>
      {hint && (
        <p className="mt-3 text-[13.5px] leading-[1.6] text-fog-muted">{hint}</p>
      )}
      <div className="mt-7">{children}</div>
    </div>
  );
}

function ChipGroup({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">{children}</div>;
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
      className={`flex w-full items-center justify-between gap-3 rounded-xl border px-5 py-3.5 text-left text-[14.5px] tracking-tight transition-colors duration-300 ${
        active
          ? "border-accent/50 bg-accent/[0.08] text-accent"
          : "border-white/[0.08] bg-white/[0.02] text-fog hover:border-white/[0.16] hover:text-white"
      }`}
    >
      <span>{label}</span>
      {active && <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />}
    </button>
  );
}

function LabeledField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-fog-muted">
        {label}
      </label>
      <div className="mt-3">{children}</div>
    </div>
  );
}

