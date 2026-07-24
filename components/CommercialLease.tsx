import React from "react";

/**
 * CommercialLease
 * Next.js + Tailwind CSS component for the body content section of the
 * "Commercial Lease" page — matches the same style used for the other
 * Business Series pages.
 *
 * Usage:
 *   import CommercialLease from "@/components/CommercialLease";
 *   <CommercialLease />
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

export default function CommercialLease() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <section>
        <SectionHeading>
          We understand that the leasing of commercial property is an
          important process for you and your business.
        </SectionHeading>
        <Paragraph>
          You will receive specialised help from our knowledgeable team to
          make sure everything goes as planned.
        </Paragraph>
        <Paragraph>
          When making crucial decisions for yourself and your business, it
          is crucial that you have the greatest legal help, regardless of
          whether you are a landlord or renter. At Moore Barlow, we have a
          wealth of expertise guiding our clients towards a lease that meets
          their needs by offering knowledgeable, individualised legal
          counsel.
        </Paragraph>
        <Paragraph>
          We appreciate that every transaction is different, and we pride
          ourselves on fully understanding your unique situation and the
          requirements you have for your commercial lease, aiming to get
          you the outcome you want.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>What commercial lease services do we offer?</SectionHeading>
        <Paragraph>
          Our solicitors can help you in many different ways, whether it is
          drafting or agreeing a lease that works best for you and your
          business or negotiating on certain terms of the lease that you
          might disagree with. We can carry out a review and report on your
          lease to see if everything is in line with your expectations and
          existing legislation or carry out full due diligence on your
          desired property.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Do you need to hire a lawyer while signing a commercial lease?</SectionHeading>
        <Paragraph>
          No, you are not required to retain legal counsel while
          contemplating signing a business lease. However, it is essential
          that you obtain the assistance of a legal expert so that you have
          a clear grasp of what is legally required of you as a tenant or
          landlord.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Why Moore Barlow?</SectionHeading>
        <Paragraph>
          Whether you are signing a lease or require assistance managing
          your business property, our skilled team of commercial lease
          solicitors can be there for you at every step of the process. We
          can support you each step of the way to give you the confidence
          that your investment is safe and that you have the necessary
          tools at your disposal.
        </Paragraph>
        <Paragraph>
          With offices in, Richmond, Guildford and Woking, we&rsquo;re
          ideally placed to offer specialist real estate support on a local
          and national level.
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
  );
}