import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

interface ContactLinksProps {
  /** GitHub profile URL */
  githubUrl: string;
  /** LinkedIn profile URL */
  LinkedInUrl: string;
  /** Instagram profile URL */
  InstagramUrl: string;

}

export default function ContactLinks({ githubUrl, InstagramUrl, LinkedInUrl }: ContactLinksProps) {
  return (
    <div className="flex gap-4">

      {/* Download Resume Button */}
      <a href="/cv.pdf" download className="flex items-center justify-center gap-2 bg-[#1a1f36] text-white px-6 py-3 rounded-full hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold">
        Download CV
        <HiDownload className="w-5 h-5" />
      </a>

      {/* GitHub Button */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 hover:text-black hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
      >
        {/* GitHub Icon */}
        <FaGithub className="w-6 h-6" />
      </a>

      {/* LinkedIn Button */}
      <a href={LinkedInUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 hover:text-[#0077b5] hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5">
        {/* LinkedIn Icon */}
        <FaLinkedin className="w-6 h-6" />
      </a>

      {/* Instagram Button */}
      <a
        href={InstagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full text-gray-900 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:-translate-y-0.5"
      >
        {/* Instagram Icon */}
        <FaInstagram className="w-6 h-6" />
      </a>
    </div>
  );
}