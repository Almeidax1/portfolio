"use client"

import { ModernButton } from "@/components/ui/modern-button"
import { GlassCard } from "@/components/ui/glass-card"
import { NeuroCard } from "@/components/ui/neuro-card"
import { Badge } from "@/components/ui/badge"
import { Code2, ExternalLink, Github, Star } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import Image from "next/image"

export default function Projects() {
  const { currentTheme } = useTheme()

  const projects = [
    {
      title: "Gift Girlfriend",
      description:
        "Aplicação web romântica e interativa desenvolvida como presente personalizado. Interface com gradiente rosa, elementos visuais carinhosos e interações lúdicas que criam uma experiência única e emotiva para demonstrar afeto de forma criativa.",
      image: "/primeiroprojetoo.png?height=300&width=400",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://almeidax1.github.io/gift-girfriend/",
      github: "https://github.com/Almeidax1/gift-girfriend",
      status: "Concluído",
      featured: true,
      stars: 0,
    },
    {
      title: "Eight Health",
      description:
        "Aplicativo de Saúde Integral voltado para quem busca saúde de forma natural, organizada e consciente. Promove equilíbrio entre os três pilares da saúde verdadeira: físico, mental e espiritual através dos 8 remédios naturais.",
      image: "/imagemajustadahealth.png?height=300&width=400",
      tags: ["TypeScript", "React", "Next.js", "Vercel"],
      link: "https://eight-health.vercel.app",
      github: "https://github.com/AlmirJrDev/Eight-Health",
      status: "Concluído",
      featured: true,
      stars: 0,
    },
    {
      title: "SX1 IMPORTS",
      description: "Esta plataforma está sendo desenvolvida para ajudar lojas a expandirem sua presença digital e realizarem vendas online de forma simples, rápida e eficiente.",
      image: "/SX1.svg?height=300&width=400",
      tags: ["JavaScript"],
      link: "sx1-yzy.vercel.app",
      github: "https://github.com/opZywl/sx1",
      status: "Em desenvolvimento",
      featured: false,
      stars: 0,
    },
    {
      title: "Em breve",
      description: "Em breve",
      image: "/produção.jpg?height=300&width=400",
      tags: ["JavaScript", "React", "Next.js"],
      link: "#",
      github: "#",
      status: "Em breve",
      featured: false,
      stars: 0,
    },
  ]

  const handleGitHubClick = () => {
    window.open("https://github.com/Almeidax1?tab=repositories", "_blank")
  }

  const handleProjectLink = (link: string) => {
    if (link !== "#") {
      window.open(link, "_blank")
    }
  }

  const handleGitHubRepo = (github: string) => {
    if (github !== "#") {
      window.open(github, "_blank")
    }
  }

  return (
    <section id="projetos" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <NeuroCard variant="pressed" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </NeuroCard>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Projetos em Destaque</h2>
          </div>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Alguns dos meus trabalhos mais recentes, desenvolvidos com as melhores práticas e tecnologias modernas
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-12 sm:mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <GlassCard key={index} variant="default" className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>

                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <Badge
                      className={`${
                        project.status === "Concluído"
                          ? `bg-${currentTheme.primary}/20 text-${currentTheme.primaryLight} border-${currentTheme.primary}/30`
                          : "bg-zinc-500/20 text-zinc-400 border-zinc-500/30"
                      } backdrop-blur-sm border text-xs sm:text-sm`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <GlassCard
                    variant="subtle"
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 py-1 flex items-center gap-1"
                  >
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-white font-medium">{project.stars}</span>
                  </GlassCard>

                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <ModernButton
                      variant="primary"
                      size="sm"
                      onClick={() => handleProjectLink(project.link)}
                      disabled={project.link === "#"}
                      icon={<ExternalLink className="w-3 h-3" />}
                      className="text-xs sm:text-sm min-h-[36px] sm:min-h-[40px]"
                    >
                      Demo
                    </ModernButton>
                    <ModernButton
                      variant="outline"
                      size="sm"
                      onClick={() => handleGitHubRepo(project.github)}
                      disabled={project.github === "#"}
                      className="px-2 sm:px-3 min-h-[36px] sm:min-h-[40px]"
                    >
                      <Github className="w-4 h-4" />
                    </ModernButton>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3
                    className={`text-white text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-${currentTheme.primaryLight} transition-colors`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className={`bg-zinc-800/50 text-zinc-300 border-0 hover:bg-${currentTheme.primary}/20 hover:text-${currentTheme.primaryLight} transition-all duration-300 text-xs`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mb-8 sm:mb-12">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <NeuroCard key={index} variant="raised" interactive className="overflow-hidden p-4 sm:p-6">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover"
                  />

                  <GlassCard variant="subtle" className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 py-1">
                    <span className="text-xs text-zinc-400">{project.status}</span>
                  </GlassCard>
                </div>

                <h3
                  className={`text-white text-base sm:text-lg mb-2 hover:text-${currentTheme.primaryLight} transition-colors`}
                >
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-zinc-800/50 text-zinc-300 border-0 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </NeuroCard>
            ))}
        </div>

        <div className="flex justify-center">
          <ModernButton
            variant="primary"
            size="md"
            onClick={handleGitHubClick}
            icon={<Github className="w-5 h-5" />}
            className="w-full sm:w-auto min-h-[48px]"
          >
            Ver todos os projetos
          </ModernButton>
        </div>
      </div>
    </section>
  )
}
