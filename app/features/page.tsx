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

const featureSections = [
  {
    title: "Profile Setup",
    description:
      "Create a secure digital identity with guided onboarding that keeps every profile organized and protected.",
    icon: ShieldCheck,
    points: [
      "Secure Sign-In: Log in to your Scan-N-Go account to access smart QR features and manage your profile safely.",
      "Complete Your Profile: Add personal details, verify identity, and register vehicle information for a richer QR experience.",
    ],
  },
  {
    title: "Instant History After Scanning",
    description:
      "Every scan becomes part of a transparent activity trail that helps users review entries quickly.",
    icon: History,
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
    points: [
      "Fast Access: Enable quick entry to bypass extra steps and improve arrival speed.",
      "Secure Experience: Enjoy streamlined access without compromising trust or safety.",
    ],
  },
];

export const metadata = {
  title: "Scan-N-Go | Features",
  description:
    "Explore the powerful features of Scan-N-Go, from secure profile setup to instant scan history, contact QR, vehicle QR, and quick entry.",
};

export default function Features() {
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
              <Sparkles size={15} /> Features Overview
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Powerful Features Built for
              <span className="mt-2 block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Smart Security
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Scan-N-Go brings together secure onboarding, instant scan tracking, contact sharing, vehicle identification, and quick access into one intelligent experience.
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
                href="/use-cases"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Explore Use Cases
              </Link>
            </div>
          </div>

          <div className="grid gap-5 rounded-[30px] border border-violet-100 bg-white/80 p-6 shadow-[0_20px_70px_rgba(76,29,149,0.08)] backdrop-blur sm:grid-cols-3 sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">Smart Solutions</p>
              <p className="mt-3 text-xl font-black text-slate-900">Secure, seamless, and built for modern access.</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-base leading-8 text-slate-600">
                From profile setup to vehicle-level QR access, every feature has been designed to simplify operations while ensuring a reliable security experience for users and administrators alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {featureSections.map(({ title, description, icon: Icon, points }) => (
            <article
              key={title}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                <Icon size={24} />
              </div>
              <h2 className="mt-6 text-2xl font-black text-slate-900">{title}</h2>
              <p className="mt-3 text-base leading-8 text-slate-600">{description}</p>
              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-violet-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-violet-100 bg-white px-8 py-10 shadow-[0_25px_80px_rgba(99,102,241,0.08)] sm:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Ready to begin</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Start Your Smart QR Journey Today
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Bring secure QR access to your workplace, community, or event with a simpler and smarter experience.
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