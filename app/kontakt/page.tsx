"use client";

export default function KontaktPage() {
  return (
    <main className="bg-white text-[#1A3A4A]">
      {/* Hero */}
      <section className="bg-[#EDF8FC] px-4 py-12 sm:px-6 sm:py-20 md:py-24 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-[28px] font-light leading-tight text-[#1A3A4A] sm:mb-5 sm:text-[40px] md:text-[46px] lg:text-[52px]">
            Kontakt oss
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#2A5A70] sm:text-[17px]">
            Book en gratis og uforpliktende befaring, eller ta kontakt direkte
            på telefon eller e-post. Vi svarer raskt!
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* Kontaktinfo — avrundede kort */}
            <div>
              <h2 className="mb-6 text-[22px] font-light text-[#1A3A4A] sm:mb-8 sm:text-[28px] md:text-[32px]">
                Kontakt informasjon
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-4 sm:p-5">
                  <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-widest text-[#4DAEC8] sm:mb-2 sm:text-[13px]">
                    Telefon
                  </p>
                  <a
                    href="tel:+4795898458"
                    className="text-[15px] font-medium text-[#1A3A4A] hover:text-[#4DAEC8] sm:text-[16px]"
                  >
                    958 98 458
                  </a>
                </div>

                <div className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-4 sm:p-5">
                  <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-widest text-[#4DAEC8] sm:mb-2 sm:text-[13px]">
                    E-post
                  </p>
                  <a
                    href="mailto:hawraz@varigebad.no"
                    className="break-all text-[15px] font-medium text-[#1A3A4A] hover:text-[#4DAEC8] sm:text-[16px]"
                  >
                    hawraz@varigebad.no
                  </a>
                </div>

                <div className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-4 sm:p-5">
                  <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-widest text-[#4DAEC8] sm:mb-2 sm:text-[13px]">
                    Adresse
                  </p>
                  <p className="text-[15px] font-medium text-[#1A3A4A] sm:text-[16px]">
                    Lunden 35, 0598 Oslo
                  </p>
                </div>

                <div className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-4 sm:p-5">
                  <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-widest text-[#4DAEC8] sm:mb-2 sm:text-[13px]">
                    Åpningstider
                  </p>
                  <p className="text-[15px] font-medium text-[#1A3A4A] sm:text-[16px]">
                    Man–fre: 09:00–17:00
                    <br />
                    Lør–søn: Stengt
                  </p>
                </div>

                {/* Sosiale medier */}
                <div className="col-span-1 rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-4 sm:col-span-2 sm:p-5">
                  <p className="mb-2.5 text-[12px] font-semibold uppercase tracking-widest text-[#4DAEC8] sm:mb-3 sm:text-[13px]">
                    Følg oss
                  </p>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <a
                      href="https://www.instagram.com/varigebad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Følg Varige Bad på Instagram"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8E4F0] text-[#1A3A4A] transition hover:border-[#4DAEC8] hover:text-[#4DAEC8] sm:h-10 sm:w-10"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                        className="sm:h-5 sm:w-5"
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
                      href="https://www.tiktok.com/@varigebad"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Følg Varige Bad på TikTok"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8E4F0] text-[#1A3A4A] transition hover:border-[#4DAEC8] hover:text-[#4DAEC8] sm:h-10 sm:w-10"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="sm:h-[17px] sm:w-[17px]"
                      >
                        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.31 1.38V7.3s-1.88.09-3.25-1.48z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontaktskjema — vises, men er deaktivert (under utvikling) */}
            <div className="relative rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-5 sm:p-6 md:p-7 lg:p-8">
              {/* Info-banner om at skjemaet er stengt */}
              <div className="mb-5 rounded-xl border border-[#B8E4F0] bg-white px-4 py-3.5 sm:mb-6 sm:px-5 sm:py-4">
                <p className="text-[13px] leading-relaxed text-[#2A5A70] sm:text-[14px]">
                  <span aria-hidden="true">🔒</span> Kontaktskjemaet er
                  midlertidig stengt og under behandling. Ved spørsmål, send en
                  e-post til{" "}
                  <a
                    href="mailto:hawraz@varigebad.no"
                    className="font-medium text-[#4DAEC8] hover:underline"
                  >
                    hawraz@varigebad.no
                  </a>
                  .
                </p>
                <p className="mt-2 text-[12px] text-[#9CC8D8] sm:text-[13px]">
                  Signert av{" "}
                  <a
                    href="https://www.skylineinterface.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#9CC8D8] underline transition hover:text-[#4DAEC8]"
                  >
                    SkyLine Interface
                  </a>
                </p>
              </div>

              <h2 className="mb-2 text-[20px] font-light text-[#1A3A4A] sm:text-[22px] md:text-[24px]">
                Send oss en melding
              </h2>
              <p className="mb-5 text-[11px] text-[#9CC8D8] sm:mb-6 sm:text-[12px]">
                Felt merket med <span className="text-red-500">*</span> er
                påkrevd.
              </p>

              {/* fieldset disabled deaktiverer ALLE felt og knappen inni,
                  samtidig som de fortsatt vises normalt med riktig styling. */}
              <fieldset disabled className="space-y-4 opacity-60">
                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-[#2A5A70] sm:text-[13px]">
                    Navn <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="navn"
                    placeholder="Ditt navn"
                    className="w-full cursor-not-allowed rounded-xl border border-[#B8E4F0] bg-white px-3.5 py-2.5 text-[14px] text-[#1A3A4A] outline-none placeholder:text-[#9CC8D8] sm:px-4 sm:py-3 sm:text-[15px]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-[#2A5A70] sm:text-[13px]">
                    E-post <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="epost"
                    placeholder="din@epost.no"
                    className="w-full cursor-not-allowed rounded-xl border border-[#B8E4F0] bg-white px-3.5 py-2.5 text-[14px] text-[#1A3A4A] outline-none placeholder:text-[#9CC8D8] sm:px-4 sm:py-3 sm:text-[15px]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-[#2A5A70] sm:text-[13px]">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    placeholder="123 45 678"
                    className="w-full cursor-not-allowed rounded-xl border border-[#B8E4F0] bg-white px-3.5 py-2.5 text-[14px] text-[#1A3A4A] outline-none placeholder:text-[#9CC8D8] sm:px-4 sm:py-3 sm:text-[15px]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-[#2A5A70] sm:text-[13px]">
                    Adresse <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="adresse"
                    placeholder="Gateadresse, postnummer og sted"
                    className="w-full cursor-not-allowed rounded-xl border border-[#B8E4F0] bg-white px-3.5 py-2.5 text-[14px] text-[#1A3A4A] outline-none placeholder:text-[#9CC8D8] sm:px-4 sm:py-3 sm:text-[15px]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-[#2A5A70] sm:text-[13px]">
                    Hva gjelder saken? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="tjeneste"
                    defaultValue=""
                    className="w-full cursor-not-allowed rounded-xl border border-[#B8E4F0] bg-white px-3.5 py-2.5 text-[14px] text-[#1A3A4A] outline-none sm:px-4 sm:py-3 sm:text-[15px]"
                  >
                    <option value="" disabled>
                      Velg tjeneste
                    </option>
                    <option value="totaloppussing">
                      Totaloppussing av bad
                    </option>
                    <option value="flislegging">Flislegging</option>
                    <option value="rorleggerarbeid">Rørleggerarbeid</option>
                    <option value="innvendig-oppussing">
                      Innvendig oppussing
                    </option>
                    <option value="annet">Annet</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-[#2A5A70] sm:text-[13px]">
                    Melding <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="melding"
                    rows={4}
                    placeholder="Beskriv prosjektet ditt kort..."
                    className="w-full cursor-not-allowed rounded-xl border border-[#B8E4F0] bg-white px-3.5 py-2.5 text-[14px] text-[#1A3A4A] outline-none placeholder:text-[#9CC8D8] sm:px-4 sm:py-3 sm:text-[15px]"
                  />
                  <div className="mt-1 flex items-center justify-end">
                    <span className="text-[11px] font-medium tabular-nums text-[#9CC8D8] sm:text-[12px]">
                      0 / 256
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full cursor-not-allowed rounded-full bg-[#4DAEC8] py-3.5 text-[14px] font-semibold text-white sm:py-4 sm:text-[15px]"
                >
                  Send melding
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
