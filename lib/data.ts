import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";


export const projectsData = [
    {
        title: "KeyMotion",
        description: "A fully featured typing speed test application that monitors and analyzes overall typing performance. It delivers detailed metrics such as total words typed, error count, and accuracy percentage, enabling users to track their progress and enhance their typing proficiency.",
        tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
        imageUrl: "/KeyMotion.png",
        projectUrl: "https://github.com/LuvsicptZ/KeyMotion.git",
        demoUrl: "https://key-motion.vercel.app/",
    },
    {
        title: "My Portfolio",
        description: "A responsive personal portfolio website built with Next.js and TypeScript, featuring a clean UI powered by Tailwind CSS. It includes smooth scroll animations with Framer Motion, a dynamic project showcase, and a fully functional contact form. Deployed on Vercel for optimal performance.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
        imageUrl: "/my-portfolio.png",
        projectUrl: "https://github.com/LuvsicptZ/kai-portfolio.git",
        demoUrl: "https://google.com",
    },
    {
        title: "TicketSnap",
        description:
            "An AI-powered movie ticket generator built with Google Gemini. It can auto-fill movie metadata, generate an art-style poster, extract the dominant color palette, and render tickets in three layouts (Story, Classic, Social). Export high-resolution ticket images with one click.",
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Google Gemini API", "html2canvas"],
        imageUrl: "/TicketSnap.png",
        projectUrl: "https://github.com/LuvsicptZ/TicketSnap",
        demoUrl: "https://ai.studio/apps/drive/1-UB0RBfRSe4YJV_AXghe3QWY5PgU1g1Q",
    },
    // {
    //     title: "Take a Walk",
    //     description: "",
    //     tags: ["React", "TypeScript", "Tailwind", "Zustand", "Mapbox GL JS"],
    //     imageUrl: "https://google.com",
    //     projectUrl: "https://google.com",
    //     demoUrl: "https://google.com",
    // },
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue3",
    
    "Tailwind",
    "Framer Motion",
    "Node.js",
    "Express",
    "SQL",
    "Prisma",

    "Git",
    "Jest",
    "React Testing Library",
    "Boostrap",
    
    "Docker",
    "Vercel",
    "AWS (basic)",
]

export const experiencesData = [
    {
        title: "Master of Information Technology",
        location: "Monash University, Australia",
        description: "Pursuing a Master's degree focused on software development and web technologies. Gaining hands-on experience with modern frameworks like React, Next.js, and building full-stack applications",
        icon: React.createElement(LuGraduationCap),
        date: "2024 Jul - 2026 Jun",
    },
    {
        title: "Frontend Developer (Intern)",
        location: "Lingyun Technology, Shenzhen",
        description: "Developed internal admin dashboards with Next.js, React, TypeScript, and Tailwind CSS. Built reusable components using Atomic Design patterns. Worked with product, design, QA, and backend teams through Jira to ship features on time. Added Framer Motion animations to improve the overall UX.",
        icon: React.createElement(CgWorkAlt),
        date: "2024 Mar - 2024 Jun",
    }

]
