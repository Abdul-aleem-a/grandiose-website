import { Phone, Mail, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function ContactInfo() {
    return (
        <aside className="bg-white rounded-xl p-8 shadow-lg border border-transparent">
            <div className="flex items-start gap-4">
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-[#2B2B2B]">Contact Us</h2>
                    <div className="w-12 h-[2px] bg-[#C9A24D] mt-4 mb-6"></div>
                    <p className="text-[#8A8A8A] leading-relaxed">
                        Personal attention from concept to completion. Visit our studio or reach out — we'll respond within one business day.
                    </p>
                </div>

                <div className="hidden md:flex items-center">
                    <div className="rounded-full w-14 h-14 bg-[#F7F6F2] flex items-center justify-center border border-transparent shadow-sm">
                        <MapPin className="text-[#0F3D2E]" />
                    </div>
                </div>
            </div>

            <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F7F6F2] flex items-center justify-center text-[#0F3D2E] shadow-sm">
                        <Phone />
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-[#2B2B2B]">Call Us</h4>
                        <a href="tel:+919113054788" className="text-sm text-[#8A8A8A]">+91 9113054788</a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F7F6F2] flex items-center justify-center text-[#0F3D2E] shadow-sm">
                        <Mail />
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-[#2B2B2B]">Email</h4>
                        <a href="mailto:info@thegrandiose.in" className="text-sm text-[#8A8A8A]">info@thegrandiose.in</a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F7F6F2] flex items-center justify-center text-[#0F3D2E] shadow-sm">
                        <MapPin />
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-[#2B2B2B]">Visit</h4>
                        <p className="text-sm text-[#8A8A8A] max-w-xs">
                            Bizz Hub, A/7, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                    href="https://api.whatsapp.com/send?phone=919113054788&text=Hello%20The%20Grandiose%20Team.%20%0AI%20am%20interested%20to%20know%20more%20about%20your%20home%20interior%20and%20renovation%20services."
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-xl shadow-md hover:opacity-95 transition"
                >
                    <FaWhatsapp className="w-5 h-5" />
                    Enquire on WhatsApp
                </a>

                <a
                    href="/blogs"
                    className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-[#C9A24D] bg-transparent text-[#0F3D2E] shadow-sm hover:bg-[#F7F6F2] hover:border-[#0F3D2E] transition font-medium"
                >
                    View Our Blogs
                </a>
            </div>

            <p className="text-sm text-[#8A8A8A] mt-6">GSTIN : <span className="font-medium text-[#2B2B2B]">29BLYPN4387B1ZE</span></p>
        </aside>
    )
}