import { Globe } from "lucide-react";
import { CppIconDark } from "../components/svgs/CppIconDark";
import { JavaIconDark } from "../components/svgs/JavaIconDark";
import { MongodbIconDark } from "../components/svgs/MongodbIconDark";
import { NextjsIconDark } from "../components/svgs/NextjsIconDark";
import { NodejsIconDark } from "../components/svgs/NodejsIconDark";
import { ReactIconDark } from "../components/svgs/ReactIconDark";
import { TypescriptIconDark } from "../components/svgs/TypescriptIconDark";

export const DATA_ID = {
  name: "Muhamad Rafy Ramadhan",
  callname: "Rafy",
  profile: "/profile.webp",
  webUrl: "https://hifyyyy.vercel.app/",
  githubUrl: "https://github.com/RafyR27",
  linkedinUrl: "https://www.linkedin.com/in/muhamad-rafy-ramadhan/",
  instagramUrl: "https://www.instagram.com/rafyr27",
  description:
    "Web Developer Enthusiast. Saya senang membangun sesuatu, memecahkan masalah, dan menciptakan pengalaman pengguna yang baik.",
  about: [
    {
      text: "Sejak tahun 2024, saya telah memperdalam fundamental saya dalam ",
    },
    {
      text: "pengembangan web",
      highlight: true,
    },
    {
      text: " dengan membangun berbagai aplikasi web. Meskipun saat ini masih menempuh studi Informatika di universitas, ",
    },
    {
      text: "saya aktif belajar secara mandiri",
      highlight: true,
    },
    {
      text: " melalui proyek pribadi dan eksplorasi berbagai teknologi. Dengan bekal pengalaman tersebut, saya telah ",
    },
    {
      text: "dipercaya untuk mengembangkan aplikasi web",
      highlight: true,
    },
    {
      text: " yang digunakan oleh pengguna nyata. Saya senang membangun aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga benar-benar bermanfaat bagi penggunanya.",
    },
  ],
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
      school: "Universitas Singaperbangsa Karawang",
      degree: "Sarjana Ilmu Komputer",
      logoUrl: "/unsika-logo.webp",
      start: "2024",
      end: "Sekarang",
    },
    {
      school: "SMAN 1 Karawang",
      degree: "IPA",
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
        "Sebuah aplikasi web untuk mengelola penjualan tiket Karawang Education Fair, baik secara online maupun offline. Dilengkapi dengan panel admin untuk manajemen tiket, integrasi Payment Gateway Midtrans untuk pembayaran online, serta pengiriman e-tiket otomatis melalui email setelah pembayaran berhasil. Sistem ini juga mendukung check-in pengunjung saat masuk acara.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "TailwindCSS",
        "Midtrans",
        "Hero UI",
        "NextAuth",
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
        "Sebuah aplikasi web yang dikembangkan untuk mempublikasikan dan mengelola berita terkini, ditujukan bagi civitas akademika kampus maupun masyarakat umum. Aplikasi ini menerapkan sistem Role-Based Access Control (RBAC) dengan dua peran utama: Admin, yang bertanggung jawab mengelola pengguna dan sistem secara keseluruhan, serta Author, yang bertanggung jawab membuat, mengedit, dan mempublikasikan artikel berita.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "TailwindCSS",
        "Hero UI",
        "NextAuth",
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
