'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    href: '/articles/striking-accord',
    categoryHref: '/category/violence',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop',
    alt: 'Divorce using the same lawyer',
    badge: 'Violence',
    date: '09 Jan 2023',
    title: 'Striking Accord? Divorce using the same lawyer',
  },
  {
    id: 2,
    href: '/articles/real-estate',
    categoryHref: '/category/real-estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop',
    alt: 'Real Estate',
    badge: 'Real Estate',
    date: '09 Jan 2023',
    title: 'Real Estate',
  },
  {
    id: 3,
    href: '/articles/business-risks',
    categoryHref: '/category/business',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=900&auto=format&fit=crop',
    alt: 'Business risks and how they paid off',
    badge: 'Business',
    date: '09 Jan 2023',
    title: 'Business risks and how they paid off',
  },
];

export default function LatestArticles() {
  return (
    <section className="bg-white px-6 py-[60px] md:py-20">
      <div className="max-w-[1300px] mx-auto">
        {/* Heading */}
        <motion.h1
          className="font-['Playfair_Display'] font-extrabold text-[clamp(38px,5vw,56px)] text-center mb-6 bg-gradient-to-r from-[#3d4f7a] via-[#3d4f7a] via-40% to-[#d3a542] to-75% bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest Article
        </motion.h1>

        {/* Lede */}
        <p className="max-w-[820px] mx-auto text-center text-[17px] leading-[1.85] text-[#3a3f4a] mb-[50px]">
          Every effort is made to ensure that the information presented at Legally Flawless is accurate and correct. However, Legally Flawless disclaims all liability for any mistakes made whether intentionally or unintentionally. Users are encouraged to independently verify the facts.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="relative rounded-lg overflow-hidden aspect-[4/5] max-md:aspect-[16/11] bg-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image (no zoom on hover) */}
              <Image
                src={article.image}
                alt={article.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={article.id === 1}
              />

              {/* Gradient overlay – always present */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Badge – hover effect: bg #3d4f7a, text white */}
              <Link
                href={article.categoryHref}
                className="absolute top-5 right-5 z-10 bg-[#d3a542] text-[#3d4f7a] text-[13.5px] font-bold px-[18px] py-[7px] rounded-md transition-colors duration-200 hover:bg-[#3d4f7a] hover:text-white"
              >
                {article.badge}
              </Link>

              {/* Content – date + linked title */}
              <div className="absolute bottom-[22px] left-5 right-5 z-10">
                <span className="block text-[#d3a542] text-sm font-semibold mb-2">
                  {article.date}
                </span>
                <Link
                  href={article.href}
                  className="font-['Playfair_Display'] font-bold text-[21px] leading-[1.35] text-[#4d6fb0] hover:text-[#3d5a9a] transition-colors duration-200 block"
                >
                  {article.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}