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
      y: "-100%", // Start from above the viewport
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: 0, // Animate to cover the screen
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "-100%", // Exit upwards
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-600 shadow-lg py-4 px-6 md:px-8 lg:px-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hospital Logo/Name */}
        <Link
          href="/home"
          className="text-3xl md:text-4xl font-bold text-white rounded-lg
                         transition-colors duration-200 p-2
                         hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                    className="inline-block mx-4 py-2 px-4 rounded-full
                                 bg-blue-700 text-white font-semibold
                                 transition-colors duration-200
                                 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white font-semibold py-2 px-3 rounded-lg
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
            className="md:hidden fixed inset-0 bg-blue-600 z-[999] flex flex-col p-8" // Removed items-center and justify-center. Increased padding.
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleMobileMenu}
                className="text-3xl text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2"
                aria-label="Close mobile menu"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="flex flex-col space-y-6 mt-16 w-full">
              {" "}
              {/* Added mt-16 for space below close button, and w-full */}
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  {" "}
                  {/* Make list items take full width */}
                  {link.type === "button" ? (
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block w-full text-left py-3 px-6 rounded-full text-lg
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
                      className="block p-3 text-white text-xl font-semibold rounded-lg text-left
                                 transition-colors duration-200
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
