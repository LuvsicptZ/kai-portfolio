import Image from "next/image";

export default function Bio() {
  return (
    <div className="flex flex-col items-center mt-12 mb-8">
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
    </div>
  );
}