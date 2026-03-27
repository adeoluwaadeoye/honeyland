import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();

  // Delete the token cookie
  cookieStore.delete("token");

  return Response.json(
    { message: "Logged out" },
    { status: 200 }
  );
}