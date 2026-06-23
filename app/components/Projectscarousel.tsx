"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

// ── Data ─────────────────────────────────────────────────────────────────────
// Ett representativt bilde per prosjekt (3 totalt) — hentet fra samme
// datasett som /referanser-siden. Flytt gjerne til en delt fil
// (f.eks. lib/projects.ts) og importer begge steder for å unngå duplisering.
type FeaturedProject = {
  title: string;
  location: string;
  tag: string;
  image: { src: string; alt: string; width: number; height: number };
  slug: string;
};

// NB: width/height er bildets EKTE pikseldimensjoner (ikke visningsstørrelse).
// Dette lar Next.js/Image beregne korrekt aspect-ratio slik at object-contain
// aldri beskjærer noe — bytt til dine faktiske bildedimensjoner.
const featuredProjects: FeaturedProject[] = [
  {
    title: "Eilert Sundts Gate 51",
    location: "Frogner, Oslo",
    tag: "Baderom",
    image: {
      src: "/eilert-sundts-gate1.webp",
      alt: "Marmorflis i hexagonmønster på gulv i renovert baderom, Eilert Sundts gate 51, Oslo",
      width: 1200,
      height: 1600,
    },
    slug: "eilert-sundts-gate-51",
  },
  {
    title: "Eftasåsen 9",
    location: "Oslo",
    tag: "Baderom",
    image: {
      src: "/eftasasen1.jpg.webp",
      alt: "Grå flislagt dusjnisje med glassvegg i lite baderom, Eftasåsen 9, Oslo",
      width: 1200,
      height: 1600,
    },
    slug: "eftasasen-9",
  },
  {
    title: "Vibes Gate 16",
    location: "Oslo",
    tag: "Totaloppussing",
    image: {
      src: "/vibes1.jpg",
      alt: "Baderomsinnredning med mørke skap og hvite mosaikkfliser under skråtak, Vibes gate 16",
      width: 1200,
      height: 1600,
    },
    slug: "vibes-gate-16",
  },
];

export default function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    const clamped = (index + featuredProjects.length) % featuredProjects.length;
    setActiveIndex(clamped);
  }, []);

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % featuredProjects.length);
    }, 5000);
  }, []);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoplay();
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    if (delta < -50) goNext();
    touchStartX.current = null;
    startAutoplay();
  };

  // SEO: ItemList strukturert data — hjelper Google forstå at dette er en
  // samling av relaterte prosjekter/tjenester, kan vises som rich results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Utvalgte baderomsprosjekter",
    itemListElement: featuredProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.varigebad.no/referanser#${p.slug}`,
      name: p.title,
      image: `https://www.varigebad.no${p.image.src}`,
    })),
  };

  return (
    <section
      aria-label="Utvalgte prosjekter"
      className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 xl:px-10"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <Script
        id="projects-carousel-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
          <div>
            <h2 className="mb-2 text-[24px] font-semibold leading-tight text-[#1A3A4A] sm:text-[28px] md:text-[36px]">
              Utvalgte prosjekter
            </h2>
            <p className="max-w-md text-[14px] leading-relaxed text-[#2A5A70] sm:text-[15px]">
              Se hvordan vi har hjulpet kunder i Oslo og Akershus med å skape
              bad de er glade for.
            </p>
          </div>
          <Link
            href="/referanser"
            className="rounded-full border border-[#B8E4F0] px-5 py-2.5 text-[13px] font-medium text-[#1A3A4A] transition hover:bg-[#DCF2F9] sm:text-[14px]"
          >
            Se alle referanser
          </Link>
        </div>

        {/*
          Karusell-wrapper. Høyden settes responsivt via min-height-klasser
          i stedet for et fast aspect-ratio, slik at portrett-bilder (3:4)
          alltid får nok plass til å vises i SIN HELHET (object-contain),
          uten beskjæring, på alle skjermstørrelser.
        */}
        <div
          className="relative overflow-hidden rounded-2xl bg-[#0F2430]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {featuredProjects.map((project, idx) => (
              <Link
                key={project.slug}
                href={`/referanser#${project.slug}`}
                aria-label={`Se prosjektet ${project.title} i ${project.location}`}
                className="group relative flex w-full shrink-0 items-center justify-center"
                style={{ minHeight: "min(70vh, 560px)" }}
              >
                {/* object-contain: hele bildet vises alltid, ingen beskjæring,
                    uansett om bildet er portrett eller landskap */}
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  priority={idx === 0}
                />

                {/* Lett gradient kun i selve bunn-stripen, dekker ikke bildet */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0F2430]/90 to-transparent sm:h-32" />

                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                  <span className="mb-2 inline-block rounded-full bg-white/90 px-3 py-0.5 text-[10px] font-medium text-[#4DAEC8] sm:text-[11px]">
                    {project.tag}
                  </span>
                  <h3 className="text-[18px] font-semibold text-white sm:text-[22px] md:text-[28px]">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-white/80 sm:text-[14px]">
                    {project.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Forrige / neste — skalerer ned på mobil */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Forrige prosjekt"
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1A3A4A] shadow transition hover:bg-white sm:left-3 sm:h-11 sm:w-11"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="sm:h-5 sm:w-5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Neste prosjekt"
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1A3A4A] shadow transition hover:bg-white sm:right-3 sm:h-11 sm:w-11"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="sm:h-5 sm:w-5"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* Punkt-indikatorer */}
        <div className="mt-4 flex justify-center gap-2 sm:mt-5">
          {featuredProjects.map((project, idx) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Vis prosjekt: ${project.title}`}
              aria-current={idx === activeIndex}
              className={`h-2 rounded-full transition-all ${
                idx === activeIndex
                  ? "w-8 bg-[#4DAEC8]"
                  : "w-2 bg-[#DCF2F9] hover:bg-[#C8EAF5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
