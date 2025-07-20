"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Mail } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">井手 穂高</h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-8">シニアフルスタックエンジニア</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            8年以上の経験を持つフルスタックエンジニアとして、
            <br />
            フロントエンドからバックエンド、インフラまで幅広く対応。
            <br />
            最適な技術とアーキテクチャで高品質なソリューションを提供します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              お問い合わせ
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
