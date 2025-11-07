import Navigation from "@/components/navigation"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"
import Link from "next/link"

const founders = [
  {
    name: "Mike Connell",
    title: "Co-Founder & CEO",
    bio: "A U.S. Navy veteran with top secret clearance, Mike brings global experience and hands-on construction expertise to his role as CEO of Connell Commercial. After the Navy, he helped a fast-rising startup train teams worldwide to fly and manage drones—sharpening his leadership and technical edge. With over a decade in the field, Mike leads Connell Commercial with precision, innovation, and the same discipline that defined his military service.",
    image: "/images/mike-connell-headshot.jpeg",
    experience: "10+ Years Experience",
    specialty: "Project Leadership & Business Development",
  },
  {
    name: "Philip Connell",
    title: "Co-Founder & COO",
    bio: "With over a decade of hands-on construction and project management experience, Philip brings operational expertise and a results-driven approach to Connell Commercial. Focused on efficiency, quality, and accountability, he ensures every project moves seamlessly from planning to final inspection, combining technical know-how with energetic leadership to deliver exceptional outcomes.",
    image: "/images/philip-connell-headshot.jpg",
    experience: "10+ Years Experience",
    specialty: "Operations & Quality Control",
  },
  {
    name: "Charles Villareal",
    title: "CFO",
    bio: "With over 20 years of experience leading finance, accounting, and operations across multiple industries, Charles brings a powerful combination of financial discipline and technological innovation to Connell Commercial. His leadership ensures every project is backed by strong fiscal management, efficient systems, and a commitment to excellence in execution and transparency.",
    image: "/images/charles-villareal-headshot.png",
    experience: "20+ Years Experience",
    specialty: "Project Management & Coordination",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />

      {/* Header Image Section */}
      <div className="relative h-96 overflow-hidden pt-20">
        <Image src="/images/construction-team.jpeg" alt="About Connell Commercial" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Licensed General Contractor - Veteran-owned excellence in commercial construction
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Mission Section */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white p-12 rounded-lg mb-20">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-yellow-400">Our Mission</h2>
              <div className="space-y-6 text-lg leading-relaxed text-slate-300">
                <p>
                  At Connell Commercial, we are proud to be a Veteran-owned company dedicated to building the future
                  while honoring the past. Rooted in integrity, discipline, and commitment to excellence, we strive to
                  carry on our family legacy by delivering high-quality, innovative construction solutions that stand
                  the test of time.
                </p>
                <p>
                  Our mission is to serve our clients, community, and country. With every project, we build more than
                  just structures—we build trust, relationships, and a foundation for the future. Together we honor the
                  legacy of those who came before us while forging a path towards a stronger tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-20">
            <h2 className="text-5xl font-bold text-center text-white mb-16">Leadership Team</h2>
            <div className="space-y-16 max-w-6xl mx-auto">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
                >
                  {/* Image */}
                  <div className="flex-1">
                    <div className="relative w-80 h-80 mx-auto">
                      <Image
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        fill
                        className="rounded-lg object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="bg-slate-700/50 backdrop-blur-sm border-slate-600 text-white">
                      <CardHeader>
                        <CardTitle className="text-3xl text-white mb-2">{founder.name}</CardTitle>
                        <CardDescription className="text-yellow-400 font-semibold text-xl mb-4">
                          {founder.title}
                        </CardDescription>
                        <div className="space-y-2 mb-4">
                          <div className="text-slate-300 font-medium">{founder.experience}</div>
                          <div className="text-slate-400">{founder.specialty}</div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 leading-relaxed text-lg">{founder.bio}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-12 rounded-lg mb-20">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">I</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
                <p className="text-slate-300 leading-relaxed">
                  Every decision, every interaction, every project is guided by unwavering honesty and ethical practices
                  that build lasting trust and honor our family legacy.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Discipline</h3>
                <p className="text-slate-300 leading-relaxed">
                  Military-trained discipline ensures systematic execution, attention to detail, and unwavering
                  commitment to excellence in every aspect of our work.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Service</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our commitment to serve our clients, community, and country drives everything we do, building
                  relationships that stand the test of time.
                </p>
              </div>
            </div>
          </div>

          {/* Cross-Page Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">See Our Work</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Explore our portfolio of successful projects across Texas, showcasing our commitment to excellence and
                attention to detail.
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
                Discover how our military-trained approach ensures systematic execution and superior results in every
                construction project.
              </p>
              <Link
                href="/process"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn Our Process
              </Link>
            </div>
          </div>

          {/* Services CTA Section */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white p-12 rounded-lg">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-yellow-400">Ready to See What We Can Build?</h2>
              <p className="text-xl leading-relaxed text-slate-300 mb-8">
                From ground-up construction to specialized beverage equipment installations, discover our comprehensive
                range of general contractor services designed to bring your vision to life while honoring our commitment
                to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Our Services
                </Link>
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
