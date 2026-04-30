"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { personal } from "@/data/personal";

const sectionIds = navItems.map((n) => n.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-800/60 bg-slate-900/70 backdrop-blur-lg"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#home"
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-500/15 text-sky-400 ring-1 ring-inset ring-sky-500/30">
            LL
          </span>
          <span className="hidden sm:inline">{personal.alias}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={[
                    "rounded-lg px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "text-sky-400"
                      : "text-slate-300 hover:text-white",
                  ].join(" ")}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={[
                        "absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-sky-400 transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      ].join(" ")}
                    />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-xl bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300 ring-1 ring-inset ring-sky-500/30 transition hover:bg-sky-500/20"
        >
          Hire me
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/60 text-slate-200 ring-1 ring-inset ring-slate-700/60 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden">
          <ul className="container-page flex flex-col gap-1 pb-4">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "block rounded-lg px-3 py-2 text-sm font-medium transition",
                      isActive
                        ? "bg-sky-500/10 text-sky-300"
                        : "text-slate-300 hover:bg-slate-800/60 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
