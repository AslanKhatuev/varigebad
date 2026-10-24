# Rapport – endringer på varigebad.no

**Dato:** 24. oktober 2026
**Commits:** `fa20775`, `46354dc`, `99e334d` (pushet til `main`)

Rapporten dekker kun endringene som er pushet.

---

## 1. Ny side: Fastprispakken

Ny landingsside på `/tjenester/fastprispakken`, laget for trafikk fra Instagram-annonser.

- **Innhold:** totalrenovering av bad opptil 6 m² til fast pris 299 000 kr inkl. mva. Viser hva som er inkludert, hva som ikke er inkludert (fliser og innredning), et budsjetteksempel, ofte stilte spørsmål og knapper til gratis befaring.
- **Hero:** bakgrunnsbilde (`varigebad.png`) med mørk gradient og tekstskygge, slik at teksten er lett å lese. Priskortet ligger oppå bildet.
- **Meny:** lenken «Fastprispakken» ligger nederst i Tjenester-menyen.
- **Responsiv:** testet på mobil, nettbrett og PC.

### SEO

- Egen tittel og beskrivelse for Google, med søkeord og canonical-adresse.
- Strukturert data (JSON-LD): tjeneste med pris (299 000 NOK), brødsmulesti og spørsmål og svar.
- Delingsbilde (1200×630) for Instagram, Facebook og andre steder lenken deles.
- Siden er lagt til i `sitemap.xml`.

---

## 2. Ny header

Headeren er bygget om i pille-stil:

- Hvit, avrundet header på et blått felt (samme blåfarge som «Book gratis befaring»).
- Større og tydeligere logo (ny beskåret logofil).
- Nedtrekksmenyer med ikon og kort beskrivelse for hvert valg.
- Knappene «Kontakt oss» og «Book gratis befaring» til høyre.
- «Se alle tjenester» nederst i Tjenester-menyen.
- På mobil: ring-knapp og «Meny»-knapp som åpner menyen som et kort.

---

## 3. Sidebannere

Faste videobannere for Fastprispakken til venstre og høyre på alle sider (fra 1024 px skjermbredde).

- Bannerne står i egne kolonner og dekker ikke innhold.
- Blå video i nettsidens farger (`varigebad-sidebanner-320x1200-v2.mp4`).
- Størrelsen tilpasses skjermhøyden, slik at hele videoen alltid vises (opptil 320×1200).
- På mobil og nettbrett vises de ikke, og videoen lastes ikke ned.
- Skjules på Fastprispakken- og kontaktsiden.
- CTA-seksjonen («Klar for ditt eget baderomsprosjekt?») går i full bredde over bannerne.

---

## 4. Ny side: Tjenester

Ny oversiktsside på `/tjenester` som viser alle tjenestene. Siden fantes ikke før, selv om sitemap, brødsmulestien på tjenestesidene og forsidens «Se alle tjenester» lenket dit (ga feilside 404).

- **Innhold:** kort for alle fire tjenester, Fastprispakken, «Slik jobber vi» i fire steg, områder vi dekker, ofte stilte spørsmål og CTA.
- **SEO:** egen tittel og beskrivelse, canonical-adresse, delingsbilde og strukturert data (samleside, brødsmulesti og spørsmål og svar).
- **Intern lenking:** siden lenker til alle tjenestesidene, og menyen lenker til siden.

---

## 5. Rettelser

- **Mørk bakgrunn:** på datamaskiner med mørk modus ble bakgrunnen rundt innholdet svart. Nå er den alltid hvit.
- **Om oss:** bildet på siden dekket toppen av siden. Det ligger nå på riktig plass.
- **Til toppen-knappen:** vises nå kun på mobil og nettbrett.

---

## Testing

- Typesjekk, lint og produksjonsbygg gikk gjennom før hver push.
- Sidene er sjekket i nettleser på mobil (390 px), nettbrett (768–1023 px) og PC (1280–2560 px), uten feil i konsollen og uten sidelengs scrolling.
