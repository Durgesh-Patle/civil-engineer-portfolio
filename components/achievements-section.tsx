import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar } from "lucide-react"
import certificationsData from "@/data/certifications.json"

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Achievements & Recognition</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Awards, scholarships, and recognitions earned throughout my academic and professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.achievements.map((achievement, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-primary font-semibold">{achievement.organization}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {achievement.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-muted-foreground">Major Awards</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-muted-foreground">Years Scholarship</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-muted-foreground">Students Led</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
