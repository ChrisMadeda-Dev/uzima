// components/LocationMap.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";

const LocationMap = () => {
  // IMPORTANT: Replace this with your actual Google Maps embed URL for Uzima Hospital.
  // You can get this by going to Google Maps, searching for your location,
  // clicking "Share", then "Embed a map", and copying the 'src' value from the iframe.
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.730248882745!2d36.7214774888562!3d-1.2834399999999966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d0d3b%3A0x9024f20e408d277d!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1719266600000!5m2!1sen!2ske";

  // Framer Motion variants for subtle fade-in animation
  const fadeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Find Our Hospital
        </motion.h2>

        {/* Layout: Map (left/top) and Directions (right/bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Embedded Map Column */}
          <motion.div
            className="w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200" // Added border and shadow to the map container
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <iframe
              src={mapEmbedUrl}
              title="Uzima Hospital Location on Google Maps"
              width="100%"
              height="400" // Fixed height for consistent display on all screen sizes
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg" // Ensure the iframe itself also gets rounded corners
            ></iframe>
          </motion.div>

          {/* Directions Text/Details Column */}
          <motion.div
            className="flex flex-col justify-center p-2 md:p-0" // Minor padding adjustment for mobile
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, ...fadeVariants.visible.transition }} // Stagger the animation for text block
          >
            <h3 className="text-3xl font-bold text-[#3B82F6] mb-4">
              Directions & Parking
            </h3>
            <p className="text-lg text-[#4B5563] mb-4 leading-relaxed">
              Ample secure parking is available on-site for patients and
              visitors. Dedicated accessible parking spots are also provided
              near the main entrance.
            </p>
            <p className="text-lg text-[#4B5563] mb-6 leading-relaxed">
              Uzima Hospital is easily accessible via public transport. Bus
              stops are located within a short walking distance from our main
              gate, connecting to major routes across Nairobi.
            </p>
            <p className="text-sm text-[#4B5563] italic">
              For personalized navigation, please use the map above or your
              preferred GPS application. We recommend confirming your route
              before travel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
