"use client";

import { useSearchParams } from "next/navigation";
import { BlogCard } from "@/components/blog-card";
import { TagFilter } from "@/components/tag-filter";

interface BlogItem {
  url: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail: string | null;
  formattedDate: string;
}

interface BlogListProps {
  blogs: BlogItem[];
  allTags: string[];
  tagCounts: Record<string, number>;
}

export function BlogList({ blogs, allTags, tagCounts }: BlogListProps) {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag") || "All";

  const filteredBlogs =
    selectedTag === "All"
      ? blogs
      : blogs.filter((b) => b.tags.includes(selectedTag));

  return (
    <>
      {allTags.length > 0 && (
        <div className="max-w-7xl mx-auto w-full px-6 py-4">
          <TagFilter
            tags={allTags}
            selectedTag={selectedTag}
            tagCounts={tagCounts}
          />
        </div>
      )}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-0">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative overflow-hidden border-x border-border ${
            filteredBlogs.length < 4 ? "border-b" : "border-b-0"
          }`}
        >
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.url}
              url={blog.url}
              title={blog.title}
              description={blog.description}
              date={blog.formattedDate}
              thumbnail={blog.thumbnail ?? undefined}
              showRightBorder={filteredBlogs.length < 3}
            />
          ))}
        </div>
      </div>
    </>
  );
}
