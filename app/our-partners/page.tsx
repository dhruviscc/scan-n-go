import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const partnerSections = [
  {
    title: "Society Entry Manager",
    subtitle: "Smarter Visitor Management for Modern Residential Communities",
    description:
      "Society Entry Manager is a secure visitor and society management platform designed for residential societies, apartments, gated communities, villas, and housing complexes. It enables society administrators to monitor visitor activities, manage service providers, and maintain complete visibility over community access from a single dashboard.",
    body:
      "By integrating with Scan-N-Go, residents and visitors can use QR-based digital entry for faster, safer, and contactless access. Every visitor movement is securely recorded, helping management improve security, streamline operations, and maintain accurate entry records.",
    features: [
      "QR-Based Visitor Entry",
      "Complete Entry Logs",
      "Society Dashboard",
      "Report Generation",
      "Service Provider Directory",
      "Secure QR Integration",
    ],
    icon: Building2,
  },
  {
    title: "Attendance Monitor System",
    subtitle: "Smart Attendance Management for Modern Organisations",
    description:
      "Attendance Monitor System (AMS) is an intelligent attendance management platform designed for businesses, healthcare organisations, and enterprises. It automates attendance tracking, monitors employee activities, and provides real-time insights across one or multiple branches from a centralized dashboard.",
    body:
      "Integrated with Scan-N-Go, AMS combines QR-based check-in with live scan verification to ensure every attendance record is authentic, secure, and accurately recorded.",
    features: [
      "QR-Based Attendance",
      "Real-Time Attendance Tracking",
      "Employee Attendance History",
      "Attendance Reports",
      "Employee Communication",
      "Company & Branch Dashboard",
    ],
    icon: BarChart3,
  },
];

const whyChooseUsPoints = [
  "Complete QR Ecosystem",
  "Advanced Security",
  "Real-Time Notifications",
  "Smart Entry Manager Integration",
  "Attendance Monitor System Integration",
  "Cloud-Based & Scalable",
  "User-Friendly Experience",
];

export const metadata = {
  title: "Scan-N-Go | Our Partners",
  description:
    "Discover the ecosystem of partners that strengthen the Scan-N-Go platform through secure access, visitor management, and attendance solutions.",
};

export default function OurPartners() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/70 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-300/60 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-700 shadow-sm backdrop-blur">
              <Sparkles size={15} /> Our Partners
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Building a Smarter Ecosystem with
              <span className="mt-2 block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Trusted Partners
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Scan-N-Go strengthens its platform through technology, hardware, and business partnerships that deliver secure access, smarter visitor management, and efficient attendance solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-800"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {partnerSections.map(({ title, subtitle, description, body, features, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                <Icon size={24} />
              </div>
              <h2 className="mt-6 text-2xl font-black text-slate-900">{title}</h2>
              <h3 className="mt-3 text-lg font-semibold text-violet-700">{subtitle}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
              <p className="mt-4 text-base leading-8 text-slate-600">{body}</p>
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Key Features
                </h4>
                <ul className="mt-4 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-violet-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-violet-100 bg-white px-8 py-10 shadow-[0_25px_80px_rgba(99,102,241,0.08)] sm:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Smart Solutions for Secure Access, Visitor Management, and Attendance
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              At Scan-N-Go, we deliver a complete QR-powered ecosystem that simplifies access management, visitor tracking, and attendance monitoring for organisations of every size. Integrated with Society Entry Manager (SEM) and the Attendance Monitor System (AMS), our platform combines intelligent automation, real-time monitoring, and advanced security to create a seamless digital experience.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {whyChooseUsPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <ShieldCheck size={18} className="mt-0.5 shrink-0 text-violet-600" />
                <span className="text-sm font-semibold text-slate-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-violet-100 bg-violet-50/70 p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3 text-slate-700">
                <Users size={20} className="text-violet-700" />
                <p className="text-base font-medium">
                  Whether you are managing residential communities, corporate offices, healthcare facilities, or multi-branch organisations, our solutions help improve operational efficiency while ensuring every entry and attendance record is secure, accurate, and easy to manage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-violet-100 bg-white px-8 py-10 shadow-[0_25px_80px_rgba(99,102,241,0.08)] sm:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
                Ready to begin
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Let us build a smarter access experience together
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Bring secure QR access, intelligent visitor management, and streamlined attendance to your community or organisation.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-800"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
