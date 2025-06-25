// components/Hero.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon

const Hero = () => {
  return (
    <div
      className="w-full relative overflow-hidden flex items-center justify-center
                   h-[90svh] bg-cover bg-top max-sm:bg-center
                   shadow-2xl
                   "
      style={{ backgroundImage: "url('/images/d1.jpg')" }} // Background image source
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
          Your Health, Our Priority
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto mb-10 drop-shadow-md"
        >
          Providing compassionate and comprehensive healthcare to our community,
          ensuring well-being with every step.
        </motion.p>

        <motion.a
          href="#how-to-book"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#1D4ED8", // Changed hover background to blue-700 (#1D4ED8)
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center justify-center text-white bg-blue-600 font-bold
                     py-4 px-10 md:py-5 md:px-12
                     rounded-full shadow-xl
                     transition-all duration-300 ease-in-out
                     text-lg md:text-xl transform hover:-translate-y-0.5"
        >
          Book an Appointment <FaArrowRight className="ml-2" />{" "}
          {/* Added arrow icon with margin */}
        </motion.a>
      </div>

      {/* Blue overlay with 70% opacity added above the background image */}
      <div className="absolute inset-0 bg-black opacity-47 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
