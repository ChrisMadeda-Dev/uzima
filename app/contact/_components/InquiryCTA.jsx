// components/InquiryCTA.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import { IoChatboxEllipsesOutline } from "react-icons/io5"; // Importing the chatbox icon

const InquiryCTA = () => {
  // Framer Motion variants for the main container's pop-in animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 30 }, // Start slightly scaled down and below
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Framer Motion variants for button hover effects
  const buttonHoverVariants = {
    hoverPrimary: {
      scale: 1.05,
      backgroundColor: "#1D4ED8", // blue-700
      boxShadow:
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    hoverSecondary: {
      scale: 1.05,
      backgroundColor: "#3B82F6", // blue-600
      color: "#FFFFFF", // white text
      boxShadow:
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto p-8 md:p-12 lg:p-16 bg-blue-50 rounded-xl shadow-lg text-center border-b-4 border-blue-500" // Added accent border
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <IoChatboxEllipsesOutline className="text-blue-600 text-6xl md:text-7xl p-3 bg-blue-100 rounded-full shadow-md" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Have a Specific Question?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            While we don't offer an online contact form on this site, our
            dedicated team is ready to assist you. Please reach out to us
            directly via phone or email for any specific inquiries or feedback.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Button 1: Call Us Now */}
            <motion.a
              href="tel:+254712345678" // Placeholder number
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-bold shadow-md
                         focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200"
              variants={buttonHoverVariants}
              whileHover="hoverPrimary"
              whileTap="tap"
              aria-label="Call Uzima Hospital now"
            >
              Call Us Now
            </motion.a>

            {/* Button 2: Email Our Team */}
            <motion.a
              href="mailto:info@uzimahospital.org" // Placeholder email
              className="inline-block border-2 border-blue-600 text-blue-600 bg-transparent py-3 px-8 rounded-full text-lg font-bold
                         shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200"
              variants={buttonHoverVariants}
              whileHover="hoverSecondary"
              whileTap="tap"
              aria-label="Email Uzima Hospital team"
            >
              Email Our Team
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InquiryCTA;
