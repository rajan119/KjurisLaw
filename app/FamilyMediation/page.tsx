import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FamilyLaw from "@/components/FamilyMediation";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Family Mediation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Family Mediation", href: "/FamilyMediation" },
        ]}
      />
      <FamilyLaw/> 
      <Footer />
    </>
  );
}