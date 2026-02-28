import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { Suspense } from "react";
import { BlogList } from "@/components/blog-list";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function HomePage() {
  const allPages = blogSource.getPages();
  const sortedBlogs = allPages
    .map((page) => {
      const d = page.data as {
        title: string;
        description: string;
        date: string;
        tags?: string[];
        thumbnail?: string;
      };
      return {
        url: page.url,
        title: d.title,
        description: d.description,
        date: d.date,
        tags: d.tags ?? [],
        thumbnail: d.thumbnail ?? null,
        formattedDate: formatDate(new Date(d.date)),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const allTags = [
    "All",
    ...Array.from(
      new Set(sortedBlogs.flatMap((b) => b.tags))
    ).sort(),
  ];

  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] =
      tag === "All"
        ? sortedBlogs.length
        : sortedBlogs.filter((b) => b.tags.includes(tag)).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute top-0 left-0 z-0 w-full h-[200px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.05}
        />
      </div>
      <div className="p-6 border-b border-border flex flex-col gap-6 min-h-[250px] justify-center relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-4xl md:text-5xl tracking-tighter">
              Hanzo Blog
            </h1>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              AI research, infrastructure, models, and more from Hanzo AI.
            </p>
          </div>
        </div>
      </div>

      <Suspense>
        <BlogList blogs={sortedBlogs} allTags={allTags} tagCounts={tagCounts} />
      </Suspense>
    </div>
  );
}
