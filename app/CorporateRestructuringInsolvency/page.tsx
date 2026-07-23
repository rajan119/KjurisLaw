
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
 import CorporateRestructuringInsolvency from "@/components/CorporateRestructuringInsolvency";

export default function Commercialproperty() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <PageHeader
          title="Corporate Restructuring Insolvency"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Restructuring Insolvency", href: "/Restructuring Insolvency" },
          ]}
        />
      </main>
      <CorporateRestructuringInsolvency />
      <Footer />
    </>
  );
}