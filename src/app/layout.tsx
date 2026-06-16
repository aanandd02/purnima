import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purnima ❤️ | Every Beautiful Story Begins With One Beautiful Soul.",
  description: "A premium luxury romantic website dedicated to Purnima. You are the most beautiful chapter of my life.",
  keywords: ["Purnima", "Love Story", "Romantic Gallery", "Wedding Journey"],
  authors: [{ name: "Your Devoted Partner" }],
  openGraph: {
    title: "Purnima ❤️",
    description: "Every Beautiful Story Begins With One Beautiful Soul.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purnima ❤️",
    description: "Every Beautiful Story Begins With One Beautiful Soul.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary text-white font-body selection:bg-rose-gold/40 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
