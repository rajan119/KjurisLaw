import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CollaborativeFamilyLaw from "@/components/CollaborativeFamilyLaw";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Collaborative Family Law"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Collaborative Family Law", href: "/CollaborativeFamilyLaw" },
        ]}
      />
      <CollaborativeFamilyLaw/> 
      <Footer />
    </>
  );
}