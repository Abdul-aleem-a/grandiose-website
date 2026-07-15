// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/sendEmail"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    // body has: name, email, phone, address, items
    await sendContactEmail(body)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Checkout email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}