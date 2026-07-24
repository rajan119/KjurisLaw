import React from "react";

/**
 * GrowthAndDevelopmentCapital
 * Next.js + Tailwind CSS component for the body content section of the
 * "Growth & Development Capital" page — matches the same style used for
 * the other Business Series pages.
 *
 * Usage:
 *   import GrowthAndDevelopmentCapital from "@/components/GrowthAndDevelopmentCapital";
 *   <GrowthAndDevelopmentCapital />
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

export default function GrowthAndDevelopmentCapital() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        Businesses frequently require growth capital from the beginning and
        in the early phases of development in order to expand and
        accomplish their objectives.
      </LeadParagraph>
      <Paragraph>
        Whether your business is a start up in need of seed capital or a
        business that needs funding to help it grow and reach its
        potential, we are here to help.
      </Paragraph>
      <Paragraph>
        From startup seed funding to series A and subsequent investment
        rounds, our team provides advice. Entrepreneurs, startups, business
        angels, and accredited investors are a few of our clients.
      </Paragraph>

      <section>
        <SectionHeading>Key growth capital services</SectionHeading>
        <BulletList
          items={[
            "Start-ups",
            "Spin-outs",
            "Seed capital",
            "Advanced Subscription Agreements (ASA)",
            "SEIS and EIS investments",
            "Convertible Loan Notes",
            "Series A",
            "Down rounds",
            "Equity warrants",
            "Investor due diligence",
            "Investment agreements",
            "Exit planning",
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
      </section>
    </div>
    </section>
  );
}