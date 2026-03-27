"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { InfrastructureProjects } from "@/data/projectsData";
import { Building2, Zap, Waves, LayoutGrid } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import Modal from "@/components/ui/Modal";
import type { Project } from "@/data/projects";

type FilterType = "all" | "roads" | "electricity" | "drainage";

const filters = [
    { key: "all", label: "All", icon: LayoutGrid },
    { key: "roads", label: "Roads", icon: Building2 },
    { key: "electricity", label: "Electricity", icon: Zap },
    { key: "drainage", label: "Drainage", icon: Waves },
];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Filter logic
    const filteredProjects =
        activeFilter === "all"
            ? InfrastructureProjects
            : InfrastructureProjects.filter((project) =>
                project.category.toLowerCase() === activeFilter
            );

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    return (
        <main className="px-6 md:px-12 lg:px-24 py-24 mt-12 bg-white min-h-screen">

            {/* ================= HEADER ================= */}
            <section className="text-left mb-12 max-w-5xl">
                <SectionHeader
                    label="Infrastructure Projects"
                    title="Explore our infrastructure projects across roads, electricity, and drainage systems"
                />
            </section>

            <aside className="text-gray-800 mt-4 text-lg leading-relaxed mb-12">
                <p>
                    Our projects enhance connectivity, provide reliable utilities, and prevent environmental issues. Each road, pole, or drainage system reflects precision and sustainable development.
                </p>
                <p>
                    Carefully planned from start to finish, these projects are a testament to our commitment to efficiency, safety, and long-term impact. Explore our ongoing and completed projects below.
                </p>
            </aside>

            {/* ================= FILTERS ================= */}
            {/* Mobile Dropdown */}
            <div className="md:hidden mb-6">
                <label htmlFor="project-filter" className="sr-only">
                    Filter projects
                </label>
                <select
                    id="project-filter"
                    value={activeFilter}
                    onChange={(e) => {
                        setActiveFilter(e.target.value as FilterType);
                        setVisibleCount(6);
                    }}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none"
                >
                    <option value="" disabled>
                        Select a category
                    </option>
                    {filters.map((f) => (
                        <option key={f.key} value={f.key}>
                            {f.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex justify-center gap-6 mb-10">
                {filters.map((f) => {
                    const Icon = f.icon;
                    const isActive = activeFilter === f.key;

                    return (
                        <button
                            key={f.key}
                            onClick={() => {
                                setActiveFilter(f.key as FilterType);
                                setVisibleCount(6);
                            }}
                            className="relative flex items-center gap-2 text-sm font-medium"
                        >
                            <Icon size={18} />
                            {f.label}
                            {isActive && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-black"
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Active Filter Label */}
            <div className="text-center mb-6 text-sm text-gray-500">
                Showing: <span className="font-medium capitalize">{activeFilter}</span>
            </div>

            {/* ================= GRID ================= */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {visibleProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.4 }}
                            className="group relative overflow-hidden rounded-xl cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={300}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay: Only title + category */}
                            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                                <div className="text-white">
                                    <p className="text-xs uppercase tracking-wide opacity-80">{project.category}</p>
                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* ================= LOAD MORE ================= */}
            {visibleCount < filteredProjects.length && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setVisibleCount((prev) => prev + 3)}
                        className="px-6 py-3 border border-black rounded-lg text-sm font-medium hover:bg-black hover:text-white transition"
                    >
                        Load More
                    </button>
                </div>
            )}

            {/* ================= CLOSING REMARK ================= */}
            <div className="text-gray-800 mt-4 text-lg leading-relaxed mb-12">
                <p>
                    These projects showcase our expertise and dedication to delivering sustainable infrastructure. We continuously innovate to positively impact communities and improve everyday life.
                </p>

                <div className="col-span-2 text-left mt-4">
                    <Link
                        href="/levies"
                        className="inline-block bg-green-600 text-white px-6 py-3 font-medium hover:bg-emerald-800 transition-colors"
                    >
                        Donate
                    </Link>
                </div>
            </div>

            {/* ================= MODAL ================= */}
            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && (
                    <>
                        <div className="relative w-full h-64">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-gray-500 uppercase mb-2">{selectedProject.category}</p>
                            <h2 className="text-2xl font-bold mb-3">{selectedProject.title}</h2>
                            <p className="text-gray-600 leading-relaxed mb-2">{selectedProject.description}</p>
                            <p className="text-gray-600 text-sm">Duration: {selectedProject.duration}</p>
                            <p className="text-gray-600 text-sm">Status: {selectedProject.status}</p>
                        </div>
                    </>
                )}
            </Modal>
        </main>
    );
}