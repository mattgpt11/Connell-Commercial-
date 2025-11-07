import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, MapPin, Calendar } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Barnes & Noble Retail Center",
      category: "Ground-Up Construction",
      location: "San Antonio, TX",
      year: "2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Barnes%20and%20nobel%202-v7wrGt7U2RP5b8e3vLjqRwRcZYH27r.jpg",
      description:
        "Complete ground-up construction of a major retail bookstore with comprehensive site work, utilities installation, and structural framing.",
      features: [
        "Site preparation & grading",
        "Underground utility systems",
        "Structural steel framing",
        "Large-scale retail space",
      ],
      size: "25,000 sq ft",
    },
    {
      id: 2,
      title: "Tesla Manufacturing Facility",
      category: "Interior Finish-Outs",
      location: "Austin, TX",
      year: "2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tesla%202-yPPL8HGPlc26BREhBGEzZybPVo7xp3.jpg",
      description:
        "High-end commercial restroom installation for Tesla manufacturing facility featuring custom tile work and modern plumbing fixtures.",
      features: ["Custom tile installation", "Commercial plumbing systems", "Modern fixtures", "ADA compliance"],
      size: "1,200 sq ft",
    },
    {
      id: 3,
      title: "Bexar County Fire Station",
      category: "Government Projects",
      location: "Bexar County, TX",
      year: "2023",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bexar%20fire-GmpSAF7YPX1yY4pwz8tuAwz8WrQzO3.jpg",
      description:
        "New fire station construction with comprehensive mechanical systems including extensive HVAC ductwork and emergency response infrastructure.",
      features: ["HVAC systems installation", "Emergency infrastructure", "Mechanical systems", "Wood framing"],
      size: "8,500 sq ft",
    },
    {
      id: 4,
      title: "Boerne Aquatic Center",
      category: "Municipal Projects",
      location: "Boerne, TX",
      year: "2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Boerne%20aquatic-rlVgpcptaoJRWnRpTq8FW2zqeb4amu.jpg",
      description:
        "Aquatic facility infrastructure project featuring extensive underground utility work, water line installation, and site preparation.",
      features: ["Underground utilities", "Water system installation", "Site preparation", "Pipeline infrastructure"],
      size: "15,000 sq ft facility",
    },
    {
      id: 5,
      title: "Guardian House Remodel",
      category: "Remodels & Renovations",
      location: "San Antonio, TX",
      year: "2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Guardian%20House-R9W8fTnaF8A4CJwU6RcO3Tg2WRPSOO.jpg",
      description:
        "Comprehensive interior renovation featuring radiant floor heating installation, modern finishes, and complete space transformation.",
      features: ["Radiant floor heating", "Modern interior finishes", "Complete renovation", "Energy efficiency"],
      size: "3,200 sq ft",
    },
    {
      id: 6,
      title: "Harmony Odessa Industrial Facility",
      category: "Ground-Up Construction",
      location: "Odessa, TX",
      year: "2022",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Harmony%20odessa-WyEF8ptHcXBigiFZ3UoCOx6FstgNNR.jpg",
      description:
        "Large-scale industrial facility construction with exposed structural steel, comprehensive mechanical systems, and modern warehouse design.",
      features: ["Steel frame construction", "HVAC duct systems", "Industrial infrastructure", "Warehouse design"],
      size: "35,000 sq ft",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />

      <div className="relative h-96 overflow-hidden pt-20">
        <Image
          src="/images/aerial-construction.jpeg"
          alt="Connell Commercial Portfolio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Showcasing excellence in commercial construction across Texas
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-slate-700/50 backdrop-blur-sm border-slate-600 text-white group hover:bg-slate-600/50 transition-all duration-300"
              >
                <div className="relative h-48 rounded-t-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </div>
                  </div>
                  <CardDescription className="text-slate-300 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                      <Building2 className="h-4 w-4" />
                      <span>{project.size}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Link
                href="/services#ground-up-construction"
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-6 rounded-lg text-center hover:bg-slate-600/50 transition-all group"
              >
                <Building2 className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Ground-Up Construction</h3>
                <p className="text-slate-300 text-sm">Complete commercial builds from foundation to finish</p>
              </Link>

              <Link
                href="/services#interior-finish-outs"
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-6 rounded-lg text-center hover:bg-slate-600/50 transition-all group"
              >
                <Building2 className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Interior Finish-Outs</h3>
                <p className="text-slate-300 text-sm">Transform spaces into functional, branded environments</p>
              </Link>

              <Link
                href="/services#beverage-station-equipment"
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-6 rounded-lg text-center hover:bg-slate-600/50 transition-all group"
              >
                <Building2 className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Beverage Equipment</h3>
                <p className="text-slate-300 text-sm">Specialized installation and maintenance services</p>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 p-12 rounded-lg max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Add Your Project?</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Let us discuss how we can bring your construction vision to life with the same excellence and attention
                to detail shown in our portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="border border-slate-400 text-white hover:bg-slate-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Our Services
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
