
"use client";

import { useMemo, useState, useTransition } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { GalleryProjects } from "@/data/galleryProjects";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Events", value: "events" },
  { label: "Infrastructure", value: "infrastructure" },
  { label: "Community", value: "community" },
] as const;

type FilterValue = (typeof FILTERS)[number]["value"];

const PAGE_SIZE = 6;

export default function GalleryCategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const active: FilterValue =
    (searchParams.get("category") as FilterValue) || "all";

  const setActive = (value: FilterValue) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === "all") {
        params.delete("category");
      } else {
        params.set("category", value);
      }

      router.push(`?${params.toString()}`, { scroll: false });
      setVisibleCount(PAGE_SIZE);
    });
  };

  const filteredProjects = useMemo(() => {
    if (active === "all") return GalleryProjects;

    return GalleryProjects.filter((p) =>
      p.category.toLowerCase() === active
    );
  }, [active]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  const showSkeleton = isPending;

  return (
    <div className="space-y-10">

      {/* DROPDOWN FILTER */}
      <div className="w-full max-w-sm">
        <label
          htmlFor="category-filter"
          className="block text-sm font-medium mb-2"
        >
          Filter Gallery
        </label>

        <select
          id="category-filter"
          value={active}
          onChange={(e) => setActive(e.target.value as FilterValue)}
          className="w-full border-b border-t border-gray-400 px-4 py-3 text-sm focus:outline-none"
        >
          {FILTERS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>

      {/* GRID */}
      {showSkeleton ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <div
              key={i}
              className="h-80 bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <motion.section layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                className="group relative overflow-hidden border-b border-gray-300 bg-white"
              >
                {/* IMAGE */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* INFO */}
                <div className="p-4">
                  <h3 className="font-medium text-lg">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>
      )}

      {/* LOAD MORE */}
      {!showSkeleton &&
        visibleCount < filteredProjects.length && (
          <div className="flex justify-center pt-4">
            <button
              onClick={loadMore}
              className="px-6 py-3 border text-sm hover:bg-black hover:text-white transition"
            >
              Load More
            </button>
          </div>
        )}
    </div>
  );
}