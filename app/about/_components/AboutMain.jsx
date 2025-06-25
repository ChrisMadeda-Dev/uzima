// components/AboutMain.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";

const AboutMain = () => {
  // Define animation variants for consistent fade-in effect
  const fadeInVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, amount: 0.4 }, // Animate when 40% of the element is visible
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-12"
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={fadeInVariants.viewport}
          transition={fadeInVariants.transition}
        >
          About Uzima Hospital
        </motion.h2>

        {/* Main Text Block */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto text-center leading-relaxed mb-16"
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={fadeInVariants.viewport}
          transition={{ ...fadeInVariants.transition, delay: 0.2 }} // Added a slight delay for text
        >
          Uzima Hospital, established in 1990, is a community health pillar. We
          are dedicated to providing exceptional, compassionate, and innovative
          medical care with a steadfast focus on patient well-being. Our
          commitment to accessible healthcare has evolved into a leading
          institution renowned for comprehensive services.
        </motion.p>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image 1 */}
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={fadeInVariants.viewport}
            transition={{ ...fadeInVariants.transition, delay: 0.4 }} // Added delay for the first image
          >
            <img
              src="/images/b1.jpg"
              alt="Uzima Hospital Building"
              className="w-full h-64 md:h-80 object-cover object-top rounded-lg shadow-md" // Added fixed height and responsive height
            />
          </motion.div>
          {/* Image 2 */}
          <motion.div
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={fadeInVariants.viewport}
            transition={{ ...fadeInVariants.transition, delay: 0.6 }} // Added delay for the second image
          >
            <img
              src="/images/s2.jpg"
              alt="Caring Medical Staff"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md" // Added fixed height and responsive height
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
