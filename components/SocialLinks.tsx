// components/SocialLinks.tsx

interface SocialLinksProps {
    githubUrl: string;
    InstagramUrl: string;
}

export default function SocialLinks({githubUrl, InstagramUrl} : SocialLinksProps) {
    return (
      <div className="flex gap-4 mt-6">
        <a 
          href={githubUrl}
          target="_blank" 
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
        >
          GitHub
        </a>
        <a 
          href={InstagramUrl}
          target="_blank" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Instagram
        </a>
      </div>
    );
  }