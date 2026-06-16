"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

export function SecretSurprise() {
  const [clickCount, setClickCount] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<
    { id: number; x: number; y: number; color: string; delay: number; rotation: number }[]
  >([]);

  const generateConfetti = useCallback(() => {
    const colors = ["#d4af37", "#e8b4b8", "#f8d7da", "#ffffff", "#ffd700"];
    const pieces = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * -20,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      rotation: Math.random() * 360,
    }));
    setConfettiPieces(pieces);
  }, []);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 5) {
      setShowSurprise(true);
      generateConfetti();
      setClickCount(0);
    }
  };

  return (
    <>
      {/* Floating heart button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 5, duration: 0.5, type: "spring" }}
        onClick={handleClick}
        className="fixed bottom-6 left-6 z-[80] w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-rose-gold/10 transition-colors group"
        aria-label="Secret surprise"
        title="Click me!"
      >
        <motion.div
          animate={
            clickCount > 0
              ? { scale: [1, 1.3, 1] }
              : { scale: 1 }
          }
          transition={{ duration: 0.3 }}
        >
          <Heart
            className="w-5 h-5 text-rose-gold group-hover:fill-rose-gold/50 transition-all"
            fill={clickCount > 0 ? "rgba(232,180,184,0.3)" : "none"}
          />
        </motion.div>
        {clickCount > 0 && clickCount < 5 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold text-[10px] font-bold text-primary flex items-center justify-center">
            {clickCount}
          </span>
        )}
      </motion.button>

      {/* Surprise Modal */}
      <AnimatePresence>
        {showSurprise && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={() => setShowSurprise(false)}
          >
            {/* Confetti */}
            {confettiPieces.map((piece) => (
              <motion.div
                key={piece.id}
                initial={{
                  x: `${piece.x}vw`,
                  y: "-10vh",
                  rotate: 0,
                  opacity: 1,
                }}
                animate={{
                  y: "110vh",
                  rotate: piece.rotation + 720,
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: piece.delay,
                  ease: "easeIn",
                }}
                className="fixed w-3 h-3 rounded-sm"
                style={{ backgroundColor: piece.color, left: 0, top: 0 }}
              />
            ))}

            {/* Message */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
              className="glass-strong rounded-3xl p-8 sm:p-12 max-w-lg mx-4 text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSurprise(false)}
                className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
                aria-label="Close surprise"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-16 h-16 text-rose-gold fill-rose-gold mx-auto mb-6" />
              </motion.div>

              <h3 className="font-display text-2xl sm:text-3xl gradient-gold font-bold mb-4">
                A Secret Just For You
              </h3>

              <p className="font-handwritten text-xl sm:text-2xl text-rose-gold leading-relaxed">
                &ldquo;No matter where life takes us, you will always be my
                favorite destination ❤️&rdquo;
              </p>

              <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              <p className="mt-4 text-muted text-sm">
                You found the secret! 🎉
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
