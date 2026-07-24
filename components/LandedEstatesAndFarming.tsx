import React from "react";

/**
 * LandedEstatesAndFarming
 * Next.js + Tailwind CSS component for the body content section of the
 * "Landed Estates and Farming" page — matches the same style used for
 * the other Business Series pages.
 *
 * Usage:
 *   import LandedEstatesAndFarming from "@/components/LandedEstatesAndFarming";
 *   <LandedEstatesAndFarming />
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

function BoldParagraph({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-800 font-semibold leading-relaxed mb-3">{children}</p>;
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

export default function LandedEstatesAndFarming() {
    
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <section>
        <SectionHeading>Project managing your rural business interests</SectionHeading>
        <Paragraph>
          Assisting you in creating your own strategy for your rural
          business. You can receive practical, understandable assistance
          from our skilled team of rural legal specialists at our offices or
          from the comfort of your own home. Our knowledge in rural,
          agricultural, and family matters can benefit your business and
          give you personal security.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Experts in rural services</SectionHeading>
        <Paragraph>
          You will require experienced counsel that is customised to the
          specific demands of the countryside whether you need it for
          business or personal matters like laying out your future goals.
        </Paragraph>
        <Paragraph>
          Moore Barlow has a team of leading legal experts who are country
          people themselves and can genuinely empathise with you, your
          business and your opportunities and challenges.
        </Paragraph>
        <Paragraph>
          We would rather walk your land with you than talk over the
          telephone. Owners of landed estates, farms, substantial country
          mansions, polo and racing operations, stud farms, veterinary
          clinics, and horticultural businesses are among our long-standing
          clients.
        </Paragraph>
        <Paragraph>
          We provide advice on all matters pertaining to rural life, such as
          employment, real estate litigation, regulatory matters,
          residential and commercial development, and property law.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Why Moore Barlow?</SectionHeading>
        <Paragraph>
          With our connections throughout the rural sector, we have strong
          links with other professionals such as agents, surveyors,
          accountants and other lawyers.
        </Paragraph>
        <Paragraph>
          Several of our team are ranked in Chambers (the independent legal
          directory) as leaders in their respective fields and many are
          members or fellows of the Agricultural Law Association, the
          Country Land. Our lawyers are accessible and approachable,
          explaining legal matters in plain, easy to understand language.
          We are happy to hold meetings at your home or place of business,
          wherever you&rsquo;re located.
        </Paragraph>
        <Paragraph>
          With offices in London, Richmond, Southampton, Guildford,
          Lymington and Woking, we are ideally placed to offer expert
          support on a local and national level.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>Our rural legal services for individuals and families</SectionHeading>
        <BoldParagraph>Explore how we can help you and your family</BoldParagraph>
        <Paragraph>
          On top of our robust legal service offering for businesses, we
          also have vast experience working with individuals and their
          families.
        </Paragraph>
        <Paragraph>
          Whether you are looking for advice on transactions covering your
          rural property or farm, the management of sporting activities,
          agricultural tenancies, estate planning or partnership and
          farming structures, you will want to engage professionals with a
          specialist understanding of rural life. That&rsquo;s where Moore
          Barlow can help.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          kjuris law act Technology has been providing a high level of
          service to our clients. Our advice can be given in many ways. We
          will talk through how you would like to be contacted and the best
          ways for us to meet in our early conversations with you.
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