import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { ServiceTabs } from '@/components/ServiceTabs';

export const metadata: Metadata = {
  title: 'Our Services - GridNest Workforce',
  description: 'Explore GridNest Workforce services: Manpower supply, Call Center & CX support, and Operational staffing for logistics, food tech, retail, and more. Verified, fast, and scalable.',
};

export default function Services() {
  return (
    <>
      <PageHeader 
        title="Our Services"
        subtitle="Built to Scale with You"
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
      />
      <ServiceTabs />
    </>
  );
}