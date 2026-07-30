export default function ImmigrationLawyers() {
    const playfair = "'Playfair Display', Georgia, 'Times New Roman', serif";
  
    return (
      <div className="bg-white text-[#2b2b30]">
        {/* HEADER */}
        <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
          <div style={{ color: "#d3a542" }} className="font-bold text-base mb-2.5">
            Immigration Lawyers
          </div>
          <div
            className="w-[60px] h-[3px] rounded-sm mb-6"
            style={{ background: "linear-gradient(90deg, #d3a542, #1f3f3d)" }}
          />
          <h1
            style={{ fontFamily: playfair, color: "#d3a542" }}
            className="font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[1.25] mb-6"
          >
            Expert Guidance Through India’s Immigration System
          </h1>
          <p className="text-[16.5px] leading-[1.85] mb-11 max-w-[800px] text-[#52565f]">
            Our immigration lawyers guide you through India’s complex immigration systems — whether you wish to enter India, 
            stay longer, or acquire Indian citizenship or permanent residency. We provide comprehensive assistance for all visa and residency matters.
          </p>
  
          {/* SECTIONS */}
          <div className="space-y-10">
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Our Immigration Law Services
              </h2>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Advice on employment visas, e.g. for skilled professionals or intra-company transferees</li>
                <li>Student visas, research visas, and fellowship visas</li>
                <li>Business and investor visas</li>
                <li>Permanent residency / long-term residence applications</li>
                <li>Citizenship and naturalisation applications</li>
                <li>Family visas — spouse, dependent, or parent visas</li>
                <li>Discretionary and humanitarian grounds applications</li>
                <li>Assistance after visa refusals — reapplications, appeals, and reviews</li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Examples of Cases We Have Assisted With
              </h2>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Reviewing visa application forms and supporting documents to ensure compliance with Indian immigration rules</li>
                <li>Advice on converting short-term visas into long-term residence</li>
                <li>Guidance to business persons on establishing operations and obtaining investor visas</li>
                <li>Assistance with family or spouse visas to allow family members to join in India</li>
                <li>Help with applications for Indian citizenship by naturalisation</li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Costs
              </h2>
              <p className="text-[#52565f]">
                For information on our fee structure for immigration services and court-level appeals, please get in touch with our team. 
                We provide transparent pricing and tailored packages depending on your requirements.
              </p>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                How We Work with You
              </h2>
              <p className="text-[#52565f] mb-3">
                We offer flexibility in communication and consultations, including:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Telephone calls</li>
                <li>Video conferencing</li>
                <li>In-person meetings</li>
              </ul>
              <p className="text-[#52565f] mt-4">
                You choose the method that works best for you, and we will accommodate it right from our initial consultation.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
  