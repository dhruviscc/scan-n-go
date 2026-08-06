"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from 'framer-motion';
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import ScrollReveal from "@/components/ScrollReveal";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Briefcase,
  Building,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  ChevronRight,
  Clock,
  Clock3,
  Download,
  Heart,
  HomeIcon,
  Link as LinkIconLucide,
  MapPin,
  Minus,
  ParkingCircle,
  Plus,
  QrCode,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  Wifi,
  // Image as LucideImage, // Renamed to avoid conflict with next/image
  Zap,
} from "lucide-react";


/* ──────────────────────────────────────────
   Feature Card (Hero floating layout)
────────────────────────────────────────── */
import Image from "next/image";
import { AnimatedBackground } from '@/components/ui/animated-background';
import TestimonialsEditorial from '@/components/ui/editorial-testimonial';
interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;

  delay?: string;
  className?: string;
}
const FeatureCard = ({ icon, iconBg, title, delay = "0s", className = "" }: FeatureCardProps) => (
  <div
    className={`feat-card absolute bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_30px_-5px_rgba(124,58,237,0.12)] p-3 flex flex-col items-center text-center gap-1.5 w-[160px] border border-violet-100/70 hover:shadow-[0_20px_45px_-8px_rgba(124,58,237,0.25)] hover:-translate-y-1 transition-all duration-500 ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shadow-inner ${iconBg}`}>{icon}</div>
    <p className="text-[14px] text-slate-800 leading-tight">{title}</p>
  </div>
);

const usageItems: CardStackItem[] = [
  {
    id: "residential",
    title: "Residential Societies",
    description: "Manage visitors, vehicles, deliveries, and emergency access at every gate.",
    imageSrc: "/images/residency.jpeg",
    href: "/contact",
  },
  {
    id: "corporate",
    title: "Corporate Offices",
    description: "Make employee, guest, and vendor entry quick, secure, and trackable.",
    imageSrc: "/images/Corporate-Offices.jpg",
    href: "/contact",
  },
  {
    id: "education",
    title: "Schools & Colleges",
    description: "Create safer campuses with verified access for students, staff, and visitors.",
    imageSrc: "/images/Colleges.jpg",
    href: "/contact",
  },
  {
    id: "events",
    title: "Events",
    description: "Move attendees through check-in smoothly with reliable QR-based entry.",
    imageSrc: "/images/Events.jpg",
    href: "/contact",
  },
  {
    id: "hospitality",
    title: "Hotels & Hospitality",
    description: "Give guests a polished arrival experience while keeping access protected.",
    imageSrc: "/images/Hotels.jpg",
    href: "/contact",
  },
  {
    id: "government",
    title: "Government Offices",
    description: "Maintain dependable visitor records and controlled access across departments.",
    imageSrc: "/images/Government.jpg",
    href: "/contact",
  },
  {
    id: "conference",
    title: "Conferences",
    description: "Check in delegates, speakers, and partners with a professional QR flow.",
    imageSrc: "/images/Conferance.jpg",
    href: "/contact",
  },

];


