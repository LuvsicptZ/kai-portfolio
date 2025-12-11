import Bio from "../components/Bio";
import ContactLinks from "../components/ContactLinks";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import SectionDivider from "../components/SectionDivider";

export const metadata = {
  title: "Kaelen Zhang | Personal Portfolio",
  description: "Kai is a front-end developer.",
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center p-2 overflow-hidden">
      <Navbar />
      <Background />

      <div className="relative z-10 flex flex-col items-center mt-20">
        <Bio />
        <ContactLinks
          githubUrl="https://github.com/LuvsicptZ"
          InstagramUrl="https://www.instagram.com/kimon.oq/"
          LinkedInUrl="https://www.linkedin.com/in/kai-zhang-0000000000/"
        />
      </div>
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
    </main>
  );
}
