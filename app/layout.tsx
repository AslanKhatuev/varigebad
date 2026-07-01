import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollToTopButton from "./components/Scrolltotopbutton";

const BASE_URL = "https://www.varigebad.no";

export const metadata: Metadata = {
  // SEO: title og description er de to viktigste metadata-feltene.
  // title vises i Google-søkeresultater og nettleserfanen.
  // description vises som ingress under lenken i søkeresultater (ca. 150-160 tegn).
  title: {
    // default: vises på sider som ikke setter sin egen <title> (f.eks. 404)
    default: "Baderomsrenovering og våtrom i Oslo og Akershus | Varige Bad",
    // template: brukes av undersider som setter title via generateMetadata —
    // "%s" erstattes med sidens egen tittel, og " | Varige Bad" legges til automatisk.
    template: "%s | Varige Bad",
  },
  description:
    "Varige Bad AS leverer komplette baderomsrenoveringer og våtromsløsninger i Oslo og Akershus. Vi tilbyr totaloppussing av bad, rørleggerarbeid og flislegging — med høy kvalitet og forutsigbar fremdrift. Book gratis befaring i dag.",

  // SEO: keywords har begrenset direkte rangeringsverdi i Google, men
  // bidrar til konsistens og kan brukes av andre søkemotorer (Bing, DuckDuckGo).
  keywords: [
    "baderomsrenovering Oslo",
    "baderomsrenovering Akershus",
    "totaloppussing bad Oslo",
    "renovere våtrom Oslo",
    "våtromsentreprenør Oslo",
    "rørlegger Oslo",
    "flislegging Oslo",
    "baderomsrenovering Bærum",
    "baderomsrenovering Frogner",
    "baderomsrenovering Vestre Aker",
    "membran våtrom",
    "BVN TEK17 baderom",
    "gratis befaring bad Oslo",
    "Varige Bad",
    "våtromløsninger Oslo",
    "våtromsløsninger Akershus",
    "totalrenovering bad Oslo",
    "totalrenovering bad Akershus",
    "Oslo baderomsentreprenør",
    "Akershus baderomsentreprenør",
    "våtromløsninger Bærum",
    "våtromsløsninger Asker",
    "totalrenovering bad Sandvika",
    "totalrenovering bad Vinderen",
    "Bærum baderomsentreprenør",
    "Asker baderomsentreprenør",
  ],

  // SEO: canonical URL for forsiden — forteller Google hva som er
  // "riktig" versjon av siden og unngår duplicate content-problemer.
  alternates: {
    canonical: BASE_URL,
  },

  // Open Graph: brukes av Facebook, LinkedIn og andre sosiale plattformer
  // når siden deles — påvirker utseendet av delekortene.
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

  // Twitter Card: brukes av X (Twitter) når siden deles.
  twitter: {
    card: "summary_large_image",
    title: "Baderomsrenovering og våtrom i Oslo og Akershus | Varige Bad",
    description:
      "Komplette baderomsrenoveringer og våtromsløsninger i Oslo og Akershus. Book gratis befaring i dag.",
    images: [`${BASE_URL}/varigebad.jpg`],
  },

  // robots: forteller søkemotorer at siden skal indekseres og at lenker
  // skal følges. Dette er standard-oppførselen, men eksplisitt er bedre.
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

  // metadataBase: brukes av Next.js til å bygge absolutte URL-er for
  // Open Graph-bilder og andre metadata-felt som krever full URL.
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
