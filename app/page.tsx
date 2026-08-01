"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
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
            <div className="hero-left space-y-7 z-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-violet-200/80 bg-white/90 px-5 py-2.5 shadow-lg backdrop-blur-md">
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
              </div>

              <h1 className="max-w-6xl text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
                One QR Platform for
                <br />
                <TypeAnimation
                  sequence={[
                    "Emergency Access",
                    2500,
                    "Vehicle Security",
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
              </h1>

              <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-8 text-slate-600">
                Simplify identity, visitor, vehicle, attendance, and emergency management
                with one secure QR platform. Scan once, verify instantly, and access
                information whenever it matters.
              </p>


              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  id="hero-contact-btn"
                  className="cta-primary inline-flex items-center gap-3 px-7 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-lg font-bold shadow-lg shadow-violet-500/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight size={22} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

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
              <div className="hero-phone relative z-10" style={{ width: 280 }}>
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
              </div>

              {/* 4 Floating Feature Cards around Phone - Now responsive */}
              <div className="lg:absolute inset-0 flex flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-0 mt-16 lg:mt-0">
                <FeatureCard
                  icon={<Heart color="#ef4444" size={24} />}
                  iconBg="bg-red-50"
                  title="Emergency "
                  desc="Critical Medical Panel"
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
      <div className="relative z-10">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 lg:absolute lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2 lg:translate-y-1/2">
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
                { icon: <ParkingCircle size={24} />, label: "Vehicle Parking", sub: "No-hassle parking connection" },
              ].map((f) => (
                <motion.div
                  key={f.label}
                  className="feature-pill flex items-center gap-4 bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/60 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                  variants={{
                    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
                    hidden: { y: 30, opacity: 0 },
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shrink-0">{f.icon}</div>
                  <div>
                    <p className="text-[20px] font-black text-slate-800">{f.label}</p>
                    <p className="text-[16px] text-slate-500 mt-1 leading-snug">{f.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>


      {/* ════════════════ SECTION 02 — TRUSTED BY ════════════════ */}
      <section className=" overflow-hidden border-y border-slate-100 bg-slate-50 pt-12 pb-20 lg:pt-30">


        <div className="w-full max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">

            <h3 className="text-2xl sm:text-3xl font-black text-slate-800">
              Trusted By IT Companies & Organizations
            </h3>
          </div>

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

      {/* ════════════════ SECTION 03 — SMART ENTRY SOLUTIONS ════════════════ */}
      <section id="use-cases" className="py-20 bg-white">

        <div className="absolute left-10 top-[40%] animate-float-slow rounded-2xl border border-violet-100 bg-white p-4 shadow-lg rotate-[-12deg]">
          <QrCode className="h-7 w-7 text-violet-600" />
        </div>

        <div className="absolute right-16 bottom-24 animate-float-medium rounded-2xl border border-violet-100 bg-white p-4 shadow-lg rotate-12">
          <ShieldCheck className="h-7 w-7 text-emerald-500" />
        </div>

        <div className="absolute right-1/4 top-16 animate-float-fast rounded-2xl border border-violet-100 bg-white p-4 shadow-lg">
          <Smartphone className="h-7 w-7 text-sky-500" />
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Smart QR Solutions
            </h3>
            <p className="text-slate-500 mt-3 text-sm sm:text-base leading-relaxed">
              One intelligent platform to manage visitors, appointments, meetings, dining, and digital contacts with a simple QR scan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Vehicle QR", desc: "Smart QR technology that enhances vehicle safety, access, and emergency response with instant notifications.", features: ["Emergency Alerts", "Silent Mode Siren", "Parking Information"], color: "border-blue-100/70", iconColor: "text-blue-600", img: "/images/vehicle-scan.jpg" },
              { title: "Contact QR", desc: "Share your professional or personal contact details instantly with a single QR scan.", features: ["Instant Contact Sharing", "Quick Save", "Secure Sharing"], color: "border-indigo-100/70", iconColor: "text-indigo-600", img: "/images/contact-scan-4.png" },
              { title: "Queue QR", desc: "Digitise queue management with QR-based token generation and real-time notifications.", features: ["Digital Token System", "Live Queue Status", "Turn Notifications", "Reduced Waiting Time"], color: "border-emerald-100/70", iconColor: "text-emerald-600", img: "/images/queue-scan-2.png" },
              { title: "Gate QR", desc: "Secure visitor access with QR-based entry, exit, and attendance management.", features: ["QR Check-In & Check-Out", "Attendance Management", "Access Control", "Entry And Exit History"], color: "border-purple-100/70", iconColor: "text-violet-600", img: "/images/gate-scan-1.png" },
              { title: "Guest Entry Notification", desc: "Keep residents informed with instant notifications for every visitor arrival and departure.", features: ["Instant Visitor Alerts", "Real-Time Updates", "Greeting Notifications", "Visitor Activity Log"], color: "border-amber-100/70", iconColor: "text-amber-600", img: "/images/guest-notification-1.png" },
              { title: "Meeting QR", desc: "Organise and manage meetings with QR-based check-in, attendance tracking, and scheduled access.", features: ["QR Meeting Check-In", "Time-Based Access", "Attendance Tracking", "Attendance Reports"], color: "border-blue-100/70", iconColor: "text-blue-600", img: "/images/meeting-scan.png" },
            ].map((sol, index) => (
              <div
                key={index}
                className="relative group"
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
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════ SECTION 04 — WHY CHOOSE Scan-N-Go ════════════════ */}
      <section id="features" className=" relative py-20 bg-slate-50 border-t border-slate-100">
        <div className="absolute left-12 top-[40%] rounded-2xl bg-white p-4 shadow-lg border border-violet-100 rotate-12 animate-float-medium">
          <Smartphone className="h-7 w-7 text-sky-500" />
        </div>
        {/* Top Left Blob */}
        <div className="absolute -top-24 -left-24 h-42 w-42 rounded-full bg-violet-200/40" />

        <div className="absolute right-10 bottom-20 rounded-2xl bg-white p-4 shadow-lg border border-violet-100 rotate-[-8deg] animate-float-slow">
          <Bell className="h-7 w-7 text-orange-500" />
        </div>
        {/* Small Cyan Glow */}
        <div className="absolute top-60 right-20 h-36 w-36 rounded-full bg-cyan-200/30 blur-xl" />


        <div className="absolute right-1/4 top-1/2 rounded-full bg-cyan-50 p-3 animate-float-fast">
          <Zap className="h-6 w-6 text-cyan-500" />
        </div>
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#7c3aed] mb-1.5 font-mono block">WHY CHOOSE OUR PLATFORM</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Powerful QR Tools Redefining Digital Safety
            </h3>
            <p className="text-slate-500 mt-4 text-lg leading-relaxed">
              We design specialized QR tools for everyday security. From smart vehicle stickers to identity protection hubs, Scan-N-Go simplifies connection workflows.
            </p>
          </div>

          {/* Core Feature Demos Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">

            {/* Demo 1: Smart Emergency & Vehicle QR (Simulator) */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div>
                <span className="text-[13px] uppercase font-black tracking-widest text-violet-700 bg-violet-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Zap size={10} /> Single QR • Dual Notification
                </span>
                <h4 className="text-2xl font-black text-slate-800 mt-5">One Platform for Every QR Solution</h4>
                <p className="text-md text-slate-500 mt-2.5 leading-relaxed">
                  One intelligent QR works for both everyday communication and emergency situations. After scanning, users simply choose how they want to notify the owner.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50 hover:border-violet-200 transition-colors">
                    <p className="text-md font-black text-slate-800 flex items-center gap-1.5">
                      <Bell size={18} className="text-violet-500" /> Normal Alert
                    </p>
                    <p className="text-sm text-slate-500 mt-1 leading-snug">Send a regular message for parking, theft, or other issues.</p>
                  </div>
                  <div className="border border-red-100 rounded-2xl p-4 bg-red-50/20 hover:border-red-300 transition-colors">
                    <p className="text-md font-black text-red-700 flex items-center gap-1.5">
                      <AlertTriangle size={18} className="text-red-500" /> Emergency Alert
                    </p>
                    <p className="text-sm text-slate-500 mt-1 leading-snug">Instantly notify the owner about an emergency situation.</p>
                  </div>
                </div>
              </div>

              {/* Interactive Simulator Box */}
              <div className="mt-8 border border-slate-100 rounded-2xl p-5 bg-slate-50/80">
                <p className="text-[14px] font-black text-slate-400 uppercase tracking-widest text-center">Interactive Simulator</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4">
                  <button
                    onClick={() => setDemoAlert("normal")} // Changed text
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${demoAlert === "normal" ? "bg-violet-600 text-white shadow-md shadow-violet-500/20" : "bg-white text-slate-700 border border-slate-200 hover:border-violet-300"}`}
                  >
                    <Bell size={17} /> Send Normal Notification
                  </button>
                  <button
                    onClick={() => setDemoAlert("emergency")} // Changed text
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${demoAlert === "emergency" ? "bg-red-600 text-white shadow-md shadow-red-500/20" : "bg-white text-slate-700 border border-slate-200 hover:border-red-300"}`}
                  >
                    <AlertTriangle size={17} /> Send Emergency Notification
                  </button>
                </div>

                {/* Simulated notifications banner */}
                <div
                  className={`mt-5 h-16 relative overflow-hidden rounded-xl flex items-center justify-center px-5 border shadow-inner transition-all duration-500
                  ${demoAlert === "normal"
                      ? "bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-100 border-blue-200"
                      : demoAlert === "emergency"
                        ? "bg-gradient-to-r from-red-50 via-rose-50 to-orange-100 border-red-200"
                        : "bg-gradient-to-r from-slate-50 via-white to-slate-100 border-slate-200"
                    }`}
                >
                  {/* Background Glow */}
                  {demoAlert === "normal" && (
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-400/20 blur-3xl" />
                  )}

                  {demoAlert === "emergency" && (
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-400/25 blur-3xl" />
                  )}

                  {demoAlert === "none" && (
                    <p className="relative flex items-center gap-2 text-sm text-slate-500">
                      <ScanLine size={14} className="text-slate-600" />
                      Click a button to scan and send alerts...
                    </p>
                  )}

                  {demoAlert === "normal" && (
                    <div className="relative flex items-center gap-3.5 w-full">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg text-white">
                        <Bell size={16} />
                      </div>

                      <div className="text-left">
                        <p className="text-md font-bold text-blue-700">
                          Normal Notification Sent
                        </p>
                        <p className="text-sm text-slate-600">
                          Owner has been notified about the parking issue.
                        </p>
                      </div>
                    </div>
                  )}

                  {demoAlert === "emergency" && (
                    <div className="relative flex items-center gap-3.5 w-full">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg text-white animate-pulse">
                        <AlertTriangle size={16} />
                      </div>

                      <div className="text-left">
                        <p className="text-md font-bold text-red-600 flex items-center gap-1.5">
                          <AlertTriangle size={14} />
                          URGENT EMERGENCY ALERT
                        </p>
                        <p className="text-sm text-slate-700">
                          Owner and emergency contacts have been alerted instantly.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Demo 2: Dual Sticker Protection */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div>
                <span className="text-[13px] uppercase font-black tracking-widest text-[#7c3aed] bg-purple-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <ShieldCheck size={13} /> Backup Sticker Shield
                </span>
                <h4 className="text-2xl font-black text-slate-800 mt-5">Dual Sticker Protection</h4>
                <p className="text-md text-slate-500 mt-2.5 leading-relaxed">
                  Every QR order is supplied with two identical QR stickers linked to the same profile. If one sticker gets damaged or unreadable, the second one continues to work seamlessly.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-slate-600 font-semibold">
                  <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> Primary Sticker Windshield</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> Backup Sticker Option</div>
                </div>
              </div>

              {/* Graphic Mockup of Dual Sticker Shield */}
              <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-sky-50 to-violet-50 p-6 shadow-xl">

                {/* Background Glow */}
                <div className="absolute -top-12 -left-12 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl animate-pulse"></div>

                {/* Animated Connection */}
                <div className="absolute top-[84px] left-1/2 -translate-x-1/2 w-40 h-[2px] overflow-hidden">
                  <div className="absolute inset-0 bg-slate-300 rounded-full"></div>

                  <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-line-flow"></div>
                </div>

                <div className="relative grid grid-cols-2 gap-6">

                  {/* Primary */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-violet-200 p-5 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-violet-50 shadow-lg animate-float">
                      <QrCode className="w-11 h-11 text-violet-600" />
                    </div>

                    <p className="mt-4 text-sm font-black uppercase tracking-wider text-violet-700">
                      Primary Sticker
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Front Windshield
                    </p>

                  </div>

                  {/* Backup */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-sky-200 p-5 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                    <div
                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 shadow-lg animate-float"
                      style={{ animationDelay: ".6s" }}
                    >
                      <QrCode className="w-11 h-11 text-sky-600" />
                    </div>

                    <p className="mt-4 text-sm font-black uppercase tracking-wider text-sky-700">
                      Backup Sticker
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Secondary Position
                    </p>

                  </div>

                </div>

                {/* Bottom Info */}
                <div className="relative mt-6 flex items-center justify-center gap-3 rounded-2xl bg-white/70 backdrop-blur-lg border border-slate-200 py-4 px-5 shadow-md">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-sky-500 text-white animate-pulse">
                    <ShieldCheck size={22} />
                  </div>

                  <p className="text-sm font-medium text-slate-700">
                    If the primary sticker is damaged, the backup QR works instantly.
                  </p>

                </div>

              </div>
            </div>
          </div>


        </div>
      </section>

      {/* ════════════════ SECTION 05 — WHERE YOU CAN USE ════════════════ */}

      <section className="relative overflow-hidden bg-white py-20">

        {/* Top Left Blob */}
        <div className="absolute top-24 left-[30%] h-52 w-52 rounded-full bg-violet-200/30  blur-md" />

        {/* Bottom Right Blob */}
        <div className="absolute bottom-24 right-[20%] h-40 w-40 rounded-full bg-cyan-200/25   blur-md" />

        <div className="absolute left-8 top-16 animate-float-slow rounded-2xl border border-violet-100 bg-white p-4 shadow-xl rotate-[-10deg]">
          <House className="h-7 w-7 text-violet-600" />
        </div>

        <div className="absolute right-12 bottom-20 animate-float-medium rounded-2xl border border-violet-100 bg-white p-4 shadow-xl rotate-6">
          <Hospital className="h-7 w-7 text-red-500" />
        </div>

        <div className="absolute right-1/2 bottom-[10%] animate-float-fast rounded-full bg-violet-50 p-3">
          <MapPin className="h-6 w-6 text-violet-500" />
        </div>

        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-2">
              WHERE YOU CAN USE
            </h3>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              From gated communities and corporate offices to schools, industries, and buildings, Scan-N-Go delivers secure, smart, and seamless QR-powered management for every location.
            </p>
          </div>

          <div
            className="relative  overflow-hidden rounded-[10px] px-8 lg:px-10 py-20"
          >


            {/* Content */}
            <div className="relative z-10">

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
      <section className="py-20 bg-slate-50">
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#7c3aed] mb-1.5 font-mono block">PRODUCT PREVIEW</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-2">
              Everything in One Simple App
            </h3>
            <p className="text-slate-500 mt-3 text-md leading-relaxed">
              Keep check of historical visitors entries, manage emergency tags, edit profiles details, or save your vehicle QR dashboard straight from our dashboard interface.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* Feature lists on Left */}
            <div className="space-y-6">
              <h4 className="text-3xl font-black text-slate-800">Scan-N-Go App Features Dashboard</h4>
              <p className="text-md text-slate-500 leading-relaxed">
                Connect your physical cards and windshield stickers to safe databases. The application lets owners edit emergency contact numbers instantly without buying new stickers.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Scan QR on Go", icon: <ScanLine size={14} className="text-violet-600" /> },
                  { name: "Instant Notifications", icon: <Bell size={14} className="text-violet-600" /> },
                  { name: "Direct QR Editor", icon: <QrCode size={14} className="text-violet-600" /> },
                  { name: "Visitor History Log", icon: <Clock size={14} className="text-violet-600" /> },
                  { name: "Sticker Download PDFs", icon: <Download size={14} className="text-violet-600" /> },
                  { name: "Update Profile instantly", icon: <User size={14} className="text-violet-600" /> },
                ].map((appFeat, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 p-4 rounded-xl hover:border-violet-200 hover:shadow-sm transition-all duration-300 group">
                    <span className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                      {appFeat.icon}
                    </span>
                    <span className="text-sm font-bold text-slate-700">{appFeat.name}</span>
                  </div>
                ))}
              </div>

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
          </div>
        </div>
      </section>




      {/* ════════════════ SECTION 07 — TESTIMONIALS ════════════════ */}

      <section className="py-20 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#7c3aed] mb-1.5 font-mono block">TESTIMONIALS</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-2">
              Loved By Daily Users &amp; Team Admins
            </h3>
            <p className="text-slate-500 mt-3 text-md leading-relaxed">
              Discover how residential occupants, local retail store owners, and vehicle drivers secure daily entries and emergency loops.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 8 — FREQUENTLY ASKED QUESTIONS ════════════════ */}


      <section className="py-20 bg-slate-50">
        {/* Design Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#7c3aed] mb-1.5 font-mono block">HELP CENTER</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-2">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-500 mt-3 text-sm leading-relaxed">
              Discover answers to common security compliance check logs and vehicle stickers setup workflows.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
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
          </div>
        </div>
      </section>



      {/* ════════════════ SECTION 09 — CALL TO ACTION ════════════════ */}


      <section className="py-20 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-slate-100 via-slate-100 to-slate-100 rounded-3xl p-12 sm:p-16 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Design Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-900  tracking-tight leading-none">
                LET&apos;S CREATE BETTER, SECURE AND QUICK FUTURE WITH US
              </h3>
              <p className="text-violet-900 text-lg mx-auto leading-relaxed">
                Join thousands of apartmnts, offices, factory managers, and vehicle drivers securing daily access with smart QR technology.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-lg gap-2.5 bg-white hover:bg-violet-50 text-[#7c3aed] font-black px-10 py-2.5 rounded-[15px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Us Now <ArrowRight size={18} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
