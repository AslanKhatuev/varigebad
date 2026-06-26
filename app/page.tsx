import Hero from "./components/Hero";
import ProjectsCarousel from "./components/Projectscarousel";
import CtaSection from "./components/Ctasection";
import ServicesOverview from "./components/ServiceOverview";

export default function HomePage() {
  return (
    <main className="bg-white text-[#1A3A4A]">
      <Hero />
      <ProjectsCarousel />
      <ServicesOverview />
      <CtaSection />
    </main>
  );
}
