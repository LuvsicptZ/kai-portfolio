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
        demoUrl: "kai-portfolio-three.vercel.app",
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
    "TypeScript",

    "React",
    "Next.js",
    "Vue.js",
    "Framer Motion",
    "Tailwind",

    "Node.js",
    "Express",
    "NestJS",
    "Spring Boot",

    "SQL",
    "Prisma",
    "Supabase",

    "Git",
    "Jest",
    "Bootstrap",
    "Docker",
    "CI/CD",

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
        description: [
            "Refactored the attendance module in Spring Boot into stateless RESTful APIs with standardized CRUD design, improving front-end integration.",
            "Applied Service and Repository patterns with DTOs and TypeScript interfaces to enforce data consistency and reduce runtime errors.",
            "Optimized JPA pagination and implemented front-end debounce and fuzzy search, improving API response time by ~30% and lowering database load.",
            "Designed a responsive UI system using Atomic Design, Tailwind CSS, Framer Motion, and the Factory Pattern to maximize component reusability.",
            "Followed Git-flow, led PR reviews for core modules, and contributed to Docker-based CI/CD pipelines for automated deployments to Vercel.",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "2024 Jan - 2024 Jun",
    }

]
