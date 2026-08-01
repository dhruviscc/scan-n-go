"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import ScrollReveal from "@/components/ScrollReveal";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
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
  Factory,
  Heart,
  HomeIcon,
  Hospital,
  House,
  Link as LinkIconLucide,
  MapPin,
  Minus,
  ParkingCircle,
  Plus,
  QrCode,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  User,
  Wifi,
  // Image as LucideImage, // Renamed to avoid conflict with next/image
  Zap,
} from "lucide-react";


/* ──────────────────────────────────────────
   Feature Card (Hero floating layout)
────────────────────────────────────────── */
import Image from "next/image";
interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  desc: string;
  delay?: string;
  className?: string;
}
const FeatureCard = ({ icon, iconBg, title, desc, delay = "0s", className = "" }: FeatureCardProps) => (
  <div
    className={`feat-card absolute bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_30px_-5px_rgba(124,58,237,0.12)] p-3 flex flex-col items-center text-center gap-1.5 w-[160px] border border-violet-100/70 hover:shadow-[0_20px_45px_-8px_rgba(124,58,237,0.25)] hover:-translate-y-1 transition-all duration-500 ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shadow-inner ${iconBg}`}>{icon}</div>
    <p className="text-[16px] font-extrabold text-slate-800 leading-tight">{title}</p>
    <p className="text-[13px] text-slate-400 ">{desc}</p>
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

  // Section 04 States
  const [demoAlert, setDemoAlert] = useState<"none" | "normal" | "emergency">("none");


  // Section 11 States (FAQ Accordion toggles)
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
        className="relative overflow-hidden flex items-center justify-center pt-20 pb-12 lg:pb-32"
        style={{ background: "linear-gradient(150deg,#f8f7ff 0%,#f0ebff 30%,#e4dcff 65%,#c8b6ff 100%)" }}
      >
        {/* Colorful dynamic background lights */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-violet-400/25 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-300/35 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-[35%] left-[45%] w-[300px] h-[300px] rounded-full bg-blue-300/20 blur-[80px]" />
        </div>

        <div className="relative w-full max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-25">

            {/* HERO LEFT */}
            <motion.div
              className="hero-left space-y-7 z-10"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {},
              }}
            >
              <motion.div
                className="inline-flex items-center gap-3 rounded-full border border-violet-200/80 bg-white/90 px-5 py-2.5 shadow-lg backdrop-blur-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}>
                <Sparkles size={16} className="text-violet-600" />

                <span className="text-sm font-semibold text-gray-800">
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
                className="max-w-6xl text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                Smart QR Platform for
                <br />
                <TypeAnimation
                  sequence={[
                    "Emergency Vehicle Access",
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
                  className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                />
              </motion.h1>

              <motion.p
                className="mt-8 max-w-2xl text-lg lg:text-xl leading-8 text-slate-600"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                Simplify identity, visitor, vehicle, attendance, and emergency management
                with one secure QR platform. Scan once, verify instantly, and access
                information whenever it matters.
              </motion.p>


              <motion.div
                className="flex flex-wrap gap-4 pt-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                <Link
                  href="/contact"
                  id="hero-contact-btn"
                  className="cta-primary inline-flex items-center gap-3 px-7 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-lg font-bold shadow-lg shadow-violet-500/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight size={22} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </motion.div>

            {/* HERO RIGHT (Phone Mockup + Floating Feature Cards) */}
            <div className="relative flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[650px]">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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
                className="hero-phone relative z-10"
                style={{ width: 280 }}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="relative rounded-[40px] bg-white  border-[8px] border-slate-900 shadow-2xl" id="phoneMockup" style={{ height: 530 }}>

                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-18 h-4 bg-slate-900 rounded-full z-20" />

                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-3 pb-1.5 text-[10px] font-black text-slate-700">
                    <span>9:41</span>
                    <div className="flex gap-1.5 items-center">
                      <Zap size={10} />
                      <span>5G</span>
                    </div>
                  </div>

                  <div className="text-center pt-1.5 pb-1">
                    <p className="text-[10px] font-black text-violet-600 tracking-widest uppercase">SCAN-N-GO SECURITY</p>
                  </div>

                  {/* Animated scanning QR code */}
                  <div className="relative mx-auto w-30 h-30 rounded-2xl bg-white p-2 shadow-inner border border-violet-50 mt-2">
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

                  <div className="text-center mt-3 scale-95">
                    <p className="text-[16px] font-black text-slate-800 leading-none">John Doe Profile</p>
                    <p className="text-[10px] px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-700 inline-block font-mono  mt-1">UID: SNG-889812-H</p>
                  </div>

                  {/* Category grids */}
                  <div className="absolute -left-10 mt-5 w-[130%] rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,23,42,.12)] border border-slate-100 overflow-hidden">
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
                          className={`relative flex flex-col items-center justify-center p-3 transition-all duration-300 hover:bg-slate-50 hover:-translate-y-1 ${index !== 3 ? "border-r border-slate-200" : ""}`}
                        >
                          <div className="mb-3">
                            {item.icon}
                          </div>

                          <span className="text-[13px] font-semibold text-slate-800">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emergency notification trigger */}
                  <div className="absolute -left-10 bottom-20 w-[130%] h-20 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-4 py-3 text-white shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                        <Bell size={30} className="text-white" />
                      </div>

                      {/* Text */}
                      <div>
                        <h4 className="text-lg  leading-none">
                          Emergency Assist Active
                        </h4>
                        <p className="mt-1 text-sm text-violet-100">
                          Alert family contacts in 1-click
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                      <ChevronRight size={18} className="text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0  left-0 right-0  px-2 py-3">
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
                              size={20}
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
              <div className="lg:absolute inset-0 flex flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-0 mt-16 lg:mt-0">
                <FeatureCard
                  icon={<Heart color="#ef4444" size={24} />}
                  iconBg="bg-red-50"
                  title="Emergency "
                  desc="Emergency Medical Information"
                  delay="0.1s"
                  className="relative lg:absolute left-0 sm:left-2 top-auto lg:top-[50px]"
                />
                <FeatureCard
                  icon={<Car color="#2563eb" size={24} />}
                  iconBg="bg-blue-50"
                  title="Vehicle QR Card"
                  desc="Fast Parking Connection"
                  delay="0.5s"
                  className="relative lg:absolute right-0 sm:right-2 top-auto lg:top-[50px]"
                />
                <FeatureCard
                  icon={<Building color="#8b5cf6" size={24} />}
                  iconBg="bg-purple-50"
                  title="Business Card"
                  desc="Instantly Hub Socials"
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
                { icon: <ScanLine size={24} />, label: "Instant QR Scan", sub: "Speedy entry & identity logs" },
                { icon: <Bell size={24} />, label: "Live Notifications", sub: "Dual-channel owner alerts" },
                { icon: <ParkingCircle size={24} />, label: "Vehicle QR", sub: "Scan the vehicle QR to instantly notify" },
              ].map((f) => (
                <motion.div
                  key={f.label}
                  className="feature-pill flex items-center gap-4 bg-white/80 backdrop-blur-lg rounded-3xl p-4 shadow-xl border border-white/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                  variants={{
                    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
                    hidden: { y: 30, opacity: 0 },
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shrink-0">{f.icon}</div>
                  <div>
                    <p className="text-[20px] font-black text-slate-800">{f.label}</p>
                    <p className="text-[15px] text-slate-500 mt-1 leading-snug">{f.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>



      {/* ════════════════ SECTION 02 — SMART ENTRY SOLUTIONS ════════════════ */}
      <section id="use-cases" className="py-24 bg-white">


        {/* Top Left Blob */}
        <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-violet-200/30 blur-md animate-blob-1" />

        {/* Bottom Right Blob */}
        <div className="absolute bottom-5 right-[30%] h-40 w-40 rounded-full bg-cyan-200/25 blur-sm animate-blob-2" />

        {/* Center Glow */}
        <div className="absolute right-[10px] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-100/30 blur-sm animate-blob-3" />
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="max-w-xl mx-auto text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Smart QR Solutions
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
              { title: "Vehicle QR", desc: "Smart QR technology that enhances vehicle safety, access, and emergency response with instant notifications.", features: ["Emergency Alerts", "Silent Mode Siren", "Parking Information"], color: "border-blue-100/70", iconColor: "text-blue-600", img: "/images/vehicle-scan.jpg" },
              { title: "Contact QR", desc: "Share your professional or personal contact details instantly with a single QR scan.", features: ["Instant Contact Sharing", "Quick Save", "Secure Sharing"], color: "border-indigo-100/70", iconColor: "text-indigo-600", img: "/images/contact-scan-4.png" },
              { title: "Queue QR", desc: "Digitise queue management with QR-based token generation and real-time notifications.", features: ["Digital Token System", "Live Queue Status", "Turn Notifications", "Reduced Waiting Time"], color: "border-emerald-100/70", iconColor: "text-emerald-600", img: "/images/queue-scan-2.png" },
              { title: "Gate QR", desc: "Secure visitor access with QR-based entry, exit, and attendance management.", features: ["QR Check-In & Check-Out", "Attendance Management", "Access Control", "Entry And Exit History"], color: "border-purple-100/70", iconColor: "text-violet-600", img: "/images/gate-scan-1.png" },
              { title: "Guest Entry Notification", desc: "Keep residents informed with instant notifications for every visitor arrival and departure.", features: ["Instant Visitor Alerts", "Real-Time Updates", "Greeting Notifications", "Visitor Activity Log"], color: "border-amber-100/70", iconColor: "text-amber-600", img: "/images/guest-notification-1.png" },
              { title: "Meeting QR", desc: "Organise and manage meetings with QR-based check-in, attendance tracking, and scheduled access.", features: ["QR Meeting Check-In", "Time-Based Access", "Attendance Tracking", "Attendance Reports"], color: "border-blue-100/70", iconColor: "text-blue-600", img: "/images/meeting-scan.png" },
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
                              <h4 className="text-2xl font-bold">
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

                          <p className="mt-3 text-md leading-6 text-slate-600">
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

                        <h4 className="text-3xl font-bold text-slate-900">
                          {sol.title}
                        </h4>

                        <p className="mt-3 text-lg leading-6 text-slate-600">
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
                              <span className="text-[15px] font-medium text-slate-700">
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




      {/* ════════════════ SECTION 03 — WHY CHOOSE Scan-N-Go ════════════════ */}
      <section id="features" className="relative overflow-hidden border-t border-slate-100 bg-[#fcfbff] py-16 sm:py-20">

        {/* fviolet Blob */}
        <div className="absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-500/25 via-fuchsia-400/15 to-transparent blur-[90px] animate-blob-one" />
        {/* Pink Glow */}
        <div className="absolute bottom-[-140px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-400/18 via-violet-300/12 to-transparent blur-[100px] animate-blob-three" />
        {/* Cyan Blob */}
        <div className="absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-300/15 to-transparent blur-[80px] animate-blob-two" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#7c3aed] mb-1.5 font-mono block">WHY CHOOSE OUR PLATFORM</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Vehicle QR Features
            </h3>
            <p className="text-slate-500 mt-4 text-lg leading-relaxed">
              We design specialized QR tools for everyday security. From smart vehicle stickers to identity protection hubs, Scan-N-Go simplifies connection workflows.
            </p>
          </ScrollReveal>

          {/* Core Feature Demos Grid */}
          <ScrollReveal className="grid gap-5 lg:grid-cols-2">

            {/* Demo 1: Smart Emergency & Vehicle QR (Simulator) */}
            <div className="min-h-[310px] rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-violet-50 p-6 shadow-[0_12px_35px_-20px_rgba(91,33,182,0.3)] sm:p-4">
              <div >


                <h4 className=" text-2xl font-black text-slate-800 mb-3">One Platform for Every QR Solution</h4>

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
                      <p className="flex items-center gap-2 text-sm font-black text-slate-800">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-200"><Bell size={15} /></span> Normal Alert
                      </p>
                      <p className="ml-10 mt-2 text-xs leading-5 text-slate-500">
                        For general updates and everyday communication.
                      </p>
                    </div>

                    <div>
                      <p className="flex items-center gap-2 text-sm font-black text-red-600">
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
                <span className="text-[13px] uppercase font-black tracking-widest text-[#7c3aed] bg-purple-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <ShieldCheck size={13} /> Backup Sticker Shield
                </span>
                <h4 className="mt-3 text-xl font-black text-slate-800 sm:text-2xl">Dual Sticker Protection</h4>
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

                    <p className="mt-2 text-[10px] font-black uppercase tracking-wider text-violet-700 sm:text-xs">
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

                    <p className="mt-2 text-[10px] font-black uppercase tracking-wider text-sky-700 sm:text-xs">
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

            <h3 className="text-2xl sm:text-4xl font-black pb-10 text-slate-800">
              Trusted By IT Companies & Organizations
            </h3>
          </ScrollReveal>

          <div className="relative overflow-hidden">
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
        </div>
      </section>

      {/* ════════════════ SECTION 05 — WHERE YOU CAN USE ════════════════ */}

      <section className="relative overflow-hidden bg-white py-20">

        {/* Top Left Blob */}
        <div className="absolute top-24 left-[30%] h-52 w-52 rounded-full bg-violet-200/30  blur-md" />

        {/* Aurora Blob - Left */}
        <div className="absolute left-[10%] top-40 h-30 w-30 rounded-full bg-gradient-to-br from-fuchsia-400/35 via-violet-400/20 to-transparent blur-lg  animate-blob-left" />
        {/* Pink Glow */}
        <div className="absolute bottom-[-140px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-400/18 via-violet-300/12 to-transparent blur-[100px] animate-blob-three" />
        {/* Cyan Blob */}
        <div className="absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-300/15 to-transparent blur-[80px] animate-blob-two" />


        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="max-w-xl mx-auto text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-2">
              WHERE YOU CAN USE
            </h3>
            <p className="text-slate-500 mt-3 text-md leading-relaxed ">
              From gated communities and corporate offices to schools, industries, and buildings, Scan-N-Go delivers secure, smart, and seamless QR-powered management for every location.
            </p>
          </ScrollReveal>

          <div
            className="relative  overflow-hidden rounded-[10px] px-8 lg:px-10 py-20"
          >


            {/* Content */}
            <div className="relative z-10">
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
        </div>
      </section>




      {/* ════════════════ SECTION 06 — MOBILE APP PREVIEW ════════════════ */}
      <section className="py-20 bg-slate-50 relative">


        {/* Top Left Blob */}
        <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-violet-200/30 blur-md animate-blob-1" />

        {/* Bottom Right Blob */}
        <div className="absolute bottom-45 left-[25%] h-40 w-40 rounded-full bg-purple-200/25 blur-md animate-blob-2" />

        {/* Center Glow */}
        <div className="absolute right-[10px] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-100/30 blur-sm animate-blob-3" />

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="max-w-xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#7c3aed] mb-1.5 font-mono block">PRODUCT PREVIEW</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-2">
              Everything in One Simple App
            </h3>
            <p className="text-slate-500 mt-3 text-md leading-relaxed">
              Keep check of historical visitors entries, manage emergency tags, edit profiles details, or save your vehicle QR dashboard straight from our dashboard interface.
            </p>
          </ScrollReveal>

          <ScrollReveal className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* Feature lists on Left */}
            <div className="space-y-6 ">
              <h4 className="text-3xl font-black text-slate-800">Scan-N-Go App Features Dashboard</h4>
              <p className="text-md text-slate-500 leading-relaxed">
                Connect your physical cards and windshield stickers to safe databases. The application lets owners edit emergency contact numbers instantly without buying new stickers.
              </p>

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
                  { name: "Scan QR on Go", icon: <ScanLine size={14} className="text-violet-600" />, side: "left" },
                  { name: "Instant Notifications", icon: <Bell size={14} className="text-violet-600" />, side: "right" },
                  { name: "Direct QR Editor", icon: <QrCode size={14} className="text-violet-600" />, side: "left" },
                  { name: "Visitor History Log", icon: <Clock size={14} className="text-violet-600" />, side: "right" },
                  { name: "Sticker Download PDFs", icon: <Download size={14} className="text-violet-600" />, side: "left" },
                  { name: "Update Profile instantly", icon: <User size={14} className="text-violet-600" />, side: "right" },
                ].map((appFeat, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 p-4 rounded-xl hover:border-violet-200 hover:shadow-sm transition-all duration-300 group"
                    variants={{
                      hidden: { opacity: 0, x: appFeat.side === 'left' ? -50 : 50 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                  >
                    <span className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                      {appFeat.icon}
                    </span>
                    <span className="text-sm font-bold text-slate-700">{appFeat.name}</span>
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
      </section>




      {/* ════════════════ SECTION 07 — TESTIMONIALS ════════════════ */}

      <section className=" relative py-20 bg-white">

          {/* Top Left Blob */}
        <div className="absolute top-24 left-[30%] h-52 w-52 rounded-full bg-violet-200/30  blur-md" />

        {/* Aurora Blob - Left */}
        <div className="absolute right-[10%] bottom-40 h-30 w-30 rounded-full bg-gradient-to-br from-fuchsia-400/35 via-violet-400/20 to-transparent blur-lg  animate-blob-left" />
       
        {/* Pink Glow */}
        <div className="absolute bottom-[-140px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-400/18 via-violet-300/12 to-transparent blur-[100px] animate-blob-three" />
        {/* Cyan Blob */}
        <div className="absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-300/15 to-transparent blur-[80px] animate-blob-two" />

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="max-w-xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#7c3aed] mb-1.5 font-mono block">TESTIMONIALS</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-2">
              Loved By Daily Users &amp; Team Admins
            </h3>
            <p className="text-slate-500 mt-3 text-md leading-relaxed">
              Discover how residential occupants, local retail store owners, and vehicle drivers secure daily entries and emergency loops.
            </p>
          </ScrollReveal>

          <TestimonialCarousel />

          <ScrollReveal className="hidden grid md:grid-cols-3 gap-8">
            {[
              {
                user: "Vehicle User",
                name: "Rahul Verma",
                role: "Commuter & Car Owner",
                text: "The Vehicle QR sticker saved my car from being towed! Someone blocked my parkway and simply scanned the sticker to text alert me. My privacy stayed fully protected.",
                stars: 5,
                icon: <Car size={16} className="text-blue-500" />,
                color: "from-blue-500 to-indigo-600",
              },
              {
                user: "Business Owner",
                name: "Sarah Jenkins",
                role: "Admin, Innova Solutions",
                text: "We installed the Security Attendance QR at our primary gate. Time-clocks proxies decreased by 95%! Excel exports are clear, and support responds in minutes.",
                stars: 5,
                icon: <Building2 size={16} className="text-violet-500" />,
                color: "from-violet-500 to-purple-600",
              },
              {
                user: "Family User",
                name: "Meera Nair",
                role: "Daughter of Senior Citizen",
                text: "My elderly father checks in around town wearing our Emergency  pendant. It gives us immense peace of mind knowing anyone can scan it to instantly ping his coordinates to us.",
                stars: 5,
                icon: <Heart size={16} className="text-emerald-500" />,
                color: "from-emerald-500 to-teal-600",
              },
            ].map((review, idx) => (
              <div key={idx} className="group bg-white border border-slate-100 p-8 rounded-3xl shadow-[0_4px_18px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-md sm:text-md text-slate-500 leading-relaxed italic">&quot;{review.text}&quot;</p>
                </div>
                <div className="border-t border-slate-100 pt-5 mt-6 flex items-center gap-3.5">
                  {/* Clean icon-based avatar instead of SVG vector */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${review.color} p-[2px] shadow-md shrink-0`}>
                    <div className="bg-white w-full h-full rounded-[14px] flex items-center justify-center">
                      {review.icon}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-black text-slate-900">{review.name}</h5>
                    <p className="text-[14px] text-slate-400 mt-0.5 font-bold">{review.role} • <span className="font-extrabold text-violet-600 uppercase font-mono text-[12px]">{review.user}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════ SECTION 8 — FREQUENTLY ASKED QUESTIONS ════════════════ */}


      <section className="py-20 bg-slate-50">
        {/* Design Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal className="max-w-xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#7c3aed] mb-1.5 font-mono block">HELP CENTER</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-2">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              Discover answers to common security compliance check logs and vehicle stickers setup workflows.
            </p>
          </ScrollReveal>

          <ScrollReveal className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What is Scan-N-Go?",
                a: "Scan-N-Go is an intelligent, secure QR platform for digital identity profiles, visitors entry logs, vehicle alerts routing, clinic queues coordination, and emergency contact pages. Safe, passwordless QR checks require no third-party application downloads.",
              },
              {
                q: "How does Vehicle QR work?",
                a: "Each vehicle is assigned a secure dual-sticker tag that matches windshield shields. Passersby scan codes to flag issues (parking blockages, headlights left on). Our systems forward messages without displaying your phone number details.",
              },
              {
                q: "Is my personal data secure?",
                a: "Yes. Scan-N-Go protects user data with industry-leading encryption and verified cloud databases. You control exactly what parameters are public (e.g. name, medical logs, blood group details) during dashboard setups.",
              },
              {
                q: "How does Emergency  work?",
                a: "When responders scan your safety tag, the system displays vital safety directives (blood type, prescriptions) and instantly pings your emergency contact list with live GPS coordinate indicators.",
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
                    <span className="text-md sm:text-xl">{faq.q}</span>
                    <span className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shrink-0 transition-transform duration-300" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>
                      {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                    </span>
                  </button>
                  <div
                    className="transition-all duration-300 ease-in-out overflow-hidden"
                    style={{ maxHeight: isOpen ? 200 : 0 }}
                  >
                    <p className="p-5 pt-0 text-lg text-slate-500 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>



      {/* ════════════════ SECTION 09 — CALL TO ACTION ════════════════ */}


      <section className="py-14 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-r from-[#24115F] via-[#3E1E9E] to-[#6C3DF5] shadow-[0_25px_70px_rgba(36,17,95,.25)]">

            {/* Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

            {/* White Curved Shape */}
            <div className="hidden lg:block absolute right-[-220px] top-[-120px] w-[760px] h-[760px] rounded-full bg-white/95"></div>

            <div className="hidden lg:block absolute inset-0 overflow-hidden">
              <div
                className=" wave-1 absolute left-[40%] bottom-[-100px] w-[650px] h-[650px] rounded-full border border-white/10" />

              <div
                className="wave-2 absolute left-[45%] bottom-[-100px] w-[720px] h-[720px] rounded-full border border-white/10" />

              <div
                className="wave-3 absolute left-[50%] bottom-[-120px] w-[790px] h-[790px] rounded-full border border-white/10" />

            </div>


            <div className="relative z-10 flex flex-col lg:flex-row items-center">

              {/* LEFT */}

              <div className="w-full lg:w-[46%] px-8 py-14 lg:px-16">

                <h2 className="hero-heading text-2xl sm:text-3xl md:text-4xl w-2xl text-start text-white leading-tight transition-transform duration-500 hover:scale-105">
                  <span className="block hero-heading-gradient">
                    LET’S CREATE BETTER, SECURE AND QUICK FUTURE WITH US
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-white/75 text-lg leading-8">

                  Partner with Scan n Go and build a safer,
                  smarter and contactless future together.

                </p>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 mt-10 rounded-2xl bg-white px-9 py-4 font-semibold text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
      </section>
    </>
  );
}
