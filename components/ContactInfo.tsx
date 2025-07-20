import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <p className="text-gray-600 mb-8">
        We're here to help you with all your workforce needs. Reach out to us through any of the following channels.
      </p>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-[#004aad] rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
            <a 
              href="tel:+919980026516"
              className="text-gray-600 hover:text-[#004aad] transition-colors"
            >
              +91-99800-26516
            </a>
            <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent requirements</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-[#004aad] rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
            <a 
              href="mailto:gridnestworkforce@gmail.com"
              className="text-gray-600 hover:text-[#004aad] transition-colors"
            >
              gridnestworkforce@gmail.com
            </a>
            <p className="text-sm text-gray-500 mt-1">We respond within 2-4 hours</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-[#004aad] rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
            <p className="text-gray-600">
              Indiranagar, Bangalore<br />
              Karnataka, India
            </p>
            <p className="text-sm text-gray-500 mt-1">Serving across India</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-[#004aad] rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
            <p className="text-gray-600">
              Everyday : 10:00 AM - 10:00 PM IST
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
        <p className="text-gray-600 mb-4">
          For immediate assistance or urgent staffing requirements, call us directly or send a WhatsApp message.
        </p>
        <a
          href="https://wa.me/919980026516?text=Hi! I need urgent staffing support."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors inline-block"
        >
          WhatsApp Now
        </a>
      </div>
    </div>
  );
}