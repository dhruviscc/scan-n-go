"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
    {
        id: 1,
        quote: "The Vehicle QR feature gives my family extra peace of mind. If an emergency ever happens, the right people are notified immediately. It's a simple idea that adds real safety to every journey.",
        author: " Rahul Mehta",
        role: "Business Owner",
        stars: 5,
    },
    {
        id: 2,
        quote: "Our QR attendance solution makes daily entry simple, secure, and reliable. The reporting dashboard is a huge help for our team.",
        author: "Marcus Webb",
        role: "Head of Design",
        stars: 4,
    },
    {
        id: 3,
        quote: "The emergency notification system gives our family peace of mind. A quick scan can notify us immediately whenever help is needed.",
        author: "Elena Voss",
        role: "Art Director",

        stars: 5,
    },
    {
        id: 4,
        quote: "Scan n Go made vehicle and visitor alerts much easier for our community. It is a practical solution we use every day.",
        author: "Sarah Jenkins",
        role: "Art Director",

        stars: 3,
    },
    {
        id: 5,
        quote: "The platform is simple for users and powerful for admins. The instant notification flow has been especially valuable.",
        author: "Naomi Patel",
        role: "Art Director",

        stars: 5,
    },
]

export default function TestimonialsEditorial() {
    const [active, setActive] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    const handleChange = (index: number) => {
        if (index === active || isTransitioning) return
        setIsTransitioning(true)
        setTimeout(() => {
            setActive(index)
            setTimeout(() => setIsTransitioning(false), 50)
        }, 300)
    }

    const handlePrev = () => {
        const newIndex = active === 0 ? testimonials.length - 1 : active - 1
        handleChange(newIndex)
    }

    const handleNext = () => {
        const newIndex = active === testimonials.length - 1 ? 0 : active + 1
        handleChange(newIndex)
    }

    const current = testimonials[active]

    useEffect(() => {
        if (isPaused) return
        const timer = window.setInterval(() => {
            handleNext()
        }, 5000)

        return () => {
            window.clearInterval(timer)
        }
    }, [active, isPaused])

    return (
        <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full max-w-5xl mx-auto px-8 py-10 rounded-[32px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_25px_80px_rgba(15,23,42,0.18),0_10px_30px_rgba(99,102,241,0.15)]

                before:absolute
                before:inset-0
                before:rounded-[32px]
                before:bg-gradient-to-br
                before:from-white/30
                before:via-transparent
                before:to-transparent
                before:pointer-events-none

                after:absolute
                after:-bottom-6
                after:left-1/2
                after:-translate-x-1/2
                after:w-[90%]
                after:h-8
                after:bg-indigo-500/20
                after:blur-3xl
                after:rounded-full
                after:-z-10

                hover:-translate-y-3
                hover:scale-[1.015]
                hover:shadow-[0_40px_100px_rgba(99,102,241,0.28),0_20px_50px_rgba(0,0,0,0.18)]

                transition-all
                duration-500
                ease-out    
            "
        >            <div
            className={` group cursor-default transition-all duration-300 delay-100 ${isTransitioning ? "opacity-0" : "opacity-100"
                }`}
        >
                <div className="flex items-center justify-end gap-4">

                    <div>
                        <div className="flex items-center gap-1 mb-2">
                            {Array.from({ length: current.stars }).map((_, index) => (
                                <Star key={index} className="h-4 w-4 text-amber-400" />
                            ))}
                        </div>
                        <p className="font-medium text-foreground">{current.author}</p>
                        <p className="text-sm text-muted-foreground">
                            {current.role}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-8">

                <span
                    className="text-[120px] font-light leading-none text-foreground/10 select-none transition-all duration-500"
                    style={{ fontFeatureSettings: '"tnum"' }}
                >
                    {String(active + 1).padStart(2, "0")}
                </span>


                <div className="flex-1 pt-6">
                    <blockquote
                        className={`text-2xl md:text-2xl font-light leading-relaxed text-foreground tracking-tight transition-all duration-300 ${isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                            }`}
                    >
                        {current.quote}
                    </blockquote>


                </div>
            </div>

            <div className="mt-16 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        {testimonials.map((_, index) => (
                            <button key={index} onClick={() => handleChange(index)} className="group relative py-4">
                                <span
                                    className={`block h-px transition-all duration-500 ease-out ${index === active
                                        ? "w-12 bg-foreground"
                                        : "w-6 bg-foreground/20 group-hover:w-8 group-hover:bg-foreground/40"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground tracking-widest uppercase">
                        {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={handlePrev}
                        className="p-2 rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2 rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
