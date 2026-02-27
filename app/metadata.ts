import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
    "Blog",
    "Hanzo AI",
    "Hanzo Blog",
    "AI Research",
    "AI Infrastructure",
    "AI Models",
    "Zen Models",
    "Machine Learning",
    "LLM",
    "Foundation Models",
    "Blockchain",
    "Lux Network",
    "MCP",
    "Model Context Protocol",
    "Agent Framework",
]

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "Hanzo AI",
            url: "https://hanzo.ai",
        },
    ],
    creator: "Hanzo AI",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@hanzoai",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};
