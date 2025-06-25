// components/Leadership.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";

const leadershipMembers = [
  {
    name: "Dr. Anya Sharma",
    title: "Chief Executive Officer",
    photo: "/images/dp.jpg", // Changed to dp.jpg
    bio: "Dr. Sharma has over 20 years of experience in healthcare administration and is passionate about patient advocacy and innovative medical practices. Her leadership drives Uzima's commitment to excellence.",
  },
  {
    name: "Prof. Ben Carter",
    title: "Chief Medical Officer",
    photo: "/images/dp.jpg", // Changed to dp.jpg
    bio: "Prof. Carter is a renowned surgeon and clinical leader, dedicated to advancing medical research and ensuring the highest standards of clinical care across all departments.",
  },
  {
    name: "Ms. Carol Kimani",
    title: "Chief Operating Officer",
    photo: "/images/dp.jpg", // Changed to dp.jpg
    bio: "Ms. Kimani brings extensive experience in operational efficiency and strategic planning, ensuring Uzima Hospital runs smoothly and effectively to serve our patients.",
  },
  {
    name: "Dr. David Mumo",
    title: "Head of Nursing",
    photo: "/images/dp.jpg", // Changed to dp.jpg
    bio: "Dr. Mumo leads our dedicated nursing team, fostering a culture of compassionate care and continuous professional development for all nursing staff.",
  },
];

const Leadership = () => {
  // Variants for staggered fade-in animation on card entry
  const cardEntryVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.15,
      },
    }),
  };

  return (
    <section id="leadership" className="py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Meet Our Leadership
        </motion.h2>

        {/* Leadership Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 justify-items-center">
          {leadershipMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center
                           flex flex-col items-center justify-start h-full max-w-sm w-full"
              // Framer Motion entry animation
              variants={cardEntryVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
              // Framer Motion hover effect
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                y: -5,
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Photo */}
              <img
                src={member.photo} // This now consistently uses the dp.jpg path
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-500"
              />
              {/* Name */}
              <h3 className="font-bold text-xl md:text-2xl text-gray-800 mb-1">
                {member.name}
              </h3>
              {/* Title */}
              <p className="font-semibold text-blue-500 text-md md:text-lg mb-4">
                {member.title}
              </p>
              {/* Brief Bio */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
