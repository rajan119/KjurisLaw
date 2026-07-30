import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FamilyLaw from "@/components/EducationLaw";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Education Law"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Education Law", href: "/EducationLaw" },
        ]}
      />
      <FamilyLaw/> 
      <Footer />
    </>
  );
}