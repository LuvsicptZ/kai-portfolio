import Bio from "../components/Bio";
import SocialLinks from "../components/SocialLinks";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-lg font-medium text-gray-500 mb-2">My personal portfolio</h1>
      <Bio
        name="Kai Zhang"
        description="Front-End Development Intern eager to grow. Skilled in React, Next.js, Vue, Redux, TypeScript, Tailwind CSS, Java, and Python. Experienced with Git workflows, RESTful APIs, AWS deployments, and basic backend work with Node.js/Express and SQL. Quick learner, write clean code, and excited to contribute to a real team."

      />
      <SocialLinks
        githubUrl="https://github.com"
        InstagramUrl="https://www.instagram.com/"
      />
    </main>
  );
}