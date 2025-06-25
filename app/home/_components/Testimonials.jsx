// components/Testimonials.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa"; // Importing the left quote icon (now used as a smaller inline icon)

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The care I received at Uzima Hospital was exceptional. The nurses were incredibly kind, and the doctors explained everything clearly. I felt truly cared for and supported through my recovery.",
      name: "- John Doe",
    },
    {
      quote:
        "From admission to discharge, the process was incredibly smooth and efficient. The facilities are modern and impeccably clean, and the entire staff made my recovery comfortable and reassuring.",
      name: "- Jane Smith",
    },
  ];

  const cardAnimationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12 md:mb-16 drop-shadow-md">
          What Our Patients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardAnimationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-xl flex flex-col justify-between
                         border-l-8 border-blue-600" // NEW DESIGN: Strong left border
            >
              {/* NEW DESIGN: Small, inline quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-3xl text-blue-500" />
              </div>

              {/* Quote Text - Normal size, left-aligned, no background icon */}
              <p className="italic text-lg text-gray-800 leading-relaxed mb-6">
                {" "}
                {/* IMPROVED: Text size to normal, removed absolute positioning and center align */}
                {testimonial.quote}
              </p>
              <p className="font-semibold text-gray-600 text-right">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
