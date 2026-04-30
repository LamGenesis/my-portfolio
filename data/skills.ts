import {
  Server,
  Layout,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend",
    description:
      "Thiết kế RESTful API, microservices và lớp truy cập dữ liệu chuẩn hoá.",
    icon: Server,
    items: [
      "C#",
      "ASP.NET Core (.NET 8 / .NET 9)",
      "Entity Framework Core",
      "FluentValidation",
      "Microservices Architecture",
      "API Gateway",
      "PostgreSQL",
      "RabbitMQ",
      "JWT (Access/Refresh)",
      "BCrypt",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Xây dựng giao diện hiện đại, tối ưu SEO và state management gọn nhẹ.",
    icon: Layout,
    items: [
      "JavaScript / TypeScript",
      "React",
      "Next.js (App Router)",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Recharts",
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    description:
      "Quy trình phát triển, đóng gói và triển khai theo chuẩn sản phẩm.",
    icon: Wrench,
    items: [
      "Docker",
      "Docker Compose",
      "Git (Gitflow)",
      "AWS",
      "Vercel",
      "Swagger / OpenAPI",
      "Adminer",
      "Cursor",
      "Gemini AI",
    ],
  },
];
