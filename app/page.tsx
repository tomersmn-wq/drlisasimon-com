import Navigation from '@/components/Navigation'
import HomeSection from '@/sections/HomeSection'
import TherapySection from '@/sections/TherapySection'
import AboutSection from '@/sections/AboutSection'
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
        <TherapySection />
        <AboutSection />
        <AcademicSection />
        <LecturesSection />
        <ContactSection />
      </main>
    </>
  )
}
