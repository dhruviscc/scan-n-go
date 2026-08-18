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
    QrCode,
} from "lucide-react";

import { motion, Variants } from "framer-motion";

const carouselItems = [
    {
        id: "1",
        title: "Security",
        description:
            "Keeping user information and digital interactions safe and protected.",
    },
    {
        id: "2",
        title: "Simplicity",
        description:
            "Making QR-based identification, communication, and everyday tasks easy for everyone.",
    },
    {
        id: "3",
        title: "Reliability",
        description:
            "Building solutions that people can depend on every day.",
    },
    {
        id: "4",
        title: "Innovation",
        description:
            "Creating better and smarter ways to use QR technology in everyday life.",
    },
    {
        id: "5",
        title: "Customer First",
        description:
            "Listening to our users and building solutions that solve their real needs.",
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
                {/* Background Image with Subtle Opacity Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                    style={{ backgroundImage: `url('/images/about-1.png')` }}
                />


               <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-violet-400/25 blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-300/35 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
                    <div className="absolute top-[35%] left-[45%] w-[300px] h-[300px] rounded-full bg-blue-300/20 blur-[80px]" />
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
                            Scan n Go is an Digital QR platform that simplifies visitor
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


                <div className="max-w-[1580px] mx-auto px-5 sm:px-6 lg:px-8 ">

                    {/* Our Story */}
                    <ScrollReveal>
                        <div
                            className="group relative w-full overflow-hidden rounded-3xl border border-white/70 bg-white/55 p-5 sm:p-7 lg:p-10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-200/80 hover:bg-white/65 hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                        >
                            {/* Glass Highlight */}
                            <div
                                className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-white/20 to-violet-100/10 opacity-80"
                            />

                            {/* Top Glow */}
                            <div
                                className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-violet-400/15 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-violet-400/25"
                            />

                            {/* Bottom Glow */}
                            <div
                                className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl  "
                            />

                            {/* Glass Border Shine */}
                            <div
                                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
                            />

                            {/* Main Two Column Layout */}
                            <div
                                className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
                            >

                                {/* ================= LEFT CONTENT ================= */}
                                <div className="min-w-0">

                                    {/* Header */}
                                    <div className="flex items-center gap-4 sm:gap-5">

                                        {/* Premium Icon */}
                                        <div className="relative shrink-0">
                                            <div
                                                className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_15px_35px_rgba(124,58,237,0.30)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-[0_20px_45px_rgba(124,58,237,0.40)]"
                                            >
                                                <Book
                                                    size={26}
                                                    strokeWidth={2.2}
                                                    className="text-white sm:h-7 sm:w-7"
                                                />

                                                {/* Icon Shine */}
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-transparent to-transparent"
                                                />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <div className="min-w-0">
                                            <h4
                                                className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-[26px]"
                                            >
                                                Our Story
                                            </h4>

                                            <div
                                                className="mt-2.5 h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-20"
                                            />
                                        </div>

                                    </div>

                                    {/* Description */}
                                    <div className="mt-6 sm:mt-7">

                                        <p
                                            className="text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7"
                                        >
                                            Scan n Go was created to make identification,
                                            communication, and everyday interactions simpler
                                            through QR technology. Different QR codes can be
                                            created for different needs, such as attendance,
                                            visitor entry, vehicle communication, meetings,
                                            contact sharing, and queue management.
                                        </p>

                                        <p
                                            className="mt-4 text-sm leading-6 text-slate-600 sm:mt-5 sm:text-[15px] sm:leading-7"
                                        >
                                            Each QR code can be linked to the required user
                                            information. When the QR is scanned, the relevant
                                            verified details can be accessed based on its
                                            purpose, helping people identify, connect,
                                            communicate, or complete an action quickly and easily.
                                        </p>

                                        <p
                                            className="mt-4 text-sm leading-6 text-slate-600 sm:mt-5 sm:text-[15px] sm:leading-7"
                                        >
                                            From workplaces and residential communities to
                                            vehicles, meetings, events, and personal use,
                                            Scan n Go brings these experiences together through
                                            one connected platform.
                                        </p>

                                    </div>

                                    {/* Core Concept */}
                                    <div
                                        className="mt-6 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/80 via-white/70 to-indigo-50/60 p-4 sm:mt-7 sm:p-5"
                                    >

                                        <p
                                            className="text-sm font-semibold leading-6 text-slate-800 sm:text-[15px]"
                                        >
                                            And this gives us a stronger core concept:
                                        </p>

                                        <ul
                                            className="mt-3 space-y-2 text-sm leading-6 text-slate-600 sm:text-[15px]"
                                        >
                                            <li className="flex items-start gap-2.5">
                                                <span
                                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"
                                                />
                                                <span>Different QR codes.</span>
                                            </li>

                                            <li className="flex items-start gap-2.5">
                                                <span
                                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"
                                                />
                                                <span>Different purposes.</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span
                                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"
                                                />
                                                <span>One connected identity platform.</span>
                                            </li>

                                           
                                        </ul>

                                    </div>

                                </div>


                                {/* ================= RIGHT VISUAL ================= */}
                                <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[380px] lg:min-h-[460px]">

                                    {/* Background Glow */}
                                    <div
                                        className="absolute h-52 w-52 rounded-full bg-violet-400/20 blur-3xl sm:h-72 sm:w-72"
                                    />

                                    {/* Decorative Ring */}
                                    <div
                                        className="absolute h-56 w-56 rounded-full border border-violet-200/50 sm:h-80 sm:w-80"
                                    />

                                    <div
                                        className="absolute h-44 w-44 rounded-full border border-indigo-200/40 sm:h-64 sm:w-64"
                                    />

                                    {/* Main Image Card */}
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


                                    {/* Floating QR Badge */}
                                    <div
                                        className="absolute bottom-8 left-2 z-20 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/85 px-3 py-2.5 shadow-[0_15px_35px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:bottom-10 sm:left-0"
                                    >
                                        <div
                                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-600"
                                        >
                                            <QrCode size={18} />
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-medium text-slate-500">
                                                Powered by
                                            </p>
                                            <p className="text-xs font-bold text-slate-800">
                                                Smart QR
                                            </p>
                                        </div>
                                    </div>

                                    {/* Floating Connected Badge */}
                                    <div
                                        className="absolute right-0 top-8 z-20 rounded-2xl border border-white/80 bg-white/85 px-3 py-2.5 shadow-[0_15px_35px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:right-2 sm:top-12"
                                    >
                                        <div className="flex items-center gap-2">

                                            <span
                                                className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]"
                                            />

                                            <span
                                                className="text-xs font-semibold text-slate-700"
                                            >
                                                Connected Platform
                                            </span>

                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* Bottom Reflection */}
                            <div
                                className="pointer-events-none absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent"
                            />

                        </div>
                    </ScrollReveal>

                    <div className="grid gap-8 md:grid-cols-3 items-start mt-8">
                        {/* goal */}
                        <ScrollReveal>
                            <div
                                className="group relative w-full overflow-hidden rounded-3xl border border-white/70 bg-white/55 p-5 sm:p-7 lg:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-200/80 hover:bg-white/65 hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                            >

                                {/* Glass Highlight */}
                                <div
                                    className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-white/20 to-violet-100/10 opacity-80"
                                />

                                {/* Top Glow */}
                                <div
                                    className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-violet-400/15 blur-3xl transition-all duration-700 group-hover:bg-violet-400/25 group-hover:scale-125"
                                />

                                {/* Bottom Glow */}
                                <div
                                    className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl"
                                />

                                {/* Glass Border Shine */}
                                <div
                                    className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
                                />

                                {/* Main Content */}
                                <div className="relative z-10 w-full">

                                    {/* Top: Icon + Heading */}
                                    <div className="flex w-full items-center gap-4 sm:gap-5">

                                        {/* Premium Icon */}
                                        <div className="relative shrink-0">
                                            <div
                                                className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_15px_35px_rgba(124,58,237,0.30)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-[0_20px_45px_rgba(124,58,237,0.40)]"
                                            >
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

                                        {/* Heading */}
                                        <div className="min-w-0">
                                            <h4
                                                className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl lg:text-2xl"
                                            >
                                                Our Goal
                                            </h4>

                                            {/* Accent Line */}
                                            <div
                                                className="mt-2.5 h-1 w-12 sm:w-14 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-20 "
                                            />
                                        </div>

                                    </div>

                                    {/* Bottom: Full Width Content */}
                                    <div className="mt-5 w-full sm:mt-6">
                                        <p
                                            className="w-full text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7"
                                        >
                                            To make Scan n Go a trusted digital identity platform where
                                            people can use QR-based solutions to identify themselves,
                                            share verified information, and connect with people, places,
                                            and services more easily.
                                        </p>
                                    </div>

                                </div>

                                {/* Bottom Glass Reflection */}
                                <div
                                    className="
                pointer-events-none absolute bottom-0
                left-1/4 right-1/4 h-px
                bg-gradient-to-r
                from-transparent via-violet-300/40 to-transparent
            "
                                />

                            </div>
                        </ScrollReveal>

                        {/* Vision */}

                        <ScrollReveal>
                            <div
                                className="  group relative w-full overflow-hidden rounded-3xl border border-white/70 bg-white/55 p-5 sm:p-7 lg:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-200/80 hover:bg-white/65 hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                            >

                                {/* Glass Highlight */}
                                <div
                                    className=" pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-white/20 to-violet-100/10 opacity-80"
                                />

                                {/* Top Glow */}
                                <div
                                    className="  pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-violet-400/15 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-violet-400/25"
                                />

                                {/* Bottom Glow */}
                                <div
                                    className=" pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl"
                                />

                                {/* Glass Border Shine */}
                                <div
                                    className=" pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
                                />

                                {/* Main Content */}
                                <div className="relative z-10 w-full">

                                    {/* Top: Icon + Heading */}
                                    <div className="flex w-full items-center gap-4 sm:gap-5">

                                        {/* Premium Icon */}
                                        <div className="relative shrink-0">
                                            <div
                                                className=" relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_15px_35px_rgba(124,58,237,0.30)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-[0_20px_45px_rgba(124,58,237,0.40)]"
                                            >
                                                <Eye
                                                    size={26}
                                                    strokeWidth={2.2}
                                                    className="text-white sm:h-7 sm:w-7"
                                                />

                                                {/* Icon Inner Shine */}
                                                <div
                                                    className=" pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-transparent to-transparent"
                                                />
                                            </div>
                                        </div>

                                        {/* Heading */}
                                        <div className="min-w-0">
                                            <h4
                                                className="  text-lg font-bold tracking-tight text-slate-900 sm:text-xl lg:text-2xl"
                                            >
                                                Our Vision
                                            </h4>

                                            {/* Accent Line */}
                                            <div
                                                className=" mt-2.5 h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-20"
                                            />
                                        </div>
                                    </div>

                                    {/* Bottom: Full Width Content */}
                                    <div className="mt-5 w-full sm:mt-6">
                                        <p
                                            className="   w-full text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7"
                                        >
                                            To build a connected digital identity system that can be used
                                            across different places and everyday situations — making
                                            identification, communication, and access simpler, safer,
                                            and more reliable.
                                        </p>
                                    </div>

                                </div>

                                {/* Bottom Glass Reflection */}
                                <div
                                    className="  pointer-events-none absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent"
                                />
                            </div>
                        </ScrollReveal>

                        {/* Mission */}
                        <ScrollReveal>
                            <div
                                className="  group relative w-full overflow-hidden rounded-3xl    border border-white/70 bg-white/55     p-5 sm:p-7 lg:p-8     backdrop-blur-2xl  shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-200/80 hover:bg-white/65 hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]"
                            >

                                {/* Glass Highlight */}
                                <div
                                    className="   pointer-events-none absolute inset-0 rounded-3xl  bg-gradient-to-br from-white/70 via-white/20 to-violet-100/10 opacity-80"
                                />

                                {/* Background Glow */}
                                <div
                                    className=" pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-violet-400/15 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-violet-400/25"
                                />

                                {/* Bottom Glow */}
                                <div
                                    className=" pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl"
                                />

                                {/* Glass Border Shine */}
                                <div
                                    className="  pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
                                />

                                {/* Main Content */}
                                <div className="relative z-10 w-full">

                                    {/* Top: Icon + Title */}
                                    <div className="flex w-full items-center gap-4 sm:gap-5">

                                        {/* Premium Icon */}
                                        <div className="relative shrink-0">
                                            <div
                                                className=" relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_15px_35px_rgba(124,58,237,0.30)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 group-hover:shadow-[0_20px_45px_rgba(124,58,237,0.40)]
                        "
                                            >
                                                <Rocket
                                                    size={26}
                                                    strokeWidth={2.2}
                                                    className="text-white sm:h-7 sm:w-7"
                                                />

                                                {/* Icon Inner Shine */}
                                                <div
                                                    className=" pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-transparent to-transparent"
                                                />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <div className="min-w-0">
                                            <h4
                                                className=" mb-0 text-lg font-bold tracking-tight text-slate-900 sm:text-xl lg:text-2xl"
                                            >
                                                Our Mission
                                            </h4>

                                            {/* Accent Line */}
                                            <div
                                                className=" mt-2.5 h-1 w-12 sm:w-14 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-20" />
                                        </div>
                                    </div>

                                    {/* Bottom: Full Width Content */}
                                    <div className="mt-5 w-full sm:mt-6">
                                        <p
                                            className=" w-full text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7"
                                        >
                                         To create simple and secure QR solutions that connect the right information to the right purpose, helping people and organisations verify details, communicate quickly, and manage everyday activities with ease.

                                        </p>
                                    </div>

                                </div>

                                {/* Bottom Glass Reflection */}
                                <div
                                    className=" pointer-events-none absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-300/40 to-transparent" />

                            </div>
                        </ScrollReveal>

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
                 <div className="pointer-events-none absolute inset-0 z-0">
                   <div className="absolute inset-0 opacity-10" />
                   <AnimatedBackground
                     interactive={true}
                     density={80}
                     particleColorLight="99, 102, 241"
                     particleColorDark="168, 85, 247"
                   />
                 </div>
         
         
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
                     <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/55 via-white/25 to-violet-100/30" />
                     <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl" />
                     <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-indigo-400/15 blur-3xl" />
         
         
                     <div className="relative z-10">
                       <motion.div className="mx-auto mb-8 max-w-3xl px-4 text-center sm:mb-10 sm:px-6 lg:mb-12 lg:px-8">
                         <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                           <span className="border-b-2 border-indigo-500 pb-1">
                             Benefits
                           </span>{" "}
                           of Scan n Go
                         </h2>
                         <p className="mx-auto mt-4 max-w-2xl px-1 text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
                           Scan n Go enhances security and convenience by providing
                           seamless entry management through QR code scanning and live
                           face verification, ensuring only authorized access.
                         </p>
                       </motion.div>
         
         
                       {/* First 3 items: On mobile, the 3rd item stretches to fill the row so there's no empty space. On desktop (lg), it reverts to 3 columns. */}
                       <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                         {benefits.slice(0, 3).map((benefit, index) => (
                           <motion.div
                             key={benefit.label}
                             className={`group flex min-h-[125px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/80 bg-white/70 p-3 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 sm:min-h-[140px] sm:gap-3 sm:p-5 hover:-translate-y-1.5 hover:border-violet-200 hover:bg-white/85 hover:shadow-[0_20px_40px_rgba(124,58,237,0.12)] ${index === 2 ? "col-span-2 sm:col-span-1" : ""
                               }`}
                             variants={itemVariants}
                           >
                             <div className={`flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${benefit.bgColor} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                               <benefit.icon
                                 size={22}
                                 className={benefit.iconColor}
                                 strokeWidth={1.7}
                               />
                             </div>
                             <span className="max-w-full text-xs font-semibold leading-4 text-slate-800 sm:text-[15px] sm:leading-5">
                               {benefit.label}
                             </span>
                           </motion.div>
                         ))}
                       </div>
         
         
                       {/* Remaining items grid */}
                       <div className="mt-3 sm:mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
                         {benefits.slice(3).map((benefit) => (
                           <motion.div
                             key={benefit.label}
                             className="group flex min-h-[125px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/80 bg-white/70 p-3 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 sm:min-h-[140px] sm:gap-3 sm:p-5 hover:-translate-y-1.5 hover:border-violet-200 hover:bg-white/85 hover:shadow-[0_20px_40px_rgba(124,58,237,0.12)]"
                             variants={itemVariants}
                           >
                             <div className={`flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${benefit.bgColor} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                               <benefit.icon
                                 size={22}
                                 className={benefit.iconColor}
                                 strokeWidth={1.7}
                               />
                             </div>
                             <span className="max-w-full text-xs font-semibold leading-4 text-slate-800 sm:text-[15px] sm:leading-5">
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
