// components/Footer.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for Next.js internal navigation
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt, // For address
  FaPhone, // For phone number
  FaEnvelope, // For email
} from "react-icons/fa";

// Combined and curated list of links for a cleaner footer
const footerLinks = [
  // Assuming these lead to distinct pages, update href accordingly
  { name: "Home", href: "/" }, // Changed to root for Home page
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  { name: "Contact Us", href: "/contact" },

];

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 py-12 md:py-16" // Darker background, slightly more generous padding
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content - 2 columns for md and larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 md:gap-x-20"> {/* Increased horizontal gap */}
          {/* Section 1: Hospital Info & Social Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left"> {/* Centered on mobile, left-aligned on desktop */}
            <h3 className="font-extrabold text-3xl md:text-4xl mb-4 text-white leading-tight"> {/* Bolder, larger title */}
              Uzima Hospital
            </h3>
            <p className="max-w-xs text-center md:text-left mb-6"> {/* Added max-width and centered text */}
              Providing compassionate and comprehensive healthcare services to our community.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-5 mb-8"> {/* Increased spacing */}
              <a
                href="https://facebook.com/uzimahospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-3xl hover:text-blue-500 transition-colors duration-200" // Larger icon, brighter hover
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/uzimahospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-3xl hover:text-blue-500 transition-colors duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/uzimahospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-3xl hover:text-blue-500 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/uzimahospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-3xl hover:text-blue-500 transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          {/* Section 2: Quick Links & Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left"> {/* Centered on mobile, left-aligned on desktop */}
            <h3 className="font-bold text-xl md:text-2xl mb-4 text-white"> {/* Bolder, larger title */}
              Quick Links & Contact
            </h3>
            {/* Nested grid for links and contact info for better layout on medium screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 w-full"> {/* Adjusted gap and made it full width */}
              {/* Links Column */}
              <ul className="space-y-3"> {/* Increased spacing between links */}
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    {/* Using Next.js Link component for internal navigation */}
                    <Link
                      href={link.href}
                      className="hover:text-blue-500 transition-colors duration-200 text-base" // Brighter hover, larger text
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact Info Column */}
              <div className="space-y-4 text-base"> {/* Increased spacing and text size */}
                <p className="flex items-start"> {/* Aligned icon with top of text */}
                  <FaMapMarkerAlt className="mr-4 text-xl flex-shrink-0 mt-0.5" /> {/* Larger icon, more margin, aligns better */}
                  123 Healthway, Medical City, Uzima 00100, Nairobi, Kenya.
                </p>
                <a
                  href="tel:+254712345678"
                  className="flex items-center hover:text-blue-500 transition-colors duration-200"
                >
                  <FaPhone className="mr-4 text-xl" /> +254 712 345 678
                </a>
                <a
                  href="mailto:info@uzimahospital.com"
                  className="flex items-center hover:text-blue-500 transition-colors duration-200"
                >
                  <FaEnvelope className="mr-4 text-xl" /> info@uzimahospital.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-gray-700/50 text-sm text-gray-500 text-center"> {/* Increased top margin, softer border, darker copyright text */}
          <p>
            Copyright &copy; {currentYear} Uzima Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;