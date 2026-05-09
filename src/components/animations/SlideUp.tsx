"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";
import { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  className?: string;
}

export default function SlideUp({
  children,
  className,
}: SlideUpProps) {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}