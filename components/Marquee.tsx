"use client";

import { skillGroups } from "@/data/skills";

/**
 * Tổng hợp tất cả tech từ skillGroups, dedupe.
 * Duplicate list 2 lần để loop seamless với keyframe `marquee-scroll` (translate -50%).
 */
const allTech = Array.from(new Set(skillGroups.flatMap((g) => g.items)));

export function Marquee() {
  const items = [...allTech, ...allTech];

  return (
    <section
      aria-label="Tech stack overview"
      className="relative overflow-hidden border-y border-slate-800/50 bg-slate-900/40 py-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-900 to-transparent sm:w-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-900 to-transparent sm:w-40"
      />

      <ul className="marquee-track flex w-max items-center gap-3">
        {items.map((tech, i) => (
          <li
            key={`${tech}-${i}`}
            className="inline-flex flex-none items-center whitespace-nowrap rounded-full bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-300 ring-1 ring-inset ring-slate-700/50 transition hover:bg-sky-500/10 hover:text-sky-300 hover:ring-sky-500/30"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
