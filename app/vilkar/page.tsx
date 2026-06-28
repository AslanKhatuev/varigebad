// app/vilkar/page.tsx

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vilkår | Varige Bad",
  description: "Vilkår for bruk av Varige Bad AS sine tjenester og nettside.",
  alternates: {
    canonical: "https://www.varigebad.no/vilkar",
  },
};

export default function VilkarPage() {
  return (
    <main className="bg-white text-[#1A3A4A]">
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
            Vilkår
          </li>
        </ol>
      </nav>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-[28px] font-light leading-tight text-[#1A3A4A] sm:text-[40px]">
            Vilkår
          </h1>

          <p className="mb-8 text-[14px] text-[#2A5A70]">
            Sist oppdatert:{" "}
            {new Date().toLocaleDateString("nb-NO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="space-y-8 text-[15px] leading-relaxed text-[#2A5A70]">
            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                1. Om disse vilkårene
              </h2>
              <p>
                Disse vilkårene gjelder for bruk av varigebad.no og for
                tjenester levert av Varige Bad AS (org.nr. 934 649 273).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                2. Befaring og tilbud
              </h2>
              <p>
                Befaring og tilbud fra Varige Bad er uforpliktende inntil
                skriftlig avtale eller kontrakt er signert av begge parter.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                3. Pris og betaling
              </h2>
              <p>
                Pris for utført arbeid fremgår av tilbud eller kontrakt.
                Eventuelle endringer i prosjektets omfang avtales skriftlig før
                arbeidet utføres.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                4. Reklamasjon og garanti
              </h2>
              <p>
                Utført arbeid følger relevante bestemmelser i
                håndverkertjenesteloven. Reklamasjoner rettes skriftlig til{" "}
                <a
                  href="mailto:hawrz@varigebad.no"
                  className="text-[#4DAEC8] hover:underline"
                >
                  hawraz@varigebad.no
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                5. Ansvar
              </h2>
              <p>
                Varige Bad AS er ansvarlig for utført arbeid i henhold til
                gjeldende lovverk og bransjestandarder, herunder Byggebransjens
                våtromsnorm (BVN) og TEK17.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                6. Endringer i vilkårene
              </h2>
              <p>
                Vi kan oppdatere disse vilkårene ved behov. Siste versjon er
                alltid tilgjengelig på denne siden.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                7. Kontakt
              </h2>
              <p>
                Spørsmål om disse vilkårene kan rettes til{" "}
                <a
                  href="mailto:hawraz@varigebad.no"
                  className="text-[#4DAEC8] hover:underline"
                >
                  hawraz@varigebad.no
                </a>{" "}
                eller{" "}
                <a
                  href="tel:+4795898458"
                  className="text-[#4DAEC8] hover:underline"
                >
                  +47 958 98 458
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
