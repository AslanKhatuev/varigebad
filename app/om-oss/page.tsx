// app/om-oss/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import CtaSection from "../components/Ctasection";

// SEO: unik <title>, description, Open Graph for Om oss-siden
export const metadata: Metadata = {
  title: "Om oss — Varige Bad AS | Baderomsspesialister i Oslo og Akershus",
  description:
    "Varige Bad AS er et spesialisert håndverksfirma med over 20 års erfaring. Vi leverer komplette baderomsrenoveringer med høy kvalitet i Oslo og Akershus.",
  keywords: [
    "om varige bad",
    "baderomsfirma Oslo",
    "håndverksfirma bad",
    "erfaren baderomsrenovering",
    "flislegger Oslo",
    "rørlegger Oslo",
    "bad fra A til Å",
    "totalrenovering bad Oslo",
    "baderomsentreprenør",
    "baderomsfirma Akershus",
    "flislegger Akershus",
    "rørlegger Akershus",
    "snekker bad",
    "elektriker bad",
    "våtromsentreprenør",
    "renovere bad Oslo",
    "baderom helhetsleverandør",
    "20 års erfaring baderom",
    "byggebransjens våtromsnorm",
    "BVN godkjent",
    "TEK17 baderom",
    "prosjektledelse baderom",
    "spa-inspirert bad",
    "klassisk bad renovering",
    "baderom nøkkelferdig",
    "baderomsoppussing Vestre Aker",
    "baderomsoppussing Ullern",
    "baderomsoppussing Frogner",
    "baderomsoppussing St. Hanshaugen",
    "baderomsoppussing Sagene",
    "baderomsoppussing Grünerløkka",
    "baderomsoppussing Gamle Oslo",
    "baderomsoppussing Nordstrand",
    "baderomsoppussing Søndre Nordstrand",
    "baderomsoppussing Østensjø",
    "baderomsoppussing Alna",
    "baderomsoppussing Grorud",
    "baderomsoppussing Stovner",
    "baderomsoppussing Bjerke",
    "baderomsoppussing Nordre Aker",
    "baderomsoppussing Bærum",
    "baderomsoppussing Asker",
    "baderomsoppussing Lillestrøm",
    "baderomsoppussing Lørenskog",
  ],
  alternates: {
    canonical: "https://www.varigebad.no/om-oss",
  },
  openGraph: {
    title: "Om oss — Varige Bad AS",
    description:
      "Et spesialisert håndverksfirma med over 20 års erfaring i baderomsrenovering, i Oslo og Akershus.",
    url: "https://www.varigebad.no/om-oss",
    siteName: "Varige Bad",
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: "https://www.varigebad.no/omoss.png",
        width: 1200,
        height: 900,
        alt: "Renovert baderom utført av Varige Bad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om oss — Varige Bad AS",
    description:
      "Et spesialisert håndverksfirma med over 20 års erfaring i baderomsrenovering.",
  },
};

