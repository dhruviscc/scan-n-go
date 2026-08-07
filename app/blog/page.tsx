"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Search, ArrowRight } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/animated-background";

type BlogPostCard = {
  id?: string;
  title: string;
  slug: string;
  summary?: string | null;
  content?: string | null;
  image?: string | null;
  category?: string | null;
  status?: string | null;
  published_at?: string | null;
  created_at?: string | null;
};

const formatDate = (value?: string | null) => {
  if (!value) return "Recently published";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently published";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const estimateReadTime = (content?: string | null) => {
  const words = (content || "").trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(2, Math.ceil(words / 180));
  return `${minutes} min read`;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/blog");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.error || "Failed to load blogs");
        }

        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(posts.map((post) => post.category).filter(Boolean) as string[])
    );
    return ["All Posts", ...uniqueCategories];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const summary = (post.summary || "").toLowerCase();
      const category = (post.category || "").toLowerCase();
      const matchesCategory =
        selectedCategory === "All Posts" || category === selectedCategory.toLowerCase();
      const matchesSearch =
        title.includes(searchTerm.toLowerCase()) ||
        summary.includes(searchTerm.toLowerCase()) ||
        category.includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [posts, searchTerm, selectedCategory]);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] py-24 sm:py-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>

          <AnimatedBackground
            interactive={true}
            density={80}
            particleColorLight="99, 102, 241"
            particleColorDark="168, 85, 247"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-indigo-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Visitor Management & QR{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Technology Blog
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Discover expert articles, industry trends, security tips, QR technology
              updates, visitor management best practices, and digital identity
              solutions to help individuals and businesses stay ahead.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-[150%] left-16 w-72 h-72 rounded-full bg-violet-300/20 blur-[70px] animate-blob" />
          <div className="absolute -bottom-[50%] left-20 w-80 h-80 rounded-full bg-pink-300/15 blur-[50px] animate-blob animation-delay-4000" />
          <div className="absolute top-70 -right-70 w-80 h-80 rounded-full bg-cyan-300/15 blur-[50px] animate-blob animation-delay-6000" />
          <div className="absolute -bottom-[570%] -left-50 w-80 h-80 rounded-full bg-blue-300/20 blur-[70px] animate-blob animation-delay-6000" />
          <div className="absolute top-20 left-1/3 w-56 h-56 rounded-full bg-indigo-300/15 blur-[80px] animate-blob animation-delay-10000" />
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                placeholder="Search blogs, guides, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div className="w-full lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 outline-none transition-all focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "All Posts" ? "All Posts" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center text-sm text-slate-600 shadow-sm">
            Loading blogs...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center text-sm text-slate-600 shadow-sm">
            No blogs found for this search.
          </div>
        ) : (
          <motion.div
            className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.slug}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={post.image || "/images/Visitor-Manage-1.png"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:rotate-2"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-violet-700 backdrop-blur">
                    {post.category || "Blog"}
                  </span>
                </div>

                <div className="p-4">
                  <h2 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-violet-700 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                    {post.summary || "Read the full article to learn more."}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        {formatDate(post.published_at || post.created_at)}
                      </p>
                      <p className="text-xs text-slate-500">
                        {estimateReadTime(post.content)}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-violet-700 transition hover:gap-3"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
}