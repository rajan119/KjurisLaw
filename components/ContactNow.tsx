'use client';

import Image from 'next/image';

export default function ContactNow() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT PANEL */}
      <div className="bg-[#f4f3f0] p-[70px_60px] max-lg:p-[50px_24px]">
        <h1 className="font-['Playfair_Display'] font-extrabold text-[clamp(32px,3.4vw,42px)] mb-[24px] inline-block bg-gradient-to-r from-[#1c2b4a] via-[#1c2b4a] via-42% to-[#d3a542] to-70% bg-clip-text text-transparent">
          Contact Now
        </h1>

        <p className="text-[16px] leading-[1.8] text-[#4b4f58] max-w-[440px] mb-[32px]">
          Our staff is happy to help. Fill out the form, and we'll call you at your convenience to assist with your inquiry.
        </p>

        <form className="max-w-[440px]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mb-[16px]">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full font-['Nunito_Sans'] text-[14.5px] text-[#6b7078] bg-white border-[1.5px] border-[#d8b876] rounded-[3px] p-[14px_16px] outline-none focus:border-[#d3a542] placeholder:text-[#8b8f97]"
            />
            <input
              type="text"
              placeholder="Business Services"
              className="w-full font-['Nunito_Sans'] text-[14.5px] text-[#6b7078] bg-white border-[1.5px] border-[#d8b876] rounded-[3px] p-[14px_16px] outline-none focus:border-[#d3a542] placeholder:text-[#8b8f97]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mb-[16px]">
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="w-full font-['Nunito_Sans'] text-[14.5px] text-[#6b7078] bg-white border-[1.5px] border-[#d8b876] rounded-[3px] p-[14px_16px] outline-none focus:border-[#d3a542] placeholder:text-[#8b8f97]"
            />
            <input
              type="tel"
              placeholder="Enter Your Phone Nu"
              className="w-full font-['Nunito_Sans'] text-[14.5px] text-[#6b7078] bg-white border-[1.5px] border-[#d8b876] rounded-[3px] p-[14px_16px] outline-none focus:border-[#d3a542] placeholder:text-[#8b8f97]"
            />
          </div>

          <textarea
            placeholder="Enter Your Message"
            rows={6}
            className="w-full font-['Nunito_Sans'] text-[14.5px] text-[#6b7078] bg-white border-[1.5px] border-[#d8b876] rounded-[3px] p-[14px_16px] outline-none focus:border-[#d3a542] placeholder:text-[#8b8f97] resize-vertical min-h-[220px] mb-[26px]"
          />

          <button
            type="submit"
            className="font-['Nunito_Sans'] font-bold text-[15px] text-[#d3a542] bg-transparent border-[1.5px] border-[#2a2a2a] rounded-[30px] px-[42px] py-[14px] cursor-pointer transition-colors hover:bg-[#1c2b4a] hover:border-[#1c2b4a] hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>

      {/* RIGHT PANEL */}
      <div className="p-[70px_40px_0_60px] max-lg:p-[0_24px_50px]">
        {/* Location */}
        <div className="flex gap-[20px] items-start mb-[28px]">
          <div className="w-[56px] h-[56px] min-w-[56px] rounded-full border-[1.5px] border-[#c7c7c7] flex items-center justify-center">
            <svg
              className="w-[24px] h-[24px] text-[#d3a542]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22s7-7.5 7-12.5A7 7 0 105 9.5C5 14.5 12 22 12 22z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
          <div>
            <h2 className="font-['Playfair_Display'] font-bold text-[22px] text-[#1c2b4a] mb-[8px]">
              Location
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4b4f58] max-w-[340px]">
              2nd Floor, B Wing, S55, Express Zone, Cello, Malad East, Mumbai, Maharashtra, 400097.
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="w-full aspect-[600/560] overflow-hidden bg-[#54565c]">
          <Image
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
            alt="Legal professional holding documents"
            width={600}
            height={560}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}