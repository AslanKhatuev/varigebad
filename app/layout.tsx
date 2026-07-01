import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollToTopButton from "./components/Scrolltotopbutton";

const BASE_URL = "https://www.varigebad.no";

// Alle 15 bydeler i Oslo
const OSLO_BYDELER = [
  "Vestre Aker",
  "Ullern",
  "Frogner",
  "St. Hanshaugen",
  "Sagene",
  "Grünerløkka",
  "Gamle Oslo",
  "Nordstrand",
  "Søndre Nordstrand",
  "Østensjø",
  "Alna",
  "Grorud",
  "Stovner",
  "Bjerke",
  "Nordre Aker",
];

// Alle 21 kommuner i Akershus (offisiell liste per 2024, kilde: SSB/norgeskommuner.no)
const AKERSHUS_KOMMUNER = [
  "Asker",
  "Aurskog-Høland",
  "Bærum",
  "Eidsvoll",
  "Enebakk",
  "Frogn",
  "Gjerdrum",
  "Hurdal",
  "Jevnaker",
  "Lillestrøm",
  "Lunner",
  "Lørenskog",
  "Nannestad",
  "Nes",
  "Nesodden",
  "Nittedal",
  "Nordre Follo",
  "Rælingen",
  "Ullensaker",
  "Vestby",
  "Ås",
];

// Kjente tettsteder
const TETTSTEDER = [
  // Oslo
  "Sandvika",
  "Bekkestua",
  "Lysaker",
  "Fornebu",
  "Vinderen",
  "Røa",
  "Majorstuen",
  "Torshov",
  "Holmenkollen",
  "Jar",
  "Stabekk",
  // Romerike
  "Strømmen",
  "Jessheim",
  "Kjeller",
  "Sørumsand",
  "Fet",
  // Follo
  "Kolbotn",
  "Ski sentrum",
  "Ås sentrum",
  "Drøbak",
  "Son",
  "Vinterbro",
  // Nesodden
  "Nesoddtangen",
];

// Genererer nøkkelord for en liste med steder og et søkeord
function generer(steder: string[], soekeord: string): string[] {
  return steder.map((sted) => `${soekeord} ${sted}`);
}

export const metadata: Metadata = {
  title: {
    default: "Baderomsrenovering og våtrom i Oslo og Akershus | Varige Bad",
    template: "%s | Varige Bad",
  },
  description:
    "Varige Bad AS leverer komplette baderomsrenoveringer og våtromsløsninger i Oslo og Akershus. Vi tilbyr totaloppussing av bad, rørleggerarbeid og flislegging — med høy kvalitet og forutsigbar fremdrift. Book gratis befaring i dag.",

  keywords: [
    // ── Generelle hovedsøkeord ───────────────────────────────────────────────
    "baderomsrenovering Oslo",
    "baderomsrenovering Akershus",
    "totalrenovering bad Oslo",
    "totalrenovering bad Akershus",
    "renovere våtrom Oslo",
    "våtromsentreprenør Oslo",
    "rørlegger Oslo",
    "flislegging Oslo",
    "membran våtrom",
    "BVN TEK17 baderom",
    "gratis befaring bad Oslo",
    "Varige Bad",
    "baderomsentreprenør Oslo",
    "baderomsentreprenør Akershus",
    "totaloppussing bad Oslo",

    // ── Oslo bydeler × baderomsrenovering ────────────────────────────────────
    ...generer(OSLO_BYDELER, "baderomsrenovering"),

    // ── Oslo bydeler × totalrenovering av bad ────────────────────────────────
    ...generer(OSLO_BYDELER, "totalrenovering av bad"),

    // ── Oslo bydeler × våtrom ────────────────────────────────────────────────
    ...generer(OSLO_BYDELER, "våtrom"),

    // ── Oslo bydeler × flislegging ───────────────────────────────────────────
    ...generer(OSLO_BYDELER, "flislegging"),

    // ── Oslo bydeler × rørlegger ─────────────────────────────────────────────
    ...generer(OSLO_BYDELER, "rørlegger"),

    // ── Akershus kommuner × baderomsrenovering ───────────────────────────────
    ...generer(AKERSHUS_KOMMUNER, "baderomsrenovering"),

    // ── Akershus kommuner × totalrenovering av bad ───────────────────────────
    ...generer(AKERSHUS_KOMMUNER, "totalrenovering av bad"),

    // ── Akershus kommuner × våtrom ───────────────────────────────────────────
    ...generer(AKERSHUS_KOMMUNER, "våtrom"),

    // ── Akershus kommuner × flislegging ─────────────────────────────────────
    ...generer(AKERSHUS_KOMMUNER, "flislegging"),

    // ── Akershus kommuner × rørlegger ────────────────────────────────────────
    ...generer(AKERSHUS_KOMMUNER, "rørlegger"),

    // ── Tettsteder × baderomsrenovering ─────────────────────────────────────
    ...generer(TETTSTEDER, "baderomsrenovering"),

    // ── Tettsteder × totalrenovering av bad ──────────────────────────────────
    ...generer(TETTSTEDER, "totalrenovering av bad"),
  ],

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: BASE_URL,
    siteName: "Varige Bad",
    title: "Baderomsrenovering og våtrom i Oslo og Akershus | Varige Bad",
    description:
      "Varige Bad AS leverer komplette baderomsrenoveringer og våtromsløsninger i Oslo og Akershus. Book gratis befaring i dag.",
    images: [
      {
        url: `${BASE_URL}/varigebad.jpg`,
        width: 1200,
        height: 630,
        alt: "Varige Bad — Baderomsrenovering og våtrom i Oslo og Akershus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Baderomsrenovering og våtrom i Oslo og Akershus | Varige Bad",
    description:
      "Komplette baderomsrenoveringer og våtromsløsninger i Oslo og Akershus. Book gratis befaring i dag.",
    images: [`${BASE_URL}/varigebad.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="bg-white text-neutral-900 antialiased">
        <Header />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
