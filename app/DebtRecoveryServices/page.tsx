import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DebtRecoveryServices from "@/components/DebtRecoveryServices";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Debt Recovery Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Debt Recovery Services", href: "/DebtRecoveryServices" },
        ]}
      />
      <DebtRecoveryServices/> 
      <Footer />
    </>
  );
}