export default function OmOssPage() {
  const url = "https://www.varigebad.no/om-oss";

  // SEO: AboutPage + Organization strukturert data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Om oss",
    url,
    mainEntity: {
      "@type": "Organization",
      name: "Varige Bad AS",
      url: "https://www.varigebad.no",
      description:
        "Varige Bad AS er et spesialisert håndverksfirma som leverer komplette baderomsrenoveringer med høy kvalitet, presisjon og trygghet i Oslo og Akershus.",
      areaServed: ["Oslo", "Akershus"],
      image: "https://www.varigebad.no/omoss.png",
    },
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
      { "@type": "ListItem", position: 2, name: "Om oss", item: url },
    ],
  };

  return (
    <main className="bg-white text-[#1A3A4A]">
      <Script
        id="om-oss-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="om-oss-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Brødsmulesti */}
      <nav
        aria-label="Brødsmulesti"
        className="px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-[12px] text-[#2A5A70] sm:gap-2 sm:text-[13px]">
          <li>
            <Link href="/" className="hover:text-[#4DAEC8]">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-[#1A3A4A]">
            Om oss
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-[#EDF8FC] px-4 py-12 sm:px-6 sm:py-20 md:py-24 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          {/* SEO: eneste h1 på siden */}
          <h1 className="mb-5 max-w-2xl text-[28px] font-light leading-tight text-[#1A3A4A] sm:mb-6 sm:text-[40px] md:text-[46px] lg:text-[52px]">
            Om oss
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#2A5A70] sm:text-[18px] md:text-[20px]">
            Vi er et håndverkerfirma med hjerte for bad. Vi bygger badet ditt
            helt fra A til Å — fra planlegging og riving til ferdig innredning.
            Hvert prosjekt behandles med like mye omtanke — enten det er et lite
            bad eller en total oppussing.
          </p>
        </div>
      </section>

      {/* Vår historie */}
      <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Bilde — vises FØRST på mobil for visuell kontekst, side ved side på desktop */}
            <div
              className="order-2 w-full overflow-hidden rounded-2xl lg:order-2"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/omoss.png"
                alt="Renovert baderom med dusjkabinett og fritstående badekar, utført av Varige Bad"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-1">
              <p className="mb-2.5 text-[12px] font-semibold uppercase tracking-wide text-[#4DAEC8] sm:mb-3 sm:text-[13px]">
                Solid håndverkerbedrift
              </p>

              {/* SEO: h2 under h1, korrekt hierarki */}
              <h2 className="mb-4 text-[22px] font-light text-[#1A3A4A] sm:mb-5 sm:text-[28px] md:text-[32px]">
                Vår historie
              </h2>

              <p className="mb-4 text-[14px] leading-relaxed text-[#2A5A70] sm:text-[15px]">
                Varige Bad AS er et spesialisert håndverksfirma som leverer
                komplette baderomsrenoveringer med høy kvalitet, presisjon og
                trygghet. Vi består av et dedikert team med rørleggere,
                elektrikere, snekkere og flisleggere – alle med over 20 års
                erfaring i bransjen. Sammen skaper vi solide, funksjonelle og
                eksklusive baderom som er bygget for å vare.
              </p>

              <p className="mb-4 text-[14px] leading-relaxed text-[#2A5A70] sm:text-[15px]">
                Vi tror på ekte håndverk, gode prosesser og ærlig kommunikasjon.
                Derfor følger vi kundene våre tett gjennom hele prosjektet – fra
                planlegging og materialvalg til ferdigstilt bad. Hos oss får du
                én prosjektleder som koordinerer alle faggrupper, slik at du
                slipper stress og usikkerhet. Resultatet er et sømløst og
                effektivt forløp, hvor kvaliteten står i sentrum.
              </p>

              <p className="text-[14px] leading-relaxed text-[#2A5A70] sm:text-[15px]">
                For oss er hvert baderom unikt. Vi kombinerer moderne design med
                faglig tyngde for å skape løsninger som både er vakre og
                praktiske i hverdagen. Enten du ønsker et stilrent spa-inspirert
                uttrykk eller et tidløst og klassisk bad, leverer vi håndverk
                som tåler tiden – både i stil og kvalitet. Varige Bad AS bygger
                ikke bare bad – vi bygger trygghet, komfort og varige løsninger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verdier */}
      <section className="bg-[#F5FBFD] px-4 py-12 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-7 text-[22px] font-light text-[#1A3A4A] sm:mb-10 sm:text-[28px] md:text-[32px]">
            Hva vi står for
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {[
              {
                title: "Kvalitet",
                text: "Solide, funksjonelle og eksklusive baderom bygget av et team med over 20 års erfaring i bransjen — alltid med kvaliteten i sentrum.",
              },
              {
                title: "Ærlighet",
                text: "Vi følger kundene våre tett gjennom hele prosjektet, med ærlig kommunikasjon fra planlegging og materialvalg til ferdigstilt bad.",
              },
              {
                title: "Ryddighet",
                text: "Én fast prosjektleder koordinerer alle faggrupper, slik at du slipper stress og usikkerhet — et sømløst og effektivt forløp.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[#B8E4F0] bg-white p-5 sm:p-6 lg:p-7"
              >
                <h3 className="mb-2.5 text-[17px] font-medium text-[#1A3A4A] sm:mb-3 sm:text-[18px]">
                  {v.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#2A5A70] sm:text-[14px]">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-7 text-[22px] font-light text-[#1A3A4A] sm:mb-10 sm:text-[28px] md:text-[32px]">
            Møt teamet
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {[
              { name: "Navn Navnesen", role: "Daglig leder" },
              { name: "Navn Navnesen", role: "Flislegger" },
              { name: "Navn Navnesen", role: "Rørlegger" },
              { name: "Navn Navnesen", role: "Prosjektleder" },
            ].map((person, i) => (
              <div key={i} className="text-center">
                <div
                  className="mx-auto mb-3 w-full overflow-hidden rounded-2xl bg-[#C8EAF5] sm:mb-4"
                  style={{ aspectRatio: "1/1" }}
                />
                <h3 className="text-[14px] font-medium text-[#1A3A4A] sm:text-[16px]">
                  {person.name}
                </h3>
                <p className="text-[13px] text-[#4DAEC8] sm:text-[14px]">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — gjenbrukbar komponent, samme på alle sider */}
      <CtaSection />
    </main>
  );
}
