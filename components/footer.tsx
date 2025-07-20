import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">井手 穂高</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            シニアフルスタックエンジニアとして、最適な技術とアーキテクチャで
            <br />
            高品質なソリューションを提供いたします。
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:hotaka.ide@example.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="メール"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">© 2024 井手 穂高. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
