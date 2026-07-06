// lib/faqData.ts
// Sentralisert FAQ-innhold — gjenbrukes på forsiden og tjenestesidene.
//
// SEO-prinsipp: Spørsmålene er formulert slik folk faktisk søker i Google
// (basert på Search Console-data), og svarene gir konkrete tall og fakta
// i stedet for "det varierer". Konkrete svar rangerer bedre og bygger tillit.
//
// ⚠️ VIKTIG: Prisspennene under er realistiske markedstall for Oslo/Akershus,
// men JUSTER DEM til deres faktiske priser før publisering. Ikke lov noe
// dere ikke kan holde.

import type { FaqItem } from "../app/components/Faq";

// Generelle spørsmål — vises på forsiden/landingssiden
export const generalFaq: FaqItem[] = [
  {
    question: "Hva koster det å pusse opp bad i Oslo?",
    answer:
      "En totaloppussing av et vanlig bad på 4–8 kvadratmeter i Oslo og Akershus lander som regel mellom 250 000 og 400 000 kroner, avhengig av størrelse, materialvalg og om røropplegget skal endres. Mindre overflateoppussinger kan koste vesentlig mindre. Vi tilbyr gratis og uforpliktende befaring der du får et konkret, fast pristilbud for ditt bad.",
  },
  {
    question: "Hvor lang tid tar det å pusse opp et bad?",
    answer:
      "En totalrenovering av et vanlig bad tar typisk 3–5 uker fra riving til ferdig bad. Små bad kan gå raskere, mens større bad eller endringer i planløsningen kan ta noe lenger tid. Du får en konkret fremdriftsplan etter befaring, slik at du vet nøyaktig hva du kan forvente.",
  },
  {
    question: "Hvilke områder dekker Varige Bad?",
    answer:
      "Vi jobber i hele Oslo, med spesielt mye erfaring fra vestkanten (Vestre Aker, Ullern, Frogner), og solid erfaring fra østkanten. Vi dekker også hele Akershus, inkludert Bærum, Asker, Lillestrøm og Lørenskog.",
  },
  {
    question: "Følger dere våtromsnormen og TEK17?",
    answer:
      "Ja, alt arbeid utføres i henhold til Byggebransjens våtromsnorm (BVN) og byggteknisk forskrift (TEK17). Du får full dokumentasjon på utført arbeid — viktig både for forsikringen og for verdien på boligen den dagen du skal selge.",
  },
  {
    question: "Får jeg én fast kontaktperson under prosjektet?",
    answer:
      "Ja, du får én prosjektleder som koordinerer alle faggrupper — rørlegger, elektriker, snekker og flislegger — slik at du slipper å koordinere selv. Én kontaktperson, ett ansvar, ingen overraskelser.",
  },
];

