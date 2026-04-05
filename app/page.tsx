"use client";

import Link from "next/link";
import { useState } from "react";

// ── Placeholder image component ──────────────────────────────────────────────
function Img({
  className,
  alt,
  aspectRatio = "3/2",
}: {
  className?: string;
  alt: string;
  aspectRatio?: string;
}) {
  return (
    <div
      className={`bg-[#C8EAF5] ${className ?? ""}`}
      style={{ aspectRatio }}
      aria-label={alt}
    />
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────
const heroProjects = [
  { title: "Minimalistisk bad i hvitt og tre, Majorstuen" },
  { title: "Klassisk flislagt bad med marmor, Frogner" },
  { title: "Moderne bad med sort armatur, Grünerløkka" },
];

const services = [
  { label: "Totaloppussing av bad", href: "/tjenester/totaloppussing-av-bad" },
  { label: "Flislegging", href: "/tjenester/flislegging" },
  { label: "Rørleggerarbeid", href: "/tjenester/rorleggerarbeid" },
  { label: "Innvendig oppussing", href: "/tjenester/innvendig-oppussing" },
];

const projects = [
  {
    title: "Skandinavisk bad med kontrastfliser i dusjsonen",
    tags: ["Baderom"],
  },
  {
    title: "Totaloppussing av bad i klassisk stil på Ullern",
    tags: ["Baderom"],
  },
  { title: "Oppussing av bad i skandinavisk stil", tags: ["Baderom"] },
  { title: "Stilrent bad med flislegging på Østerås", tags: ["Baderom"] },
  {
    title: "Totalrenovering av leilighet på Grünerløkka",
    tags: ["Totaloppussing"],
  },
  {
    title: "Leilighet totalrenovert på Frogner i klassisk stil",
    tags: ["Totaloppussing"],
  },
  { title: "Flislegging av entré og kjøkken, Sagene", tags: ["Flislegging"] },
  { title: "Ny flislegging av bad og vaskerom", tags: ["Flislegging"] },
];

const allTags = ["Alle", "Baderom", "Totaloppussing", "Flislegging"];

const faqs = [
  {
    q: "Hva inkluderer en totaloppussing av bad?",
    a: "En totaloppussing inkluderer alt fra riving av gammelt bad, membranlegging, flislegging, rørleggerarbeid, elektrisk arbeid og montering av innredning. Vi koordinerer alle faggrupper og du forholder deg kun til oss gjennom hele prosjektet.",
  },
  {
    q: "Hvor lang tid tar det å pusse opp et bad?",
    a: "Et vanlig bad tar typisk 3–5 uker å pusse opp, avhengig av størrelse og omfang. Vi setter opp en detaljert fremdriftsplan før oppstart, slik at du alltid vet hva som skjer.",
  },
  {
    q: "Hva koster det å pusse opp badet?",
    a: "Prisen varierer avhengig av størrelse, materialer og omfang. Det beste er å booke en gratis befaring, så gir vi deg et nøyaktig tilbud basert på akkurat ditt bad.",
  },
  {
    q: "Kan jeg bo hjemme under oppussingen?",
    a: "Det er fullt mulig, men vi anbefaler å ha tilgang til et alternativt bad i perioden. Vi jobber ryddig og strukturert, og informerer deg løpende om fremdriften.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeTag, setActiveTag] = useState("Alle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered =
    activeTag === "Alle"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <main className="bg-white text-[#1A3A4A]">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 max-w-3xl text-[36px] font-light leading-tight tracking-tight text-[#1A3A4A] sm:text-[48px] lg:text-[60px]">
            Eksperter på bad og flislegging i Oslo
          </h1>
          <div className="mb-10 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-[#4DAEC8] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#3A9AB5]"
            >
              Book gratis befaring
            </Link>
            <Link
              href="/tjenester/totaloppussing-av-bad"
              className="rounded-full border border-[#B8E4F0] px-7 py-3.5 text-[15px] font-medium text-[#1A3A4A] transition hover:bg-[#DCF2F9]"
            >
              Se alle våre tjenester
            </Link>
          </div>

          {/* Hero project grid */}
          <div className="grid gap-3 sm:grid-cols-3">
            {heroProjects.map((p, i) => (
              <Link
                key={i}
                href="/referanser"
                className="group relative overflow-hidden rounded-2xl"
              >
                <Img
                  alt={p.title}
                  aspectRatio="1/1"
                  className="w-full transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1A3A4A]/60 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-[14px] font-medium leading-snug text-white">
                    {p.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OM OSS ───────────────────────────────────────────────────────── */}
      <section className="bg-[#EDF8FC] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-[28px] font-light text-[#1A3A4A] sm:text-[36px]">
              Om oss
            </h2>
            <p className="mb-6 text-[16px] leading-relaxed text-[#2A5A70] sm:text-[18px]">
              Hvert år utfører vi over 50 baderomsprosjekter i Oslo-området. Vi
              har bevisst bygget opp en solid fagstab med lang erfaring innen
              flislegging, rørleggerarbeid og innredning — som sikrer høy
              kvalitet på alle prosjekter og trygghet for våre kunder.
            </p>
            <Link
              href="/om-oss"
              className="text-[15px] font-medium text-[#4DAEC8] underline underline-offset-4 hover:text-[#3A9AB5]"
            >
              Les mer om oss
            </Link>
          </div>
        </div>
      </section>

      {/* ── TJENESTER ────────────────────────────────────────────────────── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-[28px] font-light text-[#1A3A4A] sm:text-[36px]">
            Våre tjenester
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group overflow-hidden rounded-2xl border border-[#B8E4F0] bg-white transition hover:shadow-lg hover:shadow-[#4DAEC8]/10"
              >
                <Img
                  alt={s.label}
                  aspectRatio="3/4"
                  className="w-full transition duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="text-[16px] font-medium text-[#1A3A4A]">
                    {s.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── UTVALGTE PROSJEKTER ──────────────────────────────────────────── */}
      <section className="bg-[#F5FBFD] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-[28px] font-light text-[#1A3A4A] sm:text-[36px]">
              Utvalgte prosjekter
            </h2>
            <Link
              href="/referanser"
              className="text-[15px] font-medium text-[#4DAEC8] underline underline-offset-4 hover:text-[#3A9AB5]"
            >
              Se alle prosjekter
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-5 py-2 text-[14px] font-medium transition ${
                  activeTag === tag
                    ? "bg-[#4DAEC8] text-white"
                    : "bg-[#DCF2F9] text-[#1A3A4A] hover:bg-[#C8EAF5]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <Link
                key={i}
                href="/referanser"
                className="group overflow-hidden rounded-2xl bg-white"
              >
                <Img
                  alt={p.title}
                  aspectRatio="3/2"
                  className="w-full transition duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <div className="mb-2 flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#DCF2F9] px-3 py-0.5 text-[11px] font-medium text-[#4DAEC8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[14px] font-medium leading-snug text-[#1A3A4A]">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-[28px] font-light text-[#1A3A4A] sm:text-[36px]">
            Ofte stilte spørsmål
          </h2>
          <div className="max-w-3xl divide-y divide-[#B8E4F0]">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[16px] font-medium text-[#1A3A4A] sm:text-[18px]">
                    {faq.q}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-[#4DAEC8] transition ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-[15px] leading-relaxed text-[#2A5A70]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="bg-[#4DAEC8] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-[28px] font-light text-white sm:text-[40px]">
            Klar for nytt bad?
          </h2>
          <p className="mb-8 text-[16px] text-white/80 sm:text-[18px]">
            Book en gratis og uforpliktende befaring, så gir vi deg et nøyaktig
            tilbud.
          </p>
          <Link
            href="/kontakt"
            className="inline-block rounded-full bg-white px-8 py-4 text-[16px] font-semibold text-[#4DAEC8] transition hover:bg-[#DCF2F9]"
          >
            Book gratis befaring
          </Link>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#1A3A4A] px-4 py-14 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-3 flex flex-col leading-none">
                <span className="text-[26px] font-light uppercase tracking-[0.12em] text-white">
                  Varigebad
                </span>
                <span className="mt-1 text-[9px] uppercase tracking-[0.28em] text-[#4DAEC8]">
                  Bad & flislegging
                </span>
              </div>
              <p className="mb-4 max-w-xs text-[14px] leading-relaxed text-white/60">
                Eksperter på baderomsoppussing, flislegging og rørleggerarbeid i
                Oslo-området.
              </p>
              <p className="text-[14px] text-white/60">Org.nr. 123 456 789</p>
              <a
                href="mailto:post@varigebad.no"
                className="block text-[14px] text-[#4DAEC8] hover:underline"
              >
                post@varigebad.no
              </a>
              <a
                href="tel:+4712345678"
                className="block text-[14px] text-[#4DAEC8] hover:underline"
              >
                123 45 678
              </a>
            </div>

            {/* Links */}
            <div>
              <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-white/40">
                Nyttige lenker
              </h4>
              <ul className="space-y-2">
                {[
                  {
                    label: "Tjenester",
                    href: "/tjenester/totaloppussing-av-bad",
                  },
                  { label: "Referanser", href: "/referanser" },
                  { label: "Blogg", href: "/blogg" },
                  { label: "Om oss", href: "/om-oss" },
                  { label: "Kontakt oss", href: "/kontakt" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-white/60 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-white/40">
                Områder
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Oslo", href: "/omrader/oslo" },
                  { label: "Akershus", href: "/omrader/akershus" },
                  { label: "Oslo og omegn", href: "/omrader/oslo-og-omegn" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-white/60 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-[13px] text-white/30">
              © {new Date().getFullYear()} Varige Bad AS · Alle rettigheter
              forbeholdt
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
