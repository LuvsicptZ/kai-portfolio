"use client"

import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hook";

export default function About() {
    const { ref } = useSectionInView("About");
    return (
        <motion.section
            id="about"
            ref={ref}
            className="max-w-180 text-center leading-8 scroll-mt-28 mb-28 px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >

            <SectionHeading>About Me</SectionHeading>

            {/* Content */}
            <p className="text-gray-600 mb-4">
                I&apos;m a{" "}
                <span className="font-semibold text-slate-700">front-end developer</span> and{" "}
                Master&apos;s student in IT based in Melbourne, Australia. I enjoy building clean,
                interactive interfaces with{" "}
                <span className="font-semibold text-slate-700">React</span>,{" "}
                <span className="font-semibold text-slate-700">Next.js</span>, and{" "}
                <span className="font-semibold text-slate-700">Tailwind CSS</span>, and turning
                ideas into polished, user-friendly experiences.
            </p>

            <p className="text-gray-600">
                I occasionally experiment with UI/UX concepts and lightweight animations, and I also
                work with <span className="font-semibold text-slate-700">Node.js</span> and{" "}
                <span className="font-semibold text-slate-700">SQL</span> to support full-featured
                applications. When I&apos;m not coding, you&apos;ll probably find me exploring local
                cafés or sketching ideas for my next side project.
            </p>
        </motion.section>
    )
}