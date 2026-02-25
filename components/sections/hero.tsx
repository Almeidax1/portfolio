"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { ModernButton } from "@/components/ui/modern-button"
import { NeuroCard } from "@/components/ui/neuro-card"
import { ParallaxContainer } from "@/components/ui/parallax-container"
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Rocket, Target, Zap, Award, Download } from "lucide-react"
import Link from "next/link"
import { useTheme } from "@/hooks/use-theme"
import { skillsList } from "./skills"

interface HeroProps {
  isLoaded: boolean
}

export default function Hero({ isLoaded }: HeroProps) {
  const { currentTheme } = useTheme()
  const skills = skillsList

  const stats = [
    { label: "Projetos", value: "3", icon: Rocket },
    { label: "Experiência", value: "1+", icon: Target },
    { label: "Tecnologias", value: `${skills.length}`, icon: Zap },
    { label: "Certificações", value: "2", icon: Award },
  ]

  const handleCVDownload = () => {
    try {
      window.open("https://drive.google.com/file/d/13cJjb75PjwrAbGQ-2RYWB1VoXWEatwiL/view?usp=drivesdk", "_blank")
    } catch (error) {
      console.error("Erro ao abrir CV:", error)
    }
  }

  const scrollToProjects = () => {
    try {
      const element = document.getElementById("projetos")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.error("Erro ao fazer scroll:", error)
    }
  }

  return (
    <section className="pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div
            className={`space-y-6 sm:space-y-8 ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 text-center lg:text-left`}
          >
            <div className="space-y-3 sm:space-y-4">
              <ParallaxContainer speed={0.2}>
                <div
                  className={`flex items-center justify-center lg:justify-start gap-2 text-${currentTheme.primaryLight} font-medium text-sm sm:text-base`}
                >
                  <Sparkles className="w-4 h-4 animate-sparkle-glow" />
                  <span>Olá, eu sou</span>
                </div>
              </ParallaxContainer>

              <ParallaxContainer speed={0.1}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span
                    className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent animate-glow-text`}
                  >
                    Kauã
                  </span>
                  <br />
                  <span
                    className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent animate-glow-text`}
                  >
                    Almeida
                  </span>
                </h1>
              </ParallaxContainer>

              <ParallaxContainer speed={0.3}>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div
                    className={`h-px bg-gradient-to-r from-${currentTheme.primaryLight} to-transparent w-8 sm:w-12`}
                  ></div>
                  <p className="text-lg sm:text-xl text-zinc-400">Full Stack Developer</p>
                </div>
              </ParallaxContainer>

              <ParallaxContainer speed={0.15}>
                <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Desenvolvedor apaixonado por criar{" "}
                  <span className={`text-${currentTheme.primaryLight} font-medium`}>soluções digitais elegantes</span> e
                  funcionais. Especializado em desenvolvimento web moderno e arquiteturas escaláveis.
                </p>
              </ParallaxContainer>
            </div>

            <ParallaxContainer speed={0.25}>
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6">
                {[
                  {
                    href: "https://github.com/Almeidax1",
                    icon: Github,
                    color: "text-gray-400",
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/kaua-almeidaa",
                    icon: Linkedin,
                    color: "text-blue-400",
                    label: "LinkedIn",
                  },
                  {
                    href: "mailto:kauanascimento2016007@gmail.com",
                    icon: Mail,
                    color: `text-${currentTheme.primaryLight}`,
                    label: "Email",
                  },
                ].map((social, index) => (
                  <Link key={index} href={social.href} target="_blank">
                    <GlassCard
                      variant="subtle"
                      className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center group cursor-pointer"
                    >
                      <social.icon
                        className={`w-6 h-6 sm:w-7 sm:h-7 ${social.color} group-hover:scale-110 transition-transform`}
                      />
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </ParallaxContainer>

            <ParallaxContainer speed={0.35}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <ModernButton
                  variant="primary"
                  size="md"
                  onClick={scrollToProjects}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="group min-h-[48px] w-full sm:w-auto"
                >
                  Ver meu trabalho
                </ModernButton>

                <ModernButton
                  variant="outline"
                  size="md"
                  onClick={handleCVDownload}
                  icon={<Download className="w-4 h-4" />}
                  className="min-h-[48px] w-full sm:w-auto"
                >
                  Download CV
                </ModernButton>
              </div>
            </ParallaxContainer>
          </div>

          <ParallaxContainer speed={0.4} direction="down">
            <div
              className={`flex justify-center mt-8 lg:mt-0 lg:justify-end ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
            >
              <div className="relative">
                <NeuroCard
                  variant="floating"
                  interactive
                  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center p-6 sm:p-8"
                >
                  <GlassCard
                    variant="frosted"
                    className="w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 flex items-center justify-center"
                  >
                    <Code2
                      className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 text-${currentTheme.primaryLight} animate-pulse`}
                    />
                  </GlassCard>

                  <ParallaxContainer speed={0.6} className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-${currentTheme.primaryLight} to-blue-400 rounded-xl sm:rounded-2xl rotate-12 animate-float`}
                      style={{
                        boxShadow: `0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                      }}
                    />
                  </ParallaxContainer>

                  <ParallaxContainer speed={0.8} className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6">
                    <div
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg sm:rounded-xl -rotate-12 animate-float"
                      style={{
                        boxShadow: `0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                        animationDelay: "1s",
                      }}
                    />
                  </ParallaxContainer>
                </NeuroCard>
              </div>
            </div>
          </ParallaxContainer>
        </div>
      </div>

      <ParallaxContainer speed={0.2}>
        <div className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <GlassCard key={index} variant="default" className="p-4 sm:p-6 text-center group">
                <stat.icon
                  className={`w-6 h-6 sm:w-8 sm:h-8 text-${currentTheme.primaryLight} mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}
                />
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-zinc-300">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </ParallaxContainer>
    </section>
  )
}
