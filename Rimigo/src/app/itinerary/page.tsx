
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  MapPin,
  Clock,
  Camera,
  Utensils,
  Sun,
  Moon,
  Plane,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const itineraryData = {
  destination: 'Tokyo, Japan',
  duration: '5 Days',
  days: [
    {
      day: 1,
      title: 'Arrival and Shinjuku Exploration',
      icon: Plane,
      events: [
        {
          time: '3:00 PM',
          title: 'Arrival & Check-in',
          description: 'Arrive at your hotel in Shinjuku, settle in.',
          icon: MapPin,
        },
        {
          time: '7:00 PM',
          title: 'Dinner at Omoide Yokocho',
          description:
            "Experience authentic yakitori in a nostalgic alleyway.",
          icon: Utensils,
        },
        {
          time: '9:00 PM',
          title: 'Tokyo Metropolitan Government Building',
          description:
            'Enjoy panoramic night views of the city for free.',
          icon: Camera,
        },
      ],
      image: {
        src: 'https://picsum.photos/seed/tokyo1/800/600',
        alt: 'Shinjuku at night',
        hint: 'Shinjuku night',
      },
    },
    {
      day: 2,
      title: 'Tradition Meets Modernity',
      icon: Sun,
      events: [
        {
          time: '9:00 AM',
          title: 'Meiji Jingu Shrine',
          description: 'Visit the peaceful shrine dedicated to Emperor Meiji.',
          icon: MapPin,
        },
        {
          time: '11:00 AM',
          title: 'Harajuku & Takeshita Street',
          description:
            "Explore Japan's youth culture and quirky fashion.",
          icon: Camera,
        },
        {
          time: '1:00 PM',
          title: 'Lunch in Harajuku',
          description: 'Try giant rainbow candy floss or savory crepes.',
          icon: Utensils,
        },
        {
          time: '3:00 PM',
          title: 'Shibuya Crossing',
          description:
            'Witness the world\'s busiest pedestrian intersection.',
          icon: Camera,
        },
      ],
      image: {
        src: 'https://picsum.photos/seed/tokyo2/800/600',
        alt: 'Shibuya Crossing',
        hint: 'Shibuya Crossing',
      },
    },
    {
      day: 3,
      title: 'Culture and Cuisine',
      icon: Utensils,
      events: [
        {
          time: '8:00 AM',
          title: 'Tsukiji Outer Market',
          description: 'Savor a fresh sushi breakfast and explore the market.',
          icon: Utensils,
        },
        {
          time: '11:00 AM',
          title: 'TeamLab Borderless',
          description: 'Immerse yourself in a world of digital art.',
          icon: Camera,
        },
        {
          time: '4:00 PM',
          title: 'Asakusa & Sensō-ji Temple',
          description: "Explore Tokyo's oldest temple and traditional shops.",
          icon: MapPin,
        },
      ],
      image: {
        src: 'https://picsum.photos/seed/tokyo3/800/600',
        alt: 'Sensō-ji Temple',
        hint: 'Senso-ji Temple',
      },
    },
  ],
};

export default function ItineraryResultPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Your Custom Itinerary for {itineraryData.destination}
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Our AI has crafted this unique {itineraryData.duration} journey just
            for you.
          </p>
        </div>

        <div className="space-y-12">
          {itineraryData.days.map((day) => (
            <Card
              key={day.day}
              className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-4 lg:col-span-3">
                  <Image
                    src={day.image.src}
                    alt={day.image.alt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    data-ai-hint={day.image.hint}
                  />
                </div>
                <div className="md:col-span-8 lg:col-span-9">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <day.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-2xl font-bold tracking-tight">
                        Day {day.day}: {day.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pl-8">
                    {day.events.map((event, index) => (
                      <div key={index} className="relative flex items-start">
                        <div className="absolute -left-5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                          <event.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-base">
                            <Clock className="mr-2 inline h-4 w-4 text-muted-foreground" />
                            {event.time} - {event.title}
                          </p>
                          <p className="pl-6 text-muted-foreground">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">Ready for a new adventure?</p>
          <Button size="lg" asChild>
            <Link href="/">Build Another Itinerary</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
