import React from "react";

/**
 * CorporateRestructuringInsolvency
 * Next.js + Tailwind CSS component for just the body content section
 * (intro + service lists) from the screenshot — no navbar, hero, or footer.
 *
 * Usage:
 *   import CorporateRestructuringInsolvency from "@/components/CorporateRestructuringInsolvency";
 *   <CorporateRestructuringInsolvency />
 *
 * Notes:
 * - Heading accent color: #C1793C (orange-brown, same as other page sections).
 * - Intro paragraph uses the same accent color per the screenshot (larger,
 *   lighter weight lead-in text).
 * - "How we work with you" list uses a nested/circle bullet style to match
 *   the sub-list look in the screenshot.
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
  return (
    <p className={`${ACCENT} text-lg leading-relaxed mb-8`}>{children}</p>
  );
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

function CircleBulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-[circle] list-outside pl-5 space-y-1.5 text-gray-700 text-sm leading-relaxed mb-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function CorporateRestructuringInsolvency() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        Reaching a solution in an incredibly difficult and complex situation
        like insolvency requires expert help from a team that is
        cost-transparent, commercially minded, pragmatic, proactive, and
        sensitive. The legal rights and remedies need careful handling; we
        are here to help.
      </LeadParagraph>

      <section>
        <SectionHeading>Key insolvency and restructuring services</SectionHeading>
        <Paragraph>
          Our expert team of lawyers can help you in the following structure
        </Paragraph>
        <BulletList
          items={[
            "Transactional insolvency (buying and selling distressed businesses and assets)",
            "Contentious insolvency (disputes, potential claims and litigation)",
            "Insolvency and restructuring advising",
            "options in event of financial distress",
            "Business turnaround and corporate restructuring;",
            "Effect of forms of formal insolvency procedure including applicable moratoria",
            "Employees in insolvent situations",
            "Negotiation and realization of assets",
            "cross-border insolvency",
            "Exposures arising on insolvency and phoenixism",
            "Powers and duties of office holders, including appointments",
            "Administration of insolvent businesses and estates",
            "All forms of litigation under insolvency legislation, including bankruptcy annulment",
            "Directors duties and disqualification",
            "Enforcement of creditor / landlord rights in insolvent situations.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Our insolvency clients</SectionHeading>
        <Paragraph>The team&rsquo;s insolvency practitioner clients include:</Paragraph>
        <BulletList
          items={[
            "RSM",
            "Begbies Traynor",
            "James Cowper Kreston",
            "Interpath",
            "Mazars",
            "Leonard Curtis",
            "Evelyn Partners",
            "Quantuma",
            "FRP Advisory Trading Ltd",
          ]}
        />
      </section>

      <section>
        <SectionHeading>We also act for referrals from:</SectionHeading>
        <BulletList
          items={[
            "Funders e.g. banks, building societies, asset-based lenders",
            "Domestic and trading partners",
            "Company directors",
            "family members and guarantors",
            "Non-IP LPA receivers",
            "Non-specialist solicitors",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Example of restructuring and insolvency work</SectionHeading>
        <BulletList
          items={[
            "In recent years, the team's single largest assignment is the administrators of a major chain of convenience stores to maximize realizations and save jobs through the disposal of numerous trading outlets and associated premises.",
            "Acting for various insolvency practitioners in claims against assets including bankruptcy involving unregistered commercial land involving a disputed charge over the assets of a bus company",
            "Advising various spouses of individuals on defending claims being made by the bankruptcy trustee in bankruptcy in respect of transactions at undervalue claims.",
            "Defending various claims for misbehavior, wrongful trading and disqualification against directors of limited companies Advising overseas investors and professional trustees executors in legal transactions and restructuring options for leisure industry interests, including hotels and golf venues both in and outside of CVAs",
            "Advising overseas investors and professional trust executors on legal, transactional and restructuring options for leisure industry interests, including hotels Assisting with numerous of the sales by acquisitions from insolvency practitioner, including the purchase of a theme park and the assets of a Channel Islands-based shipping companies and freight forwar",
            "Assisting with numerous sales acquisitions from insolvency practitioners, including purchases of a theme park and the assets of a Channel Islands based shipping company and freight forwarder, and sales of multiple convenience stores from administration",
            "Assisting colleagues in the firm's corporate, commercial property and banking teams on aspects of a major refinancing and redevelopment project with an aggregate deal consideration of around £72m",
            "Advising various spouses of bankrupt individuals on defending claims being made by the bankrupt's trustees in bankruptcy in respect of preferences and/or transaction at undervalue claims.",
            "Advising company directors' on the use of 'prohibited names' under section 216 Insolvency Act 1986 and the exemptions available to them to avoid criminal prosecution",
            "Acting for insolvency practitioners to assist them in bringing applications under the Insolvency Act 1986 for increases to their fee remuneration.",
          ]}
        />
        <Paragraph>
          Advising bankrupt individuals generally as to their rights when
          considering the position of their trustees in bankruptcy.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          Key aspects act Technology has been providing a high level of
          service to our clients. Our advice can be given in many ways. We
          will talk through how you would like to be contacted and the best
          ways for us to meet in our early conversations with you.
        </Paragraph>
        <CircleBulletList
          items={[
            "Over the telephone",
            "Via video conferencing",
            "In face to face meetings",
          ]}
        />
      </section>
    </div>
    </section>
  );
}