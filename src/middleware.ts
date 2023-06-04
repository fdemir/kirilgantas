import { NextResponse, type NextRequest } from "next/server";
import { checkBasicAuth } from "./check-auth";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    PUBLIC_FILE.test(pathname)
  )
    return NextResponse.next();

  if (checkBasicAuth(req)) return NextResponse.next();

  return NextResponse.json(
    {
      message: "You shall not pass!",
    },
    {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="PROTECTED"',
      },
    }
  );
}
