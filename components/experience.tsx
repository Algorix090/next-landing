import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Intellectsoft Australia",
      position: "シニアソフトウェアエンジニア",
      location: "オーストラリア",
      period: "2020年1月 〜 2020年8月",
      description:
        "シドニー拠点のIntellectsoft支社で、エンタープライズ向けWeb・モバイルアプリの設計・実装に従事。クライアントは大手保険・金融機関が中心。安全性・スケーラビリティ・ドメイン特化型API設計に注力。",
      technologies: ["エンタープライズ開発", "API設計", "アジャイル開発", "チーム育成", "コードレビュー"],
    },

    {
      company: "Sea Ltd（旧Garena）",
      position: "リードソフトウェアエンジニア",
      location: "シンガポール",
      period: "2017年4月 〜 2020年1月",
      description:
        "東南アジアを代表するテック大手Seaの中核子会社にて、フルスタックエンジニアとして従事。e‑コマース（Shopee）・ゲーム（Garena）・デジタル決済（SeaMoney）各領域にまたがるプロダクトの設計・開発を横断的に担当。",
      technologies: ["AWS", "Kubernetes", "マイクロサービス", "CI/CD", "グローバルスケーラビリティ"],
    },
   
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">企業経験</h2>
          <p className="text-xl text-gray-600">グローバル企業での豊富な実務経験</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-gray-900 mb-2">{exp.company}</CardTitle>
                    <h3 className="text-xl text-blue-600 font-semibold">{exp.position}</h3>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
