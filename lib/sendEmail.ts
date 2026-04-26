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
                user: "",
                pass: "",
            },
        })

        const res = await transporter.sendMail({
            from: "",
            to: "",
            subject: "New Customer Requirement from Site Contact Us",
            html: `
      <h2>New Customer Requirement</h2>

      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Mobile:</strong> ${data.mobile}</p>
      <p><strong>Email:</strong> ${data.email}</p>

      <p>${data.message}</p>
    `,
        })
        debugger
        return res;
    } catch (error) {
        debugger
        console.error("Error sending email:", error)
        throw error;
    }
}