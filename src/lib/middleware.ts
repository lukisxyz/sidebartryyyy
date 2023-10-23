import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const session = request.cookies.get("session");

  //Return to /welcome if don't have a session
  if (!session) {
    return NextResponse.redirect(new URL("/welcome", request.url));
  }

  //Call the authentication endpoint
  const responseAPI = await fetch(`${request.nextUrl.origin}/api/auth`, {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });

  //Return to /welcome if token is not authorized
  if (responseAPI.status !== 200) {
    return NextResponse.redirect(new URL("/welcome", request.url));
  }

  return NextResponse.next();
}

//Add your protected routes
export const config = {
  matcher: ["/app/:path*"],
};
