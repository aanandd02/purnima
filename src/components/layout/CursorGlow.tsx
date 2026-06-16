"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches ||
          window.innerWidth < 768
      );
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[90] transition-opacity duration-300"
      style={{
        left: x - 150,
        top: y - 150,
        width: 300,
        height: 300,
        background:
          "radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(232,180,184,0.04) 40%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(2px)",
      }}
      aria-hidden="true"
    />
  );
}
