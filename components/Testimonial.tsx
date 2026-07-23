"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: "01",
    name: "Anil Kumar",
    role: "Crime Case",
    quote:
      "A firm you can rely on for legal solutions. Kjuris Law provided me with sound, clear and practical legal advice. I'm grateful for your passion, dedication and professionalism. Would definitely recommend them for any legal solutions.",
    image:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    name: "Priya Sharma",
    role: "Corporate Case",
    quote:
      "Professional, prompt and precise. The team walked me through every step of a complex corporate dispute and made sure I understood my options. Their guidance made a stressful situation feel manageable.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    name: "Rohan Mehta",
    role: "Family Case",
    quote:
      "Compassionate yet sharp. They handled a sensitive family matter with the right balance of empathy and legal rigor. I always felt heard, and the outcome exceeded my expectations.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const total = testimonials.length;
  const current = testimonials[index];

  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setIndex((prev) => (prev + 1) % total);

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-[42px] font-extrabold mb-4 tracking-tight">
            <span className="text-[#1f3a5f]">Testi</span>
            <span className="text-[#d9a441]">monial</span>
          </h2>
          <p className="text-[15px] md:text-[15.5px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            Legal professionals, students, and yes, you too can voice your
            opinion on any point of law.
          </p>
        </div>

        {/* Card row */}
        <div className="relative flex flex-col md:flex-row md:items-center">
          {/* Photo */}
          <div className="relative w-full md:w-[440px] h-[380px] md:h-[440px] flex-shrink-0 rounded-md overflow-hidden shadow-xl">
            <Image
              src={current.image}
              alt={current.name}
              fill
              sizes="(max-width: 768px) 100vw, 440px"
              className="object-cover"
              priority
            />

            {/* gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 py-6">
              <div>
                <p className="font-serif text-xl md:text-2xl font-bold text-white leading-tight">
                  {current.name}
                </p>
                <p className="text-xs md:text-sm font-semibold text-[#d9a441]">
                  {current.role}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-[#d9a441] text-[#d9a441] flex items-center justify-center text-sm transition-colors hover:bg-[#d9a441] hover:text-white"
                >
                  &#8592;
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full border border-[#d9a441] text-[#d9a441] flex items-center justify-center text-sm transition-colors hover:bg-[#d9a441] hover:text-white"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>

          {/* Quote card */}
          <div className="relative bg-white rounded-md shadow-2xl px-8 py-10 md:px-12 md:py-11 flex-1 md:-ml-24 mt-[-2.5rem] md:mt-0 mx-4 md:mx-0 z-10">
            <span className="pointer-events-none select-none absolute top-1 left-4 font-serif text-7xl md:text-8xl text-slate-100 leading-none">
              &#8220;
            </span>

            <p className="relative z-10 text-[15px] md:text-[15.5px] leading-loose text-slate-500">
              {current.quote}
            </p>

            <span className="pointer-events-none select-none absolute bottom-4 right-8 font-serif text-4xl md:text-5xl font-bold text-amber-50">
              {current.id}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
