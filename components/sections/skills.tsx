"use client"

import { useTheme } from "@/hooks/use-theme"

const skills = [
  {
    name: "HTML5",
    color: "border-t-orange-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-orange-500"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>`,
  },
  {
    name: "CSS3",
    color: "border-t-blue-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-500"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>`,
  },
  {
    name: "JavaScript",
    color: "border-t-yellow-500",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-400",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-500"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>`,
  },
  {
    name: "TypeScript",
    color: "border-t-blue-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-500"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm7.506 9.938H3.375v2.187h3.414v9.75h2.718v-9.75h9.563V9.938H8.631zm13.857-.188c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596 8.88 8.88 0 01-1.79.18c-.62 0-1.236-.054-1.844-.164a5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.71 27.71 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.124-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201z"/></svg>`,
  },
  {
    name: "Excel",
    color: "border-t-green-500",
    bgColor: "bg-green-500/10",
    textColor: "text-green-400",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-green-500"><path d="M21.5 2h-19A1.5 1.5 0 001 3.5v17A1.5 1.5 0 002.5 22h19a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0021.5 2zM8.5 18.5L6 15l2.5-3.5L6 8h2.5L10 10.5 11.5 8H14l-2.5 3.5L14 15h-2.5L10 12.5 8.5 15v3.5zm9.5-1h-3v-2h3v2zm0-3h-3v-2h3v2zm0-3h-3V9h3v2.5z"/></svg>`,
  },
  {
    name: "Word",
    color: "border-t-blue-600",
    bgColor: "bg-blue-600/10",
    textColor: "text-blue-500",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-600"><path d="M21.5 2h-19A1.5 1.5 0 001 3.5v17A1.5 1.5 0 002.5 22h19a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0021.5 2zM7 18L5 8h2l1 6 1-6h2l1 6 1-6h2l-2 10h-2l-1-6-1 6H7zm11-1h-3v-2h3v2zm0-3h-3v-2h3v2zm0-3h-3V9h3v2z"/></svg>`,
  },
  {
    name: "PowerShell",
    color: "border-t-blue-400",
    bgColor: "bg-blue-400/10",
    textColor: "text-blue-400",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-400"><path d="M23.181 2.974c.568 0 .819.592.819 1.16v15.732c0 .568-.251 1.16-.819 1.16H.819C.251 21.026 0 20.434 0 19.866V4.134C0 3.566.251 2.974.819 2.974h22.362zM10.57 17.415H5.805c-.538 0-.974-.436-.974-.974s.436-.974.974-.974h4.765c.538 0 .974.436.974.974s-.436.974-.974.974zm7.735-3.896L14.2 9.414a.49.49 0 010-.693l.693-.693a.49.49 0 01.693 0l4.105 4.105a.49.49 0 010 .693l-4.105 4.105a.49.49 0 01-.693 0l-.693-.693a.49.49 0 010-.693l4.105-4.105z"/></svg>`,
  },
  {
    name: "React",
    color: "border-t-yellow-400",
    bgColor: "bg-yellow-400/10",
    textColor: "text-yellow-400",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-400"><path d="M12 0C8.13 0 5 3.13 5 7c0 5.25 2 9 2 9l-2 5h14l-2-5s2-3.75 2-9c0-3.87-3.13-7-7-7zm-3 7a2 2 0 114 0 2 2 0 01-4 0zm8.5 12h-11l1-2h9l1 2z"/></svg>`,
  },
  {
    name: "Meta",
    color: "border-t-blue-400",
    bgColor: "bg-blue-400/10",
    textColor: "text-blue-400",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-blue-400"><path d="M23.181 2.974c.568 0 .819.592.819 1.16v15.732c0 .568-.251 1.16-.819 1.16H.819C.251 21.026 0 20.434 0 19.866V4.134C0 3.566.251 2.974.819 2.974h22.362zM10.57 17.415H5.805c-.538 0-.974-.436-.974-.974s.436-.974.974-.974h4.765c.538 0 .974.436.974.974s-.436.974-.974.974zm7.735-3.896L14.2 9.414a.49.49 0 010-.693l.693-.693a.49.49 0 01.693 0l4.105 4.105a.49.49 0 010 .693l-4.105 4.105a.49.49 0 01-.693 0l-.693-.693a.49.49 0 010-.693l4.105-4.105z"/></svg>`,
  },
  {
    name: "Freewswtich",
    color: "border-t-green-400",
    bgColor: "bg-green-400/10",
    textColor: "text-green-400",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-green-600"><path d="M23.181 2.974c.568 0 .819.592.819 1.16v15.732c0 .568-.251 1.16-.819 1.16H.819C.251 21.026 0 20.434 0 19.866V4.134C0 3.566.251 2.974.819 2.974h22.362zM10.57 17.415H5.805c-.538 0-.974-.436-.974-.974s.436-.974.974-.974h4.765c.538 0 .974.436.974.974s-.436.974-.974.974zm7.735-3.896L14.2 9.414a.49.49 0 010-.693l.693-.693a.49.49 0 01.693 0l4.105 4.105a.49.49 0 010 .693l-4.105 4.105a.49.49 0 01-.693 0l-.693-.693a.49.49 0 010-.693l4.105-4.105z"/></svg>`,
  },
  {
    name: "Sql",
    color: "border-t-cyan-300",
    bgColor: "bg-cyan-300/10",
    textColor: "text-cyan-300",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-cyan-300"><path d="M23.181 2.974c.568 0 .819.592.819 1.16v15.732c0 .568-.251 1.16-.819 1.16H.819C.251 21.026 0 20.434 0 19.866V4.134C0 3.566.251 2.974.819 2.974h22.362zM10.57 17.415H5.805c-.538 0-.974-.436-.974-.974s.436-.974.974-.974h4.765c.538 0 .974.436.974.974s-.436.974-.974.974zm7.735-3.896L14.2 9.414a.49.49 0 010-.693l.693-.693a.49.49 0 01.693 0l4.105 4.105a.49.49 0 010 .693l-4.105 4.105a.49.49 0 01-.693 0l-.693-.693a.49.49 0 010-.693l4.105-4.105z"/></svg>`,
  },
  {
    name: "Node.js",
    color: "border-t-green-900",
    bgColor: "bg-green-900/10",
    textColor: "text-green-900",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-green-900"><path d="M23.181 2.974c.568 0 .819.592.819 1.16v15.732c0 .568-.251 1.16-.819 1.16H.819C.251 21.026 0 20.434 0 19.866V4.134C0 3.566.251 2.974.819 2.974h22.362zM10.57 17.415H5.805c-.538 0-.974-.436-.974-.974s.436-.974.974-.974h4.765c.538 0 .974.436.974.974s-.436.974-.974.974zm7.735-3.896L14.2 9.414a.49.49 0 010-.693l.693-.693a.49.49 0 01.693 0l4.105 4.105a.49.49 0 010 .693l-4.105 4.105a.49.49 0 01-.693 0l-.693-.693a.49.49 0 010-.693l4.105-4.105z"/></svg>`,
  },
]

export const skillsList = skills.map((s) => s.name)

export default function Skills() {
  const { currentTheme } = useTheme()

  return (
    <section id="habilidades" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className={`w-12 h-12 bg-gradient-to-br from-${currentTheme.primary} to-blue-500 rounded-xl flex items-center justify-center`}
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
                <path d="M19 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-white">Habilidades</h2>
          </div>
          <p className="text-zinc-400 text-lg">Tecnologias, ferramentas &amp; scripts que domino</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-zinc-900/50 backdrop-blur-sm border-zinc-800/50 hover:border-${currentTheme.primary}/30 ${skill.color} border-t-4 rounded-xl p-6 hover:scale-105 transition-all duration-500 animate-fade-in-up group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`${skill.bgColor} rounded-2xl p-4 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                dangerouslySetInnerHTML={{ __html: skill.svg }}
              />
              <h3
                className={`text-center font-semibold mb-1 ${skill.textColor} group-hover:text-${currentTheme.primaryLight} transition-colors`}
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
