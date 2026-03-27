// /src/app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing fields" },
        { status: 400 }
      );
    }

    //Validate env properly (runtime safe)
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is missing in environment variables");
    }

    const client = await clientPromise;
    const db = client.db("honeyland");

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    const token = jwt.sign(
      { id: newUser.insertedId.toString(), email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    return NextResponse.json({ token, name });
  } catch (err) {
    console.error("Signup error:", err);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}