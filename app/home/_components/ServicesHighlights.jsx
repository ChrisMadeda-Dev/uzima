// components/ServicesHighlights.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for dynamic navigation
import { FaHeartbeat, FaBaby, FaBrain, FaBone, FaLungs } from "react-icons/fa"; // Example icons
import { MdOutlineEmergency } from "react-icons/md"; // Emergency icon

const ServicesHighlights = () => {
  const services = [
    {
      icon: <FaHeartbeat className="text-4xl text-blue-600" />,
      name: "Cardiology",
      description:
        "Comprehensive heart care including diagnostics, treatment, and rehabilitation for all ages.",
      slug: "cardiology", // Updated to use slug for dynamic routing
    },
    {
      icon: <FaBaby className="text-4xl text-blue-600" />,
      name: "Pediatrics",
      description:
        "Specialized medical care dedicated to the health and well-being of infants, children, and adolescents.",
      slug: "pediatrics", // Updated to use slug for dynamic routing
    },
    {
      icon: <MdOutlineEmergency className="text-4xl text-blue-600" />,
      name: "Emergency Care",
      description:
        "24/7 immediate medical attention for critical conditions, staffed by experienced emergency physicians.",
      slug: "emergency", // Updated to use slug for dynamic routing
    },
    {
      icon: <FaBrain className="text-4xl text-blue-600" />,
      name: "Neurology",
      description:
        "Expert diagnosis and treatment for disorders affecting the brain, spinal cord, and nervous system.",
      slug: "neurology", // Updated to use slug for dynamic routing
    },
    {
      icon: <FaBone className="text-4xl text-blue-600" />,
      name: "Orthopedics",
      description:
        "Advanced surgical and non-surgical treatments for musculoskeletal conditions, injuries, and deformities.",
      slug: "orthopedics", // Updated to use slug for dynamic routing
    },
    {
      icon: <FaLungs className="text-4xl text-blue-600" />,
      name: "Pulmonology",
      description:
        "Specialized care for diseases and conditions affecting the lungs and respiratory system.",
      slug: "pulmonology", // Updated to use slug for dynamic routing
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title - Uses consistent dark blue for titles, now with a subtle drop shadow */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12 md:mb-16 drop-shadow-md">
          Our Services
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              // Framer Motion: Fade-in and slide-up on scroll
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} // Animate once when 30% of element is in view
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }} // Staggered delay
              className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100 flex flex-col items-center
                         transition-all duration-300 ease-in-out // For smoother transitions between states
                         hover:shadow-xl hover:ring-2 hover:ring-blue-200" // Improved hover effect with ring
              whileHover={{
                scale: 1.03, // Creative motion: slightly increased scale
                y: -7, // Creative motion: increased upward float
              }}
            >
              {/* Icon with circular background */}
              <div className="flex justify-center items-center bg-blue-50 p-4 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-700 text-md leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              {/* Updated to use Next.js Link for dynamic pages */}
              <Link
                href={`/services/${service.slug}`} // Link to the dynamic service detail page
                className="text-gray-500 text-sm hover:text-blue-800 transition-colors duration-200"
              >
                learn more &rarr;
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Services Link (now a text link) */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/services" // Link to the main services page
            className="text-lg md:text-xl font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          >
            View All Services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlights;
