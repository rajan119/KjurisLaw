"use client";

import React, { useState } from "react";

/**
 * LatestArticles
 * Functional Next.js + Tailwind CSS carousel matching the provided screenshot:
 * "Latest Article" label, heading, 3-up article cards with image + dark
 * gradient overlay, category badge, date, title link, and dot pagination
 * that actually navigates between slides.
 *
 * Usage:
 *   import LatestArticles from "@/components/LatestArticles";
 *   <LatestArticles />
 *
 * Notes:
 * - Replace the `image` URLs in `articleGroups` with your own CDN/asset paths.
 * - Each dot = one group of 3 cards. Add/remove groups to change slide count.
 * - Card link uses <a href="..."> — swap for Next's <Link> if you prefer.
 */

interface Article {
  image: string;
  category: string;
  date: string;
  title: string;
  href: string;
}

const ACCENT = "text-[#E0A63A]";

const articleGroups: Article[][] = [
  [
    {
      image:
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=800&auto=format&fit=crop",
      category: "Violence",
      date: "09 June 2023",
      title: "Striking Accord? Divorce using the same lawyer",
      href: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
      category: "Violence",
      date: "09 June 2023",
      title: "Real Estate",
      href: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
      category: "Violence",
      date: "09 June 2023",
      title: "Business risks and how they paid off",
      href: "#",
    },
  ],
  [
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
      category: "Property",
      date: "14 July 2023",
      title: "Commercial leasing traps to avoid",
      href: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
      category: "Corporate",
      date: "02 August 2023",
      title: "Mergers that reshaped the industry",
      href: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1450101215322-9a4b6839b620?q=80&w=800&auto=format&fit=crop",
      category: "Litigation",
      date: "21 August 2023",
      title: "Winning arguments in appellate court",
      href: "#",
    },
  ],
  [
    {
      image:
        "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=800&auto=format&fit=crop",
      category: "Contracts",
      date: "05 September 2023",
      title: "Drafting clauses that actually protect you",
      href: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
      category: "Family Law",
      date: "18 September 2023",
      title: "Custody arrangements explained",
      href: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=800&auto=format&fit=crop",
      category: "Tax",
      date: "30 September 2023",
      title: "Year-end tax planning for founders",
      href: "#",
    },
  ],
  [
    {
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800&auto=format&fit=crop",
      category: "Employment",
      date: "12 October 2023",
      title: "Wrongful termination: know your rights",
      href: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop",
      category: "IP",
      date: "27 October 2023",
      title: "Protecting your brand across borders",
      href: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      category: "Startups",
      date: "09 November 2023",
      title: "Term sheets, decoded",
      href: "#",
    },
  ],
];

function ArticleCard({ article }: { article: Article }) {
  return (
   
    <a
      href={article.href}
      className="relative block h-[360px] overflow-hidden group"
    >
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

      <span className="absolute top-4 right-4 bg-[#E0A63A] text-blue-800 text-xs font-semibold px-3 py-1">
        {article.category}
      </span>

      <div className="absolute bottom-5 left-5 right-5">
        <p className={`text-sm font-semibold mb-1 ${ACCENT}`}>{article.date}</p>
        <p className="text-blue-300 font-serif font-bold text-lg leading-snug hover:text-blue-200 transition">
          {article.title}
        </p>
      </div>
    </a>
  );
}

export default function LatestArticles() {
  const [slide, setSlide] = useState(0);

  return (
     <section className="bg-white">
    <section className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-3">
        <span className={`uppercase text-sm font-semibold tracking-wide ${ACCENT}`}>
          Latest Article
        </span>
        <div className="w-9 border-b-2 border-[#E0A63A] mt-1" />
      </div>

      <h2 className="font-serif text-slate-800 text-3xl md:text-[34px] font-bold leading-snug mb-8 max-w-2xl">
        Find The Most Exiting Case Histories In Our Articles.
      </h2>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {articleGroups.map((group, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 shrink-0 w-full"
            >
              {group.map((article, j) => (
                <ArticleCard key={j} article={article} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dot pagination */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {articleGroups.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setSlide(i)}
            className={`w-3 h-3 rounded-full border transition ${
              slide === i
                ? "bg-[#E0A63A] border-[#E0A63A]"
                : "bg-white border-gray-300 hover:border-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
    </section>
  );
}