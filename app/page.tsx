import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full animate-float blur-xl"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full animate-float blur-xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-cyan-300/20 rounded-full animate-float blur-xl"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
