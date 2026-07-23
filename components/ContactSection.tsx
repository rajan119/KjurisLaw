'use client';

import Image from 'next/image';
import React from 'react';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-white">
    <section className=" max-w-[1200px] mx-auto px-6 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT: contact info */}
        <div className="pr-6 lg:pr-12">
          <h3 className="font-['Playfair_Display'] font-extrabold text-[clamp(28px,4vw,44px)] text-[#2b2b2b] mb-10">
            Contact Us If You Have More Questions.
          </h3>

          <ul className="space-y-8">
            <li className="flex gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-[rgba(211,165,66,0.08)] flex items-center justify-center">
                <svg className="w-7 h-7 text-[#d3a542]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s7-7.5 7-12.5A7 7 0 105 9.5C5 14.5 12 22 12 22z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <h4 className="font-['Playfair_Display'] font-bold text-[20px] mb-1">Location</h4>
                <p className="text-[#4b4f58] max-w-[420px]">S-54/55, 2nd Floor, 'B' Wing, Express Zone, W.E.H., Malad East, Mumbai - 400097</p>
              </div>
            </li>

            <li className="flex gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-[rgba(211,165,66,0.08)] flex items-center justify-center">
                <svg className="w-7 h-7 text-[#d3a542]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V21a1 1 0 01-1.11 1A19 19 0 013 5.11 1 1 0 014 4h4.09a1 1 0 011 .75 11.36 11.36 0 00.7 2.81 1 1 0 01-.24 1L7.91 11.91a16 16 0 006 6l1.32-1.68a1 1 0 011-.24 11.36 11.36 0 002.81.7 1 1 0 01.75 1V21z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-['Playfair_Display'] font-bold text-[20px] mb-1">Phone</h4>
                <p className="text-[#4b4f58]">Off. 022 – 28407865 / +91 22 28407865</p>
              </div>
            </li>

            <li className="flex gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-[rgba(211,165,66,0.08)] flex items-center justify-center">
                <svg className="w-7 h-7 text-[#d3a542]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              </div>
              <div>
                <h4 className="font-['Playfair_Display'] font-bold text-[20px] mb-1">Email</h4>
                <p className="text-[#4b4f58]">info@kjurislaw.com</p>
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT: form */}
        <div>
          <h3 className="font-['Playfair_Display'] font-extrabold text-[clamp(24px,3.4vw,40px)] text-[#6b6b6b] mb-6">Get In Touch With Our Experienced Solicitors</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="First Name" className="w-full text-[14px] text-[#6b7078] bg-white border-[1.5px] border-[#d8b876] rounded-[10px] p-4 outline-none placeholder:text-[#a29b8f]" />
              <input placeholder="Last Name" className="w-full text-[14px] text-[#6b7078] bg-white border-[1.5px] border-[#d8b876] rounded-[10px] p-4 outline-none placeholder:text-[#a29b8f]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" placeholder="Enter Your Mail" className="w-full text-[14px] text-[#6b7078] bg-white border-[1.5px] border-[#d8b876] rounded-[10px] p-4 outline-none placeholder:text-[#a29b8f]" />
              <input type="tel" placeholder="Enter Your Phone Number" className="w-full text-[14px] text-[#6b7078] bg-white border-[1.5px] border-[#d8b876] rounded-[10px] p-4 outline-none placeholder:text-[#a29b8f]" />
            </div>

            <textarea placeholder="Enter Your Message" rows={8} className="w-full text-[14px] text-[#6b7078] bg-white border-[1.5px] border-[#d8b876] rounded-[10px] p-4 outline-none placeholder:text-[#a29b8f] resize-vertical" />

            <div className="pt-2">
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full border-[2px] border-[#2a2a2a] px-8 py-3 bg-white text-[#d3a542] font-semibold hover:bg-[#2a2a2a] hover:text-white transition-all">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </section>
  );
}
