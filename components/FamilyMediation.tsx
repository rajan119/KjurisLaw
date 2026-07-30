export default function FamilyMediation() {
    const playfair = "'Playfair Display', Georgia, 'Times New Roman', serif";
  
    return (
      <div className="bg-white text-[#2b2b30]">
        {/* HEADER */}
        <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
          <div style={{ color: "#d3a542" }} className="font-bold text-base mb-2.5">
            Family Mediation
          </div>
          <div
            className="w-[60px] h-[3px] rounded-sm mb-6"
            style={{ background: "linear-gradient(90deg, #d3a542, #1f3f3d)" }}
          />
          <h1
            style={{ fontFamily: playfair, color: "#d3a542" }}
            className="font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[1.25] mb-6"
          >
            Resolving Family Issues Amicably and Efficiently
          </h1>
          <p className="text-[16.5px] leading-[1.85] mb-11 max-w-[800px] text-[#52565f]">
            When a relationship ends, resolving related issues quickly and amicably helps both parties move forward. 
            Family mediation provides a structured, cooperative environment to reach fair and lasting agreements.
          </p>
  
          {/* SECTIONS */}
          <div className="space-y-10">
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                What Is Family Mediation & Its Advantages
              </h2>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>
                  A neutral third party (the mediator) assists you and your former spouse or partner to explore and negotiate matters together.
                </li>
                <li>You both retain control — decisions are not imposed on you.</li>
                <li>It encourages cooperation to reach solutions best suited for your family’s future.</li>
              </ul>
              <p className="text-[#52565f] mt-4">
                Our mediators first assess whether mediation is appropriate in your case, explain how the process works, 
                and determine if additional experts (e.g., financial advisors, accountants) should assist. 
                There is no case too complex for mediation.
              </p>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                How We’ve Helped
              </h2>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>
                  We have supported many couples, even after separation, to continue cooperative arrangements — the mediation approach made it possible.
                </li>
                <li>
                  We have mediated cases where parties focused beyond their immediate interests, considering children and extended families. 
                  Working with lawyers and accountants, we helped them reach comprehensive solutions.
                </li>
                <li>
                  We also assist couples who are already in court but prefer to avoid a final hearing. 
                  In one instance, a single-day mediation avoided a two-day trial scheduled soon after.
                </li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Procedure
              </h2>
              <p className="text-[#52565f] mb-3">
                There are two ways to initiate mediation:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>
                  Through an intake meeting (where mediation is explained in detail and suitability assessed).
                </li>
                <li>
                  Via a Mandatory Information Session (MIS) — certain Indian courts may require such a session before allowing a petition.
                </li>
              </ul>
              <p className="text-[#52565f] mt-4">
                You choose how to begin; further details are available in our FAQs. 
                If needed, we offer MIS appointments promptly.
              </p>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Costs
              </h2>
              <p className="text-[#52565f] mb-3">
                Our mediation fees are based on the mediator’s hourly rate. For joint sessions, costs are charged accordingly.
              </p>
              <p className="text-[#52565f]">
                We currently offer partial subsidy vouchers to eligible clients to reduce mediation expenses — contact us for details.
              </p>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Our Mode of Working
              </h2>
              <p className="text-[#52565f] mb-3">
                We provide flexible modes to suit your convenience:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>In-person meetings</li>
                <li>Telephonic consultations</li>
                <li>Video conferencing</li>
              </ul>
              <p className="text-[#52565f] mt-4">
                In our initial conversation, we’ll agree on your preferred mode of communication and how best to meet.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
  