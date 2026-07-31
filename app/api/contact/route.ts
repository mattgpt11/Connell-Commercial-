import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_EMAIL = 'Connell Commercial Website <forms@truepricewebsites.com>'
const RECIPIENT_EMAIL = 'info@connellcommercial.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { firstName, lastName, email, phone, service, projectType, budget, timeline, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format the email body
    const emailBody = `
New Contact Form Submission from Connell Commercial Website

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Needed: ${service || 'Not specified'}
Project Type: ${projectType || 'Not specified'}
Budget: ${budget || 'Not specified'}
Timeline: ${timeline || 'Not specified'}

Project Details:
${message}

---
This message was sent from the Connell Commercial website contact form.
Reply to: ${email}
    `.trim()

    // Send email using Resend with the verified domain
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      text: emailBody,
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      message: 'Email sent successfully',
      id: result.data?.id,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
