'use client'

import { useState } from 'react'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, Printer, Shield, Zap, Award } from "lucide-react"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      projectType: formData.get('projectType'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      message: formData.get('message'),
    }

    try {
      console.log('[v0] Submitting form data:', data)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      console.log('[v0] API response status:', response.status)
      const responseData = await response.json()
      console.log('[v0] API response data:', responseData)

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully. We will contact you within 24 hours.')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus('error')
        const errorMsg = responseData?.error || 'Failed to send your message. Please try again or call us directly.'
        setSubmitMessage(errorMsg)
        console.error('[v0] API error:', errorMsg)
      }
    } catch (error) {
      console.error('[v0] Client error:', error)
      setSubmitStatus('error')
      setSubmitMessage('An error occurred. Please try again or call us directly at (210) 632-7430.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />

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
        
        <form className="space-y-6 bg-slate-700 p-6 rounded-lg" onSubmit={handleSubmit}>
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
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                      <p className="text-green-400 font-semibold">{submitMessage}</p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                      <p className="text-red-400 font-semibold">{submitMessage}</p>
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

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>

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
            type="submit"
            disabled={isSubmitting}
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
