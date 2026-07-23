'use client';

import { motion } from 'framer-motion';
export default function StatsNumbered() {
const stats = [
      {
order: "01",
value: "150",
label: "Expert Attorneys",
icon: (
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
<circle cx="10" cy="7" r="3.2" />
<path d="M5 20v-1.5a4.5 4.5 0 014.5-4.5h1a4.5 4.5 0 014.5 4.5V20" />
<path d="M15 9h3M15 12h4M15 15h2" />
</svg>
        ),
      },
      {
order: "02",
value: "250",
label: "Happy Client",
icon: (
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
<circle cx="12" cy="9" r="3.2" />
<path d="M7 20v-1a5 5 0 015-5h0a5 5 0 015 5v1" />
<path d="M12 2v2M5.5 4.5l1.4 1.4M18.5 4.5l-1.4 1.4M3 10h2M19 10h2" />
</svg>
        ),
      },
      {
order: "03",
value: "330",
label: "Case Complete",
icon: (
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
<rect x="3" y="4" width="18" height="17" rx="2.5" />
<path d="M3 9h18M8 2v4M16 2v4" />
<path d="M9 14l2 2 4-4" />
</svg>
        ),
      },
      {
order: "04",
value: "28",
label: "Case Closed",
icon: (
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
<path d="M8 21h8M12 17v4" />
<path d="M7 4h10v5a5 5 0 01-10 0V4z" />
<path d="M7 6H4a3 3 0 003 3M17 6h3a3 3 0 01-3 3" />
</svg>
        ),
      },
    ];
return (
<div style={{ backgroundColor: "#f5f5f6" }} className="px-[5vw] pt-[60px] pb-[70px]">
<div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0">
{stats.map((stat, i) => {
// divider shows on every item except the first, only in the desktop single-row layout.
const showDivider = i !== 0;
const dividerClasses = showDivider
              ? "md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-[90px] md:before:bottom-1.5 md:before:w-px md:before:bg-[#e3e3e5]"
              : "";
return (
<div
key={stat.order}
className={`relative px-[30px] text-center md:text-left ${dividerClasses}`}
>
<div style={{ color: "#e7e7e9" }} className="text-[56px] font-extrabold leading-none mb-1.5">
{stat.order}
</div>
<div style={{ color: "#c99a53" }} className="w-14 h-14 mb-6 mx-auto md:mx-0">
{stat.icon}
</div>
<div style={{ color: "#2b2b30" }} className="text-[38px] font-extrabold leading-none mb-[10px]">
{stat.value}
</div>
<div style={{ color: "#8b8d94" }} className="text-base font-semibold">
{stat.label}
</div>
</div>
            );
          })}
</div>
</div>
    );
  }
