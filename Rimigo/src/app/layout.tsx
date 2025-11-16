import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Chatbot } from '@/components/chatbot/Chatbot';

export const metadata: Metadata = {
  title: 'Rimigo',
  description: 'A modern travel app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow animate-fade-in">{children}</main>
        <Footer />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
