"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "gold" | "rose";
  delay?: number;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  glowColor = "gold",
  delay = 0,
}: GlassCardProps) {
  const glowStyles = {
    gold: "hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]",
    rose: "hover:shadow-[0_0_30px_rgba(232,180,184,0.2)]",
  };

  const borderHover = {
    gold: "hover:border-gold/30",
    rose: "hover:border-rose-gold/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hoverEffect ? { y: -8, scale: 1.02 } : undefined}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-500",
        hoverEffect && glowStyles[glowColor],
        hoverEffect && borderHover[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
