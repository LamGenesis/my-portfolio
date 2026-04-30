"use client";

import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-page">
        <Reveal>
          <span className="section-eyebrow">Skills</span>
        </Reveal>
        <RevealWords as="h2" className="section-title">
          Năng lực kỹ thuật
        </RevealWords>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.id} delay={idx * 120}>
                <div className="card group h-full p-6 transition duration-300 hover:ring-sky-500/40">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/30 transition group-hover:bg-sky-500/20">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">
                    {group.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
