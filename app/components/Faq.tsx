"use client";

import { useState } from "react";
import Script from "next/script";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
  heading?: string;
  // SEO: unik id slik at JSON-LD ikke kolliderer hvis komponenten brukes flere ganger på samme side
  scriptId?: string;
};

export default function Faq({
  items,
  heading = "Ofte stilte spørsmål",
  scriptId = "faq-jsonld",
}: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  // SEO: FAQPage strukturert data — kan gi rich results (utvidbare spørsmål)
  // direkte i Googles søkeresultater.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8 xl:px-10"
    >
      <Script
        id={scriptId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="mb-6 text-[22px] font-light text-[#1A3A4A] sm:mb-8 sm:text-[28px] md:text-[32px]"
        >
          {heading}
        </h2>

        <div className="divide-y divide-[#B8E4F0]">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const answerId = `faq-answer-${idx}`;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left sm:py-5"
                >
                  <span className="text-[15px] font-medium text-[#1A3A4A] sm:text-[16px]">
                    {item.question}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                    className={`shrink-0 text-[#4DAEC8] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  id={answerId}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-4 sm:pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-[14px] leading-relaxed text-[#2A5A70] sm:text-[15px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
