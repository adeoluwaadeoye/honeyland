"use client";

import { Suspense } from "react";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import GallerySlider from "@/app/gallery/components/GallerySlider";
import GalleryCategoryFilter from "./components/GalleryCategoryFilter";

export const dynamic = "force-static";

export default function GalleryPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-24 space-y-8 mt-12">

      {/* SECTION 1 */}
      <section>
        <SectionHeader
          label="Our Gallery"
          title="A Visual Journey Through the Growth, Development, and Collective Progress of Our Community"
        />
      </section>

      {/* SECTION 2 */}
      <section className="space-y-12">
        <h3 className="text-3xl md:text-4xl mb-2">
          The 2025 inauguration marked a turning point in leadership and vision.
        </h3>

        <div className="relative w-full h-125 overflow-hidden mt-4">
          <Image
            src="/assets/hero1.jpg"
            alt="Inauguration"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <p className="text-2xl text-gray-700 leading-relaxed">
          Beyond the ceremony, it represented a collective resolve to move forward together. Residents and leaders aligned on a shared goal — to build a safer, more structured, and progressively developed community for present and future generations.
        </p>
      </section>

      {/* Section 3 */}
      <section className="max-w-7xl mx-auto px-4 py-12 mt-2">
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-80 bg-gray-200 animate-pulse" />
              ))}
            </div>
          }
        >
          <GalleryCategoryFilter />
        </Suspense>
      </section>

      {/* SECTION 4 */}
      <section className="mt-8">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
          Honeyland Community Project Gallery
        </h3>
        <GallerySlider />
      </section>

      {/* SECTION 5 */}
      <section className="space-y-6">
        <h3 className="text-3xl md:text-4xl mb-4">
          Street Lighting Enhancement Through Concrete Poles Installation
        </h3>

        <p className="text-gray-700 text-2xl leading-relaxed mt-2">
          The concrete poles project marked a significant step forward in improving both
          safety and infrastructure within the community...
        </p>

        <div className="relative w-full h-125 rounded-sm overflow-hidden">
          <Image
            src="/assets/project2.png"
            alt="Concrete poles installation across community streets"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <p className="text-gray-700 text-2xl leading-relaxed mt-2">
          Through the collective effort of residents...
        </p>

        <p className="text-gray-700 text-2xl leading-relaxed mt-2">
          Beyond infrastructure, the project stands as a powerful example...
        </p>
      </section>

    </main>
  );
}