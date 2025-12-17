"use client";

import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hook";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section id="skills" ref={ref} className="max-w-212 scroll-mt-28 text-center mb-28">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-900">
        {skillsData.map((skill, index) => (
          <motion.li
            className="border border-slate-300 bg-white rounded-xl px-5 py-3 
                       hover:bg-slate-100 hover:border-slate-400 hover:shadow-md 
                       transition-all duration-200 cursor-default"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}