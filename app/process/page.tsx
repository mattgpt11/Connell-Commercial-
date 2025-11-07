import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const processSteps = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "Strategic foundation setting with military precision",
    image: "/images/project-management.jpeg",
    details: [
      "Comprehensive site analysis and feasibility assessment",
      "Collaborative design development with your vision in mind",
      "Detailed budget planning with transparent cost breakdowns",
      "Regulatory compliance and permitting coordination",
      "Timeline development with realistic milestones",
    ],
  },
  {
    step: 2,
    title: "Team Mobilization",
    description: "Assembling your dedicated construction battalion",
    image: "/images/steel-framing.webp",
    details: [
      "Handpicked project team assignment based on expertise",
      "Vetted subcontractor network activation and coordination",
      "Strategic material procurement and supply chain management",
      "Comprehensive safety protocols and quality standards implementation",
      "Industry leading communication systems to provide real-time updates",
    ],
  },
  {
    step: 3,
    title: "Construction Excellence",
    description: "Where vision becomes reality through expert execution",
    image: "/images/electrician-work.jpeg",
    details: [
      "Systematic site preparation and foundation excellence",
      "Precision structural construction with quality checkpoints",
      "Advanced systems integration and installation",
      "Daily progress monitoring with transparent reporting",
      "Proactive safety management and risk mitigation",
    ],
  },
  {
    step: 4,
    title: "Delivery & Partnership",
    description: "Seamless handover and ongoing relationship",
    image: "/images/cc-gc-header.png",
    details: [
      "Meticulous final inspections and quality verification",
      "Comprehensive client walkthrough and approval process",
      "Complete documentation package and warranty coverage",
      "Ongoing support and maintenance guidance",
      "Long-term partnership for future construction needs",
    ],
  },
]

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />

      {/* Header Image Section */}
      <div className="relative h-96 overflow-hidden pt-20">
        <Image src="/images/water-infrastructure.jpeg" alt="Construction Process" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Process</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Military precision meets construction excellence in every phase
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Process Steps */}
          <div className="max-w-5xl mx-auto space-y-12">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-slate-700/50 backdrop-blur-sm border-slate-600 text-white overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="mb-6">
                      <div className="text-yellow-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <CardTitle className="text-3xl text-white mb-3">{step.title}</CardTitle>
                      <CardDescription className="text-slate-300 text-lg leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </div>

                    <CardContent className="p-0">
                      <div className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-slate-200">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Why Our Process Works */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white p-12 rounded-lg mt-20 mb-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">The Connell Advantage</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-600/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Military Precision</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Our veteran leadership brings unmatched discipline, strategic thinking, and attention to detail that
                    ensures systematic execution and superior results.
                  </p>
                </div>
                <div className="bg-slate-600/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Proven Excellence</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Over 500 successful projects across Texas demonstrate our refined process delivers consistent,
                    exceptional results that exceed expectations.
                  </p>
                </div>
                <div className="bg-slate-600/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Transparent Partnership</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Real-time communication, detailed progress reports, and open-book policies ensure you're informed
                    and confident throughout the entire process.
                  </p>
                </div>
                <div className="bg-slate-600/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Quality Assurance</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Multiple quality checkpoints, rigorous inspections, and our commitment to excellence ensure every
                    detail meets our exacting standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-Page Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">See Our Services</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Discover the full range of construction services we provide, from ground-up builds to specialized
                installations.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Services
              </Link>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Our Portfolio</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                See how our proven process delivers exceptional results across diverse construction projects in Texas.
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-12 rounded-lg max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Let's discuss how our proven process and veteran leadership can transform your construction vision into
                reality. Your project deserves the Connell Commercial standard of excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:210-555-0123"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Call (210) 555-0123
                </a>
                <Link
                  href="/contact"
                  className="border border-slate-400 text-white hover:bg-slate-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
