import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DivorceCivilPartnershipsFinancialRemedies from "@/components/DivorceCivilPartnershipsFinancialRemedies";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Divorce Civil Partnerships Financial Remedies"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Divorce Civil Partnerships Financial Remedies", href: "/DivorceCivilPartnershipsFinancialRemedies" },
        ]}
      />
      <DivorceCivilPartnershipsFinancialRemedies/> 
      <Footer />
    </>
  );
}