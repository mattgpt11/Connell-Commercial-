import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'Connell Commercial Website <forms@truepricewebsites.com>';
const TO_EMAIL = 'info@connellcommercial.com';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
<p><strong>Email:</strong> ${data.email}</p>
${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
${data.service ? `<p><strong>Service Needed:</strong> ${data.service}</p>` : ''}
${data.projectType ? `<p><strong>Project Type:</strong> ${data.projectType}</p>` : ''}
${data.budget ? `<p><strong>Estimated Budget:</strong> ${data.budget}</p>` : ''}
${data.timeline ? `<p><strong>Desired Timeline:</strong> ${data.timeline}</p>` : ''}
<p><strong>Project Details:</strong></p>
<p>${data.message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email using Resend
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
      html: emailContent,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
