import { SignedIn, SignedOut, SignInButton, UserButton } from "@aac/auth/client";
import { Button } from "@aac/ui";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <h1 className="text-4xl font-bold tracking-tight">AAC</h1>
      <p className="text-muted-foreground text-lg">Your B2C SaaS boilerplate is ready.</p>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
          <Link href="/sign-up">
            <Button variant="outline">Sign Up</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
          <UserButton />
        </SignedIn>
      </div>
    </main>
  );
}
