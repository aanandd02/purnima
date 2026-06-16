"use client";

import { motion } from "framer-motion";
import { Compass, Home, Heart, Sparkles, TrendingUp, CalendarDays } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

const dreams = [
  {
    icon: Compass,
    title: "Travel Together",
    description: "Exploring hidden corners of the world, making every new landscape a backdrop for our love.",
    gradient: "from-amber-500/20 to-gold/20",
  },
  {
    icon: Home,
    title: "Build Our Home",
    description: "Creating a sanctuary filled with warmth, endless laughter, and beautiful quiet moments.",
    gradient: "from-rose-gold/20 to-rose-500/20",
  },
  {
    icon: Heart,
    title: "Create Beautiful Memories",
    description: "Capturing simple daily joys and turning them into timeless treasures of our life path.",
    gradient: "from-pink-500/20 to-soft-pink/20",
  },
  {
    icon: Sparkles,
    title: "Support Each Other",
    description: "Standing hand in hand through every challenge, being each other's greatest strength and shelter.",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: TrendingUp,
    title: "Grow Together",
    description: "Encouraging each other to reach new heights, learning and evolving side by side every single day.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: CalendarDays,
    title: "Grow Old Together",
    description: "Walking hand in hand toward a beautiful sunset, sharing a lifetime of stories and love.",
    gradient: "from-gold/20 to-rose-gold/20",
  },
];

function DreamCard({ dream, index }: { dream: typeof dreams[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation angles (max 15 degrees tilt)
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 sm:p-8 cursor-pointer relative overflow-hidden transition-all duration-300 border border-white/5 group hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] h-full w-full"
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      {/* Decorative gradient background glow */}
      <div
        className={cn(
          "absolute -right-20 -top-20 w-40 h-40 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br",
          dream.gradient
        )}
        style={{ transform: "translateZ(20px)" }}
      />

      <div className="flex flex-col h-full justify-between" style={{ transform: "translateZ(40px)" }}>
        <div>
          {/* Card Icon */}
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold/15 transition-colors duration-300">
            <dream.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Title */}
          <h3 className="font-display text-fluid-h3 font-bold text-white mb-3">
            {dream.title}
          </h3>

          {/* Description */}
          <p className="text-muted text-fluid-p leading-relaxed font-body">
            {dream.description}
          </p>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/10 group-hover:border-gold/30 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}

export function FutureDreamsSection() {
  return (
    <section id="dreams" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary/15 to-primary" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-gold/5 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full container-responsive">
        <SectionHeading
          title="Our Future Dreams"
          subtitle="A canvas of beautiful aspirations we will paint together, hand in hand."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full auto-rows-fr">
          {dreams.map((dream, index) => (
            <DreamCard key={dream.title} dream={dream} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
