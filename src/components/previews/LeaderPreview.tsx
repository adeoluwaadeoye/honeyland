"use client";

import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";

export default function LeaderPreview() {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-6xl mb-12">
          <SectionHeader
            label="Leadership"
            title={
              <>
                Meet the community visionary leader driving impactful initiatives and community growth.
              </>
            }
          />
        </div>

        {/* IMAGE + CONTENT ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
          
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md lg:max-w-lg h-100 overflow-hidden mx-auto lg:mx-0"
          >
            <Image
              src="/assets/chairman.jpg"
              alt="Chairman Oloni Adebola"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover mb-0"
              priority
            />
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              Mr. Oloni Adebola has consistently demonstrated remarkable leadership,
              guiding Honeyland CDA through projects that transform the community.
              His vision combines sustainability, inclusivity, and empowerment.
            </p>
            <p>
              Under his guidance, the association has improved infrastructure,
              fostered collaboration, and ensured transparency in all operations.
              Oloni Adebola’s strategic insight inspires confidence and motivates residents.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM: Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-1 max-w-3xl text-gray-600 text-lg italic border-l-4 border-green-500 pl-4"
        >
          &quot;Our mission is to build not just structures, but a thriving and
          united community.&quot;
        </motion.div>

      </div>
    </section>
  );
}