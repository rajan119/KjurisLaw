import React from "react";

/**
 * HRCoursesIndividualPlaces
 * Next.js + Tailwind CSS component for the body content section of the
 * "HR Courses: Individual places and training events" page — matches the
 * same style used for the other Business Series pages.
 *
 * Usage:
 *   import HRCoursesIndividualPlaces from "@/components/HRCoursesIndividualPlaces";
 *   <HRCoursesIndividualPlaces />
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
    <ul className="list-disc list-outside pl-5 space-y-1.5 text-gray-700 text-sm leading-relaxed mb-4">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function CircleBulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-[circle] list-outside pl-5 space-y-1.5 text-gray-700 text-sm leading-relaxed mb-4">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

// Square-bullet list, used for the Full-Day Session topics, Pricing, and
// "How we work with you" contact options
function SquareBulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-['▪'] list-outside pl-8 space-y-1.5 text-gray-700 text-sm leading-relaxed mb-6 marker:text-gray-500">
      {items.map((item, i) => (
        <li key={i} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

// Bullet item: **Term** – rest of sentence
function TermItemDash({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <>
      <strong className="font-semibold text-gray-800">{term}</strong> &ndash; {children}
    </>
  );
}

export default function HRCoursesIndividualPlaces() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <section>
        <SectionHeading>HR Courses: Individual Seats &amp; Training Events</SectionHeading>
        <Paragraph>
          We conduct regular HR courses at our offices and other venues
          across India throughout the year for HR professionals and those
          overseeing HR in their organisations. Webinars on these topics are
          also offered
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Individual Seats &ndash; Training Events</SectionHeading>
        <Paragraph>Some of our upcoming HR sessions include:</Paragraph>
        <CircleBulletList
          items={[
            "Managing menopause in the workplace",
            "Handling subject access requests and data protection compliance for HR",
            "Managing transgender and gender identity matters",
          ]}
        />
        <BulletList
          items={[
            "Reasonable accommodations and managing employees with disabilities",
            "Sponsor licence obligations and compliance",
            "Becoming an approved sponsor.",
          ]}
        />
        <Paragraph>
          You may register individually for any of these sessions held
          periodically. Please check our current events schedule.
        </Paragraph>
        <Paragraph>
          Each two-hour session (for individual participants) is priced at
          &#8377; 8,000 (plus applicable taxes).
        </Paragraph>
      </section>

      <section>
        <SectionHeading>In-house Training</SectionHeading>
        <Paragraph>
          We also offer customised training sessions for HR professionals
          and line managers, delivered online, at your premises, or at an
          external venue. These sessions help equip participants to manage
          everyday workplace challenges effectively.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>HR courses on Offer</SectionHeading>
        <Paragraph>
          We provide a range of HR courses&mdash;from 2-hour focused modules
          to full-day comprehensive sessions. We can also design bespoke
          curricula tailored to your organisation&rsquo;s requirements.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>2-hour Sessions</SectionHeading>
        <CircleBulletList
          items={[
            <TermItemDash term="Equality & Diversity" key="equality">
              Covers workplace fairness, legal obligations under Indian
              anti-discrimination laws, and risk mitigation
            </TermItemDash>,
            <TermItemDash term="Absence Management" key="absence">
              Addresses different absence scenarios, disability law
              implications, and management strategies
            </TermItemDash>,
            <TermItemDash term="Disciplinary & Grievance Handling" key="disciplinary">
              Explores key stages and complex issues in disciplinary and
              grievance processes
            </TermItemDash>,
            <TermItemDash term="Social Media in Workplace" key="social">
              Looks at relevant case law, employee monitoring, and employer
              safeguards
            </TermItemDash>,
            <TermItemDash term="Managing Mental Health" key="mental">
              Reviews employer responsibilities and potential discrimination
              claims
            </TermItemDash>,
            <TermItemDash term="Performance Management" key="performance">
              Focuses on common performance issues, process design, and
              constructive outcomes
            </TermItemDash>,
            <TermItemDash term="Menopause for Managers" key="menopause">
              Discusses employer responsibilities and supportive workplace
              practices
            </TermItemDash>,
            <TermItemDash term="Transgender & Gender Identity Issues" key="transgender">
              Examines employer obligations and best practices in managing
              gender-identity matters
            </TermItemDash>,
            <TermItemDash term="Disciplinary Investigations" key="investigations">
              Offers an in-depth view of investigatory process and
              challenging scenarios
            </TermItemDash>,
          ]}
        />
      </section>

      <section>
        <SectionHeading>Full-Day Session &ndash; Practical Guide to Employment Law</SectionHeading>
        <Paragraph>
          This session is designed for managers and HR professionals to
          gain a hands-on understanding of key legal obligations and
          employment procedures in India, reinforced through case studies.
          Topics include:
        </Paragraph>
        <SquareBulletList
          items={[
            "Unfair termination overview",
            "Discrimination and equal opportunity law",
            "Whistleblowing law",
            "Conducting difficult conversations",
            "Case studies on equality and diversity",
            "Disciplinary and grievance frameworks",
            "Absence management and related case studies",
            "Performance management with case scenarios",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Pricing</SectionHeading>
        <Paragraph>For in-house training:</Paragraph>
        <SquareBulletList
          items={["\u20b9 50,000 per 2-hour session", "\u20b9 1,00,000 per full-day session"]}
        />
        <Paragraph>
          Prices apply for up to 30 participants. We can provide a custom
          quote if more attendees are involved.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          We support clients across India, offering legal and training
          services whether local or remote. Engagements can take place via:
        </Paragraph>
        <SquareBulletList
          items={["Phone consultations", "Video conferencing", "Face-to-face meetings"]}
        />
        <Paragraph>
          We will discuss your preferred contact mode and the best way to
          collaborate when we first connect.
        </Paragraph>
      </section>
    </div>
  );
}