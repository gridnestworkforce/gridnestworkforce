import { Target, Eye, Heart } from 'lucide-react';

export function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Vision */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-[#004aad] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become India's most trusted partner for structured and scalable 
              workforce solutions, setting the benchmark for reliability and excellence 
              in manpower services.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-[#004aad] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with reliable, well-trained crews backed by 
              efficient systems and ethical practices, ensuring operational excellence 
              and sustainable growth.
            </p>
          </div>

          {/* Values */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-[#004aad] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Trust, reliability, transparency, and continuous improvement guide 
              everything we do. We believe in building long-term partnerships 
              through consistent delivery and ethical practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}