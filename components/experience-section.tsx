import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import experienceData from "@/data/experience.json"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experienceData.experience.map((exp, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between flex-col lg:flex-row gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{exp.role}</CardTitle>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="secondary" className="text-sm">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.duration}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
