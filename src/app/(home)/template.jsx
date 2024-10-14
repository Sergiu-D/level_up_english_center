"use client"
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.main
      key="page"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      exit={{ size: 2 }}
      className="flex flex-col items-center [&_>_*]:max-w-7xl [&_>_*]:w-full"
    >
        {children}
    </motion.main>
  );
}
