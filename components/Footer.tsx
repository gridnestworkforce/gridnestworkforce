import Image from 'next/image';
import Link from 'next/link';
import { Users, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import gnw_logo from '@/assets/gnw_logo.png'
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src={gnw_logo} alt='gridnestworkforce-logo' width={60}></Image>  
              <span className="text-2xl font-bold text-[#25598c]">GridNest Workforce</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Powering Teams. Structuring Growth. Your trusted partner for reliable, 
              structured manpower solutions across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/gridnest-workforce"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#004aad] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:business@gridnestworkforce.in"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#004aad] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919980026516"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#004aad] transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#004aad]" />
                <a href="tel:+919980026516" className="text-gray-300 hover:text-white transition-colors">
                  +91-99800-26516
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#004aad]" />
                <a href="mailto:business@gridnestworkforce.in" className="text-gray-300 hover:text-white transition-colors">
                  business@gridnestworkforce.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#004aad] mt-1" />
                <span className="text-gray-300">
                  Ejipura, Bangalore, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 GridNest Workforce. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}