import Hero from '@/components/hero';
import Features from '@/components/features';
import EmergencyBanner from '@/components/emergency-banner';
import DonorHighlights from '@/components/donor-highlights';
import LatestArticles from '@/components/latest-articles';
import BloodTypeInfo from '@/components/blood-type-info';
import CallToAction from '@/components/call-to-action';
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <div className="w-full">
      <EmergencyBanner />
      <Hero />
      <Chatbot/>
      {/*<Features />
      <DonorHighlights />
      <BloodTypeInfo />
      <LatestArticles />
      <CallToAction /> */}
    </div>
  );
}