import VideoHero from "@/components/video-hero"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Building2, Users, Cog, Phone, Eye } from "lucide-react"
import PortfolioSlideshow from "@/components/portfolio-slideshow"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <VideoHero />

      {/* About Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Veteran-Owned Excellence</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                At Connell Commercial, we are proud to be a Veteran-owned company dedicated to building the future while
                honoring the past. Rooted in integrity, discipline, and commitment to excellence, we carry on our family
                legacy by delivering high-quality, innovative construction solutions.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                With every project, we build more than just structures—we build trust, relationships, and a foundation
                for the future.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Learn Our Story
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/construction-team.jpeg" alt="Connell Commercial Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive construction solutions delivered with military precision and Texas pride
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Link href="/services#ground-up-construction" className="group">
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-8 rounded-lg text-center group-hover:bg-slate-600/50 transition-all">
                <Building2 className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Ground-Up Construction</h3>
                <p className="text-slate-300 mb-6">
                  Complete builds from site prep to final turnover for commercial facilities.
                </p>
              </div>
            </Link>

            <Link href="/services#interior-finish-outs" className="group">
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-8 rounded-lg text-center group-hover:bg-slate-600/50 transition-all">
                <Cog className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Interior Finish-Outs</h3>
                <p className="text-slate-300 mb-6">Transform raw shells into branded, functional environments.</p>
              </div>
            </Link>

            <Link href="/services#beverage-station-equipment" className="group">
              <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-8 rounded-lg text-center group-hover:bg-slate-600/50 transition-all">
                <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Beverage Equipment</h3>
                <p className="text-slate-300 mb-6">
                  Installation and changeouts for beverage areas with full utility integration.
                </p>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Work</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how we've transformed visions into reality across Texas with precision and excellence
            </p>
          </div>

          <PortfolioSlideshow />

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Eye className="h-5 w-5" />
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/images/project-management.jpeg" alt="Construction Process" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Proven Process</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Military precision meets construction excellence in every phase. From discovery and planning to final
                delivery, our systematic approach ensures superior results and transparent communication throughout your
                project.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <span className="text-slate-300">Discovery & Planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <span className="text-slate-300">Team Mobilization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <span className="text-slate-300">Construction Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <span className="text-slate-300">Delivery & Partnership</span>
                </div>
              </div>

              <Link
                href="/process"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                See Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-12 rounded-lg max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Contact our veteran-led team today for a free consultation. Let's discuss how we can bring your
              construction vision to life with integrity, precision, and Texas pride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:210-555-0123"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
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
      </section>

      <Footer />
    </div>
  )
}
