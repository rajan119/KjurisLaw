import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ManagingMentalIllHealth from "@/components/ManagingMentalIllHealth";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Managing Mental Ill Health"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Managing Mental Ill Health", href: "/ManagingMentalIllHealth" },
        ]}
      />
      <ManagingMentalIllHealth /> 
      <Footer />
    </>
  );
}