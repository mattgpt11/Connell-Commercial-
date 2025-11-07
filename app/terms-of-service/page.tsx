import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />

      {/* Header Section */}
      <div className="relative h-64 overflow-hidden pt-20">
        <Image src="/images/steel-construction.jpeg" alt="Terms of Service" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-sm md:text-lg">Professional construction services terms and conditions</p>
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
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Acceptance of Terms</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    By engaging Connell Commercial for construction services, you agree to be bound by these Terms of
                    Service. These terms apply to all projects, consultations, and services provided by Connell
                    Commercial.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. Services Provided</h2>
                <div className="text-slate-300 space-y-4">
                  <p>Connell Commercial provides general contracting services including:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Ground-up construction</li>
                    <li>Interior finish-outs</li>
                    <li>Remodels and renovations</li>
                    <li>Beverage station and equipment services</li>
                    <li>Governmental and commercial projects</li>
                    <li>Project management and compliance</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Project Agreements</h2>
                <div className="text-slate-300 space-y-4">
                  <p>All construction projects require a separate written contract that will include:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Detailed scope of work</li>
                    <li>Project timeline and milestones</li>
                    <li>Payment terms and schedule</li>
                    <li>Materials and labor specifications</li>
                    <li>Change order procedures</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Payment Terms</h2>
                <div className="text-slate-300 space-y-4">
                  <p>Payment terms will be specified in individual project contracts. Generally:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Payments are due according to the agreed schedule</li>
                    <li>Late payments may incur additional charges</li>
                    <li>Final payment is due upon project completion and acceptance</li>
                    <li>Lien rights are reserved as allowed by Texas law</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Warranties and Guarantees</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Connell Commercial provides warranties on workmanship as specified in individual contracts. We stand
                    behind our work and will address any issues that arise from our construction activities within the
                    warranty period.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Limitation of Liability</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Our liability is limited to the contract amount for the specific project. We maintain comprehensive
                    insurance coverage including general liability and workers' compensation as required by Texas law.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">7. Governing Law</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    These terms are governed by the laws of the State of Texas. Any disputes will be resolved in the
                    appropriate courts of Texas.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">8. Contact Information</h2>
                <div className="text-slate-300 space-y-4">
                  <p>For questions about these Terms of Service:</p>
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
