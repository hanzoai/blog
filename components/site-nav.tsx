import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
        <div className="mr-4 flex">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 font-medium text-lg tracking-tighter"
          >
            <span className="font-bold">HANZO</span>
            <span className="text-muted-foreground font-normal">Blog</span>
          </Link>
        </div>

        <div className="flex flex-1 w-full justify-end">
          <nav className="flex items-center gap-4">
            <Link
              href="https://hanzo.ai"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              hanzo.ai
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
