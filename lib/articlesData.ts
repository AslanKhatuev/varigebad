// lib/articlesData.ts
// Sentralisert artikkelinnhold for /nyheter-seksjonen.

export type Article = {
  slug: string;
  title: string;
  excerpt: string; // kort sammendrag for oversiktssiden
  image: string;
  imageAlt: string;
  publishedDate: string; // ISO-format, brukes i strukturert data
  // SEO-metadata per artikkel
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  // Innholdsblokker — enkel struktur som lar oss bygge semantisk HTML
  // (h2/h3/p/ul) uten å måtte parse markdown.
  content: ContentBlock[];
};

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "p-bold"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "checklist"; items: string[] };

export const articles: Article[] = [
  {
    slug: "montering-av-dusjkabinett",
    title: "Montering av dusjkabinett – slik gjør fagfolk det",
    excerpt:
      "Når vi monterer et dusjkabinett, følger vi faste rutiner for å sikre riktig oppbygging, tett tilkobling og korrekt fall på avløpet.",
    image: "/dusjkabinett-montering.jpg",
    imageAlt: "Fagperson monterer dusjkabinett med verktøybelte, Varige Bad",
    publishedDate: "2026-01-15",
    metaTitle: "Montering av dusjkabinett – slik gjør fagfolk det | Varige Bad",
    metaDescription:
      "Lær hvordan fagfolk monterer dusjkabinett trinn for trinn, hva det koster, og hvorfor riktig montering er avgjørende for å unngå lekkasje og vannskader.",
    keywords: [
      "montering dusjkabinett",
      "dusjkabinett pris",
      "montere dusjkabinett selv",
      "dusjkabinett Oslo",
      "dusjkabinett Bærum",
      "fagmessig montering bad",
    ],
    content: [
      {
        type: "p-bold",
        text: "Når vi monterer et dusjkabinett, følger vi faste rutiner for å sikre riktig oppbygging, tett tilkobling og korrekt fall på avløpet.",
      },
      { type: "h2", text: "1. Forberedelse av underlaget" },
      { type: "p", text: "Vi sjekker:" },
      {
        type: "ul",
        items: [
          "Fall mot sluk",
          "Tilstand på eksisterende rør",
          "Om kabinettet passer plassen",
          "Om vann- og avløpstilkoblingene ligger riktig i forhold til kabinettet",
        ],
      },
      {
        type: "p",
        text: "Dette sikrer at dusjkabinettet monteres på et trygt og fagmessig grunnlag.",
      },
      { type: "h2", text: "2. Montering av kar / bunnpanne" },
      { type: "p", text: "Denne må stå:" },
      {
        type: "ul",
        items: ["Helt plant", "Stødig", "Riktig justert for avløp"],
      },
      {
        type: "p",
        text: "Feil her kan føre til lekkasje og ujevn avrenning.",
      },
      { type: "h2", text: "3. Oppbygging av vegger og dører" },
      { type: "p", text: "Det er viktig at glass og profiler monteres:" },
      {
        type: "ul",
        items: [
          "I vater",
          "Stramt, men ikke for hardt (for å unngå spenninger i glass)",
          "Med korrekt tetting i skjøter og hjørner",
        ],
      },
      { type: "h2", text: "4. Tilkobling av avløp" },
      {
        type: "p",
        text: "Dette er den vanligste feilkilden når folk gjør det selv.",
      },
      { type: "p", text: "Vi sjekker:" },
      {
        type: "ul",
        items: [
          "Tetthet",
          "Fall",
          "Riktig type avløpskobling",
          "At det ikke er risiko for tilbakeslag eller lekkasjer",
        ],
      },
      { type: "h2", text: "5. Tilkobling av vann og test av hele systemet" },
      { type: "p", text: "Til slutt tester vi:" },
      {
        type: "ul",
        items: [
          "Vanntrykk",
          "Alle skjøter",
          "Avløp",
          "Drenering i karet",
          "Om det oppstår lekkasje når dusjen brukes i full styrke",
        ],
      },
      {
        type: "p",
        text: "Kun når alt er 100 % tett og riktig montert, avslutter vi jobben.",
      },
      { type: "h2", text: "Hva koster montering av dusjkabinett?" },
      {
        type: "p",
        text: "Hos Varige Bad har vi en enkel, forutsigbar prisstruktur:",
      },
      {
        type: "checklist",
        items: ["Montering av dusjkabinett: 6 000 kr", "Transport: 1 000 kr"],
      },
      { type: "p-bold", text: "Totalpris: 7 000 kr" },
      { type: "p", text: "Dette inkluderer:" },
      {
        type: "ul",
        items: [
          "Demontering av gammelt kabinett (om ønskelig)",
          "Montering av nytt kabinett",
          "Justering, tetting og kontroll",
          "Avløpstilkobling",
          "Funksjonstest av hele kabinettet",
        ],
      },
      {
        type: "p",
        text: "Ingen skjulte kostnader. Ingen tillegg uten avtale.",
      },
      { type: "h2", text: "Vanlige spørsmål om montering av dusjkabinett" },
      { type: "h3", text: "Hvor lang tid tar montering av dusjkabinett?" },
      {
        type: "p",
        text: "Normalt tar jobben 1,5–3 timer, avhengig av type kabinett og tilstand på rørene.",
      },
      { type: "h3", text: "Kan jeg montere dusjkabinett selv?" },
      {
        type: "p",
        text: "Det kan du, men vi anbefaler det ikke. De vanligste problemene vi blir tilkalt for å rette er:",
      },
      {
        type: "ul",
        items: [
          "Lekkasje rundt avløp",
          "Feil i justering av kar",
          "Dårlig tetting i skjøter",
          "Dører som ikke går tett",
          "Manglende fall i avløpet",
        ],
      },
      {
        type: "p",
        text: "Feilmontering kan føre til kostbare vannskader – og kan også påvirke forsikringsdekning.",
      },
      { type: "h3", text: "Hvilket dusjkabinett bør jeg velge?" },
      { type: "p", text: "Dette avhenger av:" },
      {
        type: "ul",
        items: [
          "Plass",
          "Ønsket design",
          "Om du vil ha hjørnekabinett, buet kabinett, rett kabinett eller dusjhjørne",
          "Avløpets plassering",
          "Høyde på tak og rørføring",
        ],
      },
      { type: "p", text: "Vi hjelper deg gjerne med å velge riktig modell." },
      { type: "h3", text: "Monterer dere dusjkabinett i hele Oslo-området?" },
      { type: "p", text: "Ja – Varige Bad tilbyr montering i:" },
      {
        type: "ul",
        items: ["Oslo", "Viken", "Lillestrøm", "Bærum", "Follo", "Romerike"],
      },
      {
        type: "h2",
        text: "Hvorfor velge Varige Bad til montering av dusjkabinett?",
      },
      {
        type: "checklist",
        items: [
          "Vi er spesialister på bad og våtrom",
          "Mange års erfaring med montering av dusjkabinett",
          "Fast pris uten skjulte kostnader",
          "Rask levering og montering",
          "Fagmessig tilkobling av vann og avløp",
          "Trygghet og dokumentert kvalitet",
        ],
      },
      { type: "h2", text: "Trenger du montering av dusjkabinett?" },
      {
        type: "p",
        text: "Kontakt oss i dag for en avtale – vi hjelper deg med en trygg og profesjonell installasjon.",
      },
    ],
  },
];
