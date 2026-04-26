import { NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/sendEmail"

export async function POST(req: Request) {

    try {

        const data = await req.json()

        await sendContactEmail(data)

        return NextResponse.json({ success: true })

    } catch (error) {

        return NextResponse.json(
            { success: false },
            { status: 500 }
        )

    }

}