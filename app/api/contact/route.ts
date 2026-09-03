import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import InternalNotificationEmail from '@/components/emails/internal-notification-email';
import UserConfirmationEmail from '@/components/emails/user-confirmation-email';
import React from 'react';

interface RequestBody {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  industry?: string;
  message: string;
  consent: boolean;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const body = await request.json() as RequestBody;
    const {
      firstName,
      lastName,
      email,
      company,
      industry,
      message,
      consent
    } = body;

    if (!firstName || !lastName || !email || !message || consent !== true) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const internalNotification = await resend.emails.send({
      from: 'Contact Form <noreply@marketing.wepeacock.com>',
      to: ['klaudija@copilotagency.com', 'cheez2012@gmail.com'],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      react: InternalNotificationEmail({
        firstName,
        lastName,
        email,
        company,
        industry,
        message,
        consent,
      }) as React.ReactElement,
    });

    if (internalNotification.error) {
      console.error('Error sending internal email:', internalNotification.error);
    }

    const userConfirmation = await resend.emails.send({
      from: 'Klaudija @ CoPilot Agency <noreply@marketing.wepeacock.com>',
      to: [email],
      subject: 'Message Received - CoPilot Agency',
      react: UserConfirmationEmail({ firstName }) as React.ReactElement,
    });

    if (userConfirmation.error) {
      console.error('Error sending user confirmation email:', userConfirmation.error);
    }

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
