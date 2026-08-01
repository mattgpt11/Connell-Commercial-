'use server'

import { Resend } from 'resend'

const FROM_EMAIL = 'Connell Commercial Website <forms@truepricewebsites.com>'
const TO_EMAIL = 'info@connellcommercial.com'

export async function submitContactForm(formData: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  service?: string
  projectType?: string
  budget?: string
  timeline?: string
  message: string
}) {
  try {
    // Initialize Resend with API key from environment
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[v0] RESEND_API_KEY is missing from environment')
      console.error('[v0] Available env keys:', Object.keys(process.env).filter(k => k.includes('RESEND') || k.includes('API')))
      return {
        success: false,
        error: 'Email service configuration error. Please contact support.',
      }
    }

    const resend = new Resend(apiKey)

    // Format the email content
    const emailContent = `
New Contact Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Service Needed: ${formData.service || 'Not specified'}
Project Type: ${formData.projectType || 'Not specified'}
Estimated Budget: ${formData.budget || 'Not specified'}
Desired Timeline: ${formData.timeline || 'Not specified'}

Project Details:
${formData.message}

---
This message was sent from the contact form on connellcommercial.com
    `.trim()

    // Send email via Resend
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: formData.email,
      subject: `New Project Inquiry from ${formData.firstName} ${formData.lastName}`,
      text: emailContent,
    })

    if (response.error) {
      console.error('Resend error:', response.error)
      return {
        success: false,
        error: 'Failed to send message. Please try again or contact us directly.',
      }
    }

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.',
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      error: 'An error occurred. Please try again or contact us directly.',
    }
  }
}
