"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  type?: "word" | "character";
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  staggerDelay = 0.05,
  type = "word",
}: AnimatedTextProps) {
  const units = type === "word" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={cn("inline-flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {units.map((unit, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ marginRight: type === "word" ? "0.3em" : undefined }}
        >
          {unit === " " ? "\u00A0" : unit}
        </motion.span>
      ))}
    </motion.span>
  );
}
