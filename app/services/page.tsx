import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Hammer, RefreshCw, Coffee, Building, ClipboardCheck } from "lucide-react"

const services = [
  {
    id: "ground-up-construction",
    icon: Building2,
    title: "Ground-Up Construction",
    description:
      "Complete builds from site prep to final turnover for convenience stores, gas stations, restaurants, retail, and commercial facilities.",
    image: "/images/steel-framing.webp",
    highlights: [
      "Site grading & foundations",
      "Framing & utilities",
      "Full vertical construction",
      "Fully operational delivery",
    ],
  },
  {
    id: "interior-finish-outs",
    icon: Hammer,
    title: "Interior Finish-Outs",
    description:
      "Transform raw shells into branded, functional environments with complete interior construction services.",
    image: "/images/hvac-ductwork.jpeg",
    highlights: ["Drywall & ceilings", "Flooring & millwork", "MEP integration", "Custom branded spaces"],
  },
  {
    id: "remodels-renovations",
    icon: RefreshCw,
    title: "Remodels & Renovations",
    description:
      "Modernizing or reconfiguring existing facilities with full MEP upgrades and phased execution to minimize downtime.",
    image: "/images/renovation-work.jpeg",
    highlights: [
      "Rebranding & layout updates",
      "MEP system upgrades",
      "Design modernization",
      "Minimal operational disruption",
    ],
  },
  {
    id: "beverage-station-equipment",
    icon: Coffee,
    title: "Beverage Station & Equipment Services",
    description:
      "Installation and changeouts for beverage areas in gas stations, retail, and restaurants with full utility integration.",
    image: "/images/beverage-station.webp",
    highlights: [
      "Soda fountain & coffee systems",
      "Refrigeration integration",
      "Plumbing & electrical tie-ins",
      "Multi-site rollouts",
    ],
  },
  {
    id: "governmental-commercial",
    icon: Building,
    title: "Governmental & Commercial Projects",
    description:
      "Experience with municipal, educational, and public-sector facilities with strict compliance and regulatory standards.",
    image: "/images/electrician-work.jpeg",
    highlights: ["Schools & libraries", "Transportation hubs", "Regulatory compliance", "High-quality finishes"],
  },
  {
    id: "project-management",
    icon: ClipboardCheck,
    title: "Project Management & Compliance",
    description:
      "End-to-end oversight of construction activities with cost estimating, scheduling, and comprehensive quality control.",
    image: "/images/project-management.jpeg",
    highlights: [
      "Cost estimating & scheduling",
      "Permit acquisition",
      "Safety management",
      "Clear client communication",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />

      {/* Header Image Section */}
      <div className="relative h-96 overflow-hidden pt-20">
        <Image
          src="/images/aerial-construction.jpeg"
          alt="Connell Commercial General Contractor Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">General Contractor Services</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Licensed General Contractor providing comprehensive construction services across Texas
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Intro Section */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Construction Solutions</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our veteran-led team brings military precision to every project. From ground-up construction to
              specialized beverage equipment installations, we deliver quality craftsmanship with the reliability and
              attention to detail that only comes from years of experience and unwavering commitment to excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                id={service.id}
                className="bg-slate-700/50 backdrop-blur-sm border-slate-600 text-white group hover:bg-slate-600/50 transition-all duration-300 scroll-mt-24"
              >
                <div className="relative h-48 rounded-t-lg overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-500 rounded-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-300 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Our Services */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-12 rounded-lg mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose Connell Commercial</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎖️</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Veteran Precision</h4>
                <p className="text-slate-300 leading-relaxed">
                  Military-trained attention to detail ensures every project meets the highest standards of quality and
                  safety.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Licensed & Insured</h4>
                <p className="text-slate-300 leading-relaxed">
                  Fully licensed general contractor with comprehensive insurance coverage for all construction services.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Proven Excellence</h4>
                <p className="text-slate-300 leading-relaxed">
                  From convenience stores to government facilities, we have the expertise for diverse construction
                  projects.
                </p>
              </div>
            </div>
          </div>

          {/* Project Specialties */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Our Project Specialties</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-white mb-4">Commercial & Retail</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Convenience stores and gas stations</li>
                  <li>• Restaurants and food service facilities</li>
                  <li>• Retail stores and shopping centers</li>
                  <li>• Professional office buildings</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-white mb-4">Specialized Services</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Government and municipal projects</li>
                  <li>• Educational facilities and libraries</li>
                  <li>• Beverage equipment installations</li>
                  <li>• Multi-site rollout coordination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cross-Page Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">See Our Work</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Explore real examples of our services in action through our comprehensive project portfolio.
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Portfolio
              </Link>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Our Process</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Learn how we deliver these services with military precision and systematic execution.
              </p>
              <Link
                href="/process"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                See Our Process
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-12 rounded-lg max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Construction Project?</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Contact our veteran-led team today to discuss your construction needs. From ground-up builds to
                specialized equipment installations, we deliver quality craftsmanship with Texas pride and military
                precision.
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
                  Get Free Quote
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
