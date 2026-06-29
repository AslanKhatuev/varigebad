// lib/articlesData.ts
// Sentralisert artikkelinnhold for /blogg-seksjonen.

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  publishedDate: string; // ISO-format
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  content: ContentBlock[];
};

export type TableRow = { label: string; value: string };

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "p-bold"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "table"; headers: [string, string]; rows: TableRow[] }
  | { type: "quote"; text: string; author: string };

export const articles: Article[] = [
  {
    slug: "montering-av-dusjkabinett",
    title: "Montering av dusjkabinett – slik gjør fagfolk det",
    excerpt:
      "Når vi monterer et dusjkabinett, følger vi faste rutiner for å sikre riktig oppbygging, tett tilkobling og korrekt fall på avløpet.",
    image: "/dusjkabin.jpg",
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
      "montering dusjkabinett pris",
      "dusjkabinett Akershus",
      "dusjkabinett Lillestrøm",
      "dusjkabinett Asker",
      "dusjkabinett Lørenskog",
      "dusjhjørne montering",
      "hjørnekabinett dusj",
      "dusjkabinett lekkasje",
      "skifte dusjkabinett",
      "rørlegger dusjkabinett",
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
      { type: "p", text: "Feil her kan føre til lekkasje og ujevn avrenning." },
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
  {
    slug: "hva-koster-det-a-pusse-opp-bad-i-2026",
    title: "Hva koster det å pusse opp bad i 2026? [Oppdatert guide]",
    excerpt:
      "Lurer du på hva det koster å pusse opp badet? Vi gir deg en oversikt over priser, hva som påvirker kostnaden, og risikoene ved å gjøre det selv.",
    image: "/pussebad.jpg",
    imageAlt: "Nyoppusset baderom med fliser og dusjsone, Varige Bad",
    publishedDate: "2026-01-20",
    metaTitle:
      "Hva koster det å pusse opp bad i 2026? [Oppdatert guide] | Varige Bad",
    metaDescription:
      "Oppdatert prisguide for baderomsoppussing i 2026 — se hva totalrenovering, delvis oppussing og gjør-det-selv koster, og hva som påvirker prisen.",
    keywords: [
      "pusse opp bad pris",
      "baderomsoppussing pris 2026",
      "hva koster nytt bad",
      "totaloppussing bad pris",
      "renovere bad selv pris",
      "pris baderomsrenovering Oslo",
      "pris baderomsrenovering Akershus",
      "kostnad nytt bad",
      "budsjett baderomsoppussing",
      "totalpris bad firma",
      "pusse opp bad Bærum",
      "pusse opp bad Lillestrøm",
      "gjør det selv bad risiko",
      "forsikring vannskade bad",
    ],
    content: [
      {
        type: "p",
        text: "Lurer du på hva det koster å pusse opp badet? Du er ikke alene. Prisene på oppussing av bad varierer mye, og det er store forskjeller på om du gjør det selv eller bruker et profesjonelt firma. I denne artikkelen gir vi deg en oversikt over priser, hva som påvirker kostnaden, og hvilke risikoer du bør være klar over – spesielt hvis du vurderer å gjøre det selv.",
      },
      { type: "h2", text: "Pris for å pusse opp bad – kort oppsummert" },
      {
        type: "table",
        headers: ["Type oppussing", "Ca. pris (2026)"],
        rows: [
          { label: "Totalrenovering med firma", value: "250.000–400.000 kr" },
          {
            label: "Delvis oppussing (f.eks. nytt gulv og møbler)",
            value: "100.000–200.000 kr",
          },
          {
            label: "Gjør det selv (materialkostnader)",
            value: "80.000–150.000 kr",
          },
        ],
      },
      {
        type: "p",
        text: "NB: Prisene varierer basert på størrelsen på badet, materialvalg, tekniske løsninger og hvor i landet du bor.",
      },
      { type: "h2", text: "Hva koster det å pusse opp bad selv?" },
      {
        type: "p",
        text: "Det er fullt mulig å gjøre deler av jobben selv – spesielt riving, maling eller montering av møbler. Da sparer du på arbeidstimer, men må fortsatt betale for:",
      },
      {
        type: "ul",
        items: [
          "Fliser, membran, varmekabler",
          "Rør og elektrisk utstyr",
          "Møbler, dusj, toalett, servant",
          "Leie av fagfolk (rørlegger og elektriker må alltid brukes!)",
        ],
      },
      { type: "h3", text: "Eksempel: DIY-budsjett" },
      {
        type: "p",
        text: "Et 5 m² bad med flis på vegg og gulv, varmekabler og ny innredning:",
      },
      {
        type: "ul",
        items: [
          "Materialer: ca. 100.000 kr",
          "Elektriker og rørlegger (minst): 30.000–50.000 kr",
          "Totalt: 130.000–150.000 kr",
        ],
      },
      {
        type: "p",
        text: "Men det forutsetter at du har god erfaring og tar deg god tid.",
      },
      { type: "h2", text: "Risiko ved å pusse opp badet selv" },
      { type: "p", text: "Et bad er et våtrom, og feil kan koste deg dyrt:" },
      { type: "h3", text: "Vanlige risikoer" },
      {
        type: "ul",
        items: [
          "Fukt- og vannskader pga. feil fall, mangelfull membran eller dårlige overganger",
          "Forsikringsproblemer – mange selskaper dekker ikke skader hvis jobben ikke er gjort fagmessig",
          "Lovpålagte krav – alt rør- og elektrisk arbeid må utføres av godkjente fagfolk",
          "Salg av bolig – dokumentasjon kreves, og mangler kan senke verdien eller stoppe salget",
        ],
      },
      {
        type: "p-bold",
        text: "Konklusjon: Du kan spare noe på å gjøre deler selv, men feil koster fort mye mer enn du sparer.",
      },
      { type: "h2", text: "Hva koster det å bruke profesjonelle?" },
      {
        type: "p",
        text: "Et seriøst firma tar ansvar for hele prosessen – fra riving til ferdigstillelse – og leverer dokumentasjon som kreves av både forsikring og ved boligsalg.",
      },
      { type: "p", text: "Typisk totalpris:" },
      {
        type: "ul",
        items: [
          "5–6 m² bad: 250.000–400.000 kr",
          "Inkluderer: rørlegger, elektriker, flislegger, membran, prosjektledelse, materialer (mellomklasse)",
        ],
      },
      { type: "p", text: "Fordeler:" },
      {
        type: "checklist",
        items: [
          "Riktig utført våtrom",
          "Dokumentasjon (FDV)",
          "Tidsbesparelse",
          "Trygghet ved videresalg og forsikring",
          "Høyere verdi på boligen",
        ],
      },
      { type: "h2", text: "Hva bestemmer prisen?" },
      { type: "p", text: "Disse faktorene påvirker prisen på badet:" },
      {
        type: "table",
        headers: ["Faktor", "Påvirkning på pris"],
        rows: [
          { label: "Størrelse på badet", value: "Jo større, jo dyrere" },
          {
            label: "Materialvalg (fliser, møbler)",
            value: "Billig eller eksklusivt",
          },
          {
            label: "Kompleksitet (innebygde løsninger, nisjer)",
            value: "Øker kostnad",
          },
          { label: "Endring av røropplegg", value: "Dyrt" },
          {
            label: "Tilstand på det gamle badet",
            value: "Dårlig tilstand = dyrere",
          },
          {
            label: "Tilgjengelighet og byggtekniske utfordringer",
            value: "Kan øke pris",
          },
        ],
      },
      { type: "h2", text: "Konklusjon" },
      {
        type: "p",
        text: "Det kan være fristende å spare penger ved å gjøre badet selv – men når det gjelder våtrom, er det ofte mer lønnsomt og tryggere å bruke fagfolk. Du sikrer deg godkjenninger, forsikringsdekning og verdiøkning på boligen – i tillegg til et bad du kan være stolt av.",
      },
      { type: "h2", text: "Vil du vite nøyaktig hva ditt bad vil koste?" },
      {
        type: "p",
        text: "Vi tilbyr gratis befaring og uforpliktende pristilbud i Oslo-området. Kontakt oss eller ring oss for et tilbud tilpasset ditt prosjekt.",
      },
    ],
  },
  {
    slug: "vannskader-feil-i-membranen",
    title: "Derfor skyldes de fleste vannskader feil i membranen",
    excerpt:
      "Det er membranen som i stor grad bestemmer om baderommet ditt holder tett. Vi forklarer hvorfor dette er den mest kritiske komponenten på badet.",
    image: "/vannskade.jpg",
    imageAlt: "Membranlegging på badegulv før flislegging, Varige Bad",
    publishedDate: "2026-02-02",
    metaTitle:
      "Derfor skyldes de fleste vannskader feil i membranen | Varige Bad",
    metaDescription:
      "Lær hvorfor feil eller mangelfull membran er hovedårsaken til vannskader på bad, og hva som skal til for å unngå dyre reparasjoner og forsikringsproblemer.",
    keywords: [
      "membran våtrom",
      "vannskade bad",
      "feil membran",
      "BVN membran",
      "fukt bad",
      "smøremembran",
      "banemembran",
      "membranlegging Oslo",
      "membranlegging Akershus",
      "godkjent membran våtrom",
      "SINTEF godkjent membran",
      "vanntett bad",
      "forsikring membranskade",
      "fuktskade baderom",
      "tetting sluk bad",
    ],
    content: [
      {
        type: "p-bold",
        text: "Det er membranen som i stor grad bestemmer om baderommet ditt holder tett.",
      },
      {
        type: "p",
        text: "Det viktigste på badet er ofte ikke det du ser med det blotte øye, men det som skjuler seg bak fliser og moderne innredning. Dessverre er det vanlig å oppdage dette først når skaden allerede har skjedd.",
      },
      {
        type: "p",
        text: "Membranen er selve nøkkelen til et vanntett baderom og regnes som en av de mest kritiske komponentene i oppbyggingen. Når du skal legge membran, bør du prioritere kvalitet fremfor å jakte på laveste pris – feil her kan koste dyrt i form av omfattende vannskader.",
      },
      {
        type: "p",
        text: "Her får du oversikten over det du bør vite før du legger membran på badet.",
      },
      { type: "h2", text: "Hvilken membran bør du velge?" },
      {
        type: "p",
        text: "Membran fungerer som en vanntett barriere – en form for fuktisolering som legges under eller bak flisene på badet. Hensikten er å hindre at vann trenger inn i vegger og gulv, og dermed beskytte mot fuktskader.",
      },
      {
        type: "p",
        text: "Det finnes hovedsakelig to typer membran: smøremembran og banemembran. Begge alternativene er godkjente løsninger, men hvilken type som velges, kan avhenge av håndverkerens preferanser eller spesifikke behov. Banemembran regnes ofte som mer slitesterk, og kan være en fordel dersom man på et senere tidspunkt trenger å skifte ut en flis – uten å risikere å skade membranen.",
      },
      {
        type: "p",
        text: "Det viktigste er at membranen du velger legges riktig og presist, og at den har SINTEF-godkjenning eller lignende, slik at du kan stole på kvaliteten.",
      },
      { type: "h2", text: "Derfor bør fagfolk legge membran" },
      {
        type: "p",
        text: "Å legge membran på baderommet er et omfattende arbeid, som krever både kompetanse og riktig verktøy. Membranen er et av de viktigste komponentene når du skal pusse opp eller bygge nytt baderom.",
      },
      {
        type: "quote",
        text: "Membran er et av de viktigste tettesjiktene i en bolig, så her er det viktig å være nøye med både underlaget, valg av membran og selve utførelsen. Det er viktig å jobbe etter våtromsnormen.",
        author: "Hawraz Shamal, daglig leder",
      },
      {
        type: "p",
        text: "Det anbefales å bruke fagfolk – egne membranleggere – til jobben.",
      },
      {
        type: "p",
        text: "Vi hjelper deg gjerne med å finne riktige fagfolk til jobben. Etter jobben er gjort, får du dokumentasjon på arbeidet slik at du har all nødvendig informasjon og garantier i ettertid.",
      },
      { type: "h2", text: "Slik kan dårlig membran føre til vannlekkasje" },
      {
        type: "p",
        text: "Selv om membranen i seg selv ikke aktivt skaper lekkasjer, er utett eller feilmontert membran en av de vanligste årsakene til vannskader på baderom. Dette skyldes som regel dårlig håndverk, eller at membranen har blitt skadet etter at den ble lagt.",
      },
      {
        type: "p",
        text: "Typiske feil kan være sprekker i membranen, for tynt påførte lag, dårlige overganger eller manglende tetting rundt sluket – for eksempel ved at klemringen ikke er riktig montert. Alle disse feilene kan føre til at vann trenger gjennom og forårsaker skade.",
      },
      {
        type: "p",
        text: "Det er viktig å huske at fliser og fuger i seg selv ikke er vanntette. Dersom membranen ikke er korrekt lagt, vil vann kunne trekke ned i konstruksjonen bak – særlig i eldre bygg der materialene kan bevege seg over tid. I slike tilfeller er et for tynt lag med smøremembran spesielt utsatt for sprekker.",
      },
      {
        type: "p",
        text: "En annen ting mange ikke er klar over, er at forsikringsselskaper ikke nødvendigvis dekker skader som skyldes utett membran. Derfor er det helt avgjørende å sikre at arbeidet utføres riktig – og dokumenteres.",
      },
      {
        type: "p",
        text: "Mange blir overrasket over å høre at forsikringsselskap ikke automatisk dekker vannskader ved utett membran.",
      },
      {
        type: "quote",
        text: "Hovedregelen er at forsikringsselskap utbetaler vannskade ved rørbrudd. Små og skjulte drypplekkasjer forårsaket av slitasje og dårlig vedlikehold dekkes som regel ikke, og skader på grunn av manglende eller dårlig membran dekkes ikke.",
        author: "Hawraz Shamal",
      },
    ],
  },
  {
    slug: "leie-inn-profesjonell-rorlegger",
    title:
      "Hvorfor du bør leie inn profesjonell rørlegger til ditt boligprosjekt",
    excerpt:
      "Rørleggerarbeid kan være komplekst, og små feil kan få store konsekvenser — både for funksjonalitet og forsikring. Se hvorfor fagfolk lønner seg.",
    image: "/rørlegger1.jpg",
    imageAlt: "Rørlegger som monterer rør og koblinger, Varige Bad",
    publishedDate: "2026-02-10",
    metaTitle:
      "Hvorfor du bør leie inn profesjonell rørlegger til ditt boligprosjekt | Varige Bad",
    metaDescription:
      "Se hvorfor det lønner seg å bruke en godkjent, profesjonell rørlegger i boligprosjektet ditt — for sikkerhet, dokumentasjon og varig kvalitet.",
    keywords: [
      "profesjonell rørlegger",
      "godkjent rørlegger Oslo",
      "rørlegger boligprosjekt",
      "rørlegger forsikring",
      "autorisert rørlegger",
      "rørlegger Akershus",
      "rørlegger Bærum",
      "rørlegger Lillestrøm",
      "rørlegger Asker",
      "rørlegger kjøkken",
      "rørlegger bad",
      "vannbåren varme rørlegger",
      "rørleggerarbeid pris",
      "rørlegger og flislegger",
    ],
    content: [
      {
        type: "p",
        text: "Enten du skal pusse opp badet, fornye kjøkkenet eller legge nytt røropplegg i boligen, er det viktig å bruke en autorisert rørlegger. Rørleggerarbeid kan være komplekst, og små feil kan få store konsekvenser – både for funksjonalitet og forsikring. Ved å bruke fagfolk sikrer du deg kvalitet, trygghet og et varig resultat.",
      },
      { type: "h2", text: "Dette kan en rørlegger hjelpe deg med" },
      { type: "h3", text: "Oppussing av bad og våtrom" },
      {
        type: "p",
        text: "Skal du fornye badet, er rørleggeren en av de viktigste fagpersonene i prosjektet. Alt fra flytting av sluk og vannrør til montering av dusj, toalett og servant krever nøyaktighet og kunnskap. I tillegg må arbeidet oppfylle gjeldende krav til våtromsnorm og dokumenteres skikkelig. En erfaren rørlegger sørger for dette – og samarbeider gjerne med andre fagfolk, som for eksempel Varige Bad, for å sikre en helhetlig og profesjonell løsning.",
      },
      { type: "h3", text: "Rør på kjøkkenet" },
      {
        type: "p",
        text: "Kjøkkenet er et annet rom hvor rørsystemet spiller en sentral rolle. Enten du skal montere ny oppvaskmaskin, flytte vasken eller bygge nytt kjøkken fra bunnen av, bør røropplegget planlegges nøye. Her er det fort gjort å undervurdere både kostnader og kompleksitet – men en dyktig rørlegger hjelper deg med å finne smarte og kostnadseffektive løsninger.",
      },
      { type: "h3", text: "Utskiftning og vedlikehold av rør" },
      {
        type: "p",
        text: "Eldre boliger har ofte gamle kobberrør eller soilrør som etter hvert må byttes ut. En rørlegger kan vurdere tilstanden og anbefale om det bør gjennomføres rehabilitering, eller om rørene fortsatt er i god stand. Ved å ta grep i tide, kan du unngå både vannskader og kostbare reparasjoner senere.",
      },
      { type: "h3", text: "Vannbåren varme og varmesystemer" },
      {
        type: "p",
        text: "Mange ønsker i dag mer energieffektive løsninger, som vannbåren gulvvarme eller varmepumpe med tilkobling til vannbårent anlegg. Dette krever både teknisk innsikt og presis installasjon, og her er en autorisert rørlegger helt avgjørende for å få systemet til å fungere optimalt.",
      },
      {
        type: "h2",
        text: "Rørlegger og flislegger i Oslo – det perfekte teamet",
      },
      {
        type: "p",
        text: "Ved renovering av bad og våtrom jobber rørleggeren ofte tett sammen med andre fagfolk – og her er flisleggeren en viktig samarbeidspartner. Mens rørleggeren sørger for funksjonalitet og sikkerhet i vann- og avløpssystemene, legger flisleggeren grunnlaget for det visuelle uttrykket og den vannbestandige overflaten. En profesjonell flislegger kjenner kravene til underlag, membran og flisformat, og leverer løsninger som varer.",
      },
      {
        type: "p",
        text: "Når disse to faggruppene samarbeider godt, får du et bad som ikke bare ser bra ut – men som også er bygget etter gjeldende forskrifter og med høy kvalitet i alle ledd.",
      },
      { type: "h2", text: "Oppsummering: Derfor bør du bruke fagfolk" },
      {
        type: "p",
        text: "Å bruke en erfaren rørlegger handler ikke bare om å få jobben gjort – det handler om trygghet, verdi og varighet. Du får:",
      },
      {
        type: "checklist",
        items: [
          "Arbeid utført i henhold til lovverk og våtromsnorm",
          "Dokumentasjon du trenger ved salg og forsikringsspørsmål",
          "Skreddersydde løsninger tilpasset boligen din",
          "Et samarbeid med andre fagfolk – som flislegger – for helhetlig resultat",
        ],
      },
      {
        type: "p",
        text: "Skal du i gang med rørarbeid i Oslo, enten det er på kjøkkenet, badet eller annet sted i boligen, anbefaler vi å ta kontakt med en profesjonell rørleggerbedrift. Vi hjelper deg gjerne!",
      },
    ],
  },
];

// SEO: brukes til lesetid-estimat på artikkelsiden. Teller alle "text"-felt
// i innholdsblokkene og deler på en gjennomsnittlig lesehastighet.
export function estimateReadingMinutes(article: Article): number {
  const words = article.content.reduce((count, block) => {
    if ("text" in block) return count + block.text.split(/\s+/).length;
    if ("items" in block)
      return count + block.items.join(" ").split(/\s+/).length;
    if ("rows" in block) {
      return (
        count +
        block.rows.reduce(
          (c, r) => c + (r.label + r.value).split(/\s+/).length,
          0
        )
      );
    }
    return count;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}
