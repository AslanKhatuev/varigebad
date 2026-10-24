// app/tjenester/fastprispakken/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Faq, { type FaqItem } from "@/app/components/Faq";

const url = "https://www.varigebad.no/tjenester/fastprispakken";
const title = "Nytt bad til fastpris i Oslo – 299 000 kr";
const description =
  "Totalrenovering av bad opptil 6 m² til fastpris: 299 000 kr inkl. mva. Riving, rør, elektro, membran, flis og dokumentasjon i Boligmappa. Book gratis befaring.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bad fastpris",
    "fastpris baderom",
    "totalrenovering bad Oslo",
    "pusse opp bad pris",
    "nytt bad Oslo",
    "baderomsrenovering fastpris",
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Varige Bad",
    type: "website",
    locale: "nb_NO",
    // Delingsbildet er opengraph-image.jpg i samme mappe
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const faq: FaqItem[] = [
  {
    question: "Hva koster et nytt bad med Fastprispakken?",
    answer:
      "Arbeid og alt byggemateriell koster 299 000 kr inkl. mva for bad opptil 6 m². I tillegg kommer fliser og innredning, som vanligvis utgjør ca. 20 000–30 000 kr.",
  },
  {
    question: "Hvor store bad gjelder fastprisen for?",
    answer:
      "Pakken gjelder bad fra ca. 3 til 6 m². Ved befaringen bekrefter vi at badet ditt passer i pakken før du bestemmer deg.",
  },
  {
    question: "Kan prisen endre seg underveis?",
    answer:
      "Nei. Alt som står under «Hva er inkludert» er dekket av fastprisen. Eventuelle tillegg avtales skriftlig med deg på forhånd.",
  },
  {
    question: "Hvilke områder gjelder tilbudet i?",
    answer: "Tilbudet gjelder boliger i Oslo og omegn.",
  },
  {
    question: "Får jeg dokumentasjon på arbeidet?",
    answer:
      "Ja. Alt arbeid utføres etter våtromsnormen (BVN) og TEK17, og full dokumentasjon legges i Boligmappa.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Fastprispakken – totalrenovering av bad",
      description,
      url,
      image: `${url}/opengraph-image.jpg`,
      serviceType: "Baderomsrenovering",
      areaServed: ["Oslo", "Akershus"],
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "Varige Bad AS",
        url: "https://www.varigebad.no",
      },
      offers: {
        "@type": "Offer",
        price: 299000,
        priceCurrency: "NOK",
        description: "Fast pris for bad opptil 6 m², inkl. mva",
        url,
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Tjenester",
          item: "https://www.varigebad.no/tjenester",
        },
        { "@type": "ListItem", position: 3, name: "Fastprispakken", item: url },
      ],
    },
  ],
};

const highlights = [
  "Fastpris – ingen overraskelser",
  "Forutsigbar leveranse",
  "Komplett elektro",
  "Rør-i-rør-system",
  "Sertifiserte fagfolk med våtromskompetanse",
];

const sizes = [
  { m2: 3, label: "Mindre bad som skal moderniseres" },
  { m2: 4, label: "Bad som skal oppgraderes" },
  { m2: 5, label: "Det typiske norske badet" },
  { m2: 6, label: "Større bad som skal renoveres" },
];

const groups = [
  {
    title: "Forberedelse og riving",
    desc: "Vi beskytter boligen og fjerner alt det gamle.",
    items: [
      "Tildekking av gulv og dører",
      "Total riving og pigging",
      "Håndtering og bortkjøring av avfall",
    ],
  },
  {
    title: "Rørlegger",
    desc: "Nytt, sikkert rør-i-rør-anlegg fra fordelerskap til utstyr.",
    items: [
      "Bytte av sluk",
      "Plombering av vannrør",
      "Førstegangsopplegg lagt som rør i rør",
      "Fordelerskap",
      "Sisterne til toalett",
      "Vann- og avløpsrør til vask",
      "Vannrør til dusj og toalett",
      "Opplegg til vaskemaskin",
      "Montering av sanitærutstyr",
    ],
  },
  {
    title: "Elektro",
    desc: "Komplett elektroarbeid med varme i gulvet.",
    items: [
      "4 spotter med dimmer",
      "Punkt til lampe i speil",
      "Elektriske gulvvarmekabler",
      "Termostat",
      "Stikkontakt",
      "Opplegg til vaskemaskin",
    ],
  },
  {
    title: "Bygging og membran",
    desc: "Tett og solid oppbygging etter våtromsnormen.",
    items: [
      "Oppbygging av vegger",
      "Våtromsplater på vegger",
      "Støp",
      "Membranarbeid på gulv og vegger",
      "Kasse rundt sisterne",
      "Nedsenket dusjsone",
    ],
  },
  {
    title: "Flis og overflater",
    desc: "Ferdig utført – fra flis til malt tak.",
    items: [
      "Flislegging av gulv og vegger",
      "Ny gips i tak",
      "Sparkling og maling av tak",
      "Ny karm og dør",
    ],
  },
  {
    title: "Dokumentasjon",
    desc: "Du får papirene i orden for fremtidig salg og forsikring.",
    items: ["Full dokumentasjon i Boligmappa"],
  },
];

