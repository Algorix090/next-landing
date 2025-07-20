import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp, Zap, Users } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "ECサイト構築",
      period: "2022〜2023",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "React＋Django＋AWSでフルスクラッチ開発し、要件定義から運用保守までリードしました。",
      technologies: ["React", "Django", "AWS", "PostgreSQL", "Docker"],
      achievements: ["フルスクラッチ開発", "要件定義から運用保守まで一貫対応", "高可用性アーキテクチャ設計"],
    },
    {
      title: "社内業務システムの刷新",
      period: "2021",
      icon: <Zap className="h-6 w-6" />,
      description: "Vue.js＋Laravelにより既存業務アプリを全面再構築。業務効率を30%以上改善。",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      achievements: ["業務効率30%改善", "レガシーシステム刷新", "ユーザビリティ向上"],
    },
    {
      title: "スタートアップ向けMVP開発",
      period: "複数案件",
      icon: <Users className="h-6 w-6" />,
      description: "技術選定からリリースまでを一貫対応。スピード重視の開発に柔軟に対応しました。",
      technologies: ["Next.js", "Node.js", "Firebase", "Vercel"],
      achievements: ["迅速なMVP開発", "技術選定から運用まで", "スケーラブルアーキテクチャ"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">主な実績</h2>
          <p className="text-xl text-gray-600">多様なプロジェクトでの成功実績</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600">{project.icon}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    {project.period}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900 mb-3">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col">
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">主な成果</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">使用技術</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
