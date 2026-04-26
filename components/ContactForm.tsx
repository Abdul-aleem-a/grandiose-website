"use client"

import { useState } from "react"

interface ContactFormProps {
    onSubmit?: (data: any) => void
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: "",
        property: "",
        message: "",
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setLoading(true)

        await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        })

        setLoading(false)

        alert("Message sent successfully!")

        if (onSubmit) {
            onSubmit(form)
        }

        setForm({
            name: "",
            mobile: "",
            email: "",
            property: "",
            message: "",
        })
    }

    return (
        <main className="bg-white rounded-xl p-8 shadow-lg border border-transparent">
            <h2 className="text-2xl font-semibold text-[#2B2B2B] mb-2">Request a Consultation</h2>
            <p className="text-sm text-[#8A8A8A] mb-6">Share a few details and we'll get back to you to schedule an appointment.</p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-[#2B2B2B]">Name *</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="mt-2 w-full rounded-xl p-3 bg-[#F7F6F2] border border-transparent focus:border-[#C9A24D] outline-none shadow-sm transition"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-[#2B2B2B]">Mobile *</label>
                    <input
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        required
                        placeholder="Mobile number"
                        className="mt-2 w-full rounded-xl p-3 bg-[#F7F6F2] border border-transparent focus:border-[#C9A24D] outline-none shadow-sm transition"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-[#2B2B2B]">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        data-lpignore="true"
                        placeholder="Email address"
                        className="mt-2 w-full rounded-xl p-3 bg-[#F7F6F2] border border-transparent focus:border-[#C9A24D] outline-none shadow-sm transition"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-[#2B2B2B]">Property Name *</label>
                    <input
                        name="property"
                        value={form.property}
                        onChange={handleChange}
                        required
                        placeholder="Project / Property"
                        className="mt-2 w-full rounded-xl p-3 bg-[#F7F6F2] border border-transparent focus:border-[#C9A24D] outline-none shadow-sm transition"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="text-sm font-medium text-[#2B2B2B]">Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="mt-2 w-full rounded-xl p-3 bg-[#F7F6F2] border border-transparent focus:border-[#C9A24D] outline-none shadow-sm transition resize-none"
                    />
                </div>

                <div className="md:col-span-2 flex items-center justify-between gap-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="luxury-green hover:bg-[#0a2820] text-white px-8 py-3 rounded-xl transition shadow-md font-medium disabled:opacity-75"
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>

                    <p className="text-sm text-[#8A8A8A]">*Appointment is required to serve you better*</p>
                </div>
            </form>
        </main>
    )
}