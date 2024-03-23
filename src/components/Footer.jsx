"use client";

import Link from "next/link";
import Socials from "./Socials";
import Navbar from "./Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Footer = () => {
  return (
    <footer className="bg-accent section h-[500px] xl:h-auto">
      <div className="container mx-auto h-full flex flex-col items-center gap-y-8">
        {/* email */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link href={"#"}>
            <h2 className="text-[24px] lg:text-[38px] font-semibold leading-tight">
              longqtr2608@gmail.com
            </h2>
          </Link>
        </motion.div>
        {/* navbar */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Navbar
            containerStyles="flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-primary/80 transition-all"
          />
        </motion.div>
        {/* socials */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Socials
            containerStyles="flex text-[24px] gap-x-8"
            iconStyles="hover:text-primary/80 transition-all justify-center"
          />
        </motion.div>
        {/* logo */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        ></motion.div>
      </div>
    </footer>
  );
};

export default Footer;
