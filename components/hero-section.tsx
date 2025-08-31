"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowDown, Sparkles, Zap } from "lucide-react"
import personalInfo from "@/data/personal-info.json"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = personalInfo.resumeUrl
    link.download = `${personalInfo.name.replace(" ", "_")}_Resume.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-gradient-shift"></div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float opacity-20 blur-sm"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg rotate-45 animate-float opacity-30"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-float opacity-25"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg animate-float opacity-20"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-bounce-in">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text animate-pulse-glow">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-shift">
              {personalInfo.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              {personalInfo.tagline}
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              onClick={handleDownloadResume}
              className="text-lg px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="text-lg px-8 py-3 border-2 border-gradient-to-r from-cyan-500 to-green-500 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-green-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Learn More
              <ArrowDown className="ml-2 h-5 w-5" />
              <Zap className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="pt-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="animate-bounce">
              <div className="relative">
                <ArrowDown className="h-6 w-6 text-purple-500 mx-auto animate-pulse" />
                <div className="absolute inset-0 h-6 w-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-md opacity-50 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
