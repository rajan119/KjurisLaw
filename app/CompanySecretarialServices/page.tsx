import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CompanySecretarialServices from "@/components/CompanySecretarialServices";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Company Secretarial Services"
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Company Secretarial Services", href: "/CompanySecretarialServices" },
          ]}
      />
      <CompanySecretarialServices />
      <Footer />
    </>
  );
}
