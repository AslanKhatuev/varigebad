import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Viderekoblinger fra gammel nettside (/nyheter) til ny (/blogg) ──
      // Den gamle siden kuttet slug-er ved 50 tegn, så hver artikkel
      // må mappes eksplisitt til sin nye adresse.
      // TODO: Erstatt NY-SLUG-... med faktisk slug fra den nye bloggen.

      {
        source: "/nyheter/montering-av-dusjkabinett-slik-gjor-fagfolk-det",
        destination: "/blogg/NY-SLUG-DUSJKABINETT",
        permanent: true,
      },
      {
        source: "/nyheter/derfor-skyldes-de-fleste-vannskader-feil-i-membran",
        destination: "/blogg/NY-SLUG-MEMBRAN",
        permanent: true,
      },
      {
        source: "/nyheter/hvorfor-du-bor-leie-inn-profesjonell-rorlegger-til",
        destination: "/blogg/NY-SLUG-RORLEGGER",
        permanent: true,
      },
      {
        source: "/nyheter/hva-koster-det-a-pusse-opp-bad-i-2025-oppdatert-gu",
        destination: "/blogg/NY-SLUG-PRISGUIDE",
        permanent: true,
      },

      // ── Oppsamling: alt annet under /nyheter → bloggforsiden ──
      // Fanger /nyheter og ukjente gamle adresser. Må stå sist.
      {
        source: "/nyheter/:path*",
        destination: "/blogg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