export default function Home() {
  const [scanLine, setScanLine] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);



  // Section  (FAQ Accordion toggles)
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const prog = ((ts - startRef.current) % 2400) / 2400;
      setScanLine(prog * 100);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <>

      {/* ════════════════ SECTION 01 — HERO ════════════════ */}
      <section
        id="hero"
        className="relative flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 lg:pb-32"
        style={{ background: "linear-gradient(150deg,#f8f7ff 0%,#f0ebff 30%,#e4dcff 65%,#c8b6ff 100%)" }}
      >

        {/* Colorful dynamic background lights */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-violet-400/25 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-300/35 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[35%] left-[45%] w-[300px] h-[300px] rounded-full bg-blue-300/20 blur-[80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1490px] px-5 sm:px-6 lg:px-12">
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16 lg:pt-15">

            {/* HERO LEFT */}
            <motion.div
              className="hero-left z-10 w-full min-w-0 space-y-5 sm:space-y-7"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {},
              }}
            >
              <motion.div
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-violet-200/80 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md sm:gap-3 sm:px-5 sm:py-2.5"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}>
                <Sparkles size={16} className="text-violet-600" />

                <span className="whitespace-nowrap text-[11px] font-semibold text-gray-800 sm:text-sm">
                  <span className="text-violet-600">Scan</span>
                  <span className="mx-2 text-violet-300">•</span>
                  <span className="text-violet-700">Verify</span>
                  <span className="mx-2 text-violet-300">•</span>
                  <span className="text-violet-800">Enter</span>
                </span>

                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
              </motion.div>

              <motion.h1
                className="max-w-none break-words text-[2rem] font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                Smart QR Platform for
                <br />
                <TypeAnimation
                  sequence={[
                    "Connect Emergency Contacts",
                    2500,
                    "Digital Identity",
                    2500,
                    "Smart Business",
                    2500,
                    "Visitor Management",
                    2500,
                  ]}
                  wrapper="span"
                  cursor
                  repeat={Infinity}
                  className="inline break-words bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                />
              </motion.h1>

              <motion.p
                className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg lg:text-md sm:leading-8"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                Everything you need for identity, visitor, vehicle, and attendance management—powered by one secure QR platform. Scan once, verify instantly, and stay connected when it matters most.
              </motion.p>


              <motion.div
                className="flex flex-wrap gap-3 pt-1 sm:gap-4 sm:pt-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                <Link
                  href="/contact"
                  id="hero-contact-btn"
                  className="cta-primary inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-base font-bold text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:from-violet-700 hover:to-indigo-700 hover:shadow-xl sm:gap-3 sm:rounded-2xl sm:px-7 sm:text-md"
                >
                  Contact Us
                  <ArrowRight size={22} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </motion.div>

            {/* HERO RIGHT (Phone Mockup + Floating Feature Cards) */}
            <div className="relative flex min-w-0 flex-col items-center justify-center overflow-x-clip lg:h-[650px] lg:flex-row">
              <div className="pointer-events-none absolute inset-0 hidden items-center justify-center sm:flex">
                <div className="scan-ring scan-rotate w-[300px] h-[300px] rounded-full border-[1.5px] border-dashed border-violet-500/40"></div>

                <div
                  className="scan-ring-reverse absolute w-[500px] h-[500px] rounded-full border-[1.5px] border-dashed border-violet-400/30"
                  style={{ animationDelay: "1s" }}
                ></div>

                <div
                  className="scan-ring absolute w-[700px] h-[700px] rounded-full border-[2px] border border-violet-300/20"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              {/* Phone Container */}
              <motion.div
                className="hero-phone relative z-10 w-[220px] sm:w-[280px]"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="relative h-[420px] rounded-[32px] border-[7px] border-slate-900 bg-white shadow-2xl sm:h-[530px] sm:rounded-[40px] sm:border-[8px]" id="phoneMockup">

                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-18 h-4 bg-slate-900 rounded-full z-20" />

                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-4 pb-1 pt-2 text-[8px] font-bold  text-slate-700 sm:px-6 sm:pb-1.5 sm:pt-3 sm:text-[10px]">
                    <span>9:41</span>
                    <div className="flex gap-1.5 items-center">
                      <Zap size={10} />
                      <span>5G</span>
                    </div>
                  </div>

                  <div className="pb-1 pt-1 text-center sm:pb-1 sm:pt-1.5">
                    <p className="text-[8px] uppercase tracking-wider text-violet-600 sm:text-[10px] sm:tracking-widest">Scan n GoSECURITY</p>
                  </div>

                  {/* Animated scanning QR code */}
                  <div className="relative mx-auto mt-2 h-24 w-24 rounded-2xl border border-violet-50 bg-white p-2 shadow-inner sm:h-30 sm:w-30">
                    <Image
                      src="/images/scanner.png"
                      alt="Animated QR Scanner"
                      width={130}
                      height={120}
                      className="w-full h-full"
                    />
                    <div
                      className="absolute left-0 right-0 h-[3px] transition-none pointer-events-none"
                      style={{
                        top: `${scanLine}%`,
                        background: "linear-gradient(90deg,transparent,#7c3aed,transparent)",
                        boxShadow: "0 0 8px #7c3aed",
                      }}
                    />
                  </div>

                  <div className="mt-2 scale-95 text-center sm:mt-3">
                    <p className="text-sm  leading-none text-slate-800 sm:text-[14px]">John Doe Profile</p>
                    <p className="mt-1 inline-block rounded-full bg-violet-100 px-2 py-0.5 font-mono text-[8px] text-violet-700 sm:px-2.5 sm:text-[10px]">UID: SNG-889812-H</p>
                  </div>

                  {/* Category grids */}
                  <div className="absolute left-1/2 top-[220px] w-[110%] -translate-x-1/2 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_14px_35px_rgba(15,23,42,.12)] sm:-left-8 sm:top-[255px] sm:w-[125%] sm:translate-x-0 sm:rounded-2xl sm:shadow-[0_20px_60px_rgba(15,23,42,.12)]">
                    <div className="grid grid-cols-4">
                      {[
                        {
                          icon: <Heart className="text-red-500" size={24} fill="currentColor" />,
                          label: "Emergency",
                        },
                        {
                          icon: <Car className="text-blue-500" size={24} />,
                          label: "Vehicle",
                        },
                        {
                          icon: <User className="text-emerald-500" size={24} fill="currentColor" />,
                          label: "Identity",
                        },
                        {
                          icon: <Briefcase className="text-violet-500" size={24} />,
                          label: "Business",
                        },
                      ].map((item, index) => (
                        <div
                          key={item.label}
                          className={`relative flex flex-col items-center justify-center p-1.5 transition-all duration-300 hover:bg-slate-50 hover:-translate-y-1 sm:p-3 ${index !== 3 ? "border-r border-slate-200" : ""}`}
                        >
                          <div className="mb-1 sm:mb-3">
                            {item.icon}
                          </div>

                          <span className="text-[8px]  text-slate-800 sm:text-[13px]">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emergency notification trigger */}
                  <div className="absolute bottom-14 left-1/2 flex h-16 w-[132%] -translate-x-1/2 items-center justify-between rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-3 py-2 text-white shadow-lg sm:-left-8 sm:bottom-20 sm:h-20 sm:w-[125%] sm:translate-x-0 sm:rounded-2xl sm:px-4 sm:py-3">
                    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                      {/* Icon */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm sm:h-11 sm:w-11 sm:rounded-xl">
                        <Bell size={22} className="text-white sm:hidden" />
                        <Bell size={24} className="hidden text-white sm:block" />
                      </div>

                      {/* Text */}
                      <div>
                        <h4 className="text-sm leading-none lg:text-[15px]">
                          Emergency Assist Active
                        </h4>
                        <p className="mt-1 truncate text-[10px] text-violet-100 lg:text-[12px]">
                          Alert family contacts in 1-click
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-8 sm:w-8">
                      <ChevronRight size={16} className="text-white sm:hidden" />
                      <ChevronRight size={18} className="hidden text-white sm:block" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 px-2 py-2 sm:py-3">
                    <div className="grid grid-cols-4">

                      {[
                        {
                          icon: HomeIcon,
                          label: "Home",
                          active: true,
                        },
                        {
                          icon: ScanLine,
                          label: "Scan",
                        },
                        {
                          icon: Clock3,
                          label: "Activity",
                        },
                        {
                          icon: User,
                          label: "Profile",
                        },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <button
                            key={item.label}
                            className="flex flex-col items-center justify-center gap-1"
                          >
                            <Icon
                              size={16}
                              strokeWidth={2.2}
                              className={
                                item.active
                                  ? "text-violet-600"
                                  : "text-slate-400"
                              }
                            />

                            <span
                              className={`text-[11px] font-medium ${item.active
                                ? "text-violet-600"
                                : "text-slate-400"
                                }`}
                            >
                              {item.label}
                            </span>
                          </button>
                        );
                      })}

                    </div>
                  </div>

                </div>
              </motion.div>

              {/* 4 Floating Feature Cards around Phone - Now responsive */}
              <div className="absolute inset-0 hidden items-center justify-center gap-0 lg:flex">
                <FeatureCard
                  icon={<Heart color="#ef4444" size={24} />}
                  iconBg="bg-red-50"
                  title="Emergency "
                  delay="0.1s"
                  className="relative lg:absolute left-0 sm:left-2 top-auto lg:top-[50px]"
                />
                <FeatureCard
                  icon={<Car color="#2563eb" size={24} />}
                  iconBg="bg-blue-50"
                  title="Vehicle QR Card"
                  delay="0.5s"
                  className="relative lg:absolute right-0 sm:right-2 top-auto lg:top-[50px]"
                />
                <FeatureCard
                  icon={<Building color="#8b5cf6" size={24} />}
                  iconBg="bg-purple-50"
                  title="Business Card"
                  delay="0.7s"
                  className="relative lg:absolute right-0 sm:right-2 bottom-auto lg:bottom-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════ FLOATING FEATURE PILLS (OVERLAY) ════════════════ */}
      <div className="relative z-10 ">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 lg:absolute lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2 lg:translate-y-1/3">
          <motion.div
            className=" "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
              hidden: { opacity: 0 },
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <ScanLine size={22} />, label: "Instant QR Scan", sub: "Speedy entry & identity logs" },
                { icon: <Bell size={22} />, label: "Live Notifications", sub: "All Your Notifications, Instantly" },
                { icon: <ParkingCircle size={22} />, label: "Vehicle QR", sub: "Scan the vehicle QR to instantly notify the vehicle owner" },
              ].map((f) => (
                <motion.div
                  key={f.label}
                  className="feature-pill flex items-center gap-4 bg-white/80 backdrop-blur-lg rounded-3xl p-4 shadow-xl border border-white/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                  variants={{
                    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
                    hidden: { y: 30, opacity: 0 },
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shrink-0">{f.icon}</div>
                  <div>
                    <p className="text-[18px] font-semibold text-slate-800">{f.label}</p>
                    <p className="text-[14px] text-slate-500 mt-1 leading-snug">{f.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>



      {/* ════════════════ SECTION 02 — SMART ENTRY SOLUTIONS ════════════════ */}
      <section id="use-cases" className="py-24 bg-white">

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

        {/* Top Left Blob */}
        <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-violet-200/30 blur-md animate-blob-1" />

        {/* Bottom Right Blob */}
        <div className="absolute bottom-5 right-[30%] h-40 w-40 rounded-full bg-cyan-200/25 blur-sm animate-blob-2" />

        {/* Center Glow */}
        <div className="absolute right-[10px] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-100/30 blur-sm animate-blob-3" />
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="max-w-xl mx-auto text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
              Smart QR{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h3>
            <p className="text-slate-500 mt-3 text-md leading-relaxed">
              One intelligent platform to manage visitors, appointments, meetings, dining, and digital contacts with a simple QR scan.
            </p>
          </ScrollReveal>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            {[
              { title: "Vehicle QR", desc: "Smart QR technology that enhances vehicle safety, access, and emergency response with instant notifications.", features: ["Emergency Alerts", "Silent Mode Siren"], color: "border-blue-100/70", iconColor: "text-blue-600", img: "/images/vehicle-scan-1.png" },
              { title: "Contact QR", desc: "Share your professional or personal contact details instantly with a single QR scan.", features: ["Instant Contact Sharing", "Quick Save", "Secure Sharing"], color: "border-indigo-100/70", iconColor: "text-indigo-600", img: "/images/contect-Qr.png" },
              { title: "Queue QR", desc: "Digitise queue management with QR-based token generation and real-time notifications.", features: ["Digital Token System", "Live Queue Status", "Turn Notifications", "Reduced Waiting Time"], color: "border-emerald-100/70", iconColor: "text-emerald-600", img: "/images/queue-1.png" },
              { title: "Gate QR", desc: "Secure visitor access with QR-based entry, exit, and attendance management.", features: ["QR Check-In & Check-Out", "Attendance Management", "Access Control", "Entry And Exit History"], color: "border-purple-100/70", iconColor: "text-violet-600", img: "/images/gate-qr.png" },
              { title: "Guest Entry Notification", desc: "Keep residents informed with instant notifications for every visitor arrival and departure.", features: ["Instant Visitor Alerts", "Real-Time Updates", "Greeting Notifications", "Visitor Activity Log"], color: "border-amber-100/70", iconColor: "text-amber-600", img: "/images/guest-notification-1.png" },
              { title: "Meeting QR", desc: "Organise and manage meetings with QR-based check-in, attendance tracking, and scheduled access.", features: ["QR Meeting Check-In", "Time-Based Access", "Attendance Tracking", "Attendance Reports"], color: "border-blue-100/70", iconColor: "text-blue-600", img: "/images/meeting-2.png" },
            ].map((sol, index) => (
              <motion.div
                key={sol.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                <div className="relative group [perspective:1200px]">
                  <div className="relative h-[340px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* FRONT */}
                    <div
                      className={`absolute inset-0 overflow-hidden rounded-3xl border ${sol.color} bg-white shadow-lg [backface-visibility:hidden] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl`}
                    >
                      {sol.img ? (
                        <>
                          {/* Image */}
                          <div className="relative h-full w-full overflow-hidden">
                            <Image
                              src={sol.img}
                              alt={sol.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                            />

                            {/* Bottom Gradient Only */}
                            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <h4 className="text-xl font-semibold">
                                {sol.title}
                              </h4>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="flex h-full flex-col justify-end p-7">

                          <h4 className="text-2xl font-bold text-slate-900">
                            {sol.title}
                          </h4>

                          <p className="mt-3 text-sm leading-6 text-slate-600">
                            {sol.desc}
                          </p>

                        </div>
                      )}
                    </div>

                    {/* BACK */}
                    <div
                      className={`absolute inset-0 rounded-3xl border ${sol.color} bg-white p-7 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                    >
                      <div className="flex h-full flex-col">

                        <h4 className="text-2xl font-bold text-slate-900">
                          {sol.title}
                        </h4>

                        <p className="mt-3 text-md leading-6 text-slate-600">
                          {sol.desc}
                        </p>

                        <div className="mt-6 space-y-3">
                          {sol.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle2
                                size={18}
                                className="text-emerald-500"
                              />
                              <span className="text-[14px] font-medium text-slate-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════ SECTION 03 — WHY CHOOSE Scan n Go════════════════ */}
      <section id="features" className="relative overflow-hidden border-t border-slate-100 bg-[#fcfbff] py-16 sm:py-20">

        {/* fviolet Blob */}
        <div className="absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-500/25 via-fuchsia-400/15 to-transparent blur-[90px] animate-blob-one" />
        {/* Pink Glow */}
        <div className="absolute bottom-[-140px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-400/18 via-violet-300/12 to-transparent blur-[100px] animate-blob-three" />
        {/* Cyan Blob */}
        <div className="absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-300/15 to-transparent blur-[80px] animate-blob-two" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold  text-slate-900 leading-tight">
              Vehicle QR {" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                Features
              </span>
            </h3>
            <p className="text-slate-500 mt-4 text-md leading-relaxed">
              We design specialized QR tools for everyday security. From smart vehicle stickers to identity protection hubs, Scan n Go simplifies connection workflows.
            </p>
          </ScrollReveal>

          {/* Core Feature Demos Grid */}
          <ScrollReveal className="grid gap-5 lg:grid-cols-2">

            {/* Demo 1: Smart Emergency & Vehicle QR (Simulator) */}
            <div className="min-h-[310px] rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-violet-50 p-6 shadow-[0_12px_35px_-20px_rgba(91,33,182,0.3)] sm:p-4">
              <div >


                <h4 className=" text-xl font-semibold  text-slate-800 mb-3">One Platform for Every QR Solution</h4>

                <div className="grid min-h-[270px] items-center gap-4 sm:grid-cols-[1.1fr_.9fr]">
                  <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden  border-r border-slate-200">
                    <span className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-slate-200 shadow-md rounded-xl text-violet-600"><Bell size={20} /></span>
                    <div className="absolute bottom-30 left-14 -rotate-120 flex h-10 w-10 items-center justify-center">
                      <Wifi size={50} className=" text-violet-600 opacity-40" strokeWidth={1.5} />
                    </div>
                    <span className="absolute bottom-5 right-5 grid grid-cols-3 gap-1 opacity-60">{Array.from({ length: 21 }).map((_, index) => <i key={index} className="h-1 w-1 rounded-full bg-violet-400" />)}</span>
                    <Image src="/images/normal-alert-2.png" alt="Normal alert on a mobile phone" width={650} height={650} className="relative z-10 mx-auto h-[360px] w-auto max-w-full object-contain drop-shadow-xl" />
                  </div>

                  <div className="grid w-full grid-cols-1 gap-5 py-2 sm:pr-3 ">

                    <div className="border-b border-slate-200 pb-5">
                      <p className="flex items-center gap-2 text-sm font-bold  text-slate-800">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-200"><Bell size={15} /></span> Normal Alert
                      </p>
                      <p className="ml-10 mt-2 text-xs leading-5 text-slate-500">
                        For general updates and everyday communication.
                      </p>
                    </div>

                    <div>
                      <p className="flex items-center gap-2 text-sm font-bold  text-red-600">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><AlertTriangle size={15} /></span> Emergency Alert
                      </p>
                      <p className="ml-10 mt-2 text-xs leading-5 text-slate-500">
                        Instantly notify the owner about an emergency situation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Demo 2: Dual Sticker Protection */}
            <div className="min-h-[310px] rounded-2xl border border-violet-100 bg-white/90 p-6 shadow-[0_12px_35px_-20px_rgba(91,33,182,0.3)] sm:p-6">
              <div>
                <span className="text-[11px] uppercase   tracking-widest text-[#7c3aed] bg-purple-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <ShieldCheck size={13} /> Backup Sticker Shield
                </span>
                <h4 className="mt-3 text-xl font-semibold  text-slate-800 sm:text-2xl">Dual Sticker Protection</h4>
                <p className="mt-1.5 text-sm leading-5 text-slate-500">
                  Every QR order is supplied with two identical QR stickers linked to the same profile. If one sticker gets damaged or unreadable, the second one continues to work seamlessly.
                </p>
                <div className="mt-3 flex gap-4 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> Primary</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> Backup</div>
                </div>
              </div>

              {/* Graphic Mockup of Dual Sticker Shield */}
              <div className="relative mt-4 overflow-hidden rounded-xl border border-violet-100 bg-gradient-to-br from-white via-sky-50 to-violet-50 p-3 sm:p-4">

                {/* Background Glow */}
                <div className="absolute -top-12 -left-12 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl animate-pulse"></div>

                {/* Animated Connection */}
                <div className="absolute top-[62px] left-1/2 h-[2px] w-28 -translate-x-1/2 overflow-hidden sm:top-[70px] sm:w-40">
                  <div className="absolute inset-0 bg-slate-300 rounded-full"></div>

                  <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-line-flow"></div>
                </div>

                <div className="relative grid grid-cols-2 gap-3 sm:gap-5">

                  {/* Primary */}
                  <div className="rounded-xl border border-violet-200 bg-white/80 p-3 text-center shadow-md transition-all duration-500 hover:-translate-y-1 sm:p-4">

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-violet-50 shadow-sm sm:h-14 sm:w-14">
                      <QrCode className="h-7 w-7 text-violet-600 sm:h-8 sm:w-8" />
                    </div>

                    <p className="mt-2 text-[10px] font-bold  uppercase tracking-wider text-violet-700 sm:text-xs">
                      Primary Sticker
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                      Front Windshield
                    </p>

                  </div>

                  {/* Backup */}
                  <div className="rounded-xl border border-sky-200 bg-white/80 p-3 text-center shadow-md transition-all duration-500 hover:-translate-y-1 sm:p-4">

                    <div
                      className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 shadow-sm sm:h-14 sm:w-14"
                      style={{ animationDelay: ".6s" }}
                    >
                      <QrCode className="h-7 w-7 text-sky-600 sm:h-8 sm:w-8" />
                    </div>

                    <p className="mt-2 text-[10px] font-bold  uppercase tracking-wider text-sky-700 sm:text-xs">
                      Backup Sticker
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                      Secondary Position
                    </p>

                  </div>

                </div>

                {/* Bottom Info */}
                <div className="relative mt-3 flex items-center justify-center gap-2 rounded-xl border border-violet-100 bg-white/80 px-3 py-2.5">

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-sky-500 text-white">
                    <ShieldCheck size={14} />
                  </div>

                  <p className="text-[11px] font-semibold text-slate-600 sm:text-xs">
                    If the primary sticker is damaged, the backup QR works instantly.
                  </p>

                </div>

              </div>
            </div>
          </ScrollReveal>



        </div>
      </section>

      {/* ════════════════ SECTION 04 — TRUSTED BY ════════════════ */}
      <section
        className="relative overflow-hidden border-y border-slate-100 bg-cover bg-center pt-12 pb-20 shadow-lg lg:pt-10"
        style={{ backgroundImage: "url('/images/benefit_bg.png')", }}
      >
        {/* Inner top shadow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo/5 to-transparent" />

        <div className="relative z-10 w-full max-w-8xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-12">

            <h3 className="text-2xl sm:text-4xl font-bold pb-10 text-slate-800">
              Trusted By  IT{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                Companies & Organizations
              </span>
            </h3>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative overflow-hidden">
              {/* Gradient Effect */}
              {/* Gradient Effect */}
              <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent"></div>
              <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent"></div>

              <div className="flex w-max animate-marquee">
                {[
                  "/images/client_1.png",
                  "/images/client_2.png",
                  "/images/client_1.png",
                  "/images/client_2.png",
                  "/images/client_1.png",
                  "/images/client_2.png",
                  "/images/client_1.png",
                  "/images/client_2.png",
                ].map((src, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center mx-10"
                  >
                    <Image
                      src={src}
                      alt={`Client ${index}`}
                      width={130}
                      height={60}
                      className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

      </section >

      {/* ════════════════ SECTION 05 — WHERE YOU CAN USE ════════════════ */}

      < section className="relative overflow-hidden bg-white py-20" >
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>

          {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
          <AnimatedBackground
            interactive={true}
            density={40}
            particleColorLight="99, 102, 241" // Indigo-500
            particleColorDark="168, 85, 247" // Purple-500
          />
        </div>
        {/* Top Left Blob */}
        < div className="absolute top-24 left-[30%] h-52 w-52 rounded-full bg-violet-200/30  blur-md" />

        {/* Aurora Blob - Left */}
        < div className="absolute left-[10%] top-40 h-30 w-30 rounded-full bg-gradient-to-br from-fuchsia-400/35 via-violet-400/20 to-transparent blur-lg  animate-blob-left" />
        {/* Pink Glow */}
        < div className="absolute bottom-[-140px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-400/18 via-violet-300/12 to-transparent blur-[100px] animate-blob-three" />
        {/* Cyan Blob */}
        < div className="absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-300/15 to-transparent blur-[80px] animate-blob-two" />


        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold  text-slate-900 mt-2">
              WHERE {" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                YOU CAN USE
              </span>
            </h3>
            <p className="text-slate-500 mt-3 text-md leading-relaxed">
              From gated communities and corporate offices to schools, industries, and buildings, Scan n Go delivers secure, smart, and seamless QR-powered management for every location.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="relative overflow-hidden rounded-[10px] px-8 lg:px-10 pb-15"
            >


              {/* Content */}
              <div className="relative z-10 mt-8">
                {/* CardStack likely has its own animations, but wrapping it ensures it appears on scroll */}
                <CardStack
                  items={usageItems}
                  initialIndex={0}
                  autoAdvance
                  intervalMs={3000}
                  pauseOnHover
                  showDots
                />

              </div>

            </div>
          </ScrollReveal>
        </div>
      </section >


      {/* ════════════════ SECTION 06 — MOBILE APP PREVIEW ════════════════ */}
      < section className="py-20 bg-slate-50 relative"
        style={{ background: "linear-gradient(150deg,#f8f7ff 0%,#f0ebff 30%,#e4dcff 65%,#c8b6ff 100%)" }}

      >
        {/* Colorful dynamic background lights */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-violet-400/25 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-300/35 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[35%] left-[45%] w-[300px] h-[300px] rounded-full bg-blue-300/20 blur-[80px]" />
        </div>


        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mt-2">
              All-in-One   {" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                Smart QR Platform.
              </span>
            </h3>
            <p className="text-slate-500 mt-3 text-md leading-relaxed">
              Keep check of historical visitors entries, manage emergency alerts, edit profiles details, or save your vehicle QR dashboard straight from our dashboard interface.
            </p>
          </ScrollReveal>

          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* Feature lists on Left */}
            <div className="space-y-6 ">
              <h4 className="text-3xl font-bold  text-slate-800">Scan n Go App Features Dashboard</h4>

              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                  hidden: {},
                }}
              >
                {[
                  { name: "Secure QR Code", icon: <QrCode size={18} className="text-violet-600" />, side: "left" },
                  { name: "Vehicle QR Management", icon: <ScanLine size={18} className="text-violet-600" />, side: "left" },
                  { name: "Instant Notifications", icon: <Bell size={18} className="text-violet-600" />, side: "right" },
                  { name: "Appoinment & Meeting QR", icon: <Clock size={18} className="text-violet-600" />, side: "right" },
                  { name: "Contect QR sharing", icon: <Download size={18} className="text-violet-600" />, side: "left" },
                  { name: "Update Profile instantly", icon: <User size={18} className="text-violet-600" />, side: "right" },
                ].map((appFeat, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 rounded-2xl px-4 py-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.15)] hover:bg-white/100 hover:border-violet-300/40 hover:shadow-[0_12px_40px_rgba(139,92,246,0.25)] transition-all duration-300 group overflow-hidden relative"
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: appFeat.side === "left" ? -50 : 50,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    {/* Glass Shine */}
                    <div
                      className=" absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-60 pointer-events-none"
                    />

                    <span
                      className=" relative w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0 text-violet-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 "
                    >
                      {appFeat.icon}
                    </span>

                    <span className="relative text-[15px] text-slate-700">
                      {appFeat.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.scc.global"
                  className="transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <img
                    src="/images/googleplay.png"
                    alt="Get it on Google Play"
                    className="h-14 w-auto"
                  />
                </a>

                {/* App Store */}
                <a
                  href="https://apps.apple.com/us/app/scan-n-go-easy-entry/id6502510648"
                  className="transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <img
                    src="/images/appstore.png"
                    alt="Download on the App Store"
                    className="h-14 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Android + iOS mockups next to each other */}
            <div className="relative flex justify-end items-center h-[660px] max-w-[200%]  w-full">
              <img
                src="/images/get-app.png"
                alt="Mobile Preview"
                className="h-full w-auto object-contain drop-shadow-2xl animate-float"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section >




      {/* ════════════════ SECTION 07 — TESTIMONIALS ════════════════ */}

      < section className=" relative py-20 bg-white" >

        {/* Top Left Blob */}
        < div className="absolute top-24 left-[30%] h-52 w-52 rounded-full bg-violet-200/30  blur-md" />

        {/* Aurora Blob - Left */}
        < div className="absolute left-[10%] bottom-10 h-50 w-50 rounded-full bg-gradient-to-br from-fuchsia-400/35 via-violet-400/20 to-transparent blur-2xl  animate-blob-left" />


        {/* Cyan Blob */}
        < div className="absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-300/15 to-transparent blur-[80px] animate-blob-two" />

        <div className="w-full max-w-[1440px] mx-auto">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-16">
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">


              <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold   leading-tight text-slate-900">
                Loved By Daily  <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                  Users  &amp; Team Admins</span>
              </h3>

              <p className="mt-4 text-sm sm:text-base lg:text-md leading-7 text-slate-500  mx-auto">
                Discover how residential occupants, local retail store owners, and vehicle
                drivers secure daily entries and emergency loops.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
          <TestimonialsEditorial />
          </ScrollReveal>

        </div>
      </section >

      {/* ════════════════ SECTION 8 — FREQUENTLY ASKED QUESTIONS ════════════════ */}


      < section className="py-20 bg-slate-50"
        style={{ background: "linear-gradient(150deg,#f8f7ff 0%,#f0ebff 30%,#e4dcff 65%,#c8b6ff 100%)" }}

      >
        {/* Colorful dynamic background lights */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-violet-400/25 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-300/35 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>


    
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold  text-slate-900 mt-2">

              Frequently Asked {" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                Questions

              </span>
            </h3>
            <p className="text-slate-500 mt-3 text-md leading-relaxed">
              Discover answers to common security compliance check logs and vehicle stickers setup workflows.
            </p>
          </ScrollReveal>

          <ScrollReveal className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What is Scan n Go?",
                a: "Scan n Go is a smart QR platform that offers multiple QR solutions for everyday use. It includes Vehicle QR for vehicle management and emergency alerts, Contact QR for instant contact sharing, Queue QR for digital waiting management, Gate QR for secure entry and exit, and Visitor QR for seamless visitor check-in's—all through a single, easy-to-use platform.",
              },
              {
                q: "How does Vehicle QR work?",
                a: "Vehicle QR provides Normal and Emergency options when scanned. The Emergency option instantly alerts the owner's selected emergency contacts—even if their phone is on silent—while the Normal option sends notifications for parking issues, blocked vehicles, open windows, or other important vehicle-related updates directly to the owner.",
              },
              {
                q: "Is my personal data secure?",
                a: "Yes, your personal information is secure and you have control over what details are shared when your QR code is scanned.",
              },
              {
                q: "Is Vehicle QR a one-time purchase?",
                a: "Yes. Vehicle QR sticker packages require a single, one-time payment. Once activated, stickers last lifetime with zero mandatory subscription fees.",
              },
            ].map((faq, i) => {
              const isOpen = activeFaq === i;

              return (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-all duration-300 hover:shadow-sm">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 text-slate-800 font-extrabold cursor-pointer"
                  >
                    <span className="text-md sm:text-lg font-semibold">{faq.q}</span>
                    <motion.span
                      className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shrink-0"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="p-4 pt-2  text-[14px] text-slate-500 leading-relaxed border-t border-slate-100 bg-white">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section >



      {/* ════════════════ SECTION 09 — CALL TO ACTION ════════════════ */}


      < section className="py-14 lg:py-20 bg-white overflow-hidden" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-r from-[#24115F] via-[#3E1E9E] to-[#6C3DF5] shadow-[0_25px_70px_rgba(36,17,95,.25)]">

            {/* Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

            {/* White Curved Shape */}
            <div className="hidden lg:block absolute right-[-220px] top-[-120px] w-[760px] h-[760px] rounded-full bg-white/95"></div>

            <div className="hidden lg:block absolute inset-0 overflow-hidden">
              <div className=" wave-1 absolute left-[40%] bottom-[-100px] w-[650px] h-[650px] rounded-full border border-white/10" />

              <div className="wave-2 absolute left-[45%] bottom-[-100px] w-[720px] h-[720px] rounded-full border border-white/10" />

              <div className="wave-3 absolute left-[50%] bottom-[-120px] w-[790px] h-[790px] rounded-full border border-white/10" />

            </div>


            <div className="relative z-10 flex flex-col lg:flex-row items-center">

              {/* LEFT */}

              <div className="w-full lg:w-[46%] px-8 py-14 lg:px-16">

                <h2 className="hero-heading text-2xl sm:text-3xl md:text-4xl w-2xl text-start text-white leading-tight transition-transform duration-500 hover:scale-105">
                  <span className="block hero-heading-gradient">
                    LET’S CREATE BETTER, SECURE AND QUICK FUTURE WITH US
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-white/75 text-md leading-8">

                  Partner with Scan n Go and build a safer,
                  smarter and contactless future together.

                </p>

                <Link
                  href="/contact"
                  className="group inline-flex items-center text-md gap-4 mt-10 rounded-xl bg-white px-8 py-3 font-semibold text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Contact Us
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5l8 7-8 7z" />
                  </svg>

                </Link>

              </div>

              {/* RIGHT */}

              <div className="relative w-full lg:w-[54%] h-[420px] flex items-center justify-center">

                {/* Shadow */}

                <div className="absolute bottom-12 w-72 h-16 rounded-full bg-indigo-900/25 blur-xl"></div>

                {/* Platform */}

                <div className="absolute bottom-16 w-64 h-16 rounded-full bg-gradient-to-b from-white to-indigo-200 shadow-2xl"></div>

                <div className="absolute bottom-[92px] w-52 h-9 rounded-full bg-white"></div>

                {/* Shield */}

                <div className="absolute right-24 top-14 hidden md:flex items-center justify-center w-40 h-44 rounded-[36px] bg-gradient-to-b from-[#7054ff] to-[#4f2fd3] rotate-12 shadow-[0_30px_50px_rgba(76,50,220,.45)]">

                  <svg
                    className="w-16 h-16 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                </div>

                {/* QR Card */}

                <div className="relative z-20 rounded-[30px] bg-white p-6 shadow-[0_35px_80px_rgba(30,20,80,.25)]">

                  <div className="relative w-40 h-40">

                    {/* Scanner Corners */}

                    <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-indigo-500 rounded-tl-xl"></div>

                    <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-indigo-500 rounded-tr-xl"></div>

                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-indigo-500 rounded-bl-xl"></div>

                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-indigo-500 rounded-br-xl"></div>

                    {/* QR IMAGE */}

                    <img
                      src="/images/scan-QR.png"
                      alt="QR Code"
                      className="absolute inset-5 w-[120px] h-[120px] object-contain"
                    />

                  </div>

                </div>

                {/* Floating Dots */}

                <div className="absolute right-10 top-24 w-3 h-3 rounded-full bg-indigo-300"></div>

                <div className="absolute right-6 bottom-20 w-2 h-2 rounded-full bg-purple-400"></div>

                <div className="absolute right-24 bottom-32 w-4 h-4 rounded-full bg-indigo-200"></div>

              </div>

            </div>

          </div>

        </div>
      </section >
    </>
  );
}
