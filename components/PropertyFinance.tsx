import React from "react";

/**
 * PropertyFinance
 * Next.js + Tailwind CSS component for the body content section of the
 * "Property Finance" page — matches the same style used for the other
 * Business Series pages (Corporate Restructuring, Debt Collection).
 *
 * Usage:
 *   import PropertyFinance from "@/components/PropertyFinance";
 *   <PropertyFinance />
 */

const ACCENT = "text-[#C1793C]";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`font-serif text-2xl md:text-[26px] font-semibold ${ACCENT} mb-3`}>
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className={`font-serif text-xl md:text-[22px] font-semibold ${ACCENT} mb-3`}>
      {children}
    </h3>
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

export default function PropertyFinance() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        Due to the fast-moving nature of property finance, you require a
        legal partner who recognises the value of both accuracy and speed.
        Any size loan, portfolio, and kind of real estate asset, including
        buy-to-let, commercial, and semi-commercial properties, are handled
        by our specialised staff.
      </LeadParagraph>

      <section>
        <SectionHeading>For banks and other specialist property finance lenders</SectionHeading>
        <Paragraph>
          We have experience assisting lenders who finance real estate with
          their facility and security documentation, including guidance on
          and preparation of custom corporate papers, advice on obtaining
          offshore opinions when necessary, authorities, and inter-creditor
          agreements as necessary to support the lending, as well as
          expertise in researching and reporting upon all legal aspects of
          real estate security, either using a full due diligence basis or
          in conjunction with title insurance products where appropriate.
          These are the essential abilities of any seasoned property finance
          team, but we provide our expertise by bringing the best advisors to
          each transaction, working within the timescales specified by the
          parties involved, and providing management information in a way
          that best serves our customers.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>For investors and developers</SectionHeading>
        <SubHeading>Key services and how we can help</SubHeading>
        <Paragraph>
          We offer a full service to investors and developers who wish to buy
          a property with the aid of funding as well as assisting them with
          any refinance of properties they already own. We offer expertise
          in large corporate refinancing and restructuring of portfolios and
          can deal with the complexities associated with these transactions.
          The team can provide a quick and thorough analysis of title and
          documentation to help any client reach a rapid conclusion thanks to
          their extensive experience in both commercial and residential
          cases. We can offer advice on every area of a property purchase to
          make sure that our customer is moving forward in the most suitable
          way for them. We use our experience in the wider commercial
          business to ensure all matters are dealt with in an appropriate way
          for each individual client. With experience of working under tight
          timeframes and in a high pressured environment, we can ensure
          matters are dealt with very quickly and efficiently. The team pride
          ourselves on being client focussed therefore we deliver our
          services in a friendly and collaborative manner.
        </Paragraph>
        <Paragraph>
          The team can provide a quick and thorough analysis of title and
          documentation to help any client reach a rapid conclusion thanks to
          their extensive experience in both commercial and residential
          cases. We can offer advice on every area of a property purchase to
          make sure that our customer is moving forward in the most suitable
          way for them.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          Important factors for both families and businesses around the
          India. Whether or not our clients are close to our offices,
          technology has made it possible for us to offer a high level of
          service to them. We can offer our guidance in a variety of ways:
        </Paragraph>
        <BulletList
          items={["Over the telephone", "Via video conferencing", "In face to face meetings"]}
        />
      </section>
    </div>
    </section>
  );
}