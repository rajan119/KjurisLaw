import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PersonalData from "@/components/PersonalInsolvency";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Personal Insolvency"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Personal Insolvency", href: "/PersonalInsolvency" },
        ]}
      />
      <PersonalData /> 
      <Footer />
    </>
  );
}