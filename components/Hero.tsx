"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    //  Ensure entire page background is white
    <section className="pt-2 bg-white">
    <main className="bg-white">
      {/* Hero section with 20px space below navbar */}
      <section className="relative flex h-[700px] w-full items-center overflow-hidden md:h-[780px] lg:h-[900px] mt-[1px] bg-white">
        
        {/* White box wrapper with fixed 70px gap */}
        <div className="absolute inset-0 mx-[70px] bg-white overflow-hidden">
          {/* Background image with continuous zoom animation */}
          <motion.div
            className="h-full w-full"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/assets/banner1-bg.png"
              alt="Hero background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* Dark overlay inside white box */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(35,35,35,0.55)] to-[rgba(20,20,20,0.70)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1200px] text-center px-6">
          <motion.h1
            className="font-playfair mb-[45px] text-[42px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[64px] lg:text-[84px]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Welcome to K Juris Law
          </motion.h1>

          <motion.p
            className="font-playfair mx-auto mb-[55px] max-w-[900px] text-[20px] font-semibold leading-[1.7] text-[#F5F5F5] md:text-[24px] lg:text-[30px]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            We are Specialized in all Corporate Law, Civil and Family Litigation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          ><motion.button
  className="font-inter group relative inline-flex h-14 w-[180px] items-center justify-center gap-3 overflow-hidden rounded-[2px] text-[18px] font-semibold text-[#111111] transition-all duration-300 cursor-pointer md:h-16 md:w-[210px] md:text-[20px]"
  style={{ background: "#D79A2B" }}
  onMouseOver={(e) => (e.currentTarget.style.background = "#C98A1D")}
  onMouseOut={(e) => (e.currentTarget.style.background = "#D79A2B")}
  whileHover="hover"
  initial="initial"
>
  {/* Animated Black Overlay with Framer Motion */}
  <motion.span
    className="absolute inset-0 bg-black"
    variants={{
      initial: { scaleX: 0 },
      hover: { scaleX: 1 },
    }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    style={{ originX: 0.5 }}
  />
  
  {/* Content - stays on top, turns white on hover */}
  <motion.span
    className="relative z-10 flex items-center gap-3"
    variants={{
      initial: { color: "#111111" },
      hover: { color: "#ffffff" },
    }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    <motion.span
      className="h-[2px] w-[26px] bg-[#111111]"
      variants={{
        initial: { backgroundColor: "#111111" },
        hover: { backgroundColor: "#ffffff" },
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    />
    Practice Area
  </motion.span>
</motion.button>
  </motion.div>
        </div>

        {/* Left full-height line with 30px gap */}
        <div className="absolute left-[40px] top-0 bottom-0 w-px bg-[rgba(215,154,43,0.45)]"></div>

        {/* Right full-height line with scroll indicator */}
        <motion.div
          className="absolute right-[40px] top-0 bottom-0 w-px bg-[rgba(215,154,43,0.45)] flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <a
            href="#"
            className="font-inter flex items-center gap-2 text-[18px] font-semibold text-[#D79A2B] tracking-[.08em]"
          >
            <span className="[writing-mode:vertical-rl]">Scroll Down</span>
            <motion.span
              className="rotate-90 inline-block"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </section>
    </main>
    </section>
  );
}
