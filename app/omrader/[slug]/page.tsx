import Link from "next/link";
import { notFound } from "next/navigation";

const omrader = {
  oslo: {
    navn: "Oslo",
    beskrivelse:
      "Vi utfører baderomsoppussing, flislegging og rørleggerarbeid i hele Oslo. Fra Majorstuen til Grünerløkka — vi kjenner byen og leverer kvalitet.",
    bydeler: [
      "Majorstuen", "Frogner", "Grünerløkka", "Sagene", "St. Hanshaugen",
      "Gamle Oslo", "Nordstrand", "Ullern", "Vestre Aker", "Østensjø",
    ],
  },
  akershus: {
    navn: "Akershus",
    beskrivelse:
      "Vi betjener hele Akershus med samme høye kvalitet som i Oslo. Kort reisetid og lokalkunnskap gjør oss til et naturlig valg for deg i regionen.",
    bydeler: [
      "Bærum", "Asker", "Lillestrøm", "Lørenskog", "Ski",
      "Ås", "Nesodden", "Oppegård", "Rælingen", "Skedsmo",
    ],
  },
  "oslo-og-omegn": {
    navn: "Oslo og omegn",
    beskrivelse:
      "Vi dekker Oslo og alle omliggende kommuner. Uansett hvor du bor i regionen, kan vi hjelpe deg med bad, flislegging og oppussing.",
    bydeler: [
      "Oslo", "Bærum", "Asker", "Lørenskog", "Lillestrøm",
      "Ski", "Nesodden", "Rælingen", "Nittedal", "Skedsmo",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function OmradePage({ params }: Props) {
  const { slug } = await params;
  const omrade = omrader[slug as keyof typeof omrader];

  if (!omrade) notFound();

  return (
    <main className="bg-white text-[#1A3A4A]">
      {/* Hero */}
      <section className="bg-[#EDF8FC] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-[#4DAEC8]">
            Våre områder
          </p>
          <h1 className="mb-6 text-[36px] font-light leading-tight text-[#1A3A4A] sm:text-[52px]">
            Baderomsoppussing i {omrade.navn}
          </h1>
          <p className="max-w-xl text-[17px] leading-relaxed text-[#2A5A70]">
            {omrade.beskrivelse}
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-full bg-[#4DAEC8] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#3A9AB5]"
          >
            Book gratis befaring
          </Link>
        </div>
      </section>

      {/* Bydeler / kommuner */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-[24px] font-light text-[#1A3A4A] sm:text-[32px]">
            Steder vi dekker
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {omrade.bydeler.map((bydel) => (
              <div
                key={bydel}
                className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] px-5 py-4 text-[15px] font-medium text-[#1A3A4A]"
              >
                {bydel}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section className="bg-[#F5FBFD] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-[24px] font-light text-[#1A3A4A] sm:text-[32px]">
            Hva vi tilbyr i {omrade.navn}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Totaloppussing av bad", href: "/tjenester/totaloppussing-av-bad" },
              { label: "Flislegging", href: "/tjenester/flislegging" },
              { label: "Rørleggerarbeid", href: "/tjenester/rorleggerarbeid" },
              { label: "Innvendig oppussing", href: "/tjenester/innvendig-oppussing" },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group rounded-2xl border border-[#B8E4F0] bg-white p-5 transition hover:border-[#4DAEC8] hover:shadow-md"
              >
                <h3 className="text-[15px] font-medium text-[#1A3A4A] group-hover:text-[#4DAEC8]">
                  {t.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4DAEC8] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-[28px] font-light text-white sm:text-[40px]">
            Trenger du hjelp i {omrade.navn}?
          </h2>
          <p className="mb-8 text-[16px] text-white/80 sm:text-[18px]">
            Book en gratis og uforpliktende befaring i dag.
          </p>
          <Link
            href="/kontakt"
            className="inline-block rounded-full bg-white px-8 py-4 text-[16px] font-semibold text-[#4DAEC8] transition hover:bg-[#DCF2F9]"
          >
            Book gratis befaring
          </Link>
        </div>
      </section>
    </main>
  );
}