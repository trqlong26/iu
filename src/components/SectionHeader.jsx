"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const SectionHeader = ({ title }) => {
  return (
    <header>
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="h2 text-center mb-8"
      >
        {title}
      </motion.h2>
    </header>
  );
};

export default SectionHeader;
