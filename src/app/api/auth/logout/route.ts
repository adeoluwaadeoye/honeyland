// app/api/auth/logout/route.ts
import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("token");
  return Response.json({ message: "Logged out" });
} 