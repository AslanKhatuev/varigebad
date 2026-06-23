"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Script from "next/script";

type ProjectImage = {
  src: string;
  alt: string;
};

type Project = {
  title: string;
  location: string;
  tag: string;
  intro: string;
  images: ProjectImage[];
  quote: string;
  author: string;
  datePublished: string; 
};

const projects: Project[] = [
  {
    title: "Eilert Sundts Gate 51",
    location: "Frogner, Oslo",
    tag: "Baderom",
    intro:
      "Asker Eiendomsselskap AS valgte å bruke Varige Bad til å renovere to bad på Eilert Sundts gate 51. Prosjektet omfattet full riving, membranlegging, flislegging i naturstein og montering av nytt sanitæranlegg.",
    images: [
      {
        src: "/eilert-sundts-gate1.webp",
        alt: "Marmorflis i hexagonmønster på gulv i renovert baderom, Eilert Sundts gate 51, Oslo",
      },
      {
        src: "/eilert-sundts-gate2.webp",
        alt: "Dusjsone med naturstein og grå innredning i renovert baderom, Eilert Sundts gate 51",
      },
      {
        src: "/eilert-sundts-gate3.webp",
        alt: "Helhetsbilde av renovert baderom med dusjkabinett og marmorfliser, Eilert Sundts gate 51",
      },
    ],
    quote:
      "Dyktige fagfolk som renoverte to bad for oss. Resultatet ble veldig fint og vi bruker dem gjerne igjen.",
    author: "Ragheb Pettersen",
    datePublished: "2025-09-15",
  },
  {
    title: "Eftasåsen 9",
    location: "Oslo",
    tag: "Baderom",
    intro:
      "Elin og Frank bor på Eftasåsen 9 og ønsket å renovere et lite baderom på cirka 3 kvadratmeter. Varige Bad bisto med å finne riktige 60×60-fliser kombinert med mosaikk i dusjsonen, og gjennomførte hele renoveringen fra start til slutt.",
    images: [
      {
        src: "/eftasasen1.jpg.webp",
        alt: "Grå flislagt dusjnisje med glassvegg i lite baderom, Eftasåsen 9, Oslo",
      },
      {
        src: "/eftasasen2.jpg.webp",
        alt: "Dusjhjørne med svart armatur og 60x60 fliser, Eftasåsen 9",
      },
      {
        src: "/eftasasen3.jpg.webp",
        alt: "Detaljbilde av flislagt gulv og sluk i renovert baderom, Eftasåsen 9",
      },
    ],
    quote:
      "Vi har et lite bad på ca 3 kvm. Vi ønsket å bruke 60×60 fliser på badet. Vi fikk hjelp til å finne fliser i den fargen vi likte, som kom i både 60×60 og mosaikk i dusjsonen. Resultatet ble akkurat som vi ønsket oss.",
    author: "Frank og Elin",
    datePublished: "2025-11-02",
  },
  {
    title: "Vibes Gate 16",
    location: "Oslo",
    tag: "Totaloppussing",
    intro:
      "Frode og Monica bor på Vibes gate 16 og ønsket en totalrenovering av badet med et unikt utseende. Varige Bad hjalp med valg av fliser og innredning, og leverte et komplett renovert baderom med skreddersydde løsninger under skråtak.",
    images: [
      {
        src: "/vibes1.jpg",
        alt: "Baderomsinnredning med mørke skap og hvite mosaikkfliser under skråtak, Vibes gate 16",
      },
      {
        src: "/vibes2.jpg",
        alt: "Dusjsone med hvite metrofliser og gyllen armatur, Vibes gate 16, Oslo",
      },
      {
        src: "/vibes3.jpg",
        alt: "Toalett og flislagt gulv i renovert loftsbad med takvindu, Vibes gate 16",
      },
    ],
    quote:
      "Vi ønsket oss et bad med unike fliser og utseende. Vi hadde sett for oss noe, men det var enklere å få hjelp av Varige Bad til å velge riktige fliser og innredning. Vi ble kjempefornøyde med resultatet.",
    author: "Monica og Frode",
    datePublished: "2025-12-10",
  },
];

const allImages: (ProjectImage & { projectTitle: string })[] = projects.flatMap(
  (p) => p.images.map((img) => ({ ...img, projectTitle: p.title }))
);

