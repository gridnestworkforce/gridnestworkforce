import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import sanitizeHtml from 'sanitize-html';
import formidable from 'formidable';
import fs from 'fs';
import { Readable } from 'stream';

export const config = {
  api: { bodyParser: false },
};

const resend = new Resend(process.env.RESEND_KEY);


function getFieldValue(field: string | string[] | undefined): string {
  if (Array.isArray(field)) return field[0] || '';
  return field || '';
}




// 🔑 Wrap Fetch Request → Node-like object for formidable
function requestToFormidableCompatible(req: Request) {
  const nodeStream = Readable.fromWeb(req.body as any);

  return Object.assign(nodeStream, {
    headers: Object.fromEntries(req.headers), // convert headers Map → object
    method: req.method,
    url: req.url,
  });
}

async function parseForm(req: Request) {
  const form = formidable({ multiples: false });
  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
    form.parse(requestToFormidableCompatible(req) as any, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

function getFile(file: formidable.File | formidable.File[] | undefined): formidable.File | null {
  if (!file) return null;
  if (Array.isArray(file)) return file[0] || null;
  return file;
}


export async function POST(req: Request) {
  try {
    const { fields, files } = await parseForm(req);

    const name = sanitizeHtml(getFieldValue(fields.name));
const email = sanitizeHtml(getFieldValue(fields.email));
const phone = sanitizeHtml(getFieldValue(fields.phone) || 'N/A');
const coverLetter = sanitizeHtml(getFieldValue(fields.coverLetter));
   const resumeFile = getFile(files.resume);

if (!resumeFile) {
  return NextResponse.json({ success: false, error: 'Resume file is required' }, { status: 400 });
}


    if (!name || !email || !resumeFile) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const resumeBuffer = fs.readFileSync(resumeFile.filepath);
    const sender = 'Gridnest Workforce <business@updates.gridnestworkforce.in>';

    // 📧 Email to HR
    await resend.emails.send({
  from: sender,
  to: 'gridnestworkforce@gmail.com',
  subject: `📄 New Job Application from ${name}`,
  html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; border-radius: 10px; overflow: hidden;">
  <div style="background-color: #004aad; padding: 20px; text-align: center;">
    <img src="https://www.gridnestworkforce.in/_next/static/media/gnw_logo.8129debc.png" alt="GridNest Logo" style="max-width: 120px;" />
  </div>

  <div style="padding: 30px; background-color: #ffffff; color: #333333;">
    <h2 style="color: #004aad; margin-top: 0;">New Job Application</h2>

    <p style="font-size: 16px; line-height: 1.6;"><strong>Name:</strong> ${name}</p>
    <p style="font-size: 16px; line-height: 1.6;"><strong>Email:</strong> ${email}</p>
    <p style="font-size: 16px; line-height: 1.6;"><strong>Phone:</strong> ${phone}</p>
    <p style="font-size: 16px; line-height: 1.6;"><strong>Cover Letter:</strong><br/>${coverLetter}</p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="https://gridnestworkforce.in" target="_blank" style="display: inline-block; background-color: #004aad; color: #fff; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: bold;">
        Visit Our Website
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 40px 0;" />

    <p style="margin-top: 40px; font-size: 14px; color: #999;">
      — Team GridNest Workforce<br />
      <a href="mailto:business@gridnestworkforce.in" style="color: #004aad;">business@gridnestworkforce.in</a><br />
      <a href="https://gridnestworkforce.in" style="color: #004aad;">gridnestworkforce.in</a>
    </p>
  </div>
</div>
  `,
  attachments: [
    {
      filename: resumeFile.originalFilename || 'resume.pdf',
      content: resumeBuffer.toString('base64'),
    },
  ],
});


    // 📧 Confirmation email to applicant
    await resend.emails.send({
      from: sender,
      to: email,
      subject: '✅ Application Received – Gridnest Workforce',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; border-radius: 10px; overflow: hidden;">
  <div style="background-color: #004aad; padding: 20px; text-align: center;">
    <img src="https://www.gridnestworkforce.in/_next/static/media/gnw_logo.8129debc.png" alt="GridNest Logo" style="max-width: 120px;" />
  </div>

  <div style="padding: 30px; background-color: #ffffff; color: #333333;">
    <h2 style="color: #004aad; margin-top: 0;">Hi ${name},</h2>

    <p style="font-size: 16px; line-height: 1.6;">
      Thank you for applying to <strong>GridNest Workforce</strong>. We’ve received your application and resume.
    </p>

    <p style="font-size: 16px; line-height: 1.6;">
      Our HR team will review your profile and get back to you soon.
    </p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="https://gridnestworkforce.in" target="_blank" style="display: inline-block; background-color: #004aad; color: #fff; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: bold;">
        Visit Our Website
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 40px 0;" />

    <p style="margin-top: 40px; font-size: 14px; color: #999;">
      — Team GridNest Workforce<br />
      <a href="mailto:hiring@gridnestworkforce.in" style="color: #004aad;">hiring@gridnestworkforce.in</a><br />
      <a href="https://gridnestworkforce.in" style="color: #004aad;">gridnestworkforce.in</a>
    </p>
  </div>
</div>

      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('❌ Application API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
