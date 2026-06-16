export interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

export const allImages: ImageData[] = [
  {
    src: "/images/purnima-1.jpeg",
    alt: "Purnima - A radiant moment",
    caption: "Beauty beyond words.",
  },
  {
    src: "/images/purnima-2.jpeg",
    alt: "Purnima - A beautiful smile",
    caption: "A smile worth remembering forever.",
  },
  {
    src: "/images/purnima-3.jpeg",
    alt: "Purnima - Graceful presence",
    caption: "Grace in every frame.",
  },
  {
    src: "/images/purnima-4.jpeg",
    alt: "Purnima - Pure elegance",
    caption: "The moment that stole my heart.",
  },
  {
    src: "/images/purnima-5.jpeg",
    alt: "Purnima - Cherished memory",
    caption: "Some memories deserve forever.",
  },
  {
    src: "/images/purnima-6.jpeg",
    alt: "Purnima - Timeless beauty",
    caption: "Timeless beauty, endless love.",
  },
  {
    src: "/images/purnima-7.jpeg",
    alt: "Purnima - Joyful moment",
    caption: "Joy looks beautiful on you.",
  },
  {
    src: "/images/purnima-8.jpeg",
    alt: "Purnima - Serene smile",
    caption: "Serenity in a single glance.",
  },
  {
    src: "/images/purnima-9.jpeg",
    alt: "Purnima - Captivating look",
    caption: "A look that speaks a thousand words.",
  },
  {
    src: "/images/purnima-10.jpeg",
    alt: "Purnima - Golden hour",
    caption: "Every light finds its way to you.",
  },
  {
    src: "/images/purnima-11.jpeg",
    alt: "Purnima - Dreamy portrait",
    caption: "Dreams look just like you.",
  },
  {
    src: "/images/purnima-12.jpeg",
    alt: "Purnima - Precious moment",
    caption: "A moment I will treasure forever.",
  },
  {
    src: "/images/purnima-13.jpeg",
    alt: "Purnima - Enchanting beauty",
    caption: "Enchanting in every way.",
  },
  {
    src: "/images/purnima-14.jpeg",
    alt: "Purnima - Radiant glow",
    caption: "Your glow outshines the stars.",
  },
  {
    src: "/images/purnima-15.jpeg",
    alt: "Purnima - Heartfelt smile",
    caption: "The smile that lights up my world.",
  },
  {
    src: "/images/purnima-16.jpeg",
    alt: "Purnima - Elegant moment",
    caption: "Elegance personified.",
  },
  {
    src: "/images/purnima-17.jpeg",
    alt: "Purnima - Beautiful memory",
    caption: "A memory painted with love.",
  },
  {
    src: "/images/purnima-18.jpeg",
    alt: "Purnima - Forever beautiful",
    caption: "Forever isn't long enough with you.",
  },
];

// Images for Hero section (Photo 11 - Saree photo)
export const heroImage = allImages[10];

// Background floating images for Hero section (Photo 17 and Photo 12)
export const heroLeftImage = allImages[16];
export const heroRightImage = allImages[11];

// Images for Memories (polaroid) section
export const memoryImages = [
  { ...allImages[1], caption: "The day I couldn't stop smiling." },
  { ...allImages[4], caption: "A memory I never want to lose." },
  { ...allImages[7], caption: "One beautiful moment among many." },
  { ...allImages[10], caption: "When time stood still for us." },
  { ...allImages[13], caption: "A glimpse of forever." },
  { ...allImages[16], caption: "The moment that changed everything." },
];

// Images for Timeline section
export const timelineImages = [
  allImages[2],
  allImages[5],
  allImages[8],
  allImages[11],
  allImages[14],
  allImages[17],
  allImages[6],
];
