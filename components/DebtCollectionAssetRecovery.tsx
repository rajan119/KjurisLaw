import React from "react";

/**
 * DebtCollectionAssetRecovery
 * Next.js + Tailwind CSS component for the body content section of the
 * "Debt Collection & Asset Recovery" page — matches the same style used
 * for the Corporate Restructuring & Insolvency page.
 *
 * Usage:
 *   import DebtCollectionAssetRecovery from "@/components/DebtCollectionAssetRecovery";
 *   <DebtCollectionAssetRecovery />
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
  return <p className={`${ACCENT} text-lg leading-relaxed mb-4`}>{children}</p>;
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

export default function DebtCollectionAssetRecovery() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        When you are not paid, your business is stopped. Healthy cash flow
        allows pay staff and suppliers, purchase more stock, invest and
        innovate. So when unpaid invoices put a stop to this, you need to be
        prompted for commercial legal help with your debt collection and
        asset recovery procedures
      </LeadParagraph>
      <LeadParagraph>
        Our commercial Debt Collection and Asset Recovery team can assist
        your business with maximizing cash flow cost-effective with your
        in-house credit control and finance functions, and provide a
        spectrum of services that comprise expert, cost-efficient, and
        flexible debt recovery.
      </LeadParagraph>

      <section>
        <SectionHeading>Key debt collection services</SectionHeading>
        <BulletList
          items={[
            "Reconciliation & Auditing \u2013 assist your review of current process systems, and control related to cash flow management, credit control, and management of debt recovery when required",
            "An extension to your credit control provision \u2013 help you either temporarily or in the longer term to offer early arrears credit controlling.",
            "A \u2018triage\u2019 style review of your debt ledger, collegiately assist your team to review cases at the pre-legal stage as to their readiness for court action",
            "Pre-litigations phone reconciliation and due diligence solutions: assist you with resolving queries ahead of its proceedings, due diligence assessment determining what the most cost-effective method of progressing will be; income and expenditure assessment and payments plan set-up and monitoring.",
            "Insolvency \u2013 from bankruptcy for winding up, we work very closely with our Corporate Recovery & Insolvency team and can support your needs from bespoke high-profile instructions to volume requirements.",
            "Volume litigation support in circumstances where your own in-house team remains involved, and we advise from instruction through to judgment and enforcement",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Debt collection and asset recovery works examples</SectionHeading>
        <BulletList
          items={[
            "Pursuing an African company through the English courts to enforce/recover a debt obtained in Africa.",
            "Recover a large debt for a motor parts supplier from a customer who attempted the debt by closing and reopening businesses.",
            "Obtain settle at mediation of a large payment from an international bank under a complex services supply agreement.",
            "Acting for invoice finance and factoring companies specifically tailored for the recruitment industry. We overcame a defense and counterclaim involving allegations of incompetent and unqualified staff.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Specialist experience in the recruitment sector</SectionHeading>
        <Paragraph>
          In addition to acting for invoice finance in the recruitments
          industry, we also act for in excess of 170 agencies in matters
          ranging from:
        </Paragraph>
        <BulletList
          items={[
            "Undisputed debt recovery arising from unpaid invoices",
            "Disputed invoices and claims arising therefrom",
            "Acting for both former employment agencies and former consultants in injunctive proceedings.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Charges</SectionHeading>
        <Paragraph>
          Please see our Charging Structure for details of our charges for
          this service.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          Key aspects act Technology has been providing a high level of
          service to our clients. There are numerous ways to offer our
          counsel. In our initial interactions with you, we discuss the best
          ways to meet and how you would want to be contacted.
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