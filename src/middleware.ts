import { type NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET =
  process.env.NEXT_JWT_SECRET ||
  process.env.JWT_SECRET ||
  "your-secret-key-change-in-production";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  console.log("Middleware triggered for:", pathname);

  // Only protect dashboard routes
  if (pathname.startsWith("/dashboard")) {
    console.log("Checking auth for dashboard route...");
    if (!token) {
      console.log("No token found, redirecting to /login");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jwtVerify(token, secret);
      console.log("Token verified successfully");
      return NextResponse.next();
    } catch (error: any) {
      console.error("Token verification failed:", error.message);
      // If token is invalid, redirect to login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // For all other routes, allow the request
  return NextResponse.next();
}

// Only run middleware for dashboard routes to improve performance and avoid protecting the whole site
export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
