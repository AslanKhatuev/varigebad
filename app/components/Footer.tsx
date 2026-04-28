import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A3A4A] px-4 py-14 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-3 flex flex-col leading-none">
              <span className="text-[26px] font-light uppercase tracking-[0.12em] text-white">
                Varigebad
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.28em] text-[#4DAEC8]">
                Bad & flislegging
              </span>
            </div>
            <p className="mb-4 max-w-xs text-[14px] leading-relaxed text-white/60">
              Eksperter på baderomsoppussing, flislegging og rørleggerarbeid i
              Oslo-området.
            </p>
            <p className="text-[14px] text-white/60">Org.nr. 123 456 789</p>
            <a
              href="mailto:post@varigebad.no"
              className="block text-[14px] text-[#4DAEC8] hover:underline"
            >
              post@varigebad.no
            </a>
            <a
              href="tel:+4712345678"
              className="block text-[14px] text-[#4DAEC8] hover:underline"
            >
              123 45 678
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-white/40">
              Nyttige lenker
            </h4>
            <ul className="space-y-2">
              {[
                {
                  label: "Tjenester",
                  href: "/tjenester/totaloppussing-av-bad",
                },
                { label: "Referanser", href: "/referanser" },
                { label: "Blogg", href: "/blogg" },
                { label: "Om oss", href: "/om-oss" },
                { label: "Kontakt oss", href: "/kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white/60 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-white/40">
              Områder
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Oslo", href: "/omrader/oslo" },
                { label: "Akershus", href: "/omrader/akershus" },
                { label: "Oslo og omegn", href: "/omrader/oslo-og-omegn" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white/60 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-[13px] text-white/30">
            © {new Date().getFullYear()} Varige Bad AS · Alle rettigheter
            forbeholdt
          </p>
        </div>
      </div>
    </footer>
  );
}
