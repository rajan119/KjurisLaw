import LandedEstatesAndFarming from "@/components/LandedEstatesAndFarming";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Landed Estates and Farming"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Landed Estates and Farming", href: "/landed-estates-and-farming" },
        ]}
      />
      <LandedEstatesAndFarming />
      <Footer />
    </>
  );
}