'use client'
import { PracticeCard } from '@/components/PracticeCard'
// import { FaUser, FaStar, FaClipboard, FaCheck } from 'react-icons/fa';
// import Image from "next/image";

export function HomePage() {
  
  const practiceAreas = [
    {
      icon: '💼',
      title: 'Business Law',
      caseCount: 12,
      category: 'Business Law',
      description:
        'Accidents at work can have terrible repercussions for both individuals and businesses. Our dedicated team specializes in navigating the intricate realm of workplace accident cases, providing comprehensive legal support to ensure fair compensation, navigate regulatory compliance, and promote a safer working environment for all parties involved.',
    },
    {
      icon: '⚖️',
      title: 'Criminal Law',
      caseCount: 12,
      category: 'Criminal Law',
      description:
        'In a challenging criminal law case, our skilled legal team provided unwavering support and rigorous defense to our client accused of a serious offense. Through meticulous investigation, strategic courtroom presentation, and expert legal analysis, we achieved a favorable outcome, safeguarding our client\'s rights and ensuring a fair legal process.',
    },
    {
      icon: '🏢',
      title: 'Real Estate Law',
      caseCount: 12,
      category: 'Real Estate Law',
      description:
        'Real estate law governs the legal aspects of property ownership, transactions, and disputes. Our skilled team of real estate lawyers offers comprehensive guidance, representing clients in matters such as property purchases, leases, zoning issues, and title disputes. With a focus on protecting our clients\' interests, we navigate the complexities of real estate law to facilitate smooth transactions.',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
    
      {/* Practice Areas Section (unchanged) */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
          <div className="max-w-[1100px] mx-auto px-6 pt-[50px] pb-10 sm:px-6 sm:pt-[70px] sm:pb-[60px] text-center">
      <h1
        className="font-serif font-extrabold text-[42px] sm:text-[54px] md:text-[64px] mb-7 inline-block bg-clip-text text-transparent"
        style={{
          fontFamily: "'Playfair Display', serif",
          backgroundImage:
            "linear-gradient(90deg, #4a5a80 0%, #4a5a80 35%, #d3a542 75%, #d3a542 100%)",
        }}
      >
        Practice Area
      </h1>
 
      <p className="text-[16px] sm:text-[19px] leading-[1.8] sm:leading-[1.85] text-[#3a3f4a] max-w-[1000px] mx-auto">
        At K JURIS, we provide comprehensive legal services to cater to the
        diverse needs of our clients. Our expertise spans banking and
        finance, corporate and commercial law, intellectual property rights,
        arbitration and alternative dispute resolution, employment and
        industrial law, real estate and property matters, as well as
        criminal and police cases.
      </p>
    </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, index) => (
              <PracticeCard
                key={index}
                icon={area.icon}
                title={area.title}
                caseCount={area.caseCount}
                category={area.category}
                description={area.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About & Experience sections remain the same */}
      {/* ... */}
    </main>
  )
}