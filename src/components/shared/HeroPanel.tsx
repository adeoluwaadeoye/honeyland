"use client";

import Image from "next/image";

interface HeroPanelProps {
  title: string;  // Only prop needed
}

export default function HeroPanel({ title }: HeroPanelProps) {
  return (
    <div className="relative w-full h-96 md:h-128 lg:h-160 mb-12">
      {/* Full-width background image */}
      <Image
        src="/assets/about-us.png"  // Fixed image for all pages
        alt={title}
        fill
        className="object-cover object-center w-full"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Bottom-left Text */}
      <h2 className="absolute bottom-6 md:bottom-24 left-6 md:left-16 text-white font-bold text-4xl md:text-6xl lg:text-8xl">
        {title}
      </h2>
    </div>
  );
}