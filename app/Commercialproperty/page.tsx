
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
 import CommercialProperty from "@/components/CommercialProperty";

export default function Commercialproperty() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <PageHeader
          title="Commercial Property"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Commercial Property", href: "/Commercialproperty" },
          ]}
        />
      </main>
      <CommercialProperty />
      <Footer />
    </>
  );
}