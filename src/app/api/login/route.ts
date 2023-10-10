import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";

export const POST = async (request: NextRequest) => {
  let body = await request.json();
  let secret = new TextEncoder().encode("secret");
  if (body.email === "admin@gmail.com" && body.password === "admin") {
    const jwt = await new SignJWT({ email: "admin@gmail.com" })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);

    let response = NextResponse.json({ success: true });
    response.cookies.set({
      name: "token",
      value: jwt,
      httpOnly: true,
    });
    return response;
  } else {
    return NextResponse.json({ success: false });
  }
};
