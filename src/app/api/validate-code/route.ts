import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const {code} = await request.json();

  const validCode = process.env.DEV_PASS_CODE;
  const token = process.env.AUTH_DEV_TOKEN;

  if (code === validCode) {
    // If the code is valid, set the AUTH_DEV cookie
    const response = NextResponse.json({
      message: "Code is valid",
      success: true,
    });
    response.cookies.set("dev_token", `${token}`, {
      httpOnly: true, // Prevent access from JavaScript (optional for security)
      sameSite: "strict", // Prevent CSRF
      maxAge: 60 * 60 * 24 * 365 * 10, // 10 years expiration
      path: "/", // Cookie available on all pages
    });

    return response;
  } else {
    return NextResponse.json(
      { message: "Invalid code", success: false },
      { status: 401 }
    );
  }
}
