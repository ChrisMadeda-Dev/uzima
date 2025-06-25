// components/CTA.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon

const CTA = () => {
  // Variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3, // Delay before children start animating
        staggerChildren: 0.15, // Stagger between each child animation
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants for individual elements within the container
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="text-white text-center px-6"
        >
          {/* Headline Animation - Retained */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-6xl font-bold mb-0 leading-tight"
          >
            Need to Schedule a Visit?
          </motion.h2>

          {/* Sub-headline Animation - Added here! */}
          <motion.p
            variants={itemVariants}
            className="text-lg opacity-90 max-w-2xl mx-auto mb-10" // Styling for the sub-headline
          >
            Schedule your next appointment with ease.
          </motion.p>

          {/* Single Button Call-to-action - Retained */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center bg-white text-blue-600 font-bold {/* Added inline-flex, items-center, justify-center */}
                         py-3 px-8 rounded-full shadow-md
                         transition-colors duration-300 ease-in-out"
            >
              Book an Appointment <FaArrowRight className="ml-2" />{" "}
              {/* Added arrow icon with margin */}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
