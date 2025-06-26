// components/KeyFeatures.jsx
"use client"; // This directive is necessary for client-side features like framer-motion (will be removed if no other client-side features are used)

// Removed motion import since animations are no longer used
// import { motion } from "framer-motion";

const KeyFeatures = () => {
  const features = [
    {
      image: "/images/2.jpg", // All images now use this path
      title: "Uncompromising Quality",
      description:
        "Leveraging state-of-the-art facilities and a team of experienced medical professionals to deliver superior care.",
    },
    {
      image: "/images/s1.jpg", // All images now use this path
      title: "Genuine Compassion",
      description:
        "Our patient-centered approach ensures your comfort and recovery are at the heart of everything we do.",
    },
    {
      image: "/images/8.jpg", // All images now use this path
      title: "Pioneering Technology",
      description:
        "Utilizing the latest innovations for accurate diagnosis, effective treatment, and improved patient outcomes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title - now a standard h2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12 md:mb-16">
          Just For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <div // Changed from motion.div to standard div
              key={index}
              className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden
                         h-[50vh] flex flex-col" // Added h-[50vh] for height and flex-col for layout
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-50 object-cover object-top rounded-t-lg"
              />
              {/* Content section now takes available space and centers text */}
              <div className="p-8 flex-grow flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
