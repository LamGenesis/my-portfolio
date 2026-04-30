"use client";

import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal>
            <span className="section-eyebrow">About</span>
          </Reveal>
          <RevealWords as="h2" className="section-title">
            Backend là nền móng. Frontend là trải nghiệm.
          </RevealWords>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {personal.about.map((paragraph, idx) => (
              <Reveal key={idx} delay={120 + idx * 100}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Reveal delay={120}>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/30">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Education</p>
                  <p className="font-semibold text-white">
                    {personal.education.major}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                {personal.education.school}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {personal.education.period}
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/30">
                  <Sparkles size={18} />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Currently focused</p>
                  <p className="font-semibold text-white">
                    .NET · Microservices · Next.js
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Học cách thiết kế hệ thống dễ test, dễ bảo trì và đo được hiệu năng.
              </p>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/30">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-semibold text-white">{personal.location}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Sẵn sàng làm onsite, hybrid hoặc remote.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
