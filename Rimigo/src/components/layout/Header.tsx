import { Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block font-headline">Rimigo</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/destinations"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Destinations
          </Link>
          <Link
            href="/#experiences"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Experiences
          </Link>
          <Link
            href="/#about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
