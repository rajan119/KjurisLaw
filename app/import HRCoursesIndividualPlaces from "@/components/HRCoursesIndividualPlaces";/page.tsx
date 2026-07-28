import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import HRCoursesIndividualPlaces from "@/components/HRCoursesIndividualPlaces";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="HR Courses Individual Places"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "HR Courses Individual Places", href: "/HR Courses Individual Places" },
        ]}
      />
      <HRCoursesIndividualPlaces /> 
      <Footer />
    </>
  );
}