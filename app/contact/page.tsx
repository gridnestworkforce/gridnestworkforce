import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { MapSection } from '@/components/MapSection';

export const metadata: Metadata = {
  title: 'Contact Us - GridNest Workforce',
  description: 'Need reliable staffing support? Contact GridNest Workforce for quick manpower deployment, verified workforce, and pan-India operational support. Reach us via phone, email, or WhatsApp today.',
};

export default function Contact() {
  return (
    <>
      <PageHeader 
        title="Contact Us"
        subtitle="Ready to power your team? Let's connect and discuss your workforce needs."
        backgroundImage="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
      />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <MapSection />
    </>
  );
}