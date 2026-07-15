import { Globe } from "lucide-react";
import { CppIconDark } from "../components/svgs/CppIconDark";
import { JavaIconDark } from "../components/svgs/JavaIconDark";
import { MongodbIconDark } from "../components/svgs/MongodbIconDark";
import { NextjsIconDark } from "../components/svgs/NextjsIconDark";
import { NodejsIconDark } from "../components/svgs/NodejsIconDark";
import { ReactIconDark } from "../components/svgs/ReactIconDark";
import { TypescriptIconDark } from "../components/svgs/TypescriptIconDark";

export const DATA = {
  name: "Muhamad Rafy Ramadhan",
  callname: "Rafy",
  profile: "/profile.webp",
  webUrl: "https://hifyyyy.vercel.app/",
  githubUrl: "https://github.com/RafyR27",
  linkedinUrl: "https://www.linkedin.com/in/muhamad-rafy-ramadhan/",
  instagramUrl: "https://www.instagram.com/rafyr27",
  description:
    "Web Developer Enthusiast. I enjoy building things, solving problems, and creating great user experiences.",
  about:
    "Since 2024, I have been deepening my fundamentals in web development by building various web applications. Although I am currently still studying Informatics at university, I actively learn independently through personal projects and by exploring various technologies. Backed by that experience, I have been trusted to develop web applications used by real-world users. I enjoy building applications that not only function well, but are also genuinely useful to their users.",
  skills: [
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactIconDark },
    { name: "Typescript", icon: TypescriptIconDark },
    { name: "Node.js", icon: NodejsIconDark },
    { name: "C++", icon: CppIconDark },
    { name: "Mongodb", icon: MongodbIconDark },
    { name: "Java", icon: JavaIconDark },
  ],
  educations: [
    {
      school: "University of Singaperbangsa Karawang",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/unsika-logo.webp",
      start: "2024",
      end: "Now",
    },
    {
      school: "SMAN 1 Karawang",
      degree: "Science",
      logoUrl: "/smansa-logo.webp",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Karawang Education Fair",
      href: "",
      dates: "Sep 2025 - Jan 2026",
      active: false,
      description:
        "A web application for managing Karawang Education Fair ticket sales, both online and offline. Equipped with an admin panel for ticket management, Midtrans Payment Gateway integration for online payments, and automatic e-ticket delivery via email upon successful payment. The system also supports visitor check-in during event entry.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "TailwindCSS",
        "Midtrans",
        "Hero UI",
        "Better Auth",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/karawang-edu-fair.webp",
    },
    {
      title: "Jurnalistik FH UNSIKA",
      href: "https://jurnalistikfhunsika.com/",
      dates: "Nov 2025 - Jan 2026",
      active: true,
      description:
        "A web application developed to publish and manage current news, catering to both the campus community and the general public. The application implements a Role-Based Access Control (RBAC) system with two main roles: Admin, responsible for managing users and the overall system, and Author, responsible for creating, editing, and publishing news articles.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "TailwindCSS",
        "Hero UI",
        "Better Auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://jurnalistikfhunsika.com/",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/jurnalistik-fh-unsika.webp",
    },
  ],
};
