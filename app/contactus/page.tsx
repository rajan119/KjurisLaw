import ContactSection from "../../components/ContactSection";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
 import LocationMap from "@/components/Locationmap";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <PageHeader
          title="Contact Us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact Us", href: "/contact" },
          ]}
        />

        <ContactSection />
        <LocationMap />
      </main>
     
      <Footer />
    </>
  );
}