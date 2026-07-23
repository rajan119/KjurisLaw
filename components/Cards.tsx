'use client';

import { motion } from 'framer-motion';

export default function StatsBar() {
  const stats = [
    {
      value: "150",
      label: "Expert Attorneys",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="12" cy="7" r="3.5" />
          <path d="M5.5 21v-2a5 5 0 015-5h3a5 5 0 015 5v2" />
        </svg>
      ),
    },
    {
      value: "250",
      label: "Happy Client",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M20.8 4.6a5 5 0 00-7.07 0L12 5.34l-1.73-.74a5 5 0 00-7.07 7.07L12 20.34l8.8-8.67a5 5 0 000-7.07z" />
        </svg>
      ),
    },
    {
      value: "330",
      label: "Case Complete",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="3" y="4" width="18" height="17" rx="2.5" />
          <path d="M3 9h18M8 2v4M16 2v4" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      ),
    },
    {
      value: "28",
      label: "Case Closed",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M8 21h8M12 17v4" />
          <path d="M7 4h10v5a5 5 0 01-10 0V4z" />
          <path d="M7 6H4a3 3 0 003 3M17 6h3a3 3 0 01-3 3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white px-5 py-20">
      <div
        style={{ boxShadow: "0 25px 50px -15px rgba(42,67,116,0.45)" }}
        className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-0 sm:rounded-[26px] sm:overflow-hidden"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            style={{ backgroundColor: "#2f4a80" }}
            className={`
              text-center px-5 py-10 sm:py-[55px] relative rounded-2xl sm:rounded-none 
              overflow-hidden cursor-default transition-transform duration-300 hover:-translate-y-1
              ${i !== 0 ? "sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:top-2 sm:before:bottom-2 sm:before:w-px sm:before:bg-white/15" : ""}
            `}
            whileHover="hover"
            initial="initial"
          >
            {/* Overlay – slides from left, covers full height & width */}
            <motion.div
              className="absolute inset-0 bg-black/20"
              variants={{
                initial: { width: 0, left: 0, right: 'auto' },
                hover: { width: '100%' },
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div style={{ color: "#d3a24d" }} className="w-14 h-14 mx-auto mb-[22px]">
                {stat.icon}
              </div>
              <div className="text-[40px] font-extrabold text-white leading-none mb-[14px]">
                {stat.value}
              </div>
              <div style={{ color: "#a9b3c9" }} className="text-base font-semibold">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}