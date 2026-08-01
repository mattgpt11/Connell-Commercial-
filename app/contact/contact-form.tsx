'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { submitContactForm } from './actions'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        firstName: String(formData.get('firstName')),
        lastName: String(formData.get('lastName')),
        email: String(formData.get('email')),
        phone: formData.get('phone') ? String(formData.get('phone')) : undefined,
        service: formData.get('service') ? String(formData.get('service')) : undefined,
        projectType: formData.get('projectType') ? String(formData.get('projectType')) : undefined,
        budget: formData.get('budget') ? String(formData.get('budget')) : undefined,
        timeline: formData.get('timeline') ? String(formData.get('timeline')) : undefined,
        message: String(formData.get('message')),
      }

      const result = await submitContactForm(data)

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage(result.message || 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.')
        e.currentTarget.reset()
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
          setSubmitMessage('')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Failed to send message. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage('An error occurred. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <Card className="bg-slate-700/50 backdrop-blur-sm border-slate-600">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Request a Quote</CardTitle>
          <CardDescription className="text-slate-300">
            Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your
            project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-green-100">{submitMessage}</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-100">{submitMessage}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
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
                <option value="beverage-station-equipment">Beverage Station & Equipment Services</option>
                <option value="governmental-commercial">Governmental & Commercial Projects</option>
                <option value="project-management">Project Management & Compliance</option>
                <option value="consultation">General Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">Select project type</option>
                <option value="convenience-store">Convenience Store</option>
                <option value="gas-station">Gas Station</option>
                <option value="restaurant">Restaurant</option>
                <option value="retail">Retail Store</option>
                <option value="office">Office Building</option>
                <option value="government">Government/Municipal</option>
                <option value="educational">Educational Facility</option>
                <option value="beverage-equipment">Beverage Equipment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">Select budget range</option>
                <option value="under-25k">Under $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="250k-500k">$250,000 - $500,000</option>
                <option value="over-500k">Over $500,000</option>
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                Desired Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-month">Within 1 month</option>
                <option value="3-months">Within 3 months</option>
                <option value="6-months">Within 6 months</option>
                <option value="1-year">Within 1 year</option>
                <option value="flexible">Flexible</option>
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
                placeholder="Please describe your project in detail, including location, scope of work, square footage, and any specific requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-700 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-slate-400 text-sm text-center">
              By submitting this form, you agree to be contacted by Connell Commercial regarding your project.
              We respect your privacy and will never share your information.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
