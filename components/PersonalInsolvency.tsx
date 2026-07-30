export default function PersonalInsolvency() {
    const playfair = "'Playfair Display', Georgia, 'Times New Roman', serif";
  
    return (
      <div className="bg-white text-[#2b2b30]">
        {/* HEADER */}
        <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
          <div style={{ color: "#d3a542" }} className="font-bold text-base mb-2.5">
            Personal Insolvency
          </div>
          <div
            className="w-[60px] h-[3px] rounded-sm mb-6"
            style={{ background: "linear-gradient(90deg, #d3a542, #1f3f3d)" }}
          />
          <h1
            style={{ fontFamily: playfair, color: "#d3a542" }}
            className="font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[1.25] mb-6"
          >
            Helping You Navigate Financial Distress and Insolvency
          </h1>
          <p className="text-[16.5px] leading-[1.85] mb-11 max-w-[800px] text-[#52565f]">
            Dealing with financial stress and the possibility of liquidation is inherently difficult. 
            At times, it may be hard to see a way forward, and the choices ahead may seem overwhelming. 
            We help you cut through the complexity, understand your options, and move forward with confidence.
          </p>
  
          {/* SECTIONS */}
          <div className="space-y-10">
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                What We Can Help With
              </h2>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Negotiating with creditors and managing communications</li>
                <li>Advising you on debt disputes</li>
                <li>Opposing statutory demands or creditor petitions for bankruptcy</li>
                <li>Explaining the legal consequences of filing for personal insolvency</li>
                <li>Helping you understand your rights and duties if you become insolvent</li>
                <li>Advising on jointly owned property or guarantees in cases of insolvency</li>
                <li>Managing assets that may vest with the insolvency trustee</li>
                <li>Assisting with relief from insolvency restrictions</li>
                <li>Structuring claims involving undervalued transactions</li>
                <li>Structuring and defending preference claims</li>
                <li>Negotiating with trustees or insolvency officers</li>
                <li>Applications to annul bankruptcy</li>
                <li>Advising on the administration of insolvent estates</li>
                <li>Handling jurisdictional disputes and cross-border asset recovery</li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                People Clients We Have Assisted
              </h2>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>
                  Assisted representatives of a large insolvent estate, including real estate and various assets, 
                  to successfully apply for estate administration and contested claims from the estate trustee.
                </li>
                <li>
                  Supported an insolvent individual to annul bankruptcy, challenge creditor claims, and contest improper trustee charges.
                </li>
                <li>
                  Helped a former company director avoid bankruptcy by limiting home equity interest, persuading courts to disregard partitionability, 
                  and proposing a reasonable settlement of creditor claims.
                </li>
                <li>
                  Helped spouses, co-owners of property, and other stakeholders of insolvents to negotiate or contest claims for ownership, 
                  property division, and allegations of undervalue transactions — protecting homes and livelihoods.
                </li>
                <li>
                  Assisted clients of diverse backgrounds to access protections under Indian insolvency law despite creditor opposition or judicial concerns.
                </li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                How We Work with You
              </h2>
              <p className="text-[#52565f] mb-3">
                We offer flexible methods of engagement to suit your needs, whether you are nearby or far away:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Over the phone</li>
                <li>By video conference</li>
                <li>In-person meetings</li>
              </ul>
              <p className="text-[#52565f] mt-4">
                During our initial consultation, we will discuss your preferred communication method and arrange meetings accordingly.
              </p>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-[#52565f]">
                Kindly refer here for all private indebtedness and corporate rebuilding FAQs. 
                Our team can guide you through common concerns and provide clarity on insolvency procedures.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
  