import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HomeSection from '@/sections/HomeSection'
import TherapySection from '@/sections/TherapySection'
import AboutSection from '@/sections/AboutSection'
import HowToStartSection from '@/sections/HowToStartSection'
import AcademicSection from '@/sections/AcademicSection'
import LecturesSection from '@/sections/LecturesSection'
import ContactSection from '@/sections/ContactSection'

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        דלג לתוכן הראשי
      </a>
      <Navigation />
      <main id="main-content">
        <HomeSection />
        <AboutSection />
        <TherapySection />
        <HowToStartSection />
        <AcademicSection />
        <LecturesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
