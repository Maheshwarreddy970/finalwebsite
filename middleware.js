import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Protect client-specific routes
const isProtectedRoute = createRouteMatcher([
  "/:clientname/admin(.*)",
  "/:clientname/saved-cars(.*)",
  "/:clientname/reservations(.*)",
]);

const middleware = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If not signed in and hitting a protected route → redirect
  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  return NextResponse.next();
});

export default middleware;

// ✅ Exclude static assets & Clerk auth routes to prevent redirect loops
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)|sign-in|sign-up|sso-callback).*)",
    "/(api|trpc)(.*)",
  ],
};
