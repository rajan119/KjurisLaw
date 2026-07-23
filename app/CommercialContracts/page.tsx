import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CommercialContracts from "@/components/CommercialContracts";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Commercial Contracts"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Commercial Contracts", href: "/commercial-contracts" },
            ]}
      />
      <CommercialContracts />
      <Footer />
    </>
  );
}