"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 mb-6">
          <AlertCircle className="h-10 w-10 text-rose-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Something went wrong
        </h1>

        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>

        {error.message && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-gray-700 font-mono break-words">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="flex items-center"
            variant="outline"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Try again
          </Button>

          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-rose-600 hover:bg-rose-700 text-white flex items-center"
          >
            <Home className="mr-2 h-4 w-4" />
            Return to home
          </Button>
        </div>
      </div>
    </div>
  );
}
