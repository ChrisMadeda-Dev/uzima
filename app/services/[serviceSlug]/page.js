// app/services/[serviceSlug]/page.js
"use client"; // This directive is necessary for client-side features like framer-motion and useParams

import { motion } from "framer-motion";
import { useParams } from "next/navigation"; // To access dynamic route segments like [serviceSlug]
import Link from "next/link";
import { IoCheckmarkCircleOutline } from "react-icons/io5"; // For lists

// --- Import Service Data ---
import servicesDataArray from "../../lib/servicesData"; // Import the array

// --- Helper to convert array to object for easy lookup by slug ---
const servicesData = servicesDataArray.reduce((acc, service) => {
  acc[service.slug] = service;
  return acc;
}, {});

// --- Framer Motion Variants for Sections ---
const sectionFadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  viewport: { once: true, amount: 0.2 }, // Animate when 20% of section is visible
};

const ServiceDetail = () => {
  const params = useParams();
  const serviceSlug = params.serviceSlug;
  const service = servicesData[serviceSlug]; // Now lookup from the imported data

  if (!service) {
    return (
      <section className="py-20 md:py-32 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            The medical service you are looking for does not exist or has been
            moved.
          </p>
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium
                         hover:bg-blue-700 transition-colors duration-200"
          >
            Back to All Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Service Name Title */}
        <motion.h1
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 md:mb-24"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {service.name}
        </motion.h1>

        {/* Removed Hero Image section */}

        {/* Overview Section */}
        <motion.div
          className="mb-12 md:mb-16"
          variants={sectionFadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={sectionFadeInUp.viewport}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {service.overview}
          </p>
        </motion.div>

        {/* Conditions Treated Section */}
        <motion.div
          className="mb-12 md:mb-16"
          variants={sectionFadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={sectionFadeInUp.viewport}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Conditions We Treat
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
            {service.conditionsTreated.map((condition, index) => (
              <li key={index} className="flex items-center">
                <IoCheckmarkCircleOutline className="text-blue-500 text-2xl mr-3 flex-shrink-0" />
                <span>{condition}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Treatments & Procedures Section */}
        <motion.div
          className="mb-12 md:mb-16"
          variants={sectionFadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={sectionFadeInUp.viewport}
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Treatments & Procedures
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
            {service.treatments.map((treatment, index) => (
              <li key={index} className="flex items-center">
                <IoCheckmarkCircleOutline className="text-blue-500 text-2xl mr-3 flex-shrink-0" />
                <span>{treatment}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Meet Our Specialists (Optional) */}
        <motion.div
          className="bg-blue-50 p-8 rounded-lg shadow-md text-center mb-12 md:mb-16"
          variants={sectionFadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={sectionFadeInUp.viewport}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Meet Our {service.name.replace(" Services", "")} Specialists
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Our team of dedicated and experienced doctors are experts in
            providing top-tier care for your specific needs.
          </p>
          <Link
            href="/doctors"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium
                         hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Our Doctors
          </Link>
        </motion.div>

        {/* Information Call to Action (CTA) */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md text-center"
          variants={sectionFadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={sectionFadeInUp.viewport}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need This Service?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            For more information about our {service.name} or to learn how to
            schedule a consultation, please contact our team directly.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium
                         hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail;
