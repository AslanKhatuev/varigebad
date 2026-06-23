import type { Metadata } from "next";
import ReferanserClient from "../referanser/Referanserclient";

// ── SEO: metadata for <title>, meta description, Open Graph og Twitter cards ──
// Dette MÅ stå i en server component (app/referanser/page.tsx), ikke i en "use client"-fil,
// fordi Next.js sin metadata-API kun fungerer i server components.
export const metadata: Metadata = {
  title: "Referanser fra baderomsprosjekter i Oslo og Akershus | Varige Bad",
  description:
    "Se ekte bilder og kundehistorier fra baderomsprosjekter Varige Bad har gjennomført i Oslo og Akershus, med resultater fra Eilert Sundts gate, Eftasåsen og Vibes gate.",
  keywords: [
    "baderomsrenovering Oslo",
    "baderomsrenovering Akershus",
    "referanser baderom Oslo",
    "flislegging Oslo",
    "flislegging Akershus",
    "totalrenovering bad Oslo",
    "totaloppussing bad Akershus",
    "rørlegger baderom Oslo",
    "baderom entreprenør Oslo og Akershus",
    "Varige Bad prosjekter",
    "fliser og innredning bad Oslo",
    "renovere bad Bærum",
    "renovere bad Asker",
    "renovere bad Lillestrøm",
  ],
  alternates: {
    canonical: "https://www.varigebad.no/referanser",
  },
  openGraph: {
    title: "Referanser fra baderomsprosjekter i Oslo og Akershus | Varige Bad",
    description:
      "Et utvalg av fullførte baderomsprosjekter med kundehistorier og bilder fra Oslo og Akershus.",
    url: "https://www.varigebad.no/referanser",
    siteName: "Varige Bad",
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: "https://www.varigebad.no/eilert-sundts-gate1.webp",
        width: 1200,
        height: 1600,
        alt: "Renovert baderom på Eilert Sundts gate 51, utført av Varige Bad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Referanser fra baderomsprosjekter i Oslo og Akershus | Varige Bad",
    description:
      "Et utvalg av fullførte baderomsprosjekter med kundehistorier og bilder fra Oslo og Akershus.",
  },
};

export default function ReferanserPage() {
  return <ReferanserClient />;
}
