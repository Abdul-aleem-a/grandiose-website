// components/GalleryViewer.tsx
"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryViewerProps {
    images: string[]
    title: string
}

export default function GalleryViewer({ images, title }: GalleryViewerProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [mounted, setMounted] = useState(false)

    // Check if component is mounted (client-side)
    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const openGallery = () => {
        setIsOpen(true)
        setCurrentIndex(0)
    }

    const closeGallery = () => {
        setIsOpen(false)
    }

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return
            if (e.key === "Escape") closeGallery()
            if (e.key === "ArrowLeft") goToPrevious()
            if (e.key === "ArrowRight") goToNext()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, currentIndex])

    const modalContent = isOpen ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center animate-in fade-in duration-300">
            {/* Backdrop with Blur */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={closeGallery}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">

                {/* Header */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-6 z-20">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="text-white">
                            <h2 className="text-2xl md:text-3xl font-serif">{title}</h2>
                            <p className="text-sm text-gray-300 mt-1">
                                {currentIndex + 1} / {images.length}
                            </p>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeGallery}
                            className="text-white hover:text-[#C9A24D] transition-colors p-2 hover:bg-white/10 rounded-full"
                            aria-label="Close gallery"
                        >
                            <X size={32} />
                        </button>
                    </div>
                </div>

                {/* Main Image Container */}
                <div className="relative w-full max-w-6xl h-[70vh] flex items-center justify-center">

                    {/* Previous Button */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 md:left-4 text-white hover:text-[#C9A24D] transition-colors z-30 p-2 hover:bg-white/10 rounded-full"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={40} strokeWidth={2.5} />
                    </button>

                    {/* Image */}
                    <div className="relative w-full h-full">
                        <Image
                            src={images[currentIndex]}
                            alt={`${title} - Image ${currentIndex + 1}`}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute right-2 md:right-4 text-white hover:text-[#C9A24D] transition-colors z-30 p-2 hover:bg-white/10 rounded-full"
                        aria-label="Next image"
                    >
                        <ChevronRight size={40} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 z-20">
                    <div className="max-w-7xl mx-auto overflow-x-auto">
                        <div className="flex gap-3 justify-center min-w-max px-4">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                                        ? "ring-4 ring-[#C9A24D] scale-110 opacity-100"
                                        : "opacity-50 hover:opacity-75 hover:scale-105"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={openGallery}
                className="bg-[#C9A24D] text-white px-5 py-2 rounded-md hover:opacity-90 transition"
            >
                View More
            </button>

            {/* Render modal in portal to body */}
            {mounted && modalContent && createPortal(modalContent, document.body)}
        </>
    )
}