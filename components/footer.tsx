import Link from "next/link"
import Image from "next/image"
import { Mail, Globe, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-orange-50/40 to-blue-50/50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-transparent to-blue-100/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <Image src="/corover-logo.png" alt="CoRover.ai Logo" width={120} height={36} className="h-8 w-auto" />
            <p className="text-slate-600 text-sm leading-relaxed">
              Empowering the next generation of AI professionals through innovative education and hands-on experience.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="text-slate-600 hover:text-orange-600 transition-colors p-2 rounded-xl hover:bg-white/30 backdrop-blur-sm border border-white/30"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="text-slate-600 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-white/30 backdrop-blur-sm border border-white/30"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="text-slate-600 hover:text-red-600 transition-colors p-2 rounded-xl hover:bg-white/30 backdrop-blur-sm border border-white/30"
              >
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#program" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
                  Program Overview
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
                  What's Inside
                </Link>
              </li>
              <li>
                <Link href="#outcomes" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
                  Career Outcomes
                </Link>
              </li>
              <li>
                <Link href="#incentives" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
                  Incentives
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-base font-semibold mb-3 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
                  AI Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
                  No-Code AI
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors text-sm">
                  Prompt Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-3 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-orange-600" />
                <a
                  href="mailto:edu@corover.ai"
                  className="text-slate-600 hover:text-slate-800 transition-colors text-sm"
                >
                  edu@corover.ai
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3 text-blue-600" />
                <a
                  href="https://www.corover.ai"
                  className="text-slate-600 hover:text-slate-800 transition-colors text-sm"
                >
                  www.corover.ai
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-orange-600" />
                <span className="text-slate-600 text-sm">+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-blue-600" />
                <span className="text-slate-600 text-sm">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t-2 border-white/40 py-4 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-slate-600 text-xs">
              © 2024 CoRover.ai. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <p className="text-slate-600 text-xs">NEP 2020 Compliant | Empowering Future-Ready AI Talent</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
