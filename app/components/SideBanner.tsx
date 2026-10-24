"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

// Faste kampanjebannere (video) i egne kolonner til venstre og høyre for
// innholdet. Bredden styres av CSS og skaleres etter skjermhøyden, slik at
// hele 320×1200-banneret alltid er synlig (ingen layout-hopp). Videoen lastes
// kun når kolonnene faktisk vises (lg og opp).
const BANNER_SRC = "/varigebad-sidebanner-320x1200-v2.mp4";
const BANNER_QUERY = "(min-width: 1024px)";

const HIDDEN_ON = ["/tjenester/fastprispakken", "/kontakt"];

function Banner({
  src,
  reduceMotion,
}: {
  src: string | null;
  reduceMotion: boolean;
}) {
  return (
    <aside
      aria-label="Kampanje"
      className="sticky top-[112px] hidden w-[min(320px,calc((100dvh-160px)*0.2667))] shrink-0 self-start py-6 lg:block"
    >
      <Link
        href="/tjenester/fastprispakken"
        aria-label="Fastprispakken – totalrenovering av bad fra 299 000 kr. Bestill gratis befaring"
        className="block aspect-[320/1200] w-full overflow-hidden rounded-2xl bg-white shadow-[0_16px_48px_-12px_rgba(16,24,40,0.35)] ring-1 ring-black/10"
      >
        {src && (
          <video
            key={src}
            src={src}
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="block h-full w-full object-cover"
          />
        )}
      </Link>
    </aside>
  );
}

export default function SideBanner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [src, setSrc] = useState<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia(BANNER_QUERY);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setSrc(wide.matches ? BANNER_SRC : null);
      setReduceMotion(motion.matches);
    };
    update();
    wide.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  if (HIDDEN_ON.some((p) => pathname.startsWith(p))) {
    return <>{children}</>;
  }

  return (
    <div className="lg:flex lg:gap-2 lg:px-4">
      <Banner src={src} reduceMotion={reduceMotion} />
      <div className="min-w-0 flex-1">{children}</div>
      <Banner src={src} reduceMotion={reduceMotion} />
    </div>
  );
}
