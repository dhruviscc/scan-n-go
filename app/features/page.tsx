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
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">

      {/* ===================== BACKGROUND BLOBS ===================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blob 1 */}
        <div className="absolute -bottom-[80%] -left-20 h-56 w-56 rounded-full bg-violet-300/20 blur-[70px] animate-blob sm:-bottom-[100%] sm:left-16 sm:h-72 sm:w-72" />

        {/* Blob 3 */}
        <div className="absolute -bottom-[30%] -left-16 h-64 w-64 rounded-full bg-pink-300/15 blur-[50px] animate-blob animation-delay-4000 sm:-bottom-[50%] sm:left-20 sm:h-80 sm:w-80" />

        {/* Blob 4 */}
        <div className="absolute bottom-0 -right-16 h-64 w-64 rounded-full bg-cyan-300/15 blur-[90px] animate-blob animation-delay-6000 sm:right-20 sm:h-80 sm:w-80" />

        {/* Blob 5 */}
        <div className="absolute -bottom-[70%] -right-16 h-64 w-64 rounded-full bg-blue-300/20 blur-[90px] animate-blob animation-delay-6000 sm:-bottom-[110%] sm:right-20 sm:h-80 sm:w-80" />

        {/* Blob 6 */}
        <div className="absolute left-1/2 top-20 h-48 w-48 -translate-x-1/2 rounded-full bg-indigo-300/15 blur-[80px] animate-blob sm:left-1/3 sm:h-56 sm:w-56 sm:translate-x-0" />
      </div>


      {/* ===================== HERO SECTION ===================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] px-0 pb-12 pt-20 sm:py-20 md:pb-16">

        {/* Hero Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-violet-300/60 blur-3xl sm:h-64 sm:w-64 md:h-72 md:w-72" />

          <div className="absolute -bottom-10 -right-16 h-56 w-56 rounded-full bg-indigo-300/40 blur-3xl sm:h-72 sm:w-72" />
        </div>

        <motion.div
          className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >

          <div className="mt-2 w-full max-w-3xl sm:mt-8">

            {/* Heading */}
            <motion.h1
              className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
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


            {/* Description */}
            <motion.p
              className="mx-auto mt-5 max-w-xl px-2 text-sm leading-7 text-slate-600 sm:mt-6 sm:px-0 sm:text-base sm:leading-8 md:text-lg"
              variants={fadeInUp}
            >
              Scan n Go brings together secure onboarding, instant scan tracking,
              contact sharing, vehicle identification, and quick access into one
              Digital experience.
            </motion.p>


            {/* Buttons */}
            <motion.div
              className="mt-7 flex w-full flex-row items-center justify-center gap-3 px-2 sm:mt-8 sm:gap-4 sm:px-0"
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-2xl bg-violet-700 px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-800 active:scale-[0.98] sm:flex-none sm:px-6 sm:text-sm"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/use-cases"
                className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 active:scale-[0.98] sm:flex-none sm:px-6 sm:text-sm"
              >
                Explore Use Cases
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </section>


      {/* ===================== FEATURE DETAIL CARDS ===================== */}
      <section className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:px-8">

        <motion.div
          className="grid grid-cols-1 gap-5 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >

          {featureSections.map(
            ({ title, description, icon: Icon, points, imageSrc }, idx) => (
              <motion.article
                key={title}
                className="
              grid
              w-full
              grid-cols-1
              items-center
              gap-7
              overflow-hidden
              rounded-[24px]
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-xl

              sm:gap-8
              sm:rounded-[28px]
              sm:p-6

              md:p-8

              lg:grid-cols-[minmax(0,1fr)_380px]
              lg:gap-10
            "
                variants={itemVariants}
              >

                {/* ================= LEFT CONTENT ================= */}
                <div className="min-w-0">

                  {/* Icon */}
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 sm:h-14 sm:w-14"
                    variants={scaleIn}
                  >
                    <Icon
                      size={24}
                      className="sm:hidden"
                    />

                    <Icon
                      size={27}
                      className="hidden sm:block"
                    />
                  </motion.div>


                  {/* Title */}
                  <h2 className="mt-5 break-words text-xl font-semibold leading-tight text-slate-900 sm:mt-6 sm:text-2xl md:text-3xl">
                    {title}
                  </h2>


                  {/* Description */}
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {description}
                  </p>


                  {/* Points */}
                  <ul className="mt-5 space-y-3 sm:mt-6">

                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-600 sm:gap-3 sm:text-[15px] sm:leading-7"
                      >

                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0 text-violet-600 sm:h-[18px] sm:w-[18px]"
                        />

                        <span className="min-w-0 break-words">
                          {point}
                        </span>

                      </li>
                    ))}

                  </ul>

                </div>


                {/* ================= RIGHT IMAGE ================= */}
                {imageSrc && (
                  <motion.div
                    className="w-full overflow-hidden rounded-[20px] bg-slate-100 sm:rounded-[24px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >

                    <div className="relative h-[220px] w-full sm:h-[280px] md:h-[320px] lg:h-80">

                      <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 100vw,
                      380px
                    "
                      />

                    </div>

                  </motion.div>
                )}

              </motion.article>
            )
          )}

        </motion.div>
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
                  of Scan n Go                </h2>

                <p
                  className="mx-auto mt-4 max-w-2xl px-1 text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg"
                >
                  Scan n Go enhances security and convenience by providing
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