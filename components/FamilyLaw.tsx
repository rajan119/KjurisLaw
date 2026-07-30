export default function FamilyLaw() {
  const playfair = "'Playfair Display', Georgia, 'Times New Roman', serif";

  const team = [
    {
      name: "Nagendra Mishra",
      role: "Technical Director",
      img: "",
    },
    {
      name: "Dinesh Abhe",
      role: "Family Lawyer",
      img: "",
    },
    {
      name: "Shahabuddin Islam",
      role: "Property Lawyer",
      img: "",
    },
  ];

  return (
    <div className="bg-white text-[#2b2b30]">
      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
        <div style={{ color: "#d3a542" }} className="font-bold text-base mb-2.5">
          Family Law (India)
        </div>
        <div
          className="w-[60px] h-[3px] rounded-sm mb-6"
          style={{ background: "linear-gradient(90deg, #d3a542, #1f3f3d)" }}
        />
        <h1
          style={{ fontFamily: playfair, color: "#d3a542" }}
          className="font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[1.25] mb-6"
        >
          Navigating Sensitive Family Matters with Compassion and Expertise
        </h1>
        <p className="text-[16.5px] leading-[1.85] mb-11 max-w-[800px] text-[#52565f]">
          Family law brings both sensitive and challenging times. During difficult moments, you may require expert legal guidance. 
          Our family lawyers not only understand the law but also support you throughout the process—with strategy, compassion, and practical advice.
        </p>

        {/* SECTIONS */}
        <div className="space-y-10">
          <section>
            <h2
              style={{ color: "#d3a542", fontFamily: playfair }}
              className="font-bold text-[22px] mb-3"
            >
              Navigating Sensitive Matters
            </h2>
            <ul className="list-disc pl-6 text-[#52565f] space-y-2">
              <li>Separation and Divorce – Guidance through Hindu Marriage Act, Special Marriage Act, or other personal laws.</li>
              <li>Domestic Violence and Harassment – Protection under the Protection of Women from Domestic Violence Act, 2005.</li>
              <li>Child Custody and Visitation Rights – Determining custody and visitation arrangements.</li>
              <li>Maintenance and Alimony – Financial support under Section 125 of the Criminal Procedure Code (1973).</li>
            </ul>
          </section>

          <section>
            <h2
              style={{ color: "#d3a542", fontFamily: playfair }}
              className="font-bold text-[22px] mb-3"
            >
              Children and Divorce
            </h2>
            <p className="text-[#52565f] mb-3">
              The welfare of the child is always the foremost consideration in Indian law. We provide assistance in:
            </p>
            <ul className="list-disc pl-6 text-[#52565f] space-y-2">
              <li>Custody guidance</li>
              <li>Visitation rights</li>
              <li>Child support and maintenance</li>
              <li>Protection of minors</li>
            </ul>
          </section>

          <section>
            <h2
              style={{ color: "#d3a542", fontFamily: playfair }}
              className="font-bold text-[22px] mb-3"
            >
              Protection of Rights and Assets
            </h2>
            <ul className="list-disc pl-6 text-[#52565f] space-y-2">
              <li>Prenuptial and Postnuptial Agreements</li>
              <li>Property Division</li>
              <li>Inheritance and Succession Planning</li>
            </ul>
          </section>

          <section>
            <h2
              style={{ color: "#d3a542", fontFamily: playfair }}
              className="font-bold text-[22px] mb-3"
            >
              Dispute Resolution
            </h2>
            <ul className="list-disc pl-6 text-[#52565f] space-y-2">
              <li>Mediation – Achieve amicable settlements without lengthy litigation.</li>
              <li>Arbitration – Neutral resolution process.</li>
              <li>Court Proceedings – Representation in family courts when necessary.</li>
            </ul>
          </section>

          <section>
            <h2
              style={{ color: "#d3a542", fontFamily: playfair }}
              className="font-bold text-[22px] mb-3"
            >
              How We Support You
            </h2>
            <ul className="list-disc pl-6 text-[#52565f] space-y-2">
              <li>In-person meetings or online consultations</li>
              <li>Regular case updates and video discussions</li>
              <li>Flexible scheduling for your convenience</li>
            </ul>
          </section>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="bg-[#f7ece0] py-[70px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            style={{ color: "#d3a542", fontFamily: playfair }}
            className="font-bold text-base mb-2.5 uppercase"
          >
            Say Hello to Our Volunteers
          </h2>
          <p className="text-[#52565f] mb-10 max-w-[800px]">
            These are the people behind the work! Our group of professionals is committed to growing our mission. 
            We are a family of creative minds, qualified volunteers, and diverse professionals who focus our skills and expertise 
            on a singular goal of serving the community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[320px] object-cover rounded-[20px] mb-4"
                />
                <h3
                  style={{ color: "#d3a542", fontFamily: playfair }}
                  className="font-semibold text-lg"
                >
                  {member.name}
                </h3>
                <p className="text-[#52565f] text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
