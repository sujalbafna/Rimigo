
'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  ArrowRight,
  BrainCircuit,
  Gem,
  Sparkles,
  Star,
  Calendar as CalendarIcon,
  Users,
  MapPin,
  Quote,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import * as React from 'react';

export default function Home() {
  const [date, setDate] = React.useState<Date>();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-section');

  const testimonials = [
    {
      name: 'Sarah K.',
      title: 'Solo Traveler',
      quote:
        'Rimigo planned my entire solo trip to Japan flawlessly. The AI understood my interests perfectly and suggested hidden gems I would have never found on my own. It was like having a personal travel agent in my pocket!',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
      name: 'Mark T.',
      title: 'Family Vacation Planner',
      quote:
        'Organizing a trip for my family of five used to be a nightmare. With Rimigo, I just entered our preferences, and it generated a complete, kid-friendly itinerary. The smart booking alerts saved us a ton of money too.',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    },
    {
      name: 'Jessica L.',
      title: 'Adventure Seeker',
      quote:
        'I love off-the-beaten-path adventures, and Rimigo delivered. From hiking in the Alps to authentic street food tours, every recommendation was spot-on. I can\'t imagine planning a trip without it now.',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    },
  ];
  
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

  const features = [
    {
      icon: BrainCircuit,
      title: 'Dynamic AI-Curated Itineraries',
      description: 'Your trip, perfectly matched to you.',
      fullDescription: 'Our smart AI understands your travel style and preferences to build a unique itinerary, from activities to dining.'
    },
    {
      icon: Gem,
      title: 'Access Local Secrets',
      description: 'Not just the tourist traps.',
      fullDescription: 'Discover hidden gems, authentic local restaurants, and unique experiences that you won\'t find in a typical guidebook.'
    },
    {
      icon: Sparkles,
      title: 'Smart Booking & Alerts',
      description: 'Optimal pricing and timing.',
      fullDescription: 'We monitor prices and availability to recommend the best times to book flights and accommodations, saving you money.'
    }
  ];

  return (
    <>
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover z-0"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container px-4 md:px-6 flex flex-col items-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your AI-Powered Journey, Instantly Built
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg md:text-xl text-white/80">
            Stop planning, start discovering. Let our AI craft your perfect itinerary in seconds.
          </p>
          <div className="mt-8 w-full max-w-4xl p-4 bg-background/20 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="relative md:col-span-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Destination" className="pl-10 h-12 text-base" />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal h-12 text-base",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    {date ? format(date, "PP") : <span>Travel Dates</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input type="number" placeholder="Travelers" className="pl-10 h-12 text-base" />
              </div>
              <Button size="lg" className="h-12 text-base md:col-span-1" asChild>
                <Link href="/itinerary">Build My Itinerary <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Featured Destinations
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-muted-foreground md:text-lg">
              Explore breathtaking locations curated just for you.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 9).map((destination) => (
                <Link key={destination.id} href={destination.href} className="block group">
                <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <CardHeader>
                    <CardTitle>{destination.title}</CardTitle>
                    <CardDescription>
                        {destination.description}
                    </CardDescription>
                    </CardHeader>
                    <CardContent>
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
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/destinations">Explore All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="experiences" className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Rimigo? Travel Smarter.
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-muted-foreground md:text-lg">
              We go beyond basic planning to create truly personalized and unforgettable journeys.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
              <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle>{feature.title}</CardTitle>
                            <CardDescription>{feature.description}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{feature.fullDescription}</p>
                </CardContent>
              </Card>
          ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Loved by Travelers
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-muted-foreground md:text-lg">
              See what others are saying about their experience with Rimigo.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="flex-grow p-6">
                  <Quote className="w-8 h-8 text-primary/50 mb-4" />
                  <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4 pt-0">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

    

    