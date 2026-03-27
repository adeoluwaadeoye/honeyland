import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

export const dynamic = "force-static";

export default function PastEventsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 mt-16 py-24">
      {/* ================= PAST EVENT: Inauguration ================= */}
      <section className="space-y-4">
        <SectionHeader
          label="Past Events"
          title="Inauguration of New Community Executives, 2025"
        />

        <div className="overflow-hidden">
          <div className="relative w-full h-100 md:h-137.5">
            <Image
              src="/assets/hero1.jpg"
              alt="Community executives inauguration ceremony"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8 space-y-4">
            <p className="text-sm text-gray-500 ">
              December 15, 2025 | 4:00 PM | Community Hall, Ifo, Ogun State
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold">
              Community Development Association 2025–2026 Executives Sworn In
            </h3>

            <p className="text-gray-700 mt-4">
              The Community Development Association proudly inaugurated its new
              set of executives for the 2025–2026 term. Members and residents
              gathered at the community hall to witness this historic event.
            </p>

            <p className="text-gray-700">
              The ceremony highlighted past achievements, outlined upcoming
              community projects, and emphasized strategies to enhance local
              engagement. Outgoing executives were celebrated for their
              dedication and service, while the new team pledged to continue
              building unity and progress across Ifo’s neighborhoods.
            </p>

            <p className="text-gray-700">
              The event concluded with a communal dinner, strengthening bonds
              between residents and fostering a sense of collective purpose.
              The inauguration truly marked a milestone for our community’s
              growth and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PAST EVENT: Concrete Poles Project Kickstart ================= */}
      <section className="space-y-12 mt-4">
        <SectionHeader
          label="Past Events"
          title="Kickstart of Our Concrete Poles Project"
        />

        <div className="overflow-hidden mb-12">
          <div className="relative w-full h-100 md:h-137.5">
            <Image
              src="/assets/project1.png"
              alt="Kickoff of concrete poles project"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <p className="text-sm text-gray-500 mt-8">
              January 20, 2025 | 10:00 AM | Ifo Central Market, Ogun State
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold">
              Community Concrete Poles Project Launch
            </h3>

            <p className="text-gray-700 mt-4">
              The CDA officially kicked off the construction of concrete poles
              to improve street lighting and enhance community safety. This
              project was aimed at reducing accidents at night and boosting
              security in residential areas.
            </p>

            <p className="text-gray-700">
              Local residents and community leaders attended the launch,
              witnessing the first batch of poles being installed along
              key roadways. The project emphasizes sustainable infrastructure
              development driven by collective community effort.
            </p>

            <p className="text-gray-700">
              Officials also outlined future expansion plans to cover all major
              streets within Ifo, ensuring brighter and safer neighborhoods for
              all residents.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}