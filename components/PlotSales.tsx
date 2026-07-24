import React from "react";

/**
 * PlotSales
 * Next.js + Tailwind CSS component for the body content section of the
 * "Plot Sales" page — matches the same style used for the other
 * Business Series pages. Includes a left-bordered blockquote testimonial.
 *
 * Usage:
 *   import PlotSales from "@/components/PlotSales";
 *   <PlotSales />
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

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-gray-300 pl-5 py-1 my-6 text-gray-700 leading-relaxed">
      {children}
    </blockquote>
  );
}

export default function PlotSales() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <section>
        <SectionHeading>Making the sale of plots simple, despite their complexity</SectionHeading>
        <BulletList
          items={[
            "Your plot sales are likely to be more complex with each new development",
            "Specialist assistance is required to accommodate a variety of housing types, including the necessity for social housing, public amenities, or commercial constructions.",
          ]}
        />
        <Paragraph>
          Developers are aware that the era of homogenous lots with
          predetermined housing has long since passed. Nearly every property
          is unique, every plot is distinctive, and every transaction is
          inevitably more complicated now than it once was on many sites. In
          order to accommodate many housing types, particularly the demand
          for social housing, this complexity might take many different
          shapes. Specialist assistance is required for the development of
          public facilities and commercial prospects. The management of the
          land purchase and plot sales by a single specialised team enables
          concerns like access, rights of way, and building covenants to be
          addressed before they become a problem. We also rely on our
          in-depth understanding of your clients&rsquo; requirements,
          acquired from our comprehensive conveyancing service to buyers of
          new construction properties from
        </Paragraph>

        <Quote>
          Because of Moore Barlow&rsquo;s power and breadth of real estate
          market knowledge, choosing to collaborate with them exclusively
          for our plot sales business was an easy choice. Both of our first
          two developments sold out in record time thanks to the excellent
          support provided by Zoe and the crew for the sales on those two
          sites. Our goal is to hasten the spread of modular homes
          throughout the India, and having Moore Barlow as a partner in our
          reliable supply chain will enable us to realise our goal of
          expanding purchasing opportunities.
        </Quote>
      </section>

      <section>
        <SectionHeading>Why Moore Barlow?</SectionHeading>
        <Paragraph>
          As one of the few specialist legal firms that look after all the
          requirements of commercial and residential developments we can
          make the whole process as easy as possible, saving you time and
          money.
        </Paragraph>
        <Paragraph>
          With offices in London, Richmond, Southampton, Guildford,
          Lymington and Woking, we&rsquo;re ideally placed to offer
          specialist legal advice and support on a local and national
          basis.
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
    </section>
  );
}