"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full py-16 px-6 border-t border-white/5 flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-secondary/30 to-transparent w-full" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full"
        >
          {/* Heart icon */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex justify-center mb-6"
          >
            <Heart className="w-8 h-8 text-rose-gold fill-rose-gold" />
          </motion.div>

          {/* Main text */}
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold gradient-gold mb-4 text-center w-full">
            Made With Love For Purnima 💛
          </h3>

          {/* Decorative line */}
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-4" />

          {/* Subtext */}
          <p className="text-muted text-sm sm:text-base font-body italic text-center w-full">
            &ldquo;Some stories deserve their own universe.&rdquo;
          </p>

          {/* Copyright */}
          <p className="mt-8 text-muted/40 text-xs font-body text-center w-full">
            Crafted with infinite love • {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
