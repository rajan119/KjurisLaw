export type MenuItem = {
  label: string
  href?: string
  children?: MenuItem[]
}

export const navMenu: MenuItem[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "about" },
  {
    label: "Business Series",
    children: [
      {
        label: "Banking And Finance",
        children: [
          { label: "Commercial Property", href: "Commercialproperty" },
          { label: "Corporate Restructuring & Insolvency", href: "CorporateRestructuringInsolvency" },
          { label: "Debt Collection & Asset Recovery", href: "DebtCollection&AssetRecovery" },
          { label: "Property Finance", href: "PropertyFinance" },
        ],
      },
      {
        label: "Commercial And Technology",
        children: [
          { label: "Commercial Contracts", href: "CommercialContracts" },
          { label: "Data Protection And Privacy", href: "DataProtectionAndPrivacy" },
          { label: "Intellectual Property And Copyright", href: "IntellectualPropertyAndCopyright" },
          { label: "IT And Telecommunications", href: "ITAndTelecommunications" },
          { label: "Outsourcing", href: "Outsourcing" },
          { label: "Notary Services", href: "NotaryServices" },
          { label: "Regulatory Advice", href: "#" },
        ],
      },
      {
        label: "Property And Land",
        children: [
          { label: "Commercial Lease", href: "#" },
          { label: "Commercial Property", href: "#" },
          { label: "Landed Estates And Farming", href: "#" },
          { label: "Planning And Development", href: "#" },
          { label: "Plot Sales", href: "#" },
        ],
      },
      {
        label: "Corporate",
        children: [
          { label: "Company Secretarial Services", href: "#" },
          { label: "Corporate Governance & Company Law Advisory", href: "#" },
          { label: "Growth & Development Capital", href: "#" },
          { label: "Mergers-And-Acquisitions", href: "#" },
          { label: "Private Equity", href: "#" },
        ],
      },
      {
        label: "Construction",
        children: [
          { label: "Construction Disputes", href: "#" },
          { label: "Commercial Property", href: "#" },
          { label: "Planning Consultants And Planning Law", href: "#" },
        ],
      },
      {
        label: "Employment",
        children: [
          { label: "Employment Contract Advice", href: "#" },
          { label: "HR Courses", href: "#" },
          { label: "Managing Mental Ill Health", href: "#" },
          { label: "Performance Management", href: "#" },
          { label: "Redundancies", href: "#" },
          { label: "Tribunal Representation", href: "#" },
        ],
      },
      { label: "Debt Recovery Services", href: "#" },
    ],
  },
  {
    label: "Charity Services",
    children: [
      { label: "Charity Forum", href: "#" },
      { label: "Charity Law", href: "#" },
    ],
  },
  {
    label: "Your Life Services",
    children: [
      { label: "Agricultural Land And Estates", href: "#" },
      {
        label: "Employment",
        children: [
          { label: "Employment Contract Advice", href: "#" },
          { label: "HR Courses", href: "#" },
          { label: "Managing Mental Ill Health", href: "#" },
          { label: "Performance Management", href: "#" },
          { label: "Tribunal Representation", href: "#" },
          { label: "Redundancies", href: "#" },
        ],
      },
      {
        label: "Family Law",
        children: [
          { label: "Children Law", href: "#" },
          { label: "Cohabitation & Unmarried Couples", href: "#" },
          { label: "Divorce, Civil Partnerships & Financial Remedies", href: "#" },
          { label: "Collaborative Family Law", href: "#" },
        ],
      },
      { label: "Family Mediation", href: "#" },
      { label: "Notary Public", href: "#" },
      { label: "Personal Data", href: "#" },
      { label: "Immigration", href: "#" },
      { label: "Personal Insolvency", href: "#" },
      { label: "Wills & Trusts", href: "#" },
      { label: "Education Law", href: "#" },
    ],
  },
  { label: "Contact Us", href: "contactus" },
]
