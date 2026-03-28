"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { PlayCircle } from "lucide-react";

export default function CommunityPage() {
  return (
    <section className="py-16 md:py-24 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-12">

        {/* Header */}
        <SectionHeader
          label="Our Community"
          title="Empowering People, Building a Stronger Future Together"
        />

        {/* Mission */}
        <div className="max-w-3xl text-base md:text-lg leading-relaxed space-y-5">
          <p className="font-medium text-gray-900">
            Our mission is simple but powerful — to create a united, self-reliant
            community where every resident has a voice, a role, and an opportunity to thrive.
          </p>
          <p className="font-medium text-gray-900">
            At Honeyland CDA, we believe that true development begins with people.
            Through collaboration, transparency, and dedication, we drive initiatives
            that uplift lives and build a sustainable future.
          </p>
        </div>

        {/* Video */}
        <div>
          <h2 className="text-2xl font-bold text-center md:text-2xl mb-6">
            See Our Community in Action
          </h2>

          <div className="relative w-full mt-4 aspect-video rounded-xl overflow-hidden group">
            <video
              controls
              className="w-full h-full object-cover"
              src="/assets/cda.mp4"
              preload="none"
            />
            <PlayCircle className="absolute inset-0 m-auto w-14 h-14 text-white opacity-70 pointer-events-none group-hover:scale-110 transition" />
          </div>
        </div>

        {/* Stories */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold">
            Resident Stories
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Mrs. Oyeshile",
                story:
                  "The CDA transformed our street. We now have proper sanitation and better security.",
                img: "/assets/sample.jpg",
              },
              {
                name: "Mr. Adeoluwa Adeoye",
                story:
                  "Through community programs, I gained skills that helped me start my small business.",
                img: "/assets/sample.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes=""
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-gray-700 italic text-sm md:text-base">
                      “{item.story}”
                    </p>
                    <h4 className="mt-2 font-semibold text-lg text-black">
                      — {item.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-600 text-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Be Part of the Change
            </h3>
            <p className="text-sm md:text-base mt-1">
              Join us in building a stronger, more vibrant Honeyland community.
            </p>
          </div>

          <Link
            href="/levies"
            className="bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Get Involved
          </Link>
        </div>

      </div>
    </section>
  );
}