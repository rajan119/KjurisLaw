import React from "react";

/**
 * ManagingMentalIllHealth
 * Next.js + Tailwind CSS component for the body content section of the
 * "Managing Mental Ill Health" page — matches the same style used for the
 * other Business Series pages.
 *
 * Usage:
 *   import ManagingMentalIllHealth from "@/components/ManagingMentalIllHealth";
 *   <ManagingMentalIllHealth />
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

export default function ManagingMentalIllHealth() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <Paragraph>
        Mental health concerns are a common reason why employees may need
        time off. It is therefore essential that your mental health
        policies and procedures are legally sound and that you know how to
        manage mental health issues in the workplace in compliance with
        Indian laws and regulations.
      </Paragraph>

      <section>
        <SectionHeading>How we Can Assist with Managing Mental Ill-Health at Work</SectionHeading>
        <BulletList
          items={[
            "Best practices for the day-to-day management of mental health issues",
            "Formulating or improving workplace mental health policies (in line with Indian labour and mental health statutes)",
            "Managing occupational well-being and supporting medical evidence (e.g. psychiatric reports, fitness to work certificates)",
            "Handling intermittent short-term absence due to mental health",
            "Overseeing long-term absenteeism caused by mental health conditions",
            "Addressing disability discrimination and providing reasonable accommodations under the Rights of Persons with Disabilities Act, 2016",
            "Managing the impact of deteriorated mental health on performance",
            "Structuring reporting procedures and return-to-work interviews",
            "Modifying the workplace environment to reduce risks to mental health",
          ]}
        />
        <Paragraph>
          We also conduct training for line managers on how to handle
          mental health challenges in their teams, aligning with Indian
          best practices.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>How We Operate</SectionHeading>
        <Paragraph>
          Our firm provides legal support across India. We offer flexible
          modes of consultancy to suit your needs:
        </Paragraph>
        <BulletList
          items={["By telephone", "Via video conferencing", "In face-to-face meetings"]}
        />
        <Paragraph>
          In our initial discussion, we will determine your preferred mode
          of communication and the best approach for us to work with you.
        </Paragraph>
      </section>
    </div>
  );
}