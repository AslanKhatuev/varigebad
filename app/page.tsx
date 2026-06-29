import Hero from "./components/Hero";
import ProjectsCarousel from "./components/Projectscarousel";
import CtaSection from "./components/Ctasection";
import AreasOverview from "./components/AreasOverview";
import TestimonialsSection from "./components/Testimonialssection";
import ServicesOverview from "./components/Servicesoverview";
import Faq from "@/app/components/Faq";
import { generalFaq } from "@/lib/Faqdata";

export default function HomePage() {
  return (
    <main className="bg-white text-[#1A3A4A]">
      <Hero />
      <ProjectsCarousel />
      <ServicesOverview />
      <AreasOverview />
      <TestimonialsSection />
      <Faq items={generalFaq} scriptId="faq-jsonld-home" />
      <CtaSection />
    </main>
  );
}
