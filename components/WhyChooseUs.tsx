import { CheckCircle, Zap, Moon, FileText, Globe, Settings } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: '100% Verified Workforce',
    description: 'All our staff undergo thorough background verification and skill assessment.',
  },
  {
    icon: Zap,
    title: 'Quick Deployment',
    description: 'Rapid staffing solutions with deployment in as little as 24-48 hours.',
  },
  {
    icon: Moon,
    title: 'Shift Flexibility',
    description: 'Day and night shift options to match your operational requirements.',
  },
  {
    icon: FileText,
    title: 'End-to-End Compliance',
    description: 'Full legal compliance with all labor laws and regulations.',
  },
  {
    icon: Globe,
    title: 'Scalable Across India',
    description: 'Pan-India presence with local expertise in major cities.',
  },
  {
    icon: Settings,
    title: 'Tech & Process Ready',
    description: 'Technology-enabled workforce with proper training and processes.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose GridNest Workforce?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine reliability, technology, and local expertise to deliver 
            workforce solutions that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#004aad] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}