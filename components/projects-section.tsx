import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Bold as Road, Badge as Bridge, Droplets, Calendar, CheckCircle, ExternalLink } from "lucide-react"
import projectsData from "@/data/projects.json"

const categoryIcons = {
  "Structural Design": Building,
  "Transportation Engineering": Road,
  "Bridge Engineering": Bridge,
  "Water Resources": Droplets,
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects Portfolio</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative civil engineering solutions across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.projects.map((project) => {
            const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons] || Building

            return (
              <Card
                key={project.id}
                className="border-2 hover:shadow-xl transition-all duration-300 hover:border-primary/30 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {project.category}
                        </Badge>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.duration}
                    </Badge>
                    <Badge variant="default" className="text-xs bg-green-100 text-green-800 hover:bg-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-muted-foreground">Major Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">23</div>
              <div className="text-muted-foreground">Months Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-muted-foreground">Tools Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
