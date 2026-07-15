// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/sendEmail"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    // body has: firstName, lastName, email, phone, message
    await sendContactEmail(body)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}