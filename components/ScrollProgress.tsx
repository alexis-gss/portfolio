"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="
        fixed
        top-0
        left-0
        right-0
        h-[2px]
        origin-left
        z-[100]
        bg-gradient-to-r
        from-[#18CCFC]
        to-[#6344F5]
        opacity-60
      "
    />
  );
}
