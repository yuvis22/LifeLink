import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <span className="text-7xl font-bold text-rose-600">404</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Page not found
        </h1>

        <p className="text-gray-600 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="flex items-center">
            <Link href="/find-donor">
              <Search className="mr-2 h-4 w-4" />
              Find donors
            </Link>
          </Button>

          <Button
            asChild
            className="bg-rose-600 hover:bg-rose-700 text-white flex items-center"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return to home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
