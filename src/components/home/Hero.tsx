"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: { label: string; href: string };
}

const slides: Slide[] = [
  {
    label: "Community Development",
    title: "Honeyland CDA",
    subtitle: "Self Help. Best Help. Surest Help.",
    description:
      "A unified community focused on delivering real infrastructure driven by collective responsibility.",
    image: "/assets/hero3.jpg",
    cta: { label: "Learn More", href: "/about/about-us" },
  },
  {
    label: "Infrastructure",
    title: "Community-Led Development",
    subtitle: "Building What Truly Matters",
    description:
      "We execute impactful projects including electricity, drainage systems, and road networks that improve everyday living.",
    image: "/assets/hero1.jpg",
    cta: { label: "View Projects", href: "/projects/current" },
  },
  {
    label: "Sustainability",
    title: "Driven by Purpose",
    subtitle: "Growth That Lasts",
    description:
      "Our initiatives are designed for long-term value — empowering youth, strengthening systems, and improving livelihoods.",
    image: "/assets/hero2.jpg",
    cta: { label: "See Impact", href: "/impact/community" },
  },
];

// 🔹 Typewriter Hook
function useTypewriter(text: string, speed = 45) {
  const [displayed, setDisplayed] = useState("");

  useLayoutEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Hydration-safe mount with requestAnimationFrame (ESLint-safe)
  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // 🔹 Typewriter for subtitle
  const typedSubtitle = useTypewriter(slides[current].subtitle, 45);

  // 🔹 Auto-slide (pauses when interacting)
  useLayoutEffect(() => {
    if (!isMounted || isInteracting) return;

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 12000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInteracting, isMounted]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!isMounted) return null; //prevent SSR rendering

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT + SWIPE */}
      <motion.div
        className="absolute inset-0 flex items-center z-10"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragStart={() => setIsInteracting(true)}
        onDragEnd={(event, info) => {
          setIsInteracting(false);
          const offset = info.offset.x;
          const velocity = info.velocity.x;

          if (offset < -80 || velocity < -500) nextSlide();
          else if (offset > 80 || velocity > 500) prevSlide();
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: direction * 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 120, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto mt-4 sm:mt-20 lg:mt-24 px-6 sm:px-8 lg:px-12 w-full flex flex-col gap-7 sm:gap-8 lg:gap-10 text-white"
          >
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-green-400 text-xs tracking-widest uppercase"
            >
              {slides[current].label}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl mt-2 sm:text-6xl lg:text-7xl font-normal leading-snug text-balance wrap-break-words"
            >
              {slides[current].title}
            </motion.h1>

            {/* Subtitle (Typewriter) */}
            <motion.p
              key={slides[current].subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-lg text-white/85 max-w-md"
            >
              {typedSubtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed"
            >
              {slides[current].description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href={slides[current].cta.href}
                className="inline-block px-7 py-3 mt-6 bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
              >
                {slides[current].cta.label}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to ${slide.title} slide`}
            className={`h-2 rounded-full transition-all ${idx === current
              ? "w-8 bg-green-600"
              : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}