import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PersonalData from "@/components/PersonalData";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Personal Data"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Personal Data", href: "/PersonalData" },
        ]}
      />
      <PersonalData /> 
      <Footer />
    </>
  );
}