export default function ReferanserClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const showPrev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + allImages.length) % allImages.length
    );
  }, []);

  const showNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % allImages.length));
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, showPrev, showNext]);

  let globalIdx = 0;
  const projectStartIndex: number[] = [];
  projects.forEach((p) => {
    projectStartIndex.push(globalIdx);
    globalIdx += p.images.length;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Referanser fra baderomsprosjekter i Oslo",
    description:
      "Et utvalg av fullførte baderomsprosjekter utført av Varige Bad i Oslo-området, med kundehistorier.",
    url: "https://www.varigebad.no/referanser",
    isPartOf: {
      "@type": "WebSite",
      name: "Varige Bad",
      url: "https://www.varigebad.no",
    },
    mainEntity: projects.map((project) => ({
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: `${project.tag} — ${project.title}`,
        serviceType: project.tag,
        areaServed: ["Oslo", "Akershus"],
        provider: {
          "@type": "LocalBusiness",
          name: "Varige Bad",
          url: "https://www.varigebad.no",
          areaServed: ["Oslo", "Akershus"],
        },
      },
      author: {
        "@type": "Person",
        name: project.author,
      },
      reviewBody: project.quote,
      datePublished: project.datePublished,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };

  return (
    <main className="bg-white text-[#1A3A4A]">
      {/* SEO: strukturert data injisert som JSON-LD i <head>-ekvivalent */}
      <Script
        id="referanser-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — SEO: eneste <h1> på siden, beskrivende og relevant for søkeordet "referanser baderom Oslo" */}
      <section className="bg-[#EDF8FC] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-[36px] font-light leading-tight text-[#1A3A4A] sm:text-[52px]">
            Referanser fra baderomsprosjekter i Oslo og Akershus
          </h1>
          <p className="max-w-2xl text-[17px] leading-relaxed text-[#2A5A70]">
            Se et utvalg av baderomsprosjekter Varige Bad har fullført for
            fornøyde kunder i Oslo og Akershus — fra mindre baderom på under 3
            kvm til totalrenoverte leiligheter. Vi tar oppdrag i hele regionen,
            inkludert Bærum, Asker og Lillestrøm. Hvert prosjekt inkluderer
            bilder og kundens egne ord om opplevelsen.
          </p>
        </div>
      </section>

      {/* Prosjekt-seksjoner — SEO: hvert prosjekt har <h2> for korrekt heading-hierarki,
          beskrivende intro-tekst med relevante søkeord (sted, type arbeid, materialer) */}
      {projects.map((project, pIdx) => (
        <section
          key={project.title}
          aria-labelledby={`prosjekt-${pIdx}`}
          className={`px-4 py-14 sm:px-6 sm:py-20 lg:px-8 xl:px-10 ${
            pIdx % 2 === 1 ? "bg-[#EDF8FC]" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <span className="mb-3 inline-block rounded-full bg-[#DCF2F9] px-3 py-0.5 text-[11px] font-medium text-[#4DAEC8]">
              {project.tag}
            </span>

            <h2
              id={`prosjekt-${pIdx}`}
              className="mb-1 text-[28px] font-semibold leading-tight text-[#1A3A4A] sm:text-[40px]"
            >
              {project.title}
            </h2>

            <p className="mb-4 text-[13px] font-medium uppercase tracking-wide text-[#4DAEC8]">
              {project.tag} · {project.location}
            </p>

            <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-[#2A5A70] sm:text-[16px]">
              {project.intro}
            </p>

            {/* Tre bilder side ved side — SEO: hver <Image> har unik, beskrivende alt-tekst */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setOpenIndex(projectStartIndex[pIdx] + idx)}
                  className="group relative w-full overflow-hidden rounded-2xl bg-[#C8EAF5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4DAEC8]"
                  style={{ aspectRatio: "3/4" }}
                  aria-label={`Åpne i fullskjerm: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/20">
                    <svg
                      className="h-9 w-9 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4.3-4.3" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Sitat — SEO: bruker <cite> semantisk korrekt for opphav til sitatet,
                og innholdet bidrar til E-E-A-T (Trustworthiness) via ekte kundeerfaring */}
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-[16px] italic leading-relaxed text-[#2A5A70] sm:text-[18px]">
                "{project.quote}"
              </p>
              <footer className="text-[15px] font-semibold text-[#1A3A4A]">
                — <cite>{project.author}</cite>
              </footer>
            </blockquote>
          </div>
        </section>
      ))}

      {/* SEO: avsluttende seksjon som tydelig nevner hele dekningsområdet —
          hjelper Google forstå geografisk relevans for søk som "baderom Akershus" */}
      <section className="bg-[#EDF8FC] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-[24px] font-semibold leading-tight text-[#1A3A4A] sm:text-[32px]">
            Vi tar baderomsprosjekter i hele Oslo og Akershus
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-[#2A5A70] sm:text-[16px]">
            Varige Bad har gjennomført baderomsprosjekter for kunder i Oslo
            sentrum, Frogner, Grünerløkka og Majorstuen, samt i Akershus-
            kommuner som Bærum, Asker, Lillestrøm og Lørenskog. Uavhengig av om
            du ønsker totalrenovering, flislegging eller mindre oppgraderinger,
            hjelper vi deg gjennom hele prosessen.
          </p>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bildevisning i fullskjerm"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-2 sm:px-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Lukk bildevisning"
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Forrige bilde"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Neste bilde"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[openIndex].src}
              alt={allImages[openIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white backdrop-blur-sm sm:bottom-6">
            {openIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
