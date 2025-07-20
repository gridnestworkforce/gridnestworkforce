import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export function ContactCTA() {
  return (
    <section id="contact-cta" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Need to hire staff fast?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us take care of it. Get reliable, verified workforce deployed 
            within 24-48 hours across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-[#004aad] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#003d8f] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Contact Us Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="tel:+919980026516"
              className="group border-2 border-[#004aad] text-[#004aad] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#004aad] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Available 24/7 • Pan-India Coverage • Quick Deployment
          </div>
        </div>
      </div>
    </section>
  );
}