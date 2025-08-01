import { NextResponse } from "next/server";

export function middleware(request: Request) {
  console.log(request);

  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};

// my test codes :   کد های من برای درک بهتر
// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   console.log(request);

//   return NextResponse.redirect(new URL("archive", request.url));
// }

// export const config = {
//   matcher: "/news",
// };
