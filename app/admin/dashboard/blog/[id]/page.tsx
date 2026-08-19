import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Tag, ChevronLeft } from 'lucide-react';
import { blogService } from '@/modules/blog/blogService';


interface Blog {
    id: string;
    title: string;
    category: string;
    slug: string;
    status: string;
    created_at: string;
    image: string;
    summary: string;
    content: string;
    published_at?: string | null;
    author_id?: string | null;
}


async function getBlogById(id: string): Promise<Blog | null> {
    const blog = await blogService.getById(id);
    return blog as Blog | null;
}


const getStatusStyles = (status: string) => {
    switch (status) {
        case 'published': return 'bg-green-100 text-green-800';
        case 'draft': return 'bg-yellow-100 text-yellow-800';
        case 'archived': return 'bg-red-100 text-red-800';
        default: return 'bg-slate-100 text-slate-800';
    }
};


export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = await getBlogById(id);


    if (!blog) {
        notFound();
    }


    return (
        <div className="w-full min-h-screen p-4 sm:p-6 lg:p-8 bg-slate-50">
            <div className="w-full max-w-full mx-auto">
                <div className="sticky top-0 lg:top-2 bg-slate-50/80 backdrop-blur-sm py-3 z-10 -mx-2 px-2">
                    <Link
                        href="/admin/dashboard/blog"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-800 transition"
                    >
                        <ChevronLeft size={18} />
                        Back to All Blogs
                    </Link>
                </div>


                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden w-full">

                    {/* Header Banner Section: Image on Left, Title / Details on Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full bg-slate-900 border-b border-slate-200">

                        {/* Left Side: Image */}
                        <div className="lg:col-span-6 relative w-full h-72 sm:h-96 lg:h-[420px] flex items-center justify-center overflow-hidden bg-slate-950">
                            {blog.image ? (
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="text-slate-500 text-sm">No image available</div>
                            )}
                        </div>


                        {/* Right Side: Header Info (Metadata, Title, Summary) */}
                        <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-slate-500">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyles(blog.status)}`}>
                                    {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                                </span>
                                {blog.category && (
                                    <div className="flex items-center gap-1.5">
                                        <Tag size={14} />
                                        <span>{blog.category}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={14} />
                                    <span>
                                        Published on {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </span>
                                </div>
                            </div>


                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                                {blog.title}
                            </h1>


                            {blog.summary && (
                                <p className="text-lg text-slate-600 italic border-l-4 border-violet-500 pl-4 py-1 leading-relaxed">
                                    {blog.summary}
                                </p>
                            )}
                        </div>
                    </div>


                    {/* Main Content Body Section */}
                    <div className="p-6 sm:p-10 lg:p-12 bg-white">
                        <div className="prose prose-slate prose-lg max-w-none prose-img:rounded-xl prose-a:text-violet-600 hover:prose-a:text-violet-700">
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
