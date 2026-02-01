import Link from 'next/link'

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
                <a href="mailto:dr.lisa@example.com" className="hover:text-accent transition-colors">
                  dr.lisa@example.com
                </a>
              </li>
              <li>
                <a href="tel:050-123-4567" className="hover:text-accent transition-colors">
                  050-123-4567
                </a>
              </li>
              <li>רחוב הרצל 123, תל אביב</li>
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
