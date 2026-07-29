import React from "react";

/**
 * DebtRecoveryServices
 * Next.js + Tailwind CSS component for the body content section of the
 * "Debt Recovery Services" page — matches the same style used for the
 * other Business Series pages. Includes a numbered process list.
 *
 * Usage:
 *   import DebtRecoveryServices from "@/components/DebtRecoveryServices";
 *   <DebtRecoveryServices />
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

function NumberedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="list-decimal list-outside pl-5 space-y-2 text-gray-700 text-sm leading-relaxed mb-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

// List item: **Term** — rest of sentence (em dash variant)
function TermItemEmDash({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <>
      <strong className="font-semibold text-gray-800">{term}</strong> &mdash; {children}
    </>
  );
}

export default function DebtRecoveryServices() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <SectionHeading>Debt Recovery Services</SectionHeading>
      <Paragraph>
        We recognise that unpaid debts can seriously affect your personal
        finances or business operations. Our Debt Recovery Services are
        structured to assist you in recovering what you are owed promptly,
        effectively, and in accordance with Indian law.
      </Paragraph>

      <section>
        <SectionHeading>Why Choose Us for Debt Recovery?</SectionHeading>
        <Paragraph>
          Our experienced legal team offers a customised approach for each
          matter, ensuring you receive clear advice, a well-defined
          strategy, and professional courtroom or out-of-court
          representation. Whether you are an individual, a small business,
          or a large enterprise, we commit to securing the best possible
          result for you.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Our Debt Recovery Process</SectionHeading>
        <Paragraph>
          We adopt a systematic approach to ensure transparency and
          efficiency:
        </Paragraph>
        <NumberedList
          items={[
            <TermItemEmDash term="Initial Consultation" key="initial">
              We assess your case, review documents, and advise on options
              under Indian statutes (e.g. Limitat Bankruptcy Act).
            </TermItemEmDash>,
            <TermItemEmDash term="Pre-Litigation Steps" key="pre">
              Issuing legal notices and demand letters to debtors under the
              provisions of the Indian Contract Act and other applicable
              laws.
            </TermItemEmDash>,
            <TermItemEmDash term="Negotiation & Settlement" key="negotiation">
              We attempt to settle disputes amicably to avoid litigation,
              using mediation, arbitration, or structured settlement
              agreements.
            </TermItemEmDash>,
            <TermItemEmDash term="Litigation & Enforcement" key="litigation">
              If no settlement is reached, we file suit in Debt Recovery
              Tribunals, civil courts or consumer courts, and pursue
              enforcement of decrees under orders such as the Code of Civil
              Procedure, attachment of property, or via insolvency
              proceedings.
            </TermItemEmDash>,
          ]}
        />
      </section>

      <section>
        <SectionHeading>Types of Debt We Handle</SectionHeading>
        <BulletList
          items={[
            "Unpaid invoices and commercial bills",
            "Outstanding personal or unsecured loans",
            "Business-to-business debts",
            "Rent arrears and lease default",
            "Contractual debts",
            "Unpaid salaries, wages, or employment-related dues.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Benefits of Professional Debt Recovery</SectionHeading>
        <BulletList
          items={[
            "Faster resolution compared to informal recovery efforts",
            "Compliance with Indian debt recovery and litigation laws",
            "Relief from administrative burden and stress",
            "Enhanced probability of complete or partial recovery",
          ]}
        />
      </section>
    </div>
    </section>
  );
}