import { ImageResponse } from "next/og";
import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

export const runtime = "nodejs";
export const alt = "Hanzo Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const blogSource = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

export function generateStaticParams() {
  return blogSource.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const page = blogSource.getPage([slug]);

    const title = page?.data.title ?? "Hanzo Blog";
    const author = page?.data.author ? String(page.data.author) : "Hanzo AI";
    const date = page?.data.date ? String(page.data.date) : "";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0a0a0a",
            padding: "40px",
            fontFamily: "system-ui",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              border: "2px solid #333",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "60px",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                color: "#888",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              HANZO AI
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "900px",
              }}
            >
              <h1
                style={{
                  fontSize: "56px",
                  color: "#fff",
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                }}
              >
                {title}
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontSize: "22px",
                color: "#888",
              }}
            >
              <span>{author}</span>
              {date ? (
                <>
                  <span style={{ color: "#444" }}>|</span>
                  <span>{date}</span>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response(
      `Failed to generate image: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        status: 500,
      }
    );
  }
}
