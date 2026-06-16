"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const letterLines = [
  "Some people enter our lives quietly and change everything forever.",
  "",
  "You are one of those rare souls.",
  "",
  "Your voice on our secret calls brings peace.",
  "Your messages bring comfort.",
  "Even though we haven't met in person yet, you make my life beautiful.",
  "",
  "Every moment spent thinking about you feels special.",
  "And every future I imagine has you in it.",
];

export function LoveLetterSection() {
  return (
    <section id="love-letter" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary/30" />

      <div className="relative z-10 w-full container-responsive">
        <SectionHeading title="A Letter From My Heart" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Letter card */}
          <div className="paper-texture rounded-2xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            {/* Gold border */}
            <div className="absolute inset-0 rounded-2xl border border-gold/20" />
            <div className="absolute inset-[4px] rounded-2xl border border-gold/10" />

            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/30 rounded-br-lg" />

            {/* Floating petals decoration */}
            {[...Array(6)].map((_, i) => {
              const petalStyles = [
                { left: "15%", animationDuration: "10s", animationDelay: "1s" },
                { left: "32%", animationDuration: "14s", animationDelay: "4s" },
                { left: "48%", animationDuration: "12s", animationDelay: "2s" },
                { left: "63%", animationDuration: "16s", animationDelay: "5s" },
                { left: "78%", animationDuration: "9s", animationDelay: "0s" },
                { left: "92%", animationDuration: "15s", animationDelay: "3s" },
              ];
              const style = petalStyles[i % petalStyles.length];
              return (
                <div
                  key={i}
                  className="absolute text-rose-gold/10 text-2xl animate-fall pointer-events-none"
                  style={{
                    left: style.left,
                    top: "-5%",
                    animationDuration: style.animationDuration,
                    animationDelay: style.animationDelay,
                  }}
                  aria-hidden="true"
                >
                  🌸
                </div>
              );
            })}

            {/* Letter content */}
            <div className="relative z-10 space-y-1">
              <p className="font-handwritten text-gold text-2xl sm:text-3xl mb-8">
                My Dearest Purnima,
              </p>

              {letterLines.map((line, index) =>
                line === "" ? (
                  <div key={index} className="h-4" />
                ) : (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="font-handwritten text-lg sm:text-xl md:text-2xl text-soft-pink/90 leading-relaxed"
                  >
                    {line}
                  </motion.p>
                )
              )}

              <div className="h-6" />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="font-handwritten text-xl sm:text-2xl text-gold text-right"
              >
                Forever yours ❤️
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
