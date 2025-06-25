// components/MissionVision.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import { IoCheckmarkCircleOutline } from "react-icons/io5"; // Importing the checkmark icon

const MissionVision = () => {
  // Define animation variants for consistent slide-up/fade-in effect
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 }, // Animate when 30% of the element is visible
  };

  // Define core values with their corresponding icons
  const coreValues = [
    { text: "Compassion: Treating every patient with empathy and respect." },
    { text: "Excellence: Upholding the highest standards in medical care." },
    {
      text: "Integrity: Acting ethically and transparently in all our endeavors.",
    },
    { text: "Innovation: Embracing advancements for better health outcomes." },
    { text: "Community: Actively contributing to the health of our society." },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 md:mb-16"
          variants={fadeInUpVariants}
          initial="initial"
          whileInView="animate"
          viewport={fadeInUpVariants.viewport}
          transition={fadeInUpVariants.transition}
        >
          Our Guiding Principles
        </motion.h2>

        {/* Main Content Layout: Two Rows */}
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {/* Top Row: Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Section Card */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col"
              variants={fadeInUpVariants}
              initial="initial"
              whileInView="animate"
              viewport={fadeInUpVariants.viewport}
              transition={{ ...fadeInUpVariants.transition, delay: 0.1 }}
            >
              <h3 className="font-bold text-3xl text-blue-500 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide exceptional, patient-centered healthcare services
                with compassion, integrity, and innovation, ensuring the
                well-being of our community.
              </p>
            </motion.div>

            {/* Vision Section Card */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col"
              variants={fadeInUpVariants}
              initial="initial"
              whileInView="animate"
              viewport={fadeInUpVariants.viewport}
              transition={{ ...fadeInUpVariants.transition, delay: 0.3 }}
            >
              <h3 className="font-bold text-3xl text-blue-500 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the leading healthcare provider in the region, recognized
                for clinical excellence, advanced technology, and an unwavering
                commitment to patient safety and satisfaction.
              </p>
            </motion.div>
          </div>

          {/* Bottom Row: Values Section Card */}
          {/* w-full ensures it takes full available width. flex justify-center on the parent div still helps center if needed. */}
          <div className="flex justify-center">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg w-full" // Removed md:max-w-2xl and lg:max-w-xl
              variants={fadeInUpVariants}
              initial="initial"
              whileInView="animate"
              viewport={fadeInUpVariants.viewport}
              transition={{ ...fadeInUpVariants.transition, delay: 0.5 }}
            >
              <h3 className="font-bold text-3xl text-blue-500 mb-6">
                Our Core Values
              </h3>
              <ul className="space-y-4">
                {coreValues.map((value, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 text-lg"
                  >
                    <IoCheckmarkCircleOutline className="text-blue-500 text-2xl mr-3 flex-shrink-0 mt-1" />
                    <span>{value.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
