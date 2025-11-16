'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Globe } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex-grow flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to access your saved trips and deals.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full mt-4">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-center text-sm">
            <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link href="/auth/signup" className="underline hover:text-primary">
                Sign up
                </Link>
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
