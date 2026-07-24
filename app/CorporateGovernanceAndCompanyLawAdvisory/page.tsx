
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CorporateGovernanceAndCompanyLawAdvisory from "@/components/CorporateGovernanceAndCompanyLawAdvisory";

export default function CorporateGovernanceAndCompanyLawAdvisoryPage() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <PageHeader
          title="Corporate Governance And Company Law Advisory"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Corporate Governance And Company Law Advisory", href: "/CorporateGovernanceAndCompanyLawAdvisory" },
          ]}
        />
      </main>
      <CorporateGovernanceAndCompanyLawAdvisory />
      <Footer />
    </>
  );
}