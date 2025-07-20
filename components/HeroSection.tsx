'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-cta');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#004aad]/90 to-[#004aad]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Powering Teams.<br />
            <span className="text-blue-200">Structuring Growth.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for reliable, structured manpower solutions across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-white text-[#004aad] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Request Staff</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <Link
              href="/services"
              className="group border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#004aad] transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Explore Services</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}