import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative  text-black group`}>
      {title}
      <span
        className={` absolute inline-block h-[1px]  bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Pro jects" className="mx-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap gap-6">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
          target="_blank"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
          target="_blank"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
          target="_blank"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="/"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
          target="_blank"
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-4 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
