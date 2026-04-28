"use client";

import { useState } from "react";
import {
  validerKontaktSkjema,
  skjemaErGyldig,
  type KontaktFormData,
  type KontaktFormFeil,
} from "@/lib/validering/kontaktSkjema";

const tomtSkjema: KontaktFormData = {
  navn: "",
  epost: "",
  telefon: "",
  adresse: "",
  tjeneste: "",
  melding: "",
};

export default function KontaktPage() {
  const [data, setData] = useState<KontaktFormData>(tomtSkjema);
  const [feil, setFeil] = useState<KontaktFormFeil>({});
  const [sendt, setSendt] = useState(false);

  const oppdater = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (feil[name as keyof KontaktFormFeil]) {
      setFeil((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const sendSkjema = () => {
    const nyeFeil = validerKontaktSkjema(data);
    setFeil(nyeFeil);
    if (skjemaErGyldig(nyeFeil)) {
      setSendt(true);
    }
  };

  const meldingLengde = data.melding.length;
  const meldingGyldig = meldingLengde >= 10;
  const meldingForLang = meldingLengde > 256;

  if (sendt) {
    return (
      <main className="bg-white text-[#1A3A4A]">
        <section className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#DCF2F9]">
              <svg className="h-8 w-8 text-[#4DAEC8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mb-3 text-[28px] font-light text-[#1A3A4A]">Takk for din melding!</h2>
            <p className="text-[16px] text-[#2A5A70]">Vi tar kontakt med deg så snart som mulig.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white text-[#1A3A4A]">
      {/* Hero */}
      <section className="bg-[#EDF8FC] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-[36px] font-light leading-tight text-[#1A3A4A] sm:text-[52px]">
            Kontakt oss
          </h1>
          <p className="max-w-xl text-[17px] leading-relaxed text-[#2A5A70]">
            Book en gratis og uforpliktende befaring, eller send oss en melding.
            Vi svarer raskt!
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Kontaktinfo — avrundede kort */}
            <div>
              <h2 className="mb-8 text-[24px] font-light text-[#1A3A4A] sm:text-[32px]">Kontakt informasjon</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-5">
                  <p className="mb-2 text-[13px] font-semibold uppercase tracking-widest text-[#4DAEC8]">Telefon</p>
                  <a href="tel:+4712345678" className="text-[16px] font-medium text-[#1A3A4A] hover:text-[#4DAEC8]">
                    123 45 678
                  </a>
                </div>
                <div className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-5">
                  <p className="mb-2 text-[13px] font-semibold uppercase tracking-widest text-[#4DAEC8]">E-post</p>
                  <a href="mailto:post@varigebad.no" className="break-all text-[16px] font-medium text-[#1A3A4A] hover:text-[#4DAEC8]">
                    post@varigebad.no
                  </a>
                </div>
                <div className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-5">
                  <p className="mb-2 text-[13px] font-semibold uppercase tracking-widest text-[#4DAEC8]">Adresse</p>
                  <p className="text-[16px] font-medium text-[#1A3A4A]">Eksempelgata 1, 0123 Oslo</p>
                </div>
                <div className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-5">
                  <p className="mb-2 text-[13px] font-semibold uppercase tracking-widest text-[#4DAEC8]">Åpningstider</p>
                  <p className="text-[16px] font-medium text-[#1A3A4A]">Man–fre: 07:00–17:00</p>
                </div>
              </div>
            </div>

            {/* Kontaktskjema */}
            <div className="rounded-2xl border border-[#B8E4F0] bg-[#F5FBFD] p-8">
              <h2 className="mb-2 text-[22px] font-light text-[#1A3A4A]">Send oss en melding</h2>
              <p className="mb-6 text-[12px] text-[#9CC8D8]">
                Felt merket med <span className="text-red-500">*</span> er påkrevd.
              </p>
              <div className="space-y-4">

                {/* Navn */}
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#2A5A70]">
                    Navn <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="navn"
                    value={data.navn}
                    onChange={oppdater}
                    placeholder="Ditt navn"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#1A3A4A] outline-none placeholder:text-[#9CC8D8] focus:ring-2 focus:ring-[#4DAEC8]/20 ${
                      feil.navn ? "border-red-400" : "border-[#B8E4F0] focus:border-[#4DAEC8]"
                    }`}
                  />
                  {feil.navn && <p className="mt-1 text-[12px] text-red-500">{feil.navn}</p>}
                </div>

                {/* E-post */}
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#2A5A70]">
                    E-post <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="epost"
                    value={data.epost}
                    onChange={oppdater}
                    placeholder="din@epost.no"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#1A3A4A] outline-none placeholder:text-[#9CC8D8] focus:ring-2 focus:ring-[#4DAEC8]/20 ${
                      feil.epost ? "border-red-400" : "border-[#B8E4F0] focus:border-[#4DAEC8]"
                    }`}
                  />
                  {feil.epost && <p className="mt-1 text-[12px] text-red-500">{feil.epost}</p>}
                </div>

                {/* Telefon */}
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#2A5A70]">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    value={data.telefon}
                    onChange={oppdater}
                    placeholder="123 45 678"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#1A3A4A] outline-none placeholder:text-[#9CC8D8] focus:ring-2 focus:ring-[#4DAEC8]/20 ${
                      feil.telefon ? "border-red-400" : "border-[#B8E4F0] focus:border-[#4DAEC8]"
                    }`}
                  />
                  {feil.telefon && <p className="mt-1 text-[12px] text-red-500">{feil.telefon}</p>}
                </div>

                {/* Adresse */}
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#2A5A70]">
                    Adresse <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="adresse"
                    value={data.adresse}
                    onChange={oppdater}
                    placeholder="Gateadresse, postnummer og sted"
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#1A3A4A] outline-none placeholder:text-[#9CC8D8] focus:ring-2 focus:ring-[#4DAEC8]/20 ${
                      feil.adresse ? "border-red-400" : "border-[#B8E4F0] focus:border-[#4DAEC8]"
                    }`}
                  />
                  {feil.adresse && <p className="mt-1 text-[12px] text-red-500">{feil.adresse}</p>}
                </div>

                {/* Tjeneste */}
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#2A5A70]">
                    Hva gjelder saken? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="tjeneste"
                    value={data.tjeneste}
                    onChange={oppdater}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#1A3A4A] outline-none focus:ring-2 focus:ring-[#4DAEC8]/20 ${
                      feil.tjeneste ? "border-red-400" : "border-[#B8E4F0] focus:border-[#4DAEC8]"
                    }`}
                  >
                    <option value="" disabled>Velg tjeneste</option>
                    <option value="totaloppussing">Totaloppussing av bad</option>
                    <option value="flislegging">Flislegging</option>
                    <option value="rorleggerarbeid">Rørleggerarbeid</option>
                    <option value="innvendig-oppussing">Innvendig oppussing</option>
                    <option value="annet">Annet</option>
                  </select>
                  {feil.tjeneste && <p className="mt-1 text-[12px] text-red-500">{feil.tjeneste}</p>}
                </div>

                {/* Melding med teller */}
                <div>
                  <label className="mb-1.5 block text-[13px] font-medium text-[#2A5A70]">
                    Melding <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="melding"
                    value={data.melding}
                    onChange={oppdater}
                    rows={4}
                    placeholder="Beskriv prosjektet ditt kort..."
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#1A3A4A] outline-none placeholder:text-[#9CC8D8] focus:ring-2 focus:ring-[#4DAEC8]/20 ${
                      feil.melding || meldingForLang ? "border-red-400" : "border-[#B8E4F0] focus:border-[#4DAEC8]"
                    }`}
                  />
                  <div className="mt-1 flex items-center justify-between">
                    <span>
                      {feil.melding && <p className="text-[12px] text-red-500">{feil.melding}</p>}
                    </span>
                    <span className={`text-[12px] font-medium tabular-nums ${
                      meldingForLang ? "text-red-500" : meldingGyldig ? "text-green-500" : "text-red-400"
                    }`}>
                      {meldingLengde} / 256
                    </span>
                  </div>
                </div>

                {/* Send-knapp */}
                <button
                  type="button"
                  onClick={sendSkjema}
                  className="w-full rounded-full bg-[#4DAEC8] py-4 text-[15px] font-semibold text-white transition hover:bg-[#3A9AB5]"
                >
                  Send melding
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}