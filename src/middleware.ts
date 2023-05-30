import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// This function can be marked `async` if using `await` inside

const isLoginPage = (url: string) => {
  return url.includes("/auth/login");
};

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  console.log("request.nextUrl", request);

  return accessToken
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/auth/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|404|500|auth).*)"],
};
