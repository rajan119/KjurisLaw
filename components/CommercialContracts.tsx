import React from "react";

/**
 * CommercialContracts
 * Next.js + Tailwind CSS component for the body content section of the
 * "Commercial Contracts" page — matches the same style used for the other
 * Business Series pages (Corporate Restructuring, Debt Collection, Property Finance).
 *
 * Usage:
 *   import CommercialContracts from "@/components/CommercialContracts";
 *   <CommercialContracts />
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

function LeadParagraph({ children }: { children: React.ReactNode }) {
  return <p className={`${ACCENT} text-lg leading-relaxed mb-8`}>{children}</p>;
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

export default function CommercialContracts() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        Your commercial contracts shouldn&rsquo;t just protect your
        commercial interest, they should add value too. When you innovate,
        grow and develop your business, solid contracts and legal
        underpinning is crucial to long-term success.
      </LeadParagraph>

      <section>
        <SectionHeading>Key services relating to commercial contracts</SectionHeading>
        <BulletList
          items={[
            "Supplier agreements",
            "Franchising",
            "Manufacturing agreements",
            "International contracts",
            "Software development and licensing agreements",
            "Sponsorships",
            "Consumer protection contracts",
            "Agency and distribution agreements",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Work Examples</SectionHeading>
        <BulletList
          items={[
            "Creating a set of standard terms for Nolan Business Solutions, a global solution provider that deploys industry-leading mid-market business systems and specialised software programmes.",
            "Preparing and giving advice to regarding a software development and licence agreement for a new banking platform for their retail banking accounts.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          Key aspects act Technology has been providing a high level of
          service to our clients. Our advice can be given in many ways. We
          will talk through how you would like to be contacted and the best
          ways for us to meet in our early conversations with you.
        </Paragraph>
        <BulletList
          items={["Over the telephone", "Via video conferencing", "In face to face meetings"]}
        />
      </section>
    </div>
    </section>
  );
}