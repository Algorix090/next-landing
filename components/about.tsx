import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Users, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">プロフィール</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            フルスタックエンジニアとして、Web開発・インフラ構築・システム運用に携わってまいりました
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              これまで8年以上にわたり、フルスタックエンジニアとしてWeb開発・インフラ構築・システム運用に携わってまいりました。
              フロントエンドからバックエンド、さらにはクラウド環境まで幅広く対応可能であり、
              プロジェクトの目的に応じて最適な技術とアーキテクチャを提案・実装することを得意としています。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              特に、独立して働くことで得た柔軟性と対応力を活かし、クライアント一人ひとりのニーズに寄り添った
              高品質なサービスを提供してきました。常に変化する技術トレンドをキャッチアップし、
              効率的かつ効果的なソリューションを模索し続けています。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              また、業種や分野を問わず、課題解決への好奇心と責任感を持って業務に臨んでおり、
              「誠実なコミュニケーション」と「継続的な成長」を大切にしています。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">フルスタック開発</h3>
                <p className="text-sm text-gray-600">フロントエンドからバックエンドまで一貫した開発</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">グローバル経験</h3>
                <p className="text-sm text-gray-600">シンガポール・オーストラリアでの実務経験</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">チームリード</h3>
                <p className="text-sm text-gray-600">技術リードとしてチーム育成も担当</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">最新技術</h3>
                <p className="text-sm text-gray-600">常に技術トレンドをキャッチアップ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
