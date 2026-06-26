// app/omrader/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";

const omrader = {
  oslo: {
    navn: "Oslo",
    metaTitle: "Baderomsoppussing i Oslo — Vestkant og Østkant | Varige Bad",
    metaDescription:
      "Varige Bad utfører baderomsoppussing, flislegging og rørleggerarbeid i hele Oslo, med hovedfokus på vestkanten og solid erfaring fra østkanten. Book gratis befaring.",
    keywords: [
      "baderomsoppussing Oslo",
      "renovere bad Oslo vest",
      "flislegging Oslo øst",
      "baderomsfirma Oslo",
      "totaloppussing bad Oslo",
    ],
    beskrivelse:
      "Oslo er vårt primære arbeidsområde, og vi tar oppdrag i alle 15 bydeler i byen. Vi har spesielt mye erfaring fra vestkanten — bydeler som Vestre Aker, Ullern, Frogner og St. Hanshaugen — hvor mange av prosjektene våre er gjennomført i eldre bygårder og villaer med spesielle tekniske utfordringer knyttet til skråtak, smale rom og eldre rørsystemer. Samtidig har vi også gjennomført en rekke prosjekter på østkanten, blant annet i Grünerløkka, Sagene og Gamle Oslo, hvor vi kjenner bygningsmassen godt og vet hvilke løsninger som fungerer best i disse boligene.",
    utdypendeTekst:
      "Uavhengig av om du bor i en eldre bygård på vestkanten eller i en nyere bolig på østkanten, sørger vi for at prosjektet ditt følger gjeldende krav i Byggebransjens våtromsnorm (BVN) og TEK17. Vi koordinerer alle faggrupper — fra riving og membranlegging til flislegging, rørleggerarbeid og ferdig innredning — slik at du forholder deg til én leverandør gjennom hele prosessen.",
    bydeler: [
      "Vestre Aker",
      "Ullern",
      "Frogner",
      "St. Hanshaugen",
      "Sagene",
      "Grünerløkka",
      "Gamle Oslo",
      "Nordstrand",
      "Søndre Nordstrand",
      "Østensjø",
      "Alna",
      "Grorud",
      "Stovner",
      "Bjerke",
      "Nordre Aker",
    ],
  },
  akershus: {
    navn: "Akershus",
    metaTitle: "Baderomsoppussing i Akershus | Varige Bad",
    metaDescription:
      "Varige Bad utfører baderomsoppussing, flislegging og rørleggerarbeid i hele Akershus, inkludert Bærum, Asker, Lillestrøm og Lørenskog. Book gratis befaring.",
    keywords: [
      "baderomsoppussing Akershus",
      "renovere bad Bærum",
      "flislegging Asker",
      "baderomsfirma Lillestrøm",
      "rørlegger Lørenskog",
    ],
    beskrivelse:
      "Vi betjener hele Akershus med samme høye kvalitet og samme arbeidsprosess som i Oslo. Kort reisetid og god kjennskap til regionen gjør oss til et naturlig valg om du bor i Bærum, Asker, Lillestrøm, Lørenskog eller en av de andre kommunene i fylket.",
    utdypendeTekst:
      "Mange av kundene våre i Akershus bor i nyere boligområder med andre tekniske krav enn i Oslo sentrum, men vi følger alltid samme kvalitetsstandard: Byggebransjens våtromsnorm (BVN) og TEK17. Vi tilbyr gratis og uforpliktende befaring der vi går gjennom badet ditt, diskuterer ønsker og materialvalg, og gir deg et konkret tilbud før arbeidet starter.",
    bydeler: [
      "Bærum",
      "Asker",
      "Lillestrøm",
      "Lørenskog",
      "Ski",
      "Ås",
      "Nesodden",
      "Oppegård",
      "Rælingen",
      "Skedsmo",
    ],
  },
  "oslo-og-omegn": {
    navn: "Oslo og omegn",
    metaTitle: "Baderomsoppussing i Oslo og omegn | Varige Bad",
    metaDescription:
      "Varige Bad dekker Oslo og alle omliggende kommuner i Akershus. Baderomsoppussing, flislegging og rørleggerarbeid — book gratis befaring i dag.",
    keywords: [
      "baderomsoppussing Oslo og omegn",
      "baderomsfirma Oslo Akershus",
      "renovere bad nær meg",
      "flislegging Oslo Akershus",
    ],
    beskrivelse:
      "Vi dekker Oslo og alle omliggende kommuner i Akershus. Hovedfokuset vårt ligger på Oslo, særlig vestkanten, men vi har også betydelig erfaring fra østkanten og fra kommunene rundt byen. Uansett hvor du bor i regionen, kan vi hjelpe deg med bad, flislegging og oppussing.",
    utdypendeTekst:
      "Enten du befinner deg midt i Oslo sentrum eller i en av nabokommunene, jobber vi etter samme prinsipp: én fast kontaktperson, tydelig fremdriftsplan og arbeid som følger Byggebransjens våtromsnorm (BVN) og TEK17. Det gjør prosessen forutsigbar uavhengig av hvor i regionen prosjektet ditt befinner seg.",
    bydeler: [
      "Vestre Aker",
      "Frogner",
      "Grünerløkka",
      "Bærum",
      "Asker",
      "Lørenskog",
      "Lillestrøm",
      "Ski",
      "Nesodden",
      "Rælingen",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

// SEO: unik <title>, description og Open Graph per område
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const omrade = omrader[slug as keyof typeof omrader];

  if (!omrade) {
    return { title: "Område ikke funnet | Varige Bad" };
  }

  const url = `https://www.varigebad.no/omrader/${slug}`;

  return {
    title: omrade.metaTitle,
    description: omrade.metaDescription,
    keywords: omrade.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: omrade.metaTitle,
      description: omrade.metaDescription,
      url,
      siteName: "Varige Bad",
      type: "website",
      locale: "nb_NO",
    },
    twitter: {
      card: "summary_large_image",
      title: omrade.metaTitle,
      description: omrade.metaDescription,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(omrader).map((slug) => ({ slug }));
}

export default async function OmradePage({ params }: Props) {
  const { slug } = await params;
  const omrade = omrader[slug as keyof typeof omrader];

  if (!omrade) notFound();

  const url = `https://www.varigebad.no/omrader/${slug}`;

  // SEO: LocalBusiness + areaServed, viser hvilke konkrete steder vi dekker
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Varige Bad",
    url,
    description: omrade.metaDescription,
    areaServed: omrade.bydeler.map((bydel) => ({
      "@type": "Place",
      name: bydel,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hjem",
        item: "https://www.varigebad.no",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Områder",
        item: "https://www.varigebad.no/omrader",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: omrade.navn,
        item: url,
      },
    ],
  };

  return (
    <main className="bg-white text-[#1A3A4A]">
      <Script
        id="omrade-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="omrade-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Brødsmulesti */}
      <nav
        aria-label="Brødsmulesti"
        className="px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[12px] text-[#2A5A70] sm:gap-2 sm:text-[13px]">
          <li>
            <Link href="/" className="hover:text-[#4DAEC8]">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/omrader" className="hover:text-[#4DAEC8]">
              Områder
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-[#1A3A4A]">
            {omrade.navn}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-[#EDF8FC] px-4 py-12 sm:px-6 sm:py-20 md:py-24 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-[#4DAEC8] sm:text-[13px]">
            Våre områder
          </p>
          <h1 className="mb-5 text-[28px] font-light leading-tight text-[#1A3A4A] sm:mb-6 sm:text-[40px] md:text-[46px] lg:text-[52px]">
            Baderomsoppussing i {omrade.navn}
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed text-[#2A5A70] sm:text-[17px]">
            {omrade.beskrivelse}
          </p>
          <Link
            href="/kontakt"
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#4DAEC8] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#3A9AB5] sm:mt-8 sm:w-auto"
          >
            Book gratis befaring
          </Link>
        </div>
      </section>

      {/* SEO: utdypende tekst-seksjon med relevant, meningsbærende innhold per område */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-[22px] font-light text-[#1A3A4A] sm:mb-6 sm:text-[30px]">
            Slik jobber vi i {omrade.navn}
          </h2>
          <p className="max-w-3xl text-[15px] leading-relaxed text-[#2A5A70] sm:text-[16px]">
            {omrade.utdypendeTekst}
          </p>
        </div>
      </section>

      {/* Bydeler / kommuner */}
      <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-[22px] font-light text-[#1A3A4A] sm:mb-8 sm:text-[32px]">
            Steder vi dekker i {omrade.navn}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {omrade.bydeler.map((bydel) => (
              <div
                key={bydel}
                className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] px-4 py-3.5 text-center text-[14px] font-medium text-[#1A3A4A] sm:px-5 sm:py-4 sm:text-left sm:text-[15px]"
              >
                {bydel}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section className="bg-[#F5FBFD] px-4 py-12 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-[22px] font-light text-[#1A3A4A] sm:mb-8 sm:text-[32px]">
            Hva vi tilbyr i {omrade.navn}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Totaloppussing av bad",
                href: "/tjenester/totaloppussing-av-bad",
              },
              { label: "Flislegging", href: "/tjenester/flislegging" },
              { label: "Rørleggerarbeid", href: "/tjenester/rorleggerarbeid" },
              {
                label: "Innvendig oppussing",
                href: "/tjenester/innvendig-oppussing",
              },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group rounded-2xl border border-[#B8E4F0] bg-white p-5 transition hover:border-[#4DAEC8] hover:shadow-md"
              >
                <h3 className="text-[15px] font-medium text-[#1A3A4A] group-hover:text-[#4DAEC8]">
                  {t.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4DAEC8] px-4 py-12 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-[24px] font-light text-white sm:text-[40px]">
            Trenger du hjelp i {omrade.navn}?
          </h2>
          <p className="mb-7 text-[15px] text-white/80 sm:mb-8 sm:text-[18px]">
            Book en gratis og uforpliktende befaring i dag.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#4DAEC8] transition hover:bg-[#DCF2F9] sm:w-auto sm:text-[16px]"
          >
            Book gratis befaring
          </Link>
        </div>
      </section>
    </main>
  );
}
