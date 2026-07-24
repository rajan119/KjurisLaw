import React from "react";

/**
 * RegulatoryAdvice
 * Next.js + Tailwind CSS component for the body content section of the
 * "Regulatory Advice" page — matches the same style used for the other
 * Business Series pages.
 *
 * Usage:
 *   import RegulatoryAdvice from "@/components/RegulatoryAdvice";
 *   <RegulatoryAdvice />
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

export default function RegulatoryAdvice() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <section>
        <SectionHeading>
          Helping ensure that you comply with rules and regulations to run
          your business efficiently
        </SectionHeading>
        <BulletList
          items={[
            "Support for regulated organisations with all types of legal and regulatory obligations to assist make sure your company is completely compliant.",
            "Understanding how businesses function in-depthly helps that regulations are implemented in a way that benefits your company, your stakeholders, and your regulator.",
          ]}
        />
        <Paragraph>
          If you are a regulated business, you will have a set of rules that
          you need to comply with. However, regulators are increasingly not
          issuing prescriptive rules, but instead preferring guidelines that
          can be used across a range of circumstances. The problem with
          guidance is that there will inevitably be a level of
          interpretation. As experts in regulatory law, we can help
          interpret and define what is both compliant and best practice.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Financial regulators</SectionHeading>
        <Paragraph>
          We can provide you with specific advice on the relevant rule books
          and best practises if you are one of the 56,000 financial services
          firms regulated by the Financial Conduct Authority (FCA), one of
          the 18,000 firms for which the FCA serves as the prudential
          regulator, or one of the 1,500 firms under the Prudential
          Regulation Authority (PRA).
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Trustees</SectionHeading>
        <Paragraph>
          Tens of thousands of groups in the India depend on trustees for
          support, from pension funds to charities. Trustees offer
          governance for these organisations. Many of these organisations
          are also subject to regulation, and trustees frequently need
          assistance with regard to their regulatory obligations.
        </Paragraph>
        <Paragraph>We support both organisations and their trustees.</Paragraph>
      </section>

      <section>
        <SectionHeading>Assisting you to concentrate on managing your organisation effectively</SectionHeading>
        <Paragraph>
          In many cases, breaking your regulator&rsquo;s requirements can
          result in harsh penalties, such as being barred from running a
          business and/or being punished. We can make sure you follow the
          laws and regulations so you can concentrate on managing your
          business effectively.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Practical and expert knowledge of regulatory regimes</SectionHeading>
        <Paragraph>
          We look after the legal needs of many regulated organisations and
          have practical knowledge of how businesses are run as well as the
          issues they may face. We can bring this knowledge into action when
          looking at your regulatory regime and decide how to practically
          implement it to ensure compliance in a way that serves your
          business, your stakeholders and your regulator.
        </Paragraph>
        <Paragraph>
          Our experienced team are based across our offices in Richmond,
          London, Southampton, Lymington, Guildford and Woking.
        </Paragraph>
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
        <Paragraph>
          We&rsquo;ll talk about how you&rsquo;d like to be contacted and the
          best ways to get to us in our initial conversation with you.
        </Paragraph>
      </section>
    </div>
    </section>
  );
}