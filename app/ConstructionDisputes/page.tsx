import ConstructionDisputes from "@/components/ConstructionDisputes";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Construction Disputes"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Construction Disputes", href: "/Construction Disputes" },
        ]}
      />
      <ConstructionDisputes /> 
      <Footer />
    </>
  );
}