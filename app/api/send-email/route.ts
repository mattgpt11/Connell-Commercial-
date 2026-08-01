import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { firstName, lastName, email, phone, service, projectType, budget, timeline, message } = await request.json()

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const apiKey = process.env.RESEND_API_KEY
    
    // Send to business
    const res1 = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Connell Commercial <forms@truepricewebsites.com>',
        to: 'info@connellcommercial.com',
        replyTo: email,
        subject: `New Contact Form: ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service Needed:</strong> ${service || 'Not specified'}</p>
          <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Desired Timeline:</strong> ${timeline || 'Not specified'}</p>
          <h3>Project Details:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!res1.ok) {
      const err = await res1.json()
      return NextResponse.json({ error: err.message || 'Failed to send' }, { status: 500 })
    }

    // Send confirmation to user
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Connell Commercial <forms@truepricewebsites.com>',
        to: email,
        subject: 'We Received Your Message - Connell Commercial',
        html: `
          <h2>Thank You for Contacting Connell Commercial</h2>
          <p>Dear ${firstName},</p>
          <p>We have received your project inquiry and appreciate your interest in Connell Commercial. Our team will review your submission and get back to you within 24 hours with more information.</p>
          <p>If you have any urgent questions, please call us at (210) 632-7430.</p>
          <p>Best regards,<br/>The Connell Commercial Team</p>
        `,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
