import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Wrench, Users } from "lucide-react"
import skillsData from "@/data/skills.json"

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical and soft skills developed through education and practical experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Technical Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillsData.technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <Badge variant="outline" className="text-xs mt-1">
                        {skill.category}
                      </Badge>
                    </div>
                    <span className="text-sm font-medium text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Soft Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillsData.softSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
