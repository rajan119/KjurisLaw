import Image from "next/image";

export default function AboutKJuris() {
  return (
    <div className="max-w-[1300px] w-full mx-auto relative grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-[70px] items-start">
      {/* Watermark – scale icon */}
      <svg
        className="absolute left-[-60px] top-[60%] w-[130px] opacity-[0.06] text-[#1c2b4a] pointer-events-none z-0 hidden lg:block"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 4v56M18 60h28M12 14l-9 18a9 9 0 0018 0l-9-18zM52 14l-9 18a9 9 0 0018 0l-9-18zM6 14h52M32 4l-3 6h6l-3-6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Left column – copy */}
      <div>
        <h1 className="font-['Playfair_Display'] font-extrabold text-[clamp(34px,3.6vw,46px)] leading-[1.1] mb-[26px] inline-block bg-gradient-to-r from-[#1c2b4a] via-[#1c2b4a] via-38% to-[#d3a542] to-68% bg-clip-text text-transparent">
          About K Juris law
        </h1>

        <p className="text-[17px] leading-[1.85] text-[#4b4f58] max-w-[600px]">
          <b className="text-[#3a3f4a] tracking-[0.3px]">K JURIS</b>, Advocates, is
          a progressive multidisciplinary law firm, based in Mumbai and out of
          Mumbai, with a diversified client base. The firm has an established
          reputation for rendering prompt and dependable legal services to its
          clients and is well known for its expertise in, Banking Laws, Corporate
          &amp; Commercial law, International Trade, Due Diligence, Searches,
          Documentation and giving Legal Opinions on critical issues.
        </p>

        <h2 className="font-['Playfair_Display'] font-bold text-[26px] text-[#1c2b4a] leading-[1.4] mt-[38px] mb-[30px] max-w-[520px]">
          Get About our Law Firm and Learn About our Expertise.
        </h2>

        <blockquote className="border border-[#e7e3da] rounded-[2px] p-[30px_34px] max-w-[560px] bg-white">
          <p className="text-[15.5px] leading-[1.85] italic text-[#565a63] mb-[18px]">
            We are of the belief that in the context of the present world economic
            order, the legal profession plays a valuable and constructive role.
            The changes in the economic climate in the world have brought about a
            change in the traditional role of the lawyer.
          </p>
          <cite className="font-['Playfair_Display'] not-italic font-bold text-[#d3a542] text-[15px] tracking-[0.3px]">
            KUNAL K. TIWARI, CEO-Founder
          </cite>
        </blockquote>
      </div>

      {/* Right column – media */}
      <div className="relative">
        {/* Badge */}
        <div className="absolute top-[-28px] right-[20px] w-[150px] h-[150px] rounded-full bg-[#1c2b4a] text-white flex flex-col items-center justify-center text-center border-[3px] border-[#4a5c85] outline outline-1 outline-[rgba(211,165,66,0.35)] outline-offset-[6px] shadow-[0_18px_30px_-10px_rgba(28,43,74,0.5)] z-10">
          <div className="absolute top-[-6px] right-[-6px] w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center shadow-[0_6px_14px_rgba(0,0,0,0.15)]">
            <svg
              className="w-[20px] h-[20px] text-[#1c2b4a]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 21V10M9 21V10M15 21V10M20 21V10M2 10L12 3l10 7M3 21h18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="font-['Playfair_Display'] text-[38px] font-extrabold text-[#d3a542] leading-[1]">
            12
          </div>
          <div className="text-[13px] font-bold tracking-[0.5px] my-[4px]">Years</div>
          <div className="text-[10.5px] leading-[1.4] opacity-85 px-[18px]">
            We Have A Lot Of Real Experience
          </div>
        </div>

        {/* Photo frame */}
        <div className="rounded-[50%_/_12%] overflow-hidden shadow-[0_30px_60px_-20px_rgba(28,43,74,0.35)] border-[10px] border-white aspect-[4/5.1]">
          <Image
            src="/assets/kjurisabout.png"
            alt="K Juris Law partners in their Mumbai office"
            width={1000}
            height={1275}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}