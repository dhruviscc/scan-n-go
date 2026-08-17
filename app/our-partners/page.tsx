'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { AnimatedBackground } from "@/components/ui/animated-background";

const partnerSections = [
  {
    title: "Attendance Monitor System",
    description:
      "Attendance Monitor System (AMS) is an Digital attendance management platform designed for businesses, healthcare organisations, and enterprises. It automates attendance tracking, monitors employee activities, and provides real-time insights across one or multiple branches from a centralized dashboard.",
    body:
      "Integrated with Scan n Go , AMS combines QR-based check-in with live scan verification to ensure every attendance record is authentic, secure, and accurately recorded.",
    features: [
      "QR-Based Attendance",
      "Real-Time Attendance Tracking",
      "Employee Attendance History",
      "Attendance Reports",
      "Employee Communication",
      "Company & Branch Dashboard",
    ],
    icon: BarChart3,
    imageSrc: "/images/ams-1.png",
  },
];

const societyEntryManager = {
  title: "Society Entry Manager",

  description:
    "Society Entry Manager is a secure visitor and society management platform designed for residential societies, apartments, gated communities, villas, and housing complexes. It enables society admin to monitor visitor activities, manage service providers, and maintain complete visibility over community access from a single dashboard.",
  body:
    "By integrating with Scan n Go , residents and visitors can use QR-based digital entry for faster, safer, and contactless access. Every visitor movement is securely recorded, helping management improve security, streamline operations, and maintain accurate entry records.",
  features: [
    "QR-Based Visitor Entry",
    "Complete Entry Logs",
    "Society Dashboard",
    "Report Generation",
    "Service Provider Directory",
    "Secure QR Integration",
  ],
  icon: Building2,
  imageSrc: "/images/sem.png",
};

const whyChooseUsPoints = [
  "Complete QR Ecosystem",
  "Advanced Security",
  "Real-Time Notifications",
  "Smart Entry Manager Integration",
  "Attendance Monitor System Integration",
  "Cloud-Based & Scalable",
  "User-Friendly Experience",
];


export default function OurPartners() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>

        {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
        <AnimatedBackground
          interactive={true}
          density={90}
          particleColorLight="99, 102, 241"
          particleColorDark="168, 85, 247"
        />
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/70 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-300/60 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-6 lg:px-8">
          <div className="max-w-3xl mt-10">
            <h1 className="mt-6 text-4xl font-bold  tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Growing Together with
              <span className="mt-2 block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    "Trusted Partners",
                    2000,
                    "Technology Partners",
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Scan n Go strengthens its platform through technology, hardware, and
              business partnerships that deliver secure access, smarter visitor
              management, and efficient attendance solutions.
            </p>

            {/* Buttons */}
            <motion.div
              className="mt-7 flex w-full flex-row items-center justify-center gap-3 px-2 sm:mt-8 sm:gap-4 sm:px-0"

            >
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-2xl bg-violet-700 px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-800 active:scale-[0.98] sm:flex-none sm:px-6 sm:text-sm"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/features"
                className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 active:scale-[0.98] sm:flex-none sm:px-6 sm:text-sm"
              >
                Explore Features
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1470px] px-5 py-16 sm:px-6 lg:px-8">
        <motion.article
          key={societyEntryManager.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid items-center gap-5 relative overflow-hidden rounded-[32px] mb-12 sm:mb-20 border border-violet-100 bg-gradient-to-r from-[#7E57C2] via-[#B388EB] to-[#E1BEE7] p-6 sm:p-8 shadow-[0_20px_60px_rgba(126,87,194,0.18)] lg:grid-cols-[1fr_420px]"
        >
          {/* Background elements (if any) */}

          <div className="relative">

            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
              <societyEntryManager.icon size={24} />
            </div>
            <h2 className="mt-5 sm:mt-6 text-2xl font-bold text-white">{societyEntryManager.title}</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-7 sm:leading-8 max-w-3xl text-white/90">{societyEntryManager.description}</p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-7 sm:leading-8 max-w-3xl text-white/90">{societyEntryManager.body}</p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
                Key Features
              </h4>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {societyEntryManager.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-white/95">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {societyEntryManager.imageSrc && (
            <div className="group overflow-hidden">
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
                <Image
                  src={societyEntryManager.imageSrc}
                  alt={societyEntryManager.title}
                  fill
                  className="object-contain image-zoom"
                  sizes="(max-width: 1024px) 100vw, 620px"
                />
              </div>
            </div>
          )}
        </motion.article>
        <div className="grid gap-8 lg:grid-cols-1">
          {partnerSections.map(({ title, description, body, features, icon: Icon, imageSrc }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid items-center gap-5 relative rounded-[32px] border border-violet-100 bg-no-repeat bg-gradient-to-r from-[#162A6B] via-[#3E5EA8] to-[#8FA7E8] p-6 sm:p-8 shadow-lg shadow-violet-100/40 lg:grid-cols-[1fr_420px]"
            >
              <div>
                {/* Background elements (if any) */}
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                  <Icon size={24} />
                </div>
                <h2 className="mt-5 sm:mt-6 text-2xl font-bold text-white">{title}</h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-7 sm:leading-8 max-w-3xl text-white/90">{description}</p>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-7 sm:leading-8 max-w-3xl text-white/90">{body}</p>
                <div className="mt-6">
                  <h4 className="text-md font-semibold uppercase tracking-[0.24em] text-white">
                    Key Features
                  </h4>
                  <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-white/95">
                        <CheckCircle2 size={18} className="mt-1 shrink-0 text-white" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {imageSrc && (
                <div className="group overflow-hidden">
                  <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
                    <Image
                      src={imageSrc}
                      alt={title}
                      fill
                      className="object-contain image-zoom"
                      sizes="(max-width: 1024px) 100vw, 620px"
                    />
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* why choose */}
      <section className="mx-auto max-w-[1500px] px-5 py-16 sm:py-20 sm:px-6 lg:px-8">


        <div className="grid items-center gap-16 lg:grid-cols-[520px_1fr]">


          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/images/why-choose-1.png" // Replace with your image
              alt="Why Choose Scan n Go"
              width={520}
              height={520}
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>

          {/* Right Content */}
          <div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
              Smart Access for{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    "Visitors",
                    2000,
                    "Attendance",
                    2000,
                    "Secure Entry",
                    2000,
                    "Organizations",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-[15px] max-w-3xl leading-7 sm:leading-8 text-slate-600">
              Scan n Go delivers a complete QR-powered ecosystem that simplifies
              visitor management, secure access, and attendance monitoring.
              Integrated with <span className="font-semibold">Society Entry Manager (SEM)</span> and
              <span className="font-semibold"> Attendance Monitor System (AMS)</span>, our
              platform combines Digital automation, real-time monitoring, and
              enterprise-grade security.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {whyChooseUsPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-md px-5 py-3 transition hover:border-violet-300 hover:bg-violet-100"
                >
                  <ShieldCheck
                    size={20}
                    className="shrink-0 text-violet-600"
                  />
                  <span className="font-medium  text-[14px] text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}
