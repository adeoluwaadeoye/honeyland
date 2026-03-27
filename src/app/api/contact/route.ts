import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, subject, message } = body;

    // ✅ Validate input early
    if (!name || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Validate env variables safely (NO "!" nonsense)
    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

    if (!apiKey || !receiverEmail) {
      console.error("Missing environment variables:", {
        RESEND_API_KEY: !!apiKey,
        CONTACT_RECEIVER_EMAIL: !!receiverEmail,
      });

      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // ✅ Lazy load Resend (prevents build-time crash)
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    // ✅ Format date/time cleanly
    const now = new Date();

    const date = now.toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const time = now.toLocaleTimeString("en-NG", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const emailContent = `
New CDA Message

Name: ${name}
Subject: ${subject}
Date: ${date}
Time: ${time}

Message:
${message}
`;

    // IMPORTANT: Use verified domain in production
    const result = await resend.emails.send({
      from: "CDA Portal <onboarding@resend.dev>", // 🔁 CHANGE THIS
      to: receiverEmail,
      subject: `CDA Message - ${subject}`,
      text: emailContent,
    });

    console.log("EMAIL SENT:", result?.data?.id);

    return NextResponse.json({
      success: true,
      id: result?.data?.id,
    });

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      },
      { status: 500 }
    );
  }
}