import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-primary/50 border-t border-primary py-8 px-6 md:px-12" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* About */}
          <div>
            <h2 className="text-lg font-semibold text-text-dark mb-3">ד״ר ליסה סיימון</h2>
            <p className="text-sm text-foreground">
              פסיכולוגית קלינית מוסמכת עם התמחות בטיפול פסיכולוגי למבוגרים
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-text-dark mb-3">קישורים מהירים</h2>
            <ul className="space-y-2 text-sm" role="list">
              <li>
                <a href="#about" className="text-foreground hover:text-accent transition-colors">
                  אודות
                </a>
              </li>
              <li>
                <a href="#therapy" className="text-foreground hover:text-accent transition-colors">
                  טיפול
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                  יצירת קשר
                </a>
              </li>
              <li>
                <Link href="/accessibility" className="text-foreground hover:text-accent transition-colors">
                  הצהרת נגישות
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-text-dark mb-3">יצירת קשר</h2>
            <ul className="space-y-2 text-sm text-foreground" role="list">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-accent transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>

        {/* Copyright and Accessibility */}
        <div className="border-t border-primary/50 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground">
          <p>© {new Date().getFullYear()} ד״ר ליסה סיימון. כל הזכויות שמורות.</p>
          <div className="flex gap-4">
            <Link 
              href="/accessibility" 
              className="hover:text-accent transition-colors underline"
              aria-label="עבור להצהרת הנגישות"
            >
              נגישות
            </Link>
            <span aria-hidden="true">|</span>
            <span>WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