const materials = [
  "Lekter",
  "Treplater",
  "Våtromsplater",
  "Gipsplater",
  "Baderomsstøp",
  "Membranduk / sveisemembran",
  "Membrantilbehør",
  "Smøremembran",
  "Flislim",
  "Fugemasse",
  "Silikon",
  "Sparkel",
  "Maling",
];

const trust = [
  {
    title: "Våtromsnormen (BVN)",
    text: "Vi følger Byggebransjens våtromsnorm i alle ledd.",
  },
  {
    title: "TEK17",
    text: "Arbeidet utføres etter gjeldende byggteknisk forskrift.",
  },
  {
    title: "Boligmappa",
    text: "All dokumentasjon samles digitalt – nyttig ved salg og forsikring.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-[#4DAEC8] sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold text-[#1A3A4A] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-gray-700 sm:text-lg">
          {lead}
        </p>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="#DCF2F9" />
      <path
        d="M6 10.4l2.6 2.6L14 7.6"
        fill="none"
        stroke="#4DAEC8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FastprispakkenPage() {
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
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[12px] text-[#2A5A70] sm:gap-2 sm:text-[13px]">
          <li>
            <Link href="/" className="hover:text-[#4DAEC8]">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/tjenester" className="hover:text-[#4DAEC8]">
              Tjenester
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-[#1A3A4A]">
            Fastprispakken
          </li>
        </ol>
      </nav>

      {/* Hero med priskort */}
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-[#1A3A4A] shadow-[0_20px_60px_rgba(77,174,200,0.15)] sm:rounded-[28px] lg:rounded-[32px]">
          <Image
            src="/varigebad.png"
            alt="Moderne bad med frittstående badekar, walk-in dusj og belyst speil"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/30 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/45 lg:to-black/10" />

          <div className="relative grid gap-8 px-5 py-10 [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] sm:gap-10 sm:p-10 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16 lg:p-14">
            <div>
              <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-[#8FD6EA] sm:mb-3 sm:text-sm">
                Fastprispakken · Oslo og omegn
              </p>
              <h1 className="mb-4 text-[28px] font-bold leading-tight text-white sm:mb-5 sm:text-4xl md:text-[44px] lg:text-5xl">
                Nytt bad til fastpris i Oslo –{" "}
                <span className="text-[#8FD6EA]">uten overraskelser</span>
              </h1>
              <p className="mb-6 text-[15px] leading-relaxed text-white/90 sm:mb-8 sm:text-lg sm:leading-8">
                Totalrenovering av bad opptil 6 m². Vi river, bygger, legger rør
                og elektro, membran og flis – og leverer ferdig dokumentert.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-[#4DAEC8] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#3A9AB5] sm:px-7 sm:py-4 sm:text-base"
                >
                  Book gratis befaring
                </Link>
                <a
                  href="#inkludert"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-base"
                >
                  Se hva som er inkludert
                </a>
              </div>
            </div>

            <aside
              aria-label="Pris"
              className="rounded-[24px] border border-[#B8E4F0] bg-white p-6 shadow-[0_8px_24px_rgba(77,174,200,0.15)] [text-shadow:none] sm:rounded-[28px] sm:p-8"
            >
              <p className="text-[15px] text-[#2A5A70]">
                Fast pris, bad opptil 6 m²
              </p>
              <p className="mt-1 text-[44px] font-bold leading-tight text-[#1A3A4A] sm:text-[56px]">
                299 000
                <span className="ml-1 text-[22px] font-medium text-[#2A5A70]">
                  kr
                </span>
              </p>
              <p className="mb-6 text-sm text-[#2A5A70]">inkl. mva</p>
              <ul className="grid gap-3 border-t border-[#B8E4F0] pt-6">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-[15px] text-gray-700 sm:text-base"
                  >
                    <CheckIcon />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* For hvem */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="For hvem?"
            title="Laget for små og mellomstore bad"
            lead="Dette er de vanligste badene i norske hjem. Pakken er tilpasset nettopp disse størrelsene – med fokus på funksjon, kvalitet og et moderne uttrykk."
          />
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {sizes.map((s) => (
              <li
                key={s.m2}
                className="flex flex-col gap-2 rounded-[20px] border border-[#B8E4F0] bg-white p-5 sm:p-6"
              >
                <span className="text-[40px] font-bold leading-none text-[#4DAEC8]">
                  {s.m2}
                  <small className="ml-1 text-[18px] font-medium text-[#2A5A70]">
                    m²
                  </small>
                </span>
                <span className="text-[14px] text-[#2A5A70] sm:text-[15px]">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hva er inkludert */}
      <section
        id="inkludert"
        className="scroll-mt-24 bg-[#EDF8FC] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Hva er inkludert?"
            title="Alt arbeidet – fra riving til ferdig bad"
            lead="Én pris dekker hele totalrenoveringen, inkludert alt byggemateriell."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g, i) => (
              <article
                key={g.title}
                className="rounded-[20px] bg-white p-6 sm:p-7"
              >
                <p className="mb-3 text-[13px] font-semibold text-[#4DAEC8]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 text-lg font-bold text-[#1A3A4A] sm:text-xl">
                  {g.title}
                </h3>
                <p className="mb-4 text-[14px] text-[#2A5A70] sm:text-[15px]">
                  {g.desc}
                </p>
                <ul className="grid gap-2 border-t border-[#B8E4F0] pt-4">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[14px] text-gray-700 sm:text-[15px]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DAEC8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="mb-4 text-lg font-bold text-[#1A3A4A] sm:text-xl">
              Alt materiell er med
            </h3>
            <ul className="flex flex-wrap gap-2">
              {materials.map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-[#B8E4F0] bg-white px-4 py-1.5 text-[14px] text-[#1A3A4A]"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ikke inkludert / budsjett */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Hva er ikke inkludert?"
              title="Fliser og innredning velger du selv"
            />
            <p className="mb-4 text-[15px] leading-relaxed text-gray-700 sm:text-lg">
              Utvalget er stort og prisene varierer mye. Derfor er fliser og
              baderomsinnredning holdt utenfor – så du får akkurat det du vil
              ha, og prisen på arbeidet forblir tydelig.
            </p>
            <p className="text-[15px] leading-relaxed text-gray-700 sm:text-lg">
              Vi hjelper deg gjerne med å velge, og vi ordner leveransen.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#B8E4F0] bg-white p-6 shadow-[0_8px_24px_rgba(77,174,200,0.15)] [text-shadow:none] sm:rounded-[28px] sm:p-8">
            <h3 className="text-lg font-bold text-[#1A3A4A] sm:text-xl">
              Slik ser budsjettet ut
            </h3>
            <dl className="mt-4">
              <div className="flex flex-col gap-1 border-b border-[#B8E4F0] py-4 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-gray-700">Fastpris arbeid og materiell</dt>
                <dd className="whitespace-nowrap font-semibold text-[#1A3A4A]">
                  299 000 kr
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-[#B8E4F0] py-4 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-gray-700">
                  Fliser og innredning
                  <small className="block text-[13px] text-[#2A5A70]">
                    Erfaringstall for bad på 3–6 m²
                  </small>
                </dt>
                <dd className="whitespace-nowrap font-semibold text-[#1A3A4A]">
                  ca. 20 000–30 000 kr
                </dd>
              </div>
              <div className="flex flex-col gap-1 py-4 text-lg sm:flex-row sm:justify-between sm:gap-4">
                <dt className="font-semibold text-[#1A3A4A]">Totalt, ca.</dt>
                <dd className="whitespace-nowrap font-bold text-[#4DAEC8]">
                  319 000–329 000 kr
                </dd>
              </div>
            </dl>
            <p className="mt-2 text-[13px] text-[#2A5A70]">
              Alle priser inkl. mva.
            </p>
          </div>
        </div>
      </section>

      {/* Om Varige Bad */}
      <section className="bg-[#1A3A4A] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-[#B8E4F0] sm:text-sm">
            Om Varige Bad AS
          </p>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Et bad som tåler tidens bruk
          </h2>
          <p className="mb-10 max-w-3xl text-[15px] leading-relaxed text-[#DCF2F9] sm:text-lg">
            Vi leverer komplette løsninger for renovering av bad og våtrom, med
            solid fagkunnskap og lang erfaring fra våtromsarbeid.
          </p>
          <ul className="grid gap-6 sm:grid-cols-3">
            {trust.map((t) => (
              <li key={t.title} className="border-t border-white/20 pt-5">
                <h3 className="mb-2 text-lg font-bold">{t.title}</h3>
                <p className="text-[15px] text-[#DCF2F9]">{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq
        items={faq}
        heading="Ofte stilte spørsmål om Fastprispakken"
        scriptId="faq-jsonld-fastprispakken"
      />

      {/* CTA */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#1A3A4A] sm:text-3xl lg:text-4xl">
            Skal du pusse opp bad i Oslo?
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-gray-700 sm:text-lg">
            Tilbudet gjelder boliger i Oslo og omegn. Bestill en uforpliktende
            befaring, så bekrefter vi at badet ditt passer i pakken.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#4DAEC8] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#3A9AB5] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
          >
            Book gratis befaring
          </Link>
        </div>
      </section>
    </main>
  );
}
