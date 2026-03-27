export type Project = {
  id: string;
  title: string;
  category: "Infrastructure" | "Events" |"Community" ;
  image: string;
};

export const GalleryProjects: Project[] = [
  {
    id: "1",
    title: "Road Expansion Phase 1",
    category: "Infrastructure",
    image: "/assets/project1.png",
},
  {
    id: "2",
    title: "Street Lighting Upgrade",
    category: "Events",
    image: "/assets/project2.png",
   
  },
  {
    id: "3",
    title: "Housing Development Block A",
    category: "Community",
    image: "/assets/project3.jpg",
 },
  {
    id: "4",
    title: "Drainage System Expansion",
    category: "Infrastructure",
    image: "/assets/project4.jpg",
  },
  {
    id: "5",
    title: "Community Security Project",
    category: "Events",
    image: "/assets/project5.png",
  },
  {
    id: "6",
    title: "New Residential Layout",
    category: "Community",
    image: "/assets/project6.png",
  },
  {
    id: "7",
    title: "Road Asphalt Phase 2",
    category: "Infrastructure",
    image: "/assets/project3.jpg",
  },
  {
    id: "8",
    title: "Market Development Project",
    category: "Events",
    image: "/assets/project4.jpg",
  },
  {
    id: "9",
    title: "Estate Expansion Plan",
    category: "Infrastructure",
    image: "/assets/project2.png",
  },
];