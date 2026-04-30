"use client";

import { Github, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { personal } from "@/data/personal";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-page">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(80% 60% at 50% 0%, rgba(14, 165, 233, 0.18), transparent 70%)",
              }}
            />

            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <span className="section-eyebrow">Let&apos;s connect</span>
                <RevealWords
                  as="h2"
                  className="section-title text-balance"
                >
                  Sẵn sàng đóng góp cho đội ngũ của bạn.
                </RevealWords>
                <p className="mt-4 max-w-xl text-slate-300">
                  Mình đang tìm kiếm cơ hội{" "}
                  <strong>Backend / Fullstack Internship</strong>. Nếu công ty
                  của bạn đang có vị trí phù hợp hoặc muốn trao đổi thêm về kỹ
                  năng và sản phẩm — đừng ngần ngại liên hệ qua email.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${personal.email}?subject=Cơ hội hợp tác`}
                    className="btn-primary"
                  >
                    <Send size={16} />
                    Gửi email
                  </a>
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>

              <ul className="space-y-3 text-sm">
                <ContactRow
                  icon={<Mail size={16} />}
                  label="Email"
                  value={personal.email}
                  href={personal.socials.email}
                />
                <ContactRow
                  icon={<Phone size={16} />}
                  label="Phone"
                  value={personal.phone}
                  href={personal.socials.phone}
                />
                <ContactRow
                  icon={<Github size={16} />}
                  label="GitHub"
                  value={personal.alias}
                  href={personal.socials.github}
                />
                <ContactRow
                  icon={<MapPin size={16} />}
                  label="Location"
                  value={personal.location}
                />
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/30">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
        <p className="truncate font-medium text-slate-100">{value}</p>
      </div>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="flex items-center gap-3 rounded-xl bg-slate-900/40 p-3 ring-1 ring-inset ring-slate-800/60 transition hover:bg-slate-900/70 hover:ring-sky-500/40"
        >
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-3 rounded-xl bg-slate-900/40 p-3 ring-1 ring-inset ring-slate-800/60">
          {inner}
        </div>
      )}
    </li>
  );
}
