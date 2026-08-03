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
      "Connect smarter with Scan n Go. Share your digital business card, contact details, and professional profile instantly with a single QR scan.",
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

      {/* Content */}
      <div className="relative z-10">
        {/* Your page content */}
      </div>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-24">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300 blur-3xl" />
          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-indigo-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Center Content */}
          <div className="mx-auto max-w-3xl text-center mt-10">

            <h1 className="mt-4 text-4xl font-bold  tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              One Platform. Industry Solution.
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg max-w-2xl mx-auto">
              Discover how Scan n Go solves access management challenges with smart QR workflows
              for residential buildings, vehicles, workplaces, events, campuses, and business networking.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 relative">

        {/* fviolet Blob */}
        <div className="absolute -left-[30%] top-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-500/25 via-fuchsia-400/15 to-transparent blur-[90px] animate-blob-one" />

        {/* Pink Glow */}
        <div className="absolute bottom-[140px] left-10 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-400/18 via-violet-300/12 to-transparent blur-[100px] animate-blob-three" />

        {/* Cyan Blob */}
        <div className="absolute -right-[30%] top-1/3 h-[460px] w-[460px] rounded-full bg-gradient-to-br from-cyan-400/20 via-sky-300/15 to-transparent blur-[80px] animate-blob-two" />

        {/* indigo Blob */}
        <div className="absolute -left-[30%] bottom-1/4 h-[460px] w-[460px] rounded-full bg-gradient-to-br from-purple-400/20 via-indigo-300/15 to-transparent blur-[80px] animate-blob-two" />

        {/* Pink Glow */}
        <div className="absolute -right-[60%] bottom-10 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-400/30 via-violet-300/30 to-transparent  blur-[80px]  animate-blob-three" />

        <div className="space-y-16">
          {useCases.map(({ title, description, icon: Icon, badge, videoSrc }, index) => {
            const reverse = index % 2 === 1;
            return (
              <div key={title} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`p-5 ${reverse ? "lg:col-start-2" : ""}`}>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 shadow-sm shadow-violet-100">
                    <Icon size={29} />
                  </div>
                  <h2 className="mt-6 text-3xl font-bold  text-slate-900">{title}</h2>
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
                    Bring Scan-N-Go to your business, building, or event.
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-white/75 text-lg leading-8">
                  From resident entry to conference check-in, Scan-N-Go makes access smarter, faster, and safer with one unified QR platform.

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
