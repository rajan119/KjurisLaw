import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CharityLaw from "@/components/CharityLaw";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Charity Law"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Charity Law", href: "/CharityLaw" },
        ]}
      />
      <CharityLaw/> 
      <Footer />
    </>
  );
}