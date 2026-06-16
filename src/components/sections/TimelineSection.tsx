"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageCircle,
  Camera,
  Gem,
  Infinity,
  Phone,
  Heart,
  Hourglass,
} from "lucide-react";
import Image from "next/image";
import { timelineImages } from "@/lib/images";
import { SectionHeading } from "@/components/ui/SectionHeading";

const timelineEvents = [
  {
    icon: Camera,
    title: "First Sight (Seeing You in Photos)",
    description: "The unforgettable day my family showed me your photo. Your eyes, your simplicity, and that graceful smile completely stole my heart in a single glance.",
  },
  {
    icon: Heart,
    title: "Family's Blessings",
    description: "The beautiful moment when my family fell in love with your sweet personality. Seeing everyone so happy made me realize you were the blessing I was waiting for.",
  },
  {
    icon: MessageCircle,
    title: "The First WhatsApp Chat",
    description: "Sneaking away to send that first message. A nervous 'hello' that instantly blossomed into long chats, sharing our thoughts and smiles day and night.",
  },
  {
    icon: Phone,
    title: "Secret Phone Calls",
    description: "Talking on calls secretly from everyone, holding my breath to hear your sweet voice. Your laughter over the phone made all the distances between us vanish.",
  },
  {
    icon: Hourglass,
    title: "The Sweet Anticipation",
    description: "We haven't met in person yet, but talking to you makes me feel so close. Simply looking at your photos fills my heart with the warm dream of our first meeting.",
  },
  {
    icon: Gem,
    title: "The Marriage Talks",
    description: "As our families talk about our marriage, my heart holds only one absolute truth: I want to spend the rest of my life only with you, Purnima.",
  },
  {
    icon: Infinity,
    title: "Our Beautiful Forever",
    description: "From secret late-night calls to walking hand-in-hand in front of the entire world. A beautiful beginning to our lifetime of togetherness.",
  },
];

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary/10 to-primary" />

      <div className="relative z-10 w-full container-responsive">
        <SectionHeading
          title="Our Journey Together"
          subtitle="Every milestone of our beautiful love story."
        />

        <div className="relative w-full max-w-full">
          {/* Center line (background) */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-white/5" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:-translate-x-[1px] top-0 w-[2px] bg-gradient-to-b from-gold via-rose-gold to-gold"
            style={{ height: lineHeight }}
          />

          {/* Timeline events */}
          <div className="space-y-12 md:space-y-16 w-full">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const image = timelineImages[index];

              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-center gap-6 md:gap-0 w-full max-w-full ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Mobile: icon on left */}
                  <div className="md:hidden flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-gold/30">
                      <event.icon className="w-5 h-5 text-gold" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 min-w-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="glass rounded-2xl p-5 sm:p-6 hover:border-gold/20 transition-all duration-300 w-full break-words">
                      {image && (
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                        </div>
                      )}
                      <h3 className="font-display text-fluid-h3 font-semibold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted text-fluid-p font-body leading-relaxed break-words">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop: center icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-full glass-strong flex items-center justify-center border border-gold/40 glow-gold"
                    >
                      <event.icon className="w-5 h-5 text-gold" />
                    </motion.div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
