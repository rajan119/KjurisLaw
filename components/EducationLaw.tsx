export default function EducationLaw() {
    const playfair = "'Playfair Display', Georgia, 'Times New Roman', serif";
  
    return (
      <div className="bg-white text-[#2b2b30]">
        {/* HEADER */}
        <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
          <div style={{ color: "#d3a542" }} className="font-bold text-base mb-2.5">
            Education Law
          </div>
          <div
            className="w-[60px] h-[3px] rounded-sm mb-6"
            style={{ background: "linear-gradient(90deg, #d3a542, #1f3f3d)" }}
          />
          <h1
            style={{ fontFamily: playfair, color: "#d3a542" }}
            className="font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[1.25] mb-6"
          >
            Legal Advice and Support for Independent Schools in India
          </h1>
          <p className="text-[16.5px] leading-[1.85] mb-11 max-w-[800px] text-[#52565f]">
            Every private school is unique, but all face legal and regulatory challenges daily. 
            We act as trusted legal advisors to senior leaders and governing bodies of leading independent schools across India, 
            offering counsel on key legal and strategic matters arising from everyday operations and future growth plans.
          </p>
  
          {/* SECTIONS */}
          <div className="space-y-10">
            <section>
              <p className="text-[#52565f] mb-3">
                We are well-versed in India’s education regulations and maintain strong relationships with associations supporting private schools, 
                such as CBSE, ICSE, CBSE-affiliated bodies, ICAI school forums, and others. 
                We are often invited to speak at education law conferences and sector events.
              </p>
              <p className="text-[#52565f] mb-3">
                Whether your institution is a small day school, a large co-educational boarding school, or a chain of schools, 
                we have the expertise to assist you in areas including:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Commercial and contract law</li>
                <li>Employment, HR, and staff regulations</li>
                <li>School governance and board issues</li>
                <li>Property strategy and infrastructure management</li>
                <li>Student issues, parent disputes, and admissions</li>
                <li>Safeguarding, child protection, and compliance</li>
              </ul>
              <p className="text-[#52565f] mt-4">
                We consider it a great privilege to serve the education sector and highly value the relationships we maintain 
                with schools, educational associations, and other professional advisors.
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
                Our services are available throughout India. Technology enables us to offer high standards of service 
                whether clients are local or remote. Our legal advice can be delivered through:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Telephone consultations</li>
                <li>Video conferencing</li>
                <li>Face-to-face meetings</li>
              </ul>
              <p className="text-[#52565f] mt-4">
                In our first meeting, we’ll discuss your preferred mode of communication and what works best for you.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
  