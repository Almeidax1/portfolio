"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Mail, Linkedin, Github, Send } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import Link from "next/link"

export default function Contact() {
  const { currentTheme } = useTheme()

  return (
    <section id="contato" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className={`w-12 h-12 bg-gradient-to-br from-${currentTheme.primary} to-blue-500 rounded-xl flex items-center justify-center`}
            >
              <Send className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Entre em Contato</h2>
          </div>
          <p className={`text-xl text-${currentTheme.primaryLight} font-medium mb-4`}>
            Gostou? Conte-me sobre suas oportunidades de trabalho disponíveis ou apenas diga oi 😃
          </p>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Estou sempre interessado em novos projetos e oportunidades desafiadoras. Entre em contato e vamos conversar
            sobre como posso ajudar a transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              href: "https://wa.me/+5519999394093",
              icon: MessageCircle,
              label: "WhatsApp",
              description: "Resposta rápida",
              color: "from-green-500 to-emerald-500",
              textColor: "text-green-400",
              bgColor: "bg-green-500/10",
              borderColor: "border-green-500/20",
            },
            {
              href: "mailto:kauanascimento2016007@gmail.com",
              icon: Mail,
              label: "Email",
              description: "Contato profissional",
              color: `from-${currentTheme.primary} to-${currentTheme.primaryHover}`,
              textColor: `text-${currentTheme.primaryLight}`,
              bgColor: `bg-${currentTheme.primary}/10`,
              borderColor: `border-${currentTheme.primary}/20`,
            },
            {
              href: "https://www.linkedin.com/in/kaua-almeidaa",
              icon: Linkedin,
              label: "LinkedIn",
              description: "Rede profissional",
              color: "from-blue-600 to-blue-500",
              textColor: "text-blue-400",
              bgColor: "bg-blue-500/10",
              borderColor: "border-blue-500/20",
            },
          ].map((contact, index) => (
            <Link key={index} href={contact.href} target="_blank">
              <Card
                className={`${contact.bgColor} backdrop-blur-sm border ${contact.borderColor} hover:border-opacity-50 transition-all duration-500 group cursor-pointer hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className={`${contact.textColor} font-semibold text-lg mb-2 group-hover:text-opacity-80 transition-colors`}
                  >
                    {contact.label}
                  </h3>
                  <p className="text-zinc-400 text-sm">{contact.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center gap-4">
          {[
            { href: "https://github.com/Almeidax1", icon: Github, color: "text-gray-400 hover:text-white" },
            {
              href: "https://www.linkedin.com/in/kaua-almeidaa",
              icon: Linkedin,
              color: "text-blue-400 hover:text-blue-300",
            },
            {
              href: "mailto:kauanascimento2016007@gmail.com",
              icon: Mail,
              color: `text-${currentTheme.primaryLight} hover:text-${currentTheme.primary}`,
            },
          ].map((social, index) => (
            <Link key={index} href={social.href} target="_blank">
              <div
                className={`w-12 h-12 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:border-opacity-100`}
              >
                <social.icon className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
