"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.98, filter: "blur(2px)" }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
}
