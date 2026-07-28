import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import EmploymentContractAdvice from "@/components/EmploymentContractAdvice";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Employment Contract Advice"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Employment Contract Advice", href: "/Employment Contract Advice" },
        ]}
      />
      <EmploymentContractAdvice /> 
      <Footer />
    </>
  );
}