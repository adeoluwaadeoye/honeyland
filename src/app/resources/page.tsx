// src/app/resources/page.tsx
"use client";

import { useState, useMemo } from "react";
import Protected from "@/components/shared/Protected";
import SectionHeader from "@/components/shared/SectionHeader";

interface Resource {
    id: string;
    title: string;
    category: string;
    link: string; // link to downloadable file
    description?: string;
}

const resourcesData: Resource[] = [
    {
        id: "1",
        title: "2025 Annual Financial Report",
        category: "Financials",
        link: "/assets/report.pdf",
        description: "Summary of income, expenses, and balance for 2025."
    },
    {
        id: "2",
        title: "Residents List 2025",
        category: "Residents",
        link: "/assets/report.xlsx",
        description: "Full resident database with contact info."
    },
    {
        id: "3",
        title: "Construction Contracts",
        category: "Contracts",
        link: "/asets/report.pdf",
        description: "Signed contracts for ongoing projects."
    },
    {
        id: "4",
        title: "By Laws",
        category: "Policies",
        link: "/assets/report.pdf",
        description: "Updated company policies for staff and residents."
    },
    {
        id: "5",
        title: "Community Reports",
        category: "Reports",
        link: "/assets/report.pdf",
        description: "Monthly maintenance logs."
    }
];

const ResourcesPage = () => {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState<"title" | "category">("title");

    const filteredResources = useMemo(() => {
        return resourcesData
            .filter(r =>
                r.title.toLowerCase().includes(search.toLowerCase()) ||
                r.category.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => {
                if (sortBy === "title") return a.title.localeCompare(b.title);
                return a.category.localeCompare(b.category);
            });
    }, [search, sortBy]);

    return (
        <Protected>

            <div className="max-w-6xl mx-auto px-4 mt-12  py-24">
                <div className="max-w-5xl">
                    <SectionHeader
                        label="Resources"
                        title="Explore Our Guides, Case Studies, and Tools to Empower Your Projects. All documents below are accessible to registered members. Use search or sort to quickly find what you need
"
                    />
                </div>


                <p className="mb-6 text-gray-600">
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    {/* Search Input */}
                    <div className="relative w-full sm:w-1/2">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                            
                        </span>
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-400 focus:border-green-500 focus:ring-1 focus:ring-blue-green outline-none transition"
                        />
                    </div>

                    {/* Sort Select */}
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <label htmlFor="sort" className="sr-only">
                            Sort resources by
                        </label>
                        <select
                            id="sort"
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value as "title" | "category")}
                            className="border border-gray-400 rounded-lg px-4 py-2 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition"
                        >
                            <option value="title">Sort by Title</option>
                            <option value="category">Sort by Category</option>
                        </select>
                    </div>
                </div>

                {/* Resource List */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredResources.map(resource => (
                        <div
                            key={resource.id}
                            className="border border-gray-300 rounded-sm p-4 hover:shadow-lg transition-shadow"
                        >
                            <h2 className="font-bold text-xl mb-1">{resource.title}</h2>
                            <p className="text-sm text-gray-500 mb-2">{resource.category}</p>
                            {resource.description && (
                                <p className="text-sm text-gray-700 mb-4">{resource.description}</p>
                            )}
                            <a
                                href={resource.link}
                                download
                                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                            >
                                Download
                            </a>
                        </div>
                    ))}
                    {filteredResources.length === 0 && (
                        <p className="col-span-full text-center text-gray-500">
                            No resources match your search.
                        </p>
                    )}
                </div>

                {/* Suggestions for other protected sections */}
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold mb-6">Members Only Features</h2>
                    <ul className="list-disc mt-4 list-inside space-y-1 text-gray-700">
                        <li>Project Reports & Analytics Dashboard</li>
                        <li>Policy Documents & Guidelines</li>
                        <li>Internal Memos and Announcements</li>
                        <li>Team Performance Metrics</li>
                        <li>Exclusive Training Materials</li>
                    </ul>
                </section>
            </div>
        </Protected>
    );
};

export default ResourcesPage;