import nodemailer from "nodemailer"

// Shared type covering both contact form and checkout form fields
export async function sendContactEmail(data: {
  // Contact form fields
  firstName?: string
  lastName?: string
  phone?: string
  // Checkout form fields
  name?: string
  mobile?: string
  property?: string
  // Shared
  email: string
  message?: string
  // Checkout-specific
  items?: any[]
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  // Normalise fields — works whether called from contact form or checkout
  const fullName = data.name
    ? data.name
    : [data.firstName, data.lastName].filter(Boolean).join(" ")

  const phone = data.mobile || data.phone || "—"
  const property = data.property || "—"

  // Build items table only for checkout submissions
  const itemsHtml =
    data.items && data.items.length > 0
      ? `
    <h3>Items Enquired</h3>
    <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;width:100%">
      <tr style="background:#f5f5f5">
        <th align="left">Product</th>
        <th align="left">Price</th>
      </tr>
      ${data.items
        .map(
          (item: any) => `
        <tr>
          <td>${item?.name ?? "—"}</td>
          <td>${item?.price ?? "—"}</td>
        </tr>`
        )
        .join("")}
    </table>`
      : ""

  const res = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    replyTo: data.email,
    subject: data.items?.length
      ? "New Order Enquiry from Site"
      : "New Contact Form Submission",
    html: `
      <h2>${data.items?.length ? "New Order Enquiry" : "New Contact Form Submission"}</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${data.property ? `<p><strong>Property:</strong> ${property}</p>` : ""}
      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
      ${itemsHtml}
    `,
  })

  return res
}