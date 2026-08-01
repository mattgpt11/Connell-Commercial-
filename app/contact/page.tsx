'use client'

import { Send } from "lucide-react"
import { useState, useRef } from "react"
import { submitContactForm } from './actions'

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (formElement: HTMLFormElement) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData(formElement)
      const data = {
        firstName: String(formData.get('firstName') || ''),
        lastName: String(formData.get('lastName') || ''),
        email: String(formData.get('email') || ''),
        phone: formData.get('phone') ? String(formData.get('phone')) : undefined,
        service: formData.get('service') ? String(formData.get('service')) : undefined,
        projectType: formData.get('projectType') ? String(formData.get('projectType')) : undefined,
        budget: formData.get('budget') ? String(formData.get('budget')) : undefined,
        timeline: formData.get('timeline') ? String(formData.get('timeline')) : undefined,
        message: String(formData.get('message') || ''),
      }

      const result = await submitContactForm(data)

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.')
        formElement.reset()
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Failed to send message. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('[v0] Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage('An error occurred. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-800 p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
      
      <div className="max-w-2xl mx-auto">
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-600/20 border border-green-600 rounded-lg text-green-100">
            <p>{submitMessage}</p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-600/20 border border-red-600 rounded-lg text-red-100">
            <p>{submitMessage}</p>
          </div>
        )}
        
        <form ref={formRef} className="space-y-6 bg-slate-700 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="210-632-7430"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option value="ground-up-construction">Ground-Up Construction</option>
              <option value="interior-finish-outs">Interior Finish-Outs</option>
              <option value="remodels-renovations">Remodels & Renovations</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Please describe your project..."
            ></textarea>
          </div>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => {
              if (formRef.current) {
                handleSubmit(formRef.current)
              }
            }}
            className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-700 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}
