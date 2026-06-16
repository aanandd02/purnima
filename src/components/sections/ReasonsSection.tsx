"use client";

import { motion } from "framer-motion";
import { 
  Smile, 
  Sparkles, 
  HeartHandshake, 
  Hourglass, 
  Compass, 
  ShieldCheck, 
  Fingerprint, 
  Flame, 
  Sun, 
  Award, 
  UserCheck, 
  Infinity 
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const reasons = [
  {
    icon: Smile,
    title: "Your Smile",
    description: "It holds a quiet power that completely turns my day around in seconds.",
  },
  {
    icon: Sparkles,
    title: "Your Simplicity",
    description: "You find magic in small things, teaching me what truly matters in this life.",
  },
  {
    icon: HeartHandshake,
    title: "Your Kindness",
    description: "The pure, unselfish love and grace you extend to every soul you meet.",
  },
  {
    icon: Hourglass,
    title: "Your Patience",
    description: "The calm sanctuary you create in moments of chaos and uncertainty.",
  },
  {
    icon: Compass,
    title: "Your Confidence",
    description: "The elegant way you hold yourself and stand tall for what you believe in.",
  },
  {
    icon: ShieldCheck,
    title: "Your Strength",
    description: "The unseen resilience that carries you gracefully through life's tides.",
  },
  {
    icon: Fingerprint,
    title: "Your Honesty",
    description: "The transparent, genuine nature that makes you completely trustworthy.",
  },
  {
    icon: Flame,
    title: "Your Care",
    description: "How you pay attention to the smallest details of my comfort and happiness.",
  },
  {
    icon: Sun,
    title: "Your Positivity",
    description: "A golden ray of sunshine that brightens up even the cloudiest horizons.",
  },
  {
    icon: Award,
    title: "Your Intelligence",
    description: "Your bright mind and beautiful perspective on art, life, and the universe.",
  },
  {
    icon: UserCheck,
    title: "Your Presence",
    description: "Simply sitting beside you makes the entire world feel complete.",
  },
  {
    icon: Infinity,
    title: "Everything About You",
    description: "From your little habits to your grandest dreams, you are perfection to me.",
  },
];

export function ReasonsSection() {
  return (
    <section id="reasons" className="section-padding relative overflow-hidden bg-primary">
      {/* Dynamic glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full container-responsive">
        <SectionHeading
          title="Why I Admire You"
          subtitle="Twelve of the infinite reasons why you are the most precious soul in my universe."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full auto-rows-fr">
          {reasons.map((item, index) => (
            <GlassCard
              key={item.title}
              delay={(index % 3) * 0.1}
              glowColor={index % 2 === 0 ? "gold" : "rose"}
              className="flex flex-col h-full w-full hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4 h-full">
                {/* Icon wrapper */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold/15 to-rose-gold/15 flex items-center justify-center border border-gold/10">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                
                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="font-display text-fluid-h3 font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-fluid-p leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
