import React from "react";

/**
 * Outsourcing
 * Next.js + Tailwind CSS component for the body content section of the
 * "Outsourcing" page — matches the same style used for the other
 * Business Series pages.
 *
 * Usage:
 *   import Outsourcing from "@/components/Outsourcing";
 *   <Outsourcing />
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

export default function Outsourcing() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <section>
        <SectionHeading>
          Effective outsourcing can improve services for your company while
          also saving you time and money.
        </SectionHeading>
        <BulletList
          items={[
            "Outsourcing technology or other services can have a wealth of benefits, helping maximise the value of your business.",
            "However, outsourcing contracts have their own hazards, so it\u2019s important to understand what you\u2019re agreeing to before signing anything.",
            "Maximising the benefits of outsourcing requires good planning, project management and a comprehensive understanding of how outsourcing affects your business.",
            "From planning right through to contract negotiation and completion, we can work with you on the entire process surrounding your outsourcing projects.",
          ]}
        />
        <Paragraph>
          Whether you are the outsourcing supplier or client, we ensure that
          the parties are in agreement about their respective roles and
          responsibilities which is essential for long term success.
        </Paragraph>
        <Paragraph>
          For suppliers, we will ensure that your obligations are clear,
          additional services will be paid for and that if things do go
          wrong there are suitable limitation clauses to protect you.
        </Paragraph>
        <Paragraph>
          For clients, we can help negotiate contracts that provide
          commercial certainty, set out clear service levels for the
          supplier and provide remedies in the event of poor performance by
          the supplier.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>How we can support you</SectionHeading>
        <Paragraph>
          It&rsquo;s crucial to be clear about your expectations for your
          outsourcing provider, including the minimal level of service you
          need from them. It makes sense to involve your internal IT staff
          in contract negotiations if you have one, as they frequently have
          the best understanding of the systems and features needed to
          support your company&rsquo;s future growth. We are accustomed to
          speaking with management and IT teams, so we can make sure that
          the final contract takes your commercial and technical
          requirements into account.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Understanding the small print</SectionHeading>
        <Paragraph>
          Making sure there are sufficient service level promises is one of
          the key aspects of outsourcing contracts. Any pre-contract
          guarantees made by the service provider, if you are the
          beneficiary of the services, should be explicitly stated in your
          agreement along with appropriate escalation methods and remedies
          in the event that the services are subpar. It is crucial, if you
          are the provider, that your pricing is tied to a precise scope of
          services and allows for price increases if services change over
          the course of the contract. We assist you in making sure the
          contract satisfies your company needs, whether you are the
          supplier or the recipient.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Negotiate a liability amount that protects your business</SectionHeading>
        <Paragraph>
          Many companies that outsource their services learn too late that
          their supplier has reduced or excluded most of their obligation in
          their contract, nullifying any assurances made about the services
          being supplied. Suppliers also have a commercial need to make sure
          that their financial obligation under the outsourcing contract is
          commensurate with the deal&rsquo;s worth. We can advise you on the
          appropriate limitation clause and negotiate or draught it on your
          behalf because we have the experience and knowledge needed. We
          rely on the knowledge of our specialised solicitors to give you
          thorough advice regarding your outsourcing contracts. We can offer
          you a full range of services so you may confidently fill all of
          your needs for legal outsourcing. the law firm
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