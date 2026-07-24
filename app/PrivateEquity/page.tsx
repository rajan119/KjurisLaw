import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PrivateEquity from "@/components/PrivateEquity";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Private Equity"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Private Equity", href: "/private-equity" },
        ]}
      />
      <PrivateEquity />
      <Footer />
    </>
  );
}