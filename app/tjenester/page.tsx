// app/tjenester/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/app/components/Ctasection";
import Faq, { type FaqItem } from "@/app/components/Faq";
import { servicesSummary } from "@/app/components/Servicesoverview";

const url = "https://www.varigebad.no/tjenester";
const title = "Tjenester – bad og våtrom i Oslo og Akershus";
const description =
  "Totaloppussing av bad, rørleggerarbeid, flislegging og innvendig oppussing i Oslo og Akershus. Nytt bad til fastpris. Book gratis befaring.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "baderomsrenovering Oslo",
    "totaloppussing bad",
    "rørlegger Oslo",
    "flislegging Oslo",
    "innvendig oppussing",
    "våtrom Akershus",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: `${title} | Varige Bad`,
    description,
    url,
    siteName: "Varige Bad",
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: "https://www.varigebad.no/varigebad.png",
        width: 1536,
        height: 1024,
        alt: "Moderne bad levert av Varige Bad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Varige Bad`,
    description,
  },
};

const faq: FaqItem[] = [
  {
    question: "Hvilke tjenester tilbyr Varige Bad?",
    answer:
      "Vi tilbyr totaloppussing av bad og våtrom, rørleggerarbeid, flislegging og innvendig oppussing. I tillegg har vi Fastprispakken – nytt bad opptil 6 m² til fast pris.",
  },
  {
    question: "Kan jeg få hele prosjektet utført av ett firma?",
    answer:
      "Ja. Vi har rørleggere, elektrikere, snekkere og flisleggere i teamet, og du får én prosjektleder som koordinerer alle faggruppene.",
  },
  {
    question: "Hva koster en befaring?",
    answer:
      "Befaringen er gratis og uforpliktende. Etter befaringen får du et tilbud basert på ditt prosjekt.",
  },
  {
    question: "Hvilke områder dekker dere?",
    answer: "Vi tar oppdrag i hele Oslo og Akershus.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: title,
      description,
      url,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          ...servicesSummary.map((s, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            url: `https://www.varigebad.no/tjenester/${s.slug}`,
            name: s.title,
          })),
          {
            "@type": "ListItem",
            position: servicesSummary.length + 1,
            url: "https://www.varigebad.no/tjenester/fastprispakken",
            name: "Fastprispakken – nytt bad til fastpris",
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hjem",
          item: "https://www.varigebad.no",
        },
        { "@type": "ListItem", position: 2, name: "Tjenester", item: url },
      ],
    },
  ],
};

const steps = [
  {
    title: "Gratis befaring",
    text: "Vi kommer hjem til deg, ser på prosjektet og hører hva du ønsker.",
  },
  {
    title: "Tilbud og plan",
    text: "Du får et tydelig tilbud og en plan for gjennomføringen.",
  },
  {
    title: "Utførelse",
    text: "Én prosjektleder koordinerer alle faggruppene fra start til slutt.",
  },
  {
    title: "Ferdig resultat",
    text: "Arbeidet utføres etter våtromsnormen (BVN) og TEK17.",
  },
];

export default function TjenesterPage() {
  return (
    <main className="bg-white">
      {/* Vanlig <script> (ikke next/script) slik at JSON-LD server-rendres */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            Tjenester
          </li>
        </ol>
      </nav>

      {/* Intro */}
      <section className="px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-[#4DAEC8] sm:mb-3 sm:text-sm">
            Våre tjenester
          </p>
          <h1 className="mb-4 max-w-4xl text-[28px] font-bold leading-tight text-[#1A3A4A] sm:mb-5 sm:text-4xl md:text-[44px] lg:text-5xl">
            Baderomsrenovering og våtrom i Oslo og Akershus
          </h1>
          <p className="max-w-3xl text-[15px] leading-relaxed text-gray-700 sm:text-lg sm:leading-8">
            Vi leverer komplette baderom fra start til slutt – med solide
            våtromsløsninger, rørleggerarbeid, flislegging og innvendig
            oppussing. Velg tjenesten du trenger, eller la oss ta hele
            prosjektet.
          </p>
        </div>
      </section>

      {/* Tjenestekort */}
      <section
        aria-labelledby="tjenester-liste"
        className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8"
      >
        <h2 id="tjenester-liste" className="sr-only">
          Alle tjenester
        </h2>
        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {servicesSummary.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/tjenester/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#B8E4F0] bg-white transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(77,174,200,0.15)]"
              >
                <div className="relative h-[200px] w-full overflow-hidden sm:h-[240px]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <h3 className="mb-2 text-xl font-bold text-[#1A3A4A] sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mb-3 flex-1 text-[15px] leading-relaxed text-gray-700">
                    {service.shortDescription}
                  </p>
                  <p className="mb-4 text-[13px] font-medium text-[#4DAEC8]">
                    {service.highlight}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#1A3A4A] transition group-hover:text-[#4DAEC8]">
                    Les mer
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Fastprispakken */}
        <div className="mx-auto mt-6 max-w-7xl lg:mt-8">
          <Link
            href="/tjenester/fastprispakken"
            className="group flex flex-col gap-5 rounded-[24px] bg-[#1A3A4A] p-6 text-white transition hover:-translate-y-1 sm:p-8 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-[#8FD6EA]">
                Fastprispakken
              </p>
              <h3 className="mb-2 text-xl font-bold sm:text-2xl">
                Nytt bad til fastpris – 299 000 kr
              </h3>
              <p className="max-w-2xl text-[15px] leading-relaxed text-[#DCF2F9]">
                Totalrenovering av bad opptil 6 m², inkludert arbeid og alt
                byggemateriell. Fliser og innredning velger du selv.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#4DAEC8] px-6 py-3.5 text-[15px] font-semibold text-white transition group-hover:bg-[#3A9AB5]">
              Se Fastprispakken
            </span>
          </Link>
        </div>
      </section>

      {/* Slik jobber vi */}
      <section className="bg-[#EDF8FC] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-[#4DAEC8] sm:text-sm">
            Slik jobber vi
          </p>
          <h2 className="mb-8 text-2xl font-bold text-[#1A3A4A] sm:mb-10 sm:text-3xl lg:text-4xl">
            Fra befaring til ferdig resultat
          </h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-[20px] bg-white p-6">
                <p className="mb-3 text-[13px] font-semibold text-[#4DAEC8]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 text-lg font-bold text-[#1A3A4A]">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-700">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Områder */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-2xl font-bold text-[#1A3A4A] sm:text-3xl">
            Områder vi dekker
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {[
              { label: "Oslo", href: "/omrader/oslo" },
              { label: "Akershus", href: "/omrader/akershus" },
              { label: "Oslo og omegn", href: "/omrader/oslo-og-omegn" },
            ].map((a) => (
              <li key={a.href}>
                <Link
                  href={a.href}
                  className="inline-flex rounded-full border border-[#B8E4F0] px-5 py-2.5 text-[15px] font-medium text-[#1A3A4A] transition hover:bg-[#DCF2F9]"
                >
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq
        items={faq}
        heading="Ofte stilte spørsmål om våre tjenester"
        scriptId="faq-jsonld-tjenester"
      />

      <CtaSection />
    </main>
  );
}
