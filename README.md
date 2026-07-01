# Varige Bad — Nettside

> Nettsiden for **Varige Bad AS**, en bedrift som spesialiserer seg på baderomsrenovering, våtromsløsninger, rørleggerarbeid og flislegging i Oslo og Akershus.

**Live:** [varigebad.no](https://www.varigebad.no)  
**Staging:** [varigebad.vercel.app](https://varigebad.vercel.app)  
**Utviklet av:** [SkyLine Interface](https://www.skylineinterface.no)

---

## Teknisk stack

| Teknologi | Versjon | Bruk |
|---|---|---|
| Next.js | 16.2.1 | Rammeverk (App Router) |
| TypeScript | Latest | Typesikkerhet |
| Tailwind CSS | Latest | Styling |
| Turbopack | Innebygd | Dev-server |

---

## Prosjektstruktur

varigebad/
├── app/
│   ├── blogg/
│   │   ├── page.tsx                  # Blogg-oversiktsside
│   │   └── [slug]/
│   │       └── page.tsx              # Dynamisk artikkelside
│   ├── components/
│   │   ├── Header.tsx                # Navigasjon med dropdown (desktop + mobil)
│   │   ├── Footer.tsx                # Footer med kontaktinfo, sosiale medier
│   │   ├── Hero.tsx                  # Video-hero med egne kontroller
│   │   ├── ServicesOverview.tsx      # Tjenestekort for landingssiden
│   │   ├── ProjectsCarousel.tsx      # Prosjektkort for landingssiden
│   │   ├── AreasOverview.tsx         # Geografisk dekning (Oslo/Akershus)
│   │   ├── TestimonialsSection.tsx   # Kundeomtaler
│   │   ├── CtaSection.tsx            # Call-to-action seksjon
│   │   ├── CtaBanner.tsx             # CTA-banner
│   │   ├── Faq.tsx                   # Gjenbrukbar FAQ-komponent (accordion)
│   │   └── ScrollToTopButton.tsx     # Global scroll-til-topp-knapp
│   ├── om-oss/
│   │   └── page.tsx
│   ├── referanser/
│   │   ├── page.tsx                  # Server component med metadata
│   │   └── ReferanserClient.tsx      # Lightbox + prosjektgalleri
│   ├── tjenester/
│   │   └── [slug]/
│   │       └── page.tsx              # Dynamiske tjenestesider
│   ├── omrader/
│   │   └── [slug]/
│   │       └── page.tsx              # Dynamiske områdesider
│   ├── kontakt/
│   │   └── page.tsx                  # Kontaktskjema (midl. deaktivert)
│   ├── personvern/
│   │   └── page.tsx
│   ├── vilkar/
│   │   └── page.tsx
│   ├── layout.tsx                    # Root layout (Header, Footer, ScrollToTopButton)
│   ├── page.tsx                      # Forside (samler alle seksjoner)
│   ├── sitemap.ts                    # Auto-generert sitemap.xml
│   └── robots.ts                     # Auto-generert robots.txt
├── lib/
│   ├── articlesData.ts               # Innhold for alle blogg-artikler
│   ├── Faqdata.ts                    # FAQ-innhold (generell + per tjeneste)
│   └── validering/
│       └── kontaktSkjema.ts          # Valideringslogikk for kontaktskjema
└── public/
    ├── varigebad.jpg                 # Logo (brukes også i structured data)
    ├── varigebad.mp4                 # Presentasjonsvideo (konvertert fra .MOV)
    ├── varigebad.MOV                 # Original video (Safari-fallback)
    ├── dusjkabin.jpg
    ├── pussebad.jpg
    ├── vannskade.jpg
    ├── rørlegger1.jpg
    ├── totaloppusing.jpg
    ├── Flislegger.webp
    ├── rørlegger.jpg
    ├── innvendig.jpg
    ├── omoss.png
    ├── eilert-sundts-gate1.webp
    ├── eilert-sundts-gate2.webp
    ├── eilert-sundts-gate3.webp
    ├── eftasasen1.jpg.webp
    ├── eftasasen2.jpg.webp
    ├── eftasasen3.jpg.webp
    ├── vibes1.jpg
    ├── vibes2.jpg
    └── vibes3.jpg

---

## Sider og ruter

| Rute | Beskrivelse |
|---|---|
| `/` | Forside |
| `/tjenester/totaloppussing-av-bad` | Totaloppussing av bad og våtrom |
| `/tjenester/flislegging` | Flislegging |
| `/tjenester/rorleggerarbeid` | Rørleggerarbeid |
| `/tjenester/innvendig-oppussing` | Innvendig oppussing |
| `/referanser` | Prosjektreferanser med lightbox |
| `/blogg` | Blogg-oversikt |
| `/blogg/montering-av-dusjkabinett` | Artikkel: montering av dusjkabinett |
| `/blogg/hva-koster-det-a-pusse-opp-bad-i-2026` | Artikkel: prisguide 2026 |
| `/blogg/vannskader-feil-i-membranen` | Artikkel: membran og vannskader |
| `/blogg/leie-inn-profesjonell-rorlegger` | Artikkel: profesjonell rørlegger |
| `/omrader/oslo` | Dekning: Oslo |
| `/omrader/akershus` | Dekning: Akershus |
| `/omrader/oslo-og-omegn` | Dekning: Oslo og omegn |
| `/kontakt` | Kontaktskjema (midlertidig stengt) |
| `/om-oss` | Om bedriften |
| `/personvern` | Personvernerklæring |
| `/vilkar` | Vilkår |

---

## Komme i gang (utvikling)

```bash
# Klon prosjektet
git clone https://github.com/aslankhatuev/varigebad.git
cd varigebad

# Installer avhengigheter
npm install

# Start dev-server
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

> **Tips:** Hvis endringer ikke vises, kjør `rm -rf .next` og start dev-serveren på nytt.

---

## Deploy

Prosjektet deployes automatisk via **GitHub → Vercel**:

- Push til `main`-branchen trigget automatisk et nytt bygg
- Live på [varigebad.no](https://www.varigebad.no) via DNS hos one.com

**Deployment-pipeline:**
GitHub (main) → Vercel (bygg + hosting) → one.com (DNS: varigebad.no)

### DNS-oppsett (one.com)

| Type | Name | Value |
|---|---|---|
| A | @ | 216.150.1.1 |
| CNAME | www | 706b2fb21f2ec5f0.vercel-dns-016.com |

---

## SEO

- **Strukturert data (JSON-LD):** `Organization`, `LocalBusiness`, `Service`, `BreadcrumbList`, `BlogPosting`, `ItemList`, `FAQPage` per side
- **Metadata:** unik `<title>`, `description`, `keywords`, Open Graph og Twitter Card per side
- **Sitemap:** auto-generert på `/sitemap.xml` via `app/sitemap.ts`
- **Robots:** konfigurert via `app/robots.ts`
- **Canonical URL-er:** satt per side for å unngå duplicate content

### Primære søkeord

`baderomsrenovering Oslo` · `renovere våtrom Oslo` · `baderomsrenovering Akershus` · `rørlegger Oslo` · `membran våtrom` · `flislegging Oslo`

---

## Legge til ny blogg-artikkel

Alle artikler ligger i `lib/articlesData.ts`. For å legge til en ny artikkel:

1. Åpne `lib/articlesData.ts`
2. Legg til et nytt objekt i `articles`-arrayen med disse feltene:

```typescript
{
  slug: "url-vennlig-tittel",
  title: "Artikkeltittel",
  excerpt: "Kort sammendrag (vises i listen)",
  image: "/filnavn-i-public.jpg",
  imageAlt: "Beskrivende alt-tekst",
  publishedDate: "2026-MM-DD",
  metaTitle: "SEO-tittel | Varige Bad",
  metaDescription: "SEO-beskrivelse, 150-160 tegn",
  keywords: ["søkeord 1", "søkeord 2"],
  content: [
    { type: "p", text: "Innledning..." },
    { type: "h2", text: "Overskrift" },
    { type: "ul", items: ["Punkt 1", "Punkt 2"] },
    // Se ContentBlock-typen for alle tilgjengelige blokker
  ],
}
```

**Tilgjengelige innholdsblokker:**

| Type | Beskrivelse |
|---|---|
| `h2` | Overskrift nivå 2 |
| `h3` | Overskrift nivå 3 |
| `p` | Avsnitt |
| `p-bold` | Uthevet avsnitt |
| `ul` | Punktliste |
| `checklist` | Liste med ✔-markering |
| `table` | Tabell med to kolonner |
| `quote` | Sitat med forfatter |

3.Legg til bildet i `public/`-mappen
4.`sitemap.ts` oppdateres automatisk

---

## Kontaktskjema

Kontaktskjemaet er for øyeblikket **midlertidig deaktivert** mens backend-integrasjonen ferdigstilles. Valideringslogikken er ferdig i `lib/validering/kontaktSkjema.ts` og er klar til å kobles til en backend-løsning (f.eks. Resend, Nodemailer, eller et Next.js API-endepunkt).

For å aktivere skjemaet igjen:
1.Erstatt innholdet i `app/kontakt/page.tsx` med den fullstendige skjema-versjonen
2. Implementer API-ruten for å sende e-post

---

## Bedriftsinformasjon

| | |
|---|---|
| **Bedrift** | Varige Bad AS |
| **Org.nr.** | 934 649 273 |
| **Adresse** | Lunden 35, 0598 Oslo |
| **Telefon** | +47 958 98 458 |
| **E-post** | <hawraz@varigebad.no> |
| **Instagram** | [@varigebad](https://www.instagram.com/varigebad/) |
| **TikTok** | [@varigebad](https://www.tiktok.com/@varigebad) |

---

## Utviklet av

**[SkyLine Interface](https://www.skylineinterface.no)**  
IT-firma spesialisert på moderne webløsninger.
