// app/blogg/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { articles, estimateReadingMinutes } from "@/lib/articlesdata";

export const metadata: Metadata = {
  title: "Blogg — guider om bad og våtrom i Oslo og Akershus | Varige Bad",
  description:
    "Praktiske guider og fagartikler om baderomsrenovering, våtrom, membran og rørleggerarbeid — skrevet av Varige Bads egne fagfolk i Oslo og Akershus.",
  keywords: [
    "blogg bad og våtrom",
    "guide baderomsrenovering",
    "fagartikler våtrom",
    "Varige Bad blogg",
    "baderomsguide Oslo",
    "baderomsguide Akershus",
    "rørlegger guide",
    "membran guide",
    "pris baderomsoppussing guide",
    "dusjkabinett guide",
  ],
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
  twitter: {
    card: "summary_large_image",
    title: "Blogg — guider om bad og våtrom | Varige Bad",
    description: "Praktiske guider og fagartikler fra Varige Bad.",
  },
};

export default function BloggPage() {
  const url = "https://www.varigebad.no/blogg";

  // SEO: Blog-strukturert data lister alle artikler, hjelper Google forstå
  // siden som en samling fagartikler fra samme utgiver.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Varige Bad Blogg",
    url,
    publisher: {
      "@type": "Organization",
      name: "Varige Bad AS",
      url: "https://www.varigebad.no",
    },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${url}/${a.slug}`,
      datePublished: a.publishedDate,
      image: `https://www.varigebad.no${a.image}`,
      author: { "@type": "Organization", name: "Varige Bad AS" },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hjem",
        item: "https://www.varigebad.no",
      },
      { "@type": "ListItem", position: 2, name: "Blogg", item: url },
    ],
  };

  return (
    <main className="bg-white text-[#1A3A4A]">
      <Script
        id="blogg-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="blogg-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Brødsmulesti — responsiv, scroller horisontalt på svært smale skjermer */}
      <nav
        aria-label="Brødsmulesti"
        className="px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8"
      >
        <ol className="mx-auto flex max-w-7xl items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[12px] text-[#2A5A70] sm:gap-2 sm:text-[13px]">
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

      {/* Hero — h1 skalerer i fire steg, samme mønster som andre [slug]-sider */}
      <section className="bg-[#EDF8FC] px-4 py-10 sm:px-6 sm:py-20 md:py-24 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 max-w-2xl text-[26px] font-light leading-tight text-[#1A3A4A] sm:mb-6 sm:text-[40px] md:text-[46px] lg:text-[52px]">
            Guider om bad og våtrom
          </h1>
          <p className="max-w-xl text-[14px] leading-relaxed text-[#2A5A70] sm:text-[17px]">
            Praktiske guider, prisoversikter og fagstoff fra våre egne fagfolk —
            for deg som skal pusse opp bad i Oslo eller Akershus. Her finner du
            svar på vanlige spørsmål om montering, kostnader, membran og
            rørleggerarbeid.
          </p>
        </div>
      </section>

      {/* Artikkelliste — fire responsive nivåer */}
      <section className="px-4 py-8 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-5xl">
          <ul className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            {articles.map((article) => {
              const minutes = estimateReadingMinutes(article);
              return (
                <li key={article.slug}>
                  <Link
                    href={`/blogg/${article.slug}`}
                    aria-label={`Les artikkelen: ${article.title}`}
                    className="group flex flex-col gap-3 rounded-2xl border border-[#EDF8FC] p-3 transition hover:border-[#B8E4F0] hover:shadow-sm sm:flex-row sm:gap-5 sm:p-4 md:gap-6"
                  >
                    <div className="h-[160px] w-full shrink-0 overflow-hidden rounded-xl bg-[#C8EAF5] sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[240px] lg:h-[170px] lg:w-[260px]">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-center py-1">
                      <div className="mb-1.5 flex flex-wrap items-center gap-2 text-[11px] font-medium text-[#4DAEC8] sm:text-[13px]">
                        <time dateTime={article.publishedDate}>
                          {new Date(article.publishedDate).toLocaleDateString(
                            "nb-NO",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </time>
                        <span aria-hidden="true">·</span>
                        <span>{minutes} min lesetid</span>
                      </div>
                      <h2 className="mb-1.5 text-[16px] font-semibold leading-tight text-[#1A3A4A] sm:mb-2 sm:text-[20px] md:text-[22px]">
                        {article.title}
                      </h2>
                      <p className="text-[13px] leading-relaxed text-[#2A5A70] sm:text-[15px]">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
