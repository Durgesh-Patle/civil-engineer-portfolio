"use client"

import { Separator } from "@/components/ui/separator"
import { Mail, Phone, Linkedin } from "lucide-react"
import personalInfo from "@/data/personal-info.json"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      href: personalInfo.linkedin,
      icon: Linkedin,
    },
    {
      name: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      name: "Phone",
      href: `tel:${personalInfo.phone}`,
      icon: Phone,
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">{personalInfo.name}</h3>
            <p className="text-muted-foreground leading-relaxed">
              Civil Engineer passionate about creating innovative infrastructure solutions that shape the future of our
              communities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Phone" ? "_blank" : undefined}
                    rel={link.name !== "Phone" ? "noopener noreferrer" : undefined}
                    className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary font-medium">Location:</span>
                <span className="text-muted-foreground">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">Built with React, Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
