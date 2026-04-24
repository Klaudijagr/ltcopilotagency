import { Resend } from "resend";
import { NextResponse } from "next/server";
import * as z from "zod";
import type { ReactElement } from "react";
import InternalNotificationEmail from "@/components/emails/internal-notification-email";
import UserConfirmationEmail from "@/components/emails/user-confirmation-email";

const MAX_BODY_BYTES = 20_000;

const contactFormSchema = z.object({
  firstName: z.string().trim().min(2).max(80),
  lastName: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(255),
  serviceInterest: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10).max(4_000),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);

  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request body too large" }, { status: 413 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Contact form is not configured" },
      { status: 500 },
    );
  }

  try {
    const parsed = contactFormSchema.safeParse(await request.json());

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the required fields and try again." },
        { status: 400 },
      );
    }

    const {
      firstName,
      lastName,
      email,
      serviceInterest,
      message,
      consent,
    } = parsed.data;
    const resend = new Resend(process.env.RESEND_API_KEY);

    const internalNotification = await resend.emails.send({
      from: "Contact Form <noreply@marketing.wepeacock.com>",
      to: ["klaudija@copilotagency.com", "cheez2012@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      react: InternalNotificationEmail({
        firstName,
        lastName,
        email,
        serviceInterest,
        message,
        consent,
      }) as ReactElement,
    });

    if (internalNotification.error) {
      console.error("Error sending internal email:", internalNotification.error);
      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 502 },
      );
    }

    const userConfirmation = await resend.emails.send({
      from: "Klaudija @ CoPilot Agency <noreply@marketing.wepeacock.com>",
      to: [email],
      subject: "Message Received - CoPilot Agency",
      react: UserConfirmationEmail({ firstName }) as ReactElement,
    });

    if (userConfirmation.error) {
      console.error("Error sending user confirmation email:", userConfirmation.error);
    }

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
