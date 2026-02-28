import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Hanzo Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  try {
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
              alignItems: "center",
              justifyContent: "center",
              padding: "60px",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                color: "#888",
                marginBottom: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              HANZO AI
            </div>
            <h1
              style={{
                fontSize: "64px",
                color: "#fff",
                marginBottom: "10px",
                textAlign: "center",
                letterSpacing: "0.5px",
              }}
            >
              Blog
            </h1>
            <p
              style={{
                fontSize: "28px",
                color: "#888",
                textAlign: "center",
                maxWidth: "800px",
                letterSpacing: "0.5px",
                border: "1px solid #333",
                padding: "10px 20px",
                borderRadius: "100px",
              }}
            >
              AI research, infrastructure, models, and more
            </p>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    console.error("Error generating image:", error);
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
