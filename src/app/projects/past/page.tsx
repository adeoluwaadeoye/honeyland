"use client";

import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";

export default function PastProjectsPage() {
  return (
    <div className="relative py-24">

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Page Content */}
      <div className="relative z-10">

        {/* ================= HEADER ================= */}
        <section className="text-left pt-16 mb-12 max-w-7xl mx-auto px-4">
          <SectionHeader
            label="Infrastructure Projects"
            title="Explore our past projects across roads, electricity, and drainage systems"
          />
        </section>

        {/* ================= ELECTRICITY ================= */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 mt-12">
          <h2 className="text-3xl font-semibold">
            Electrifying Communities
          </h2>

          <p className="text-gray-700 mb-8 text-xl mt-2">
            Our journey began with providing reliable electricity from Olomu up to our community.
            Concrete poles were carefully erected over the years, and wiring installed systematically
            to ensure both safety and efficiency. This project brought power to homes and businesses,
            lighting up lives and enabling growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/assets/project1.png"
              alt="Olomu Electric Poles"
              width={600}
              height={400}
              className="w-full h-auto object-cover shadow"
            />
            <Image
              src="/assets/project2.png"
              alt="Community Wiring"
              width={600}
              height={400}
              className="w-full h-auto object-cover shadow"
            />
          </div>
        </section>

        {/* ================= ROADS ================= */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 mt-16">
          <h2 className="text-3xl font-semibold mb-4">
            Road Infrastructure Development
          </h2>

          <p className="text-gray-700 mb-8 text-xl mt-2">
            Beyond electrification, we focused on constructing and upgrading roads within the community.
            Proper planning and phased execution ensured durability, improved accessibility, and smoother transportation.
            Our attention to quality materials and structural integrity guaranteed roads that last and serve the community efficiently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/assets/project3.jpg"
              alt="Road Construction Phase"
              width={600}
              height={400}
              className="w-full h-auto object-cover shadow"
            />
            <Image
              src="/assets/project4.jpg"
              alt="Completed Road Infrastructure"
              width={600}
              height={400}
              className="w-full h-auto object-cover shadow"
            />
          </div>
        </section>

        {/* ================= CLOSING ================= */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Building for the Future
          </h2>

          <p className="text-gray-700 text-xl mt-2 mb-8">
            Each project tells a story of planning, execution, and impact. From electricity to roads,
            our focus has always been creating sustainable infrastructure that improves lives.
            We continue to innovate, plan strategically, and deliver excellence in every project we undertake.
          </p>

          <CTAButton text="Volunteer" href="/levies" />
        </section>

      </div>
    </div>
  );
}