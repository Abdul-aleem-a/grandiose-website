"use client"

import { useRef, useState } from "react"
import Image from "next/image"

export default function BeforeAfterSlider({
    before,
    after,
}: {
    before: string
    after: string
}) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [slider, setSlider] = useState(50)

    const handleMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percent = (x / rect.width) * 100

        setSlider(Math.min(Math.max(percent, 0), 100))
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={(e) => handleMove(e)}
            className="relative w-full h-[420px] overflow-hidden rounded-lg cursor-ew-resize"
        >
            {/* AFTER IMAGE */}
            <Image
                src={after}
                alt="After"
                fill
                className="object-cover"
            />

            {/* BEFORE IMAGE */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${slider}%` }}
            >
                <Image
                    src={before}
                    alt="Before"
                    fill
                    className="object-cover"
                />
            </div>

            {/* SLIDER LINE */}
            <div
                className="absolute top-0 bottom-0 w-[2px] bg-white"
                style={{ left: `${slider}%` }}
            />

            {/* SLIDER HANDLE */}
            <div
                className="absolute w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
                style={{
                    left: `${slider}%`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <div className="w-1 h-6 bg-gray-400"></div>
            </div>

            {/* LABELS */}
            <div className="absolute left-4 bottom-4 bg-black/60 px-3 py-1 text-white text-sm rounded">
                Before
            </div>

            <div className="absolute right-4 bottom-4 bg-black/60 px-3 py-1 text-white text-sm rounded">
                After
            </div>
        </div>
    )
}