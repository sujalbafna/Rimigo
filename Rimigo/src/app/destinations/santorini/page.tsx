
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Sun, Utensils, Waves } from 'lucide-react';
import Link from 'next/link';

export default function SantoriniPage() {
  const galleryImages = [
    { src: 'https://picsum.photos/seed/santorini1/800/600', alt: 'Oia village at sunset', hint: 'Santorini sunset' },
    { src: 'https://picsum.photos/seed/santorini2/800/600', alt: 'Blue dome church in Fira', hint: 'Santorini church' },
    { src: 'https://picsum.photos/seed/santorini3/800/600', alt: 'Red Beach with volcanic sand', hint: 'Santorini beach' },
    { src: 'https://picsum.photos/seed/santorini4/800/600', alt: 'Caldera view from a hotel', hint: 'Santorini caldera' },
  ];

  const attractions = [
    { name: 'Oia\'s Sunset', description: 'Witness one of the world\'s most famous and breathtaking sunsets.', icon: Sun },
    { name: 'Fira\'s Caldera Views', description: 'Explore the vibrant capital and its stunning cliffside views.', icon: MapPin },
    { name: 'Amoudi Bay', description: 'Swim in crystal-clear waters and dine at fresh seafood tavernas.', icon: Waves },
    { name: 'Local Wineries', description: 'Taste unique volcanic wines like Assyrtiko at a local vineyard.', icon: Utensils },
  ];

  return (
    <>
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1570158268183-49ebd7975a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MHx8fHwxNzYzOTg1NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Panoramic view of Santorini"
          fill
          className="object-cover z-0"
          priority
          data-ai-hint="Santorini greece"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
        <div className="relative z-20 container px-4 md:px-6 flex flex-col items-center">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl animate-slide-in-bottom [animation-delay:0.2s] animation-fill-forwards">
            Santorini, Greece
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg md:text-xl text-white/90 animate-slide-in-bottom [animation-delay:0.4s] animation-fill-forwards">
            Discover the Jewel of the Aegean.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                An Island Forged by Volcanoes
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Santorini is an island of dramatic beauty, a crescent-shaped oasis of whitewashed villages clinging to volcanic cliffs. Its iconic blue-domed churches, vibrant bougainvillea, and legendary sunsets create a postcard-perfect landscape that captivates every visitor.
                </p>
                <p>
                  From the bustling streets of Fira to the romantic allure of Oia, the island offers a unique blend of history, culture, and relaxation. Explore ancient ruins, swim in turquoise waters, or simply relax with a glass of local wine while gazing at the endless expanse of the Aegean Sea.
                </p>
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/destinations">Back to Destinations</Link>
              </Button>
            </div>
            <div className="md:col-span-4">
              <Card>
                <CardHeader>
                  <CardTitle>Top Attractions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {attractions.map((attraction) => (
                    <div key={attraction.name} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <attraction.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{attraction.name}</p>
                        <p className="text-sm text-muted-foreground">{attraction.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary/50">
        <div className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Gallery
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-muted-foreground md:text-lg">
              A glimpse into the magic of Santorini.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  data-ai-hint={img.hint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
