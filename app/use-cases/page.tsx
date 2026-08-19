"use client";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Car,
  Clock3,
  Home,
  Play,
  UserCheck,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const useCases = [
  {
    title: "Office & Staff Entry Management",
    description:
      "Say goodbye to manual attendance. Scan n Go makes office entry and employee check-in/check-out. It is fast, secure, and completely digital with a simple QR scan.",
    icon: Briefcase,
    badge: "Office Video",
    videoSrc: "/video/office.mp4",
  },
  {
    title: "Vehicle Scanner System",
    description:
      "Don't worry if a vehicle is parked incorrectly, blocked, or involved in an emergency. Just Scan n Go and instantly notify the vehicle owner with either a Normal or Emergency alert as you select an option.",
    icon: Car,
    badge: "Vehicle Video",
    videoSrc: "/video/parking-1.mp4",
  },
  {
    title: "Residential / Apartment Entry",
    description:
      "No more manual visitor registers or repeated security checks. With Scan n Go, simply scan the QR for fast, secure entry while residents receive instant notifications and every visit is recorded digitally.",
    icon: Home,
    badge: "Residential Video",
    videoSrc: "/video/residental.mp4",
  },

  {
    title: "Queue Management",
    description:
      "No more waiting in long queues or remembering your token number. Just Scan n Go to join the digital queue instantly and receive live updates until it's your turn.",
    icon: Clock3,
    badge: "Queue Video",
    videoSrc: "/video/queue.mp4",
  },

  {
    title: "Meetings & Conference Entry",
    description:
      "Make every event run smoothly with Scan n Go. Verify attendees instantly, speed up check-ins, and maintain accurate digital attendance records.",
    icon: Calendar,
    badge: "Event Video",
    videoSrc: "/video/meeting.mp4",
  },
  {
    title: "School & College Entry",
    description:
      "Replace manual attendance with Scan n Go. Enable quick QR-based attendance, secure campus access, and seamless verification for students, staff, and visitors.",
    icon: UserCheck,
    badge: "Campus Video",
    videoSrc: "/video/school.mp4",
  },
  {
    title: "Networking System",
    description:
      "Connect smarter with Scan n Go. Share your digital business card, contact details, and professional profile instantly with a single QR scan.",
    icon: Wifi,
    badge: "Networking Video",
    videoSrc: "/video/contect.mp4",
  },
];


