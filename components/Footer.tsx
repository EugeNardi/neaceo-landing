'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Mail, href: 'mailto:neaceotechnologies@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="max-w-2xl mx-auto mb-12">
          {/* Brand Column */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-lg font-semibold text-white">
                NeaCeo Technologies
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Construyendo el futuro con tecnología innovadora y startups exitosas.
            </p>
            <a 
              href="mailto:neaceotechnologies@gmail.com" 
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-block mb-4"
            >
              neaceotechnologies@gmail.com
            </a>
            {/* Social Links */}
            <div className="flex justify-center space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} NeaCeo Technologies. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
