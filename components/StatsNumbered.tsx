'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StatsNumbered() {
  const stats = [
    {
      order: "01",
      value: "150",
      label: "Expert Attorneys",
      icon: "/assets/intro-icon1.png",
    },
    {
      order: "02",
      value: "250",
      label: "Happy Client",
      icon: "/assets/intro-icon2.png",
    },
    {
      order: "03",
      value: "330",
      label: "Case Complete",
      icon: "/assets/intro-icon3.png",
    },
    {
      order: "04",
      value: "28",
      label: "Case Closed",
      icon: "/assets/intro-icon4.png",
    },
  ];

  return (
    <section className="bg-white">
    <div style={{ backgroundColor: "#d6d6d6" }} className="mr-4 ml-4 px-[5vw] pt-[0px] pb-[0px] ">
      <div className="max-w-[1300px]   mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 overflow-hidden">
        {stats.map((stat, i) => {
          const showDivider = i !== 0;
          return (
            <motion.div
              key={stat.order}
              style={{ backgroundColor: "#d6d6d6" }}
              className={`
                relative px-[20px] py-[60px] text-center
                overflow-hidden cursor-default
                ${showDivider ? "md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-[90px] md:before:bottom-1.5 md:before:w-px md:before:bg-[#e3e3e5]" : ""}
              `}
              whileHover="hover"
              initial="initial"
            >
              {/* Overlay with #4b4f58 - slides from left on hover */}
              <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: "#4b4f58" }}
                variants={{
                  initial: { width: 0, left: 0, right: 'auto' },
                  hover: { width: '100%' },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />

              {/* Content - stays on top, changes to white on hover */}
              <motion.div 
                className="relative z-10"
                variants={{
                  initial: { color: "#2b2b30" },
                  hover: { color: "#ffffff" },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Order Number - Top Left with -15px margin-top */}
                <motion.div 
                  style={{ color: "#e7e7e9", marginTop: "-40px" }}
                  className="text-[56px] font-extrabold leading-none mb-1.5 text-left"
                  variants={{
                    initial: { color: "#e7e7e9" },
                    hover: { color: "#ffffff" },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {stat.order}
                </motion.div>

                {/* Icon - Centered */}
                <motion.div 
                  className="w-14 h-14 mb-6 mx-auto relative"
                  variants={{
                    initial: { filter: "brightness(1)" },
                    hover: { filter: "brightness(0) invert(1)" },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Value - Centered */}
                <motion.div 
                  style={{ color: "#2b2b30" }}
                  className="text-[38px] font-extrabold leading-none mb-[10px]"
                  variants={{
                    initial: { color: "#2b2b30" },
                    hover: { color: "#ffffff" },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {stat.value}
                </motion.div>

                {/* Label - Centered */}
                <motion.div 
                  style={{ color: "#8b8d94" }}
                  className="text-base font-semibold"
                  variants={{
                    initial: { color: "#8b8d94" },
                    hover: { color: "#ffffff" },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
    </section>
  );
}