export type MenuItem = {
  label: string
  href?: string
  children?: MenuItem[]
  isLabel?: boolean // New property to mark non-clickable items
}

export const navMenu: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "about" },
  {
    label: "Business Series",
    children: [
      {
        label: "Banking And Finance",
        isLabel: true, // This makes it non-clickable
        children: [
          { label: "Commercial Property", href: "Commercialproperty" },
          { label: "Corporate Restructuring & Insolvency", href: "CorporateRestructuringInsolvency" },
          { label: "Debt Collection & Asset Recovery", href: "DebtCollection&AssetRecovery" },
          { label: "Property Finance", href: "PropertyFinance" },
        ],
      },
      {
        label: "Commercial And Technology",
         isLabel: true, // This makes it non-clickable
        children: [
          { label: "Commercial Contracts", href: "CommercialContracts" },
          { label: "Data Protection And Privacy", href: "DataProtectionAndPrivacy" },
          { label: "Intellectual Property And Copyright", href: "IntellectualPropertyAndCopyright" },
          { label: "IT And Telecommunications", href: "ITAndTelecommunications" },
          { label: "Outsourcing", href: "Outsourcing" },
          { label: "Notary Services", href: "NotaryServices" },
          { label: "Regulatory Advice", href: "RegulatoryAdvice" },
        ],
      },
      {
        label: "Property And Land",
         isLabel: true, // This makes it non-clickable
        children: [
          { label: "Commercial Lease", href: "CommercialLease" },
          { label: "Commercial Property", href: "Commercialproperty" },
          { label: "Landed Estates And Farming", href: "LandedEstatesAndFarming" },
          { label: "Planning And Development", href: "PlanningAndDevelopment" },
          { label: "Plot Sales", href: "PlotSales" },
        ],
      },
      {
        label: "Corporate",
         isLabel: true, // This makes it non-clickable
        children: [
          { label: "Company Secretarial Services", href: "CompanySecretarialServices" },
          { label: "Corporate Governance & Company Law Advisory", href: "CorporateGovernanceAndCompanyLawAdvisory" },
          { label: "Growth & Development Capital", href: "GrowthAndDevelopmentCapital" },
          { label: "Mergers-And-Acquisitions", href: "MergersAndAcquisitions" },
          { label: "Private Equity", href: "PrivateEquity" },
        ],
      },
      {
        label: "Construction",
         isLabel: true, // This makes it non-clickable
        children: [
          { label: "Construction Disputes", href: "ConstructionDisputes" },
          { label: "Commercial Property", href: "Commercialproperty" },
          { label: "Planning Consultants And Planning Law", href: "PlanningConsultants&PlanningLaw" },
        ],
      },
      {
        label: "Employment",
         isLabel: true, // This makes it non-clickable
        children: [
          { label: "Employment Contract Advice", href: "EmploymentContractAdvice" },
          { label: "HR Courses", href: "HRCoursesIndividualPlaces" },
          { label: "Managing Mental Ill Health", href: "ManagingMentalIllHealth" },
          { label: "Performance Management", href: "PerformanceManagement" },
          { label: "Redundancies", href: "Redundancies" },
          { label: "Tribunal Representation", href: "TribunalRepresentation" },
        ],
      },
      { label: "Debt Recovery Services", href: "DebtRecoveryServices" },
    ],
  },
  {
    label: "Charity Services",
    children: [
      { label: "Charity Forum", href: "CharityForum" },
      { label: "Charity Law", href: "CharityLaw" },
    ],   
  },
  {
    label: "Your Life Services",
    children: [
      { label: "Agricultural Land And Estates", href: "#" },
      {
        label: "Employment",
         isLabel: true, // This makes it non-clickable
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
         isLabel: true, // This makes it non-clickable
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
