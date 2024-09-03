import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import AnimatedTooltipPreview from "@/components/ToolTip";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseus from "@/components/WhyChooseus";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturesCourses />  
      <WhyChooseus />   
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <AnimatedTooltipPreview />
    </main>
  );
}
