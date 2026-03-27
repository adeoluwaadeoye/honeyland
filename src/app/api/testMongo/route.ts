import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("honeyland");

    // simple ping
    await db.command({ ping: 1 });

    return NextResponse.json({ message: "✅ MongoDB connected!" });
  } catch (error) {
    console.error("Mongo test error:", error);
    return NextResponse.json(
      { message: "❌ MongoDB failed", error },
      { status: 500 }
    );
  }
}