"use client";

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

      <section className="max-w-7xl mx-auto px-4 py-12 mt-2">
        <GalleryCategoryFilter />
      </section>

      {/* SECTION 3 */}
      <section className="mt-8">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
          Honeyland Community Project Gallery
        </h3>
        <GallerySlider />
      </section>

      {/* SECTION 4 */}
      <section className="space-y-6">
        <h3 className="text-3xl md:text-4xl mb-4">
          Street Lighting Enhancement Through Concrete Poles Installation
        </h3>
        <p className="text-gray-700 text-2xl leading-relaxed mt-2">
          The concrete poles project marked a significant step forward in improving both
          safety and infrastructure within the community. For years, residents had to
          deal with poorly lit streets, unstable wooden poles, and constant concerns
          about security, especially at night. This initiative was introduced as a
          long-term solution to address those challenges and create a more secure and
          structured environment.
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
          Through the collective effort of residents, contributions were made, plans were
          executed, and installations were carried out across key areas of the community.
          The introduction of durable concrete poles not only improved street lighting
          but also enhanced overall visibility and reduced security risks. Today, the
          impact is evident — safer streets, improved night-time movement, and a stronger
          sense of confidence among residents.
        </p>

        <p className="text-gray-700 text-2xl leading-relaxed mt-2">
          Beyond infrastructure, the project stands as a powerful example of what unity
          and shared responsibility can achieve. It reflects a community that is not
          waiting for change, but actively building it — one project at a time.
        </p>
      </section>

    </main>
  );
}