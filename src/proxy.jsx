import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {

  const { pathname} = request.nextUrl
  
const session=await auth.api.getSession({
  headers:await headers()
})

if (!session) {
        const loginUrl = new URL("/login", request.url)
        loginUrl.searchParams.set("redirect",pathname)
        return NextResponse.redirect(loginUrl)
    }

  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*","/opportunities/:path*/application"],
};