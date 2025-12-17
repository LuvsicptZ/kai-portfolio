"use client"

import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from "@/lib/hook";

export default function Bio() {
  const { ref } = useSectionInView("Home");
  return (
    <section ref={ref} id="home" className="flex flex-col items-center mt-12 scroll-mt-28">
      {/* Avatar */}
      <div className="relative mb-10">
        <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/my-photo.jpg"
            alt="Profile"
            width={160}
            height={160}
            className="rounded-full w-34 h-34 object-cover" priority
          />
        </div>
        {/* Status dot */}
        <div className="absolute bottom-0 right-0 z-10" title="Open to work">
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 border-2 border-white shadow-sm"></span>
          </span>
        </div>
      </div>

      {/* Name */}
      <p className="font-mono text-sm text-gray-500 mb-2">Hi, my name is</p>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Ryan Zhang</h1>

      {/* Title */}
      <p className="font-mono text-sm text-gray-500 mb-2">I&apos;m a</p>
      <h2 className="text-2xl md:text-3xl font-bold mb-5 text-transparent bg-clip-text bg-linear-to-r from-yellow-600 to-blue-400">
        Front-End Developer
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-center max-w-md text-base leading-relaxed mb-6">
        Building accessible, pixel-perfect web experiences with{" "}
        <span className="text-slate-700 font-semibold">React (Next.js)</span> and{" "}
        <span className="text-slate-700 font-semibold">TypeScript</span>.
      </p>

      {/* Contact Links */}
      <div className="flex gap-4">
        {/* Download Resume Button */}
        <a href="/cv.pdf" download className="flex items-center justify-center gap-2 bg-[#1a1f36] text-white px-6 py-3 rounded-full hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold">
          Download CV
          <HiDownload className="w-5 h-5" />
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/LuvsicptZ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 hover:text-black hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
        >
          <FaGithub className="w-6 h-6" />
        </a>

        {/* LinkedIn Button */}
        <a 
          href="https://www.linkedin.com/in/kai-zhang-0000000000/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 hover:text-[#0077b5] hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/kimon.oq/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:-translate-y-0.5"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}