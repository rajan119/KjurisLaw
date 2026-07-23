import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import NotaryServices from "@/components/NotaryServices";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Notary Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Notary Services", href: "/Notary Services" },
        ]}
      />
      <NotaryServices /> 
      <Footer />
    </>
  );
}