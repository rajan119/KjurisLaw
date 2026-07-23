import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Outsourcing from "@/components/Outsourcing";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Outsourcing"
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Outsourcing", href: "/Outsourcing" },
          ]}
      />
      <Outsourcing />
      <Footer />
    </>
  );
}