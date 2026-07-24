import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GrowthAndDevelopmentCapital from "@/components/GrowthAndDevelopmentCapital";
import PlotSales from "@/components/PlotSales";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Growth And Development Capital"
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Growth And Development Capital", href: "/GrowthAndDevelopmentCapital" },
          ]}
      />
      <GrowthAndDevelopmentCapital />
      <Footer />
    </>
  );
}
