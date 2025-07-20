"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
          <p className="text-xl text-gray-600">
            下記の連絡先よりお気軽にご連絡ください。
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">連絡先情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Chatwork ID</h4>
                  <p className="text-gray-600">kokatus007</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">メールアドレス</h4>
                  <p className="text-gray-600">algorix315@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
