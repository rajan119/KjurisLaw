import React from "react";

/**
 * MergersAndAcquisitions
 * Next.js + Tailwind CSS component for the body content section of the
 * "Mergers and Acquisitions" page — matches the same style used for the
 * other Business Series pages. Includes an italic testimonial-style
 * paragraph for the award announcement section.
 *
 * Usage:
 *   import MergersAndAcquisitions from "@/components/MergersAndAcquisitions";
 *   <MergersAndAcquisitions />
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

function ItalicParagraph({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-700 italic leading-relaxed mb-3">{children}</p>;
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

export default function MergersAndAcquisitions() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        Without professional advice, you run the danger of the entire
        project failing during complicated corporate transactions like
        disposals, management buy-outs, and mergers and acquisitions.
      </LeadParagraph>
      <Paragraph>
        It goes without saying that your lawyers should make the deal
        happen, but our team stands out from the competition thanks to
        skills like flawless project management from beginning to end,
        targeted risk-assessed due diligence, understanding what matters
        commercially in negotiations, and truly understanding what success
        looks like for you.
      </Paragraph>

      <section>
        <SectionHeading>
          Winners of &lsquo;law firm of the year 2023&rdquo; &ndash;business
          magazinf solent deals
        </SectionHeading>
        <ItalicParagraph>
          Thank you to all of those who supported our nomination. The
          recognition is very well deserved. We have a fantastic team at
          all levels who were incredibly busy in 2022, completing over 60
          transactions, many of them involving local businesses, financiers
          and advisers. Our success is based on building strong relations
          with our clients, professional advisers and the wider community
          in our region. We will continue to build on our success by
          developing our relationships with key stakeholders in 2023 and
          beyond.&rdquo;
        </ItalicParagraph>
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          Keys apects acts for businesses and families throughout the India.
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