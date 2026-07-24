import React from "react";

/**
 * PrivateEquity
 * Next.js + Tailwind CSS component for the body content section of the
 * "Private Equity" page — matches the same style used for the other
 * Business Series pages.
 *
 * Usage:
 *   import PrivateEquity from "@/components/PrivateEquity";
 *   <PrivateEquity />
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
  return <p className={`${ACCENT} text-lg leading-relaxed mb-2`}>{children}</p>;
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

export default function PrivateEquity() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        Private equity has for many years been a major growth engine of
        India merger and acquisition activity.
      </LeadParagraph>
      <Paragraph>
        Our team has handled numerous private transactions. On exits
        supported by private equity, we frequently represent departing
        management teams and shareholders.
      </Paragraph>

      <section>
        <SectionHeading>Key Private equity Services</SectionHeading>
        <BulletList
          items={[
            "Portfolio side buy and build",
            "Sell side to PE backed acquirers",
            "Rolling forward with management teams and delicious equity participations",
            "Disinvestments",
            "Partial exits and roll forwards",
            "Protection of PE funds on exits",
            "Exits via IPOs",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Work Example</SectionHeading>
        <BulletList
          items={[
            "Churches Fire and Horizon Capital on a number of portfolio acquisitions",
            "Gimv on a number of India acquisitions, such as Grandeco\u2019s purchase of Holden Decor and Summa\u2019s acquisition of CadCam Techology",
            "Waterland Private Equity as sponsor of Diversi Foods on its acquisition of Montana Bakery",
            "Down2Earth Capital in partnership with Gimv on the cross border acquisition by Contraload NV of Packaging Logistics Services from Bibby",
            "CatenaLucis on its several investments in Abingdon Health plc and its eventual offering on AIM (market size upon admission: \u00a392m).",
            "In addition to Cloud Dialogues, Technological Business Solutions, Lone Worker Solutions, and Global Rostering Systems, Horizon Capital supported Totalmobile\u2019s acquisitions.",
            "Waterland Private Equity on the sale of its Diversi Foods interests to Oetker Gruppe",
            "Shareholders on sales to PE-backed buyers, including Kings Park Capital, Cerberus, ECI, Cairngorm, Infracapital, and Cerberus",
            "Equity participation by management teams in transactions funded, among others, by YFM Private Equity and Inflexion Capital",
          ]}
        />
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          kjuris law acts for businesses and families throughout the India.
          Whether or not our clients are close to our offices, technology
          has made it possible for us to offer a high level of service to
          them. We can offer our guidance in a variety of ways:
        </Paragraph>
        <BulletList
          items={["Over the telephone", "Via video conferencing", "In face to face meetings"]}
        />
        <Paragraph>
          In our initial interactions with you, we will discuss the best
          ways to meet and how you would want to be contacted.
        </Paragraph>
      </section>
    </div>
    </section>
  );
}