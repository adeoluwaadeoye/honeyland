"use client";

import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

export default function AboutUsSection() {
  
  return (
    <section className="relative py-24 bg-white">
  
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col gap-12">
        
        {/* Section Title */}
        <div className="text-center md:text-left">
          <SectionHeader
            label="About Us"
            title="Building Strong Communities in Ifo, Ogun State"
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <p>
            The Honeyland Community Development Association (CDA) is a resident-driven group located at Osoba, Ifo, Ogun State, dedicated to fostering sustainable growth and improving quality of life. Our mission is to empower residents, organize impactful projects, and ensure the voices of the community are heard in planning and decision-making processes.
          </p>
          <p>
            Community Development Associations in Nigeria play a critical role in bridging the gap between local governments and residents. We coordinate development initiatives, manage local resources responsibly, and create platforms for residents to engage in community governance. By focusing on practical solutions like sanitation, youth empowerment, and small-scale infrastructure, we ensure tangible improvements that directly benefit everyone in the neighborhood.
          </p>
          <p>
            At Honeyland CDA, collaboration is key. We work hand-in-hand with local leaders, volunteers, and residents to plan initiatives that reflect the true needs of our community. Through collective effort, transparency, and dedication, we build not just projects, but relationships and a sense of belonging that strengthens Osoba and the wider Ifo area.
          </p>
          <p>
            Every activity we undertake, from health drives to youth mentorship and infrastructure improvement, is aimed at creating a thriving, self-reliant, and united community.
          </p>
        </div>

        {/* Bottom Image */}
        <div className="relative w-full h-96 md:h-128 lg:h-160 rounded-lg overflow-hidden">
          <Image
            src="/assets/about-us.png"
            alt="Honeyland Community Association"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Closing Remark */}
        <div className="text-gray-700 text-lg font-medium text-center md:text-left">
          Through dedication, collaboration, and practical action, Honeyland CDA continues to empower our community, ensuring that every resident feels included, supported, and motivated to build a better future together.
        </div>
      </div>
    </section>
  );
}