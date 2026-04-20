import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, projectType, budget, timeline, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create Outlook SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

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

    // Send email to business
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@connellcommercial.com',
      subject: `New Contact Form: ${firstName} ${lastName}`,
      html: businessEmailContent,
      replyTo: email,
    })

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'We Received Your Message - Connell Commercial',
      html: clientEmailContent,
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
