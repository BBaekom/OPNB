import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BusinessSection from "@/components/business-section"
import CareersSection from "@/components/careers-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <BusinessSection />
      <CareersSection />
      <Footer />
    </main>
  )
}
