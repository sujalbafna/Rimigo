
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mountain, TramFront, Utensils, Zap } from 'lucide-react';
import Link from 'next/link';

export default function SwissAlpsPage() {
  const galleryImages = [
    { src: 'https://picsum.photos/seed/alps1/800/600', alt: 'Matterhorn peak at sunrise', hint: 'Matterhorn sunrise' },
    { src: 'https://picsum.photos/seed/alps2/800/600', alt: 'A scenic train journey through the mountains', hint: 'Swiss mountain train' },
    { src: 'https://picsum.photos/seed/alps3/800/600', alt: 'Hiking trail overlooking a valley', hint: 'Alps hiking trail' },
    { src: 'https://picsum.photos/seed/alps4/800/600', alt: 'A traditional Swiss chalet', hint: 'Swiss chalet' },
  ];

  const attractions = [
    { name: 'The Matterhorn', description: 'Iconic pyramid-shaped peak, a challenge for climbers and a sight for all.', icon: Mountain },
    { name: 'Jungfrau Region', description: 'Home to famous peaks, scenic railways, and charming mountain villages.', icon: TramFront },
    { name: 'Fondue Tasting', description: 'Indulge in a classic Swiss culinary experience with rich, melted cheese.', icon: Utensils },
    { name: 'Interlaken Adventures', description: 'A hub for thrill-seekers, offering everything from paragliding to canyoning.', icon: Zap },
  ];

  return (
    <>
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHN8ZW58MHx8fHwxNzY0NTg0MzIyfDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Panoramic view of the Swiss Alps"
          fill
          className="object-cover z-0"
          priority
          data-ai-hint="Swiss Alps panorama"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
        <div className="relative z-20 container px-4 md:px-6 flex flex-col items-center">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl animate-slide-in-bottom [animation-delay:0.2s] animation-fill-forwards">
            The Swiss Alps
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg md:text-xl text-white/90 animate-slide-in-bottom [animation-delay:0.4s] animation-fill-forwards">
            Experience Majestic Peaks and Alpine Wonders.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                A Realm of Natural Splendor
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  The Swiss Alps are a breathtaking expanse of snow-capped peaks, lush green valleys, and crystal-clear lakes. This legendary mountain range offers an unparalleled playground for nature lovers and adventurers alike. Whether you're carving down pristine ski slopes, hiking through wildflower meadows, or simply soaking in the views from a cogwheel train, the Alps promise an unforgettable experience.
                </p>
                <p>
                  Discover charming alpine villages, savor hearty mountain cuisine, and feel the thrill of the great outdoors. From the iconic Matterhorn to the serene beauty of Lake Geneva, the Swiss Alps are a destination that will elevate your spirit and leave you in awe of nature's grandeur.
                </p>
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/destinations">Back to Destinations</Link>
              </Button>
            </div>
            <div className="md:col-span-4">
              <Card>
                <CardHeader>
                  <CardTitle>Top Experiences</CardTitle>
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
              A glimpse into the majesty of the Alps.
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
