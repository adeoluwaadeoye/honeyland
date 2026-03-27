"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import {
    PlayCircle,
} from "lucide-react";

export default function CommunityPage() {

    return (
        <section className="py-24 bg-white mt-4">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col gap-10">

                {/* Section Heading */}
                <SectionHeader
                    label="Our Community"
                    title="Empowering People, Building a Stronger Future Together"
                />

                {/*Mission */}
                <div className="max-7-3xl text-lg leading-relaxed space-y-6">
                    <p className="text-md font-semibold text-black">
                        Our mission is simple but powerful — to create a united, self-reliant
                        community where every resident has a voice, a role, and an opportunity to thrive.
                    </p>
                    <p className="text-md font-semibold text-black">
                        At Honeyland CDA, we believe that true development begins with people.
                        Through collaboration, transparency, and dedication, we drive initiatives
                        that uplift lives, strengthen relationships, and build a sustainable future.
                    </p>
                </div>

                {/*Video */}
                <div className="w-full">
                    <h2 className="text-2xl mb-12">See Our Community in Action</h2>

                    <div className="relative w-full rounded-2xl overflow-hidden group mt-8">
                        <video
                            controls
                            className="w-full h-80 md:h-112 object-cover"
                            src="/assets/cda.mp4"
                        />

                        {/* subtle overlay play icon (non-blocking) */}
                        <PlayCircle className="absolute inset-0 m-auto w-16 h-16 text-white opacity-70 pointer-events-none group-hover:scale-110 transition" />
                    </div>
                </div>

                {/*Stories */}

                <div className="flex flex-col gap-8">
                    <h3 className="text-2xl">Resident Stories</h3>

                    {/* Cards container */}
                    <div className="flex flex-col md:flex-row gap-6">
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
                                className="flex-1 flex flex-col sm:flex-row items-center bg-gray-100 p-6 sm:p-8 md:p-12 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform gap-6"
                            >
                                {/* Resident Image */}
                                <div className="w-full sm:w-32 aspect-square overflow-hidden shrink-0">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Story Text */}
                                <div className="flex-1 mt-4 sm:mt-0">
                                    <p className="text-gray-700 italic text-lg">&quot;{item.story}&quot;</p>
                                    <h4 className="mt-4 font-semibold text-2xl text-black">— {item.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/*CTA */}
                <div className="p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-semibold">
                            Be Part of the Change
                        </h3>
                        <p className="mt-1">
                            Join us in building a stronger, more vibrant Honeyland community.
                        </p>
                    </div>

                    <Link
                        href="/get-involved" // replace with your target URL
                        className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition inline-block text-center"
                    >
                        Get Involved
                    </Link>
                </div>

            </div>
        </section>
    );
}