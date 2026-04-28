import Link from "next/link";

export default function OmOssPage() {
  return (
    <main className="bg-white text-[#1A3A4A]">
      {/* Hero */}
      <section className="bg-[#EDF8FC] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 max-w-2xl text-[36px] font-light leading-tight text-[#1A3A4A] sm:text-[52px]">
            Om oss
          </h1>
          <p className="max-w-xl text-[17px] leading-relaxed text-[#2A5A70] sm:text-[20px]">
            Vi er et håndverkerfirma med hjerte for bad. Hvert prosjekt
            behandles med like mye omtanke — enten det er et lite bad eller en
            total oppussing.
          </p>
        </div>
      </section>

      {/* Vår historie */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-5 text-[24px] font-light text-[#1A3A4A] sm:text-[32px]">
                Vår historie
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-[#2A5A70]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-[15px] leading-relaxed text-[#2A5A70]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            {/* Placeholder bilde */}
            <div
              className="w-full rounded-2xl bg-[#C8EAF5]"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
        </div>
      </section>

      {/* Verdier */}
      <section className="bg-[#F5FBFD] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-[24px] font-light text-[#1A3A4A] sm:text-[32px]">
            Hva vi står for
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Kvalitet",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              },
              {
                title: "Ærlighet",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              },
              {
                title: "Ryddighet",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[#B8E4F0] bg-white p-7"
              >
                <h3 className="mb-3 text-[18px] font-medium text-[#1A3A4A]">
                  {v.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#2A5A70]">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-[24px] font-light text-[#1A3A4A] sm:text-[32px]">
            Møt teamet
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Navn Navnesen", role: "Daglig leder" },
              { name: "Navn Navnesen", role: "Flislegger" },
              { name: "Navn Navnesen", role: "Rørlegger" },
              { name: "Navn Navnesen", role: "Prosjektleder" },
            ].map((person, i) => (
              <div key={i} className="text-center">
                <div
                  className="mx-auto mb-4 w-full rounded-2xl bg-[#C8EAF5]"
                  style={{ aspectRatio: "1/1" }}
                />
                <h3 className="text-[16px] font-medium text-[#1A3A4A]">
                  {person.name}
                </h3>
                <p className="text-[14px] text-[#4DAEC8]">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4DAEC8] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-[28px] font-light text-white sm:text-[40px]">
            Klar for nytt bad?
          </h2>
          <p className="mb-8 text-[16px] text-white/80 sm:text-[18px]">
            Book en gratis og uforpliktende befaring, så gir vi deg et nøyaktig
            tilbud.
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
