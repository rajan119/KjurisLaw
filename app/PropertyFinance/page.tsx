import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PropertyFinance from "@/components/PropertyFinance";

export default function PropertyFinancePage() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <PageHeader
          title="Property Finance"
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Property Finance",
              href: "/property-finance",
            },
          ]}
        />

        <PropertyFinance />
      </main>

      <Footer />
    </>
  );
}