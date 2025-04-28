import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ScrollytellingContainer from "@/components/scrollytelling-container";
import ProgressIndicator from "@/components/progress-indicator";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ScrollytellingContainer />
      <ProgressIndicator />
      <Footer />
    </main>
  );
}