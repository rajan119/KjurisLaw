import React from "react";

/**
 * IntellectualPropertyAndCopyright
 * Next.js + Tailwind CSS component for the body content section of the
 * "Intellectual Property and Copyright" page — matches the same style
 * used for the other Business Series pages.
 *
 * Usage:
 *   import IntellectualPropertyAndCopyright from "@/components/IntellectualPropertyAndCopyright";
 *   <IntellectualPropertyAndCopyright />
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

// Bullet item with a bold lead-in term followed by the rest of the sentence
function TermItem({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <>
      <strong className="font-semibold text-gray-800">{term}</strong> &ndash; {children}
    </>
  );
}

export default function IntellectualPropertyAndCopyright() {
  return (
    <section className="bg-white">
    <div className="bg-white max-w-4xl mx-auto px-6 py-14">
      <section>
        <SectionHeading>Protecting your intellectual property and copyright</SectionHeading>
        <BulletList
          items={[
            "For the majority of firms, intellectual property (IP) is a substantial asset.",
            "We provide legal guidance about copyright, trade mark, design, patent, database, and format rights, know-how, and passing off.",
            "Protecting, enforcing and exploiting your IP can be essential for the success of your business.",
          ]}
        />
        <Paragraph>
          For many businesses, the development, protection, exploitation, and
          enforcement of IP are of utmost importance. It is a complicated
          field of law that necessitates in-depth familiarity with all
          pertinent guidelines and directives.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>
          We can assist you with the following thanks to our considerable
          experience in IP and copyright law:
        </SectionHeading>
        <BulletList
          items={[
            <TermItem term="IP strategy" key="ip-strategy">
              Assist in determining what intellectual property (IP) your
              company has, and more crucially, what IP your company should
              protect, along with the most efficient means of doing so.
            </TermItem>,
            <TermItem term="Copyright" key="copyright">
              Our ability to advise you on matters like software licencing is
              based on our in-depth knowledge of copyright law and related
              business concerns.
            </TermItem>,
            <TermItem term="Trademarks and designs" key="trademarks">
              We can help you protect your brands and/or designs and manage
              the registration of trademarks and designs for your business.
            </TermItem>,
            <TermItem term="Patents and know-how" key="patents">
              For businesses with new inventions and processes, we can advise
              suitable licensing arrangements.
            </TermItem>,
            <TermItem term="Research & development collaborations" key="rd">
              if you are involved in R&amp;D collaboration, ensuring that the
              correct position is adopted regarding IP ownership and
              exploitation is of vital importance. We can advise parties in
              relation to various forms of R&amp;D collaborations, including
              academic and private sector collaborations.
            </TermItem>,
            "We provide advice on various other IP-related contracts, such as those involving IP assignment and licencing, distribution, sponsorship, merchandising, licencing of format rights, publishing, and franchising.",
            "We can safeguard your intellectual property rights on a national and worldwide level thanks to our connections with overseas solicitors and agents.",
            "Together with our dispute resolution team, we can also advise on what to do when someone else is using your IP without your permission.",
            "We constantly take into account your major business goals and adopt a strategic, as opposed to an academic, approach.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>First-class legal advice combined with exceptional business knowledge</SectionHeading>
        <Paragraph>
          Due to the many solid connections we have made with accountants,
          trade mark and patent agents, banks, and investors, we are able to
          offer you not just excellent legal counsel but also sound
          commercial advise. The IT IP Law Group Europe, a specialised
          network of technology lawyers that offers pan-European coverage of
          commercial and technology law concerns, counts us as a member firm
          from the United Kingdom.
        </Paragraph>
        <Paragraph>
          Additionally, we have gained specialised knowledge in the areas of
          IP licencing, acquisition, and disposal.
        </Paragraph>
        <Paragraph>
          We work with an extensive range of clients from early-stage
          businesses to multinational organisations from the India.
        </Paragraph>
      </section>

      <section>
        <SectionHeading>How we work with you</SectionHeading>
        <Paragraph>
          Key aspects acts for businesses and families throughout the India.
          Technology has enabled us to provide a high level of service to
          our clients whether they are local to our offices or not. Our
          advice can be given in variety ways:
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