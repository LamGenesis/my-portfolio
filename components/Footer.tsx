import { ArrowUp, Github, Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "@/data/nav";
import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800/60 bg-slate-900/40">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-sky-500/15 text-sky-400 ring-1 ring-inset ring-sky-500/30">
                LL
              </span>
              <span>{personal.alias}</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {personal.role} với nền tảng vững về hệ sinh thái .NET và kinh
              nghiệm xây dựng sản phẩm Fullstack với Next.js.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
              <MapPin size={14} className="text-slate-500" />
              {personal.location}
            </div>
          </div>

          <nav className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-slate-400 transition hover:text-sky-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Connect
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={personal.socials.email}
                  className="group inline-flex items-center gap-3 text-slate-400 transition hover:text-sky-400"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-800/70 text-slate-400 ring-1 ring-inset ring-slate-700/60 transition group-hover:bg-sky-500/10 group-hover:text-sky-400 group-hover:ring-sky-500/30">
                    <Mail size={14} />
                  </span>
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={personal.socials.phone}
                  className="group inline-flex items-center gap-3 text-slate-400 transition hover:text-sky-400"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-800/70 text-slate-400 ring-1 ring-inset ring-slate-700/60 transition group-hover:bg-sky-500/10 group-hover:text-sky-400 group-hover:ring-sky-500/30">
                    <Phone size={14} />
                  </span>
                  {personal.phone}
                </a>
              </li>
              <li>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-slate-400 transition hover:text-sky-400"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-800/70 text-slate-400 ring-1 ring-inset ring-slate-700/60 transition group-hover:bg-sky-500/10 group-hover:text-sky-400 group-hover:ring-sky-500/30">
                    <Github size={14} />
                  </span>
                  github.com/{personal.alias}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800/60 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-slate-400 transition hover:bg-slate-800/60 hover:text-sky-400"
          >
            Back to top
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
