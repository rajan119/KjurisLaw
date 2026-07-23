import { Navbar } from "@/components/navbar";
import PageHeader from "@/components/PageHeader";
import IntellectualPropertyAndCopyright from "@/components/Intellectualpropertyandcopyright";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Intellectual Property and Copyright"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Intellectual Property and Copyright", href: "/intellectual-property-and-copyright" },
        ]}
      />
      <IntellectualPropertyAndCopyright />
      <Footer />
    </>
  );
}