import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  //await cookies()
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return Response.json({ user: null }, { status: 200 });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    return Response.json({ user: decoded }, { status: 200 });
  } catch {
    return Response.json({ user: null }, { status: 401 });
  }
}