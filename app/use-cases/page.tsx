import Link from "next/link";
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

const useCases = [
  {
    title: "Residential / Apartment Entry",
    description:
      "No more manual visitor registers or repeated security checks. With Scan-N-Go, simply scan the QR for fast, secure entry while residents receive instant notifications and every visit is recorded digitally.",
    icon: Home,
    badge: "Residential Video",
    videoSrc: "/video/residental.mp4",
  },
  {
    title: "Vehicle Scanner System",
    description:
      "Don't worry if a vehicle is parked incorrectly, blocked, or involved in an emergency. Just Scan-N-Go and instantly notify the vehicle owner with either a Normal or Emergency alert.",
    icon: Car,
    badge: "Vehicle Video",
    videoSrc: "/video/parking.mp4",
  },
  {
    title: "Queue Management",
    description:
      "No more waiting in long queues or remembering your token number. Just Scan-N-Go to join the digital queue instantly and receive live updates until it's your turn.",
    icon: Clock3,
    badge: "Queue Video",
    videoSrc: "/video/queue.mp4",
  },
  {
    title: "Office & Staff Entry Management",
    description:
      "Say goodbye to manual attendance. Scan-N-Go makes office entry and employee check-in/check-out fast, secure, and completely digital with a simple QR scan.",
    icon: Briefcase,
    badge: "Office Video",
    videoSrc: "/video/office.mp4",
  },
  {
    title: "Meetings & Conference Entry",
    description:
      "Make every event run smoothly with Scan-N-Go. Verify attendees instantly, speed up check-ins, and maintain accurate digital attendance records.",
    icon: Calendar,
    badge: "Event Video",
    videoSrc: "/video/meeting.mp4",
  },
  {
    title: "School & College Entry",
    description:
      "Replace manual attendance with Scan-N-Go. Enable quick QR-based attendance, secure campus access, and seamless verification for students, staff, and visitors.",
    icon: UserCheck,
    badge: "Campus Video",
    videoSrc: "/video/school.mp4",
  },
  {
    title: "Networking System",
    description:
      "Connect smarter with Scan-N-Go. Share your digital business card, contact details, and professional profile instantly with a single QR scan.",
    icon: Wifi,
    badge: "Networking Video",
    videoSrc: "/video/contect.mp4",
  },
];

export const metadata = {
  title: "Scan-N-Go | Use Cases Across Every Industry",
  description:
    "Explore Scan-N-Go use cases for residential entry, vehicle scanning, queue management, office access, events, education, and networking.",
};

export default function UseCasesPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-24">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300 blur-3xl" />
          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-indigo-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Center Content */}
          <div className="mx-auto max-w-3xl text-center mt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
              Use Cases
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              One Platform. Industry Solution.
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg max-w-2xl mx-auto">
              Discover how Scan-N-Go solves access management challenges with smart QR workflows
              for residential buildings, vehicles, workplaces, events, campuses, and business networking.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {useCases.map(({ title, description, icon: Icon, badge, videoSrc }, index) => {
            const reverse = index % 2 === 1;
            return (
              <div key={title} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`p-5 ${reverse ? "lg:col-start-2" : ""}`}>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 shadow-sm shadow-violet-100">
                    <Icon size={29} />
                  </div>
                  <h2 className="mt-6 text-3xl font-black text-slate-900">{title}</h2>
                  <p className="mt-4 text-base leading-8  text-slate-600">{description}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                   
                 
                  </div>
                </div>

                <div className="relative h-[450px] overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.3),_transparent_45%)]" />
                  <div className="relative flex h-full flex-col justify-between gap-6">
                    <div>
                     
                      {videoSrc ? (
                        <video
                          src={videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full rounded-3xl border border-white/10 object-cover"
                        />
                      ) : (
                        <div className="rounded-3xl border border-white/10 bg-slate-900/95 p-8 text-center">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
                            <Play size={28} />
                          </div>
                          <p className="mt-6 text-sm leading-7 text-slate-300">
                            {badge} section with instant QR access visuals and fast entry flow.
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                      <div>
                        <p className="font-semibold">{badge}</p>
                        <p className="text-slate-400">Real-time access managed securely.</p>
                      </div>
                      <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                        Live preview
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
        <div className="mt-16 rounded-[28px] border border-violet-100 bg-white px-8 py-10 shadow-[0_25px_80px_rgba(99,102,241,0.08)] sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Ready to launch</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Bring Scan-N-Go to your business, building, or event.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                From resident entry to conference check-in, Scan-N-Go makes access smarter, faster, and safer with one unified QR platform.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-3xl bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-800"
              >
                Contact Sales
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Explore features
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
