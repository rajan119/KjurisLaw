import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TribunalRepresentation from "@/components/WillsTrustsEstates";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Wills Trusts Estates"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Wills Trusts Estates", href: "/WillsTrustsEstates" },
        ]}
      />
      <TribunalRepresentation /> 
      <Footer />
    </>
  );
}