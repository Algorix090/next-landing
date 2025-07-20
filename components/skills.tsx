import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Server, Database, Cloud, Wrench, Palette } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "フロントエンド",
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        "React",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "Sass",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
      ],
    },
    {
      title: "バックエンド",
      icon: <Server className="h-6 w-6" />,
      skills: [
        "Node.js (Express)",
        "Python (Django/FastAPI)",
        "Ruby on Rails",
        "PHP (Laravel/Symfony)",
        "Java (Spring Boot)",
      ],
    },
    {
      title: "データベース",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "インフラ・DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS (EC2, S3, RDS, Lambda, CloudFormation)", "Docker", "GitHub Actions"],
    },
    {
      title: "その他",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Firebase", "GraphQL", "REST API", "CI/CD", "Git", "Jira"],
    },
    {
      title: "デザインツール",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">技術スキル</h2>
          <p className="text-xl text-gray-600">幅広い技術スタックに対応可能</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="text-blue-600">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      {skill}
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
