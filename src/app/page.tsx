"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CursorGlow } from "@/components/layout/CursorGlow";

// Section Components
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutHerSection } from "@/components/sections/AboutHerSection";
import { LoveLetterSection } from "@/components/sections/LoveLetterSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { MemoriesSection } from "@/components/sections/MemoriesSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { FutureDreamsSection } from "@/components/sections/FutureDreamsSection";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { FinalLoveSection } from "@/components/sections/FinalLoveSection";

export default function Home() {
  // Initialize Lenis Smooth Scroll
  useSmoothScroll();

  return (
    <>
      {/* Cinematic Loading Overlay */}
      <LoadingScreen />

      {/* Premium Ambient & Navigation utilities */}
      <ScrollProgress />
      <CursorGlow />


      {/* Main Love Story Layout */}
      <main className="relative min-h-screen overflow-x-hidden bg-primary w-full flex flex-col">
        <HeroSection />
        <AboutHerSection />
        <LoveLetterSection />
        <GallerySection />
        <TimelineSection />
        <QuoteSection />
        <FutureDreamsSection />
        <ReasonsSection />
        <FinalLoveSection />
      </main>
    </>
  );
}
