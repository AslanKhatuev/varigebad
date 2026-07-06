import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Viderekoblinger fra gammel nettside (/nyheter) til ny (/blogg) ──

      {
        source: "/nyheter/derfor-skyldes-de-fleste-vannskader-feil-i-membran",
        destination: "/blogg/vannskader-feil-i-membranen",
        permanent: true,
      },
      {
        source: "/nyheter/hvorfor-du-bor-leie-inn-profesjonell-rorlegger-til",
        destination: "/blogg/leie-inn-profesjonell-rorlegger",
        permanent: true,
      },
      {
        source: "/nyheter/hva-koster-det-a-pusse-opp-bad-i-2025-oppdatert-gu",
        destination: "/blogg/hva-koster-det-a-pusse-opp-bad-i-2026",
        permanent: true,
      },

      // TODO: Dusjkabinett-artikkelen — legg inn når slug er bekreftet:
      // {
      //   source: "/nyheter/montering-av-dusjkabinett-slik-gjor-fagfolk-det",
      //   destination: "/blogg/<SLUG-FRA-BLOGGEN>",
      //   permanent: true,
      // },

      // ── Oppsamling: alt annet under /nyheter → bloggforsiden ──
      // Fanger /nyheter, dusjkabinett-artikkelen (inntil videre) og
      // eventuelle ukjente gamle adresser. Må stå sist.
      {
        source: "/nyheter/:path*",
        destination: "/blogg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
