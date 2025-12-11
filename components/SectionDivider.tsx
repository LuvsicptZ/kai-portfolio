'use client'

import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"
import Link from "next/link"

export default function SectionDivider() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.25 }}
            className="text-gray-500 w-9 h-9 mt-14 mb-20 rounded-full hidden sm:block "
        >
            <Link href="#about">
                <IoIosArrowDown className="transition" />
            </Link>
        </motion.div>
    )
}