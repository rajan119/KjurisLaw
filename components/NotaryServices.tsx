import React from "react";

/**
 * NotaryServices
 * Next.js + Tailwind CSS component for the body content section of the
 * "Notary Services" page — matches the same style used for the other
 * Business Series pages.
 *
 * Usage:
 *   import NotaryServices from "@/components/NotaryServices";
 *   <NotaryServices />
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

// Bullet linking a person's name to their Terms & Conditions / Privacy Notice
function ProfileLink({ name, href = "#" }: { name: string; href?: string }) {
  return (
    <a href={href} className="text-blue-600 hover:underline">
      {name} &ndash; Terms and Conditions and Privacy Notice
    </a>
  );
}

export default function NotaryServices() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <Paragraph>
        The Archbishop of Canterbury has awarded and overseen the public
        office of notary. A Notary lends credibility to a document by
        signing and sealing it, and if all requirements have been followed,
        the document will be accepted without inquiry in all jurisdictions
        throughout the world. As a result, the Notary&rsquo;s job is to
        handle documents that will be utilised abroad.
      </Paragraph>

      <section>
        <SectionHeading>How we can help you</SectionHeading>
        <Paragraph>
          The receiving authority will need some assurance that the
          information contained in the document is intended and correct
          and that, if the document shows it was signed by a named
          individual, someone with authority has confirmed that this is
          indeed the case. This is especially true if you need to sign a
          document or provide evidence of something that will be relied
          upon in a foreign country but you do so outside of that country.
        </Paragraph>
        <Paragraph>
          Members of our staff are also Notary Publics. However, it is
          important to note that when acting in their capacity as a Notary,
          they do so as independent professionals and the service they
          provide is provided direct to you and not by Moore Barlow. On our
          website, you can find their individual Terms of Business for
          notarial services by visiting their profile:
        </Paragraph>
        <BulletList
          items={[
            <ProfileLink name="Candida Purser" key="candida" />,
            <ProfileLink name="Louise Williams" key="louise" />,
          ]}
        />
      </section>

      <section>
        <SectionHeading>What will the Notary do?</SectionHeading>
        <Paragraph>
          A Notary will deal with a number of different documents and
          requirements. The most common activities comprise:
        </Paragraph>
        <BulletList
          items={[
            "Witnessing the signature of documents",
            "Establishing the veracity of the information stated in a document or certifying copies of originals",
            "Administering oaths and declarations",
          ]}
        />
        <Paragraph>
          The Notary will have to satisfy themselves that the client
          understands the nature of the document or that documents provided
          to him/her are valid. It is not a rubber stamping exercise. The
          Notary will formally identify the signer, typically using a
          passport and another document that verifies a residential
          address. The Notary must be certain that the signer(s) of a
          document to be completed by a company has the necessary power and
          authority to sign on behalf of that company and that the company
          is indeed in existence.
        </Paragraph>
        <Paragraph>
          The Notary will also give advice on what specifications are
          necessary to guarantee that the document is in a format that is
          recognised by the receiving nation. This can necessitate the
          creation of an additional document or a particular certificate.
          It might also need to be made legal.
        </Paragraph>
        <Paragraph>
          In some nations, a document only has to have a Notary&rsquo;s
          seal and signature to be valid.
        </Paragraph>
        <Paragraph>
          In other nations, the document will need to be legalised with the
          Notary&rsquo;s seal and signature. This procedure entails the
          submission of the notarized document to the state in which the
          notary practises, which in the India is the Foreign &amp;
          Commonwealth Office, who attach a second certificate to the
          document.
        </Paragraph>
        <Paragraph>
          The second certificate will be a piece of paper called a
          &ldquo;Apostille&rdquo; that is affixed to your original document
          and bears the seal of the Foreign and Commonwealth Office. This
          certificate attests to the legitimacy of the Notary&rsquo;s seal
          and signature, as well as their credentials. In accordance with
          The Hague Convention of 1961, it is attached. Following your
          appointment with the notary, this often takes up to 4 working
          days.
        </Paragraph>
        <Paragraph>
          The consulate or embassy of the country that will be receiving
          the document may additionally need to add its own verification in
          addition to the Foreign &amp; Commonwealth Office&rsquo;s
          certificate.
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