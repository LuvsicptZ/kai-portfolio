import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const projectsData = [
    {
        title: "Typing Speed",
        description: "A fully featured typing speed test application that monitors and analyzes overall typing performance. It delivers detailed metrics such as total words typed, error count, and accuracy percentage, enabling users to track their progress and enhance their typing proficiency.",
        tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
        imageUrl: "https://google.com",
        projectUrl: "https://google.com",
        demoUrl: "https://google.com",
    },
    {
        title: "My Portfolio",
        description: "",
        tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
        imageUrl: "https://google.com",
        projectUrl: "https://google.com",
        demoUrl: "https://google.com",
    },
    {
        title: "Take a Walk",
        description: "",
        tags: ["React", "TypeScript", "Tailwind", "Zustand", "Mapbox GL JS"],
        imageUrl: "https://google.com",
        projectUrl: "https://google.com",
        demoUrl: "https://google.com",
    },
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue3",
    "Next.js",
    "Tailwind",
    "Framer Motion",
     "Boostrap",
    "Prisma",
    "Zustand",
    "Vercel",
    "Node.js",
    "Express",
    "SQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Git"
]

export const experiencesData = [
    {
        title: "Master of Information Technology",
        location: "Monash University, Australia",
        description: "I am currently studying a Master of Information Technology at Monash University. I am interested in the field of information technology and I am currently learning the skills of web development.",
        icon: React.createElement(LuGraduationCap),
        date: "2024 Jul - 2026 Jun",
    },
    {
        title: "Frontend Developer (Intern)",
        location: "Shenzhen, Guangdong",
        description: "Optimized the internal admin panel prototype using Next.js and Tailwind CSS, delivering responsive layouts and a clean, maintainable component structure. Enhanced the user experience with lightweight motion effects and collaborated closely with design to support quick, high-quality iterations.",
        icon: React.createElement(CgWorkAlt),
        date: "2024 Mar - 2024 Jun",
      }

]
