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
  Zap, Image as LucideImage,
} from "lucide-react";


/* ──────────────────────────────────────────
   Feature Card (Hero floating layout)
────────────────────────────────────────── */
import Image from "next/image";
import { AnimatedBackground } from '@/components/ui/animated-background';
import TestimonialsEditorial from '@/components/ui/editorial-testimonial';
import { NumberTicker } from '@/components/ui/counter';
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
                    " Attendance Tracking",
                    2500,
                    "Vehicle QR & Emergency Contact",
                    2500,
                    "Residential Visitor Entry",
                    2500,
                    " Queue & Token Management",
                    2500,
                    "Private Meeting & Conference Entry",
                    2500,
                    "Digital Identity & Contact Sharing",
                    2500

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
                className="relative z-10 w-full max-w-[730px] sm:max-w-[390px] md:max-w-[460px] lg:max-w-[420px] xl:max-w-[520px]"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                <div
                  className="relative h-[250px] xs:h-[230px] sm:h-[520px] md:h-[580px] lg:h-[550px]  xl:h-[600px] w-full"
                >
                  <Image
                    src="/images/hero-3.png"
                    alt="Scan n Go App"
                    fill
                    priority
                    sizes="(max-width: 640px) 330px, (max-width: 1024px) 360px, 690px"
                    className="object-contain object-center"
                  />
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
                  title="Meeting QR"
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
                { icon: <ScanLine size={22} />, label: "Quick QR Scanning ", sub: "Fast entry & identity verification" },
                { icon: <Bell size={22} />, label: "Instant Notifications", sub: "Receive important alerts in real time" },
                { icon: <ParkingCircle size={22} />, label: "Vehicle QR", sub: "Scan, select, and notify the vehicle owner" },
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
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Smart QR{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h3>
            <p className="text-slate-500 mt-3 text-md leading-relaxed">
              One  Digital platform to manage visitors, appointments, meetings, dining, and digital contacts with a simple QR scan.
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
              { title: "Vehicle QR", desc: "Scan, select the reason, and notify — making it easier to reach vehicle owners during emergencies or parking-related situations.", features: ["Emergency Alerts", "Silent Mode with Siren Access", "Invalid Parking Notification"], color: "border-blue-100/70", iconColor: "text-blue-600", img: "/images/vehicle-scan-1.png" },
              { title: "Contact QR", desc: "Share your professional or personal contact details instantly with a single QR scan.", features: ["Instant Contact Sharing", "Quick Save", "Secure Sharing"], color: "border-indigo-100/70", iconColor: "text-indigo-600", img: "/images/contect-Qr.png" },
              { title: "Queue QR", desc: "Digitise queue management with QR-based token generation and real-time notifications.", features: ["Digital Token System", "Live Queue Status", "Turn Notifications", "Reduced Waiting Time"], color: "border-emerald-100/70", iconColor: "text-emerald-600", img: "/images/queue-1.png" },
              { title: "Gate QR", desc: "Secure visitor access with QR-based entry, exit, and attendance management.", features: ["QR Check-In & Check-Out", "Attendance Management", "Access Control", "Entry And Exit History"], color: "border-purple-100/70", iconColor: "text-violet-600", img: "/images/gate-qr.png" },
              { title: "Guest Entry Notification", desc: "Keep residents informed with instant notifications for every visitor arrival and departure.", features: ["Instant Visitor Alerts", "Real-Time Updates", "Greeting Notifications", "Visitor Activity Log"], color: "border-amber-100/70", iconColor: "text-amber-600", img: "/images/guest-notification-1.png" },
              { title: "Meeting QR", desc: "Organize and manage meetings with QR-based check-in, attendance tracking, and scheduled access.", features: ["QR Meeting Check-In", "Time-Based Access", "Attendance Tracking", "Attendance Reports"], color: "border-blue-100/70", iconColor: "text-blue-600", img: "/images/meeting-2.png" },
            ].map((sol) => (
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

      <section
        id="features"
        className="relative overflow-hidden border-t border-slate-200 bg-white py-16 sm:py-20 text-slate-900"
      >
        {/* ───────────────── Background Glowing & Moving Blobs / Floating Balls ───────────────── */}

        {/* Top-Left Indigo Blob (Animated) */}
        <div className="pointer-events-none absolute -left-20 top-10 h-[380px] w-[380px] rounded-full bg-indigo-600/15 blur-[120px] animate-pulse duration-[4000ms]" />

        {/* Right-Bottom Indigo Blob (Animated) */}
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-600/15 blur-[120px] animate-pulse duration-[5000ms]" />

        {/* Small Floating Balls with Keyframe Animations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Ball 1 */}
          <div className="absolute left-[15%] top-[20%] h-4 w-4 rounded-full bg-indigo-500/40 blur-[1px] animate-[bounce_6s_infinite_ease-in-out]" />
          {/* Ball 2 */}
          <div className="absolute right-[25%] top-[15%] h-3 w-3 rounded-full bg-indigo-600/30 blur-[0.5px] animate-[bounce_8s_infinite_ease-in-out_1s]" />
          {/* Ball 3 */}
          <div className="absolute left-[30%] bottom-[20%] h-5 w-5 rounded-full bg-indigo-400/35 blur-[1px] animate-[pulse_5s_infinite_ease-in-out]" />
          {/* Ball 4 */}
          <div className="absolute right-[18%] bottom-[30%] h-3.5 w-3.5 rounded-full bg-indigo-500/30 blur-[0.5px] animate-[bounce_7s_infinite_ease-in-out_2s]" />
          {/* Ball 5 */}
          <div className="absolute left-[50%] top-[40%] h-2.5 w-2.5 rounded-full bg-indigo-600/25 blur-[0.5px] animate-[pulse_4s_infinite_ease-in-out]" />
        </div>

        {/* Subtle Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />


        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">

          {/* ═════════════════════ SECTION HEADER ═════════════════════ */}
          <ScrollReveal className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Vehicle QR{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                Features
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              We design specialized QR tools for everyday security. From smart vehicle stickers to identity protection hubs, Scan n Go simplifies connection workflows.
            </p>
          </ScrollReveal>

          {/* ═════════════════════ MAIN FEATURE AREA ═════════════════════ */}
          <motion.div
            className="grid items-stretch gap-6 lg:grid-cols-[1.25fr_0.75fr]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >

            {/* LEFT — SMART ALERT EXPERIENCE */}
            <motion.div className="group relative overflow-hidden rounded-[32px] border border-indigo-200/80 bg-transparent p-6 shadow-lg shadow-indigo-500/5 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10 sm:p-8 lg:p-10"
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-300/40 blur-[90px] transition-all duration-500 group-hover:bg-indigo-300/60" />

              <div className="pointer-events-none absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-indigo-200/50 blur-[80px]" />

              {/* Decorative dots */}
              <div className="pointer-events-none absolute right-8 top-8 grid grid-cols-4 gap-2 opacity-40">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1 w-1 rounded-full bg-indigo-400 transition-colors duration-300 group-hover:bg-indigo-500"
                  />
                ))}
              </div>

              {/* Top Content */}
              <div className="relative z-10 mx-auto max-w-xl text-center flex flex-col items-center">

                <h4 className="max-w-xl text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  One Platform for{" "}
                  <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                    Every QR Solution
                  </span>
                </h4>

                <p className="mt-4 max-w-lg text-sm leading-6 text-slate-700">
                  From everyday communication to critical emergencies, Scan n Go makes it simple to send the right alert at the right time.
                </p>
              </div>

              {/* Phone + Features */}
              <div className="relative z-10 mt-8 grid items-center gap-8 sm:mt-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">

                {/* ───────────────── PHONE ───────────────── */}
                <div className="relative flex min-h-[360px] items-center justify-center">

                  {/* Phone glow */}
                  <div className="absolute h-64 w-64 rounded-full bg-indigo-200/50 blur-[80px]" />

                  {/* Decorative WiFi */}
                  <div className="absolute left-2 top-20 rotate-[-15deg] opacity-60 transition-transform duration-500 group-hover:rotate-0 sm:left-6">
                    <Wifi
                      size={42}
                      strokeWidth={1.4}
                      className="text-indigo-600"
                    />
                  </div>

                  {/* Phone */}
                  <Image
                    src="/images/normal-alert-2.png"
                    alt="Scan n Go normal and emergency alerts"
                    width={650}
                    height={650}
                    className="relative z-10 h-[350px] w-auto max-w-full object-contain drop-shadow-[0_25px_45px_rgba(99,102,241,0.15)] transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Floating emergency notification */}
                  <div className="absolute bottom-8 left-0 z-20 hidden w-[180px] rounded-xl border border-red-200 bg-white/95 p-2 shadow-lg shadow-red-500/5 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1 sm:block lg:left-[-15px]">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100">
                        <AlertTriangle
                          size={14}
                          className="text-red-600"
                        />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-red-600">
                          Emergency Alert
                        </p>
                        <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                          Contacts notified instantly
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ───────────────── ALERT FEATURES ───────────────── */}
                <div className="space-y-3">

                  {/* Normal Alert */}
                  <div className="group/item relative overflow-hidden rounded-2xl border border-indigo-200/80 bg-transparent p-4 shadow-md shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100/80 ring-1 ring-indigo-200 transition-transform duration-300 group-hover/item:scale-105">
                        <Bell
                          size={18}
                          className="text-indigo-600"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-semibold text-indigo-700">
                            Normal Alert
                          </h5>
                        </div>
                        <p className="mt-1.5 text-xs leading-5 text-slate-700">
                          For general updates and everyday communication.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Alert */}
                  <div className="group/item relative overflow-hidden rounded-2xl border border-red-200/80 bg-transparent p-4 shadow-md shadow-red-500/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg hover:shadow-red-500/10">

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100/80 ring-1 ring-red-200 transition-transform duration-300 group-hover/item:scale-105">
                        <AlertTriangle
                          size={18}
                          className="text-red-600"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-semibold text-red-600">
                            Emergency Alert
                          </h5>
                        </div>

                        <p className="mt-1.5 text-xs leading-5 text-slate-700">
                          Instantly notify the owner and emergency contacts in case of an emergency.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom mini stats — REDESIGNED WITH ICONS */}
                  <div className="grid grid-cols-2 gap-3 pt-1">

                    <div className="group/stat flex items-center gap-3 rounded-2xl border border-indigo-200/70 bg-transparent p-3 shadow-md shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100/80 text-indigo-600 transition-transform duration-300 group-hover/stat:scale-110">
                        <Zap size={15} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-indigo-700/80">
                          Response
                        </p>
                        <p className="text-xs font-semibold text-slate-900">
                          Instant
                        </p>
                      </div>
                    </div>
                    <div className="group/stat flex items-center gap-3 rounded-2xl border border-indigo-200/70 bg-transparent p-3 shadow-md shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100/80 text-indigo-600 transition-transform duration-300 group-hover/stat:scale-110">
                        <Clock size={15} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-indigo-700/80">
                          Protection
                        </p>
                        <p className="text-xs font-semibold text-slate-900">
                          24 / 7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════
         RIGHT — DUAL STICKER PROTECTION
            ═══════════════════════════════════════════════════════ */}
            <motion.div className="group relative overflow-hidden rounded-[32px] border border-indigo-200/80 bg-transparent p-6 shadow-lg shadow-indigo-500/5 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/10 sm:p-8 lg:p-9"
              variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } }}

            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-300/40 blur-[90px] transition-all duration-500 group-hover:bg-indigo-300/60" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-300/40 blur-[90px]" />

              {/* Header */}
              <div className="relative z-10">
                <h4 className="mt-5 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
                  Smart QR for{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    Backup
                  </span>
                </h4>
                <p className="mt-4 text-xs leading-6 text-slate-700 sm:text-sm">
                  Every Vehicle QR order comes with two identical QR stickers linked to the same vehicle. If one sticker gets damaged or becomes unreadable, the second sticker continues to work seamlessly, ensuring uninterrupted access to the vehicle’s information.
                </p>
              </div>

              {/* ═════════════════ QR CONNECTION DIAGRAM ═════════════════ */}
              <div className="relative z-10 mt-8">
                {/* Connection Label */}
                <div className="mb-5 flex items-center justify-center gap-2">

                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-300" />

                  <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-indigo-700/80">
                    One Vehicle · Multiple Stickers
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-300" />
                </div>


                {/* Sticker Diagram */}
                <div className="relative grid grid-cols-2 gap-3">


                  {/* PRIMARY */}
                  <div className="relative rounded-2xl border border-indigo-200 bg-transparent p-4 text-center shadow-md shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10">

                    {/* QR */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-200 bg-indigo-100/60 shadow-sm transition-transform duration-300 group-hover:scale-105">

                      <QrCode
                        size={31}
                        strokeWidth={1.5}
                        className="text-indigo-600"
                      />

                    </div>

                    <div className="mt-4">

                      <div className="inline-flex items-center gap-1.5">
                        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-indigo-700">
                          Primary
                        </p>
                      </div>


                      <p className="mt-2 text-[12px] font-medium text-slate-900">
                        Vehicle QR
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-600">
                        Primary Placement sticker
                      </p>

                    </div>

                  </div>

                  {/* BACKUP */}
                  <div className="relative rounded-2xl border border-blue-200 bg-transparent p-4 text-center shadow-md shadow-blue-500/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10">
                    {/* QR */}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-200 bg-blue-100/60 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <QrCode
                        size={31}
                        strokeWidth={1.5}
                        className="text-blue-600"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="inline-flex items-center gap-1.5">
                        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-blue-700">
                          Backup
                        </p>
                      </div>
                      <p className="mt-2 text-[12px] font-medium text-slate-900">
                        Backup QR
                      </p>
                      <p className="mt-1 text-[11px] leading-4 text-slate-600">
                        Backup vehicle QR sticker if Damaged
                      </p>
                    </div>
                  </div>

                  {/* Connecting Link */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <div className="absolute h-20 w-20 rounded-full bg-indigo-200/50 blur-xl" />
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-indigo-200 bg-white/80 shadow-md">
                      <span className="absolute left-[-25px] h-px w-6 border-t border-dashed border-indigo-300" />
                      <span className="absolute right-[-25px] h-px w-6 border-t border-dashed border-blue-300" />
                      <span className="text-sm text-indigo-600 font-bold">
                        ↔
                      </span>
                    </div>
                  </div>
                </div>
                {/* Protection Status — REDESIGNED WITH BETTER LAYOUT & ICON */}
                <div className="mt-5 rounded-2xl border border-indigo-200 bg-transparent p-4 shadow-md shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-200 text-white">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Always Protected
                        </p>
                        <p className="text-[12px] leading-4 text-slate-700">
                          If primary fails, backup works instantly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ SECTION 04 — TRUSTED BY ════════════════ */}
      <section
        className="relative overflow-hidden border-y border-slate-100 bg-cover bg-center pt-12 pb-20 shadow-lg lg:py-20"
        style={{ backgroundImage: "url('/images/benefit_bg.png')", }}
      >
        {/* Inner top shadow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo/5 to-transparent" />

        <div className="relative z-10 w-full max-w-8xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-12">

            <h3 className="text-2xl sm:text-5xl font-bold pb-10 text-slate-800">
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
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-slate-900 mt-2">
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
      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
        style={{
          background: "linear-gradient(150deg,#f8f7ff 0%,#f0ebff 30%,#e4dcff 65%,#c8b6ff 100%)",
        }}>


        {/* Dynamic Background Lights */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-[120px] -top-[80px] h-[320px] w-[320px] rounded-full bg-violet-400/20 blur-[90px] sm:-right-[10%] sm:-top-[10%] sm:h-[550px] sm:w-[550px]" />


          <div className="absolute -bottom-[80px] -left-[100px] h-[280px] w-[280px] rounded-full bg-purple-300/25 blur-[80px] sm:-bottom-[10%] sm:-left-[5%] sm:h-[400px] sm:w-[400px]" />


          <div className="absolute left-[35%] top-[40%] h-[220px] w-[220px] rounded-full bg-blue-300/15 blur-[70px] sm:left-[45%] sm:h-[300px] sm:w-[300px]" />
        </div>


        <ScrollReveal className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12">


          {/* Heading */}
          <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14 lg:mb-16">
            <h3 className="mt-2 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              All-in-One{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                Smart QR Platform.
              </span>
            </h3>


            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-relaxed">
              Keep check of historical visitors entries, manage emergency alerts,
              edit profiles details, or save your vehicle QR dashboard straight from
              our dashboard interface.
            </p>
          </ScrollReveal>


          {/* Main Content */}
          <div className="mx-auto grid max-w-8xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">


            {/* ═══════════════ LEFT CONTENT ═══════════════ */}
            <motion.div
              className="flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Title */}
              <h4 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                Scan n Go App Features Dashboard
              </h4>


              {/* ═══════════════ FEATURE CARDS ═══════════════ */}
              <motion.div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                  hidden: {},
                }}
              >
                {[
                  {
                    name: "Secure QR Code",
                    icon: <QrCode size={18} className="text-violet-600" />,
                    side: "left",
                  },
                  {
                    name: "Vehicle QR Management",
                    icon: <ScanLine size={18} className="text-violet-600" />,
                    side: "left",
                  },
                  {
                    name: "Instant Notifications",
                    icon: <Bell size={18} className="text-violet-600" />,
                    side: "right",
                  },
                  {
                    name: "Appointment & Meeting QR",
                    icon: <Clock size={18} className="text-violet-600" />,
                    side: "right",
                  },
                  {
                    name: "Contact QR Sharing",
                    icon: <Download size={18} className="text-violet-600" />,
                    side: "left",
                  },
                  {
                    name: "Update Profile Instantly",
                    icon: <User size={18} className="text-violet-600" />,
                    side: "right",
                  },
                ].map((appFeat, i) => (
                  <motion.div
                    key={i}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/30 bg-white/20 px-4 py-3.5 shadow-[0_8px_32px_rgba(31,38,135,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-violet-300/40 hover:bg-white/70 hover:shadow-[0_12px_40px_rgba(139,92,246,0.20)] sm:px-3 sm:py-3"
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
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60" />


                    {/* Icon */}
                    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/30 backdrop-blur-md transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                      {appFeat.icon}
                    </span>


                    {/* Text */}
                    <span className="relative text-left text-sm font-medium text-slate-700 sm:text-[15px]">
                      {appFeat.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>



              {/* ═══════════════ DOWNLOAD BUTTONS ═══════════════ */}
              <div className="flex flex-wrap justify-center gap-3 pt-2 sm:gap-10 lg:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.scc.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-95"
                >
                  <img
                    src="/images/googleplay.png"
                    alt="Get it on Google Play"
                    className="h-11 w-auto object-contain sm:h-13"
                  />
                </a>


                <a
                  href="https://apps.apple.com/us/app/Scan%20n%20Go%20-easy-entry/id6502510648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-95"
                >
                  <img
                    src="/images/appstore.png"
                    alt="Download on the App Store"
                    className="h-11 w-auto object-contain sm:h-13"
                  />
                </a>
              </div>


              {/* ══════════ STATS COUNTER ROW (Unified + sign inside ticker) ═════════ */}
              <motion.div
                className="flex w-full items-center justify-around sm:justify-start sm:gap-8 border-t border-purple-200/60 pt-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                {/* Downloads */}
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start">
                    <NumberTicker
                      value={1016}
                      duration={1.5}

                      startOnView
                      suffix="+"
                      className="text-3xl font-extrabold tracking-tight text-violet-600 sm:text-4xl"
                    />
                  </div>
                  <p className="mt-1 text-sm font-semibold text-violet-500 sm:text-base">
                    Downloads
                  </p>
                </div>


             
                {/* Vertical Divider 2 */}
                <div className="h-10 w-[2px] bg-purple-300/60 sm:mx-4" />


                {/* Partners */}
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start">
                    <NumberTicker
                      value={21}
                      duration={1.5}

                      startOnView
                      suffix="+"
                      className="text-3xl font-extrabold tracking-tight text-violet-600 sm:text-4xl"
                    />
                  </div>
                  <p className="mt-1 text-sm font-semibold text-violet-500 sm:text-base">
                    Partners
                  </p>
                </div>


              </motion.div>

            </motion.div>


            {/* ═══════════════ RIGHT — MOBILE APP IMAGE ═══════════════ */}
            <div
              className="
    relative flex w-full items-center justify-center
    overflow-visible
    pt-2
    sm:pt-4
    lg:min-h-[300px]
    lg:justify-center
    lg:pt-0
  "
            >
              <img
                src="/images/all-in-one-1.png"
                alt="Scan n Go Mobile App Preview"
                className="
      relative z-10
      w-[360px] h-[420px]
      object-contain
      drop-shadow-[0_25px_45px_rgba(67,56,202,0.25)]
      animate-float

      sm:w-[280px] sm:h-[450px]

      lg:w-[600px] lg:h-auto
    "
                style={{ animationDelay: "0.5s" }}
              />
            </div>

          </div>
        </ScrollReveal>
      </section>


      {/* ════════════════ SECTION 07 — TESTIMONIALS ════════════════ */}

      <section className="relative py-20 bg-white">


        <div className="w-full max-w-[1440px] mx-auto">
          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <div className="max-w-4xl mx-auto px-4 text-center sm:px-6">


              <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold   leading-tight text-slate-900">
                Loved By Daily  <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-500 bg-clip-text text-transparent">
                  Users  &amp; Team Admins</span>
              </h3>

              <p className="mt-4 text-sm sm:text-base lg:text-md leading-7 text-slate-500  mx-auto">
                Discover how Scan n Go helps teams save time, improve security, and manage daily activities more efficiently.

              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <TestimonialsEditorial />
          </ScrollReveal>

        </div>
      </section>

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
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-slate-900 mt-2">

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

      <section className="bg-white py-10 sm:py-14 lg:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[34px] bg-gradient-to-r from-[#24115F] via-[#3E1E9E] to-[#6C3DF5] shadow-[0_25px_70px_rgba(36,17,95,.25)]">

              {/* Background */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

              {/* White Curved Shape */}
              <div className="hidden lg:block absolute right-[-220px] top-[-120px] w-[760px] h-[760px] rounded-full bg-white/95" />

              {/* Waves */}
              <div className="hidden lg:block absolute inset-0 overflow-hidden">
                <div className="wave-1 absolute left-[40%] bottom-[-100px] w-[650px] h-[650px] rounded-full border border-white/10" />
                <div className="wave-2 absolute left-[45%] bottom-[-100px] w-[720px] h-[720px] rounded-full border border-white/10" />
                <div className="wave-3 absolute left-[50%] bottom-[-120px] w-[790px] h-[790px] rounded-full border border-white/10" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center">

                {/* ================= LEFT ================= */}
                <div className="w-full lg:w-[46%] px-6 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-14 text-center lg:text-left">

                  <h2 className="hero-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl max-w-xl mx-auto lg:mx-0 text-white leading-tight transition-transform duration-500 hover:scale-[1.02]">
                    <span className="block hero-heading-gradient">
                      LET’S CREATE BETTER, SECURE AND QUICK FUTURE WITH US
                    </span>
                  </h2>

                  <p className="mt-5 sm:mt-7 max-w-md mx-auto lg:mx-0 text-sm sm:text-base text-white/75 leading-7 sm:leading-8">
                    Partner with Scan n Go and build a safer,
                    smarter and contactless future together.
                  </p>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center text-sm sm:text-base gap-3 sm:gap-4 mt-7 sm:mt-10 rounded-xl bg-white px-6 sm:px-8 py-3 font-semibold text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
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

                {/* ================= RIGHT ================= */}
                <div
                  className="
              relative
              w-full
              lg:w-[54%]
              h-[200px]
              sm:h-[360px]
              md:h-[400px]
              lg:h-[420px]
              flex
              items-center
              justify-center
            "
                >

                  {/* Shadow */}
                  <div className="absolute bottom-8 sm:bottom-12 w-48 sm:w-64 md:w-72 h-12 sm:h-16 rounded-full bg-indigo-900/25 blur-xl" />

                  {/* Platform */}
                  <div className="absolute bottom-12 sm:bottom-16 w-48 sm:w-56 md:w-64 h-12 sm:h-16 rounded-full bg-gradient-to-b from-white to-indigo-200 shadow-2xl" />

                  <div className="absolute bottom-[68px] sm:bottom-[92px] w-40 sm:w-48 md:w-52 h-7 sm:h-9 rounded-full bg-white" />

                  {/* Shield */}
                  <div
                    className="
                absolute
                right-[8%]
                sm:right-[12%]
                md:right-[15%]
                lg:right-24
                top-8
                sm:top-10
                md:top-14
                hidden md:flex
                items-center
                justify-center
                w-28
                h-32
                sm:w-32
                sm:h-36
                lg:w-40
                lg:h-44
                rounded-[28px]
                lg:rounded-[36px]
                bg-gradient-to-b
                from-[#7054ff]
                to-[#4f2fd3]
                rotate-12
                shadow-[0_30px_50px_rgba(76,50,220,.45)]
              "
                  >
                    <svg
                      className="w-12 h-12 lg:w-16 lg:h-16 text-white"
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
                  <div className="relative z-20 rounded-[22px] sm:rounded-[26px] lg:rounded-[30px] bg-white p-4 sm:p-5 lg:p-6 shadow-[0_35px_80px_rgba(30,20,80,.25)]">

                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40">

                      {/* Scanner Corners */}
                      <div className="absolute top-0 left-0 w-7 h-7 sm:w-8 sm:h-8 border-l-4 border-t-4 border-indigo-500 rounded-tl-xl" />

                      <div className="absolute top-0 right-0 w-7 h-7 sm:w-8 sm:h-8 border-r-4 border-t-4 border-indigo-500 rounded-tr-xl" />

                      <div className="absolute bottom-0 left-0 w-7 h-7 sm:w-8 sm:h-8 border-l-4 border-b-4 border-indigo-500 rounded-bl-xl" />

                      <div className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 border-r-4 border-b-4 border-indigo-500 rounded-br-xl" />

                      {/* QR IMAGE */}
                      <img
                        src="/images/scan-QR.png"
                        alt="QR Code"
                        className="
                    absolute
                    inset-4
                    sm:inset-5
                    w-[96px]
                    h-[96px]
                    sm:w-[108px]
                    sm:h-[108px]
                    lg:w-[120px]
                    lg:h-[120px]
                    object-contain
                  "
                      />

                    </div>
                  </div>

                  {/* Floating Dots */}
                  <div className="absolute right-[8%] sm:right-[10%] md:right-10 top-16 sm:top-20 md:top-24 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-indigo-300" />

                  <div className="absolute right-[5%] sm:right-6 bottom-12 sm:bottom-16 md:bottom-20 w-2 h-2 rounded-full bg-purple-400" />

                  <div className="absolute right-[15%] sm:right-20 md:right-24 bottom-20 sm:bottom-28 md:bottom-32 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-indigo-200" />

                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
