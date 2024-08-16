import prisma from "../../../../helpers/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { name, email, password } = reqBody;
    if (!name || !email || !password) {
      return NextResponse.json({ code:400, message: "All fields are required" });
    }
    // Find existing email
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ code:400, message: "Email already exists!" });
    }

    // TODO: Save user into database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return NextResponse.json({ code:201, message: "Account registered successfully!" });
  } catch (error) {
    return NextResponse.json({ code:500, message: "Please provided some json" });
  }
}
