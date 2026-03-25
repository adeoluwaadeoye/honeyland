
"use client";

import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";

export default function AboutPreview() {
  return (
    <section className="relative h-full py-24 bg-[url('/assets/bg-logo.png')] bg-center bg-no-repeat bg-contain bg-fixed">
      {/* Overlay with subtle opacity */}
      <div className="absolute inset-0 bg-white/92 transition-opacity duration-300"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-4xl">
          <SectionHeader
            label="Who We Are"
            title={
              <>
                We are a community built on trust, integrity,{" "}
                <span className="text-black font-semibold">
                  and a deep commitment to community growth — driven by purpose, not just projects.
                </span>
              </>
            }
          />
        </div>

        {/* BODY */}
        <div className="mt-12 md:ml-auto md:w-1/2 text-gray-900 space-y-6">
          <p className="text-lg leading-relaxed">
            Beyond construction, we believe in building relationships, creating opportunities, and leaving a lasting positive impact. Our identity is rooted in responsibility, collaboration, and a long-term vision for the communities we serve.
          </p>
          <p className="text-lg leading-relaxed">
            Every project we undertake is more than just concrete and steel — it’s about fostering growth, empowering residents, and creating spaces where communities can thrive. We work closely with stakeholders to ensure every initiative reflects the values and needs of those we serve.
          </p>
          <Link
            href="/projects"
            className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}