import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FamilyLaw from "@/components/CohabitationUnmarriedCouples";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Cohabitation Unmarried Couples"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cohabitation Unmarried Couples", href: "/CohabitationUnmarriedCouples" },
        ]}
      />
      <FamilyLaw/> 
      <Footer />
    </>
  );
}