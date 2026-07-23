// components/PageHeader.tsx
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="pt-7 bg-white pl-7 pr-7">
    <div className="relative overflow-hidden bg-[#343434] py-20 md:py-28">
      
      {/* ---- BACKGROUND IMAGE (shared for all pages) ---- */}
      <div
        className="absolute inset-0 bg-[url('/assets/breadcrumb-bg.png')] bg-cover bg-center opacity-30 mix-blend-overlay"
        aria-hidden="true"
      ></div>

      {/* Optional dark overlay for better contrast (remove if not needed) */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* ---- CONTENT (title + breadcrumbs) ---- */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg tracking-tight">
          {title}
        </h1>

        <nav className="mt-4 flex items-center justify-center gap-2 text-sm md:text-base text-white/80">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-white/40" aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-white" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors duration-200">
                  {item.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
    </section>
  );
}