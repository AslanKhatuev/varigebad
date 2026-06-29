// app/blogg/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { articles } from "@/lib/articlesData";

export const metadata: Metadata = {
  title: "Blogg — guider om bad og våtrom | Varige Bad",
  description:
    "Praktiske guider og fagartikler om baderomsrenovering, våtrom og montering — skrevet av Varige Bads egne fagfolk i Oslo og Akershus.",
  alternates: {
    canonical: "https://www.varigebad.no/blogg",
  },
  openGraph: {
    title: "Blogg — guider om bad og våtrom | Varige Bad",
    description:
      "Praktiske guider og fagartikler om baderomsrenovering og våtrom fra Varige Bad.",
    url: "https://www.varigebad.no/blogg",
    siteName: "Varige Bad",
    type: "website",
    locale: "nb_NO",
  },
};

export default function BloggPage() {
  const url = "https://www.varigebad.no/blogg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Varige Bad Blogg",
    url,
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${url}/${a.slug}`,
      datePublished: a.publishedDate,
      image: `https://www.varigebad.no${a.image}`,
      author: {
        "@type": "Organization",
        name: "Varige Bad AS",
      },
    })),
  };

  return (
    <main className="bg-white text-[#1A3A4A]">
      <Script
        id="blogg-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav
        aria-label="Brødsmulesti"
        className="px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-[12px] text-[#2A5A70] sm:gap-2 sm:text-[13px]">
          <li>
            <Link href="/" className="hover:text-[#4DAEC8]">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-[#1A3A4A]">
            Blogg
          </li>
        </ol>
      </nav>

      <section className="bg-[#EDF8FC] px-4 py-12 sm:px-6 sm:py-20 md:py-24 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-5 max-w-2xl text-[28px] font-light leading-tight text-[#1A3A4A] sm:mb-6 sm:text-[40px] md:text-[46px] lg:text-[52px]">
            Guider om bad og våtrom
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#2A5A70] sm:text-[17px]">
            Praktiske guider, prisoversikter og fagstoff fra våre egne fagfolk —
            for deg som skal pusse opp bad i Oslo eller Akershus.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-5xl">
          <ul className="flex flex-col gap-6 sm:gap-8">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/blogg/${article.slug}`}
                  className="group flex flex-col gap-4 rounded-2xl border border-[#EDF8FC] p-3 transition hover:border-[#B8E4F0] hover:shadow-sm sm:flex-row sm:gap-6 sm:p-4"
                >
                  <div className="h-[180px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[150px] sm:w-[220px] md:h-[170px] md:w-[260px]">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center py-1">
                    <time
                      dateTime={article.publishedDate}
                      className="mb-1.5 text-[12px] font-medium text-[#4DAEC8] sm:text-[13px]"
                    >
                      {new Date(article.publishedDate).toLocaleDateString(
                        "nb-NO",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </time>
                    <h2 className="mb-2 text-[18px] font-semibold leading-tight text-[#1A3A4A] sm:text-[20px] md:text-[22px]">
                      {article.title}
                    </h2>
                    <p className="text-[14px] leading-relaxed text-[#2A5A70] sm:text-[15px]">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
