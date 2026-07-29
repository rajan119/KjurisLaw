import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PerformanceManagement from "@/components/PerformanceManagement";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Performance Management"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Performance Management", href: "/PerformanceManagement" },
        ]}
      />
      <PerformanceManagement /> 
      <Footer />
    </>
  );
}