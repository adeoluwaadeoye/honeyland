"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { historyData } from "@/data/history";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function HistoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // CountUp trigger
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 bg-white mt-8">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-5xl mb-12">
          <SectionHeader
            label="Our Journey"
            title={
              <>
                Built through unity, sacrifice, and{" "}
                <span className="text-black font-semibold">
                  the collective effort of a determined community.
                </span>
              </>
            }
          />
        </div>

        {/* FULL-WIDTH PARAGRAPHS */}
        <div className="mb-24 space-y-6 text-gray-700 text-lg leading-relaxed max-w-none">
          <p>
            In 2020, the Honeyland community reached a defining milestone by
            successfully obtaining both state and local government certification.
            This achievement was earned through the unwavering commitment,
            financial contributions, and active participation of residents.
          </p>
          <p>
            We were formally recommended as a Community Development Association (CDA)
            by the <strong>Association of Community Development Council (The Ajumoserere ACDC)</strong>,
            led by the late <strong>Engineer Anifowoshe</strong>, who personally presented our
            state and local government certification. This recognition solidified our
            legitimacy and enabled us to operate with full community authority.
          </p>
          <p>
            Under the leadership of <strong>Mr. Olamilekan Taiwo</strong>, the first
            chairman, the foundation for structured development was laid. His tenure
            was marked by the critical effort to bring electricity into the community,
            a project that required persistence, coordination, and collective sacrifice.
          </p>
          <p>
            Leadership transitioned in 2022 to <strong>Mr. Oguntade Raphael</strong>,
            who continued through 2025, strengthening the electricity project by
            replacing wooden poles with durable concrete poles—ensuring long-term
            reliability and safety.
          </p>
          <p>
            Over the years, Honeyland CDA has evolved into a structured and forward-thinking
            association, driven by transparency, accountability, and shared responsibility.
            Every milestone achieved reflects the resilience of its members and the strength
            of collective action.
          </p>
          <p>
            Today, the community continues to build on this legacy—embracing innovation,
            improving infrastructure, and positioning itself as a model for sustainable
            community development within the region.
          </p>
        </div>

        {/* HORIZONTAL COUNT-UP STRIP */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row w-full mb-16 overflow-hidden"
        >
          {/* LEFT HALF */}
          <div className="flex-1 flex flex-col md:flex-row bg-pink-500">
            {/* First counter */}
            <div className="flex-1 flex flex-col text-center p-4">
              <h3 className="text-5xl md:text-5xl font-bold text-white">
                {inView ? <CountUp end={200} duration={2} /> : 0}+
              </h3>
              <p className="text-lg font-semibold mt-1 text-white">Community Members</p>
              <div className="bg-white text-black text-sm p-2 mt-1 w-full flex-1">
                Over 200 dedicated residents actively contribute to our growth.
              </div>
            </div>

            {/* Second counter */}
            <div className="flex-1 flex flex-col text-center p-4">
              <h3 className="text-5xl md:text-5xl font-bold text-white">
                {inView ? <CountUp end={10} duration={2} /> : 0}+
              </h3>
              <p className="text-lg font-semibold mt-1 text-white">Major Projects</p>
              <div className="bg-white text-black text-sm p-2 mt-1 w-full flex-1">
                Completed 10+ major infrastructure and community initiatives.
              </div>
            </div>
          </div>

          {/* RIGHT HALF */}
          <div className="flex-1 flex flex-col md:flex-row bg-emerald-600">
            {/* Third counter */}

            <div className="flex-1 flex flex-col text-center p-4">
              <h3 className="text-5xl md:text-5xl font-bold text-white">
                {inView ? <CountUp end={6} duration={2} /> : 0}+
              </h3>
              <p className="text-lg font-semibold mt-1 text-white">Years of Growth</p>
              <div className="bg-white text-black text-sm p-2 mt-1 w-full flex-1">
                Our community has thrived over 6+ years, achieving significant milestones.
              </div>
            </div>

            {/* Fourth counter */}
            <div className="flex-1 flex flex-col text-center p-4">
              <h3 className="text-5xl md:text-5xl font-bold text-white">
                {inView ? <CountUp end={15} duration={2} /> : 0}+
              </h3>
              <p className="text-lg font-semibold mt-1 text-white">Infrastructure Milestones</p>
              <div className="bg-white text-black text-sm p-2 mt-1 w-full flex-1">
                15+ key projects that transformed the community landscape.
              </div>
            </div>
          </div>
        </div>

        {/* LEADERSHIP HIGHLIGHT */}
        <div className="mb-12 border-b border-gray-300 bg-gray-50 p-4">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Leadership That Shaped Our Growth
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed mt-5">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Mr. Olamilekan Taiwo</p>
              <p>
                As the pioneer chairman, he laid the structural and administrative
                foundation of Honeyland CDA. His leadership drove the successful
                acquisition of government certification and initiated the critical
                electricity project that transformed the community’s living standard.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Mr. Oguntade Raphael</p>
              <p>
                Building on the foundation laid before him, he focused on durability
                and long-term impact—most notably upgrading electrical infrastructure
                through the installation of concrete poles, ensuring sustainability
                and resilience.
              </p>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div ref={containerRef} className="relative relative-position mt-4">
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gray-200" />
          <motion.div
            style={{ height }}
            className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-emerald-600 origin-top"
          />

          <div className="space-y-16">
            {historyData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 items-start">
                  <div
                    className={`${isLeft
                      ? "lg:pr-12 text-left lg:text-right"
                      : "lg:col-start-2 lg:pl-12 text-left"
                      }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="relative space-y-2"
                    >
                      <div
                        className={`hidden lg:block absolute top-2 ${isLeft ? "-right-6" : "-left-6"
                          } w-3 h-3 bg-emerald-600 rounded-full`}
                      />
                      <p className="text-sm text-gray-500">{item.year}</p>
                      <h3 className="text-xl font-semibold text-gray-900 underline">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}