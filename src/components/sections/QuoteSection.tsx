"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingParticles } from "@/components/ui/FloatingParticles";

export function QuoteSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Aurora Effect Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #050505 0%, #0f172a 40%, #1e1b4b 60%, #050505 100%)",
          backgroundSize: "400% 400%",
          animation: "aurora 20s ease infinite",
        }}
        aria-hidden="true"
      />

      {/* Star Field Background */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none opacity-50" aria-hidden="true">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Particles for texture */}
      <FloatingParticles count={40} speed={0.1} maxSize={2} colors={["#d4af37", "#ffffff"]} />

      <div className="relative z-10 w-full container-responsive text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-6 w-full max-w-4xl mx-auto"
        >
          {/* Decorative quote mark */}
          <span className="font-display text-8xl md:text-9xl text-gold/20 block select-none h-10 leading-none">
            &ldquo;
          </span>

          <blockquote className="font-display text-fluid-h2 font-medium text-white leading-relaxed md:leading-normal">
            In all the world, there is no heart for me like yours.
          </blockquote>

          {/* Decorative quote mark end */}
          <span className="font-display text-8xl md:text-9xl text-gold/20 block select-none h-10 leading-none text-right">
            &rdquo;
          </span>

          {/* Author/Dedication */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="pt-6"
          >
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
            <cite className="font-handwritten text-2xl md:text-3xl text-rose-gold not-italic">
              For Purnima
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
