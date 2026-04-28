// app/tjenester/[slug]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";

const services = {
  "totaloppussing-av-bad": {
    title: "Totaloppussing av bad",
    description:
      "Vi hjelper deg med komplett oppussing av bad fra planlegging til ferdig resultat.",
    image: "/bad.jpg",
    points: [
      "Riving av gammelt bad",
      "Flislegging",
      "Rørleggerarbeid",
      "Membran og våtromsløsninger",
      "Ferdigstillelse og kvalitetssikring",
    ],
  },
  flislegging: {
    title: "Flislegging",
    description:
      "Profesjonell flislegging for bad, kjøkken, gang og andre rom.",
    image: "/flislegging.jpg",
    points: [
      "Flislegging på gulv og vegg",
      "Nøyaktig fuging",
      "Store og små fliser",
      "Tilpasning rundt hjørner og kanter",
    ],
  },
  rorleggerarbeid: {
    title: "Rørleggerarbeid",
    description:
      "Vi utfører rørleggerarbeid i forbindelse med bad, oppussing og rehabilitering.",
    image: "/rorlegger.jpg",
    points: [
      "Montering av servant",
      "Dusj og armatur",
      "Toalett og baderomsinnredning",
      "Trygge løsninger for våtrom",
    ],
  },
  "innvendig-oppussing": {
    title: "Innvendig oppussing",
    description:
      "Vi utfører innvendig oppussing med fokus på kvalitet, detaljer og varige løsninger.",
    image: "/oppussing.jpg",
    points: [
      "Sparkling og maling",
      "Gulv og vegger",
      "Lister og detaljer",
      "Oppussing av rom og overflater",
    ],
  },
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#4DAEC8]">
              Våre tjenester
            </p>

            <h1 className="mb-6 text-4xl font-bold text-[#1A3A4A] sm:text-5xl">
              {service.title}
            </h1>

            <p className="mb-8 text-lg leading-8 text-gray-700">
              {service.description}
            </p>

            <ul className="mb-8 space-y-3">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3 text-gray-700">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#4DAEC8]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/kontakt"
              className="inline-flex rounded-full bg-[#4DAEC8] px-7 py-4 font-semibold text-white transition hover:bg-[#3A9AB5]"
            >
              Book gratis befaring
            </Link>
          </div>

          <div className="overflow-hidden rounded-[32px] shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
