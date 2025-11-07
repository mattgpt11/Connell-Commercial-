import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />

      {/* Header Section */}
      <div className="relative h-64 overflow-hidden pt-20">
        <Image src="/images/construction-team.jpeg" alt="Privacy Policy" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm md:text-lg">Your privacy and data protection are important to us</p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white p-8 rounded-lg">
            <p className="text-slate-300 mb-8">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Information We Collect</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Request a quote or consultation</li>
                    <li>Contact us via phone, email, or contact forms</li>
                    <li>Subscribe to our newsletter or updates</li>
                    <li>Interact with our website</li>
                  </ul>
                  <p>
                    This may include your name, email address, phone number, project details, and business information.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. How We Use Your Information</h2>
                <div className="text-slate-300 space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Provide construction services and project estimates</li>
                    <li>Communicate with you about your projects</li>
                    <li>Send you updates about our services</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Information Sharing</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>With trusted subcontractors and suppliers necessary for your project</li>
                    <li>When required by law or legal process</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Data Security</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                    is 100% secure.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Your Rights</h2>
                <div className="text-slate-300 space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request information about how we use your data</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Contact Us</h2>
                <div className="text-slate-300 space-y-4">
                  <p>If you have questions about this Privacy Policy, please contact us:</p>
                  <div className="bg-slate-600/50 p-4 rounded-lg">
                    <p>
                      <strong>Connell Commercial</strong>
                    </p>
                    <p>Email: info@connellcommercial.com</p>
                    <p>Phone: (210) 555-0123</p>
                    <p>Address: San Antonio, Texas</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
