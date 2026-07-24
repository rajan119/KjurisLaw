import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PlotSales from "@/components/PlotSales";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Plot Sales"
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Plot Sales", href: "/PlotSales" },
          ]}
      />
      <PlotSales />
      <Footer />
    </>
  );
}
