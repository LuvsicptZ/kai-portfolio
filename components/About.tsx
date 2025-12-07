import { motion } from "framer-motion"

export default function About() {
    return (
        <motion.section
            id="about"
            className="max-w-180 text-center leading-8 scroll-mt-28 mb-28 px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            {/* Content */}
            <p className="text-gray-600 mt-[200px] mb-2">
                Hey there! 👋 I&apos;m a{" "}
                <span className="font-semibold text-slate-700">front-end developer</span>{" "}
                and IT student currently living in Australia. I spend my days turning coffee ☕ into React components and occasionally making Next.js do things it probably wasn&apos;t meant to.
            </p>

            <p className="text-gray-600 mb-2">
                I love building{" "}
                <span className="font-semibold text-slate-700">clean, interactive websites</span>{" "}
                with Tailwind CSS and experimenting with UI/UX design—basically, I enjoy making the web a little prettier and a lot more usable. On the backend side, I dabble in{" "}
                <span className="font-semibold text-slate-700">Node.js</span> and{" "}
                <span className="font-semibold text-slate-700">SQL</span>, so I can make sure my apps don&apos;t just look good but also actually work.
            </p>

            <p className="text-gray-600">
                When I&apos;m not coding, you might catch me walking around local cafés, thinking about layout grids, or planning my next quirky project. My motto:{" "}
                <span className="italic font-medium text-slate-700">learn, build, optimize, repeat.</span>
            </p>
        </motion.section>
    )
}