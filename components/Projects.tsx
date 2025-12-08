"use client"

import { projectsData } from "@/lib/data"
import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"

export default function Projects() {
    return (
        <motion.section
            id="projects"
            className="scroll-mt-28 mb-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
                My Projects
            </h2>

            <div className="flex flex-col items-center">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </motion.section>
    )
}
