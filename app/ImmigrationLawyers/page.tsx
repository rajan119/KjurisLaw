import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ImmigrationLawyers from "@/components/Immigration";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Immigration Lawyers"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Immigration Lawyers", href: "/ImmigrationLawyers" },
        ]}
      />
      <ImmigrationLawyers/> 
      <Footer />
    </>
  );
}