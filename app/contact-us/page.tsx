"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

import ContactInfo from "@/components/ContactInfo"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {

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

        setForm({
            name: "",
            mobile: "",
            email: "",
            property: "",
            message: "",
        })
    }

    return (
        <section className="bg-[#F7F6F2] min-h-screen pb-20">
            {/* HERO */}
            <section className="luxury-green py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-serif font-semibold">Get in Touch</h1>

                <div className="flex justify-center items-center gap-3 mt-4">
                    <span className="w-16 h-[2px] bg-[#C9A24D]" />
                    <span className="w-3 h-3 bg-[#C9A24D] rounded-full" />
                    <span className="w-16 h-[2px] bg-[#C9A24D]" />
                </div>

                <p className="text-[#8A8A8A] mt-4 max-w-2xl mx-auto">
                    We're here to help you craft interiors that reflect luxury and thoughtful design.
                </p>
            </section>

            {/* MAIN */}
            <div className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-8">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    )
}