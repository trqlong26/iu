"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import AlbumSlider from "./AlbumSlider";
import SectionHeader from "../SectionHeader";

const Albums = () => {
  return (
    <section id="discography">
      <div className="container mx-auto">
        <SectionHeader title="Albums" />
        {/* album slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AlbumSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Albums;
