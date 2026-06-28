// app/personvern/page.tsx

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvernerklæring | Varige Bad",
  description:
    "Les hvordan Varige Bad AS behandler personopplysninger i forbindelse med våre tjenester.",
  alternates: {
    canonical: "https://www.varigebad.no/personvern",
  },
};

export default function PersonvernPage() {
  return (
    <main className="bg-white text-[#1A3A4A]">
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
            Personvern
          </li>
        </ol>
      </nav>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-[28px] font-light leading-tight text-[#1A3A4A] sm:text-[40px]">
            Personvernerklæring
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
                1. Hvem vi er
              </h2>
              <p>
                Varige Bad AS (org.nr. 934 649 273) er ansvarlig for
                behandlingen av personopplysninger som beskrevet i denne
                erklæringen. Har du spørsmål, kan du kontakte oss på{" "}
                <a
                  href="mailto:post@varigebad.no"
                  className="text-[#4DAEC8] hover:underline"
                >
                  hawraz@varigebad.no
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                2. Hvilke personopplysninger vi samler inn
              </h2>
              <p>
                Når du tar kontakt med oss via kontaktformular, telefon eller
                e-post, samler vi inn opplysninger som navn, adresse,
                telefonnummer og e-postadresse, samt informasjon om prosjektet
                du ønsker hjelp med.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                3. Hvordan vi bruker opplysningene
              </h2>
              <p>
                Opplysningene brukes til å vurdere og besvare din forespørsel,
                planlegge og utføre befaring og oppdrag, samt til fakturering og
                lovpålagt dokumentasjon av utført arbeid.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                4. Lagring og sikkerhet
              </h2>
              <p>
                Vi lagrer personopplysninger kun så lenge det er nødvendig for
                formålet de ble samlet inn for, eller så lenge vi er lovmessig
                forpliktet til det (f.eks. regnskapslovgivning).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                5. Dine rettigheter
              </h2>
              <p>
                Du har rett til innsyn i, retting av og sletting av
                personopplysninger vi har lagret om deg, i henhold til
                personopplysningsloven (GDPR). Kontakt oss på{" "}
                <a
                  href="mailto:post@varigebad.no"
                  className="text-[#4DAEC8] hover:underline"
                >
                  hawraz@varigebad.no
                </a>{" "}
                for å utøve disse rettighetene.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                6. Cookies
              </h2>
              <p>
                Nettsiden vår kan benytte nødvendige cookies for grunnleggende
                funksjonalitet, samt eventuelt analyseverktøy for å forstå
                hvordan siden brukes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[20px] font-medium text-[#1A3A4A]">
                7. Endringer
              </h2>
              <p>
                Vi kan oppdatere denne personvernerklæringen ved behov. Siste
                versjon er alltid tilgjengelig på denne siden.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
