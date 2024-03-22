"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // clear event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`fixed z-50 w-full ${
        active ? "bg-[#030315 py-6]" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto">
        {/* logo */}
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image fill />
        </Link>
        {/* nav */}
        <nav></nav>
        {/* mobile nav */}
        <nav></nav>
        {/* menu btn */}
        <div></div>
        {/* socials */}
        <div></div>
      </div>
    </header>
  );
};

export default Header;
