import React from "react";

/**
 * PerformanceManagement
 * Next.js + Tailwind CSS component for the body content section of the
 * "Performance Management" page — matches the same style used for the
 * other Business Series pages.
 *
 * Usage:
 *   import PerformanceManagement from "@/components/PerformanceManagement";
 *   <PerformanceManagement />
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
  return <p className={`${ACCENT} leading-relaxed mb-8`}>{children}</p>;
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

export default function PerformanceManagement() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        Lackluster showing can occur for some reasons however frequently
        chiefs avoid direct conversations with inadequately performing
        workers. Nonetheless, this not just prompts the representative
        working wastefully or committing errors which can be exorbitant for
        the business yet it likewise adversely affects camaraderie. Whether
        you can manage execution issues on a casual premise or you really
        want to carry out a more conventional execution improvement plan,
        we can assist with directing you through the interaction to
        follow. Assuming you have moved to a type of mixture or remote
        working you genuinely should have great frameworks set up to screen
        and oversee execution for those working away from the workplace
        You ought to likewise have an unmistakable strategy set up setting
        out the conditions in which crossover or remote working game plans
        might be modified where there are concerns in regards to execution.
      </LeadParagraph>

      <section>
        <SectionHeading>What we can assist with around execution the executives</SectionHeading>
        <BulletList
          items={[
            "Creating and updating robust management policies and capability procedures that are fit for purpose",
            "Counsel on the compelling utilization of trial periods, one-to-ones and examinations",
            "Successful Execution Improvement Plans, including setting targets, sensible timescales for development and backing/preparing required",
            "Conducting performance management investigations and collating evidence",
            "Directing execution the board gatherings including giving composed alerts",
            "Advice on managing remote employees",
            "Reasonable adjustments for disabled employees",
            "Managing poor attitude to work",
            "Dealing with appeals",
            "Avoiding unfair dismissal and discrimination claims",
            "Creating and updating robust hybrid and remote working policies setting out how you will monitor performance  and manage performance issues when they arise",
          ]}
        />
        <Paragraph>
          We likewise consistently give pragmatic line director preparing
          on execution the executives.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          Key aspects acts for businesses and families throughout the UK.
          Innovation has empowered us to give an elevated degree of
          administration to our clients regardless of whether they are
          nearby to our workplaces. Our recommendation can be given in
          numerous ways:
        </Paragraph>
        <BulletList
          items={["Over the telephone", "Via video conferencing", "In face to face meetings"]}
        />
        <Paragraph>
          We will talk through how you might want to be reached and the
          most effective ways for us to meet in our initial discussions
          with you.
        </Paragraph>
      </section>
    </div>
    </section>
  );
}