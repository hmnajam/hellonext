import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;

  if (url.searchParams.has("name")) {
    const ip = request.ip;
    const name = url.searchParams.get("name");
    const age = url.searchParams.get("age");
    const currentTime = new Date();
    return new NextResponse(`Hello! I am ${name}. I am ${age} years old. 
    My IP address is ${ip}. The time right now is ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`);
  } else {
    return new NextResponse('Please send your name in search parameter "name" and age in "age"');
  }
}
