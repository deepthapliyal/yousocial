import Link from "next/link";
import { Button } from "@/components/ui/button";
import AuthButtonClient from "@/app/AuthButton.client";
import { SessionProvider } from "next-auth/react";
import { BASE_PATH, auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="fixed  inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" href="/">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">you social</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Home
            </Link>
            {/* <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Feed
            </Link> */}
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Discover
            </Link>
            <Link
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              href="#"
            >
              Notifications
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button size="sm" variant="outline">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button> */}
            <SessionProvider basePath={BASE_PATH} session={session}>
              <AuthButtonClient />
            </SessionProvider>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
