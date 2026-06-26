// app/tjenester/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";

const services = {
  "totaloppussing-av-bad": {
    title: "Totaloppussing av bad",
    description:
      "Vi leverer komplette løsninger for oppussing og totalrenovering av bad – utført med fokus på kvalitet, trygghet og varig resultat. Med solid fagkunnskap og erfaring fra våtromsarbeid følger vi gjeldende krav i Byggebransjens våtromsnorm (BVN) og TEK17, slik at du får et bad som både ser bra ut og tåler tidens bruk.",
    image: "/totaloppusing.jpg",
    points: [
      "Design: Utarbeide skisse og materialvalg",
      "Utførelse: Demontering, bygging og installasjon",
      "Ferdigstillelse: Sjekk og godkjenning av sluttresultat",
      "Dokumentasjon: Nødvendig dokumentasjon",
      "Konsultasjon: Diskutere behov og ønsker",
    ],
    metaTitle: "Totaloppussing av bad i Oslo og Akershus | Varige Bad",
    metaDescription:
      "Komplett totaloppussing av bad fra design til ferdigstillelse. Vi følger BVN og TEK17, og leverer baderom som tåler tidens bruk i Oslo og Akershus.",
    keywords: [
      "totaloppussing bad Oslo",
      "renovere bad Akershus",
      "baderomsrenovering",
      "BVN våtromsnorm",
      "totalrenovering bad",
      "baderomsfirma Oslo",
      "bad fra A til Å",
      "TEK17 baderom",
      "totaloppussing bad Vestre Aker",
      "totaloppussing bad Ullern",
      "totaloppussing bad Frogner",
      "totaloppussing bad St. Hanshaugen",
      "totaloppussing bad Sagene",
      "totaloppussing bad Grünerløkka",
      "totaloppussing bad Gamle Oslo",
      "totaloppussing bad Nordstrand",
      "totaloppussing bad Søndre Nordstrand",
      "totaloppussing bad Østensjø",
      "totaloppussing bad Alna",
      "totaloppussing bad Grorud",
      "totaloppussing bad Stovner",
      "totaloppussing bad Bjerke",
      "totaloppussing bad Nordre Aker",
      "totaloppussing bad Bærum",
      "totaloppussing bad Asker",
      "totaloppussing bad Lillestrøm",
      "totaloppussing bad Lørenskog",
    ],
  },
  flislegging: {
    title: "Flislegging",
    description:
      "Flislegging handler ikke bare om utseende – det krever nøyaktighet, riktig underlag og godt håndverk. Vi leverer flisarbeid av høy kvalitet, tilpasset ditt bad og dine ønsker. Rette linjer, god fall og et varig resultat – hver gang.",
    image: "/Flislegger.webp",
    points: ["Bad", "Kjøkken", "Gang", "Veranda", "Garasje"],
    metaTitle: "Flislegging i Oslo og Akershus | Varige Bad",
    metaDescription:
      "Profesjonell flislegging av bad, kjøkken, gang, veranda og garasje. Rette linjer, god fall og varig resultat i Oslo og Akershus.",
    keywords: [
      "flislegging Oslo",
      "flislegger Akershus",
      "flislegging bad",
      "fliser kjøkken",
      "flislegging gang",
      "flislegging veranda",
      "flislegging garasje",
      "fliselegger nær meg",
      "flislegging Vestre Aker",
      "flislegging Ullern",
      "flislegging Frogner",
      "flislegging St. Hanshaugen",
      "flislegging Sagene",
      "flislegging Grünerløkka",
      "flislegging Gamle Oslo",
      "flislegging Nordstrand",
      "flislegging Søndre Nordstrand",
      "flislegging Østensjø",
      "flislegging Alna",
      "flislegging Grorud",
      "flislegging Stovner",
      "flislegging Bjerke",
      "flislegging Nordre Aker",
      "flislegging Bærum",
      "flislegging Asker",
      "flislegging Lillestrøm",
      "flislegging Lørenskog",
    ],
  },
  rorleggerarbeid: {
    title: "Rørleggerarbeid",
    description:
      "Vi utfører rørleggerarbeid i forbindelse med bad, oppussing og rehabilitering. Vi utfører rørleggerarbeid i Oslo og omegn.",
    image: "/rørlegger.jpg",
    points: [
      "Montering av sanitærutstyr",
      "Montering av varmtvannsbereder",
      "Rørleggerarbeid på kjøkken",
      "Reparasjoner",
      "Montering av dusjkabinett",
    ],
    metaTitle: "Rørleggerarbeid i Oslo og omegn | Varige Bad",
    metaDescription:
      "Trygt rørleggerarbeid til bad og kjøkken — montering av sanitærutstyr, varmtvannsbereder, dusjkabinett og reparasjoner i Oslo og omegn.",
    keywords: [
      "rørlegger Oslo",
      "rørleggerarbeid bad",
      "montering varmtvannsbereder",
      "rørlegger Akershus",
      "montering sanitærutstyr",
      "rørlegger nær meg",
      "rørleggerarbeid kjøkken",
      "rørlegger Vestre Aker",
      "rørlegger Ullern",
      "rørlegger Frogner",
      "rørlegger St. Hanshaugen",
      "rørlegger Sagene",
      "rørlegger Grünerløkka",
      "rørlegger Gamle Oslo",
      "rørlegger Nordstrand",
      "rørlegger Søndre Nordstrand",
      "rørlegger Østensjø",
      "rørlegger Alna",
      "rørlegger Grorud",
      "rørlegger Stovner",
      "rørlegger Bjerke",
      "rørlegger Nordre Aker",
      "rørlegger Bærum",
      "rørlegger Asker",
      "rørlegger Lillestrøm",
      "rørlegger Lørenskog",
    ],
  },
  "innvendig-oppussing": {
    title: "Innvendig oppussing",
    description:
      "Vi samarbeider med forskjellige type håndverkere og kan tilby bredt utvalg av innvendig oppussing.",
    image: "/innvendig.jpg",
    points: [
      "Totaloppussing av eiendom",
      "Maling",
      "Snekker",
      "Montering av kjøkken",
      "Membran",
      "Elektrisk arbeid",
    ],
    metaTitle: "Innvendig oppussing i Oslo og Akershus | Varige Bad",
    metaDescription:
      "Bredt utvalg av innvendig oppussing — maling, snekkerarbeid, kjøkkenmontering, membran og elektrisk arbeid i Oslo og Akershus.",
    keywords: [
      "innvendig oppussing Oslo",
      "totaloppussing eiendom",
      "snekker Akershus",
      "oppussing kjøkken",
      "maler Oslo",
      "snekker Oslo",
      "elektriker bad",
      "membran våtrom",
      "innvendig oppussing Vestre Aker",
      "innvendig oppussing Ullern",
      "innvendig oppussing Frogner",
      "innvendig oppussing St. Hanshaugen",
      "innvendig oppussing Sagene",
      "innvendig oppussing Grünerløkka",
      "innvendig oppussing Gamle Oslo",
      "innvendig oppussing Nordstrand",
      "innvendig oppussing Søndre Nordstrand",
      "innvendig oppussing Østensjø",
      "innvendig oppussing Alna",
      "innvendig oppussing Grorud",
      "innvendig oppussing Stovner",
      "innvendig oppussing Bjerke",
      "innvendig oppussing Nordre Aker",
      "innvendig oppussing Bærum",
      "innvendig oppussing Asker",
      "innvendig oppussing Lillestrøm",
      "innvendig oppussing Lørenskog",
    ],
  },
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return { title: "Tjeneste ikke funnet | Varige Bad" };
  }

  const url = `https://www.varigebad.no/tjenester/${slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: "Varige Bad",
      type: "website",
      locale: "nb_NO",
      images: [
        {
          url: `https://www.varigebad.no${service.image}`,
          width: 1200,
          height: 800,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  const url = `https://www.varigebad.no/tjenester/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url,
    image: `https://www.varigebad.no${service.image}`,
    areaServed: ["Oslo", "Akershus"],
    provider: {
      "@type": "LocalBusiness",
      name: "Varige Bad",
      url: "https://www.varigebad.no",
      areaServed: ["Oslo", "Akershus"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.points.map((point, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: {
          "@type": "Service",
          name: point,
        },
      })),
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Tjenester",
        item: "https://www.varigebad.no/tjenester",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: url,
      },
    ],
  };

  return (
    <main className="bg-white">
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="service-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Brødsmulesti — responsiv tekststørrelse, scroller horisontalt på smale skjermer hvis nødvendig */}
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
            {service.title}
          </li>
        </ol>
      </nav>

      {/*
        Hovedseksjon — responsiv på tre nivåer:
        - Mobil (default): 1 kolonne, bilde under tekst
        - Tablet (md:): fortsatt 1 kolonne men med mer luft/større tekst
        - Desktop (lg:): 2 kolonner side ved side
      */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Bilde — vises FØRST på mobil for visuell kontekst, men kan også
              ligge etter tekst avhengig av preferanse. Her: bilde under tekst
              på mobil/tablet (order via DOM), side ved side på desktop. */}
          <div className="order-2 overflow-hidden rounded-[24px] shadow-lg sm:rounded-[28px] lg:order-2 lg:rounded-[32px]">
            <img
              src={service.image}
              alt={`${service.title} utført av Varige Bad i Oslo og Akershus`}
              className="h-[220px] w-full object-cover sm:h-[300px] md:h-[360px] lg:h-[420px]"
            />
          </div>

          <div className="order-1 lg:order-1">
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-[#4DAEC8] sm:mb-3 sm:text-sm">
              Våre tjenester
            </p>

            {/* h1 skalerer i fire steg: mobil → sm → md → lg/desktop */}
            <h1 className="mb-4 text-[28px] font-bold leading-tight text-[#1A3A4A] sm:mb-5 sm:text-4xl md:text-[44px] lg:text-5xl">
              {service.title}
            </h1>

            <p className="mb-6 text-[15px] leading-relaxed text-gray-700 sm:mb-8 sm:text-lg sm:leading-8">
              {service.description}
            </p>

            <ul className="mb-6 space-y-2.5 sm:mb-8 sm:space-y-3">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[14px] text-gray-700 sm:text-base"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4DAEC8]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/kontakt"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#4DAEC8] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#3A9AB5] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
            >
              Book gratis befaring
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
