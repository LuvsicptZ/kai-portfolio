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
            className="max-w-2xl mx-auto text-center leading-7 scroll-mt-28 mb-28 px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >

            <SectionHeading>About Me</SectionHeading>

            {/* Content */}
            <p className="text-gray-600 mb-5">
                I&apos;m a{" "}
                <span className="font-semibold text-slate-700">junior full-stack developer</span>{" "}
                and Master&apos;s student in IT based in Melbourne, Australia. I enjoy building
                end-to-end web applications with{" "}
                <span className="font-semibold text-slate-700">React</span>,{" "}
                <span className="font-semibold text-slate-700">Next.js</span>, and{" "}
                <span className="font-semibold text-slate-700">Tailwind CSS</span>, with a focus on
                clean design and smooth user experiences.
            </p>

            <p className="text-gray-600 mb-5">
                On the back end, I work with{" "}
                <span className="font-semibold text-slate-700">Node.js</span>,{" "}
                <span className="font-semibold text-slate-700">SQL</span>, and{" "}
                <span className="font-semibold text-slate-700">RESTful APIs</span> to design
                reliable data flows and practical system architecture. I&apos;m particularly
                interested in writing maintainable code, optimizing performance, and turning ideas
                into working products.
            </p>

            <p className="text-gray-600">
                When I&apos;m not coding, you&apos;ll probably find me exploring Melbourne&apos;s
                café scene or sketching ideas for my next side project.
            </p>
        </motion.section>
    )
}