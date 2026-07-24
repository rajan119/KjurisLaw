import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MergersAndAcquisitions from "@/components/MergersAndAcquisitions";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Mergers and Acquisitions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Mergers and Acquisitions", href: "/mergers-and-acquisitions" },
        ]}
      />
      <MergersAndAcquisitions />
      <Footer />
    </>
  );
}