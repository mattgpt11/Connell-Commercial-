import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, Printer, Shield, Zap, Award } from "lucide-react"
import ContactForm from "./contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />

      {/* Header Image Section */}
      <div className="relative h-96 overflow-hidden pt-20">
        <Image
          src="/images/construction-equipment.jpeg"
          alt="Contact Connell Commercial"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Ready to start your project? Get in touch with our veteran-led team today.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Ready to discuss your construction project? Our veteran-led team is here to provide expert guidance and
                superior craftsmanship. Contact us today for a free consultation and discover the Connell Commercial
                difference.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <a href="tel:210-632-7430" className="text-slate-300 hover:text-yellow-400 transition-colors">
                      (210) 632-7430
                    </a>
                    <p className="text-slate-400 text-sm mt-1">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500 rounded-lg">
                    <Printer className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Fax</h3>
                    <p className="text-slate-300">(210) 855-4466</p>
                    <p className="text-slate-400 text-sm mt-1">24/7 Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <a
                      href="mailto:info@connellcommercial.com"
                      className="text-slate-300 hover:text-yellow-400 transition-colors"
                    >
                      info@connellcommercial.com
                    </a>
                    <p className="text-slate-400 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Service Area</h3>
                    <p className="text-slate-300">San Antonio, Texas</p>
                    <p className="text-slate-400 text-sm mt-1">Serving all of Texas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                    <div className="text-slate-300 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-slate-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Emergency Services</h3>
                <p className="text-slate-300 mb-4">
                  Need immediate assistance? We provide 24/7 emergency services for critical construction issues.
                </p>
                <a
                  href="tel:210-573-7157"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Emergency Line
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-12 rounded-lg mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Connell Commercial?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Veteran Owned</h3>
                <p className="text-slate-300 leading-relaxed">
                  Military discipline and precision in every project, ensuring superior quality and reliability.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Licensed & Insured</h3>
                <p className="text-slate-300 leading-relaxed">
                  Fully licensed general contractor with comprehensive insurance for your peace of mind.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Excellence</h3>
                <p className="text-slate-300 leading-relaxed">
                  Over 25 years of experience with diverse projects from convenience stores to government facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
