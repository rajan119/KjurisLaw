import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RegulatoryAdvice from "@/components/RegulatoryAdvice";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Regulatory Advice"
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Regulatory Advice", href: "/RegulatoryAdvice" },
          ]}
      />
      <RegulatoryAdvice />
      <Footer />
    </>
  );
}