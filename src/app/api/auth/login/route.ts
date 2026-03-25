import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
if (!JWT_SECRET) throw new Error("JWT_SECRET must be defined in .env");

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  const db = await connectToDatabase();
  const user = await db.collection("users").findOne({ email });
  if (!user) return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

  const token = jwt.sign({ id: user._id, email }, JWT_SECRET, { expiresIn: "1d" });

  return NextResponse.json({ name: user.name, token });
}