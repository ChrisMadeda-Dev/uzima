// app/services/page.js (or components/ServicesList.jsx if used as a standalone component)
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import {
  FaHeartbeat, // Cardiology
  FaBrain, // Neurology
  FaBaby, // Pediatrics / Maternity
  FaXRay, // Diagnostic Imaging
  FaCapsules, // Pharmacy
  FaTooth, // Dental
  FaLungs, // Pulmonology
  FaBone, // Orthopedics
  FaUserNurse, // Nursing Care
  FaSyringe, // Vaccinations
} from "react-icons/fa"; // Importing relevant icons from Font Awesome
import CTA from "../components/CTA";

// Map string icon names to actual React Icon components
const iconComponents = {
  FaHeartbeat,
  FaBrain,
  FaBaby,
  FaXRay,
  FaCapsules,
  FaTooth,
  FaLungs,
  FaBone,
  FaUserNurse,
  FaSyringe,
};

// Example Service Data
const servicesList = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "FaHeartbeat",
    description:
      "Specialized care for heart conditions, including diagnostics, treatment, and rehabilitation.",
    slug: "cardiology",
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "FaBrain",
    description:
      "Expert diagnosis and treatment for disorders affecting the brain, spinal cord, and nervous system.",
    slug: "neurology",
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Child Health",
    icon: "FaBaby",
    description:
      "Compassionate medical care dedicated to the health and well-being of infants, children, and adolescents.",
    slug: "pediatrics",
  },
  {
    id: "pharmacy",
    name: "Pharmacy Services",
    icon: "FaCapsules",
    description:
      "Convenient access to medications and expert pharmaceutical advice from our licensed pharmacists.",
    slug: "pharmacy",
  },
  {
    id: "dentistry",
    name: "Dentistry",
    icon: "FaTooth",
    description:
      "Comprehensive oral health care, from routine check-ups to advanced dental procedures.",
    slug: "dentistry",
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    icon: "FaLungs",
    description:
      "Specialized treatment for respiratory diseases, including asthma, COPD, and lung infections.",
    slug: "pulmonology",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: "FaBone",
    description:
      "Surgical and non-surgical treatments for musculoskeletal conditions, injuries, and deformities.",
    slug: "orthopedics",
  },
  {
    id: "nursing-care",
    name: "Nursing Care",
    icon: "FaUserNurse",
    description:
      "Professional and compassionate nursing support available 24/7 for all patient needs.",
    slug: "nursing-care",
  },
  {
    id: "vaccinations",
    name: "Vaccination Services",
    icon: "FaSyringe",
    description:
      "Providing essential vaccinations for all age groups to prevent common and infectious diseases.",
    slug: "vaccinations",
  },
];

const ServicesList = () => {
  // Variants for the container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Smaller delay between each child for a quicker cascade
        delayChildren: 0.1, // Shorter delay before the first child starts
      },
    },
  };

  // Variants for individual service cards (pop-in effect)
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* New Header Section for Services Page */}
      <div className="bg-blue-600 py-16 md:py-20 lg:py-24 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white" // Changed text color to white for contrast
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>
      </div>

      <section
        id="services-list"
        className="py-16 md:py-20 lg:py-24 bg-gray-50" // Adjusted padding to remove redundant top padding
      >
        <div className="container mx-auto px-4">
          {/* Removed Page Title from here as it's now in a separate header div */}

          {/* Service Cards Container */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }} // Animate the container when 10% is visible
          >
            {servicesList.map((service, index) => {
              const IconComponent = iconComponents[service.icon]; // Dynamically get the icon component

              return (
                <motion.div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300
                             transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100"
                  variants={itemVariants}
                >
                  {/* Service Icon */}
                  <div className="text-blue-500 mb-4 p-3 bg-blue-50 rounded-full">
                    {IconComponent && <IconComponent className="w-12 h-12" />}{" "}
                    {/* Render dynamic icon */}
                  </div>
                  {/* Service Name */}
                  <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  {/* Service Description */}
                  <p className="text-gray-700 text-base leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  {/* Optional: Learn More Link */}
                  <a
                    href={`/services/${service.slug}`} // Example link to a specific service page
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    Learn More &rarr;
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <CTA />
    </>
  );
};

export default ServicesList;
