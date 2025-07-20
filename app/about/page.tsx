import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { VisionMission } from '@/components/VisionMission';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export const metadata: Metadata = {
  title: 'About Us - GridNest Workforce',
  description: 'Learn about GridNest Workforce — a leading staffing solutions company delivering structured and ethical workforce support across India. Discover our mission, vision, and client-first approach.',
};

export default function About() {
  return (
    <>
      <PageHeader 
        title="About GridNest Workforce"
        subtitle="Built on trust, reliability, and tech-enabled manpower delivery"
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
      />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              GridNest Workforce is built on the foundation of trust, reliability, and technology-enabled 
              manpower delivery. We understand that your business success depends on having the right people 
              at the right time, and we make that happen with precision and care.
            </p>
          </div>
        </div>
      </div>
      <VisionMission />
      <div className="bg-gray-50">
        <WhyChooseUs />
      </div>
    </>
  );
}