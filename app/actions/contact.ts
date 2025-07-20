"use server"

export async function sendContactEmail(formData: FormData) {
  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const name = formData.get("name") as string
  const company = formData.get("company") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // In a real application, you would integrate with an email service like:
  // - SendGrid
  // - AWS SES
  // - Nodemailer
  // - Resend

  console.log("Contact form submission:", {
    name,
    company,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  })

  // Simulate successful email sending
  return { success: true, message: "メッセージが正常に送信されました。" }
}
