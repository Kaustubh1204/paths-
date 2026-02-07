import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <h1 className="text-2xl font-bold">Clerk Auth Integration</h1>

      <SignedOut>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-600">Please sign in to continue</p>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Sign In with Clerk
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex flex-col items-center gap-4">
          <p className="text-green-600 font-medium">You are successfully signed in!</p>
          <div className="scale-150">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </SignedIn>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <button className="px-4 py-2 border rounded hover:bg-gray-100">click me</button>
      </div>
    </div>
  );
}
