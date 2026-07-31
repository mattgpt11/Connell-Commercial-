'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_EMAIL = 'Connell Commercial Website <forms@truepricewebsites.com>'
const RECIPIENT_EMAIL = 'info@connellcommercial.com'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  service?: string
  projectType?: string
  budget?: string
  timeline?: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const { firstName, lastName, email, phone, service, projectType, budget, timeline, message } = data

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return {
        success: false,
        error: 'Missing required fields',
      }
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
      return {
        success: false,
        error: 'Failed to send email',
      }
    }

    return {
      success: true,
      id: result.data?.id,
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      error: 'Internal server error',
    }
  }
}
