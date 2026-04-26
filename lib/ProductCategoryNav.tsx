"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { productCategories } from "@/lib/productCategories"
import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function ProductCategoryNav() {
    const pathname = usePathname()

    const [isOpen, setIsOpen] = useState(false)

    const selectedCategory = productCategories.find(
        (cat) => pathname === `/products/${cat.slug}`
    )

    const [indicatorStyle, setIndicatorStyle] = useState({
        top: 0,
        height: 0,
        duration: 300
    })

    const navRef = useRef<HTMLDivElement>(null)
    const prevIndexRef = useRef<number>(-1)

    useEffect(() => {
        const selectedIndex = productCategories.findIndex(
            (cat) => pathname === `/products/${cat.slug}`
        )

        if (selectedIndex === -1 || !navRef.current) return

        const links = navRef.current.querySelectorAll("a")
        const selectedLink = links[selectedIndex] as HTMLElement

        if (!selectedLink) return

        const prevIndex = prevIndexRef.current
        const distance = Math.abs(selectedIndex - prevIndex)

        const duration = Math.min(700, 120 + distance * 120)

        setIndicatorStyle({
            top: selectedLink.offsetTop,
            height: selectedLink.offsetHeight,
            duration
        })

        prevIndexRef.current = selectedIndex
    }, [pathname])

    return (
        <>
            {/* MOBILE NAV */}
            <div className="lg:hidden sticky top-16 z-30">

                <div className="bg-white rounded-xl shadow-md overflow-hidden">

                    {/* Header */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                        w-full
                        flex
                        justify-between
                        items-center
                        px-4
                        py-3
                        font-serif
                        text-[#2B2B2B]
                        text-sm
                        "
                    >
                        {selectedCategory?.title}
                        <ChevronDown
                            size={18}
                            className={`
                                transition-transform
                                duration-300
                                ease-out
                                text-[#8A8A8A]
                                ${isOpen ? "rotate-180" : ""}
                                `}
                        />
                    </button>


                    {/* Animated Dropdown */}
                    <div
                        className={`
                            grid
                            transition-all
                            duration-300
                            ease-[cubic-bezier(.25,.8,.25,1)]
                            ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                            `}
                    >

                        <div className="overflow-hidden">

                            {productCategories.map((cat) => {

                                const href = `/products/${cat.slug}`
                                const selected = pathname === href

                                return (
                                    <Link
                                        key={cat.slug}
                                        href={href}
                                        scroll={false}
                                        onClick={() => setIsOpen(false)}
                                        className={`
                                            block
                                            px-4
                                            py-3
                                            text-sm
                                            border-t
                                            border-[#00000008]
                                            transition-colors
                                            duration-200
                                            font-sans
                                            ${selected
                                                ? "text-[#0F3D2E] font-medium"
                                                : "text-[#2B2B2B] hover:bg-[#C9A24D]/15"
                                            }
                                                `}
                                    >
                                        {cat.title}
                                    </Link>
                                )
                            })}

                        </div>

                    </div>

                </div>

            </div>


            {/* DESKTOP NAV */}
            <aside className="hidden lg:block bg-white rounded-xl shadow-md p-5 h-fit sticky top-24">

                <h3 className="font-serif text-lg mb-5 text-[#2B2B2B]">
                    Our Products
                </h3>

                <div ref={navRef} className="flex flex-col gap-2 relative">

                    {/* Gliding indicator */}
                    <div
                        className="absolute left-0 luxury-green rounded-md transition-transform ease-[cubic-bezier(.25,.8,.25,1)]"
                        style={{
                            transform: `translateY(${indicatorStyle.top}px)`,
                            height: `${indicatorStyle.height}px`,
                            width: "100%",
                            transitionDuration: `${indicatorStyle.duration}ms`
                        }}
                    />

                    {productCategories.map((cat) => {

                        const href = `/products/${cat.slug}`
                        const selected = pathname === href

                        return (
                            <Link
                                key={cat.slug}
                                href={href}
                                scroll={false}
                                className={`
                                    px-4
                                    py-3
                                    rounded-md
                                    text-sm
                                    transition-colors
                                    duration-200
                                    relative
                                    z-10
                                    ${selected
                                        ? "text-white font-medium"
                                        : "text-[#2B2B2B] hover:bg-[#C9A24D]/20 hover:text-[#0F3D2E]"
                                    }
                                        `}
                            >
                                {cat.title}
                            </Link>
                        )
                    })}

                </div>

            </aside>
        </>
    )
}