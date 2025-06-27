// components/DoctorDirectory.jsx
"use client"; // This directive is necessary for client-side features like framer-motion

import { motion } from "framer-motion";
// Removed imports for IoSearchOutline, IoFilterOutline as they are no longer used.

// --- Placeholder for DoctorCard Component ---
// In a real application, you would import DoctorCard like this:
// import DoctorCard from './DoctorCard';
const DoctorCardPlaceholder = ({ doctor, variants }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center border border-gray-200"
    variants={variants} // Receives variants from the parent container
  >
    {/* Placeholder for Doctor's Photo */}
    <img
      src={doctor.photo} // Now using the specified local image path
      alt={`Dr. ${doctor.name}`}
      className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-blue-500"
    />
    {/* Placeholder for Doctor's Name */}
    <h3 className="font-semibold text-xl text-gray-900 mb-1">
      Dr. {doctor.name}
    </h3>
    {/* Placeholder for Doctor's Specialty */}
    <p className="text-blue-600 text-md mb-2">{doctor.specialty}</p>
    {/* Placeholder for a brief description */}
    <p className="text-gray-700 text-sm leading-relaxed flex-grow">
      {doctor.bio}
    </p>
  </motion.div>
);
// --- End DoctorCard Placeholder ---

// Dummy data for doctor cards, now doubled to 8 entries
const doctors = [
  {
    name: "Alice Johnson",
    specialty: "Cardiology",
    photo: "/images/dp.webp", // Updated image source
    bio: "Specializing in heart conditions and cardiovascular health.",
  },
  {
    name: "Robert Smith",
    specialty: "Pediatrics",
    photo: "/images/dp.webp", // Updated image source
    bio: "Dedicated to the health and well-being of children from birth through adolescence.",
  },
  {
    name: "Maria Garcia",
    specialty: "Orthopedics",
    photo: "/images/dp.webp", // Updated image source
    bio: "Expert in musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.",
  },
  {
    name: "David Lee",
    specialty: "Emergency Medicine",
    photo: "/images/dp.webp", // Updated image source
    bio: "Highly skilled in acute care, providing immediate medical attention for urgent conditions.",
  },
  // --- Additional Doctors ---
  {
    name: "Sophia Brown",
    specialty: "Neurology",
    photo: "/images/dp.webp", // Updated image source
    bio: "Focuses on disorders of the brain, spinal cord, and nervous system.",
  },
  {
    name: "James Wilson",
    specialty: "Dermatology",
    photo: "/images/dp.webp", // Updated image source
    bio: "Specializes in conditions of the skin, hair, and nails.",
  },
  {
    name: "Olivia Martinez",
    specialty: "Oncology",
    photo: "/images/dp.webp", // Updated image source
    bio: "Provides comprehensive care and treatment for cancer patients.",
  },
  {
    name: "Daniel Taylor",
    specialty: "General Surgery",
    photo: "/images/dp.webp", // Updated image source
    bio: "Experienced in a wide range of surgical procedures for various medical conditions.",
  },
];

const DoctorDirectory = () => {
  // Variants for the container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
        delayChildren: 0.2, // Delay before the first child starts animating
      },
    },
  };

  // Variants for individual doctor cards
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <>
      {/* New Header Section for Doctors Page */}
      <div className="bg-blue-600 py-16 md:py-20 lg:py-24 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white" // Changed text color to white for contrast
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Our Doctors
        </motion.h2>
      </div>

      <section
        id="doctor-directory"
        className="py-16 md:py-20 lg:py-24 bg-gray-50" // Adjusted padding to remove redundant top padding
      >
        <div className="container mx-auto px-4">
          {/* Doctor Cards Container */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {doctors.map((doctor, index) => (
              <DoctorCardPlaceholder
                key={index} // Using index as key is acceptable for static lists without reordering
                doctor={doctor}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DoctorDirectory;
