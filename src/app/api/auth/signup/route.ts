import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectToDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    //Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing fields" },
        { status: 400 }
      );
    }

    //Validate environment variable
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
      console.error("JWT_SECRET missing");
      return NextResponse.json(
        { message: "Server misconfigured" },
        { status: 500 }
      );
    }

    //Connect to DB safely (no build-time execution)
    const client = await connectToDB();
    const db = client.db("honeyland");

    //Check if user already exists
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Insert new user
    const newUser = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    //Generate JWT
    const token = jwt.sign(
      { id: newUser.insertedId.toString(), email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    return NextResponse.json({
      token,
      name,
    });

  } catch (error) {
    console.error("Signup error:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}