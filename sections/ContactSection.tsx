import ScrollSection from '@/components/ScrollSection'
import ContactForm from '@/components/ContactForm'
import { CONTACT_INFO } from '@/lib/config'

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
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-foreground hover:text-accent transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <div className="text-accent text-2xl" aria-hidden="true">📞</div>
                <div>
                  <h3 className="font-semibold text-text-dark text-lg mb-1">טלפון</h3>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-foreground hover:text-accent transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <div className="text-accent text-2xl" aria-hidden="true">📍</div>
                <div>
                  <h3 className="font-semibold text-text-dark text-lg mb-1">כתובת</h3>
                  <p className="text-foreground">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </ScrollSection>
  )
}
