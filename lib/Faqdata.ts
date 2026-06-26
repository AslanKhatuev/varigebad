// lib/faqData.ts
// Sentralisert FAQ-innhold — gjenbrukes på forsiden og tjenestesidene.

import type { FaqItem } from "../app/components/Faq";

// Generelle spørsmål — vises på forsiden/landingssiden
export const generalFaq: FaqItem[] = [
  {
    question: "Hvilke områder dekker Varige Bad?",
    answer:
      "Vi jobber i hele Oslo, med spesielt mye erfaring fra vestkanten (Vestre Aker, Ullern, Frogner), og solid erfaring fra østkanten. Vi dekker også hele Akershus, inkludert Bærum, Asker, Lillestrøm og Lørenskog.",
  },
  {
    question: "Hvor lang tid tar en baderomsrenovering?",
    answer:
      "Et vanlig baderom tar typisk 3–5 uker fra riving til ferdigstillelse, avhengig av størrelse og omfang. Vi gir deg en konkret fremdriftsplan etter befaring.",
  },
  {
    question: "Hva koster en totaloppussing av bad?",
    answer:
      "Prisen varierer basert på størrelse, materialvalg og omfang av arbeidet. Vi tilbyr en gratis og uforpliktende befaring der du får et konkret tilbud tilpasset ditt prosjekt.",
  },
  {
    question: "Følger dere byggebransjens krav til våtrom?",
    answer:
      "Ja, alt arbeid følger Byggebransjens våtromsnorm (BVN) og TEK17, slik at badet ditt både ser bra ut og tåler tidens bruk.",
  },
  {
    question: "Får jeg én fast kontaktperson under prosjektet?",
    answer:
      "Ja, du får én prosjektleder som koordinerer alle faggrupper — rørlegger, elektriker, snekker og flislegger — slik at du slipper å koordinere selv.",
  },
];

// Tjenestespesifikke spørsmål, nøkkel = samme slug som i app/tjenester/[slug]
export const serviceFaq: Record<string, FaqItem[]> = {
  "totaloppussing-av-bad": [
    {
      question: "Hva inkluderer en totaloppussing av bad?",
      answer:
        "En totaloppussing inkluderer riving av eksisterende bad, membranlegging, flislegging, rørleggerarbeid, elektrisk arbeid og montering av ny innredning — alt koordinert av én prosjektleder.",
    },
    {
      question: "Kan jeg bo hjemme under renoveringen?",
      answer:
        "Ja, det er fullt mulig å bo hjemme under arbeidet. Vi informerer deg løpende om fremdriften og tilpasser arbeidstidene der det er mulig.",
    },
  ],
  flislegging: [
    {
      question: "Hvilke rom kan dere flislegge?",
      answer:
        "Vi flislegger bad, kjøkken, gang, veranda og garasje. Vi hjelper deg også med å velge riktige fliser i ønsket størrelse og farge.",
    },
    {
      question: "Hvor viktig er underlaget før flislegging?",
      answer:
        "Underlaget er avgjørende for et varig resultat. Vi sørger for korrekt fall og membran før flisene legges, slik at du unngår fremtidige fuktproblemer.",
    },
  ],
  rorleggerarbeid: [
    {
      question: "Trenger jeg melding til kommunen for rørleggerarbeid?",
      answer:
        "Større endringer i våtrom krever ofte søknad, og vi hjelper deg med nødvendig dokumentasjon der det er aktuelt.",
    },
    {
      question: "Utfører dere akutte reparasjoner?",
      answer:
        "Vi utfører rørleggerarbeid i forbindelse med planlagte prosjekter og oppussing. Ta kontakt for å diskutere ditt konkrete behov.",
    },
  ],
  "innvendig-oppussing": [
    {
      question: "Kan dere hjelpe med hele leiligheten, ikke bare badet?",
      answer:
        "Ja, vi samarbeider med forskjellige håndverkere og tilbyr et bredt utvalg av innvendig oppussing — maling, snekkerarbeid, kjøkkenmontering og elektrisk arbeid.",
    },
  ],
};
