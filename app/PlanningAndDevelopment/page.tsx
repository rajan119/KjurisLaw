import PlanningAndDevelopment from "@/components/PlanningAndDevelopment";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Planning and Development"
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Planning and Development", href: "/PlanningAndDevelopment" },
          ]}
      />
      <PlanningAndDevelopment />
      <Footer />
    </>
  );
}
