import Image from "next/image"; 

interface BioProps {
  name: string;
  description: string;
}
export default function Bio({ name, description }: BioProps) {
  return (
    <div className="flex flex-col items-center p-8 border rounded-xl bg-white shadow-md max-w-sm mt-6">
      {/* Circular Avatar */}
      <div className="mb-4">
        <Image 
          src="/my-photo.jpg" 
          alt="Profile" 
          width={100} 
          height={100}
          className="rounded-full object-cover border-4 border-gray-200"
        />
      </div>
      
      {/* Name */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {name}
      </h2>
      
      {/* Description */}
      <p className="text-gray-900 text-center">
        {description}
      </p>
    </div>
  );
}