export default function UseCasesPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">


      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 z-0">
          <AnimatedBackground
            interactive={true}
            density={40}
            particleColorLight="99, 102, 241"
            particleColorDark="168, 85, 247"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/2 top-0 h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 -translate-x-1/2 rounded-full bg-violet-300 blur-3xl" />
          <div className="absolute right-[-80px] top-16 h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full bg-indigo-300 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">

          <div className="mt-4 w-full max-w-3xl sm:mt-8 md:mt-10">

            <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
              One Digital Platform for{" "}
              <span className="block sm:inline bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    "Every Industry",
                    2000,
                    "Corporate Offices",
                    2000,
                    "Residential Societies",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base md:text-lg md:leading-8">
              Discover how Scan n Go solves access management challenges with smart QR
              workflows for residential buildings, vehicles, workplaces, events,
              campuses, and business networking.
            </p>

          </div>
        </div>
      </section>

      <div className="space-y-10 sm:space-y-14 lg:space-y-16 pt-20">
        {useCases.map(
          ({ title, description, icon: Icon, badge, videoSrc }, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`mx-auto grid w-full max-w-7xl grid-cols-1 gap-7 px-4 sm:gap-8 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 ${reverse ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                {/* CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  className={`px-1 py-2 sm:p-5 ${reverse ? "lg:col-start-2" : ""
                    }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 shadow-sm shadow-violet-100 sm:h-14 sm:w-14">
                    <Icon size={25} className="sm:hidden" />
                    <Icon size={29} className="hidden sm:block" />
                  </div>

                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-slate-900 sm:mt-6 sm:text-3xl lg:text-4xl">
                    {title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
                    {description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                    {/* your existing buttons/content */}
                  </div>
                </motion.div>

                {/* VIDEO / VISUAL */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  className="relative h-[300px] w-full overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950 p-3 text-white shadow-sm sm:h-[380px] sm:rounded-[28px] sm:p-4 md:h-[420px] lg:h-[450px] lg:rounded-[32px] lg:p-5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.3),_transparent_45%)]" />

                  <div className="relative flex h-full flex-col justify-between gap-4 sm:gap-6">
                    <div className="min-h-0 flex-1">
                      {videoSrc ? (
                        <video
                          src={videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full rounded-2xl border border-white/10 object-cover sm:rounded-3xl"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center rounded-2xl border border-white/10 bg-slate-900/95 p-5 text-center sm:rounded-3xl sm:p-8">
                          <div>
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white sm:h-16 sm:w-16">
                              <Play size={24} className="sm:hidden" />
                              <Play size={28} className="hidden sm:block" />
                            </div>

                            <p className="mt-4 text-xs leading-6 text-slate-300 sm:mt-6 sm:text-sm sm:leading-7">
                              {badge} section with instant QR access visuals and fast
                              entry flow.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200 sm:rounded-3xl sm:p-4 sm:text-sm">
                      <div>
                        <p className="font-semibold">{badge}</p>
                        <p className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">
                          Real-time access managed securely.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            );
          }
        )}
      </div>


      <section className="overflow-hidden bg-white py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#24115F] via-[#3E1E9E] to-[#6C3DF5] shadow-[0_25px_70px_rgba(36,17,95,.25)] sm:rounded-[34px]"
          >

            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

            {/* Desktop waves */}
            <div className="hidden lg:block absolute right-[-220px] top-[-120px] h-[760px] w-[760px] rounded-full bg-white/95" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center">

              {/* LEFT CONTENT */}
              <div className="w-full px-6 py-10 sm:px-8 sm:py-12 md:px-12 lg:w-[46%] lg:px-16 lg:py-14">

                <h2 className="hero-heading w-full text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-start">
                  <span className="hero-heading-gradient block">
                    Bring Scan n Go to your business, building, or event.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:mt-7 sm:text-base sm:leading-8">
                  From resident entry to conference check-in, Scan n Go makes access
                  smarter, faster, and safer with one unified QR platform.
                </p>

                {/* CTA button/content */}
                <div className="mt-7 flex flex-wrap gap-3 sm:mt-10">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:gap-4 sm:px-8 sm:text-base"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className="relative flex min-h-[330px] w-full items-center justify-center overflow-hidden sm:min-h-[400px] lg:h-[420px] lg:w-[54%]">

                {/* Shadow */}
                <div className="absolute bottom-10 h-12 w-52 rounded-full bg-indigo-900/25 blur-xl sm:bottom-12 sm:h-16 sm:w-72" />

                {/* Platform */}
                <div className="absolute bottom-12 h-12 w-52 rounded-full bg-gradient-to-b from-white to-indigo-200 shadow-2xl sm:bottom-16 sm:h-16 sm:w-64" />

                <div className="absolute bottom-[75px] h-7 w-40 rounded-full bg-white sm:bottom-[92px] sm:h-9 sm:w-52" />

                {/* Shield - desktop/tablet only */}
                <div className="absolute right-8 top-8 hidden h-32 w-28 rotate-12 items-center justify-center rounded-[28px] bg-gradient-to-b from-[#7054ff] to-[#4f2fd3] shadow-[0_30px_50px_rgba(76,50,220,.45)] sm:flex md:right-16 md:top-10 md:h-40 md:w-36 lg:right-24 lg:top-14 lg:h-44 lg:w-40">
                  <svg
                    className="h-12 w-12 text-white md:h-14 md:w-14 lg:h-16 lg:w-16"
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

                {/* QR CARD */}
                <div className="relative z-20 rounded-[24px] bg-white p-4 shadow-[0_35px_80px_rgba(30,20,80,.25)] sm:rounded-[30px] sm:p-6">

                  <div className="relative h-32 w-32 sm:h-40 sm:w-40">

                    <div className="absolute left-0 top-0 h-7 w-7 rounded-tl-lg border-l-4 border-t-4 border-indigo-500 sm:h-8 sm:w-8 sm:rounded-tl-xl" />

                    <div className="absolute right-0 top-0 h-7 w-7 rounded-tr-lg border-r-4 border-t-4 border-indigo-500 sm:h-8 sm:w-8 sm:rounded-tr-xl" />

                    <div className="absolute bottom-0 left-0 h-7 w-7 rounded-bl-lg border-b-4 border-l-4 border-indigo-500 sm:h-8 sm:w-8 sm:rounded-bl-xl" />

                    <div className="absolute bottom-0 right-0 h-7 w-7 rounded-br-lg border-b-4 border-r-4 border-indigo-500 sm:h-8 sm:w-8 sm:rounded-br-xl" />

                    <img
                      src="/images/scan-QR.png"
                      alt="QR Code"
                      className="absolute inset-4 h-24 w-24 object-contain sm:inset-5 sm:h-[120px] sm:w-[120px]"
                    />

                  </div>
                </div>

                {/* Floating dots */}
                <div className="absolute right-8 top-20 h-2.5 w-2.5 rounded-full bg-indigo-300 sm:right-10 sm:top-24 sm:h-3 sm:w-3" />

                <div className="absolute right-6 bottom-16 h-2 w-2 rounded-full bg-purple-400" />

                <div className="absolute right-16 bottom-24 h-3 w-3 rounded-full bg-indigo-200 sm:right-24 sm:bottom-32 sm:h-4 sm:w-4" />

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
