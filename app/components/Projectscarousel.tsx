import Link from "next/link";
import Script from "next/script";

// ── Data ─────────────────────────────────────────────────────────────────────
// Ett representativt bilde per prosjekt (3 totalt) — hentet fra samme
// datasett som /referanser-siden.
type FeaturedProject = {
  slug: string;
  title: string;
  location: string;
  tag: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    slug: "eilert-sundts-gate-51",
    title: "Eilert Sundts Gate 51",
    location: "Frogner, Oslo",
    tag: "Baderom",
    shortDescription:
      "Totalrenovering av to bad med marmorfliser i hexagonmønster og dusjsone i naturstein.",
    image: "/eilert-sundts-gate1.webp",
    imageAlt:
      "Marmorflis i hexagonmønster på gulv i renovert baderom, Eilert Sundts gate 51, Oslo",
  },
  {
    slug: "eftasasen-9",
    title: "Eftasåsen 9",
    location: "Oslo",
    tag: "Baderom",
    shortDescription:
      "Renovering av et lite baderom på 3 kvm med 60×60 fliser og mosaikk i dusjsonen.",
    image: "/eftasasen1.jpg.webp",
    imageAlt:
      "Grå flislagt dusjnisje med glassvegg i lite baderom, Eftasåsen 9, Oslo",
  },
  {
    slug: "vibes-gate-16",
    title: "Vibes Gate 16",
    location: "Oslo",
    tag: "Totaloppussing",
    shortDescription:
      "Totalrenovering av loftsbad med hvite mosaikkfliser og skreddersydde løsninger under skråtak.",
    image: "/vibes1.jpg",
    imageAlt:
      "Baderomsinnredning med mørke skap og hvite mosaikkfliser under skråtak, Vibes gate 16",
  },
];

export default function ProjectsCarousel() {
  // SEO: ItemList strukturert data — hjelper Google forstå at dette er en
  // samling av relaterte prosjekter, kan vises som rich results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Utvalgte baderomsprosjekter",
    itemListElement: featuredProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.varigebad.no/referanser#${p.slug}`,
      name: p.title,
      image: `https://www.varigebad.no${p.image}`,
    })),
  };

  return (
    <section
      aria-labelledby="projects-heading"
      className="bg-white px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20 xl:px-10"
    >
      <Script
        id="projects-overview-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header — stables vertikalt på mobil/tablet, side ved side på desktop */}
        <div className="mb-7 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between lg:mb-10">
          <div>
            <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#4DAEC8] sm:mb-2 sm:text-[13px]">
              Utvalgte prosjekter
            </p>
            <h2
              id="projects-heading"
              className="text-[24px] font-semibold leading-tight text-[#1A3A4A] sm:text-[28px] md:text-[34px] lg:text-[40px]"
            >
              Se våre utførte prosjekter
            </h2>
          </div>
          <Link
            href="/referanser"
            className="inline-flex w-fit shrink-0 rounded-full border border-[#B8E4F0] px-5 py-2.5 text-[13px] font-medium text-[#1A3A4A] transition hover:bg-[#DCF2F9] sm:text-[14px]"
          >
            Se alle referanser
          </Link>
        </div>

        {/* Grid: 1 kolonne mobil, 2 fra sm (tablet og opp), 3 fra lg (desktop) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/referanser#${project.slug}`}
              aria-label={`Se prosjektet ${project.title} i ${project.location}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#EDF8FC] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Bilde — høyde skalerer i tre steg */}
              <div className="relative h-[160px] w-full overflow-hidden sm:h-[190px] md:h-[200px] lg:h-[210px]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Tekst */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                <span className="mb-1.5 inline-block w-fit rounded-full bg-[#DCF2F9] px-2.5 py-0.5 text-[10px] font-medium text-[#4DAEC8] sm:mb-2 sm:text-[11px] lg:text-[12px]">
                  {project.tag}
                </span>

                <h3 className="mb-1.5 text-[16px] font-semibold leading-tight text-[#1A3A4A] sm:mb-2 sm:text-[18px] lg:text-[20px]">
                  {project.title}
                </h3>

                <p className="mb-2.5 flex-1 text-[13px] leading-relaxed text-[#2A5A70] sm:mb-3 sm:text-[14px] lg:text-[15px]">
                  {project.shortDescription}
                </p>

                <p className="mb-3 text-[11px] font-medium text-[#4DAEC8] sm:mb-4 sm:text-[12px] lg:text-[13px]">
                  {project.location}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#4DAEC8] transition group-hover:gap-2.5 sm:text-[13px]">
                  Se prosjekt
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
