"use client";

import Image from "next/image";
import Link from "next/link";
import HeroPanel from "@/components/shared/HeroPanel";
import SectionHeader from "@/components/shared/SectionHeader";
import {
    Download,
    PlayCircle,
    FileText,
} from "lucide-react";

export default function CommunityPage() {
    const resources = [
        {
            name: "Community Development Report 2025",
            file: "/assets/a.docx",
            size: "2.4MB",
            type: "PDF",
        },
        {
            name: "Income & Expense Report",
            file: "/assets/b.docx",
            size: "1.8MB",
            type: "PDF",
        },
        {
            name: "Project Summary Document",
            file: "/assets/a.docx",
            size: "1.2MB",
            type: "PDF",
        },
    ];

    return (
        <section className="py-24 bg-white">
            {/* Hero */}
            <HeroPanel title=" Our Community" />

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
                    <h2 className="text-4xl underline mb-12">See Our Community in Action</h2>

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
                    <h3 className="text-4xl underline">Resident Stories</h3>

                    {/* Cards container */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {[
                            {
                                name: "Mrs. Oyeshile",
                                story:
                                    "The CDA transformed our street. We now have proper sanitation and better security.",
                                img: "/assets/chairman.jpg",
                            },
                            {
                                name: "Mr. Adeoluwa Adeoye",
                                story:
                                    "Through community programs, I gained skills that helped me start my small business.",
                                img: "/assets/chairman.jpg",
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
                {/*Resources (Enhanced) */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-4xl underline font-semibold">Resources</h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {resources.map((doc, i) => (
                            <a
                                key={i}
                                href={doc.file}
                                download
                                className="group flex flex-col gap-3 bg-green-400 p-5 rounded-xl hover:bg-gray-100 hover:shadow-md transition"
                            >
                                {/* Top Row */}
                                <div className="flex items-center justify-between">
                                    <FileText className="w-6 h-6 text-black" />
                                    <Download className="w-5 h-5 text-black group-hover:translate-y-1 transition" />
                                </div>

                                {/* File Name */}
                                <span className="text-gray-900 font-medium">
                                    {doc.name}
                                </span>

                                {/* Meta */}
                                <span className="text-sm text-gray-500">
                                    {doc.type} • {doc.size}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/*CTA */}
                <div className="bg-black text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-4xl font-semibold">
                            Be Part of the Change
                        </h3>
                        <p className="text-gray-300 mt-2">
                            Join us in building a stronger, more vibrant Honeyland community.
                        </p>
                    </div>

                    <Link
                        href="/get-involved" // replace with your target URL
                        className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition inline-block text-center"
                    >
                        Get Involved
                    </Link>
                </div>

            </div>
        </section>
    );
}