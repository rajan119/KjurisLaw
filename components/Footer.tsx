'use client';
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-slate-300 pt-20 pb-8">
      {/* ---------- Background Image (CSS) + Debug ---------- */}
      <div
        className="absolute inset-0  bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/footer1-bg.png')",
          backgroundColor: '#27282b35', // <-- अगर लाल दिखे तो इमेज नहीं मिली
        }}
      />
      {/* Overlay – इसे -z-10 से ऊपर रखेंगे */}
      <div className="absolute inset-0 -z-10 bg-[#27282b]" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Column 1: Logo + About + Socials */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/K-juris.png"
                  alt="KjurisLaw Logo"
                  width={64}
                  height={56}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>
              <div>{/* empty */}</div>
            </div>

            <p className="text-sm leading-relaxed mb-5">
              We understand that finding the right lawyer for you can be a tough
              choice. You need a partner who can relate to your challenges and
              work with you in a way that makes you feel at ease.
            </p>

            <div className="flex items-center gap-3">
              {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-amber-500 hover:text-[#0f1e4d] flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                'Commercial Property',
                'Property Finance',
                'Commercial Contracts',
                'Charity Law',
                'Children Law',
                'Wills & Trusts',
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <FaChevronRight className="w-3 h-3" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-5">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaEnvelope className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <a
                  href="mailto:info@kjurislaw.com"
                  className="hover:text-amber-400"
                >
                  info@kjurislaw.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <span>
                  S-54/55, 2nd Floor, B Wing, Express Zone, W.E.H., Malad East,
                  Mumbai - 400097
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaPhoneAlt className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <span>
                  Off. 022-28407865
                  <br />
                  9819907316
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Open Hours + Links */}
          <div>
           

            <h4 className="text-white text-lg font-semibold mb-4">Links</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-amber-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h4 className="text-white text-lg font-semibold mb-5">
              Open Hours
            </h4>

            <div className="flex items-start gap-3 text-sm mb-6">
              <FaClock className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
              <div>
                <div className="text-white font-medium mb-1">
                  Monday To Friday
                </div>
                <div>9:00 AM - 5:00 PM</div>
              </div>
            </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div>© 2025 K Juris Law Website. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-amber-400">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}