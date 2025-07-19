"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import Image from "next/image"

export default function Experience() {
  const { currentTheme } = useTheme()

  const experiences = [
    {
      title: "Estagiário de Onboarding",
      company: "EMPRESA ERA",
      logo: "/placeholder.svg?height=60&width=60",
      location: "Presencial",
      period: "01/07/2025 – Presente",
      type: "Estágio",
      description:
        "Auxílio na integração de novos colaboradores, configuração de acessos em sistemas internos, preparação de kits de boas-vindas e materiais de orientação, agendamento de treinamentos iniciais e monitoramento de prazos de documentação.",
      technologies: ["A definir"],
      achievements: ["A definir", "A definir"],
    },
  ]

  return (
    <section id="experiencia" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className={`w-12 h-12 bg-gradient-to-br from-${currentTheme.primary} to-blue-500 rounded-xl flex items-center justify-center`}
            >
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Experiência</h2>
          </div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className={`bg-zinc-900/50 backdrop-blur-xl border-zinc-800/50 hover:border-${currentTheme.primary}/30 transition-all duration-500 animate-fade-in-up`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className={`w-16 h-16 bg-zinc-800 rounded-2xl border border-zinc-700 flex items-center justify-center flex-shrink-0`}
                  >
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className={`text-${currentTheme.primaryLight} font-semibold text-lg mb-1`}>{exp.company}</p>

                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-zinc-500 text-sm">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-zinc-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-6">{exp.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`text-${currentTheme.primaryLight} font-semibold mb-3`}>Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-zinc-800/50 text-zinc-300 border-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-semibold mb-3">Conquistas</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((ach) => (
                        <li key={ach} className="text-zinc-400 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                          {ach}
                        </li>
                      ))}
                    </ul>
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
