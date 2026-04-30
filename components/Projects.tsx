"use client";

import {
  ArrowUpRight,
  Github,
  ImageIcon,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { TiltCard } from "@/components/TiltCard";
import { projects, type Project } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-page">
        <Reveal>
          <span className="section-eyebrow">Projects</span>
        </Reveal>
        <RevealWords as="h2" className="section-title">
          Case study từ những dự án mình build
        </RevealWords>

        <div className="mt-12 space-y-8">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100}>
              <TiltCard maxTilt={4}>
                <ProjectCard project={project} />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group relative overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:ring-sky-500/40 sm:p-8 lg:hover:scale-[1.02]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(14, 165, 233, 0.18), transparent 70%)",
        }}
      />

      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <ProjectImage project={project} />
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            <span className="chip">{project.role}</span>
          </div>
          <p className="mt-2 text-sm text-slate-500">{project.period}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            {project.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                aria-label={`${project.name} GitHub repository`}
              >
                <Github size={16} />
                Source
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Live demo
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <CaseBlock
          icon={<Lightbulb size={16} />}
          title="Vấn đề"
          accent="text-amber-300"
        >
          <p className="text-sm leading-relaxed text-slate-300">
            {project.problem}
          </p>
        </CaseBlock>

        <CaseBlock
          icon={<Wrench size={16} />}
          title="Giải pháp"
          accent="text-sky-300"
        >
          <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
            {project.solution.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseBlock>

        <CaseBlock
          icon={<Target size={16} />}
          title="Kết quả"
          accent="text-emerald-300"
        >
          <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
            {project.impact.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CaseBlock>
      </div>

      <footer className="mt-8 border-t border-slate-800/60 pt-6">
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Tech stack
        </h4>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {project.techStack.backend && (
            <TechRow label="Backend" items={project.techStack.backend} />
          )}
          {project.techStack.frontend && (
            <TechRow label="Frontend" items={project.techStack.frontend} />
          )}
          {project.techStack.devops && (
            <TechRow label="DevOps" items={project.techStack.devops} />
          )}
        </div>
      </footer>
    </article>
  );
}

/**
 * Khung ảnh demo. Nếu project có `image` -> render ảnh thật.
 * Chưa có -> hiển thị placeholder gradient kèm tên project (giữ tỉ lệ 16:9).
 * Hover: brightness tăng + ring chuyển sang accent.
 */
function ProjectImage({ project }: { project: Project }) {
  const hasImage = Boolean(project.image?.src);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-inset ring-slate-700/60 transition duration-300 group-hover:ring-sky-500/50">
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image!.src}
          alt={project.image!.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:brightness-110 group-hover:scale-[1.03]"
        />
      ) : (
        <ImagePlaceholder name={project.name} />
      )}
    </div>
  );
}

function ImagePlaceholder({ name }: { name: string }) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center bg-slate-900 transition duration-500 group-hover:brightness-110"
      style={{
        backgroundImage:
          "radial-gradient(70% 60% at 30% 20%, rgba(14, 165, 233, 0.22), transparent 60%), radial-gradient(60% 50% at 80% 80%, rgba(56, 189, 248, 0.18), transparent 60%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-800/80 text-slate-400 ring-1 ring-inset ring-slate-700/60">
          <ImageIcon size={16} />
        </span>
        <p className="text-2xl font-bold tracking-tight text-white">{name}</p>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Preview coming soon
        </p>
      </div>
    </div>
  );
}

function CaseBlock({
  icon,
  title,
  accent,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-slate-900/40 p-5 ring-1 ring-inset ring-slate-800/60">
      <div className={`mb-3 inline-flex items-center gap-2 ${accent}`}>
        {icon}
        <span className="text-xs font-semibold uppercase tracking-[0.18em]">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

function TechRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium text-slate-400">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span key={it} className="chip">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
