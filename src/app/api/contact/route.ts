import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, subject, message } = await req.json();

    if (!name || !subject || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

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

    const result = await resend.emails.send({
      from: "CDA Portal <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: `CDA Message - ${subject}`,
      text: emailContent,
    });

    console.log("RESEND RESULT:", result);

    return NextResponse.json({
      success: true,
      id: result.data?.id,
    });

  } catch (error) {
    console.error("RESEND ERROR:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}