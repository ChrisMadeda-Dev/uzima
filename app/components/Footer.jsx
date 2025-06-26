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
      className="bg-gray-900 text-gray-400 py-12 md:py-16" // Darker background, generous vertical padding
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }} // Added a consistent transition
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 lg:gap-x-16">
          {/* Section 1: Hospital Info & Social Media */}
          <div className="flex flex-col items-start text-left">
            {" "}
            {/* Removed redundant md:items-start md:text-left as items-start and text-left are default for flex-col */}
            <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-4 text-white leading-tight">
              Uzima Hospital
            </h3>
            {/* Social Media Icons */}
            <div className="flex space-x-4 sm:space-x-5 mb-8">
              <a
                href="https://facebook.com/uzimahospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-2xl sm:text-3xl hover:text-blue-500 transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/uzimahospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-2xl sm:text-3xl hover:text-blue-500 transition-colors duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/uzimahospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl sm:text-3xl hover:text-blue-500 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/uzimahospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl sm:text-3xl hover:text-blue-500 transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col items-start text-left">
            {" "}
            {/* Removed redundant md:items-start md:text-left */}
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div className="flex flex-col items-start text-left">
            {" "}
            {/* Removed redundant md:items-start md:text-left */}
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-4 text-white">
              Contact Info
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              <p className="flex items-start">
                <FaMapMarkerAlt className="mr-3 text-xl flex-shrink-0 mt-0.5" />
                123 Healthway, Nairobi, Kenya.
              </p>
              <a
                href="tel:+254712345678"
                className="flex items-center hover:text-blue-500 transition-colors duration-200"
              >
                <FaPhone className="mr-3 text-xl" /> +254 712 345 678
              </a>
              <a
                href="mailto:info@uzimahospital.com"
                className="flex items-center hover:text-blue-500 transition-colors duration-200"
              >
                <FaEnvelope className="mr-3 text-xl" /> info@uzimahospital.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-gray-700/50 text-xs sm:text-sm text-gray-500 text-center">
          <p>
            Copyright &copy; {currentYear} Uzima Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
