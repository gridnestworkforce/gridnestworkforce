'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Wrench, Phone, Utensils, ArrowRight, X } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Manpower Supply',
    description: 'Skilled & semi-skilled workers for various industries.',
    details: [
      'Warehouse and logistics staff',
      'Delivery personnel',
      'Kitchen helpers',
      'Housekeeping staff',
      'Security personnel',
      'General laborers'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  },
  {
    icon: Phone,
    title: 'CX & Call Center Support',
    description: 'Professional customer experience and support solutions.',
    details: [
      'Voice process agents',
      'Complaint resolution specialists',
      'Multilingual support',
      'Technical support',
      'Sales support',
      'Quality assurance'
    ],
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
  },
  {
    icon: Utensils,
    title: 'Operational Staffing',
    description: 'Specialized staff for operational excellence.',
    details: [
      'Kitchen helpers',
      'Restaurant crew',
      'Packers and logistics assistants',
      'Production line workers',
      'Quality control staff',
      'Maintenance personnel'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
  },
];

export function ServicesOverview() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive workforce solutions tailored to your industry needs 
            and operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedService(index)}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#004aad] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
              </div>

              <button className="w-full bg-gray-50 text-[#004aad] py-3 rounded-lg font-medium hover:bg-[#004aad] hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center bg-[#004aad] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#003d8f] transition-colors duration-300 space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Modal */}
        {selectedService !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#004aad] rounded-full flex items-center justify-center">
                    {(() => {
                      const Icon = services[selectedService].icon;
                      return <Icon className="h-6 w-6 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {services[selectedService].title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {services[selectedService].description}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  What We Provide:
                </h4>
                <ul className="space-y-2 mb-8">
                  {services[selectedService].details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#004aad] rounded-full"></div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="w-full bg-[#004aad] text-white py-3 rounded-lg font-medium hover:bg-[#003d8f] transition-colors duration-300 flex items-center justify-center space-x-2"
                  onClick={() => setSelectedService(null)}
                >
                  <span>Request This Service</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}