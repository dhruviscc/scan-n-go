import { blogService } from "@/modules/blog/blogService";
import { NextResponse } from "next/server";

// Public API - fetches only active blogs for the website
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const id = searchParams.get("id");

    if (slug) {
      const blog = await blogService.getBySlug(slug);
      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json(blog);
    }

    if (id) {
      const blog = await blogService.getById(id);
      return NextResponse.json(blog);
    }

    const blogs = await blogService.getAll(true);
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}