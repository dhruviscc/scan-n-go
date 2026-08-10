"use client";

import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal";
import { TypeAnimation } from "react-type-animation";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { CircularCarousel } from "@/components/ui/circular-carousel";
import {
    Book, Check, Eye, Rocket, Fingerprint,
    Globe,
    Layers,
    ShieldCheck,
    Target,
    Users,
    Bell,
} from "lucide-react";

import { motion, Variants } from "framer-motion";

const carouselItems = [
    {
        id: "1",
        title: "Innovation",
        description: "Building smarter QR solutions that simplify everyday experiences through continuous innovation.",

    },
    {
        id: "2",
        title: "Security",
        description: "Protecting people, data, and digital interactions with secure and reliable technology.",

    },
    {
        id: "3",
        title: "Customer First",
        description: "Putting our users at the center by designing solutions that meet their real-world needs.",

    },
    {
        id: "4",
        title: "Simplicity",
        description: "Creating easy QR experiences that are fast, easy to use, and accessible to everyone.",

    },
    {
        id: "5",
        title: "Reliability",
        description: "Delivering dependable performance and consistent experiences you can trust every day.",

    },

];

const benefits = [
    {
        icon: ShieldCheck,
        label: "Enhanced Security",
        color: "from-emerald-400 to-emerald-600",
        bgColor: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
    {
        icon: Target,
        label: "Accurate",
        color: "from-orange-400 to-orange-600",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-500",
    },
    {
        icon: Bell,
        label: "Real-Time Notification",
        color: "from-rose-400 to-rose-600",
        bgColor: "bg-rose-50",
        iconColor: "text-rose-500",
    },
    {
        icon: Fingerprint,
        label: "Quick Entry",
        color: "from-amber-400 to-amber-600",
        bgColor: "bg-amber-50",
        iconColor: "text-amber-500",
    },
    {
        icon: Globe,
        label: "Multilingual Support",
        color: "from-blue-400 to-blue-600",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-500",
    },
    {
        icon: Users,
        label: "User-Friendly",
        color: "from-pink-400 to-pink-600",
        bgColor: "bg-pink-50",
        iconColor: "text-pink-500",
    },
    {
        icon: Layers,
        label: "Multi Function",
        color: "from-cyan-400 to-cyan-600",
        bgColor: "bg-cyan-50",
        iconColor: "text-cyan-500",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};


export default function AboutPage() {
    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-20 sm:py-28">

                <div className="pointer-events-none absolute inset-0 opacity-40">
                    <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300 blur-3xl" />
                    <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-indigo-300 blur-3xl" />
                </div>
                <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-6 lg:px-8">

                    {/* Center Content */}
                    <div className="max-w-4xl mt-10">

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Transforming Everyday Access with {" "}
                            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                                <TypeAnimation
                                    sequence={[
                                        "Smart QR Solutions",
                                        2000,


                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    cursor={true}
                                />
                            </span>
                        </h1>
                        <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 max-w-3xl mx-auto">
                            Scan n Go is an intelligent QR platform that simplifies visitor
                            management, secure access, digital networking, queue management,
                            vehicle identification, and workplace operations through one
                            seamless experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story + Purpose layout: left/right cards with center image */}

            <section className="py-20 sm:py-24 bg-slate-50">
                {/* fviolet Blob */}
                <div className="absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-500/25 via-fuchsia-400/15 to-transparent blur-[90px] animate-blob-one" />
                {/* Pink Glow */}
                <div className="absolute bottom-[-140px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-400/18 via-violet-300/12 to-transparent blur-[100px] animate-blob-three" />
                {/* Cyan Blob */}
                <div className="absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-300/15 to-transparent blur-[80px] animate-blob-two" />

                <ScrollReveal className="max-w-2xl mx-auto text-center mb-16">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mt-2">

                        Creating Smarter   {" "}
                        {" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                            Connection
                        </span>
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-relaxed text-slate-500">
                        Driven by innovation, our mission is to build smarter digital experiences
                        that enhance security, simplify operations, and make every QR scan
                        meaningful.
                    </p>
                </ScrollReveal>
                <div className="max-w-[1580px] mx-auto px-5 sm:px-6 lg:px-8">

                    <div className="grid gap-8 md:grid-cols-3 items-center">

                        {/* Left column: Our Story + Our Goal */}
                        <div className="space-y-10">
                            <ScrollReveal>
                                <div
                                    className="group relative w-full overflow-hidden rounded-3xl border border-white/70 bg-white/55 p-5 sm:p-7 lg:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-200/80 hover:bg-white/65 hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)] "
                                >

                                    {/* Glass Highlight */}
                                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-white/20 to-violet-100/10 opacity-80" />

                                    {/* Top Glow */}
                                    <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-violet-400/15 blur-3xl transition-all duration-700 group-hover:bg-violet-400/25 group-hover:scale-125" />

                                    {/* Bottom Glow */}
                                    <div className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl" />

                                    {/* Glass Border Shine */}
                                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">

                                        {/* Premium Icon */}
                                        <div className="relative shrink-0">

                                            <div
                                                className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_15px_35px_rgba(124,58,237,0.30)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-[0_20px_45px_rgba(124,58,237,0.40)]"
                                            >
                                                <Book
                                                    size={26}
                                                    strokeWidth={2.2}
                                                    className="text-white sm:w-7 sm:h-7"
                                                />

                                                {/* Icon Inner Shine */}
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-transparent to-transparent"
                                                />
                                            </div>


                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">

                                            <h4
                                                className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900"
                                            >
                                                Our Story
                                            </h4>

                                            {/* Accent Line */}
                                            <div
                                                className="mt-3 h-1 w-12 sm:w-14 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-20"
                                            />

                                            <p
                                                className="mt-4 sm:mt-5 text-sm sm:text-[15px] leading-6 sm:leading-7 text-slate-600"
                                            >
                                                Everyday access management is often slow, manual, and
                                                inefficient. We created Scan n Go to replace traditional
                                                processes with secure QR-powered technology that makes
                                                check-ins, visitor management, and digital interactions
                                                simple, fast, and reliable.
                                            </p>

                                        </div>

                                    </div>

                                    {/* Bottom Glass Reflection */}
                                    <div
                                        className="pointer-events-none absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent"
                                    />

                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div
                                    className="group relative w-full overflow-hidden rounded-3xl border border-white/70 bg-white/55 p-5 sm:p-7 lg:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-200/80 hover:bg-white/65 hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                                >

                                    {/* Glass Highlight */}
                                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-white/20 to-violet-100/10 opacity-80" />

                                    {/* Top Glow */}
                                    <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-violet-400/15 blur-3xl transition-all duration-700 group-hover:bg-violet-400/25 group-hover:scale-125" />

                                    {/* Bottom Glow */}
                                    <div className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl" />

                                    {/* Glass Border Shine */}
                                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                                    {/* Main Content */}
                                    <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">

                                        {/* Premium Icon */}
                                        <div className="relative shrink-0">

                                            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_15px_35px_rgba(124,58,237,0.30)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-[0_20px_45px_rgba(124,58,237,0.40)]">

                                                <Check
                                                    size={26}
                                                    strokeWidth={2.2}
                                                    className="text-white sm:h-7 sm:w-7"
                                                />

                                                {/* Icon Inner Shine */}
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-transparent to-transparent"
                                                />
                                            </div>


                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">

                                            <h4
                                                className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900"
                                            >
                                                Our Goal
                                            </h4>

                                            {/* Accent Line */}
                                            <div
                                                className="mt-3 h-1 w-12 sm:w-14 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-20"
                                            />

                                            <p
                                                className="mt-4 sm:mt-5 text-sm sm:text-[15px] leading-6 sm:leading-7 text-slate-600"
                                            >
                                                To simplify secure access and digital interactions through
                                                intelligent QR technology, enabling faster, safer, and
                                                smarter experiences for individuals, businesses, and
                                                communities.
                                            </p>

                                        </div>

                                    </div>

                                    {/* Bottom Glass Reflection */}
                                    <div
                                        className="pointer-events-none absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent"
                                    />

                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Center image card */}
                        <div className="flex items-center justify-center">
                            <ScrollReveal>
                                <div className="relative flex items-center justify-center">


                                    {/* Card */}
                                    <div
                                        className="relative overflow-hidden rounded-2xl border border-white/100 bg-white/80 p-5 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_50px_120px_rgba(124,58,237,0.30)]"
                                    >
                                        <div className="relative w-full max-w-[340px] h-auto aspect-[34/52] flex items-center justify-center">

                                            <Image
                                                src="/images/about.png"
                                                alt="Scan n Go "
                                                width={340}
                                                height={520}
                                                priority
                                                className=" object-cover drop-shadow-[0_35px_70px_rgba(124,58,237,0.35)] transition-all rounded-xl duration-500 hover:scale-105"
                                            />

                                        </div>
                                    </div>

                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right column: Vision + Mission */}
                        <div className="space-y-10">
                            <ScrollReveal>
                                <div
                                    className=" group relative w-full overflow-hidden  rounded-3xl border border-white/70 bg-white/55 p-5 sm:p-7 lg:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.10)]  transition-all duration-500 hover:-translate-y-1 hover:border-violet-200/80 hover:bg-white/65 hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                                >

                                    {/* Glass Highlight */}
                                    <div
                                        className=" pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-white/20 to-violet-100/10 opacity-80"
                                    />

                                    {/* Top Glow */}
                                    <div className=" pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-violet-400/15 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-violet-400/25" />

                                    {/* Bottom Glow */}
                                    <div className=" pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl" />

                                    {/* Glass Border Shine */}
                                    <div className=" pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                                    {/* Main Content */}
                                    <div className=" relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6"   >

                                        {/* Premium Icon */}
                                        <div className="relative shrink-0">

                                            <div
                                                className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_15px_35px_rgba(124,58,237,0.30)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-[0_20px_45px_rgba(124,58,237,0.40)]"
                                            >

                                                <Eye
                                                    size={26}
                                                    strokeWidth={2.2}
                                                    className="text-white sm:h-7 sm:w-7"
                                                />

                                                {/* Icon Inner Shine */}
                                                <div
                                                    className="  pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-transparent to-transparent"
                                                />
                                            </div>

                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">

                                            <h4
                                                className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900"
                                            >
                                                Our Vision
                                            </h4>

                                            {/* Accent Line */}
                                            <div
                                                className="mt-3 h-1 w-12 sm:w-14 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-20"
                                            />

                                            <p
                                                className="mt-4 sm:mt-5 text-sm sm:text-[15px] leading-6 sm:leading-7 text-slate-600"
                                            >
                                                To become the trusted global platform for QR-powered access
                                                management, connecting people, vehicles, visitors, and
                                                organisations through seamless, secure, and innovative
                                                digital solutions.
                                            </p>

                                        </div>

                                    </div>

                                    {/* Bottom Glass Reflection */}
                                    <div
                                        className="pointer-events-none absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent"
                                    />

                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div
                                    className="group relative w-full overflow-hidden rounded-3xl border border-white/70 bg-white/55 p-5 sm:p-7 lg:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-200/80 hover:bg-white/65 hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                                >

                                    {/* Glass Highlight */}
                                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-white/20 to-violet-100/10 opacity-80" />

                                    {/* Background Glow */}
                                    <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-violet-400/15 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-violet-400/25" />

                                    {/* Bottom Glow */}
                                    <div className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl" />

                                    {/* Glass Border Shine */}
                                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                                    {/* Main Content */}
                                    <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">

                                        {/* Premium Icon */}
                                        <div className="relative shrink-0">

                                            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_15px_35px_rgba(124,58,237,0.30)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-[0_20px_45px_rgba(124,58,237,0.40)]">

                                                <Rocket
                                                    size={26}
                                                    strokeWidth={2.2}
                                                    className="text-white sm:h-7 sm:w-7"
                                                />

                                                {/* Icon Inner Shine */}
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-transparent to-transparent"
                                                />
                                            </div>


                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">

                                            <h4
                                                className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900 mb-3"
                                            >
                                                Our Mission
                                            </h4>

                                            {/* Accent Line */}
                                            <div
                                                className="mt-3 h-1 w-12 sm:w-14 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-20"
                                            />

                                            <p
                                                className="mt-4 sm:mt-5 text-sm sm:text-[15px] leading-6 sm:leading-7 text-slate-600"
                                            >
                                                To deliver reliable QR-based solutions that enhance security,
                                                automate visitor management, streamline operations, and
                                                provide real-time notifications for modern workplaces and
                                                residential communities.
                                            </p>

                                        </div>

                                    </div>

                                    {/* Bottom Glass Reflection */}
                                    <div
                                        className="pointer-events-none absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent"
                                    />

                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="relative mx-auto overflow-hidden flex bg-white justify-center items-center py-20 sm:py-24"
                style={{ background: "linear-gradient(150deg,#f8f7ff 0%,#f0ebff 30%,#e4dcff 65%,#c8b6ff 100%)" }}
            >
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>

                    {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
                    <AnimatedBackground
                        interactive={true}
                        density={80}
                        particleColorLight="99, 102, 241"
                        particleColorDark="168, 85, 247"
                    />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-40">
                    <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300 blur-3xl" />
                    <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-indigo-300 blur-3xl" />
                </div>
                {/* Colorful dynamic background lights */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-violet-400/25 blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-300/35 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
                    <div className="absolute top-[35%] left-[45%] w-[300px] h-[300px] rounded-full bg-blue-300/20 blur-[80px]" />
                </div>

                <div className="relative px-4 sm:px-6 lg:px-12">
                    <div className="flex flex-col items-center text-center">

                        <ScrollReveal>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-3">

                                Our Core
                                {" "}
                                <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                                    Values
                                </span>
                            </h3>

                            <p className="text-slate-500 mt-4 mb-8 max-w-2xl text-base sm:text-lg leading-relaxed">
                                At Scan n Go, our values shape every decision we make.
                                We focus on innovation, security, reliability, and user-first experiences to deliver smart QR
                                solutions that people can trust every day.
                            </p>
                        </ScrollReveal>

                        <div className="mt-30 flex w-full justify-center">

                            <div className="relative">
                                <CircularCarousel items={carouselItems} />
                            </div>

                        </div>

                    </div>
                </div>

            </section>


            {/* ════════════════ BENEFITS OF SCAN N GO ════════════════ */}
            <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
                {/* Immersive Background */}
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-10" />

                    <AnimatedBackground
                        interactive={true}
                        density={80}
                        particleColorLight="99, 102, 241"
                        particleColorDark="168, 85, 247"
                    />
                </div>

                {/* Main Container */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                    <motion.div
                        className="relative overflow-hidden rounded-2xl sm:rounded-[28px] border border-white/70 p-5 sm:p-8 lg:p-12 xl:p-14 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl"
                        style={{
                            backgroundImage: "url('/images/benefit_bg.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "top center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: "#e7e2f7",
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >

                        {/* Glass Overlay */}
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/55 via-white/25 to-violet-100/30"
                        />

                        {/* Top Glow */}
                        <div
                            className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl"
                        />

                        {/* Bottom Glow */}
                        <div
                            className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-indigo-400/15 blur-3xl"
                        />

                        {/* Content */}
                        <div className="relative z-10">

                            {/* Section Heading */}
                            <motion.div
                                className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12"
                            >
                                <h2
                                    className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
                                >
                                    <span className="border-b-2 border-indigo-500 pb-1">
                                        Benefits
                                    </span>{" "}
                                    of Scan n Go
                                </h2>

                                <p
                                    className="mx-auto mt-4 max-w-2xl px-1 text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg"
                                >
                                    Scan N Go enhances security and convenience by providing
                                    seamless entry management through QR code scanning and live
                                    face verification, ensuring only authorized access.
                                </p>
                            </motion.div>

                            {/* Benefits Grid */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                                {benefits.slice(0, 3).map((benefit) => (
                                    <motion.div
                                        key={benefit.label}
                                        className="group flex min-h-[125px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/80 bg-white/70 p-3 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 sm:min-h-[140px] sm:gap-3 sm:p-5 hover:-translate-y-1.5 hover:border-violet-200 hover:bg-white/85 hover:shadow-[0_20px_40px_rgba(124,58,237,0.12)]"
                                        variants={itemVariants}
                                    >
                                        {/* Icon */}
                                        <div
                                            className={`flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${benefit.bgColor} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                                        >
                                            <benefit.icon
                                                size={22}
                                                className={benefit.iconColor}
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                        {/* Label */}
                                        <span
                                            className="max-w-full text-xs font-semibold leading-4 text-slate-800 sm:text-[15px] sm:leading-5"
                                        >
                                            {benefit.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Benefits */}
                            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                                {benefits.slice(3).map((benefit) => (
                                    <motion.div
                                        key={benefit.label}
                                        className="group flex min-h-[125px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/80 bg-white/70 p-3 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 sm:min-h-[140px] sm:gap-3 sm:p-5 hover:-translate-y-1.5 hover:border-violet-200 hover:bg-white/85 hover:shadow-[0_20px_40px_rgba(124,58,237,0.12)]"
                                        variants={itemVariants}
                                    >
                                        {/* Icon */}
                                        <div
                                            className={`flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${benefit.bgColor} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                                        >
                                            <benefit.icon
                                                size={22}
                                                className={benefit.iconColor}
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                        {/* Label */}
                                        <span
                                            className="max-w-full text-xs font-semibold leading-4 text-slate-800 sm:text-[15px] sm:leading-5"
                                        >
                                            {benefit.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
