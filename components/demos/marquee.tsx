import React from "react";
import { motion } from "framer-motion";

const services = [
  "Design",
  "Development",
  "Optimization",
  "Full Stack",
  "Web Content",
];

const MarqueeComponent = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black py-6">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <motion.div
        className="flex whitespace-nowrap text-white lg:text-2xl font-semibold"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...services, ...services, ...services].map((item, index) => (
          <React.Fragment key={index}>
            <span
              className={`mx-6 flex items-center gap-4 ${item === "Full Stack" ? "text-orange-500" : "text-white"}`}
            >  <span className="px-4">✦</span> {item}
            </span>
         
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeComponent;
