"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">井手 穂高</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              プロフィール
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              経歴
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              スキル
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              実績
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              お問い合わせ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                プロフィール
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                経歴
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                スキル
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                実績
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                お問い合わせ
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
