import { Home, Wrench, Users, Building, Rocket } from "lucide-react";
import { FC, SVGProps } from "react";

export interface HistoryItem {
  year: string;
  title: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export const historyData: HistoryItem[] = [
  {
    year: "2019",
    title: "Community Formation",
    description:
      "Establishment of Honeyland CDA to unify residents and create a structured development approach.",
    icon: Users,
  },
  {
    year: "2020",
    title: "Planning Phase",
    description:
      "Assessment and planning for roads, drainage, and infrastructure improvements.",
    icon: Wrench,
  },
  {
    year: "2021",
    title: "Project Execution",
    description:
      "Launch of key infrastructure projects improving accessibility and living conditions.",
    icon: Building,
  },
  {
    year: "2023",
    title: "Expansion",
    description:
      "Scaling operations and implementing structured governance systems.",
    icon: Home,
  },
  {
    year: "2025",
    title: "Future Vision",
    description:
      "Positioning Honeyland CDA as a model for sustainable community development.",
    icon: Rocket,
  },
];