import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Form Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Return clean success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for getting in touch! Vamshi will respond shortly.",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
