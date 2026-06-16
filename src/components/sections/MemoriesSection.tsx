"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { allImages } from "@/lib/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { FloatingParticles } from "@/components/ui/FloatingParticles";

// Select a featured memory
const featuredMemory = {
  ...allImages[12], // "Enchanting beauty"
  caption: "The moment that made time stand still.",
};

// Select gallery images
const galleryImages = allImages.filter((img) => img.src !== featuredMemory.src).slice(0, 15);

export function MemoriesSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Parallax for featured image
  const featuredRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="memories" className="section-padding relative overflow-hidden bg-primary">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary/15 to-primary" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Particles */}
      <FloatingParticles count={40} speed={0.1} maxSize={2} colors={["#d4af37"]} />

      <div className="relative z-10 w-full container-responsive">
        <SectionHeading
          title="Precious Memories"
          subtitle="Every photograph is a heartbeat, every frame is a testament to our beautiful journey."
        />

        {/* Featured Memory */}
        <div ref={featuredRef} className="mb-16 sm:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-rose-gold/20 to-gold/20 rounded-2xl blur-lg opacity-50" />
            
            <div className="relative glass rounded-2xl p-4 sm:p-6 md:p-8 border border-gold/20 backdrop-blur-xl">
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/40 rounded-tl" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/40 rounded-br" />
              
              <div className="text-center mb-6">
                <span className="font-handwritten text-gold text-2xl sm:text-3xl">Our Favorite Memory</span>
              </div>
              
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl border border-white/10 group cursor-pointer" onClick={() => openLightbox(0)}>
                <motion.div style={{ y, height: "120%" }} className="absolute inset-0 -top-[10%]">
                  <Image
                    src={featuredMemory.src}
                    alt={featuredMemory.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </motion.div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="font-display text-fluid-h3 font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {featuredMemory.caption}
                  </h3>
                  <p className="text-gold/80 font-body text-fluid-p translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    Click to view fullscreen
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 w-full">
          {galleryImages.map((image, idx) => {
            // Determine styling
            const isPolaroid = idx % 4 === 0;
            const tiltAngle = (idx % 2 === 0 ? 1 : -1) * ((idx % 3) + 1.5); // Random tilt between -2.5 and 2.5
            const aspectRatios = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[1/1]"];
            const aspectRatio = isPolaroid ? "aspect-[4/5]" : aspectRatios[idx % aspectRatios.length];
            const lightboxIndex = idx + 1; // 0 is featured

            return (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotate: isPolaroid ? 0 : tiltAngle * 0.5,
                  transition: { duration: 0.4 },
                }}
                className={`group cursor-pointer relative break-inside-avoid w-full ${
                  isPolaroid ? "p-3 pb-12 bg-white/95 shadow-2xl shadow-black/30 rounded-sm" : "rounded-xl overflow-hidden glass border border-gold/20"
                }`}
                style={{
                  transform: isPolaroid ? `rotate(${tiltAngle}deg)` : "none",
                  transformOrigin: "center center",
                }}
                onClick={() => openLightbox(lightboxIndex)}
              >
                {/* Image Container */}
                <div className={`relative w-full ${aspectRatio} overflow-hidden ${isPolaroid ? "" : "rounded-xl"}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Non-polaroid overlay */}
                  {!isPolaroid && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                      <h4 className="font-display text-lg font-semibold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {image.caption}
                      </h4>
                      <p className="text-rose-gold/80 font-handwritten text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        A beautiful memory
                      </p>
                    </div>
                  )}
                </div>

                {/* Polaroid Caption */}
                {isPolaroid && (
                  <>
                    <p className="absolute bottom-3 left-0 right-0 text-center font-handwritten text-fluid-p text-gray-800 px-4 group-hover:text-black transition-colors">
                      {image.caption}
                    </p>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/30 backdrop-blur-sm rounded-sm rotate-[-2deg] shadow-sm" />
                  </>
                )}

                {/* Glow effect on hover */}
                {!isPolaroid && (
                  <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow duration-500 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <Lightbox
        images={[featuredMemory, ...galleryImages]}
        initialIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
