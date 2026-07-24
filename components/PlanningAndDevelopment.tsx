import React from "react";

/**
 * PlanningAndDevelopment
 * Next.js + Tailwind CSS component for the body content section of the
 * "Planning and Development" page — matches the same style used for the
 * other Business Series pages.
 *
 * Note: the source page had some duplicated paragraphs/lines (a rendering
 * glitch on the original site). This component includes each paragraph
 * only once, cleanly.
 *
 * Usage:
 *   import PlanningAndDevelopment from "@/components/PlanningAndDevelopment";
 *   <PlanningAndDevelopment />
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

export default function PlanningAndDevelopment() {
  return (
    <section className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-14">
      <LeadParagraph>
        It is crucial that you seek the right guidance if you are a
        developer, a landowner, or an objector because law and planning
        policies are continuously changing.
      </LeadParagraph>

      <Paragraph>
        Specialist counsel from individuals knowledgeable in all facets of
        the planning process is essential, from the early drafting of a
        planning application to third party challenges of a final decision.
      </Paragraph>
      <Paragraph>
        Getting guidance from a specialist and experienced team can help you
        successfully navigate what can be a complex area of law, whether
        you&rsquo;re getting ready for an initial application, appealing a
        decision, making sure planning obligations are carefully drafted, or
        complying with enforcement notices or judicial review due to third
        party obligations.
      </Paragraph>
      <Paragraph>
        We deliver a thorough service that addresses every facet of the
        planning process, such as:
      </Paragraph>
      <BulletList
        items={[
          "Application",
          "Appeals",
          "Objections",
          "Complex section 106 agreements",
          "Enforcement",
          "consultation in the process of creating a policy",
          "Judicial reviews",
        ]}
      />

      <section>
        <SectionHeading>Applications</SectionHeading>
        <Paragraph>
          Preparing an application requires experience and attention to
          detail. If you are to make the most of a site&rsquo;s potential
          for development, close examination of policy and planning issues
          is essential. This includes:
        </Paragraph>
        <BulletList
          items={[
            "The impact of local/national planning policies",
            "The need to address policy, planning impact and technical issues",
            "Understanding how a planning authority or inspector will look into and address the key issues",
            "Anticipating and overcoming potential objections and challenges",
            "Recognising the importance of planning requirements, their obligations, and the problems they might provide to developers",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Appeals</SectionHeading>
        <Paragraph>
          We can provide you with the following advice if you want to appeal
          a decision:
        </Paragraph>
        <BulletList
          items={[
            "The overall merits of a development proposal and its chances of success on appeal",
            "Whether the appeal should be heard informally, in writing, or through a public inquiry.",
            "the concerns that the appeal will need to address and what additional professional input will be necessary to guarantee success.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Planning obligations</SectionHeading>
        <Paragraph>
          The provision of affordable housing and developer contributions
          are typically ensured through planning obligations. These
          contracts must be meticulously written. We provide guidance on all
          facets of planning duties, such as:
        </Paragraph>
        <BulletList
          items={[
            "Compliance with the CIL Regulations 2010;",
            "SANG Credit mechanisms;",
            "Unilateral Undertakings;",
            "Infrastructure contracts, such as Section 278 and Section 38 contracts;",
            "Renegotiation, modification and discharge of section 106 obligations.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Enforcement proceedings</SectionHeading>
        <Paragraph>
          It is extremely important to comply with enforcement notices as a
          failure to do so can lead to criminal sanction.
        </Paragraph>
        <Paragraph>
          We provide guidance on all facets of enforcement, such as:
        </Paragraph>
        <BulletList
          items={[
            "Legal issues on enforcement, including whether a planning breach exists",
            "Whether buildings or their use are immune from enforcement action",
            "The effects of enforcement notifications, stop notices, and violation of condition notices on developers and landowners",
            "Possible violations of other law frameworks, such as listed building regulations",
            "How to avoid, delay or challenge enforcement proceedings by way of appeals",
            "Using planning duties and conditions as a way to deal with enforcement issues",
            "prosecution defence for violations of enforcement notifications.",
          ]}
        />
      </section>

      <section>
        <SectionHeading>Judicial review</SectionHeading>
        <Paragraph>
          Disputes over planning issues are becoming more frequent and may
          involve other parties.
        </Paragraph>
        <Paragraph>
          We have a great deal of expertise bringing and defending legal
          challenges to the adoption of development plan policies and
          allocations, the granting of planning permission, and the
          rejecting of planning appeals. One of the first planning teams in
          the nation to successfully overturn the acceptance of a
          neighbourhood plan was ours.
        </Paragraph>
        <Paragraph>
          We can offer advice on the justifications for a legal challenge
          and the best strategies for pursuing or rebutting it. Before a
          planning application is made, we can offer advice on how to
          negotiate it and get approval to reduce the likelihood of a legal
          challenge.
        </Paragraph>
        <Paragraph>
          We can also provide advice regarding the likelihood of legal
          challenges to real estate and development transactions that are
          moving forward with the use of conditional contracts or options.
        </Paragraph>
        <Paragraph>
          We have offices in London, Richmond, Southampton, Guildford,
          Lymington and Woking and can offer specialist expert support on a
          local and national level.
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