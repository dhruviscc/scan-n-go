"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Star } from "lucide-react"

const testimonials = [
    {
        id: 1,
        quote:
            "The Vehicle QR feature gives my family extra peace of mind. If an emergency ever happens, the right people are notified immediately. It's a simple idea that adds real safety to every journey.",
        author: "Rahul Mehta",
        role: "Business Owner",
        stars: 5,
    },
    {
        id: 2,
        quote:
            "Scan n Go makes daily attendance quick and easy. The QR code is simple to use, and the attendance reports help our team keep track of everything.",
        author: "priya Jani",
        role: "Head of Design",
        stars: 4,
    },
    {
        id: 3,
        quote:
            "The emergency notification system gives our family peace of mind. A quick scan can notify us immediately whenever help is needed.",
        author: "Elena Rathod",
        role: "Art Director",
        stars: 5,
    },
    {
        id: 4,
        quote:
            "Scan n Go made vehicle and visitor alerts much easier for our community. It is a practical solution we use every day.",
        author: "Sarah Sharma",
        role: "Community Manager",
        stars: 3,
    },
    {
        id: 5,
        quote:
            "The Queue QR makes waiting simple and stress-free. You can see your turn in real time and get an instant notification when it’s your turn.",
        author: "Naomi Patel",
        role: "Operations Manager",
        stars: 5,
    },
]

