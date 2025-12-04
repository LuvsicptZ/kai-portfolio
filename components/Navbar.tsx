'use client';

const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experiences', href: '#experiences' },
  ];

export default function Navbar() {
    return (
        <nav className="fixed top-8 z-50 flex gap-3 px-3 py-1 bg-blue-100/40  rounded-full shadow-sm">
        {navItems.map((item) => (
            <a key={item.name} href={item.href} className="px-3 py-2 text-gray-400 rounded-lg hover:text-black transition-all">
                {item.name}
            </a>
        ))}
      </nav>
    );
  }