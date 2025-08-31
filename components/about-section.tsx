import { Card, CardContent } from "@/components/ui/card"
import { User, Target } from "lucide-react"
import personalInfo from "@/data/personal-info.json"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Professional Background</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{personalInfo.about}</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Career Objective</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{personalInfo.careerObjective}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">8.5</div>
              <div className="text-muted-foreground">CGPA</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
