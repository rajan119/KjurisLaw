import React from "react";

/**
 * CommercialProperty
 * Next.js + Tailwind CSS component matching the provided design screenshot.
 *
 * Usage (App Router or Pages Router):
 *   import CommercialProperty from "@/components/CommercialProperty";
 *   <CommercialProperty />
 *
 * Notes:
 * - Heading font uses a serif stack (font-serif). If you want the exact
 *   "Playfair Display" / "Lora" look from the screenshot, add the Google
 *   Font in your layout and extend Tailwind's fontFamily.serif with it.
 * - Accent color (headings, links) uses a custom amber/terracotta shade
 *   close to the screenshot: #C1793C. Defined inline via arbitrary value
 *   classes (text-[#C1793C]) so no tailwind.config changes are required —
 *   feel free to move it into your config as `theme.extend.colors.accent`.
 */

const ACCENT = "text-[#C1793C]";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`font-serif text-2xl md:text-[28px] font-semibold ${ACCENT} mb-4`}>
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gray-800 leading-relaxed mb-4">{children}</p>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-2 text-gray-800 leading-relaxed mb-4">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function CommercialProperty() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-15 space-y-10">
      {/* Commercial Property */}
      <section>
        <SectionHeading>Commercial Property</SectionHeading>
        <Paragraph>
          Any transaction involving commercial property must be handled with
          great care — whether you are acquiring your first commercial asset
          or managing a wide-ranging real estate portfolio. Our specialist
          commercial property team, with deep experience in India&rsquo;s
          real estate and regulatory environment, will align with your
          business objectives and ensure a seamless process.
        </Paragraph>
      </section>

      {/* Our Key Commercial Property Services */}
      <section>
        <SectionHeading>Our Key Commercial Property Services</SectionHeading>
        <BulletList
          items={[
            "Structuring and managing property portfolios; arranging finance; acquiring and disposing of properties",
            "Comprehensive property due diligence, ownership verification, and suitability checks for intended usage",
            "Dispute resolution and litigation relating to property rights, including easement and right-of-way claims",
            "Advice on telecommunications infrastructure agreements, leases, and licenses in compliance with Indian telecommunication and infrastructure regulations",
            "Handling construction contracts, subcontractor agreements, and related disputes",
            "Guidance on land use and development approvals under Indian planning, development control, and zoning laws",
            "Landlord-tenant advisory services including lease negotiations, drafting of lease agreements, assignments or sub-letting, lease renewals, surrender, termination clauses, renegotiations, change of use, and break options",
            "Addressing rights and claims in leasehold properties, including issues surrounding lease extensions or enfranchisement",
          ]}
        />
      </section>

      {/* Retail Sector */}
      <section>
        <SectionHeading>Retail Sector</SectionHeading>
        <Paragraph>
          Retail real estate is undergoing constant transformation driven by
          evolving consumer habits and the integration of technology. The
          Indian retail sector faces unique challenges such as regulatory
          compliance (e.g. FDI in retail, local states&rsquo;
          shop-and-establishment acts), municipal approvals, and
          infrastructure constraints. Our experience in this domain enables
          us to provide strategic legal support to help your retail business
          stay ahead.
        </Paragraph>
      </section>

      {/* Development Projects */}
      <section>
        <SectionHeading>Development Projects</SectionHeading>
        <Paragraph>
          Our team assists developers, investors, and landowners across all
          stages of development: from acquisition of land, securing
          statutory approvals (such as change of land use, development
          permissions, environmental clearances), to construction contracts
          and final sale or leasing of commercial premises. We coordinate
          with architects, contractors, local authorities, and financiers to
          ensure that your project is structured, financed, and executed in
          compliance with Indian laws, and commercial objectives are met.
        </Paragraph>
      </section>

      {/* Educational / Institutional Properties */}
      <section>
        <SectionHeading>Educational / Institutional Properties</SectionHeading>
        <Paragraph>
          We also specialise in dealing with property matters for schools,
          universities, and educational institutions. Our services include:
        </Paragraph>
        <BulletList
          items={[
            "General property advisory and facilities management",
            "Lease agreements and land acquisition issues involving government bodies, trusts, or religious institutions",
            "Obtaining permits, approvals, and liaison with educational regulatory bodies",
            "Oversight of construction contracts and allied works for campus development.",
          ]}
        />
      </section>

      {/* Our Approach */}
      <section>
        <SectionHeading>Our Approach</SectionHeading>
        <Paragraph>
          Client service is central to our practice. From the outset, we
          discuss your preferred mode of communication and meeting format.
          We aim to provide support in the way that is most convenient to
          you, whether:
        </Paragraph>
        <BulletList
          items={["By telephone", "Over video conference", "In person meetings"]}
        />
        <Paragraph>
          We begin every engagement with a discussion about your
          communication preferences and logistics, to ensure clarity,
          responsiveness, and comfort in collaboration.
        </Paragraph>
      </section>
    </div>
    </section>
  );
}