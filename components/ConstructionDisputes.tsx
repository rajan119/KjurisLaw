import React from "react";

/**
 * ConstructionDisputes
 * Next.js + Tailwind CSS component for the body content section of the
 * "Commercial & Construction Disputes" page — matches the same style used
 * for the other Business Series pages.
 *
 * Usage:
 *   import ConstructionDisputes from "@/components/ConstructionDisputes";
 *   <ConstructionDisputes />
 */

const ACCENT = "text-[#C1793C]";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`font-serif text-2xl md:text-[26px] font-semibold ${ACCENT} mb-3`}>
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-700 leading-relaxed mb-3">{children}</p>;
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-1.5 text-gray-700 text-sm leading-relaxed mb-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function CircleBulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-[circle] list-outside pl-5 space-y-1.5 text-gray-700 text-sm leading-relaxed mb-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

// Bullet item: **Term**: rest of sentence
function TermItemColon({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <>
      <strong className="font-semibold text-gray-800">{term}</strong>: {children}
    </>
  );
}

// Bullet item: **Term** – rest of sentence
function TermItemDash({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <>
      <strong className="font-semibold text-gray-800">{term}</strong> &ndash; {children}
    </>
  );
}

export default function ConstructionDisputes() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <section>
        <SectionHeading>Commercial &amp; Construction Disputes.</SectionHeading>
        <Paragraph>
          Commercial and construction disputes are among the most complex
          and high-stakes matters businesses face. In India, such disputes
          often involve multiple parties, lengthy contracts, strict
          regulatory frameworks, and significant financial exposure. Timely
          and effective legal intervention can protect your rights,
          minimize risk, and save costs.
        </Paragraph>
        <Paragraph>
          At Kjuris Law, we specialise in handling disputes across the full
          spectrum of commercial and construction matters. Our lawyers
          combine deep industry knowledge with litigation, arbitration, and
          alternative dispute resolution (ADR) expertise to achieve
          practical outcomes for our clients.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Our Areas of Expertise</SectionHeading>
        <Paragraph>We advise and represent clients in disputes relating to:</Paragraph>
        <CircleBulletList
          items={[
            <TermItemColon term="Contractor vs. Employer Disputes" key="contractor">
              Claims for payment, delays, variations, and scope changes
            </TermItemColon>,
            <TermItemColon term="Subcontractor Disputes" key="subcontractor">
              Issues of non-payment, back-to-back liability, and termination
            </TermItemColon>,
            <TermItemColon term="Professional Negligence" key="negligence">
              Actions against architects, engineers, consultants, and
              project managers
            </TermItemColon>,
            <TermItemColon term="Delay & Disruption Claims" key="delay">
              Recovery of costs due to suspension, delay, or acceleration of
              works
            </TermItemColon>,
            <TermItemColon term="Liquidated Damages & Penalties" key="damages">
              Enforcement or defence against damages for delay or defects
            </TermItemColon>,
            <TermItemColon term="Defect Liability & Warranty Claims" key="defect">
              Claims relating to poor workmanship or defective materials
            </TermItemColon>,
            <TermItemColon term="Termination & Repudiation" key="termination">
              Wrongful termination, abandonment, or repudiation of contracts
            </TermItemColon>,
            <TermItemColon term="Guarantees & Bonds" key="guarantees">
              Enforcement or defence of bank guarantees, performance
              guarantees, and surety bonds
            </TermItemColon>,
            <TermItemColon term="Public Infrastructure Projects" key="infrastructure">
              Disputes under EPC, BOT, PPP, and government contracts
            </TermItemColon>,
            <TermItemColon term="Regulatory & Statutory Claims" key="regulatory">
              Issues arising under the Indian Contract Act, Arbitration and
              Conciliation Act, Specific Relief Act, Companies Act, and Real
              Estate (Regulation and Development) Act (RERA).
            </TermItemColon>,
          ]}
        />
      </section>

      <section>
        <SectionHeading>Modes of Resolution</SectionHeading>
        <Paragraph>
          Depending on the facts of each case, we pursue the most effective
          dispute resolution mechanism:
        </Paragraph>
        <BulletList
          items={[
            <TermItemDash term="Negotiation & Mediation" key="negotiation">
              preserving relationships while finding practical solutions
            </TermItemDash>,
            <TermItemDash term="Arbitration" key="arbitration">
              domestic and international arbitration under ICA, SIAC, LCIA,
              ICC, or ad-hoc rules
            </TermItemDash>,
            <TermItemDash term="Adjudication / Expert Determination" key="adjudication">
              involving technical experts for early resolution
            </TermItemDash>,
            <TermItemDash term="Litigation" key="litigation">
              representing clients before Commercial Courts, High Courts,
              and the Supreme Court of India.
            </TermItemDash>,
          ]}
        />
      </section>

      <section>
        <SectionHeading>Representative Experience</SectionHeading>
        <Paragraph>Our team has successfully acted in matters such as:</Paragraph>
        <BulletList
          items={[
            "Advising a leading developer in a \u20b9200+ crore dispute over delay and defect liability in a commercial project",
            "Representing a government undertaking in arbitration arising from termination of a highway EPC contract",
            "Enforcing bank guarantees against a contractor who failed to achieve milestones on time",
            "Defending a subcontractor from wrongful claims of delay and disruption by the main contractor",
            "Pursuing professional negligence claims against architects in the design of a large residential township",
            "Representing clients in RERA proceedings for non-delivery and construction defects.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Why Choose Us?</SectionHeading>
        <BulletList
          items={[
            <TermItemDash term="Specialised Knowledge" key="knowledge">
              deep understanding of Indian construction law, contracts, and
              industry practices
            </TermItemDash>,
            <TermItemDash term="Strategic Approach" key="strategic">
              tailored strategies balancing cost, timelines, and business
              relationships
            </TermItemDash>,
            <TermItemDash term="Client-Focused Service" key="client">
              transparent billing, regular updates, and accessible lawyers
            </TermItemDash>,
            <TermItemDash term="Strong Network" key="network">
              collaboration with engineers, architects, surveyors, and
              technical experts for holistic case preparation
            </TermItemDash>,
            <TermItemDash term="Proven Track Record" key="track">
              successful outcomes in high-value disputes across industries
              and jurisdictions.
            </TermItemDash>,
          ]}
        />
      </section>
    </div>
    </section>
  );
}