"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("purnima-music-pref");
    if (saved === "playing") {
      // Will attempt to autoplay (may be blocked by browser)
      audioRef.current?.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      localStorage.setItem("purnima-music-pref", "paused");
    } else {
      audioRef.current.play().catch(() => {});
      localStorage.setItem("purnima-music-pref", "playing");
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <>
      {/* Audio element - replace src with your actual music file */}
      <audio ref={audioRef} loop preload="none">
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
      </audio>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-[80]"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="glass rounded-full overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/30 transition-colors"
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-gold" />
              ) : (
                <Play className="w-4 h-4 text-gold ml-0.5" />
              )}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 overflow-hidden"
                >
                  {/* Progress bar */}
                  <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-rose-gold rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Volume */}
                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-muted" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-muted" />
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
}
