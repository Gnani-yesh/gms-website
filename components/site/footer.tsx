"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./logo";

const STUDIO = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/studio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "All services", href: "/services" },
  { label: "Websites", href: "/services/websites" },
  { label: "Platforms", href: "/services/platforms" },
  { label: "Growth", href: "/services/growth" },
  { label: "Branding", href: "/services/branding" },
];

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/gnanimarketing/", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gnani-marketing-solutions-8329b33a3/", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/@GnaniMarketingSolutions", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative">
      <div className="hairline mx-auto max-w-[1200px]" />

      <div className="container relative pb-12 pt-24 md:pt-32">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-7 max-w-[320px] text-[14px] leading-[1.65] text-fog-muted">
              A digital growth and infrastructure company building for ambitious
              modern brands.
            </p>
            <div className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-pulse-soft rounded-full bg-emerald-400/70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-fog">
                Available · 2026 partners
              </span>
            </div>
          </div>

          {/* Studio column */}
          <div className="md:col-span-2">
            <div className="eyebrow">Studio</div>
            <ul className="mt-6 space-y-3">
              {STUDIO.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="footer-link">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="md:col-span-2">
            <div className="eyebrow">Services</div>
            <ul className="mt-6 space-y-3">
              {SERVICES.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="footer-link">
                    {i.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <div className="eyebrow mt-2">Social</div>
              </li>
              <li>
                <div className="mt-3 flex items-center gap-4">
                  {SOCIAL.map((i) => {
                    const Icon = i.icon;
                    return (
                      <Link
                        key={i.label}
                        href={i.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={i.label}
                        className="text-fog-muted transition-colors duration-300 hover:text-white"
                      >
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                      </Link>
                    );
                  })}
                </div>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3">
            <div className="eyebrow">Contact</div>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="mailto:gnanimarketingsolutions@gmail.com"
                  className="group block"
                >
                  <div className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-fog-muted">
                    Email
                  </div>
                  <div className="mt-1 inline-flex items-baseline gap-1.5 text-[13.5px] text-fog transition-colors duration-300 group-hover:text-white">
                    gnanimarketingsolutions@gmail.com
                    <span
                      aria-hidden
                      className="text-[10px] text-fog-muted opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+447442559228"
                  className="group block"
                >
                  <div className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-fog-muted">
                    Phone
                  </div>
                  <div className="mt-1 text-[13.5px] text-fog transition-colors duration-300 group-hover:text-white">
                    +44 7442 559228
                  </div>
                </Link>
              </li>
              <li>
                <div className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-fog-muted">
                  Studio
                </div>
                <div className="mt-1 text-[13.5px] text-fog">
                  Swansea, UK
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Atmospheric wordmark */}
        <Wordmark />

        {/* Bottom rail */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-8 text-[12px] text-fog-muted md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span>© {new Date().getFullYear()} Gnani Marketing Solutions</span>
            <span className="hidden h-3 w-px bg-white/15 md:inline-block" />
            <span>Swansea · UK</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="transition-colors duration-300 hover:text-white"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Atmospheric wordmark — the page's quiet sign-off.
 * Two layers: an architectural mark band + a soft fading glyph that
 * dissolves into the page background.
 */
function Wordmark() {
  return (
    <div className="relative mt-32 select-none md:mt-40">
      <div className="hairline" />

      {/* Architectural marks — coordinates of Swansea */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between font-mono text-[9px] tracking-[0.18em] text-fog-muted">
        <span className="-translate-y-1/2 bg-ink-950 px-2">
          — LATITUDE 51.62°N
        </span>
        <span className="-translate-y-1/2 bg-ink-950 px-2">
          LONGITUDE 3.94°W —
        </span>
      </div>

      <div className="relative mt-14 md:mt-20">
        <div
          aria-hidden
          className="text-center font-display font-medium leading-[0.85] tracking-tightest"
          style={{
            fontSize: "clamp(80px, 17vw, 240px)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 55%, transparent 95%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          GMS
        </div>

        {/* Subtle horizon line through the wordmark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[8%] top-1/2 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05) 70%, transparent)",
          }}
        />
      </div>
    </div>
  );
}
