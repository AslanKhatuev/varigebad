import Link from "next/link";
import Script from "next/script";

// Kort sammendrag av hver tjeneste — kun det viktigste for landingssiden.
// Full tekst og punktliste finnes på app/tjenester/[slug]/page.tsx
type ServiceSummary = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  highlight: string;
};

// Rekkefølge reflekterer prioritering: full baderomsrenovering/våtrom først,
// flislegging sist siden det er en del av helheten, ikke hovedfokuset.
const servicesSummary: ServiceSummary[] = [
  {
    slug: "totaloppussing-av-bad",
    title: "Totaloppussing av bad og våtrom",
    shortDescription:
      "Full renovering av bad og våtrom, fra riving til ferdig resultat, i tråd med BVN og TEK17.",
    image: "/totaloppusing.jpg",
    imageAlt:
      "Helrenovert baderom med ny innredning og fliser, utført av Varige Bad",
    highlight: "Design → utførelse → ferdigstillelse",
  },
  {
    slug: "rorleggerarbeid",
    title: "Rørleggerarbeid",
    shortDescription:
      "Trygg montering og reparasjon av sanitærutstyr i Oslo og omegn.",
    image: "/rørlegger.jpg",
    imageAlt:
      "Rørleggerarbeid og montering av rør på varmtvannsbereder, Varige Bad",
    highlight: "Sanitærutstyr, varmtvannsbereder og mer",
  },
  {
    slug: "innvendig-oppussing",
    title: "Innvendig oppussing",
    shortDescription:
      "Bredt utvalg av innvendig arbeid — fra maling og snekring til elektrisk.",
    image: "/innvendig.jpg",
    imageAlt: "Innvendig oppusset kjøkken og stue, utført av Varige Bad",
    highlight: "Helhetlig oppussing av eiendommen din",
  },
  {
    slug: "flislegging",
    title: "Flislegging",
    shortDescription:
      "Nøyaktig flisarbeid for bad, kjøkken, gang, veranda og garasje.",
    image: "/Flislegger.webp",
    imageAlt: "Fagperson som legger fliser på gulv, Varige Bad",
    highlight: "Rette linjer og god fall, hver gang",
  },
];

export default function ServicesOverview() {
  // SEO: ItemList strukturert data — hjelper Google forstå at dette er en
  // samling av relaterte tjenester fra samme leverandør.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Varige Bads tjenester",
    itemListElement: servicesSummary.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.varigebad.no/tjenester/${s.slug}`,
      name: s.title,
      image: `https://www.varigebad.no${s.image}`,
    })),
  };

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-white px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20 xl:px-10"
    >
      <Script
        id="services-overview-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header — stables vertikalt på mobil/tablet, side ved side på desktop */}
        <div className="mb-7 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between lg:mb-10">
          <div>
            <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#4DAEC8] sm:mb-2 sm:text-[13px]">
              Våre tjenester
            </p>
            <h2
              id="services-heading"
              className="text-[24px] font-semibold leading-tight text-[#1A3A4A] sm:text-[28px] md:text-[34px] lg:text-[40px]"
            >
              Full baderomsrenovering og våtromsløsninger
            </h2>
          </div>
          <Link
            href="/tjenester"
            className="inline-flex w-fit shrink-0 rounded-full border border-[#B8E4F0] px-5 py-2.5 text-[13px] font-medium text-[#1A3A4A] transition hover:bg-[#DCF2F9] sm:text-[14px]"
          >
            Se alle tjenester
          </Link>
        </div>

        {/* Grid: 1 kolonne mobil, 2 fra sm (tablet og opp), 4 fra lg (desktop) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {servicesSummary.map((service) => (
            <Link
              key={service.slug}
              href={`/tjenester/${service.slug}`}
              aria-label={`Les mer om ${service.title}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#EDF8FC] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Bilde — høyde skalerer i tre steg */}
              <div className="relative h-[160px] w-full overflow-hidden sm:h-[190px] md:h-[170px] lg:h-[180px]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Tekst */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                <h3 className="mb-1.5 text-[16px] font-semibold leading-tight text-[#1A3A4A] sm:mb-2 sm:text-[18px] lg:text-[20px]">
                  {service.title}
                </h3>

                <p className="mb-2.5 flex-1 text-[13px] leading-relaxed text-[#2A5A70] sm:mb-3 sm:text-[14px] lg:text-[15px]">
                  {service.shortDescription}
                </p>

                <p className="mb-3 text-[11px] font-medium text-[#4DAEC8] sm:mb-4 sm:text-[12px] lg:text-[13px]">
                  {service.highlight}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#4DAEC8] transition group-hover:gap-2.5 sm:text-[13px]">
                  Les mer
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                    className="shrink-0 transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
