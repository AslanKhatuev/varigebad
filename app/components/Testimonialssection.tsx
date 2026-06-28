import Link from "next/link";

// Samme sitater som vises på de respektive prosjekt-seksjonene i /referanser.
// NB: Ingen Review/AggregateRating strukturert data brukes her, siden disse
// omtalene ikke er uavhengig verifiserbare (f.eks. via Google Business eller
// en tredjeparts anmeldelsesplattform). Schema.org Review/AggregateRating
// uten ekstern verifisering kan utløse manuell straff fra Google ("self-
// serving reviews"), og er derfor utelatt. Sitatene vises fortsatt som
// vanlig, verdifullt innhold — bare uten den strukturerte dataen.
type Testimonial = {
  quote: string;
  author: string;
  project: string;
  location: string; // SEO: synlig geografisk kontekst per sitat
  slug: string; // matcher anker-id på /referanser
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Dyktige fagfolk som renoverte to bad for oss. Resultatet ble veldig fint og vi bruker dem gjerne igjen.",
    author: "Ragheb Pettersen",
    project: "Eilert Sundts gate 51",
    location: "Frogner, Oslo",
    slug: "eilert-sundts-gate-51",
  },
  {
    quote:
      "Vi har et lite bad på ca 3 kvm. Vi ønsket å bruke 60×60 fliser på badet. Vi fikk hjelp til å finne fliser i den fargen vi likte, som kom i både 60×60 og mosaikk i dusjsonen. Resultatet ble akkurat som vi ønsket oss.",
    author: "Frank og Elin",
    project: "Eftasåsen 9",
    location: "Oslo",
    slug: "eftasasen-9",
  },
  {
    quote:
      "Vi ønsket oss et bad med unike fliser og utseende. Vi hadde sett for oss noe, men det var enklere å få hjelp av Varige Bad til å velge riktige fliser og innredning. Vi ble kjempefornøyde med resultatet.",
    author: "Monica og Frode",
    project: "Vibes gate 16",
    location: "Oslo",
    slug: "vibes-gate-16",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#F5FBFD] px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20 xl:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header — stables vertikalt mobil/tablet, side ved side desktop */}
        <div className="mb-7 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between lg:mb-10">
          <div>
            <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#4DAEC8] sm:mb-2 sm:text-[13px]">
              Hva kundene sier
            </p>
            <h2
              id="testimonials-heading"
              className="text-[24px] font-semibold leading-tight text-[#1A3A4A] sm:text-[28px] md:text-[34px] lg:text-[40px]"
            >
              Fornøyde kunder i Oslo og Akershus
            </h2>
          </div>
          <Link
            href="/referanser"
            className="inline-flex w-fit shrink-0 rounded-full border border-[#B8E4F0] px-5 py-2.5 text-[13px] font-medium text-[#1A3A4A] transition hover:bg-[#DCF2F9] sm:text-[14px]"
          >
            Se alle referanser
          </Link>
        </div>

        {/* Enkel liste — ingen karusell. Hvert kort lenker til riktig
            prosjekt på referansesiden. <ul>/<li> er semantisk korrekt for
            en samling av like elementer (SEO + tilgjengelighet). */}
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((t) => (
            <li key={t.author}>
              <Link
                href={`/referanser#${t.slug}`}
                aria-label={`Se prosjektet ${t.project} i ${t.location} på referansesiden`}
                className="group flex h-full flex-col rounded-2xl border border-[#B8E4F0] bg-white p-4 transition hover:-translate-y-1 hover:border-[#4DAEC8] hover:shadow-md sm:p-5 md:p-6 lg:p-6"
              >
                {/* Dekorative stjerner — ren visuell stil, ingen maskinlesbar rating */}
                <div
                  className="mb-2.5 flex gap-0.5 text-[#4DAEC8] sm:mb-3"
                  aria-hidden="true"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="sm:h-4 sm:w-4"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.771l-7.416 3.642 1.48-8.279L0 9.306l8.332-1.151z" />
                    </svg>
                  ))}
                </div>

                {/* SEO: <blockquote> er semantisk korrekt for et direkte sitat,
                    bedre enn vanlig <p> for søkemotorer og skjermlesere */}
                <blockquote className="mb-3.5 flex-1 sm:mb-4">
                  <p className="text-[13px] italic leading-relaxed text-[#2A5A70] sm:text-[14px] lg:text-[15px]">
                    "{t.quote}"
                  </p>
                </blockquote>

                <footer>
                  <p className="text-[13px] font-semibold text-[#1A3A4A] sm:text-[14px] lg:text-[15px]">
                    <cite className="not-italic">{t.author}</cite>
                  </p>
                  <p className="mb-2 text-[11px] text-[#4DAEC8] sm:text-[12px] lg:text-[13px]">
                    {t.project} · {t.location}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#4DAEC8] transition group-hover:gap-2.5 sm:text-[12px] lg:text-[13px]">
                    Se prosjekt
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                      className="shrink-0 transition-transform group-hover:translate-x-0.5 sm:h-[13px] sm:w-[13px]"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                </footer>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
