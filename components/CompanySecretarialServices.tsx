import React from "react";

/**
 * CompanySecretarialServices
 * Next.js + Tailwind CSS component for the body content section of the
 * "Company Secretarial Services" page — matches the same style used for
 * the other Business Series pages.
 *
 * Usage:
 *   import CompanySecretarialServices from "@/components/CompanySecretarialServices";
 *   <CompanySecretarialServices />
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

export default function CompanySecretarialServices() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <Paragraph>
        Never underestimate the importance of maintaining an
        organization&rsquo;s statutory books and records and making sure
        that Companies House filings are performed precisely and on time.
        Failure to do so could result in difficult and occasionally pricey
        consequences.
      </Paragraph>
      <Paragraph>
        We can help you to rebuild your registers and fill in the gaps in
        your company&rsquo;s statutory filing history. We charge a set
        annual fee for our company secretarial and registered office
        services.
      </Paragraph>

      <section>
        <SectionHeading>Key company secretarial services</SectionHeading>
        <BulletList
          items={[
            "Maintenance of statutory registers",
            "Preparation and filing of annual returns",
            "Reconstitution of company books",
            "Preparation and filing of documentation for Companies House filings including changes of directors, new share allotments and changes of registered office address",
            "letting you know when to file your PSC and the company\u2019s statutory accounts",
            "Registered office service \u2013 all official correspondence received by us delivered to you",
          ]}
        />
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          Important laws affect both households and businesses across the
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