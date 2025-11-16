
'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export default function DestinationsPage() {
    const destinations = [
        {
          id: 'santorini',
          title: 'Santorini, Greece',
          description: 'Iconic sunsets over the Aegean Sea.',
          image: PlaceHolderImages.find((img) => img.id === 'card-image-1'),
          href: '/destinations/santorini'
        },
        {
          id: 'alps',
          title: 'Swiss Alps',
          description: 'Pristine trails and majestic peaks.',
          image: PlaceHolderImages.find((img) => img.id === 'card-image-2'),
          href: '/destinations/alps'
        },
        {
          id: 'kyoto',
          title: 'Kyoto, Japan',
          description: 'Ancient temples and serene gardens.',
          image: PlaceHolderImages.find((img) => img.id === 'card-image-3'),
          href: '/destinations/kyoto'
        },
        {
            id: 'bali',
            title: 'Bali, Indonesia',
            description: 'Lush rice paddies and vibrant culture.',
            imageUrl: 'https://picsum.photos/seed/4/600/400',
            imageHint: 'Bali rice terrace',
            href: '#'
        },
        {
            id: 'rome',
            title: 'Rome, Italy',
            description: 'A journey through ancient history.',
            imageUrl: 'https://picsum.photos/seed/5/600/400',
            imageHint: 'Rome colosseum',
            href: '#'
        },
        {
            id: 'new-york',
            title: 'New York, USA',
            description: 'The city that never sleeps.',
            imageUrl: 'https://picsum.photos/seed/6/600/400',
            imageHint: 'New York skyline',
            href: '#'
        },
        {
            id: 'paris',
            title: 'Paris, France',
            description: 'The city of love and lights.',
            imageUrl: 'https://picsum.photos/seed/7/600/400',
            imageHint: 'Paris Eiffel Tower',
            href: '#'
        },
        {
            id: 'bora-bora',
            title: 'Bora Bora',
            description: 'Overwater bungalows and turquoise lagoons.',
            imageUrl: 'https://picsum.photos/seed/8/600/400',
            imageHint: 'Bora Bora bungalow',
            href: '#'
        },
        {
            id: 'dubai',
            title: 'Dubai, UAE',
            description: 'Futuristic skyscrapers and desert adventures.',
            imageUrl: 'https://picsum.photos/seed/9/600/400',
            imageHint: 'Dubai skyline',
            href: '#'
        }
      ];


  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Explore Destinations
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Find your next adventure from our curated list of breathtaking places around the world.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link key={destination.id} href={destination.href} className="block group">
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{destination.title}</CardTitle>
                  <CardDescription>
                    {destination.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="overflow-hidden rounded-lg">
                    <Image 
                      src={destination.image ? destination.image.imageUrl : destination.imageUrl || ''} 
                      alt={destination.image ? destination.image.description : destination.title} 
                      width={600} 
                      height={400} 
                      className="rounded-lg object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-300" 
                      data-ai-hint={destination.image ? destination.image.imageHint : destination.imageHint} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
