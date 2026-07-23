import React from "react";

/**
 * DataProtectionAndPrivacy
 * Next.js + Tailwind CSS component for the body content section of the
 * "Data Protection And Privacy" page — matches the same style used for
 * the other Business Series pages.
 *
 * Usage:
 *   import DataProtectionAndPrivacy from "@/components/DataProtectionAndPrivacy";
 *   <DataProtectionAndPrivacy />
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
  return <p className={`${ACCENT} text-lg leading-relaxed mb-4`}>{children}</p>;
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

export default function DataProtectionAndPrivacy() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        Our staff concentrates on explaining the legislation so that it is
        understandable, which is essential if you want to keep your business
        compliant with the complicated requirements around data protection.
      </LeadParagraph>
      <LeadParagraph>
        Our dedicated team delivers scaleable services, mostly on a fixed fee
        basis, so you can focus on your commercial success, confident that
        you have solid legal procedures and policies in place.
      </LeadParagraph>

      <section>
        <SectionHeading>Key protection services</SectionHeading>
        <BulletList
          items={[
            "Drafting internal data protection policies (privacy notices), records of processing activities, privacy standards, data retention policies, data processing agreements, foreign data transfer agreements, and data processing consent language are all examples of papers that must be in conformity with data protection laws.",
            "Assisting with data audits.",
            "Support in dealing with data breaches.",
            "Support in dealing with requests from data subjects to exercise their data protection rights.",
            "Advice on all aspects of direct marketing (telesales, email marketing, SMS advertising, postal marketing), as well as making sure you are in compliance with PECR regulations.",
            "Drafting Cookie Policies. Advising on cookie consent law.",
            "Directing legal due diligence investigations into the target companies\u2019 compliance with data protection laws in a corporate purchase.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Data protection examples</SectionHeading>
        <BulletList
          items={[
            "Providing advice on intra-group data sharing for a multinational corporation, as well as creating and implementing the necessary paperwork to guarantee that personal data can flow freely and legally inside the group.",
            "Assisting numerous clients following a personal data breach. In addition to drafting letters to the parties affected and providing advice on reporting to the ICO, we assisted in determining the nature and scope of the breach and whether it was reportable.",
            "Training companies with regard to their GDPR compliant policies, procedures and notices.",
            "Helping clients respond to DSARs by advising them on what information to include and what to leave out, as well as on confidentiality responsibilities to third parties, suggestions for redaction, how to strike a balance between the rights of the data subject and the clients\u2019 rights, legal professional privilege, and other exclusions.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>How do we help you draft compliance documentation?</SectionHeading>
        <BulletList
          items={[
            "We can discuss what you need over the phone, via Zoom",
            "Send you a questionnaire to complete so we can better understand your needs.",
            "We draft your documents.",
            "You review the policies.",
            "We support the implementation of your policies and procedures.",
            "If you have any questions after that, we\u2019re here to help.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          Important laws affect both households and businesses across the
          India. Whether or not our clients are close to our offices,
          technology has made it possible for us to offer a high level of
          service to them. We can offer our advice in a number of ways:
        </Paragraph>
        <BulletList
          items={["Over the telephone", "Via video conferencing", "In face to face meetings"]}
        />
      </section>
    </div>
    </section>
  );
}