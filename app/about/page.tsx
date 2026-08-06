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

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function AboutPage() {
    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen">

            <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-24 sm:py-28">

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
                        <p className="mt-6  leading-8 text-slate-600 sm:text-md max-w-3xl mx-auto">
                            Scan n Go is an intelligent QR platform that simplifies visitor
                            management, secure access, digital networking, queue management,
                            vehicle identification, and workplace operations through one
                            seamless experience.
                        </p>
                    </div>
                </div>
            </section>



            {/* Story + Purpose layout: left/right cards with center image */}

            <section className="py-24 bg-slate-50">
                {/* fviolet Blob */}
                <div className="absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-500/25 via-fuchsia-400/15 to-transparent blur-[90px] animate-blob-one" />
                {/* Pink Glow */}
                <div className="absolute bottom-[-140px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-400/18 via-violet-300/12 to-transparent blur-[100px] animate-blob-three" />
                {/* Cyan Blob */}
                <div className="absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-300/15 to-transparent blur-[80px] animate-blob-two" />

                <ScrollReveal className="max-w-2xl mx-auto text-center mb-16">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold  text-slate-900 mt-2">

                        Creating Smarter   {" "}
                        {" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                            Connection
                        </span>
                    </h3>
                    <p className="text-slate-500 mt-3 text-md leading-relaxed">
                        Driven by innovation, our mission is to build smarter digital experiences that enhance security, simplify operations, and make every QR scan meaningful.
                    </p>
                </ScrollReveal>
                <div className="max-w-[1580px] mx-auto px-5 sm:px-6 lg:px-8">

                    <div className="grid gap-8 md:grid-cols-3 items-center">

                        {/* Left column: Our Story + Our Goal */}
                        <div className="space-y-10">
                            <ScrollReveal>
                                <div
                                    className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 backdrop-blur-2xl p-7  shadow-[0_20px_60px_rgba(124,58,237,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(124,58,237,0.20)]"
                                >
                                    {/* Glass Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-violet-100/20 opacity-70 pointer-events-none" />

                                    {/* Top Glow */}
                                    <div className="absolute -top-24 -right-24 h-44 w-44 rounded-full bg-violet-400/10 blur-3xl" />

                                    <div className="relative flex items-start gap-5">

                                        {/* Premium Icon */}
                                        <div
                                            className="relative flex h-14 w-14 shrink-0 items-center justify-center  rounded-xl  bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_15px_35px_rgba(124,58,237,0.35)] transition-all  duration-500 group-hover:scale-110 group-hover:-rotate-6"
                                        >
                                            <Book
                                                size={28}
                                                strokeWidth={2.2}
                                                className="text-white"
                                            />

                                            {/* Icon Glow */}
                                            <div className="absolute -inset-1 -z-10 rounded-2xl bg-violet-500/30 blur-xl"></div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900">
                                                Our Story
                                            </h4>

                                            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>

                                            <p className="mt-5 text-[15px] leading-7 text-slate-600">
                                                Everyday access management is often slow, manual, and
                                                inefficient. We created Scan-N-Go to replace traditional
                                                processes with secure QR-powered technology that makes
                                                check-ins, visitor management, and digital interactions
                                                simple, fast, and reliable.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div
                                    className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 backdrop-blur-2xl p-7 shadow-[0_20px_60px_rgba(124,58,237,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(124,58,237,0.20)]"
                                >
                                    {/* Glass Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-violet-100/20 pointer-events-none" />

                                    {/* Background Glow */}
                                    <div className="absolute -top-24 -right-24 h-44 w-44 rounded-full bg-violet-400/10 blur-3xl" />

                                    <div className="relative flex items-start gap-5">

                                        {/* Premium Icon */}
                                        <div
                                            className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-[0_15px_35px_rgba(124,58,237,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                                        >
                                            <Check
                                                size={28}
                                                strokeWidth={2.2}
                                                className="text-white"
                                            />

                                            {/* Icon Glow */}
                                            <div className="absolute -inset-1 -z-10 rounded-2xl bg-violet-500/30 blur-xl"></div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900">
                                                Our Goal
                                            </h4>

                                            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>

                                            <p className="mt-5 text-[15px] leading-7 text-slate-600">
                                                To simplify secure access and digital interactions through
                                                intelligent QR technology, enabling faster, safer, and
                                                smarter experiences for individuals, businesses, and
                                                communities.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Center image card */}
                        <div className="flex items-center justify-center">
                            <ScrollReveal>
                                <div className="relative flex items-center justify-center">

                                    {/* Background Glow */}

                                    {/* Card */}
                                    <div
                                        className="relative overflow-hidden rounded-2xl border border-white/100 bg-white/80 p-5 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_50px_120px_rgba(124,58,237,0.30)]"
                                    >
                                        {/* Shine Effect */}

                                        <div className="relative w-[340px] h-[520px] flex items-center  justify-center">

                                            <Image
                                                src="/images/about.png"
                                                alt="Scan-N-Go"
                                                width={520}
                                                height={890}
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
                                    className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border border-white/50
    bg-white/70
    backdrop-blur-2xl
    p-7
    shadow-[0_20px_60px_rgba(124,58,237,0.12)]
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_30px_80px_rgba(124,58,237,0.20)]
  "
                                >
                                    {/* Glass Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-violet-100/20 pointer-events-none" />

                                    {/* Background Glow */}
                                    <div className="absolute -top-24 -right-24 h-44 w-44 rounded-full bg-violet-400/10 blur-3xl" />

                                    <div className="relative flex items-start gap-5">

                                        {/* Premium Icon */}
                                        <div
                                            className="
        relative
        flex h-14 w-14 shrink-0
        items-center justify-center
        rounded-2xl
        bg-gradient-to-br
        from-violet-500
        via-purple-500
        to-indigo-600
        shadow-[0_15px_35px_rgba(124,58,237,0.35)]
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:-rotate-6
      "
                                        >
                                            <Eye
                                                size={28}
                                                strokeWidth={2.2}
                                                className="text-white"
                                            />

                                            {/* Icon Glow */}
                                            <div className="absolute -inset-1 -z-10 rounded-2xl bg-violet-500/30 blur-xl"></div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900">
                                                Our Vision
                                            </h4>

                                            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>

                                            <p className="mt-5 text-[15px] leading-7 text-slate-600">
                                                To become the trusted global platform for QR-powered access
                                                management, connecting people, vehicles, visitors, and
                                                organisations through seamless, secure, and innovative
                                                digital solutions.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div
                                    className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 backdrop-blur-2xl p-7 shadow-[0_20px_60px_rgba(124,58,237,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(124,58,237,0.20)]"
                                >
                                    {/* Glass Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-violet-100/20 pointer-events-none" />

                                    {/* Background Glow */}
                                    <div className="absolute -top-24 -right-24 h-44 w-44 rounded-full bg-violet-400/10 blur-3xl" />

                                    <div className="relative flex items-start gap-5">

                                        {/* Premium Icon */}
                                        <div
                                            className="   relative  flex h-14 w-14 shrink-0 items-center justify-center    rounded-2xl    bg-gradient-to-br    from-violet-500    via-purple-500    to-indigo-600    shadow-[0_15px_35px_rgba(124,58,237,0.35)]    transition-all   duration-500   group-hover:scale-110   group-hover:-rotate-6"
                                        >
                                            <Rocket
                                                size={28}
                                                strokeWidth={2.2}
                                                className="text-white"
                                            />

                                            {/* Icon Glow */}
                                            <div className="absolute -inset-1 -z-10 rounded-2xl bg-violet-500/30 blur-xl"></div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900">
                                                Our Mission
                                            </h4>

                                            <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>

                                            <p className="mt-5 text-[15px] leading-7 text-slate-600">
                                                To deliver reliable QR-based solutions that enhance security,
                                                automate visitor management, streamline operations, and
                                                provide real-time notifications for modern workplaces and
                                                residential communities.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="relative mx-auto overflow-hidden  flex bg-white justify-center items-center py-10"
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

                <div className="relative px-6 py-20 lg:px-12">
                    <div className="flex flex-col items-center text-center">

                        <ScrollReveal>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold  text-slate-900 mb-3">

                                Our Core
                                {" "}
                                <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                                    Values
                                </span>
                            </h3>

                            <p className="text-slate-500 mb-3 max-w-2xl text-md leading-relaxed">
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
            <section className="py-16 sm:py-20">
                {/* Immersive Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>

                    {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
                    <AnimatedBackground
                        interactive={true}
                        density={80}
                        particleColorLight="99, 102, 241" // Indigo-500
                        particleColorDark="168, 85, 247" // Purple-500
                    />
                </div>
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

                    <motion.div
                        className="relative overflow-hidden rounded-[28px] shadow-xl border border-slate-200 p-8 sm:p-10 lg:p-14"
                        style={{
                            backgroundImage: "url('/images/benefit_bg.png')",
                            backgroundSize: "100% auto",
                            backgroundPosition: "top center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: "#e7e2f7ff",
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >

                        {/* Section heading */}
                        <motion.div className="text-center mb-12" >
                            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
                                <span className="border-b-[2px] border-indigo-500 pb-1">Benefits</span> of Scan n Go
                            </h2>
                            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-md">
                                Scan N Go enhances security and convenience by providing seamless entry
                                management through QR code scanning and live face verification, ensuring
                                only authorized access.
                            </p>
                        </motion.div>

                        {/* Top row — 3 items */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                            {benefits.slice(0, 3).map((benefit, index) => (
                                <motion.div
                                    key={benefit.label}
                                    className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-violet-200 cursor-default"

                                    variants={itemVariants}
                                >
                                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${benefit.bgColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                        <benefit.icon size={28} className={`${benefit.iconColor}`} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[15px] font-semibold text-slate-800">{benefit.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom row — 4 items */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {benefits.slice(3).map((benefit, index) => (
                                <motion.div
                                    key={benefit.label}
                                    className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-violet-200 cursor-default"
                                    variants={itemVariants}
                                >
                                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${benefit.bgColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                        <benefit.icon size={26} className={`${benefit.iconColor}`} />
                                    </div>
                                    <span className="text-[15px] font-semibold text-slate-800">{benefit.label}</span>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>

                </div>
            </section>


        </div>
    );
}
