import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import AgriculturalLandEstates from "@/components/AgriculturalLandEstates";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Agricultural Land Estates"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Agricultural Land Estetes", href: "/AgriculturalLandEstates" },
        ]}
      />
      <AgriculturalLandEstates /> 
      <Footer />
    </>
  );
}