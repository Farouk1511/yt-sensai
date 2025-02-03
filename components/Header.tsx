import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50  supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto h-16 flex justify-between items-center px-4">
        <Link href="/" className="text-4xl text-center">
          SENSAI
        </Link>

        <div>
          <SignedIn>
            <Link href="/dashboard">
              <Button>
                <LayoutDashboard className="h-4 w-4" />
                <span className="hideen md:block">Indusrty insights</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};
export default Header;
