import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, CheckCircle } from "lucide-react"
import certificationsData from "@/data/certifications.json"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certifications & Training</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and specialized training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificationsData.certifications.map((cert, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {cert.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{cert.name}</CardTitle>
                <p className="text-primary font-semibold">{cert.issuer}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                <div className="pt-2">
                  <Badge variant="outline" className="text-xs">
                    ID: {cert.credentialId}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
