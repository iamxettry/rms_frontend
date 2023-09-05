import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let verify = request.cookies.has("loggedin");
  let { url } = request;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (verify && url.includes("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // if (
  //     verify &&
  //     super_user.value &&
  //     url.includes("/dashboard")
  //   ) {
  //     return NextResponse.redirect(new URL("/dashboard/admin", request.url));
  //   }
  //   if (
  //     verify &&
  //     super_user &&
  //     (url.includes("/dashboard") || url.includes("/dashboard/user"))
  //   ) {
  //     return NextResponse.redirect(new URL("/dashboard/admin", request.url));
  //   }
  //   if ( verify &&
  //     !super_user &&
  //     (url.includes("/dashboard") || url.includes("/dashboard/admin"))
  //   ) {
  //     return NextResponse.redirect(new URL("/dashboard/user", request.url));
  //   }
}

// See "Matching Paths" below to learn more
export const config = {
  //   matcher: '/dashboard/:path*',
};
