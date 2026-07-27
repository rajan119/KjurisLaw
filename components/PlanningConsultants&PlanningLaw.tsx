"use client";

import React from "react";

export default function PlanningConsultants() {
  return (
    <section className="bg-white">
    <div className="max-w-[1200px] mx-auto px-6 py-[80px] text-[#4b4f58]">
      {/* Title */}
      <h1 className="font-['Playfair_Display'] font-extrabold text-[clamp(32px,3.4vw,44px)] leading-[1.2] mb-[26px] text-[#d3a542]">
        Planning Consultants &amp; Planning Law (India)
      </h1>

      {/* Intro paragraph */}
      <p className="text-[17px] leading-[1.85] mb-[28px] max-w-[900px]">
        Getting planning permission in India requires more than filling forms.
        You need clear advice on zoning rules, master plans, and legal steps.
        Our planning consultants and lawyers guide clients from start to finish.
        We work with private developers, housing societies, corporates, and
        government bodies across India. Our team combines planners, lawyers, and
        technical experts to resolve complex issues.
      </p>
      {/* Services Section */}
      <h2 className="font-['Playfair_Display'] font-bold text-[28px] text-[#d3a542] mb-[18px]">
        Our Services
      </h2>

      {/* Planning Legal */}
      <div className="space-y-[28px]">
        <div>
          <h3 className="font-['Playfair_Display'] font-semibold text-[22px] text-[#d3a542] mb-[10px]">
            Planning Legal
          </h3>
          <ul className="list-disc pl-6 space-y-[6px] text-[16px] leading-[1.8]">
            <li>Site feasibility and planning appraisals</li>
            <li>Development plan and zoning advice</li>
            <li>Preparation &amp; submission of building permissions</li>
            <li>Environmental &amp; infrastructure clearances</li>
            <li>Redevelopment, change of use, mixed-use projects.</li>
          </ul>
        </div>

        {/* Legal Support */}
        <div>
          <h3 className="font-['Playfair_Display'] font-semibold text-[22px] text-[#d3a542] mb-[10px]">
            Legal Support
          </h3>
          <ul className="list-disc pl-6 space-y-[6px] text-[16px] leading-[1.8]">
            <li>Title due diligence and agreements</li>
            <li>Development &amp; infrastructure contracts</li>
            <li>Appeals before planning authorities &amp; courts</li>
            <li>Road closures, rights of way &amp; easements</li>
            <li>Environmental, forest, coastal compliance</li>
            <li>Representation in tribunals and High Courts</li>
          </ul>
        </div>
      </div>

      {/* Why Us */}
      <h2 className="font-['Playfair_Display'] font-bold text-[28px] text-[#d3a542] mt-[50px] mb-[16px]">
        Why Us
      </h2>

      <p className="text-[17px] leading-[1.85] max-w-[900px]">
        We combine planning knowledge with legal expertise under Indian laws—
        Town &amp; Country Planning Acts, Development Control Regulations,
        Environmental laws, and municipal bye-laws. From first consultation to
        final approval, we ensure projects move forward smoothly and lawfully.
      </p>
    </div>
    </section>
  );
}
