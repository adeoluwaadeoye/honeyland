"use client";

import Image from "next/image";
import { leadershipTenures } from "@/data/leadership";
import SectionHeader from "@/components/shared/SectionHeader";
import HeroPanel from "@/components/shared/HeroPanel";

export default function LeadershipPage() {
  const pastTenures = leadershipTenures.slice(0, 2); // 2019–2022 & 2022–2025
  const presentTenure = leadershipTenures[2]; // 2025–Present

  return (
    <section className="bg-white py-24">
      <HeroPanel title="Our Leaders" />

      {/* Page Header */}
      <SectionHeader
        label="Our Leadership"
        title="Meet the executives driving growth across our community — guided by vision, accountability, and impact."
        className="max-w-6xl mx-auto px-6 lg:px-0 mb-12"
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 px-6">

        {/* Present Tenure */}
        <div className="flex flex-col bg-white p-6 md:p-8 rounded-xl shadow-lg gap-6">
          {/* Chairman */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-40 h-40 md:w-48 md:h-48 relative overflow-hidden rounded">
              <Image
                src={presentTenure.chairman.img}
                alt={presentTenure.chairman.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-center">{presentTenure.chairman.name}</h2>
            <p className="italic text-base md:text-lg text-gray-600">2025 – Present</p>
          </div>

          {/* Achievements */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            {presentTenure.chairman.writeup}{" "}
            {presentTenure.writeupExtra && presentTenure.writeupExtra}
          </p>

          {/* Other Executives */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Executives</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm md:text-base">
              {presentTenure.executives.map((exec, i) => (
                <li key={i}>
                  {exec.name} — {exec.role}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Past Tenures */}
        <div className="flex flex-col md:flex-row gap-6 flex-wrap">
          {pastTenures.map((tenure, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-full md:min-w-[45%] bg-gray-50 p-6 rounded-xl shadow-md flex flex-col items-center gap-4"
            >
              {/* Chairman */}
              <div className="w-32 h-32 md:w-40 md:h-40 relative overflow-hidden rounded">
                <Image
                  src={tenure.chairman.img}
                  alt={tenure.chairman.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-center">{tenure.chairman.name}</h2>
              <p className="italic text-base md:text-lg text-gray-600">{tenure.tenure}</p>

              {/* Executives */}
              <div className="w-full mt-2">
                <h3 className="text-lg md:text-xl font-semibold mb-1">Executives</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm md:text-base">
                  {tenure.executives.map((exec, i) => (
                    <li key={i}>
                      {exec.name} — {exec.role}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tenure write-up */}
              <p className="mt-3 text-gray-700 text-base leading-relaxed text-justify">
                {tenure.chairman.writeup.replace(/Mr\.|Mrs\.|Ms\./g, "")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}