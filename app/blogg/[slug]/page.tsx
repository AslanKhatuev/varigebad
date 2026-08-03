// app/blogg/[slug]/page.tsx

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import {
  articles,
  estimateReadingMinutes,
  type ContentBlock,
} from "@/lib/articlesData";
import CtaSection from "@/app/components/Ctasection";

type Props = {
  params: Promise<{ slug: string }>;
};

// SEO: unik <title>, description, Open Graph, canonical per artikkel
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Artikkel ikke funnet | Varige Bad" };
  }

  const url = `https://www.varigebad.no/blogg/${slug}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: url,
    },

    authors: [
      {
        name: "Varige Bad AS",
        url: "https://www.varigebad.no",
      },
    ],

    creator: "Varige Bad AS",
    publisher: "Varige Bad AS",

    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      siteName: "Varige Bad",
      type: "article",
      locale: "nb_NO",
      publishedTime: article.publishedDate,
      images: [
        {
          url: `https://www.varigebad.no${article.image}`,
          width: 1200,
          height: 800,
          alt: article.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`https://www.varigebad.no${article.image}`],
    },
  };
}

// SEO: forhåndsgenererer statiske sider for hver artikkel ved build-time
export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// Renderer innholdsblokkene som semantisk, responsiv HTML.
// Alle tekststørrelser skalerer i minst to steg (mobil → sm),
// og lengre elementer (tabeller) håndterer overflow på smale skjermer.
function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={idx}
          className="mb-3 mt-7 text-[19px] font-semibold text-[#1A3A4A] sm:mb-4 sm:mt-10 sm:text-[24px]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={idx}
          className="mb-2.5 mt-5 text-[16px] font-semibold text-[#1A3A4A] sm:mb-3 sm:mt-8 sm:text-[19px]"
        >
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p
          key={idx}
          className="mb-4 text-[14px] leading-relaxed text-[#2A5A70] sm:text-[16px]"
        >
          {block.text}
        </p>
      );
    case "p-bold":
      return (
        <p
          key={idx}
          className="mb-4 text-[15px] font-semibold leading-relaxed text-[#1A3A4A] sm:text-[17px]"
        >
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} className="mb-4 space-y-2 pl-1">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-[13px] text-[#2A5A70] sm:text-[15px]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DAEC8]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "checklist":
      return (
        <ul key={idx} className="mb-4 space-y-2 pl-1">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-[13px] text-[#2A5A70] sm:text-[15px]"
            >
              <span className="shrink-0 text-[#4DAEC8]" aria-hidden="true">
                ✔
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      // Mobil: horisontal scroll i stedet for at tabellen klemmes sammen
      // eller går utenfor skjermen.
      return (
        <div
          key={idx}
          className="mb-5 overflow-x-auto rounded-xl border border-[#EDF8FC] sm:mb-6"
        >
          <table className="w-full min-w-[380px] text-left text-[12px] sm:min-w-[420px] sm:text-[14px]">
            <thead>
              <tr className="bg-[#EDF8FC]">
                <th
                  scope="col"
                  className="px-3 py-2.5 font-semibold text-[#1A3A4A] sm:px-4 sm:py-3"
                >
                  {block.headers[0]}
                </th>
                <th
                  scope="col"
                  className="px-3 py-2.5 font-semibold text-[#1A3A4A] sm:px-4 sm:py-3"
                >
                  {block.headers[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIdx) => (
                <tr
                  key={row.label}
                  className={rowIdx % 2 === 1 ? "bg-[#F5FBFD]" : ""}
                >
                  <td className="px-3 py-2.5 text-[#2A5A70] sm:px-4 sm:py-3">
                    {row.label}
                  </td>
                  <td className="px-3 py-2.5 font-medium text-[#1A3A4A] sm:px-4 sm:py-3">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="mb-5 border-l-4 border-[#4DAEC8] bg-[#F5FBFD] px-4 py-3.5 sm:mb-6 sm:px-5 sm:py-4"
        >
          <p className="mb-2 text-[13px] italic leading-relaxed text-[#2A5A70] sm:text-[15px]">
            &quot;{block.text}&quot;
          </p>
          <footer className="text-[12px] font-semibold text-[#1A3A4A] sm:text-[14px]">
            <cite className="not-italic">— {block.author}</cite>
          </footer>
        </blockquote>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const url = `https://www.varigebad.no/blogg/${slug}`;
  const minutes = estimateReadingMinutes(article);

  // SEO: BlogPosting-strukturert data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    image: `https://www.varigebad.no${article.image}`,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: {
      "@type": "Organization",
      name: "Varige Bad AS",
      url: "https://www.varigebad.no",
    },
    publisher: {
      "@type": "Organization",
      name: "Varige Bad AS",
      logo: {
        "@type": "ImageObject",
        url: "https://www.varigebad.no/varigebad.jpg",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  // SEO: brødsmuler hjelper Google forstå sidehierarkiet
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogg",
        item: "https://www.varigebad.no/blogg",
      },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <main className="bg-white text-[#1A3A4A]">
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="article-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Brødsmulesti — scroller horisontalt på smale skjermer i stedet for å brekke */}
      <nav
        aria-label="Brødsmulesti"
        className="px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8"
      >
        <ol className="mx-auto flex max-w-3xl items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[11px] text-[#2A5A70] sm:gap-2 sm:text-[13px]">
          <li>
            <Link href="/" className="hover:text-[#4DAEC8]">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blogg" className="hover:text-[#4DAEC8]">
              Blogg
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-[#1A3A4A]">
            {article.title}
          </li>
        </ol>
      </nav>

      <article className="px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blogg"
            className="mb-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#4DAEC8] hover:underline sm:mb-6 sm:text-[14px]"
          >
            ← Alle innlegg
          </Link>

          {/* SEO: eneste h1 på siden, unik per artikkel */}
          <h1 className="mb-4 text-[24px] font-bold leading-tight text-[#1A3A4A] sm:mb-6 sm:text-[34px] md:text-[40px]">
            {article.title}
          </h1>

          {/* Metadata-rad: dato + lesetid, responsiv */}
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[12px] text-[#9CC8D8] sm:mb-8 sm:text-[13px]">
            <time dateTime={article.publishedDate}>
              Publisert{" "}
              {new Date(article.publishedDate).toLocaleDateString("nb-NO", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{minutes} min lesetid</span>
          </div>

          <div className="group relative mb-6 h-[200px] overflow-hidden rounded-2xl bg-[#C8EAF5] sm:mb-8 sm:h-[320px] md:h-[420px]">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 768px, 1200px"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Artikkelinnhold — semantisk HTML bygget fra ContentBlock[] */}
          <div>
            {article.content.map((block, idx) => renderBlock(block, idx))}
          </div>
        </div>
      </article>

            <CtaSection />
    </main>
  );
}