import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DebtCollectionAssetRecovery from "@/components/DebtCollectionAssetRecovery";

export default function DebtCollectionAssetRecoveryPage() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        <PageHeader
          title="Debt Collection & Asset Recovery"
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Debt Collection & Asset Recovery",
              href: "/debt-collection-asset-recovery",
            },
          ]}
        />

        <DebtCollectionAssetRecovery />
      </main>

      <Footer />
    </>
  );
}