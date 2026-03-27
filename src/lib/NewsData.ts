// lib/NewsData.ts

export type NewsItem = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content?: string;

  image: string;
  imageAlt: string;

  type: "announcement" | "external";

  source?: string;
  external?: boolean;
};

export const newsData: NewsItem[] = [
  // =========================
  // INTERNAL ANNOUNCEMENTS
  // =========================
  {
    title: "Monthly Community Meeting Announcement",
    slug: "monthly-meeting-march-2026",
    date: "March 20, 2026",
    excerpt:
      "Residents are invited to attend the March general meeting at the community hall.",
    content:
      `The monthly general meeting will be held at the community hall by 5PM.  
Key discussions will include security updates, sanitation plans, and ongoing development contributions.  

Residents are encouraged to actively participate in discussions, share suggestions, and collaborate on actionable plans. This meeting is a crucial platform to ensure transparency in community decision-making.  
Refreshments will be served after the meeting, and all participants will receive a summary report of the meeting outcomes.  
Attendance is mandatory for all zone representatives, and residents are requested to arrive on time to ensure a smooth and productive session.`,

    image: "/assets/hero3.jpg",
    imageAlt: "Community meeting session",
    type: "announcement",
  },

  {
    title: "Environmental Sanitation Exercise",
    slug: "sanitation-exercise-april-2026",
    date: "April 5, 2026",
    excerpt:
      "Community-wide sanitation exercise scheduled for the first Saturday of April.",
    content:
      `The CDA is organizing a community-wide sanitation exercise on the first Saturday of April.  
All residents are expected to participate in clearing drainage systems, removing waste, and maintaining environmental hygiene to prevent flooding and health risks.  

Volunteers will be assigned to zones to ensure complete coverage. Tools such as brooms, shovels, and protective gloves will be provided at designated collection points.  
This initiative aims to promote a cleaner, safer, and healthier environment for everyone. Residents are encouraged to bring family members and contribute to making our community cleaner and greener.`,

    image: "/assets/project3.jpg",
    imageAlt: "Residents cleaning drainage",
    type: "announcement",
  },

  {
    title: "Security Patrol Reinforcement Initiative",
    slug: "security-patrol-reinforcement",
    date: "March 10, 2026",
    excerpt:
      "The CDA has introduced additional night patrol measures to improve safety.",
    content:
      `In response to recent security concerns, the CDA has reinforced night patrols across all community zones.  
These patrols will operate in coordination with local authorities and community security volunteers to ensure maximum coverage.  

Residents are advised to report suspicious activities promptly to the security team. The initiative also includes regular safety audits, installation of additional lighting in high-risk areas, and awareness programs on personal safety.  
Your cooperation is critical in making these efforts effective and maintaining a secure environment for all residents.`,

    image: "/assets/security.jpg",
    imageAlt: "Night security patrol",
    type: "announcement",
  },

  // =========================
  // EXTERNAL VERIFIED NEWS
  // =========================
  {
    title: "Ogun Residents Raise Alarm Over Land Disputes",
    slug: "ogun-land-dispute-cda",
    date: "March 17, 2026",
    excerpt:
      "Community members petition authorities over alleged land grabbing threatening peace and property rights.",
    image: "/assets/hero2.jpg",
    imageAlt: "Land dispute in Ogun community",
    type: "external",
    source:
      "https://thenationonlineng.net/ogun-residents-decry-activities-of-alleged-land-grabbers/",
    external: true,
  },

  {
    title: "Ogun Community Protests Construction on Waterway",
    slug: "ogun-waterway-flooding",
    date: "March 1, 2026",
    excerpt:
      "Residents warn of flooding risks as illegal construction blocks natural drainage systems.",
    image: "/assets/project5.png",
    imageAlt: "Flooded community area",
    type: "external",
    source:
      "https://punchng.com/ogun-community-landlord-trade-words-over-building-on-waterway/",
    external: true,
  },

  {
    title: "Ogun State Targets 3,000 Housing Units in 2026",
    slug: "ogun-housing-development-2026",
    date: "January 5, 2026",
    excerpt:
      "Government pushes large-scale housing development to improve living conditions across communities.",
    image: "/assets/about-bg.jpg",
    imageAlt: "Housing development project",
    type: "external",
    source:
      "https://www.premiumtimesng.com/promoted/847746-ogun-govt-targets-3000-housing-units-in-2026-commissioner.html",
    external: true,
  },
];