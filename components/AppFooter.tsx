"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import ThemeButton from "@/components/ThemeButton";
import Link from "next/link";
import { ArrowUp, FileText, Github } from "lucide-react";

const AppFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer" className="bg-[var(--card)] w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="relative w-full mt-20"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </motion.div>
        <div className="rounded-lg py-20">
          <h3 className="relative bg-gradient-to-b from-[#18CCFC] to-[#6344F5] bg-clip-text text-4xl sm:text-7xl font-bold text-transparent text-center pb-4">
            Portfolio
          </h3>
          <div className="flex flex-col justify-center items-center">
            <ul className="flex flex-col sm:flex-row-reverse justify-center items-center list-none text-center gap-4 py-4">
              <li className="flex flex-row justify-center items-center gap-4">
                <ThemeButton />
                <Button
                  className="cursor-pointer transform rounded-lg dark:text-white dark:bg-opacity-100 hover:dark:bg-opacity-100 transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 z-1"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <Link href="#home" aria-label="Scoll to the top of the page">
                    <ArrowUp />
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  className="flex justify-center items-center cursor-pointer transform rounded-lg dark:text-white dark:bg-opacity-100 hover:dark:bg-opacity-100 px-6 py-2 transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 z-1"
                  variant="outline"
                  asChild
                >
                  <a
                    href="https://github.com/alexis-gss/portfolio"
                    target="_blank"
                  >
                    <Github />
                    Github
                  </a>
                </Button>
              </li>
              <li>
                <Button
                  className="flex justify-center items-center cursor-pointer dark:text-white transform rounded-lg dark:bg-opacity-100 hover:dark:bg-opacity-100 px-6 py-2 transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 z-1"
                  variant="outline"
                  asChild
                >
                  <a
                    href="https://doc-portfolio.alexis-gousseau.com"
                    target="_blank"
                  >
                    <FileText />
                    Documentation
                  </a>
                </Button>
              </li>
              <li className="flex flex-row justify-center items-center gap-4">
                <Button
                  className="cursor-pointer transform rounded-lg dark:text-white dark:bg-opacity-100 hover:dark:bg-opacity-100 px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 z-1"
                  variant="outline"
                  asChild
                >
                  <a
                    href="https://stats.uptimerobot.com/gVFLoANSJb"
                    target="_blank"
                  >
                    <span className="w-[1rem] h-[1rem] bg-green-400 rounded-full"></span>
                    Status
                  </a>
                </Button>
              </li>
            </ul>
            <ul className="flex flex-col sm:flex-row justify-center items-center list-none gap-4">
              <li>© {currentYear} Alexis Gousseau</li>
              <li>All rights reserved</li>
              <li>Currently v2.0.0</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default AppFooter;
