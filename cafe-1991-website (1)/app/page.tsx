import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MenuSection from "@/components/menu-section"
import ReservationSection from "@/components/reservation-section"
import GallerySection from "@/components/gallery-section"
import LocationSection from "@/components/location-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ReservationSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
