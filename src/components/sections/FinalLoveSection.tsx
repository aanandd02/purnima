"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { Heart } from "lucide-react";

const textLines = [
  "Every moment with you feels like a blessing.",
  "Every memory with you feels precious.",
  "Every dream feels brighter because of you.",
  "And every tomorrow feels worth waiting for.",
  "Thank you for being you.",
];

export function FinalLoveSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden bg-primary">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-secondary/10 to-primary pointer-events-none" />

      {/* Radial glow specifically behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[800px] aspect-square bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Particles */}
      <FloatingParticles count={30} speed={0.15} maxSize={3} colors={["#e8b4b8", "#d4af37"]} />

      {/* Falling Petals Effect (CSS animated) */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-rose-gold/20 text-2xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * -20}%`,
                animationDuration: `${10 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              🌸
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 w-full container-responsive flex flex-col items-center justify-center px-4">
        
        {/* Premium Ending Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="glass rounded-3xl p-8 sm:p-12 md:p-16 border border-gold/20 backdrop-blur-xl w-full max-w-[700px] flex flex-col items-center text-center shadow-[0_0_40px_rgba(212,175,55,0.15)]"
        >
          {/* Pulsing Heart Icon */}
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6"
          >
            <Heart className="w-12 h-12 text-rose-gold fill-rose-gold/40 glow-rose" />
          </motion.div>

          {/* Large Title */}
          <h2 className="font-display text-fluid-h2 md:text-5xl font-bold gradient-gold tracking-wide drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] mb-8">
            Forever Starts With You
          </h2>

          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8" />

          {/* Emotional Message */}
          <div className="space-y-4 mb-10 w-full">
            {textLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="font-body text-fluid-p text-soft-pink/90 leading-relaxed font-light tracking-wide w-full"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8" />

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-rose-gold drop-shadow-sm">
              Purnima
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Text Moved Below Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 md:mt-16 flex flex-col items-center text-center w-full"
        >
          <h3 className="font-display text-lg sm:text-xl font-medium gradient-gold mb-3">
            Made With Love For Purnima 💛
          </h3>
          <p className="text-muted/60 text-xs sm:text-sm font-body italic mb-2">
            &ldquo;Some stories deserve their own universe.&rdquo;
          </p>
          <p className="text-muted/40 text-xs font-body">
            Crafted with infinite love • {new Date().getFullYear()}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
