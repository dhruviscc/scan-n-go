import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

const categories = [
  "All Posts",
  "Visitor Management",
  "Vehicle QR",
  "Business Solutions",
  "Security",
  "Events",
];

const posts = [
  {
    title: "How QR Access is changing visitor management",
    category: "Visitor Management",
    excerpt:
      "Explore how QR-based entry systems create safer, faster, and more transparent visitor workflows for communities and offices.",
    date: "Jul 16, 2026",
  },
  {
    title: "Secure Vehicle Entry with Scan n GoQR",
    category: "Vehicle QR",
    excerpt:
      "Learn how smart vehicle QR scanning reduces manual checks and speeds up gated entry for drivers and staff.",
    date: "Jun 9, 2026",
  },
  {
    title: "Best practices for secure digital identity",
    category: "Security",
    excerpt:
      "Discover the top security tips for protecting digital identities in QR-driven access systems and contactless environments.",
    date: "May 22, 2026",
  },
  {
    title: "Event access made simple with QR tickets",
    category: "Events",
    excerpt:
      "See how Scan n Gostreamlines event entry, reduces queues, and improves attendee tracking through QR verification.",
    date: "Apr 15, 2026",
  },
];

export const metadata = {
  title: "Scan n Go| Blog",
  description:
    "Insights, guides, and updates from Scan N Go on QR access, visitor management, security, and digital identity.",
};

export default function BlogPage() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-indigo-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-bold  tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Insights, Guides & Updates from Scan N Go
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Discover expert articles, industry trends, security tips, QR technology updates, visitor management best practices, and digital identity solutions to help individuals and businesses stay ahead.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <div className="relative max-w-xl">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-5 text-sm text-slate-900 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-violet-700">
                {post.category}
              </span>
              <h2 className="mt-5 text-xl font-bold  text-slate-900">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>{post.date}</span>
                <Link href="#" className="font-semibold text-violet-700 hover:text-violet-900">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-violet-100 bg-white px-8 py-10 shadow-[0_25px_80px_rgba(99,102,241,0.08)] sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold  tracking-tight text-slate-900 sm:text-4xl">
                Ready to Experience Smart QR Solutions?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Start using Scan N Go today and simplify visitor management, digital identity, and secure QR access.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-3xl bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-800"
              >
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Explore Scan-N-Go
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
