export interface Project {
  id: string;
  title: string;
  category: string; // e.g., "Ongoing" or "Completed"
  description: string;
  image: string;
  slug: string;
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
  },
  {
    id: "2",
    title: "Electric Wires Extension",
    category: "Ongoing",
    description: "Extending electricity lines to new areas of the community.",
    image: "/assets/project5.png",
    slug: "electric-wires-extension",
  },
  {
    id: "3",
    title: "Gutter Digging",
    category: "Ongoing",
    description: "Digging and maintaining community gutters to prevent flooding.",
    image: "/assets/project2.png",
    slug: "gutter-digging",
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
  },
];