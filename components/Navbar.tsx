'use client';

import { useActiveSectionContext } from "@/context/active-section-context";

const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experiences', href: '#experiences' },
  ];

export default function Navbar() {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <nav className="fixed top-8 z-50 flex gap-3 px-3 py-1 bg-blue-100/40  rounded-full shadow-sm">
        {navItems.map((item) => (
            <a
                key={item.name}
                href={item.href}
                onClick={() => {
                    setActiveSection(item.name as any);
                    setTimeOfLastClick(Date.now());
                }}
                className={`px-3 py-2 rounded-lg hover:text-black transition-all ${
                    activeSection === item.name ? "text-black" : "text-gray-400"
                }`}
            >
                {item.name}
            </a>
        ))}
      </nav>
    );
  }