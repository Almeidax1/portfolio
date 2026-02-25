import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kauã Almeida - Full Stack Developer",
  description:
    "Desenvolvedor Full Stack especializado em soluções digitais elegantes e funcionais. Experiência em desenvolvimento web moderno e arquiteturas escaláveis.",
  keywords: [
    "Kauã Almeida",
    "Full Stack Developer",
    "Desenvolvedor",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Kauã Almeida" }],
  creator: "Kauã Almeida",
  publisher: "Kauã Almeida",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kaua-portfolio.vercel.app",
    title: "Kauã Almeida - Full Stack Developer",
    description: "Desenvolvedor Full Stack especializado em soluções digitais elegantes e funcionais.",
    siteName: "Kauã Almeida Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kauã Almeida - Full Stack Developer",
    description: "Desenvolvedor Full Stack especializado em soluções digitais elegantes e funcionais.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content="#0891b2" />
        <meta name="msapplication-TileColor" content="#0891b2" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
