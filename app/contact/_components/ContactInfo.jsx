// components/ContactInfo.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for Next.js internal navigation
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5"; // Importing specific icons

const contactItems = [
  {
    icon: IoCallOutline,
    label: "General Inquiries",
    value: "+254 712 345 678",
    href: "tel:+254712345678",
    buttonText: "Call Now",
  },
  {
    icon: IoMailOutline,
    label: "Email Us",
    value: "info@uzimahospital.org",
    href: "mailto:info@uzimahospital.org",
    buttonText: "Send Email",
  },
  {
    icon: IoLocationOutline,
    label: "Our Location",
    value: "123 Healthway, Medical City, Uzima 00100, Nairobi, Kenya.",
    href: "https://www.google.com/maps/search/123+Healthway+Nairobi+Kenya", // More realistic Google Maps search link
    buttonText: "View on Map",
  },
  {
    icon: IoTimeOutline,
    label: "General Operating Hours",
    value: "Mon-Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 1:00 PM\nSun: Closed",
    // No buttonText for this item as it's informational
  },
];

const ContactInfo = () => {
  // Framer Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Slightly increased stagger for more noticeable effect
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 }, // More pronounced initial y and slight scale down
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7, // Slightly longer duration for smoother entry
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {" "}
      {/* Added subtle gradient to section background, increased padding */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 md:mb-10 lg:mb-12 leading-tight" // Darker text, tighter leading, increased bottom margin
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Get in Touch with Uzima Hospital
        </motion.h2>

        {/* Introductory Paragraph */}
        <motion.p
          className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-16 md:mb-20 leading-relaxed" // Darker text, increased bottom margin
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          We are here to assist you. Please find our contact details below for
          inquiries, appointments, or general information.
        </motion.p>

        {/* Contact Details Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10" // Increased gap between cards
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }} // Animate slightly earlier
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center
                         border border-gray-100 // Subtle light gray border
                         transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out // More pronounced hover effect
                         "
              variants={itemVariants}
            >
              {/* Icon Container */}
              <div className="bg-blue-50 p-4 rounded-full mb-6 shadow-sm">
                {" "}
                {/* Light blue background for icon, more padding, shadow */}
                <item.icon className="text-blue-600 text-5xl" />{" "}
                {/* Darker blue icon, larger size */}
              </div>

              {/* Label */}
              <h3 className="font-extrabold text-2xl text-gray-900 mb-2">
                {" "}
                {/* Bolder, larger label, darker text */}
                {item.label}
              </h3>

              {/* Value (with line breaks for hours) */}
              {item.value.includes("\n") ? (
                <p className="text-gray-700 text-lg whitespace-pre-line mb-6 leading-relaxed">
                  {" "}
                  {/* Darker text, increased margin-bottom */}
                  {item.value}
                </p>
              ) : (
                // If not multi-line, allow clicking the value itself too
                <a
                  href={item.href}
                  target={
                    item.href &&
                    (item.href.startsWith("http") ||
                      item.href.startsWith("mailto") ||
                      item.href.startsWith("tel"))
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.href && item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-blue-700 text-lg hover:text-blue-800 transition-colors duration-200 mb-6 font-medium" // Darker blue, slightly bolder, increased margin-bottom
                  aria-label={`Value for ${item.label}`}
                >
                  {item.value}
                </a>
              )}

              {/* Conditional Button */}
              {item.buttonText && item.href && (
                <Link
                  href={item.href}
                  target={
                    item.href.startsWith("http") ||
                    item.href.startsWith("mailto") ||
                    item.href.startsWith("tel")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-block mt-auto bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold // Rounded full, bolder text, increased padding
                             hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 // Stronger focus ring
                             "
                  aria-label={item.buttonText + " for " + item.label}
                >
                  {item.buttonText}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
