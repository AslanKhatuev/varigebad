import Link from "next/link";
import Script from "next/script";

// Kort sammendrag av hvert område — kun det viktigste for landingssiden.
// Full tekst og fullstendig bydels-/kommuneliste finnes på app/omrader/[slug]/page.tsx
type AreaSummary = {
  slug: string;
  title: string;
  shortDescription: string;
  highlights: string[]; // noen få representative steder, ikke hele listen
};

const areasSummary: AreaSummary[] = [
  {
    slug: "oslo",
    title: "Oslo",
    shortDescription:
      "Vårt primære arbeidsområde — med spesielt mye erfaring fra vestkanten, og solid erfaring fra østkanten.",
    highlights: ["Vestre Aker", "Frogner", "Grünerløkka", "Gamle Oslo"],
  },
  {
    slug: "akershus",
    title: "Akershus",
    shortDescription:
      "Vi betjener hele Akershus med samme kvalitet og arbeidsprosess som i Oslo.",
    highlights: ["Bærum", "Asker", "Lillestrøm", "Lørenskog"],
  },
  {
    slug: "oslo-og-omegn",
    title: "Oslo og omegn",
    shortDescription:
      "Vi dekker Oslo og alle omliggende kommuner — uansett hvor i regionen du bor.",
    highlights: ["Oslo", "Bærum", "Asker", "Ski"],
  },
];

export default function AreasOverview() {
  // SEO: ItemList-strukturert data for de tre område-sidene
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Varige Bads dekningsområder",
    itemListElement: areasSummary.map((a, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.varigebad.no/omrader/${a.slug}`,
      name: a.title,
    })),
  };

  return (
    <section
      aria-labelledby="areas-heading"
      className="bg-[#F5FBFD] px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20 xl:px-10"
    >
      <Script
        id="areas-overview-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header — stables vertikalt mobil/tablet, side ved side desktop */}
        <div className="mb-7 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between lg:mb-10">
          <div>
            <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#4DAEC8] sm:mb-2 sm:text-[13px]">
              Områder vi dekker
            </p>
            <h2
              id="areas-heading"
              className="text-[24px] font-semibold leading-tight text-[#1A3A4A] sm:text-[28px] md:text-[34px] lg:text-[40px]"
            >
              Vi jobber i Oslo og hele Akershus
            </h2>
          </div>
          <Link
            href="/omrader"
            className="inline-flex w-fit shrink-0 rounded-full border border-[#B8E4F0] px-5 py-2.5 text-[13px] font-medium text-[#1A3A4A] transition hover:bg-[#DCF2F9] sm:text-[14px]"
          >
            Se alle områder
          </Link>
        </div>

        {/* Grid: 1 kolonne mobil, 3 kolonner fra sm og opp (md justerer gap) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 md:gap-5 lg:gap-6">
          {areasSummary.map((area) => (
            <Link
              key={area.slug}
              href={`/omrader/${area.slug}`}
              aria-label={`Se hvilke steder vi dekker i ${area.title}: ${area.shortDescription}`}
              className="group flex flex-col rounded-2xl border border-[#B8E4F0] bg-white p-4 transition hover:-translate-y-1 hover:border-[#4DAEC8] hover:shadow-md sm:p-5 md:p-6 lg:p-6"
            >
              {/* Liten lokasjons-ikon — skalerer i tre steg */}
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#EDF8FC] text-[#4DAEC8] sm:mb-3.5 sm:h-10 sm:w-10 lg:mb-4 lg:h-11 lg:w-11">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <h3 className="mb-1.5 text-[17px] font-semibold leading-tight text-[#1A3A4A] sm:mb-2 sm:text-[19px] lg:text-[20px]">
                {area.title}
              </h3>

              <p className="mb-3.5 flex-1 text-[13px] leading-relaxed text-[#2A5A70] sm:mb-4 sm:text-[14px] lg:text-[15px]">
                {area.shortDescription}
              </p>

              {/* Noen representative steder som "tags" */}
              <div className="mb-3.5 flex flex-wrap gap-1.5 sm:mb-4">
                {area.highlights.map((place) => (
                  <span
                    key={place}
                    className="rounded-full bg-[#EDF8FC] px-2.5 py-1 text-[10px] font-medium text-[#4DAEC8] sm:text-[11px] lg:text-[12px]"
                  >
                    {place}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#4DAEC8] transition group-hover:gap-2.5 sm:text-[13px]">
                Se område
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
