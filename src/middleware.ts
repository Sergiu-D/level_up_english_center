import { NextResponse, NextRequest } from "next/server";

// Middleware function
export function middleware(req: NextRequest) {
  // Check if the AUTH_DEV cookie is present and valid
  const authCookie = req.cookies.get("dev_token");
  // Check the current environment
  const isDevelopment =
    process.env.NEXT_PUBLIC_NODE_ENVIRONMENT === "development";
  const devAuthValue = process.env.AUTH_DEV_TOKEN;

  // In production, skip validation and allow access
  if (!isDevelopment || authCookie?.value === devAuthValue) {
    return NextResponse.next();
  }

  // In development mode, check for the "dev_pass_code" cookie
  const devPassCode = req.cookies.get("dev_pass_code");
  const correctPassCode = process.env.DEV_PASS_CODE;

  // If the passcode is missing or incorrect, redirect to login
  if (devPassCode !== correctPassCode) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // If the passcode is correct, allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|login).*)",
  ],
};