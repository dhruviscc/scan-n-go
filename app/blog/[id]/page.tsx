import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { blogService } from "@/modules/blog/blogService";

type BlogDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
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



export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = await blogService.getBySlug(id);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await blogService.getAll(true))
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const excerpt = post.summary || "Read this article to learn more.";
  const contentHtml = post.content || "<p>No content available yet.</p>";
  const formattedDate = formatDate(post.published_at || post.created_at);


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] px-5 py-16 sm:px-6 lg:px-8 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/80 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-indigo-300/80 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/blog"
            className="inline-flex mt-10   min-h-[42px] w-fit max-w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-medium text-slate-700 backdrop-blur transition-all duration-200 hover:bg-white active:scale-[0.98] sm:min-h-[44px] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap">Back to blog</span>
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-violet-700 shadow-sm">
                {post.category || "Blog"}
              </span>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span>{formattedDate}</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl shadow-violet-100/80">
              <div className="relative h-72 overflow-hidden rounded-[22px] sm:h-80">
                <Image
                  src={post.image || "/images/Visitor-Manage-1.png"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-1">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-700">
              Full article
            </p>

            <div
              className="blog-content prose prose-slate mt-6 max-w-none text-base leading-8 text-slate-600"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>

       
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">More articles</h2>
          <Link href="/blog" className="text-sm font-semibold text-violet-700">
            View all posts
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {relatedPosts.map((item) => (
            <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-40 overflow-hidden rounded-2xl">
                <Image src={item.image || "/images/Visitor-Manage-1.png"} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.summary || "Read this article to learn more."}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}