import { NextRequest, NextResponse } from 'next/server'

const FROM_EMAIL = 'Connell Commercial <forms@truepricewebsites.com>'
const TO_EMAIL = 'info@connellcommercial.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, projectType, budget, timeline, message } = body

    console.log('[v0] Form submission received:', { firstName, lastName, email })

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      console.error('[v0] Missing required fields:', { firstName, lastName, email, message })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email to business
    const businessEmailContent = `
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
    `

    // Email to client
    const clientEmailContent = `
      <h2>Thank You for Contacting Connell Commercial</h2>
      <p>Dear ${firstName},</p>
      <p>We have received your project inquiry and appreciate your interest in Connell Commercial. Our team will review your submission and get back to you within 24 hours with more information.</p>
      <p>If you have any urgent questions, please call us at (210) 632-7430.</p>
      <p>Best regards,<br/>The Connell Commercial Team</p>
    `

    // Send email to business via Resend API
    console.log('[v0] Sending email to business:', TO_EMAIL)
    const businessEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `New Contact Form: ${firstName} ${lastName}`,
        html: businessEmailContent,
      }),
    })

    const businessEmailData = await businessEmailRes.json()
    console.log('[v0] Business email response:', businessEmailData)

    if (!businessEmailRes.ok) {
      console.error('[v0] Error sending business email:', businessEmailData)
      return NextResponse.json(
        { error: `Failed to send email: ${businessEmailData.message || 'Unknown error'}` },
        { status: 500 }
      )
    }

    // Send confirmation email to client via Resend API
    console.log('[v0] Sending confirmation email to:', email)
    const clientEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: email,
        subject: 'We Received Your Message - Connell Commercial',
        html: clientEmailContent,
      }),
    })

    const clientEmailData = await clientEmailRes.json()
    console.log('[v0] Client email response:', clientEmailData)

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Email sending error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    )
  }
}
