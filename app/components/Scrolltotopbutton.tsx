"use client";

import { useEffect, useState, useCallback } from "react";

// Global "scroll to top"-knapp. Vises etter at brukeren har scrollet et
// stykke ned på siden, og forsvinner igjen nær toppen.
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Viser knappen etter ca. én skjermhøyde med scroll
      setVisible(window.scrollY > 400);
    };

    onScroll(); // sjekk initial posisjon (f.eks. ved navigering med scroll bevart)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll til toppen av siden"
      // pointer-events-none når usynlig, slik at knappen ikke blokkerer
      // klikk på innhold bak den mens den er "borte" (opacity 0).
      // Posisjon, størrelse og avstand fra kanten skalerer i fire steg:
      // mobil → sm (tablet liggende/små nettbrett) → md → lg (desktop).
      className={`fixed bottom-4 right-3 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#4DAEC8] text-white shadow-[0_4px_16px_rgba(77,174,200,0.4)] transition-all duration-300 hover:bg-[#3A9AB5] sm:bottom-5 sm:right-5 sm:h-11 sm:w-11 md:bottom-6 md:right-6 md:h-12 md:w-12 lg:h-[52px] lg:w-[52px] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="sm:h-5 sm:w-5 md:h-[22px] md:w-[22px] lg:h-6 lg:w-6"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
