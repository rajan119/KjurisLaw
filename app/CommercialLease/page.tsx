import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CommercialLease from "@/components/CommercialLease";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Commercial Lease"
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Commercial Lease", href: "/CommercialLease" },
          ]}
      />
      <CommercialLease />
      <Footer />
    </>
  );
}