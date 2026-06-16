"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { allImages } from "@/lib/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { FloatingParticles } from "@/components/ui/FloatingParticles";

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-primary">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary/10 to-primary pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-rose-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Particles */}
      <FloatingParticles count={50} speed={0.1} maxSize={2} colors={["#d4af37", "#ffffff"]} />

      <div className="relative z-10 w-full container-responsive">
        <SectionHeading
          title="Precious Memories"
          subtitle="A cinematic journey through our most beautiful memories, captured in time."
        />

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6 w-full">
          {allImages.map((image, index) => {
            return (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: "easeOut" }}
                className="break-inside-avoid relative"
              >
                <div 
                  className="group cursor-pointer relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                  onClick={() => openLightbox(index)}
                >
                  {/* Natural Image -> not cropped! */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={1200}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Dark Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />

                  {/* Caption Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 pointer-events-none">
                    <h4 className="font-display text-xl text-white font-semibold mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {image.caption}
                    </h4>
                    <p className="text-gold/80 font-body text-sm font-light italic opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                      View Memory
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Lightbox
        images={allImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
