"use client";

import { ArrowDown, Github, Mail } from "lucide-react";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { MagneticLink } from "@/components/MagneticLink";
import { personal } from "@/data/personal";

/**
 * Hero — staggered text reveal khi load (CSS animation chạy ngay).
 * Có cursor spotlight + magnetic CTA buttons + animated gradient trên tên.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center pt-24 sm:pt-28"
    >
      <CursorSpotlight />

      <div className="container-page">
        <div className="max-w-3xl">
          <p
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-1.5 text-sm font-medium text-slate-300 ring-1 ring-inset ring-slate-700/60 opacity-0 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
            </span>
            Đang tìm cơ hội Backend / Fullstack Internship
          </p>

          <h1 className="text-balance text-4xl font-bold leading-[1.18] tracking-tight text-white sm:text-6xl">
            <span
              className="block opacity-0 animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              Xin chào, mình là
            </span>
            <span className="mt-2 block bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 bg-clip-text pb-2 text-transparent hero-name">
              {personal.name}.
            </span>
            <span
              className="mt-3 block text-2xl font-semibold text-slate-300 sm:text-3xl opacity-0 animate-fade-up"
              style={{ animationDelay: "380ms" }}
            >
              Mình xây dựng API và sản phẩm web với{" "}
              <span className="text-white">.NET</span> &amp;{" "}
              <span className="text-white">Next.js</span>.
            </span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "520ms" }}
          >
            {personal.summary}
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "660ms" }}
          >
            <MagneticLink href="#projects" className="btn-primary">
              View projects
              <ArrowDown size={16} />
            </MagneticLink>
            <MagneticLink
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Github size={16} />
              GitHub
            </MagneticLink>
            <MagneticLink
              href={personal.socials.email}
              className="btn-ghost"
              aria-label="Send email"
            >
              <Mail size={16} />
              Contact
            </MagneticLink>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-500 hover:text-sky-400 sm:inline-flex"
        >
          Scroll down
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
