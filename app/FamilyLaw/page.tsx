import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FamilyLaw from "@/components/FamilyLaw";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Family Law"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Family Law", href: "/FamilyLaw" },
        ]}
      />
      <FamilyLaw/> 
      <Footer />
    </>
  );
}