import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollToTopButton from "./components/Scrolltotopbutton";

const BASE_URL = "https://www.varigebad.no";
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Varige Bad AS",
  alternateName: "Varige Bad",
  url: BASE_URL,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Varige Bad AS",
  url: BASE_URL,
  image: `${BASE_URL}/varigebad.jpg`,
  description:
    "Komplette baderomsrenoveringer og våtromsløsninger i Oslo og Akershus. Totaloppussing av bad, rørleggerarbeid og flislegging etter BVN og TEK17.",
  telephone: "+47 958 98 458",
  email: "hawraz@varigebad.no",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lunden 35",
    postalCode: "0598",
    addressLocality: "Oslo",
    addressCountry: "NO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Oslo" },
    { "@type": "AdministrativeArea", name: "Akershus" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Baderomsrenovering og våtrom i Oslo og Akershus | Varige Bad",
    template: "%s | Varige Bad",
  },
  description:
    "Varige Bad AS leverer komplette baderomsrenoveringer og våtromsløsninger i Oslo og Akershus. Vi tilbyr totaloppussing av bad, rørleggerarbeid og flislegging — med høy kvalitet og forutsigbar fremdrift. Book gratis befaring i dag.",


  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: BASE_URL,
    siteName: "Varige Bad AS",
    title: "Baderomsrenovering og våtrom i Oslo og Akershus | Varige Bad",
    description:
      "Varige Bad AS leverer komplette baderomsrenoveringer og våtromsløsninger i Oslo og Akershus. Book gratis befaring i dag.",
    images: [
      {
        url: `${BASE_URL}/varigebad.jpg`,
        width: 1200,
        height: 630,
        alt: "Varige Bad AS — Baderomsrenovering og våtrom i Oslo og Akershus",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Header />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canonical per side — legg dette i hver side/route i stedet for i layout:
//
// I app/page.tsx (forsiden):
//   export const metadata: Metadata = {
//     alternates: { canonical: "https://www.varigebad.no" },
//   };
//
// I app/blogg/[slug]/page.tsx (i generateMetadata):
//   alternates: { canonical: `https://www.varigebad.no/blogg/${slug}` },
//
// I app/tjenester/[slug]/page.tsx (i generateMetadata):
//   alternates: { canonical: `https://www.varigebad.no/tjenester/${slug}` },
//
// Med metadataBase satt (som over) kan du også bruke relative stier:
//   alternates: { canonical: `/blogg/${slug}` },
// ─────────────────────────────────────────────────────────────────────────────
