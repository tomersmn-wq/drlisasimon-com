import ScrollSection from '@/components/ScrollSection'
import ContactForm from '@/components/ContactForm'

export default function ContactSection() {
  return (
    <ScrollSection id="contact" className="bg-primary/30">
      <div className="space-y-10">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-text-dark text-center">
          יצירת קשר
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <p className="text-base md:text-lg text-foreground">
              אשמח לענות על שאלות ולספק מידע נוסף על השירותים שאני מציעה. ניתן ליצור קשר באמצעות טופס הפנייה או פרטי הקשר הבאים:
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <div className="text-accent text-2xl" aria-hidden="true">📧</div>
                <div>
                  <h3 className="font-semibold text-text-dark text-lg mb-1">אימייל</h3>
                  <a href="mailto:dr.lisa@example.com" className="text-foreground hover:text-accent transition-colors">
                    dr.lisa@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <div className="text-accent text-2xl" aria-hidden="true">📞</div>
                <div>
                  <h3 className="font-semibold text-text-dark text-lg mb-1">טלפון</h3>
                  <a href="tel:050-123-4567" className="text-foreground hover:text-accent transition-colors">
                    050-123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <div className="text-accent text-2xl" aria-hidden="true">📍</div>
                <div>
                  <h3 className="font-semibold text-text-dark text-lg mb-1">כתובת</h3>
                  <p className="text-foreground">רחוב הרצל 123, תל אביב</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <div className="text-accent text-2xl" aria-hidden="true">🕐</div>
                <div>
                  <h3 className="font-semibold text-text-dark text-lg mb-1">שעות פעילות</h3>
                  <p className="text-foreground">ימים א׳-ה׳, 9:00-19:00</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-500 mt-8" role="img" aria-label="מקום למפה">
              [מפה]
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </ScrollSection>
  )
}
