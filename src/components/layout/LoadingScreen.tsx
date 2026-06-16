"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-primary"
        >
          {/* Radial glow behind text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-[500px] h-[500px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 40%, transparent 70%)",
              }}
            />
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-bold drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] gradient-gold relative z-10"
          >
            Purnima
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="mt-6 h-[1px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-6 text-muted text-sm sm:text-base tracking-[0.3em] uppercase font-body"
          >
            Loading Beautiful Memories...
          </motion.p>

          {/* Animated dots */}
          <div className="mt-8 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 rounded-full bg-gold"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
