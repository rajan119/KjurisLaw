import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ITAndTelecommunications from "@/components/ITAndTelecommunications";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="IT and telecommunications"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "IT and telecommunications", href: "/it-and-telecommunications" },
        ]}
      />
      <ITAndTelecommunications />
      <Footer />
    </>
  );
}