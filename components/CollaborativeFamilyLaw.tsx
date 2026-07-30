export default function CollaborativeFamilyLaw() {
    const playfair = "'Playfair Display', Georgia, 'Times New Roman', serif";
  
    return (
      <div className="bg-white text-[#2b2b30]">
        {/* HEADER */}
        <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
          <div style={{ color: "#d3a542" }} className="font-bold text-base mb-2.5">
            Collaborative Family Law
          </div>
          <div
            className="w-[60px] h-[3px] rounded-sm mb-6"
            style={{ background: "linear-gradient(90deg, #d3a542, #1f3f3d)" }}
          />
          <h1
            style={{ fontFamily: playfair, color: "#d3a542" }}
            className="font-extrabold text-[30px] sm:text-[36px] md:text-[42px] leading-[1.25] mb-6"
          >
            Resolving Family Disputes Through Collaboration and Dialogue
          </h1>
          <p className="text-[16.5px] leading-[1.85] mb-11 max-w-[800px] text-[#52565f]">
            The collaborative family law process is a means to settle disputes between spouses without resorting to court proceedings. 
            In this method, both parties work together to resolve their issues through meetings and dialogue, rather than relying on litigation.
          </p>
  
          {/* SECTIONS */}
          <div className="space-y-10">
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Why Opt for a Collaborative Process?
              </h2>
              <p className="text-[#52565f] mb-3">
                The collaborative approach offers many of the benefits of mediation, along with ongoing support from your collaborative lawyer, 
                who remains alongside you while you negotiate with your spouse. Many couples prefer this method because it allows them to control outcomes 
                directly rather than having a court impose a decision.
              </p>
              <p className="text-[#52565f] mb-3">
                The court remains outside the process, and transparency is maintained through a series of face-to-face meetings involving you, your spouse, 
                your respective lawyers, and sometimes other experts like marriage counsellors, financial advisors, or pension consultants.
              </p>
              <p className="text-[#52565f]">
                This process is especially suitable in cases involving children, since it is more family-oriented and generally faster than more formal dispute resolution methods.
              </p>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                What Does the Collaborative Process Involve?
              </h2>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Each spouse engages a lawyer trained in collaborative family law, who supports and advises them throughout.</li>
                <li>You and your spouse, along with any supporting experts, agree to a contract stipulating that the aim is to resolve all issues without going to court.</li>
                <li>Under this agreement, these professionals are restricted from representing you in court if the process fails.</li>
                <li>Because of this binding agreement, all participants are committed to working toward a comprehensive settlement, avoiding the time, cost, and emotional strain of litigation.</li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                How It Proceeds
              </h2>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Initially, both spouses meet separately with their collaborative lawyers to understand what to expect and prepare for the joint meetings.</li>
                <li>These lawyers then coordinate to design the agenda for the first joint meeting, always keeping your priorities in view.</li>
                <li>If desired, additional professionals—such as financial planners or family counsellors—may join the discussions.</li>
                <li>Meetings are conducted in an open, honest, and respectful atmosphere, with both parties aiming to cooperate.</li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Duration of the Process
              </h2>
              <p className="text-[#52565f] mb-3">
                Unlike court proceedings with fixed deadlines, the collaborative method is flexible and tailored to your family’s needs. 
                The number of meetings depends on how many issues there are and how quickly they can be resolved. 
                Some cases may conclude in just a few sessions, while others may need four or five.
              </p>
              <p className="text-[#52565f]">
                Once you both reach agreement, your lawyers prepare the necessary documents to legally formalise your settlement under Indian law.
              </p>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Benefits of the Collaborative Approach
              </h2>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Dialogue is open because of the face-to-face meetings.</li>
                <li>You retain control over the process, preserving the relationship dynamics between you and your spouse.</li>
                <li>You have dedicated legal support throughout.</li>
                <li>Expert resources (such as accountants, financial advisers, or counsellors) may be included when useful.</li>
              </ul>
            </section>
  
            <section>
              <h2
                style={{ color: "#d3a542", fontFamily: playfair }}
                className="font-bold text-[22px] mb-3"
              >
                Our Approach
              </h2>
              <p className="text-[#52565f] mb-3">
                At K Juris Law, we serve families and individuals across India. We offer flexible modes of consultation:
              </p>
              <ul className="list-disc pl-6 text-[#52565f] space-y-2">
                <li>Telephonic</li>
                <li>Video conferencing</li>
                <li>In-person meetings</li>
              </ul>
              <p className="text-[#52565f] mt-4">
                At our first conversation, we’ll decide with you the best way to stay in touch and how to proceed.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
  