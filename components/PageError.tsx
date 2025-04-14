"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

export default function PageError() {
  return (
    <section className="container flex flex-col justify-center items-center w-full min-h-screen mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative bg-gradient-to-b from-[#18CCFC] to-[#6344F5] bg-clip-text text-4xl sm:text-7xl font-bold text-transparent text-center pb-4"
      >
        Error
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
        className="relative text-center text-lg font-normal text-neutral-600 dark:text-neutral-400 mx-auto pb-4"
      >
        There seems to be an error...
      </motion.p>
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeInOut" }}
      >
        <Button
          className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
          variant="secondary"
          asChild
        >
          <Link href="/">
            <ArrowLeft />
            Back to home page
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
