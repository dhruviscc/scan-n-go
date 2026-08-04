import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { blogPosts } from "@/lib/blog-data";

type BlogDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = blogPosts.find((item) => item.slug === id);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/80 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-indigo-300/80 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur transition hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-violet-700 shadow-sm">
                {post.category}
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {post.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span>{post.date}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span>{post.readTime}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span>By {post.author}</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-violet-100/80">
              <div className="relative h-72 overflow-hidden rounded-[22px] sm:h-80">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-700">
              {post.heroLabel}
            </p>

            <div className="mt-6 space-y-8">
              {post.content.map((block) => (
                <div key={block.heading}>
                  {block.heading ? (
                    <h2 className="text-2xl font-semibold text-slate-900">
                      {block.heading}
                    </h2>
                  ) : null}
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    {block.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Key highlights</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                {post.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-violet-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-violet-700 to-indigo-700 p-7 text-white shadow-sm">
              <h3 className="text-xl font-semibold">Ready to modernize access?</h3>
              <p className="mt-3 text-sm leading-7 text-violet-100">
                Bring QR-powered convenience and stronger control to your spaces with Scan N Go.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">More articles</h2>
          <Link href="/blog" className="text-sm font-semibold text-violet-700">
            View all posts
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {relatedPosts.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-40 overflow-hidden rounded-2xl">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
