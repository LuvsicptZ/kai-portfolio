"use client"

import { projectsData } from "@/lib/data"
import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hook";

export default function Projects() {
    const { ref } = useSectionInView("Projects");
    return (
        <motion.section
            id="projects"
            ref={ref}
            className="scroll-mt-28 mb-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >

            <SectionHeading>My Projects</SectionHeading>
            <div className="flex flex-col items-center">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </motion.section>
    )
}
