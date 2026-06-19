// src/app/page.tsx
import HeroSection from "@/sections/HeroSection";
import VideoGallery from "@/sections/VideoGallery";
import ServicesSection from "@/sections/ServicesSection";
import AboutSection from "@/sections/AboutSection";
import StatsSection from "@/sections/StatsSection";
import InstagramSection from "@/sections/InstagramSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <HeroSection />
      <VideoGallery />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <InstagramSection />
      <ContactSection />
    </div>
  );
}