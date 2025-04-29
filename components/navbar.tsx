"use client";

import { useState } from "react";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

import {
  Menu,
  X,
  Heart,
  Search,
  Calendar,
  FileText,
  User,
  Home,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Create navigation items with conditional profile item
  const getNavItems = () => {
    const baseItems = [
      { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
      {
        name: "Find Donor",
        href: "/find-donor",
        icon: <Search className="h-4 w-4 mr-2" />,
      },
      {
        name: "Schedule Donation",
        href: "/schedule",
        icon: <Calendar className="h-4 w-4 mr-2" />,
      },
      {
        name: "Articles",
        href: "/articles",
        icon: <FileText className="h-4 w-4 mr-2" />,
      },
    ];

    // Add profile link only if user is authenticated
    if (isSignedIn) {
      return [
        ...baseItems.slice(0, 1), // Home
        {
          name: "Profile",
          href: "/profile",
          icon: <User className="h-4 w-4 mr-2" />,
        },
        {
          name: "Become a Donor",
          href: "/register",
          icon: <Heart className="h-4 w-4 mr-2" />,
        },
        ...baseItems.slice(1), // Rest of the items
      ];
    }

    return baseItems;
  };

  const navItems = getNavItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-600 fill-rose-600" />
            <span className="font-bold text-lg text-rose-600">LifeLink</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isSignedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                Hello, {user.firstName || user.username}
              </span>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  },
                }}
              />
            </div>
          ) : (
            <>
              <SignInButton>
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button
                  size="sm"
                  className="bg-rose-600 hover:bg-rose-700 text-white"
                >
                  Register as Donor
                </Button>
              </SignUpButton>
            </>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-muted-foreground border-muted-foreground hover:text-foreground hover:border-foreground"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-50 bg-background md:hidden transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center py-3 text-base font-medium text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            {isSignedIn ? (
              <div className="pt-4 flex flex-col space-y-3">
                <div className="flex items-center gap-3 py-3">
                  <UserButton afterSignOutUrl="/" />
                  <span className="text-sm font-medium">
                    {user.firstName || user.username}
                  </span>
                </div>
                <Link href="/profile" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    My Profile
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="pt-4 flex flex-col space-y-3">
                <SignInButton>
                  <Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button
                    className="bg-rose-600 hover:bg-rose-700 text-white w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Register as Donor
                  </Button>
                </SignUpButton>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
