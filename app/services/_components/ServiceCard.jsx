// components/ServiceCard.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import Link from "next/link"; // For dynamic routing
import React from "react"; // Explicitly import React
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
  FaFlask, // Lab Services
  FaMicroscope, // Pathology
  FaNotesMedical, // General Check-up
  FaFemale, // Women's Health
  FaMale, // Men's Health
  FaWalking, // Physiotherapy
  FaRegHospital, // Hospital general
  FaMedkit, // First Aid / ER
} from "react-icons/fa";
import { MdOutlineEmergency } from "react-icons/md"; // Example for a non-Fa icon

// Map iconName strings to actual React Icon components
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
  FaFlask,
  FaMicroscope,
  FaNotesMedical,
  FaFemale,
  FaMale,
  FaWalking,
  FaRegHospital,
  FaMedkit,
  MdOutlineEmergency, // Ensure MD icons are also included if you plan to use them
};

const ServiceCard = ({
  name,
  description,
  iconName, // String name of the icon (e.g., "FaHeartbeat")
  slug, // For the Next.js Link href
  variants, // Framer Motion variants for staggered animation
}) => {
  const IconComponent = iconComponents[iconName];

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full"
      // Framer Motion Entry Effect
      variants={variants} // Use passed variants for staggerChildren from parent
      initial="initial" // Ensure initial state is set
      animate="animate" // Ensure animate state is set
      // Framer Motion Hover Effect
      whileHover={{
        scale: 1.03, // Slightly scale up
        boxShadow:
          "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)", // shadow-lg
      }}
      transition={{ duration: 0.2, ease: "easeOut" }} // Smooth transition for hover
    >
      {/* Service Icon */}
      <div className="text-blue-500 mb-4 p-3 bg-blue-50 rounded-full">
        {IconComponent && <IconComponent className="w-12 h-12" />}
        {!IconComponent && (
          <FaRegHospital className="w-12 h-12 text-gray-400" />
        )}{" "}
        {/* Fallback icon */}
      </div>

      {/* Service Name */}
      <h3 className="font-bold text-xl text-gray-900 mb-2">{name}</h3>

      {/* Short Description */}
      <p className="text-gray-700 text-base leading-relaxed flex-grow mb-4">
        {description}
      </p>

      {/* "Learn More" Link */}
      <Link
        href={`/services/${slug}`} // Dynamic link to service detail page
        className="mt-auto text-blue-600 hover:text-blue-800 font-semibold
                   transition-colors duration-200 hover:underline"
      >
        Learn More &rarr;
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
