import nodemailer from "nodemailer"

export async function sendContactEmail(data: {
    name: string
    mobile: string
    email: string
    property: string
    message: string
}) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,      
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        const res = await transporter.sendMail({
            from: process.env.GMAIL_USER,           // must match the authenticated account for Gmail
            to: process.env.CONTACT_RECEIVER_EMAIL,  // where you want to receive enquiries
            replyTo: data.email,                     // lets you hit "reply" and respond directly to the customer
            subject: "New Customer Requirement from Site Contact Us",
            html: `
      <h2>New Customer Requirement</h2>

      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Mobile:</strong> ${data.mobile}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Address:</strong> ${data.property}</p>

      <p>${data.message}</p>
    `,
        })

        return res
    } catch (error) {
        console.error("Error sending email:", error)
        throw error
    }
}