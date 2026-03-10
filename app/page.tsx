import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { SkillsSection } from "@/sections/skills";
import { ProjectsSection } from "@/sections/projects";
import { ContactSection } from "@/sections/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
