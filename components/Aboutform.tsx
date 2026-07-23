"use client";

import React, { useState } from "react";

/**
 * ContactSection
 * Next.js + Tailwind CSS component matching the provided design screenshot
 * (dark navy contact form + location/hours info panel).
 *
 * Usage:
 *   import ContactSection from "@/components/ContactSection";
 *   <ContactSection />
 *
 * Notes:
 * - Background uses a left-to-right gray -> navy gradient like the screenshot.
 * - Accent color (labels, underline, icons) is #E0A63A (orange/gold),
 *   adjust freely or move into tailwind.config as `colors.accent`.
 * - Icons are plain inline SVGs (no external icon library needed).
 * - Form is a simple controlled form with local state; wire up the
 *   handleSubmit function to your API / email service as needed.
 */

const ACCENT = "text-[#E0A63A]";

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`shrink-0 w-11 h-11 rounded-full border border-[#E0A63A] flex items-center justify-center ${ACCENT}`}
    >
      {children}
    </span>
  );
}

function LocationIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // TODO: replace with your API call / email service
      console.log("Contact form submitted:", form);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white text-gray-700 placeholder-gray-400 border border-[#E0A63A] rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#E0A63A]";

  return (
    <section
      className="px-6 md:px-12 py-14"
      style={{
        background:
          "linear-gradient(90deg, #4c4c5a 0%, #464f60 25%, #424e63 37.5%, #404e69 50%, #3d4e71 62.5%, #3a4e77 75%, #374f7d 87.5%, #324e84 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16">
        {/* Left: Form */}
        <div className="max-w-xl">
          <div className="mb-3">
            <span className={`uppercase text-xs font-semibold tracking-wide ${ACCENT}`}>
              Contact With Us
            </span>
            <div className="w-9 border-b-2 border-[#E0A63A] mt-1" />
          </div>

          <h2 className="font-serif text-white text-[26px] md:text-[30px] font-bold leading-snug mb-6">
            We Are Always Ready To Hear For You.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange("firstName")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange("lastName")}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Enter Your Mail"
                value={form.email}
                onChange={handleChange("email")}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                value={form.phone}
                onChange={handleChange("phone")}
                className={inputClass}
              />
            </div>

            <textarea
              placeholder="Enter Your Message"
              value={form.message}
              onChange={handleChange("message")}
              rows={6}
              className={`${inputClass} resize-y`}
            />

            <button
              type="submit"
              disabled={submitting}
              className="bg-white text-[#E0A63A] font-semibold rounded-full border-2 border-slate-900 px-7 py-2.5 text-sm hover:bg-gray-50 transition disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right: Info panel */}
        <div className="flex flex-col gap-8 lg:pt-10">
          <div className="flex gap-4">
            <IconCircle>
              <LocationIcon />
            </IconCircle>
            <div>
              <h3 className={`font-serif font-bold text-base mb-1 ${ACCENT}`}>
                Location
              </h3>
              <p className="text-white text-sm leading-relaxed">
                2nd Floor, B Wing, 555, Express Zone,
                <br />
                Cello, Malad East, Mumbai,
                <br />
                Maharashtra, 400097
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <IconCircle>
              <ClockIcon />
            </IconCircle>
            <div>
              <h3 className={`font-serif font-bold text-base mb-1 ${ACCENT}`}>
                Open Hour
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Monday To Friday
                <br />
                9.00 AM - 5.00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}