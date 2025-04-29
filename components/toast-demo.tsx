"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ToastDemo() {
  return (
    <Button
      onClick={() =>
        toast.success("Thanks for your interest in LifeLink!", {
          description: "Learn more about our mission and values.",
        })
      }
      variant="outline"
      className="mt-4"
    >
      Show Toast
    </Button>
  );
}
