"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
// import { motion } from "framer-motion";
import SafeMotion from "@/app/features/utils/SafeMotion";

export default function AnnouncementIntro() {
  return (
    <section className="relative h-full py-2 bg-[url('/assets/bg1.jpg')] bg-center bg-no-repeat bg-contain bg-fixed">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="relative max-w-4xl mx-auto text-center px-4 z-10">
        
        {/* HEADER */}
        <SafeMotion
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 opacity-0 translate-y-10"
        >
          <SectionHeader
            label="Mark Your Calendar"
            title={
              <>
                Join us for the{" "}
                <span className="text-black font-semibold">
                  End of the Year Party
                </span>{" "}
                to celebrate our achievements, connect with the community, and enjoy an unforgettable evening.
              </>
            }
          />
        </SafeMotion>

        {/* IMAGE */}
        <SafeMotion
          initial={false}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 opacity-0 scale-105"
        >
          <Image
            src="/assets/hero1.jpg"
            alt="End of the Year Party"
            width={900}
            height={500}
            className="shadow-lg object-cover mx-auto mb-4 mt-24"
            priority
          />
        </SafeMotion>

        {/* CONTENT */}
        <SafeMotion
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-black text-lg mt-8 opacity-0"
        >
          <p>
            We’ve had an incredible year filled with milestones, completed projects, and impactful community initiatives. 
            Now it’s time to come together, reflect, and celebrate our collective efforts.
          </p>
          <p>
            <strong>Date:</strong> December 20, 2026 <br />
            <strong>Time:</strong> 6:00 PM - 11:00 PM <br />
            <strong>Venue:</strong> Community Hall, Main Street, Lagos
          </p>
          <p>
            Expect a night of live entertainment, delicious food, networking opportunities, and a look back at our year’s highlights.
          </p>
        </SafeMotion>
      </div>
    </section>
  );
}