'use client';

import { useState } from 'react';
import { Wrench, Phone, Utensils, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'manpower',
    title: 'Manpower Supply',
    icon: Wrench,
    description: 'Comprehensive skilled and semi-skilled workforce solutions for various industries.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    features: [
      'Skilled & Semi-skilled labor',
      'Last-mile & warehouse crew',
      'Kitchen helpers and food service staff',
      'Housekeeping and cleaning staff',
      'Security personnel',
      'General laborers and helpers',
      'Production line workers',
      'Maintenance staff'
    ]
  },
  {
    id: 'cx-support',
    title: 'CX & Call Center Support',
    icon: Phone,
    description: 'Professional customer experience and support solutions with multilingual capabilities.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    features: [
      'Voice process agents',
      'Complaint handling specialists',
      'Multilingual support (Hindi, English, Regional)',
      'Technical support representatives',
      'Sales and lead generation',
      'Quality assurance specialists',
      'Training and onboarding support',
      '24/7 shift coverage'
    ]
  },
  {
    id: 'operational',
    title: 'Operational Staffing',
    icon: Utensils,
    description: 'Specialized operational staff for enhanced business efficiency and productivity.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    features: [
      'Kitchen helpers and prep staff',
      'Restaurant crew and servers',
      'Packers and logistics assistants',
      'Production line operators',
      'Quality control inspectors',
      'Inventory management staff',
      'Equipment operators',
      'Facility maintenance crew'
    ]
  }
];

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState('manpower');
  const activeService = services.find(service => service.id === activeTab)!;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex flex-col md:flex-row justify-center mb-12 border-b border-gray-200">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors border-b-2 ${
                activeTab === service.id
                  ? 'text-[#004aad] border-[#004aad]'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              <service.icon className="h-5 w-5" />
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {activeService.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {activeService.description}
            </p>

            <div className="space-y-4">
              {activeService.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/contact"
                className="bg-[#004aad] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#003d8f] transition-colors duration-300 inline-block"
              >
                Request This Service
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}