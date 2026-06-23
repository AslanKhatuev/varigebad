import Link from "next/link";
import Script from "next/script";

// Bytt ut telefonnummeret med det faktiske nummeret til Varige Bad.
const PHONE_NUMBER = "95 89 84 58";
const PHONE_NUMBER_TEL = "+4795898458"; // E.164-format for tel:-lenke

export default function CtaSection() {
  // SEO: ContactPoint-data hjelper Google koble dette telefonnummeret
  // til virksomheten din, og kan vises i Knowledge Panel / lokale søkeresultater.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Varige Bad",
    url: "https://www.varigebad.no",
    areaServed: ["Oslo", "Akershus"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_NUMBER_TEL,
      contactType: "customer service",
      areaServed: ["Oslo", "Akershus"],
      availableLanguage: "Norwegian",
    },
  };

  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-[#1A3A4A] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 xl:px-10"
    >
      <Script
        id="cta-section-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl text-center">
        {/* SEO: <h2> for korrekt heading-hierarki under sidens <h1> */}
        <h2
          id="cta-heading"
          className="mb-4 text-[26px] font-semibold leading-tight text-white sm:text-[32px] md:text-[40px]"
        >
          Klar for ditt eget baderomsprosjekt?
        </h2>

        <p className="mx-auto mb-8 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-[16px] md:text-[17px]">
          Book en gratis og uforpliktende befaring, og få et nøyaktig tilbud
          basert på ditt bad. Vi tar oppdrag i hele Oslo og Akershus.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full bg-[#4DAEC8] px-8 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#3A9AB5] sm:text-[16px]"
          >
            Book gratis befaring
          </Link>

          {/* Telefon som alternativ kontaktvei — semantisk korrekt med tel:-protokoll */}
          <a
            href={`tel:${PHONE_NUMBER_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-medium text-white transition hover:bg-white/10 sm:text-[16px]"
            aria-label={`Ring Varige Bad på ${PHONE_NUMBER}`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
