"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20 flex flex-col w-full",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "font-display font-bold gradient-gold mb-4 text-fluid-h2 w-full",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        {title}
      </motion.h2>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className={cn(
          "h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent block",
          align === "center" ? "mx-auto" : "mr-auto"
        )}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className={cn(
            "mt-6 text-muted max-w-2xl font-body text-fluid-p w-full",
            align === "center" ? "text-center mx-auto" : "text-left mr-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
