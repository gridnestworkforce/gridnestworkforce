import { HeroSection } from '@/components/HeroSection';
import { AboutPreview } from '@/components/AboutPreview';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ServicesOverview } from '@/components/ServicesOverview';
import { ContactCTA } from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <WhyChooseUs />
      <ServicesOverview />
      <ContactCTA />
    </>
  );
}