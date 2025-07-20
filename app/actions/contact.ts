"use server"

import nodemailer from "nodemailer"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const company = formData.get("company") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Set up transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "algorix315@gmail.com", // your Gmail address
      pass: "vip19931103", // your Gmail App Password
    },
  })

  console.log(process.env.GMAIL_USER, "user", process.env.GMAIL_PASS, "pass")

  // Email content
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "algorix315@gmail.com", // your receiving email address
    subject: `[お問い合わせ] ${subject}`,
    text: `
お名前: ${name}
会社名: ${company}
メールアドレス: ${email}
件名: ${subject}
メッセージ:
${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: "メッセージが正常に送信されました。" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "メール送信中にエラーが発生しました。1" + error }
  }
}
