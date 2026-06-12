"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const SERVICE_GROUPS = [
  {
    label: "Build",
    items: [
      { name: "Premium Websites", desc: "Cinematic brand sites", href: "/services/websites" },
      { name: "Custom Platforms", desc: "Web apps & dashboards", href: "/services/platforms" },
      { name: "Internal Systems", desc: "Operational infrastructure", href: "/services/platforms" },
    ],
  },
  {
    label: "Grow",
    items: [
      { name: "SEO", desc: "Technical & content systems", href: "/services/growth" },
      { name: "Meta Ads", desc: "Performance growth engines", href: "/services/growth" },
      { name: "Social Media", desc: "Brand-led organic systems", href: "/services/growth" },
      { name: "Content Ecosystems", desc: "Long-form to short-form", href: "/services/growth" },
    ],
  },
  {
    label: "Brand",
    items: [
      { name: "Brand Identity", desc: "Logos, systems, guidelines", href: "/services/branding" },
      { name: "Photography", desc: "Editorial & product shoots", href: "/services/branding" },
      { name: "Creative Direction", desc: "End-to-end art direction", href: "/services/branding" },
    ],
  },
];

const NAV_ITEMS = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Studio", href: "/studio" },
];

const SERVICE_PATHS = [
  "/services",
  "/services/websites",
  "/services/platforms",
  "/services/growth",
  "/services/branding",
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          className={cn(
            "relative flex h-[58px] items-center justify-between rounded-full px-4 pl-5 pr-2",
            "transition-[background-color,backdrop-filter,border-color,box-shadow] duration-700 ease-out",
            scrolled
              ? "glass shadow-glass"
              : "border border-transparent bg-transparent"
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-7 md:flex">
            <ServicesDropdown
              open={servicesOpen}
              setOpen={setServicesOpen}
              isActive={SERVICE_PATHS.some((p) => pathname?.startsWith(p))}
            />
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "nav-link text-[13.5px] tracking-tight-display",
                    active && "is-active"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="mailto:gnanimarketingsolutions@gmail.com?subject=Start a Project — GMS"
              className="btn-primary hidden md:inline-flex"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border-strong bg-white/[0.03] md:hidden"
            >
              <div className="space-y-[5px]">
                <span
                  className={cn(
                    "block h-px w-4 bg-white transition-transform duration-300",
                    mobileOpen && "translate-y-[3px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-4 bg-white transition-transform duration-300",
                    mobileOpen && "-translate-y-[3px] -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="glass mt-2 overflow-hidden rounded-3xl p-2 md:hidden"
            >
              <div className="flex flex-col">
                {[
                  { label: "Services", href: "/services" },
                  { label: "Websites", href: "/services/websites" },
                  { label: "Platforms", href: "/services/platforms" },
                  { label: "Growth", href: "/services/growth" },
                  { label: "Branding", href: "/services/branding" },
                  ...NAV_ITEMS,
                  { label: "Contact", href: "/contact" },
                ].map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] transition-colors duration-300",
                        active
                          ? "bg-white/[0.05] text-white"
                          : "text-fog hover:bg-white/[0.04] hover:text-white"
                      )}
                    >
                      {item.label}
                      <ArrowUpRight
                        className={cn(
                          "h-4 w-4 transition-colors duration-300",
                          active ? "text-accent" : "text-fog-muted"
                        )}
                      />
                    </Link>
                  );
                })}
                <Link
                  href="mailto:gnanimarketingsolutions@gmail.com?subject=Start a Project — GMS"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary mx-2 my-3 justify-center"
                >
                  Start a project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

/* ────────────────────────────────────────────
   SERVICES DROPDOWN
   Portaled to body so backdrop-filter works at
   any scroll position regardless of nav glass
   ──────────────────────────────────────────── */
function ServicesDropdown({
  open,
  setOpen,
  isActive,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  isActive: boolean;
}) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track trigger position; recompute on scroll/resize while open
  useEffect(() => {
    if (!open) return;

    const update = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({ x: rect.left + rect.width / 2, y: rect.bottom });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [open]);

  // Escape closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  // Outside click closes
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, setOpen]);

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleEnter = () => {
    cancelClose();
    setOpen(true);
  };

  const handleLeave = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => setOpen(false), 160);
  };

  return (
    <>
      <div
        ref={triggerRef}
        className="relative"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
          className={cn(
            "nav-link inline-flex items-center gap-1.5 text-[13.5px] tracking-tight-display",
            (open || isActive) && "is-active"
          )}
        >
          Services
          <ChevronDown
            className={cn(
              "h-3 w-3 text-fog-muted transition-transform duration-300",
              open && "rotate-180 text-white"
            )}
            strokeWidth={2.25}
          />
        </button>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && coords && (
              <motion.div
                key="services-panel"
                ref={panelRef}
                initial={{ opacity: 0, y: 8, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.99 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{
                  position: "fixed",
                  left: coords.x,
                  top: coords.y,
                  zIndex: 60,
                }}
                className="origin-top -translate-x-1/2 pt-3"
              >
                <ServicesPanel onItemClick={() => setOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

function ServicesPanel({ onItemClick }: { onItemClick: () => void }) {
  return (
    <div className="glass-strong w-[660px] overflow-hidden rounded-3xl p-6 shadow-premium">
      <div className="grid grid-cols-3 gap-6">
        {SERVICE_GROUPS.map((group) => (
          <div key={group.label} className="space-y-3">
            <div className="eyebrow flex items-center gap-2 text-[10px]">
              <span className="h-[5px] w-[5px] rounded-full bg-accent" />
              {group.label}
            </div>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onItemClick}
                    className="group block rounded-xl p-2.5 transition-colors duration-300 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-[13.5px] font-medium tracking-tight-display text-white">
                        {item.name}
                      </div>
                      <ArrowUpRight
                        className="h-3 w-3 text-fog-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                        strokeWidth={2}
                      />
                    </div>
                    <div className="mt-0.5 text-[11.5px] text-fog-muted">
                      {item.desc}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <Link
          href="/services"
          onClick={onItemClick}
          className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog-muted transition-colors duration-300 hover:text-fog"
        >
          All services overview
        </Link>
        <Link
          href="/work"
          onClick={onItemClick}
          className="inline-flex items-center gap-1.5 text-[12.5px] text-white transition-colors duration-300 hover:text-accent"
        >
          View selected work
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
        </Link>
      </div>
    </div>
  );
}