export default function TestimonialsEditorial() {
    const [active, setActive] = useState(0)
    const [direction, setDirection] = useState<"next" | "prev" | "none">("none")
    const [isPaused, setIsPaused] = useState(false)

    const handleChange = (newIndex: number, dir: "next" | "prev") => {
        setDirection(dir)
        setActive(newIndex)
    }


    const handleNext = () => {
        const newIndex =
            active === testimonials.length - 1 ? 0 : active + 1

        handleChange(newIndex, "next")
    }

    const current = testimonials[active]

    const variants = {
        enter: (direction: "next" | "prev") => ({
            x: direction === "next" ? 300 : -300,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: "next" | "prev") => ({
            zIndex: 0,
            x: direction === "prev" ? 300 : -300,
            opacity: 0,
            scale: 0.8,
        }),
    };

    useEffect(() => {
        if (isPaused) return

        const timer = window.setInterval(() => {
            handleNext()
        }, 5000)

        return () => window.clearInterval(timer)
    }, [active, isPaused])

    return (
        <section
            className=" relative  w-full  overflow-hidden  px-4  py-16 sm:px-6 sm:py-20 md:px-10 lg:py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* ================= BACKGROUND ================= */}

            {/* Huge outlined text */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
                <h2
                    className=" flex
            flex-col
            items-center
            justify-center
            gap-1
       
            text-center
            font-black
            
            leading-[2]
            tracking-[-0.06em]
            text-transparent
            text-[100px]
            sm:text-[165px]
            md:text-[220px]
            lg:text-[200px]
        "
                    style={{
                        WebkitTextStroke: "2px rgba(124, 58, 237, 0.15)",
                    }}
                >
                    <span>FEED</span>
                    <span>BACK</span>
                </h2>
            </div>

            {/* subtle background glow */}
            <div className="pointer-events-none absolute left-[10%] top-[15%] h-40 w-40 rounded-full bg-white/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-52 w-52 rounded-full bg-violet-300/20 blur-3xl" />

            {/* ================= MAIN ================= */}
            <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl items-center justify-center px-4 sm:px-6 ">
                <div className="relative w-full max-w-6xl transition-all duration-500 ">

                    {/* ================= HEART BADGE ================= */}

                    <div className=" absolute  -left-2 -top-7 z-30  flex  h-[70px]  w-[105px]  items-center  justify-center  rounded-[18px]  bg-violet-600  shadow-[0_18px_35px_rgba(124,58,237,0.28)]  sm:-right-5 sm:left-auto  sm:-top-8  sm:h-[72px] sm:w-[105px]  "
                    >
                        {/* Badge Pointer */}
                        <div
                            className="absolute -bottom-[14px] left-1/2 h-7 w-7 -translate-x-1/2 rotate-45 bg-violet-600"
                        />
                        <Heart
                            fill="white"
                            strokeWidth={0}
                            className="relative z-10 h-9 w-9 text-white sm:h-10 sm:w-10"
                        />
                    </div>

                    {/* ================= TESTIMONIAL CARD ================= */}

                    <div
                        className="
        relative overflow-visible
        rounded-[28px]
        px-6 pb-7 
        sm:rounded-[30px]
        sm:px-10 sm:pb-9 sm:pt-10
        md:px-16 md:pb-10 md:pt-5
    "
                        style={{ minHeight: "370px" }}
                    >
                        <div
                            className="mx-auto max-w-4xl text-center"
                        >
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={active}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 250, damping: 25 },
                                        scale: { duration: 0.3 },
                                        opacity: { duration: 0.2 },
                                    }}
                                    className=" absolute inset-x-0 top-0 rounded-[28px]  border border-violet-200/60 bg-gradient-to-br  from-white  via-violet-300/30 to-indigo-300/50 px-6 pb-7 pt-9 shadow-[0_20px_50px_rgba(99,102,241,0.14)] backdrop-blur-xl sm:px-10 sm:pb-9 sm:pt-10 md:px-16 md:pb-10 md:pt-5  "
                                >
                                    {/* ================= QUOTE ICON ================= */}
                                    <div className="mb-5 flex items-center justify-center">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-50">
                                            <span className="text-3xl font-black leading-none text-violet-600 mt-3">
                                                “
                                            </span>
                                        </div>
                                    </div>

                                    {/* ================= QUOTE ================= */}
                                    <p className="mx-auto max-w-[780px] text-center text-[16px] font-medium leading-[1.65] tracking-[-0.01em] text-slate-700 sm:text-[18px] sm:leading-[1.65] md:text-[20px] md:leading-[1.6]">
                                        {current.quote}
                                    </p>

                                    {/* ================= DIVIDER ================= */}
                                    <div className="mx-auto my-7 h-px w-full max-w-[620px] bg-gradient-to-r from-transparent via-violet-100 to-transparent" />

                                    {/* ================= USER ================= */}
                                    <div className="flex flex-col items-center justify-center">
                                        {/* Stars */}
                                        <div className="mb-3 flex items-center justify-center gap-1.5">
                                            {Array.from({
                                                length: current.stars,
                                            }).map((_, index) => (
                                                <Star
                                                    key={index}
                                                    fill="#facc15"
                                                    strokeWidth={0}
                                                    className="h-[17px] w-[17px] text-yellow-400 sm:h-[19px] sm:w-[19px]"
                                                />
                                            ))}
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-[19px] font-bold leading-tight tracking-[-0.03em] text-slate-800 sm:text-[21px] md:text-[20px]">
                                            {current.author}
                                        </h3>

                                        {/* Role */}
                                        <p className="mt-1.5 text-[13px] font-medium text-slate-500 sm:text-sm">
                                            {current.role}
                                        </p>
                                    </div>
                                        <div className="flex items-center gap-2.5 sm:gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleChange(index, index > active ? "next" : "prev")}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    className="group flex h-6 items-center"
                                >
                                    <span
                                        className={` block  h-[3px] rounded-full transition-all  duration-300

                                ${index === active
                                                ? "w-9 bg-violet-600 sm:w-10"
                                                : "w-4 bg-violet-200 group-hover:w-6 group-hover:bg-violet-400 sm:w-5"
                                            }
                            `}
                                    />
                                </button>
                            ))}

                            <span
                                className="  ml-1 text-[10px]  font-bold tracking-[0.16em]  text-violet-700 sm:ml-2 sm:text-xs sm:tracking-[0.18em]"
                            >
                                {String(active + 1).padStart(2, "0")} /{" "}
                                {String(testimonials.length).padStart(2, "0")}
                            </span>
                        </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                  
                </div>
            </div>
        </section>
    )
}