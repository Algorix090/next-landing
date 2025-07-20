"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { sendContactEmail } from "@/app/actions/contact"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [responseMessage, setResponseMessage] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setResponseMessage(null)
    setIsSuccess(null)
    try {
      const result = await sendContactEmail(formData)
      console.log("Email sent successfully:", result)
      // setIsSuccess(result.success)
      // setResponseMessage(result.message)
      // setIsSubmitted(true)
    } catch (error) {
      setIsSuccess(false)
      setResponseMessage("メール送信中にエラーが発生しました。2")
      // setIsSubmitted(true)
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8">
              <CardContent className="p-0">
                {isSuccess ? (
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
                ) : (
                  <div className="h-16 w-16 mx-auto mb-6 text-red-600 flex items-center justify-center text-5xl">×</div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isSuccess ? "お問い合わせありがとうございます" : "送信エラー"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {responseMessage}
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  新しいメッセージを送信
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
          <p className="text-xl text-gray-600">プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">連絡先情報</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">メールアドレス</h4>
                  <p className="text-gray-600">algorix315@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">所在地</h4>
                  <p className="text-gray-600">長野市内（リモートワーク対応可能）</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-semibold text-gray-900 mb-4">対応可能な業務</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  Webアプリケーション開発
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  システム設計・アーキテクチャ設計
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  インフラ構築・運用
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  技術コンサルティング
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  チーム開発支援
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">メッセージを送信</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 *
                    </label>
                    <Input id="name" name="name" type="text" required placeholder="山田太郎" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      会社名
                    </label>
                    <Input id="company" name="company" type="text" placeholder="株式会社サンプル" className="w-full" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="example@company.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    件名 *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="プロジェクトのご相談"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    メッセージ *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="プロジェクトの詳細やご要望をお聞かせください..."
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? (
                    <>送信中...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      メッセージを送信
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
