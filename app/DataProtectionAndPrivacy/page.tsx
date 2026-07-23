import { Navbar } from "@/components/navbar";
import PageHeader from "@/components/PageHeader";
import DataProtectionAndPrivacy from "@/components/DataProtectionAndPrivacy";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Data Protection And Privacy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Data Protection And Privacy", href: "/data-protection-and-privacy" },
        ]}
      />
      <DataProtectionAndPrivacy />
      <Footer />
    </>
  );
}