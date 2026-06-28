import Link from "next/link";
import Script from "next/script";

// Bytt ut med de faktiske profil-URL-ene
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/varigebad/",
  tiktok: "https://www.tiktok.com/@varigebad",
};

export default function Footer() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Varige Bad AS",
    url: "https://www.varigebad.no",
    logo: "https://www.varigebad.no/logo.png",
    description:
      "Eksperter på baderomsrenovering og våtrom, med rørleggerarbeid og flislegging som del av helheten, i Oslo og Akershus.",
    taxID: "934 649 273",
    areaServed: ["Oslo", "Akershus"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+4795898458",
      email: "hawraz@varigebad.no",
      contactType: "customer service",
      areaServed: ["Oslo", "Akershus"],
      availableLanguage: "Norwegian",
    },
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.tiktok],
  };

  return (
    <footer className="bg-[#1A3A4A] px-4 py-14 sm:px-6 lg:px-8 xl:px-10">
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-3 flex flex-col leading-none">
              <span className="text-[26px] font-light uppercase tracking-[0.12em] text-white">
                Varigebad
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.28em] text-[#4DAEC8]">
                Bad & våtrom
              </span>
            </div>

            <p className="mb-4 max-w-xs text-[14px] leading-relaxed text-white/60">
              Eksperter på baderomsrenovering og våtrom i Oslo og Akershus, med
              rørleggerarbeid og flislegging som del av helheten.
            </p>

            <address className="not-italic">
              <p className="mb-1 text-[14px] text-white/60">
                Org.nr. 934 649 273
              </p>
              <a
                href="mailto:hawraz@varigebad.no"
                className="block text-[14px] text-[#4DAEC8] hover:underline"
              >
                hawraz@varigebad.no
              </a>
              <a
                href="tel:+4795898458"
                className="block text-[14px] text-[#4DAEC8] hover:underline"
              >
                +47 958 98 458
              </a>
            </address>

            {/* Sosiale medier */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Følg Varige Bad på Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-[#4DAEC8] hover:text-[#4DAEC8]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Følg Varige Bad på TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-[#4DAEC8] hover:text-[#4DAEC8]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.31 1.38V7.3s-1.88.09-3.25-1.48z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Hurtiglenker">
            <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-white/40">
              Lenker
            </h4>
            <ul className="space-y-2">
              {[
                {
                  label: "Baderomsrenovering",
                  href: "/tjenester/totaloppussing-av-bad",
                },
                { label: "Referanser", href: "/referanser" },
                { label: "Om oss", href: "/om-oss" },
                { label: "Kontakt oss", href: "/kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white/60 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Areas */}
          <nav aria-label="Områder vi dekker">
            <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-white/40">
              Områder
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Oslo", href: "/omrader/oslo" },
                { label: "Akershus", href: "/omrader/akershus" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white/60 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/30">
            © {new Date().getFullYear()} Varige Bad AS — Baderomsrenovering og
            våtrom i Oslo og Akershus
          </p>

          {/* Personvern og vilkår */}
          <ul className="flex gap-5">
            <li>
              <Link
                href="/personvern"
                className="text-[13px] text-white/40 transition hover:text-white/70"
              >
                Personvern
              </Link>
            </li>
            <li>
              <Link
                href="/vilkar"
                className="text-[13px] text-white/40 transition hover:text-white/70"
              >
                Vilkår
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
