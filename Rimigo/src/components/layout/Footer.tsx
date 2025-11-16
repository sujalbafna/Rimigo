import { Globe } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl">Rimigo</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your next adventure starts here.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2">
            <div className="space-y-2">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-1">
                <li><Link href="/destinations" className="text-sm text-muted-foreground hover:text-foreground">Destinations</Link></li>
                <li><Link href="#experiences" className="text-sm text-muted-foreground hover:text-foreground">Experiences</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-1">
                <li><Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-1">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rimigo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
