export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  status: "Ongoing" | "Completed"; // added
  duration: string; // added, e.g. "Jan 2026 - Jun 2026"
}

// Ongoing projects
export const OngoingProjects: Project[] = [
  {
    id: "1",
    title: "Concrete Poles Installation",
    category: "Ongoing",
    description: "Installing concrete poles to improve community electricity distribution.",
    image: "/assets/project1.png",
    slug: "concrete-poles-installation",
    status: "Ongoing",
    duration: "Jan 2026 - Jun 2026",
  },
  {
    id: "2",
    title: "Electric Wires Extension",
    category: "Ongoing",
    description: "Extending electricity lines to new areas of the community.",
    image: "/assets/project5.png",
    slug: "electric-wires-extension",
    status: "Ongoing",
    duration: "Feb 2026 - Jul 2026",
  },
  {
    id: "3",
    title: "Gutter Digging",
    category: "Ongoing",
    description: "Digging and maintaining community gutters to prevent flooding.",
    image: "/assets/project2.png",
    slug: "gutter-digging",
    status: "Ongoing",
    duration: "Mar 2026 - Aug 2026",
  },
];

// Completed projects
export const CompletedProjects: Project[] = [
  {
    id: "4",
    title: "Community Road Creation",
    category: "Completed",
    description: "Construction of community roads connecting main areas.",
    image: "/assets/project4.jpg",
    slug: "community-road-creation",
    status: "Completed",
    duration: "Jan 2025 - Dec 2025",
  },
];