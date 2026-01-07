"use client";

import { motion } from "framer-motion";
import { IconFolders } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import PinnedProject from "@/components/PinnedProject";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ChevronDown, Github } from "lucide-react";
import { GithubPinnedData } from "@/types/types";

export default function SectionHome({ graphqlData }: { graphqlData: GithubPinnedData }) {
  return (
    <section id="home" className="relative overflow-hidden w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <BackgroundBeams className="w-full min-w-[80rem] left-1/2 transform -translate-x-1/2" />
      </motion.div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-background to-background/0 w-full h-[30%] z-1" />
      <div className="container flex flex-col justify-center items-center w-full min-h-screen mx-auto p-4">
        <h1 className="relative bg-gradient-to-b from-[#18CCFC] to-[#6344F5] bg-clip-text text-4xl sm:text-7xl font-bold text-transparent text-center pb-4">
          {"Alexis Gousseau".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.h2
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.3, delay: 0.6, ease: "easeInOut" }}
          className="relative text-center text-lg font-normal text-neutral-600 dark:text-neutral-400 mx-auto pb-4"
        >
          Full-stack web developer and database conceptor
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.3, delay: 0.9, ease: "easeInOut" }}
          className="relative my-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            className="flex justify-center items-center cursor-pointer w-60 transform rounded-lg px-6 py-2 transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 z-1"
            variant="default"
            asChild
          >
            <Link href="#projects">
              <IconFolders />
              Projects
            </Link>
          </Button>
          <Button
            className="flex justify-center items-center cursor-pointer dark:text-white w-60 transform rounded-lg dark:bg-opacity-100 hover:dark:bg-opacity-100 px-6 py-2 transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 z-1"
            variant="outline"
            asChild
          >
            <a href="https://github.com/alexis-gss" target="_blank">
              <Github />
              Github
            </a>
          </Button>
        </motion.div>
        {graphqlData ? (
          graphqlData.error ? (
            <p className="text-red-600 mt-4">{graphqlData.error}</p>
          ) : (
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.3, delay: 1.2, ease: "easeInOut" }}
              className="hidden md:block text-center z-1"
            >
              <small className="text-muted-foreground mx-auto">
                Pinned projects
              </small>
              <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-fit mt-4">
                {graphqlData.data.user.pinnedItems.nodes.map(
                  (project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + 1.2,
                        ease: "easeInOut",
                      }}
                    >
                      <PinnedProject project={project} />
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          )
        ) : (
          <div className="h-[148px]" />
        )}
        <motion.div
          className="absolute bottom-24 md:bottom-10 left-1/2 transform -translate-x-1/2 z-1"
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.3, delay: 1.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-1 items-center text-muted-foreground">
            <small className="text-muted-foreground mx-auto">
              Scroll to discover
            </small>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
