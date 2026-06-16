"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles, BookOpen } from "lucide-react";
import Image from "next/image";
import { heroImage, heroLeftImage, heroRightImage } from "@/lib/images";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { useMousePosition } from "@/hooks/useMousePosition";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const { x: mouseX, y: mouseY } = useMousePosition();

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 gradient-luxury-bg"
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(212,175,55,0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      <FloatingParticles count={60} speed={0.2} maxSize={2} />

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full container-responsive"
      >
        {/* Floating elements container - absolute but constrained by container-responsive */}
        <div className="absolute inset-0 pointer-events-none flex justify-between items-center px-4 md:px-12 w-full h-full max-w-7xl mx-auto hidden sm:flex">
          <motion.div
            style={{ y }}
            className="w-24 h-24 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border border-gold/15 glow-gold opacity-30 sm:opacity-45 pointer-events-auto hover:opacity-85 transition-all duration-500 animate-spin-slow flex-shrink-0"
          >
            <Image
              src={heroLeftImage.src}
              alt={heroLeftImage.alt}
              fill
              className="object-cover scale-110"
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 176px, 240px"
            />
          </motion.div>
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, 100]),
              animationDirection: "reverse",
            }}
            className="w-32 h-32 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-rose-gold/15 glow-rose opacity-30 sm:opacity-45 pointer-events-auto hover:opacity-85 transition-all duration-500 animate-spin-slow flex-shrink-0"
          >
            <Image
              src={heroRightImage.src}
              alt={heroRightImage.alt}
              fill
              className="object-cover scale-110"
              sizes="(max-width: 640px) 128px, (max-width: 1024px) 208px, 288px"
            />
          </motion.div>
        </div>

        {/* Content Box */}
        <div className="relative z-20 flex flex-col items-center">
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 3.5, ease: "easeOut" }}
            style={{ scale: imageScale }}
            className="relative mb-4 sm:mb-8 md:mb-12"
          >
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gold/30 glow-gold mx-auto">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 256px"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-[-8px] rounded-full border border-gold/10 animate-pulse-glow" />
            <div className="absolute inset-[-16px] rounded-full border border-rose-gold/5" />
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
            className="w-full"
          >
            <h1 className="font-display text-fluid-h1 font-bold mb-4 md:mb-6 w-full text-center">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 4.2, ease: "easeOut" }}
                className="inline-block gradient-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                Purnima
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 5 }}
            className="w-full"
          >
            <p className="font-display text-fluid-h3 text-rose-gold/90 italic max-w-2xl mx-auto w-full text-center">
              <AnimatedText
                text="You are the most beautiful chapter of my life."
                delay={5.2}
                staggerDelay={0.06}
              />
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-10 md:mt-14 w-full"
          >
          <a
            href="#about"
            className="group flex items-center gap-2 px-8 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 font-body text-sm tracking-wider uppercase"
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Explore Our Story
          </a>
          <a
            href="#gallery"
            className="group flex items-center gap-2 px-8 py-3 rounded-full border border-rose-gold/40 text-rose-gold hover:bg-rose-gold/10 transition-all duration-300 font-body text-sm tracking-wider uppercase"
          >
            <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            View Memories
          </a>
        </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted/50 text-xs tracking-[0.2em] uppercase font-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
