"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
interface Props extends HTMLMotionProps<"div"> {}

const Motion = ({
  children,
  transition,
  initial,
  animate,
  className,
  whileInView,
  viewport,
}: Props) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
