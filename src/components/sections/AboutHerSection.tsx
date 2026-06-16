"use client";

import { motion } from "framer-motion";
import {
  Smile,
  Heart,
  Sparkles,
  HandHeart,
  CloudSun,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const qualities = [
  {
    icon: Smile,
    title: "Beautiful Smile",
    description: "A smile that could light up the darkest room and warm the coldest heart.",
  },
  {
    icon: Heart,
    title: "Kind Heart",
    description: "A heart so pure it sees beauty in everything and everyone.",
  },
  {
    icon: Sparkles,
    title: "Pure Soul",
    description: "A soul so gentle, it makes the world a more beautiful place.",
  },
  {
    icon: HandHeart,
    title: "Endless Support",
    description: "Always there, always caring, always believing in the ones she loves.",
  },
  {
    icon: CloudSun,
    title: "Beautiful Dreams",
    description: "Dreams that inspire, ambitions that motivate, and goals that shine.",
  },
  {
    icon: Shield,
    title: "Strong Personality",
    description: "Strength wrapped in grace, resilience hidden behind a gentle smile.",
  },
];

export function AboutHerSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary/20 to-primary" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-[128px]" />

      <div className="relative z-10 w-full container-responsive">
        <SectionHeading
          title="The Reason Behind My Smile"
          subtitle="Every quality that makes her extraordinary, every trait that makes her irreplaceable."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full auto-rows-fr">
          {qualities.map((item, index) => (
            <GlassCard
              key={item.title}
              delay={index * 0.1}
              glowColor={index % 2 === 0 ? "gold" : "rose"}
              className="h-full w-full"
            >
              <div className="flex flex-col items-center text-center p-2 h-full">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-rose-gold/20 flex items-center justify-center mb-5 shrink-0"
                >
                  <item.icon className="w-7 h-7 text-gold" />
                </motion.div>
                <h3 className="font-display text-fluid-h3 font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-muted text-fluid-p leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
