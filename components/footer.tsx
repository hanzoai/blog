import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-6 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Image
            src="/hanzo-logo.svg"
            alt="Hanzo"
            width={16}
            height={16}
            className="dark:invert-0 invert opacity-50"
          />
          <span>© 2025 Hanzo AI, Inc. Techstars &apos;17.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://hanzo.ai/privacy" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="https://hanzo.ai/terms" className="hover:text-foreground transition-colors">Terms</a>
          <a href="https://blog.zoo.ngo" className="hover:text-foreground transition-colors hidden sm:block">zoo blog</a>
          <a href="https://zenlm.org/blog" className="hover:text-foreground transition-colors hidden sm:block">zen blog</a>
          <a href="https://zeekay.blog" className="hover:text-foreground transition-colors hidden sm:block">zeekay.blog</a>
          <a
            href="https://github.com/hanzoai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
