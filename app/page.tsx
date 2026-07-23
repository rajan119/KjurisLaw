import { Navbar } from "@/components/navbar";
import { HomePage } from "@/components/HomePage";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutKJuris from "@/components/AboutKJuris";
import ContactNow from "@/components/ContactNow";
import StatsNumbered from '@/components/StatsNumbered';
import Testimonial from '@/components/Testimonial';
import Latestarticle from '@/components/Latestarticle';

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <StatsNumbered />
         <HomePage />
         <main className="min-h-screen bg-background">
                   <main className="min-h-screen bg-[#fbfaf7] py-[70px] px-[5vw] flex items-center justify-center font-['Nunito_Sans']">
              <AboutKJuris />
            </main>
              </main>
             <main className="min-h-screen bg-white flex items-center justify-center p-[40px_20px] font-['Nunito_Sans']">
      <ContactNow />
      
    </main>
    <Testimonial />
    <Latestarticle />
        <Footer />
      </main>
    </>
  );
}