import { NextResponse } from "next/server"
import { sendContactEmail } from "@/lib/sendEmail"

export async function POST(req: Request) {
    try {
        const data = await req.json()

        await sendContactEmail({
            name: data.name,
            mobile: data.phone,
            email: data.email,
            property: data.address,
            message: `
Items:

${data.items
                    .map(
                        (item: any) =>
                            `${item.name} - ${item.price} - ${item.heroImage}`
                    )
                    .join("<br/>")}
      `,
        })

        return NextResponse.json({ success: true })
    } catch {
        return NextResponse.json(
            { success: false },
            { status: 500 }
        )
    }
}