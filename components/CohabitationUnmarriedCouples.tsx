export default function CohabitationUnmarriedCouples() {
    const playfair = "'Playfair Display', Georgia, 'Times New Roman', serif";
  
    return (
      <div className="bg-white text-[#2b2b30]">
        {/* HEADER */}
        <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
          <div style={{ color: "#d3a542" }} className="font-bold text-base mb-2.5">
            Cohabitation & Unmarried Couples
          </div>
          <div
            className="w-[60px] h-[3px] rounded-sm mb-6"
            style={{ background: "linear-gradient(90deg, #d3a542, #1f3f3d)" }}
          />
          <h1
            style={{ fontFamily: playfair, color: "#d3a542" }}
            className="font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[1.25] mb-6"
          >
            Legal Guidance for Unmarried Couples Living Together in India
          </h1>
          <p className="text-[16.5px] leading-[1.85] mb-11 max-w-[800px] text-[#52565f]">
            In India, unlike married couples, there is no automatic statutory protection in many situations when couples live together. 
            This can create difficulties, especially for long-term partners or those with children. Our legal experts help you understand 
            your rights and plan ahead to safeguard your future.
          </p>
  
          {/* SECTIONS */}
          <div className="space-y-10">
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Legal Planning for Cohabitation
              </h2>
              <p className="text-[#52565f] mb-3">
                Even in a relationship going strong, it’s wise to make legal arrangements in case circumstances change. 
                We can assist you with:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Cohabitation agreements (agreements between partners while living together)</li>
                <li>Legal planning for separation or the death of a partner</li>
                <li>Property ownership, mortgage, and housing matters</li>
                <li>Wills, succession planning, and financial structuring</li>
                <li>Child arrangements and maintenance support</li>
                <li>Financial support agreements between partners</li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                How We Work
              </h2>
              <p className="text-[#52565f] mb-3">
                We provide flexible advice to suit your situation, including via:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Telephone</li>
                <li>Video conferencing</li>
                <li>In-person meetings</li>
              </ul>
              <p className="text-[#52565f] mt-4">
                During our first meeting, we discuss how you prefer to communicate and the best way to work together.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
  