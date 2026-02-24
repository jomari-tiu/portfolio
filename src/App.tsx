import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { ExperienceSection } from "@/components/sections/Experience";
import { ContactSection } from "@/components/sections/Contact";
import { useScrollSection } from "@/hooks/useScrollSection";
import { useTheme } from "@/hooks/useTheme";

const SECTION_IDS = ["hero", "about", "skills", "projects", "experience", "contact"];

function App() {
  const { theme, toggle } = useTheme();
  const activeSection = useScrollSection(SECTION_IDS);

  // Apply dark/light body class
  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#0d0d0d" : "#ffffff";
    document.body.style.color = theme === "dark" ? "#ffffff" : "#111111";
  }, [theme]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-[#0d0d0d] dark:bg-[#0d0d0d] light:bg-white text-white selection:bg-indigo-500/30">
        <Navbar
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={toggle}
        />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
