"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <div className="text-3xl font-bold text-center md:text-7xl dark:text-white">
          Background lights are cool you know.
        </div>
        <div className="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
          And this, is chemical burn.
        </div>
        <button className="px-4 py-2 text-white bg-black rounded-full dark:bg-white w-fit dark:text-black">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
