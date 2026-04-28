"use client";

import { useState } from "react";

const projects = [
  { title: "Skandinavisk bad med kontrastfliser i dusjsonen", tag: "Baderom" },
  { title: "Totaloppussing av bad i klassisk stil på Ullern", tag: "Baderom" },
  { title: "Moderne bad med sort armatur på Majorstuen", tag: "Baderom" },
  { title: "Stilrent bad med flislegging på Østerås", tag: "Baderom" },
  { title: "Klassisk bad med marmor på Frogner", tag: "Baderom" },
  { title: "Oppussing av bad i skandinavisk stil", tag: "Baderom" },
  {
    title: "Totalrenovering av leilighet på Grünerløkka",
    tag: "Totaloppussing",
  },
  {
    title: "Leilighet totalrenovert på Frogner i klassisk stil",
    tag: "Totaloppussing",
  },
  { title: "Totaloppussing av enebolig på Nordstrand", tag: "Totaloppussing" },
  { title: "Flislegging av entré og kjøkken, Sagene", tag: "Flislegging" },
  { title: "Ny flislegging av bad og vaskerom", tag: "Flislegging" },
  { title: "Flislegging av terrasse i naturstein", tag: "Flislegging" },
];

const tags = ["Alle", "Baderom", "Totaloppussing", "Flislegging"];

export default function ReferanserPage() {
  const [activeTag, setActiveTag] = useState("Alle");

  const filtered =
    activeTag === "Alle"
      ? projects
      : projects.filter((p) => p.tag === activeTag);

  return (
    <main className="bg-white text-[#1A3A4A]">
      {/* Hero */}
      <section className="bg-[#EDF8FC] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-[36px] font-light leading-tight text-[#1A3A4A] sm:text-[52px]">
            Referanser
          </h1>
          <p className="max-w-xl text-[17px] leading-relaxed text-[#2A5A70]">
            Se et utvalg av prosjekter vi har fullført for fornøyde kunder i
            Oslo-området.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Filter tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-5 py-2 text-[14px] font-medium transition ${
                  activeTag === tag
                    ? "bg-[#4DAEC8] text-white"
                    : "bg-[#DCF2F9] text-[#1A3A4A] hover:bg-[#C8EAF5]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl bg-[#F5FBFD]"
              >
                {/* Placeholder — bytt ut med: */}
                {/* <div className="relative w-full" style={{ aspectRatio: "3/2" }}>
                  <Image src={p.image} alt={p.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div> */}
                <div
                  className="w-full bg-[#C8EAF5]"
                  style={{ aspectRatio: "3/2" }}
                />
                <div className="p-4">
                  <span className="mb-2 inline-block rounded-full bg-[#DCF2F9] px-3 py-0.5 text-[11px] font-medium text-[#4DAEC8]">
                    {p.tag}
                  </span>
                  <h3 className="text-[14px] font-medium leading-snug text-[#1A3A4A]">
                    {p.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
