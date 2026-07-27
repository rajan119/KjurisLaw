import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PlanningConsultants from "@/components/PlanningConsultants&PlanningLaw";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Planning Consultants & Planning Law"
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Planning Consultants & Planning Law", href: "/PlanningConsultants&PlanningLaw" },
          ]}
      />
      <PlanningConsultants />
      <Footer />
    </>
  );
}
