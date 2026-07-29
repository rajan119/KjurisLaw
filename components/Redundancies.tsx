import React from "react";

/**
 * Redundancies
 * Next.js + Tailwind CSS component for the body content section of the
 * "Redundancies" page — matches the same style used for the other
 * Business Series pages.
 *
 * Usage:
 *   import Redundancies from "@/components/Redundancies";
 *   <Redundancies />
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

export default function Redundancies() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <SectionHeading>Redundancies</SectionHeading>
      <Paragraph>
        In difficult financial times, employers may consider redundancies.
        However, it is essential to engage in fair consultation and follow
        due process to avoid costly wrongful dismissal claims under Indian
        labour law.
      </Paragraph>

      <section>
        <SectionHeading>How we can assist in the redundancy process</SectionHeading>
        <BulletList
          items={[
            "Successful administration of the overt repetitiveness process beginning to end",
            "Consideration of alternatives to redundancy such as pay cuts or reduction in hours",
            "Identifying selection pools and objective selection criteria",
            "Individual consultation with employees at risk of redundancy",
            "Collective consultation where 20 or more employees are being made redundant at the same establishment",
            "The appointment of worker delegates for aggregate interview",
            "Advice on suitable alternative employment and trial periods",
            "Dealing with appeals",
            "Advice on the payments to be made to employees including the calculation of statutory redundancy pay",
            "Reorganisations and restructures",
            "Voluntary redundancy procedures",
            "Settlement agreements",
            "Mitigating the risk of discrimination issues",
            "Advice on dealing with unfair dismissal claims and claims for a failure to collectively consult",
          ]}
        />
        <Paragraph>
          We also offer practical training to line managers on handling
          redundancy discussions sensitively.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          We represent employers and employees across India. Our services
          can be delivered:
        </Paragraph>
        <BulletList
          items={["Over the phone", "Via video conferencing", "Through in-person meetings"]}
        />
        <Paragraph>
          In our first meeting, we&rsquo;ll discuss your preferred mode of
          communication and the best way to assist you.
        </Paragraph>
      </section>
    </div>
    </section>
  );
}