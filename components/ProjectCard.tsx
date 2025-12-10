"use client"

import { useRef } from "react"
import { projectsData } from "@/lib/data"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { FaGithubSquare } from "react-icons/fa"
import Link from "next/link"
import { FiExternalLink } from "react-icons/fi"

type ProjectCardProps = (typeof projectsData)[number]

export default function ProjectCard({
    title,
    description,
    tags,
    imageUrl,
    projectUrl,
    demoUrl,
}: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0 w-full max-w-[42rem]"
        >
            <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition sm:group-even:pl-8">
                
                {/* Content Area */}
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold text-slate-800 group-hover:text-red-600/80 transition-colors hover:underline">
                        {title}
                    </h3>

                    <div className="flex gap-4 mt-2 text-sm text-gray-700">
                        {projectUrl && (
                            <Link
                                href={projectUrl}
                                target="_blank"
                                className="flex items-center gap-1 hover:underline hover:text-gray-950 transition"
                            >
                                <FaGithubSquare className="text-lg" />
                                <span>Code</span>
                            </Link>
                        )}
                        {demoUrl && (
                            <Link
                                href={demoUrl}
                                target="_blank"
                                className="flex items-center gap-1 hover:underline hover:text-gray-950 transition"
                            >
                                <FiExternalLink className="text-lg" />
                                <span>Preview</span>
                            </Link>
                        )}
                    </div>

                    <p className="mt-2 leading-relaxed text-gray-700 text-sm">
                        {description || "No description available."}
                    </p>

                    <ul className="flex flex-wrap mt-auto gap-2">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image */}
                <Image
                    src={imageUrl}
                    alt={title}
                    quality={95}
                    width={400} 
                    height={300} 
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                    transition 
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2

                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2

                    group-even:right-[initial] group-even:-left-40"
                    unoptimized
                />
            </section>
        </motion.div>
    )
}
