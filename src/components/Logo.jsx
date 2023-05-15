import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex justify-center items-center rounded-full text-2xl font-bold"
        whileHover={{ scale: 1.3 }}
      >
        SP
      </MotionLink>
    </div>
  );
};

export default Logo;
