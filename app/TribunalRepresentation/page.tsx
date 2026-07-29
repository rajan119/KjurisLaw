import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TribunalRepresentation from "@/components/TribunalRepresentation";
export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Tribunal Representation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tribunal Representation", href: "/TribunalRepresentation" },
        ]}
      />
      <TribunalRepresentation /> 
      <Footer />
    </>
  );
}