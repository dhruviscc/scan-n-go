'use client';
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  Fingerprint,
  Globe,
  History,
  Layers,
  QrCode,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
  Bell,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion, Variants } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/animated-background";

const featureSections = [
  {
    title: "Profile Setup",
    description:
      "Create a secure digital identity with guided onboarding that keeps every profile organized and protected.",
    icon: ShieldCheck,
    imageSrc: "/images/profile-2.png",
    points: [
      "Secure Account Access: Log in to access all Scan n Go features and manage your profile securely.",
      "Complete Your Profile: Verify your identity with live face detection, then add your name, email, mobile number",
    ],
  },
  {
    title: "Instant History After Scanning",
    description:
      "Every scan becomes part of a transparent activity trail that helps users review entries quickly.",
    icon: History,
    imageSrc: "/images/history-1.png",

    points: [
      "Complete Activity Log:  Every QR scan automatically records the user's photo, name, mobile number, date, time, and entry/exit status for accurate tracking.",
      "Smart History Management: Review past scan records, monitor visitor activity, and maintain a complete audit trail with real-time history logs.",
    ],
  },
  {
    title: "Contact QR",
    description:
      "Share your identity and contact details through a personalized digital QR with complete control over visibility.",
    icon: QrCode,
    imageSrc: "/images/contect-1.png",

    points: [
      "Unique Digital QR: Every user receives a personalized QR code to share their identity securely.",
      "Share What You Choose: Share details such as your name, phone number, and preferred information.",
    ],
  },
  {
    title: "Vehicle QR Code",
    description:
      "Assign every vehicle a smart QR for secure identification, quick access.",
    icon: Car,
    imageSrc: "/images/vehicle-2.png",

    points: [
      "Dual QR Access: Each vehicle includes two QR codes—one for daily use and one as a backup. If anyone has scans the QR code they can choose Emergency option for send instant alert  for emergency and Second is  Normal notification for Complain invalid parking and other complain.",
      "Manage Multiple Vehicle QR Codes: Own more than one vehicle? Easily gets multiple QR codes, with a Unique QR.",
    ],
  },
  {
    title: "Quick Entry",
    description:
      "Enable Quick Entry for faster, secure QR-based check-ins with fewer steps.",
    icon: Zap,
    imageSrc: "/images/quick-1.png",

    points: [
      "Quick Entry Mode: Turn on Quick Entry to let visitors scan the QR and enter instantly without manually entering their details.",
      "Flexible Entry Control: When Quick Entry is turned off, visitors must enter their name and mobile number before check-in, giving organizations greater control over visitor information.",
    ],
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

export default function Features() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 ">

      <div className="pointer-events-none absolute inset-0">
        {/* Blob 1 */}
        <div className="absolute -bottom-[150%] left-16 w-72 h-72 rounded-full bg-violet-300/20 blur-[70px] animate-blob" />


        {/* Blob 3 */}
        <div className="absolute -bottom-[50%] left-20 w-80 h-80 rounded-full bg-pink-300/15 blur-[50px] animate-blob animation-delay-4000" />

        {/* Blob 4 */}
        <div className="absolute bottom-0 right-20 w-80 h-80 rounded-full bg-cyan-300/15  blur-[90px]  animate-blob animation-delay-6000" />

        <div className="absolute -bottom-[110%] right-20 w-80 h-80 rounded-full bg-blue-300/20   blur-[90px] animate-blob animation-delay-6000" />


        {/* Blob 6 */}
        <div className="absolute top-20 left-1/3 w-56 h-56 rounded-full bg-indigo-300/15 blur-[80px] animate-blob animation-delay-10000" />
      </div>

      {/* ════════════════ HERO SECTION ════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/70 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-300/60 blur-3xl" />
        </div>

        <motion.div
          className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-3xl mt-10">

            <motion.h1
              className="mt-6 text-4xl font-bold  tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              variants={fadeInUp}
            >
              Secure, Smart & Scalable
              <br />
              <TypeAnimation
                sequence={[
                  "QR Solutions",
                  2500,
                ]}
                wrapper="span"
                cursor
                repeat={Infinity}
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              />
            </motion.h1>


            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
              variants={fadeInUp}
            >
              Scan n Go brings together secure onboarding, instant scan tracking,
              contact sharing, vehicle identification, and quick access into one
              intelligent experience.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap justify-center gap-4" variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-800"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Explore Use Cases
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* ════════════════ FEATURE DETAIL CARDS ════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-6 lg:grid-cols-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {featureSections.map(({ title, description, icon: Icon, points, imageSrc }, idx) => (
            <motion.article
              key={title}
              className="grid items-center gap-10 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:grid-cols-[1fr_380px]"
              variants={itemVariants}
            >
              {/* Left Content */}
              <div>
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700"
                  variants={scaleIn}
                >
                  <Icon size={27} />
                </motion.div>

                <h2 className="mt-6 text-2xl font-semibold text-slate-900">
                  {title}
                </h2>

                <p className="mt-3 max-w-2xl text-md leading-8 text-slate-600">
                  {description}
                </p>

                <ul className="mt-6 space-y-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[15px] leading-7 text-slate-600"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-violet-600"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Image */}
              {imageSrc && (
                <motion.div
                  className="overflow-hidden rounded-[24px] bg-slate-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-72 w-full lg:h-80">
                    <Image
                      src={imageSrc}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 380px"
                    />
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </motion.div>
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