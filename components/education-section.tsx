import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import educationData from "@/data/education.json"

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.education.map((edu, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                      <p className="text-lg text-primary font-semibold">{edu.university}</p>
                    </div>
                  </div>
                  <div className="text-right sm:text-left">
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary font-semibold">
                      {edu.cgpa}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
