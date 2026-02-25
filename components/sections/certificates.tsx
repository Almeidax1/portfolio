"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Trophy } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export default function Certificates() {
  const { currentTheme } = useTheme()

  const certificates = [
    {
      title: "Hackathon - 3º Lugar",
      issuer: "UNASP - Centro Universitário Adventista de São Paulo",
      date: "2025",
      link: "https://drive.google.com/file/d/1Oc4IYCJKSqmT6XQTmEOBbfeSZHPRMgvr/view",
      verified: true,
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30",
    },
    {
      title: "Desenvolvimento WEB",
      issuer: "Bradesco",
      date: "2025",
      link: "https://drive.google.com/file/d/1MvCbq8Q3U-SAev5bitg18ZuC4KGlGtg5/view",
      verified: true,
      icon: Award,
      color: `text-${currentTheme.primaryLight}`,
      bgColor: `bg-${currentTheme.primary}/10`,
      borderColor: `border-${currentTheme.primary}/30`,
    },
  ]

  const handleCertificateClick = (link: string) => {
    window.open(link, "_blank")
  }

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className={`w-12 h-12 bg-gradient-to-br from-${currentTheme.primary} to-blue-500 rounded-xl flex items-center justify-center`}
            >
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Certificações</h2>
          </div>
          <p className="text-zinc-400 text-lg">Conquistas e certificações obtidas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className={`bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:${cert.borderColor} transition-all duration-500 group hover:scale-105 animate-fade-in-up cursor-pointer`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleCertificateClick(cert.link)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className={`w-12 h-12 ${cert.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <cert.icon className={`w-6 h-6 ${cert.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle
                        className={`text-white text-lg group-hover:text-${currentTheme.primaryLight} transition-colors mb-2`}
                      >
                        {cert.title}
                      </CardTitle>
                      <CardDescription className={`${cert.color} font-medium text-base`}>{cert.issuer}</CardDescription>
                    </div>
                  </div>
                  {cert.verified && (
                    <div
                      className={`w-6 h-6 bg-${currentTheme.primary} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm font-medium">{cert.date}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className={`border-zinc-700 text-zinc-400 bg-transparent hover:bg-zinc-800 hover:border-${currentTheme.primary} hover:text-${currentTheme.primaryLight} transition-all duration-300 group-hover:scale-105`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCertificateClick(cert.link)
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver certificado
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
