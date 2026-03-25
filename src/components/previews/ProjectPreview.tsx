"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { X } from "lucide-react";
import { Project, OngoingProjects, CompletedProjects } from "@/data/projects";

export default function ProjectPreview() {
  const projects: Project[] = [...OngoingProjects, ...CompletedProjects].slice(0, 4);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-12">
          <SectionHeader
            label="See What We Do"
            title={
              <>
                Building stronger communities through projects that{" "}
                <span className="text-black font-semibold">
                  improve lives and create sustainable infrastructure.
                </span>
              </>
            }
          />
        </div>

        {/* BODY + GRID */}
        <div className="md:flex md:items-start md:gap-12">

          {/* TEXT */}
          <div className="md:w-1/2 text-gray-900 space-y-6">
            <p className="text-lg leading-relaxed">
              Our projects are designed to directly enhance the quality of life in the communities we serve.
              From constructing concrete poles for electricity, extending wires to new areas, digging gutters,
              to building and improving roads, every initiative is thoughtfully executed.
            </p>
            <p className="text-lg leading-relaxed">
              We work closely with local stakeholders to ensure sustainable growth, create opportunities,
              and empower residents. Every project reflects collaboration and long-term impact.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className="md:w-1/2 mt-12 md:mt-0 grid grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="relative cursor-pointer overflow-hidden shadow-md group w-full h-64 sm:h-72 lg:h-80"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-2">
                  <p className="text-white font-semibold">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}

            {/* VIEW ALL */}
            <div className="col-span-2 text-left mt-4">
              <Link
                href="/projects"
                className="inline-block bg-green-600 text-white px-6 py-3 font-medium hover:bg-emerald-800 transition-colors"
              >
                See Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-xl max-w-lg w-full overflow-hidden shadow-lg relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-emerald-800 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-emerald-400 transition-colors"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>

            {/* IMAGE */}
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={600} 
              height={400}
              className="w-full h-64 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6 max-h-[calc(100vh-180px)] overflow-y-auto">
              <h3 className="text-2xl font-semibold text-gray-900">
                {selectedProject.title}
              </h3>

              <p className="mt-4 text-gray-700">
                {selectedProject.description}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {selectedProject.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}