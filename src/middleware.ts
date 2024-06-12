import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  if (!(await isAuthenticated(req))) {
    return new NextResponse("Unauthorised user", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }
};
const isAuthenticated = async (req: NextRequest) => {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization");
  if (!authHeader) return false;
  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return true;
  }
  return false;
};
export const config = {
  matcher: "/admin/:path*",
};
