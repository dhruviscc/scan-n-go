'use client';
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  History,
  QrCode,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const featureSections = [
  {
    title: "Profile Setup",
    description:
      "Create a secure digital identity with guided onboarding that keeps every profile organized and protected.",
    icon: ShieldCheck,
    imageSrc: "/images/profile-1.jpg",
    points: [
      "Secure Sign-In: Log in to your Scan n Goaccount to access smart QR features and manage your profile safely.",
      "Complete Your Profile: Add personal details, verify identity, and register vehicle information for a richer QR experience.",
    ],
  },
  {
    title: "Instant History After Scanning",
    description:
      "Every scan becomes part of a transparent activity trail that helps users review entries quickly.",
    icon: History,
    imageSrc: "/images/history-1.png",

    points: [
      "Automatic Activity Log: Each QR scan is recorded with date, time, and context instantly.",
      "Easy Tracking: Review your scan history anytime to monitor activity and stay informed.",
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
      "Share What You Choose: Share details such as your name, phone number, and preferred information with confidence.",
    ],
  },
  {
    title: "Vehicle QR Code",
    description:
      "Give every vehicle its own smart QR so entry, identification, and notifications are faster and more reliable.",
    icon: Car,
    imageSrc: "/images/vehicle-1.png",

    points: [
      "Unique QR for Every Vehicle: Generate a dedicated QR code for each vehicle for instant recognition.",
      "Manage Multiple Vehicles: Register multiple vehicles with their number, owner name, and essential details in one place.",
    ],
  },
  {
    title: "Quick Entry",
    description:
      "Offer a seamless check-in experience that removes unnecessary steps while keeping every interaction secure.",
    icon: Zap,
    imageSrc: "/images/quick.png",

    points: [
      "Fast Access: Enable quick entry to bypass extra steps and improve arrival speed.",
      "Secure Experience: Enjoy streamlined access without compromising trust or safety.",
    ],
  },
];



export default function Features() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/70 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-300/60 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-6 lg:px-8">

          <div className="max-w-3xl">


            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
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
            </h1>


            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Scan n Gobrings together secure onboarding, instant scan tracking,
              contact sharing, vehicle identification, and quick access into one
              intelligent experience.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
            </div>
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-1">
          {featureSections.map(({ title, description, icon: Icon, points, imageSrc }) => (
            <article
              key={title}
              className="grid items-center gap-10 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:grid-cols-[1fr_380px]"
            >
              {/* Left Content */}
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                  <Icon size={27} />
                </div>

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
                <div className="overflow-hidden rounded-[24px] bg-slate-100">
                  <div className="relative h-72 w-full lg:h-80">
                    <Image
                      src={imageSrc}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 380px"
                    />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

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
                  <span className="block hero-heading-gradient uppercase">
                    Start Your Smart QR Journey Today
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-white/75 text-lg leading-8">
                  Bring secure QR access to your workplace, community, or event with a simpler and smarter experience.
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
      </section >
    </div>
  );
}