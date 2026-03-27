import type { Project } from "./projects";

export const InfrastructureProjects: Project[] = [
  // ================= ROADS =================
  {
    id: "1",
    title: "Road Expansion - Phase 1",
    category: "roads",
    description:
      "Initial phase of expanding the main internal roads of the community to improve connectivity and reduce traffic congestion. This phase includes resurfacing, widening, and installation of drainage along the road edges to prevent flooding. Safety signage and pedestrian pathways are incorporated to enhance usability for all residents.",
    image: "/assets/project4.jpg",
    slug: "road-expansion-phase-1",
    status: "Ongoing",
    duration: "Jan 2026 - Present",
  },
  {
    id: "2",
    title: "Road Expansion - Phase 2",
    category: "roads",
    description:
      "Continuation of the road expansion project, covering secondary streets and alleyways to ensure smoother traffic flow and better access for residents. Includes installation of streetlights, speed control measures, and dedicated bike lanes for sustainable transport integration.",
    image: "/assets/project3.jpg",
    slug: "road-expansion-phase-2",
    status: "Ongoing",
    duration: "Jul 2026 - Present",
  },
  {
    id: "3",
    title: "Major Road Rehabilitation",
    category: "roads",
    description:
      "Rehabilitation of damaged main roads including pothole repair, resurfacing, and lane marking. Project ensures longevity, safety, and accessibility. Traffic management plans were implemented to reduce disruptions during construction.",
    image: "/assets/project1.png",
    slug: "major-road-rehabilitation",
    status: "Completed",
    duration: "Mar 2025 - Nov 2025",
  },
  {
    id: "4",
    title: "Residential Street Upgrades",
    category: "roads",
    description:
      "Upgrading residential streets with new asphalt, curb realignment, and stormwater management systems. Focus on improving safety, accessibility, and aesthetics for neighborhood communities.",
    image: "/assets/project5.png",
    slug: "residential-street-upgrades",
    status: "Completed",
    duration: "Jan 2025 - Jul 2025",
  },
  {
    id: "5",
    title: "Highway Connector Construction",
    category: "roads",
    description:
      "Construction of a new connector highway linking major traffic nodes to reduce commute times. Includes bridges, overpasses, proper drainage, and landscaping for environmental integration.",
    image: "/assets/project6.png",
    slug: "highway-connector-construction",
    status: "Ongoing",
    duration: "Feb 2026 - Dec 2026",
  },

  // ================= ELECTRICITY =================
  {
    id: "6",
    title: "Electricity Poles Installation - Zone A",
    category: "electricity",
    description:
      "Installation of concrete electricity poles in Zone A to enhance power distribution reliability. Includes wiring, transformers, safety inspections, and integration with renewable energy sources where feasible.",
    image: "/assets/project2.png",
    slug: "electricity-poles-zone-a",
    status: "Ongoing",
    duration: "Feb 2026 - Present",
  },
  {
    id: "7",
    title: "Electricity Poles Installation - Zone B",
    category: "electricity",
    description:
      "Extending electricity infrastructure into Zone B, ensuring wider coverage for residential and commercial properties. Works include pole erection, wiring, transformer setup, and grid connection. Community engagement ensures minimal disruption during construction.",
    image: "/assets/project5.png",
    slug: "electricity-poles-zone-b",
    status: "Ongoing",
    duration: "Mar 2026 - Present",
  },
  {
    id: "8",
    title: "Electric Grid Upgrade",
    category: "electricity",
    description:
      "Upgrading existing electrical grids to handle increased demand, improve efficiency, and reduce outages. Includes modern switchgear, protective devices, automated monitoring systems, and integration with smart grid technology.",
    image: "/assets/project6.png",
    slug: "electric-grid-upgrade",
    status: "Completed",
    duration: "Jan 2025 - Dec 2025",
  },
  {
    id: "9",
    title: "Substation Modernization",
    category: "electricity",
    description:
      "Modernization of aging substations with state-of-the-art transformers, protective relays, and energy monitoring systems to ensure reliable and stable electricity supply.",
    image: "/assets/project3.jpg",
    slug: "substation-modernization",
    status: "Completed",
    duration: "Apr 2025 - Dec 2025",
  },
  {
    id: "10",
    title: "Rural Electrification Project",
    category: "electricity",
    description:
      "Extending electricity access to rural areas, including pole installation, mini-grid systems, and renewable integration for sustainable energy. Supports local development and business growth.",
    image: "/assets/project4.jpg",
    slug: "rural-electrification-project",
    status: "Ongoing",
    duration: "May 2026 - Present",
  },

  // ================= DRAINAGE =================
  {
    id: "11",
    title: "Primary Gutter Digging",
    category: "drainage",
    description:
      "Excavation and construction of primary drainage channels to prevent flooding during heavy rainfall. Includes reinforced concrete gutters, culverts, and grading to ensure proper water flow.",
    image: "/assets/project2.png",
    slug: "primary-gutter-digging",
    status: "Completed",
    duration: "Jan 2026 - Jul 2026",
  },
  {
    id: "12",
    title: "Secondary Drainage Expansion",
    category: "drainage",
    description:
      "Expanding secondary drainage networks to support primary channels. Works include digging, concrete lining, installation of manholes, and connections to existing water management systems.",
    image: "/assets/project1.png",
    slug: "secondary-drainage-expansion",
    status: "Ongoing",
    duration: "Mar 2026 - Present",
  },
  {
    id: "13",
    title: "Drainage System Completion",
    category: "drainage",
    description:
      "Finalization of drainage projects to ensure comprehensive coverage across high-risk areas. Includes quality inspection, water flow tests, and safety verification for long-term flood prevention.",
    image: "/assets/project3.jpg",
    slug: "drainage-system-completion",
    status: "Completed",
    duration: "Apr 2025 - Dec 2025",
  },
  {
    id: "14",
    title: "Flood Control Upgrade",
    category: "drainage",
    description:
      "Implementation of advanced flood control systems including retention basins, channel enhancements, and automated water level monitoring to mitigate flood risks during extreme weather events.",
    image: "/assets/project4.jpg",
    slug: "flood-control-upgrade",
    status: "Ongoing",
    duration: "Feb 2025 - Present",
  },
  {
    id: "15",
    title: "Stormwater Management Enhancement",
    category: "drainage",
    description:
      "Upgrading urban stormwater systems to increase capacity, improve runoff efficiency, and reduce localized flooding. Includes new inlets, piping, and environmental impact mitigation.",
    image: "/assets/project2.png",
    slug: "stormwater-management-enhancement",
    status: "Ongoing",
    duration: "Jun 2026 - Present",
  },
  {
    id: "16",
    title: "River Channel Stabilization",
    category: "drainage",
    description:
      "Stabilizing riverbanks and channels in urban areas to prevent erosion and improve drainage efficiency. Includes reinforced embankments, vegetation planting, and continuous monitoring.",
    image: "/assets/project6.png",
    slug: "river-channel-stabilization",
    status: "Completed",
    duration: "Jan 2025 - Sep 2025",
  },
  {
    id: "17",
    title: "Community Drainage Revamp",
    category: "drainage",
    description:
      "Revamping local community drainage systems to improve flow, reduce water stagnation, and ensure sanitation. Incorporates community feedback and sustainable construction practices.",
    image: "/assets/project5.png",
    slug: "community-drainage-revamp",
    status: "Ongoing",
    duration: "Mar 2026 - Present",
  },
  {
    id: "18",
    title: "Urban Flood Mitigation",
    category: "drainage",
    description:
      "Deploying flood mitigation measures in high-risk urban zones, including underground retention tanks, pump systems, and smart monitoring of water levels for proactive risk management.",
    image: "/assets/project1.png",
    slug: "urban-flood-mitigation",
    status: "Completed",
    duration: "Apr 2025 - Oct 2025",
  },
  {
    id: "19",
    title: "Drainage Rehabilitation - Phase 2",
    category: "drainage",
    description:
      "Rehabilitation of secondary drainage channels with concrete lining, debris removal, and proper grading. Ensures smooth water flow and reduces flooding incidents in critical areas.",
    image: "/assets/project4.jpg",
    slug: "drainage-rehabilitation-phase-2",
    status: "Ongoing",
    duration: "Jul 2026 - Dec 2026",
  },
  {
    id: "20",
    title: "Integrated Water Management",
    category: "drainage",
    description:
      "Implementing integrated water management solutions combining stormwater, sewage, and rainwater harvesting systems to ensure sustainable urban water management.",
    image: "/assets/project3.jpg",
    slug: "integrated-water-management",
    status: "Ongoing",
    duration: "May 2026 - Present",
  },
];