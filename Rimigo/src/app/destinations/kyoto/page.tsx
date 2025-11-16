
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Landmark, Utensils, Zap } from 'lucide-react';
import Link from 'next/link';

export default function KyotoPage() {
  const galleryImages = [
    { src: 'https://picsum.photos/seed/kyoto1/800/600', alt: 'Kinkaku-ji (Golden Pavilion)', hint: 'Golden Pavilion' },
    { src: 'https://picsum.photos/seed/kyoto2/800/600', alt: 'Fushimi Inari Shrine with red torii gates', hint: 'Fushimi Inari' },
    { src: 'https://picsum.photos/seed/kyoto3/800/600', alt: 'Arashiyama Bamboo Grove path', hint: 'Arashiyama Bamboo' },
    { src: 'https://picsum.photos/seed/kyoto4/800/600', alt: 'Geisha in Gion district', hint: 'Kyoto Geisha' },
  ];

  const attractions = [
    { name: 'Fushimi Inari Shrine', description: 'Walk through thousands of iconic red torii gates.', icon: Landmark },
    { name: 'Arashiyama Bamboo Grove', description: 'Find tranquility in a towering bamboo forest.', icon: Leaf },
    { name: 'Gion District', description: 'Explore the traditional streets and spot geishas.', icon: Zap },
    { name: 'Nishiki Market', description: 'Savor Kyoto\'s culinary delights at this bustling market.', icon: Utensils },
  ];

  return (
    <>
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxLeW90byUyMGphcGFufGVufDB8fHx8MTc2NDY2NzI1OXww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Panoramic view of Kyoto"
          fill
          className="object-cover z-0"
          priority
          data-ai-hint="Kyoto Japan panorama"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 z-10" />
        <div className="relative z-20 container px-4 md:px-6 flex flex-col items-center">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl animate-slide-in-bottom [animation-delay:0.2s] animation-fill-forwards">
            Kyoto, Japan
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg md:text-xl text-white/90 animate-slide-in-bottom [animation-delay:0.4s] animation-fill-forwards">
            Where Ancient Traditions Meet Modern Wonders.
          </p>
        </div>
      </section>

      <div className="bg-background">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                A Journey Through Time
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Kyoto, Japan's former imperial capital, is a city where centuries of history live on. With its serene temples, sublime gardens, and traditional wooden houses, Kyoto offers a profound connection to Japan's rich cultural heritage. Wander through mystical bamboo forests, witness the elegance of a geisha in the Gion district, and marvel at the splendor of golden pavilions.
                </p>
                <p>
                  Beyond its timeless beauty, Kyoto is a vibrant modern city. The seamless blend of old and new creates a unique atmosphere that is both peaceful and exhilarating. Whether you're seeking spiritual enlightenment, culinary adventures, or simply a glimpse into a different world, Kyoto is a destination that will enchant and inspire you.
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
              A glimpse into the beauty of Kyoto.
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
