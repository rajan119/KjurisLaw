import React from "react";

/**
 * TribunalRepresentation
 * Next.js + Tailwind CSS component for the body content section of the
 * "Tribunal Representation" page — matches the same style used for the
 * other Business Series pages.
 *
 * Usage:
 *   import TribunalRepresentation from "@/components/TribunalRepresentation";
 *   <TribunalRepresentation />
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

export default function TribunalRepresentation() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <SectionHeading>Tribunal Representation</SectionHeading>
      <Paragraph>
        Our team is experienced in representing clients before various
        tribunals in India, in matters such as unfair dismissal,
        discrimination, violation of employment contracts, and statutory
        disputes. If you are facing a claim, our employment law specialists
        based in Mumbai (and across India) can help you defend your case
        and strive for the outcome you need.
      </Paragraph>

      <section>
        <SectionHeading>How We Assist in Tribunal Representation</SectionHeading>
        <BulletList
          items={[
            "Explaining the tribunal / labour court process from start to finish",
            "Advising you on the merits and risks of your case",
            "Drafting your written response or rejoinder",
            "Compiling and organizing documentary evidence for the hearing",
            "Preparing witness statements",
            "Conducting settlement negotiations and finalising settlement terms",
            "Providing mock hearings / role-play sessions so you know what to expect in the actual tribunal",
          ]}
        />
      </section>

      <section>
        <SectionHeading>How We Engage with You</SectionHeading>
        <Paragraph>
          We represent both employers and employees across India. Thanks to
          technology, we can deliver high-quality legal service even if you
          are not near our office. We can consult and coordinate via:
        </Paragraph>
        <BulletList
          items={[
            "Telephone",
            "Video conferencing",
            "In-person meetings (where feasible and as needed)",
          ]}
        />
        <Paragraph>
          During our initial discussion, we will mutually decide the best
          mode of communication and meeting arrangement.
        </Paragraph>
      </section>
    </div>
    </section>
  );
}