import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const handler = clerkMiddleware();

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  try {
    return handler(request, event);
  } catch (error) {
    console.error("Middleware error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}