import React from "react";

/**
 * CorporateGovernanceAndCompanyLawAdvisory
 * Next.js + Tailwind CSS component for the body content section of the
 * "Corporate Governance & Company Law Advisory" page — matches the same
 * style used for the other Business Series pages.
 *
 * Usage:
 *   import CorporateGovernanceAndCompanyLawAdvisory from "@/components/CorporateGovernanceAndCompanyLawAdvisory";
 *   <CorporateGovernanceAndCompanyLawAdvisory />
 */

const ACCENT = "text-[#C1793C]";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`font-serif text-2xl md:text-[26px] font-semibold ${ACCENT} mb-3`}>
      {children}
    </h2>
  );
}

function LeadParagraph({ children }: { children: React.ReactNode }) {
  return <p className={`${ACCENT} text-lg leading-relaxed mb-2`}>{children}</p>;
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

export default function CorporateGovernanceAndCompanyLawAdvisory() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        To satisfy changing needs, corporate structures might need to
        evolve. Whether you are the owner or the director of the company,
        our staff collaborates with you and other experts to make sure the
        ideal structure is in place for your enterprise.
      </LeadParagraph>
      <Paragraph>
        The key to your success in managing restructures and reorganisations
        is getting it right.
      </Paragraph>

      <section>
        <SectionHeading>Corporate Governance Services</SectionHeading>
        <BulletList
          items={[
            "Corporate structuring",
            "Reorganisations and group simplifications",
            "Demergers by capital reduction, section 110 schemes and schemes of arrangement",
            "Mergers and amalgamations",
            "Members\u2019 voluntary liquidations and distributions in specie",
            "Purchase of own shares",
            "Returning capital to owners",
          ]}
        />
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          Whether or not our clients are close to our offices, technology
          has made it possible for us to offer a high level of service to
          them. We can offer our guidance in a variety of ways:
        </Paragraph>
        <BulletList
          items={["Over the telephone", "Via video conferencing", "In face to face meetings"]}
        />
        <Paragraph>
          In our initial interactions with you, we will discuss the best
          ways to meet and how you would want to be contacted.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Mee the team</SectionHeading>
        <Paragraph>
          Our Corporate Governance &amp; Company Law Advisory team is made
          up of 1 partner, 1 associate and 2 solicitors. You can find their
          contact details below.
        </Paragraph>
      </section>
    </div>
    </section>
  );
}