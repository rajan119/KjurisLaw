import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Redundancies from "@/components/Redundancies";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Redundancies"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Redundancies", href: "/Redundancies" },
        ]}
      />
      <Redundancies /> 
      <Footer />
    </>
  );
}