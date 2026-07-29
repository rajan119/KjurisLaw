import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CharityForum from "@/components/CharityForum";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Charity Forum"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Charity Forum", href: "/CharityForum" },
        ]}
      />
      <CharityForum /> 
      <Footer />
    </>
  );
}