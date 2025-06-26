// components/Hero.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon

const Hero = () => {
  return (
    <div
      className="w-full relative overflow-hidden flex items-center justify-center
                 h-[90svh] bg-cover shadow-2xl
                 bg-[url('/images/bg7.jpg')] bg-top     // Mobile default: bg7.jpg, aligned to top
                 sm:bg-[url('/images/bg7.jpg')] sm:bg-top   // Desktop: bg7.jpg, aligned to top
                 "
    >
      <div className="container mx-auto px-6 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none mb-6 drop-shadow-lg"
        >
          Uzima Hospital
          <br />
          Your Health, Our Priority.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto mb-10 drop-shadow-md"
        >
          Providing compassionate and comprehensive healthcare to our community.
        </motion.p>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 30 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate state for animation
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }} // Delay to appear after text
          whileHover={{
            scale: 1.05,
            y: -4, // Added y-axis lift on hover, replacing CSS transform
            backgroundColor: "#1D4ED8", // Changed hover background to blue-700 (#1D4ED8)
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
          }}
          whileTap={{ scale: 0.98 }}
          // Removed conflicting CSS transition-all and transform hover classes
          className="inline-flex items-center justify-center text-white bg-blue-500 font-bold
                     py-4 px-10 md:py-5 md:px-12
                     rounded-full shadow-xl
                     text-lg md:text-xl"
        >
          Book an Appointment <FaArrowRight className="ml-2" />{" "}
          {/* Added arrow icon with margin */}
        </motion.a>
      </div>

      {/* Blue overlay with increased opacity to separate text from background */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
