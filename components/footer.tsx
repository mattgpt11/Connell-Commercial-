import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/connell-logo-icon.png"
                alt="Connell Commercial"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div className="text-white font-bold text-2xl">Connell Commercial</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Licensed General Contractor and veteran-owned commercial construction company delivering superior
              construction services with integrity, precision, and Texas pride. Building the future while honoring the
              past.
            </p>
            <div className="flex items-center gap-2 text-yellow-400 font-semibold">
              <span className="text-lg">🇺🇸</span>
              <span>VETERAN OWNED, TEXAS PROUD</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:210-555-0123" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    (210) 555-0123
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@connellcommercial.com"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    info@connellcommercial.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  San Antonio, Texas
                  <br />
                  Serving all of Texas
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  Mon - Fri: 7:00 AM - 6:00 PM
                  <br />
                  Sat: 8:00 AM - 4:00 PM
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <h3 className="text-xl font-bold mb-6 text-yellow-400">Our Services</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
            <div className="text-gray-300">
              <a href="/services#ground-up-construction" className="hover:text-yellow-400 transition-colors">
                Ground-Up Construction
              </a>
            </div>
            <div className="text-gray-300">
              <a href="/services#interior-finish-outs" className="hover:text-yellow-400 transition-colors">
                Interior Finish-Outs
              </a>
            </div>
            <div className="text-gray-300">
              <a href="/services#remodels-renovations" className="hover:text-yellow-400 transition-colors">
                Remodels & Renovations
              </a>
            </div>
            <div className="text-gray-300">
              <a href="/services#beverage-station-equipment" className="hover:text-yellow-400 transition-colors">
                Beverage Equipment
              </a>
            </div>
            <div className="text-gray-300">
              <a href="/services#governmental-commercial" className="hover:text-yellow-400 transition-colors">
                Government Projects
              </a>
            </div>
            <div className="text-gray-300">
              <a href="/services#project-management" className="hover:text-yellow-400 transition-colors">
                Project Management
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Connell Commercial. All rights reserved. | Licensed & Insured
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/safety-standards" className="hover:text-yellow-400 transition-colors">
              Safety Standards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
