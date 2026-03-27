"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";

type Slide = {
  image: string;
  title: string;
  content: string;
};

const slides: Slide[] = [
  {
    image: "/assets/project1.png",
    title: "Concrete Poles Installation",
    content:
      "Installation of durable concrete poles across major streets to improve lighting infrastructure and enhance nighttime security within the community.",
  },
  {
    image: "/assets/project3.jpg",
    title: "Road Rehabilitation Project",
    content:
      "Reconstruction of damaged internal roads to improve accessibility, reduce flooding, and ensure smoother transportation for residents.",
  },
  {
    image: "/assets/project4.jpg",
    title: "Environmental Sanitation Drive",
    content:
      "A coordinated sanitation exercise involving residents clearing drainage systems and removing waste to maintain a healthy environment.",
  },
  {
    image: "/assets/project5.png",
    title: "Drainage Construction Initiative",
    content:
      "Development of structured drainage channels to prevent waterlogging and protect properties during heavy rainfall seasons.",
  },
  {
    image: "/assets/project6.png",
    title: "Community Security Upgrade",
    content:
      "Introduction of improved security patrol systems and strategic lighting points to strengthen safety across all zones.",
  },
  {
    image: "/assets/project1.png",
    title: "Street Lighting Expansion",
    content:
      "Expansion of street lighting coverage to previously dark areas, improving visibility and reducing security risks.",
  },
  {
    image: "/assets/project2.png",
    title: "Youth Engagement Program",
    content:
      "Community-driven initiative focused on engaging youths through development activities and environmental responsibility programs.",
  },
  {
    image: "/assets/project4.jpg",
    title: "Flood Prevention Measures",
    content:
      "Targeted interventions to clear blocked waterways and reinforce drainage systems to minimize flood impact.",
  },
  {
    image: "/assets/project5.png",
    title: "Community Hall Renovation",
    content:
      "Upgrade and refurbishment of the community hall to serve as a modern space for meetings, events, and gatherings.",
  },
  {
    image: "/assets/project6.png",
    title: "Waste Management Improvement",
    content:
      "Structured waste disposal system introduced to improve cleanliness and reduce environmental hazards.",
  },
];

export default function GallerySlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = modalIndex !== null ? "hidden" : "auto";
  }, [modalIndex]);

  return (
    <section className="relative w-full space-y-10 mt-4">

      {/* SLIDER */}
      <Swiper
        spaceBetween={10}
        centeredSlides
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 1.5},
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="pb-24"
      >
        {slides.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={index}>
              <div
                onClick={() => setModalIndex(index)}
                className={`relative w-full h-105 rounded-sm overflow-hidden cursor-pointer transition-all duration-500 ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-60"
                  }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* NAV */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
          title="Previous slide"
          className="w-15 h-15 bg-green-700 text-white rounded-full flex items-center justify-center"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
          title="Next slide"
          className="w-15 h-15 bg-green-700 text-white rounded-full flex items-center justify-center"
        >
          <ArrowRight />
        </button>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setModalIndex(null)}
              aria-label="Close modal"
              className="absolute top-6 right-6 bg-red-600 text-white rounded-full w-12 h-12 z-50 flex items-center justify-center"
            >
              <X size={28} />
            </button>

            <motion.div
              key={modalIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full text-center text-white px-4 space-y-6"
            >
              <div className="relative w-full h-100 md:h-125">
                <Image
                  src={slides[modalIndex].image}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <h2 className="text-2xl font-semibold">
                {slides[modalIndex].title}
              </h2>

              <p className="text-gray-300">
                {slides[modalIndex].content}
              </p>

              <div className="flex justify-center gap-6">
                <button
                  className="bg-green-600 text-white rounded-full w-10 h-10 z-50 flex items-center justify-center"
                  onClick={() =>
                    setModalIndex((prev) =>
                      prev === 0 ? slides.length - 1 : (prev as number) - 1
                    )
                  }
                  aria-label="Previous project" 
                >
                  <ArrowLeft />
                </button>

                <button
                className="bg-green-600 text-white rounded-full w-10 h-10 z-50 flex items-center justify-center"
                  onClick={() =>
                    setModalIndex((prev) =>
                      prev === slides.length - 1 ? 0 : (prev as number) + 1
                    )
                  }
                  aria-label="Next project"
                >
                  <ArrowRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}