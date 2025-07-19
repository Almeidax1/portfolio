"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ExternalLink,
  Code2,
  Briefcase,
  Award,
  User,
  Calendar,
  ArrowRight,
  Download,
  Sparkles,
  Zap,
  Target,
  Rocket,
  Coffee,
  Globe,
  Bot,
  Leaf,
  Container,
  Cloud,
  Database,
  FileCode2,
  Server,
  Atom,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skills = [
    { name: "Java", icon: Coffee, level: 90, color: "from-orange-500 to-red-500" },
    { name: "Kotlin", icon: Zap, level: 85, color: "from-purple-500 to-pink-500" },
    { name: "PHP", icon: Globe, level: 80, color: "from-blue-500 to-indigo-500" },
    { name: "Python", icon: Bot, level: 88, color: "from-yellow-500 to-orange-500" },
    { name: "Spring Boot", icon: Leaf, level: 92, color: "from-green-500 to-emerald-500" },
    { name: "Docker", icon: Container, level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "AWS", icon: Cloud, level: 78, color: "from-orange-500 to-yellow-500" },
    { name: "MongoDB", icon: Database, level: 82, color: "from-green-500 to-teal-500" },
    { name: "TypeScript", icon: FileCode2, level: 87, color: "from-blue-500 to-indigo-500" },
    { name: "MySQL", icon: Server, level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "React", icon: Atom, level: 90, color: "from-cyan-500 to-blue-500" },
    { name: "GitHub", icon: Github, level: 95, color: "from-gray-500 to-zinc-500" },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com Spring Boot e React, incluindo sistema de pagamentos e dashboard administrativo.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Java", "Spring Boot", "React", "MySQL", "Stripe"],
      link: "#",
      status: "Em produção",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Aplicativo mobile de gerenciamento de tarefas com sincronização em tempo real e notificações push.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Kotlin", "Android", "Firebase", "Room"],
      link: "#",
      status: "Concluído",
      featured: true,
    },
    {
      title: "API REST Microservices",
      description: "Arquitetura de microsserviços para sistema de gestão empresarial com alta disponibilidade.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Python", "FastAPI", "Docker", "PostgreSQL"],
      link: "#",
      status: "Em desenvolvimento",
      featured: false,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Dashboard em tempo real para análise de dados com visualizações interativas e relatórios automatizados.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["TypeScript", "React", "D3.js", "Node.js"],
      link: "#",
      status: "Concluído",
      featured: false,
    },
  ]

  const experiences = [
    {
      title: "Desenvolvedor de Software",
      company: "Freelancer",
      logo: "/placeholder.svg?height=60&width=60",
      location: "Remoto",
      period: "Fev 2022 - Presente",
      type: "Autônomo",
      description:
        "Desenvolvedor Full Stack especializado em criação de APIs robustas, automação de processos e otimização de sistemas. Experiência em arquitetura de microsserviços e desenvolvimento de interfaces modernas.",
      technologies: ["Java", "Spring Boot", "React", "Python", "AWS", "Docker"],
      achievements: ["15+ projetos entregues", "100% satisfação do cliente", "Redução de 40% no tempo de deploy"],
    },
    {
      title: "Suporte Técnico de TI",
      company: "Prefeitura Municipal",
      logo: "/placeholder.svg?height=60&width=60",
      location: "Presencial",
      period: "Nov 2023 - Fev 2024",
      type: "Estágio de Suporte Técnico",
      description:
        "Responsável pela manutenção de sistemas críticos, implementação de soluções de backup, instalação e configuração de equipamentos, focando na otimização de performance e disponibilidade.",
      technologies: ["Windows Server", "Linux", "Redes", "Hardware", "PowerShell"],
      achievements: ["99.5% uptime dos sistemas", "Automatização de 80% das tarefas", "Treinamento de 20+ usuários"],
    },
  ]

  const certificates = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "#",
      verified: true,
    },
    {
      title: "Java Spring Boot Developer",
      issuer: "Oracle",
      date: "2023",
      link: "#",
      verified: true,
    },
    {
      title: "Docker Fundamentals",
      issuer: "Docker Inc.",
      date: "2023",
      link: "#",
      verified: true,
    },
    {
      title: "Kubernetes Administrator",
      issuer: "CNCF",
      date: "2024",
      link: "#",
      verified: false,
    },
  ]

  const stats = [
    { label: "Projetos Concluídos", value: "15+", icon: Rocket },
    { label: "Anos de Experiência", value: "3+", icon: Target },
    { label: "Tecnologias", value: "12+", icon: Zap },
    { label: "Clientes Satisfeitos", value: "100%", icon: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5"></div>
        <div
          className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-white animate-slide-in-left">
              <span className="text-zinc-400">{"<"}</span>
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent animate-glow-text">
                Kauã Almeida
              </span>
              <span className="text-zinc-400">{"/>"}</span>
            </div>

            <div className="hidden md:flex items-center space-x-8 animate-slide-in-down">
              {["Sobre", "Projetos", "Habilidades", "Experiência", "Contato"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-zinc-400 hover:text-emerald-400 transition-all duration-300 text-sm font-medium relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 animate-slide-in-right">
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-emerald-400 font-medium">DISPONÍVEL</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-400/30 text-emerald-400 bg-emerald-400/5 hover:bg-emerald-400/10 backdrop-blur-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-medium animate-fade-in-up delay-200">
                  <Sparkles className="w-4 h-4" />
                  <span>Olá, eu sou</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up delay-300">
                  <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent animate-glow-text">
                    Kauã
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent animate-glow-text">
                    Almeida
                  </span>
                </h1>
                <div className="flex items-center gap-3 animate-fade-in-up delay-400">
                  <div className="h-px bg-gradient-to-r from-emerald-400 to-transparent w-12"></div>
                  <p className="text-xl text-zinc-400">Full Stack Developer</p>
                </div>
                <p className="text-zinc-500 text-lg leading-relaxed max-w-lg animate-fade-in-up delay-500">
                  Desenvolvedor apaixonado por criar{" "}
                  <span className="text-emerald-400 font-medium">soluções digitais elegantes</span> e funcionais.
                  Especializado em desenvolvimento web moderno e arquiteturas escaláveis.
                </p>
              </div>

              <div className="flex items-center gap-4 animate-fade-in-up delay-600">
                {[
                  { href: "https://github.com/Almeidax1", icon: Github, color: "hover:text-white" },
                  { href: "https://www.linkedin.com/in/kaua-almeidaa", icon: Linkedin, color: "hover:text-blue-400" },
                  { href: "mailto:kauanascimento2016007@gmail.com", icon: Mail, color: "hover:text-emerald-400" },
                ].map((social, index) => (
                  <Link key={index} href={social.href} target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className={`border-zinc-700 bg-zinc-900/50 backdrop-blur-sm hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-700">
                <Button
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-3 font-medium group transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver meu trabalho
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800 hover:border-zinc-600 px-8 py-3 font-medium group transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </div>
            </div>

            <div className={`flex justify-center lg:justify-end ${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-56 h-56 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center relative z-10">
                    <Code2 className="w-20 h-20 text-emerald-400 animate-pulse" />
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-2xl rotate-12 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl -rotate-12 animate-float delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-zinc-900/50 backdrop-blur-xl border-zinc-800/50 hover:border-emerald-400/20 transition-all duration-500 animate-fade-in-up">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Sobre mim</h2>
                  </div>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      Desenvolvedor de Software com <span className="text-emerald-400 font-medium">20 anos</span>,
                      cursando Sistemas de Informação. Especializado em tecnologias modernas como Java, Kotlin, Python,
                      TypeScript e PHP.
                    </p>
                    <p>
                      Experiência sólida em <span className="text-blue-400 font-medium">otimização de JVM</span>, Spring
                      Boot para APIs e microsserviços, desenvolvimento web moderno e infraestrutura AWS para soluções
                      escaláveis.
                    </p>
                    <p>
                      Apaixonado por <span className="text-emerald-400 font-medium">clean code</span> e arquiteturas
                      robustas que fazem a diferença no mundo real.
                    </p>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white group transition-all duration-300 hover:scale-105">
                      <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Entre em contato
                    </Button>
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-zinc-400 bg-transparent hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Image
                        src="/placeholder.svg?height=240&width=240"
                        alt="Kauã Almeida"
                        width={240}
                        height={240}
                        className="rounded-2xl relative z-10"
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="projetos" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white">Projetos em Destaque</h2>
            </div>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Alguns dos meus trabalhos mais recentes, desenvolvidos com as melhores práticas e tecnologias modernas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-zinc-900/50 backdrop-blur-xl border-zinc-800/50 hover:border-emerald-400/30 transition-all duration-500 group overflow-hidden animate-fade-in-up hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${
                          project.status === "Em produção"
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                            : project.status === "Concluído"
                              ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        } backdrop-blur-sm`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <Button size="sm" className="bg-white text-zinc-950 hover:bg-zinc-100">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver projeto
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-400 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-zinc-800/50 text-zinc-300 border-0 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300"
                          style={{ animationDelay: `${tagIndex * 50}ms` }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-zinc-900/30 backdrop-blur-sm border-zinc-800/30 hover:border-zinc-700 transition-all duration-300 group hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${400 + index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge
                        className={`${
                          project.status === "Concluído"
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        } backdrop-blur-sm text-xs`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-zinc-400 text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-zinc-800/50 text-zinc-300 border-0 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white">Habilidades Técnicas</h2>
            </div>
            <p className="text-zinc-400 text-lg">Tecnologias e ferramentas que domino</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:border-emerald-400/30 transition-all duration-500 group cursor-pointer hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <skill.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-3 group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="w-full bg-zinc-800 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-zinc-400">{skill.level}%</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white">Experiência Profissional</h2>
            </div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 backdrop-blur-xl border-zinc-800/50 hover:border-emerald-400/30 transition-all duration-500 animate-fade-in-up hover:scale-[1.02]"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-zinc-800 rounded-2xl border border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-400/30 transition-colors">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-emerald-400 font-semibold text-lg mb-1">{exp.company}</p>
                      <div className="flex items-center gap-4 mb-2">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-zinc-500 text-sm">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-6">{exp.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-emerald-400 font-semibold mb-3">Tecnologias</h4>
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
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-zinc-400 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                            {achievement}
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

      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white">Certificações</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:border-emerald-400/30 transition-all duration-500 group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg group-hover:text-emerald-400 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-emerald-400 font-medium">{cert.issuer}</CardDescription>
                    </div>
                    {cert.verified && (
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400 text-sm">{cert.date}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-zinc-700 text-zinc-400 bg-transparent hover:bg-zinc-800 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6">Vamos trabalhar juntos</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Estou sempre interessado em novos projetos e oportunidades desafiadoras. Entre em contato e vamos
              conversar sobre como posso ajudar a transformar suas ideias em realidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                href: "https://wa.me/+55199993949093",
                icon: MessageCircle,
                label: "WhatsApp",
                description: "Resposta rápida",
                color: "from-green-500 to-emerald-500",
              },
              {
                href: "mailto:kauanascimento2016007@gmail.com",
                icon: Mail,
                label: "Email",
                description: "Contato profissional",
                color: "from-blue-500 to-cyan-500",
              },
              {
                href: "https://www.linkedin.com/in/kaua-almeidaa",
                icon: Linkedin,
                label: "LinkedIn",
                description: "Rede profissional",
                color: "from-blue-600 to-blue-500",
              },
            ].map((contact, index) => (
              <Link key={index} href={contact.href} target="_blank">
                <Card
                  className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:border-emerald-400/30 transition-all duration-500 group cursor-pointer hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-zinc-400 text-sm">{contact.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-12 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: "450ms" }}
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
            Iniciar conversa
          </Button>
        </div>
      </section>

      <footer className="border-t border-zinc-800/50 py-12 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-500 mb-4 md:mb-0">© 2025 Kauã Almeida. Desenvolvido com ❤️ e muito ☕</div>
            <div className="flex gap-4">
              {[
                { href: "https://github.com/Almeidax1", icon: Github },
                { href: "https://www.linkedin.com/in/kaua-almeidaa", icon: Linkedin },
                { href: "mailto:kauanascimento2016007@gmail.com", icon: Mail },
              ].map((social, index) => (
                <Link key={index} href={social.href} target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-zinc-500 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
