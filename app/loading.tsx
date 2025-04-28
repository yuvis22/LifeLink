import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 text-rose-600 animate-spin mb-4" />
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