// Tjenestespesifikke spørsmål, nøkkel = samme slug som i app/tjenester/[slug]
export const serviceFaq: Record<string, FaqItem[]> = {
  "totaloppussing-av-bad": [
    {
      question: "Hva inkluderer en totaloppussing av bad?",
      answer:
        "En totaloppussing inkluderer riving av eksisterende bad, ny membran, flislegging, rørleggerarbeid, elektrisk arbeid og montering av ny innredning — alt koordinert av én prosjektleder. Du får også komplett dokumentasjon i henhold til våtromsnormen.",
    },
    {
      question: "Hva koster en totaloppussing av bad?",
      answer:
        "De fleste totaloppussinger vi utfører i Oslo og Akershus koster mellom 250 000 og 400 000 kroner for et bad på 4–8 kvadratmeter. Prisen avhenger av størrelse, materialvalg og om rør eller sluk skal flyttes. Etter gratis befaring får du et fast pristilbud uten skjulte kostnader.",
    },
    {
      question: "Kan jeg bo hjemme mens badet pusses opp?",
      answer:
        "Ja, de aller fleste bor hjemme under renoveringen. Har du kun ett bad, hjelper vi deg å planlegge slik at perioden uten dusj og toalett blir så kort som mulig. Vi informerer deg løpende om fremdriften og tilpasser arbeidstidene der det er mulig.",
    },
    {
      question: "Bør jeg velge dusjkabinett eller åpen dusjløsning?",
      answer:
        "Et dusjkabinett beskytter vegger og gulv ekstra godt mot vannsøl og er ofte det tryggeste valget i eldre bygg. En åpen, flislagt dusjsone gir et mer moderne uttrykk, men stiller høyere krav til membran og fall mot sluk. Vi hjelper deg å velge riktig løsning for ditt bad — og monterer begge deler fagmessig.",
    },
  ],
  flislegging: [
    {
      question: "Hva koster flislegging av bad?",
      answer:
        "Flislegging av bad koster typisk 1 500–2 500 kroner per kvadratmeter inkludert arbeid, avhengig av flisstørrelse, mønster og underlagets tilstand. Selve flisene kommer i tillegg og varierer fra ca. 200 til flere tusen kroner per kvadratmeter. Vi gir fast pris etter befaring.",
    },
    {
      question: "Hvilke rom kan dere flislegge?",
      answer:
        "Vi flislegger bad, kjøkken, gang, veranda og garasje. Vi hjelper deg også med å velge riktige fliser i ønsket størrelse og farge, og gir råd om hva som er praktisk og slitesterkt for hvert rom.",
    },
    {
      question: "Hvor viktig er underlaget før flislegging?",
      answer:
        "Underlaget er helt avgjørende for et varig resultat. På bad sørger vi for korrekt fall mot sluk og godkjent membran før flisene legges — det er dette som hindrer fuktskader og sikrer at forsikringen gjelder. Fliser lagt på dårlig underlag må ofte legges om etter få år.",
    },
  ],
  rorleggerarbeid: [
    {
      question: "Må jeg søke kommunen når jeg pusser opp badet?",
      answer:
        "Vanlig oppussing av eksisterende bad krever normalt ikke byggesøknad. Søknadsplikt utløses først ved større endringer, som å bygge nytt bad i et rom som ikke har vært våtrom, eller ved inngrep i bærende konstruksjoner. Vi vurderer dette på befaring og hjelper deg med nødvendig dokumentasjon der det er aktuelt.",
    },
    {
      question: "Hvorfor må rørleggerarbeid utføres av fagfolk?",
      answer:
        "Arbeid på vann- og avløpsrør skal utføres av godkjent rørlegger for at forsikringen skal gjelde ved en eventuell lekkasje. Feil på røropplegget er blant de dyreste skadene i norske boliger. Alt rørleggerarbeid hos oss dokumenteres, slik at du har papirene i orden ved salg og forsikringsoppgjør.",
    },
    {
      question: "Utfører dere akutte reparasjoner?",
      answer:
        "Vi utfører rørleggerarbeid i forbindelse med planlagte prosjekter og oppussing. Ta kontakt for å diskutere ditt konkrete behov, så finner vi ut om vi kan hjelpe deg.",
    },
  ],
  "innvendig-oppussing": [
    {
      question: "Kan dere hjelpe med hele leiligheten, ikke bare badet?",
      answer:
        "Ja, vi samarbeider med dyktige håndverkere innen flere fag og tilbyr et bredt utvalg av innvendig oppussing — maling, snekkerarbeid, kjøkkenmontering og elektrisk arbeid. Mange kunder velger å ta kjøkken eller gang samtidig med badet, siden håndverkerne allerede er på plass.",
    },
    {
      question: "Lønner det seg å pusse opp flere rom samtidig?",
      answer:
        "Som regel, ja. Rigging, tildekking og avfallshåndtering er kostnader som påløper uansett, så prisen per rom blir lavere når flere rom tas i samme prosjekt. Du slipper også å ha håndverkere i boligen i flere omganger.",
    },
  ],
};
