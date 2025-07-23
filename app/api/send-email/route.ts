// /app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import sanitizeHtml from 'sanitize-html';

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email format' }, { status: 400 });
    }

    const safeName = sanitizeHtml(name);
    const safeEmail = sanitizeHtml(email);
    const safePhone = sanitizeHtml(phone || 'N/A');
    const safeMessage = sanitizeHtml(message);

    const sender = 'Gridnest Workforce <business@updates.gridnestworkforce.in>';

    // Send both emails concurrently
    const [internalEmailResult, thankYouEmailResult] = await Promise.all([
      resend.emails.send({
  from: sender,
  to: "gridnestworkforce@gmail.com",
  subject: '🚨 New Client Inquiry Received',
  html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #333333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Client Details</h2>
        <p style="font-size: 16px; color: #555;"><strong>Name:</strong> ${safeName}</p>
        <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${safeEmail}</p>
        <p style="font-size: 16px; color: #555;"><strong>Phone:</strong> ${safePhone}</p>
        <p style="font-size: 16px; color: #555;"><strong>Message:</strong><br/><span style="white-space: pre-line;">${safeMessage}</span></p>
      </div>
    </div>
  `,
})
,
      resend.emails.send({
        from: sender,
        to: safeEmail,
        subject: `Thank you for contacting Gridnest, ${safeName}!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; border-radius: 10px; overflow: hidden;">
  <div style="background-color: #004aad; padding: 20px; text-align: center;">
    <img src="https://www.gridnestworkforce.in/_next/static/media/gnw_logo.8129debc.png" alt="GridNest Logo" style="max-width: 120px;" />
  </div>

  <div style="padding: 30px; background-color: #ffffff; color: #333333;">
    <h2 style="color: #004aad; margin-top: 0;">Hi ${body.name},</h2>

    <p style="font-size: 16px; line-height: 1.6;">
      Thank you for reaching out to <strong>GridNest Workforce</strong>. We've received your message and our team will get back to you shortly.
    </p>

    <p style="font-size: 16px; line-height: 1.6; color: #444;">
      <em>"${body.message}"</em>
    </p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="https://gridnestworkforce.in" target="_blank" style="display: inline-block; background-color: #004aad; color: #fff; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: bold;">
        Visit Our Website
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 40px 0;" />

    <p style="font-size: 14px; color: #666;">
      Want to speak with us directly? You can reach us by phone.
    </p>
    <div style="text-align: center; margin-top: 20px;">
      <a href="tel:+919980026516" style="display: inline-block; background-color: #e8f0fe; color: #004aad; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
        📞 Call Us Now
      </a>
    </div>

    <p style="margin-top: 40px; font-size: 14px; color: #999;">
      — Team GridNest Workforce<br />
      <a href="mailto:business@gridnestworkforce.in" style="color: #004aad;">business@gridnestworkforce.in</a><br />
      <a href="https://gridnestworkforce.in" style="color: #004aad;">gridnestworkforce.in</a>
    </p>
  </div>
</div>

        `,
      }),
    ]);

    // Check both results
    if (internalEmailResult.error || thankYouEmailResult.error) {
      console.error('Email sending errors:', { internalEmailResult, thankYouEmailResult });
      return NextResponse.json(
        { success: false, error: internalEmailResult,thankYouEmailResult },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      internalEmail: internalEmailResult,
      thankYouEmail: thankYouEmailResult,
    });
  } catch (error) {
    console.error('❌ API error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong on the server.' },
      { status: 500 }
    );
  }
}
