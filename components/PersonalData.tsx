export default function PersonalData() {
    const playfair = "'Playfair Display', Georgia, 'Times New Roman', serif";
  
    return (
      <div className="bg-white text-[#2b2b30]">
        {/* HEADER */}
        <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
          <div style={{ color: "#d3a542" }} className="font-bold text-base mb-2.5">
            Personal Data
          </div>
          <div
            className="w-[60px] h-[3px] rounded-sm mb-6"
            style={{ background: "linear-gradient(90deg, #d3a542, #1f3f3d)" }}
          />
          <h1
            style={{ fontFamily: playfair, color: "#d3a542" }}
            className="font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[1.25] mb-6"
          >
            Protecting Your Personal Data and Privacy Rights
          </h1>
          <p className="text-[16.5px] leading-[1.85] mb-11 max-w-[800px] text-[#52565f]">
            Your personal data belongs to you. Under Indian law, you have rights to know how it is used and for what purposes, 
            especially with regard to sensitive personal information (such as medical records). 
            You may request details of what data an organization holds about you or make requests to public authorities. 
            Our data and privacy experts can assist you.
          </p>
  
          {/* SECTIONS */}
          <div className="space-y-10">
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                How We Help with Personal Data Issues
              </h2>
              <p className="text-[#52565f] mb-3">
                We can assist you in various ways with your personal data matters, such as:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>
                  Helping you understand and exercise your data protection rights (for example, making a request under applicable laws).
                </li>
                <li>Assisting you in querying how your personal information has been processed.</li>
                <li>
                  Helping you file requests under relevant public information or data laws to public bodies (where applicable).
                </li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Understanding Your Rights on Personal Data
              </h2>
              <p className="text-[#52565f] mb-3">
                Under laws and proposed regulations in India, you may have several rights regarding your personal information. 
                These include:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>
                  <strong>Right to be informed:</strong> You have the right to know what personal data is being collected about you, 
                  for what purposes, who it is shared with, how long it is retained, and where it is stored — all in a clear and transparent manner.
                </li>
                <li>
                  <strong>Right of access:</strong> You can request a copy of your personal data and additional supplementary information. 
                  This lets you understand how and why others are processing your data and verify that it is lawful.
                </li>
                <li>
                  <strong>Right to correction:</strong> You can require that incorrect or incomplete personal information held about you be corrected promptly.
                </li>
                <li>
                  <strong>Right to erasure (right to be forgotten):</strong> In certain situations (for instance, withdrawal of consent or if the purpose for processing has ceased) 
                  you may request that your personal data be deleted.
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> In certain circumstances, you may request that processing of your data be limited or suspended.
                </li>
                <li>
                  <strong>Right to portability:</strong> You may request to receive or transfer your personal data from one system to another in a usable and secure format.
                </li>
                <li>
                  <strong>Right to object:</strong> You may object to your data being processed for certain purposes (for example, direct marketing).
                </li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                How We Have Assisted Individuals
              </h2>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Scoping and submitting access or information requests.</li>
                <li>Advising clients about their rights under data protection and privacy laws.</li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Our Mode of Working with You
              </h2>
              <p className="text-[#52565f] mb-3">
                We provide our services across India. We deliver advice and support in multiple ways:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Over the phone</li>
                <li>Via video calls</li>
                <li>In face-to-face meetings</li>
              </ul>
              <p className="text-[#52565f] mt-4">
                At our initial consultation, we will discuss your preferred communication modes and how best to proceed.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
  