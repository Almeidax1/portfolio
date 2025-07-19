"use client"

import { ModernButton } from "@/components/ui/modern-button"
import { GlassCard } from "@/components/ui/glass-card"
import { NeuroCard } from "@/components/ui/neuro-card"
import { User, MessageCircle, Download } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import Image from "next/image"

export default function About() {
  const { currentTheme } = useTheme()

  return (
    <section id="sobre" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <GlassCard variant="intense" className="p-12 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <NeuroCard variant="pressed" className="w-12 h-12 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </NeuroCard>
                <h2 className="text-3xl font-bold text-white">Sobre mim</h2>
              </div>

              <div
                className="space-y-4 text-zinc-300 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p>
                  Olá, meu nome é <span className={`text-${currentTheme.primaryLight} font-medium`}>Kauã Almeida</span>,
                  tenho <span className={`text-${currentTheme.primaryLight} font-medium`}>18 anos</span>. Atualmente,
                  curso Sistemas de Informação.
                </p>
                <p>
                  Meu objetivo é construir uma{" "}
                  <span className="text-blue-400 font-medium">carreira sólida na área de tecnologia</span>, com foco na
                  criação de soluções inovadoras.
                </p>
                <p>
                  No momento, venho adquirindo{" "}
                  <span className={`text-${currentTheme.primaryLight} font-medium`}>conhecimentos fundamentais</span>{" "}
                  para aprimorar minhas habilidades e contribuir de forma significativa ao setor de informática.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-3 pt-4 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <ModernButton
                  variant="primary"
                  size="md"
                  icon={<MessageCircle className="w-4 h-4" />}
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Entre em contato
                </ModernButton>

                <ModernButton
                  variant="outline"
                  size="md"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/13cJjb75PjwrAbGQ-2RYWB1VoXWEatwiL/view?usp=drivesdk",
                      "_blank",
                    )
                  }
                  icon={<Download className="w-4 h-4" />}
                >
                  Download CV
                </ModernButton>
              </div>
            </div>

            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative group">
                <NeuroCard variant="floating" interactive className="w-64 h-64 p-4">
                  <GlassCard
                    variant="frosted"
                    className="w-full h-full flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/placeholder.svg?height=240&width=240"
                      alt="Kauã Almeida"
                      width={240}
                      height={240}
                      className="rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                    />
                  </GlassCard>
                </NeuroCard>

                <div className="absolute -top-3 -right-3">
                  <div
                    className={`w-6 h-6 bg-gradient-to-br from-${currentTheme.primaryLight} to-blue-400 rounded-full animate-ping`}
                    style={{
                      boxShadow: `0 0 20px var(--theme-glow)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
