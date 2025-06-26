// components/Navbar.jsx
"use client"; // This directive is necessary for client-side features like framer-motion and useState

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the mobile menu
import Link from "next/link"; // Import Link for Next.js page navigation

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Doctors", href: "/doctors" },
  {
    name: "Book an Appointment",
    href: "/contact",
    type: "button",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu when a link (or button) is clicked
  };

  // Variants for mobile menu animation
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%", // Start from right of the viewport
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      x: 0, // Animate to cover the screen
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: "100%", // Exit to the right
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-700 shadow-lg py-4 px-6 md:px-8 lg:px-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hospital Logo/Name */}
        <Link
          href="/home"
          className="text-2xl md:text-3xl text-white rounded-lg
                             transition-colors duration-200 p-2 font-extrabold
                             hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300" /* Changed hover:bg-blue-600 to hover:text-blue-200 */
        >
          <motion.span // Apply motion directly to the span or div inside Link
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block" // Span needs to be block/inline-block to take full clickable area
          >
            Uzima Hospital
          </motion.span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.type === "button" ? (
                  <Link
                    href={link.href}
                    className="inline-block mx-4 py-2 px-4 rounded-full font-semibold
                                 bg-blue-500 text-white
                                 transition-colors duration-200
                                 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white py-2 px-3 rounded-lg
                                 transition-all duration-200
                                 hover:text-blue-200 hover:bg-blue-600/50
                                 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button (Hamburger/Close Icon) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Animated with Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-blue-700 z-[999] flex flex-col items-start justify-center p-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            {/* Mobile Menu Header: Title and Close Button */}
            <div className="absolute top-4 w-full flex justify-between items-center px-4">
              <Link
                href="/home"
                onClick={handleLinkClick} // Close menu when title is clicked
                className="text-2xl text-white rounded-lg
                               transition-colors duration-200 p-2 font-extrabold
                               focus:outline-none focus:ring-2 focus:ring-blue-300 z-10
                               underline decoration-blue-300 decoration-2" // Underline added here
              >
                Uzima Hospital
              </Link>

              <button
                onClick={toggleMobileMenu}
                className="text-3xl text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2"
                aria-label="Close mobile menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col space-y-6 mt-20 w-full items-start">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  {link.type === "button" ? (
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block text-left py-3 px-6 rounded-full text-lg
                                   bg-white text-blue-700 font-semibold
                                   transition-colors duration-200
                                   hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block p-3 text-white text-xl rounded-lg text-left
                                   transition-colors duration-200 font-semibold
                                   hover:bg-blue-700 hover:text-white
                                   focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
