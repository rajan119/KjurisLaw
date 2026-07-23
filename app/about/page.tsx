import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import AboutKJuris from "@/components/AboutKJuris";
import Cards from "@/components/Cards";
import PageHeader from '@/components/PageHeader';
import BestExperience from '@/components/BestExperience';
import Aboutform from "@/components/Aboutform";
 import LatestArticlesabout from "@/components/LatestArticlesabout";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Navbar />
        {/* Reusable header */}
        <PageHeader
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      {/* बाकी page‑specific content – इसमें भी आप चाहें तो अलग background डाल सकते हैं */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold">About our company</h2>
          <p>...</p>
        </div>
      </section>
           <main className="min-h-screen bg-[#fbfaf7] py-[70px] px-[5vw] flex items-center justify-center font-['Nunito_Sans']">
      <AboutKJuris />
    </main>
    <Cards />
    <BestExperience />
    <Aboutform />
    <LatestArticlesabout />
        <Footer />
      </main>
    </>
  );
}