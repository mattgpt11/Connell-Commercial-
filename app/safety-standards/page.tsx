import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Shield, HardHat, AlertTriangle, CheckCircle } from "lucide-react"

export default function SafetyStandardsPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />

      {/* Header Section */}
      <div className="relative h-64 overflow-hidden pt-20">
        <Image src="/images/project-management.jpeg" alt="Safety Standards" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Safety Standards</h1>
            <p className="text-sm md:text-lg">Commitment to safety excellence on every project</p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Safety Commitment */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white p-8 rounded-lg mb-12">
            <div className="text-center mb-8">
              <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Safety Commitment</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                At Connell Commercial, safety is not just a priority—it's our core value. Every team member goes home
                safely, every day.
              </p>
            </div>
          </div>

          {/* Safety Standards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <HardHat className="h-8 w-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-yellow-400">OSHA Compliance</h3>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>We maintain strict adherence to all OSHA regulations and standards:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Regular safety training and certification updates</li>
                  <li>Comprehensive hazard identification and mitigation</li>
                  <li>Proper use of personal protective equipment (PPE)</li>
                  <li>Fall protection and scaffolding safety protocols</li>
                  <li>Electrical safety and lockout/tagout procedures</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="h-8 w-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-yellow-400">Risk Management</h3>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>Proactive risk assessment and management on every project:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Pre-project safety planning and site assessment</li>
                  <li>Daily safety briefings and toolbox talks</li>
                  <li>Regular safety inspections and audits</li>
                  <li>Incident reporting and investigation procedures</li>
                  <li>Continuous improvement of safety protocols</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safety Certifications */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Safety Certifications & Training</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">OSHA 30-Hour</h4>
                <p className="text-slate-300">All supervisors maintain current OSHA 30-Hour certification</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">First Aid/CPR</h4>
                <p className="text-slate-300">Team members certified in first aid and CPR response</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Specialized Training</h4>
                <p className="text-slate-300">Trade-specific safety training for all specialized work</p>
              </div>
            </div>
          </div>

          {/* Safety Policies */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8">Key Safety Policies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Personal Protective Equipment</h4>
                <ul className="text-slate-300 space-y-2">
                  <li>• Hard hats required in all construction areas</li>
                  <li>• Safety glasses and hearing protection</li>
                  <li>• High-visibility clothing on active sites</li>
                  <li>• Steel-toed boots for all personnel</li>
                  <li>• Specialized PPE for specific tasks</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Site Safety Protocols</h4>
                <ul className="text-slate-300 space-y-2">
                  <li>• Daily safety meetings and hazard assessments</li>
                  <li>• Proper signage and barrier installation</li>
                  <li>• Equipment inspection and maintenance</li>
                  <li>• Emergency response procedures</li>
                  <li>• Visitor safety orientation requirements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Emergency Procedures */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8">Emergency Procedures</h2>
            <div className="text-slate-300 space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">In Case of Emergency:</h4>
                <div className="bg-red-900/30 border border-red-600 p-4 rounded-lg">
                  <p className="text-lg font-semibold text-red-300 mb-2">EMERGENCY CONTACT: 911</p>
                  <p className="text-red-200">For immediate medical emergencies or safety incidents</p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Project Safety Contact:</h4>
                <div className="bg-slate-600/50 p-4 rounded-lg">
                  <p>
                    <strong>Connell Commercial Safety Hotline</strong>
                  </p>
                  <p>Phone: (210) 555-0123</p>
                  <p>Email: safety@connellcommercial.com</p>
                  <p className="text-sm text-slate-400 mt-2">
                    Available 24/7 for safety concerns or incident reporting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
