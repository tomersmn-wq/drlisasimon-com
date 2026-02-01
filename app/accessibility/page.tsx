import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'הצהרת נגישות | ד״ר ליסה סיימון',
  description: 'הצהרת נגישות אתר - ד״ר ליסה סיימון פסיכולוגית קלינית. תאימות לתקן ישראלי 5568 ו-WCAG 2.1 Level AA',
}

export default function AccessibilityPage() {
  const lastUpdated = 'פברואר 2026'

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back link */}
      <header className="bg-primary/50 border-b border-primary py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-4"
            aria-label="חזור לדף הבית"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            חזור לדף הבית
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark">הצהרת נגישות</h1>
          <p className="text-foreground mt-2">עודכן לאחרונה: {lastUpdated}</p>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content" className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Introduction */}
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="text-3xl font-semibold text-text-dark mb-4">מחויבות לנגישות</h2>
            <p className="text-lg text-foreground leading-relaxed">
              ד״ר ליסה סיימון מחויבת להנגשת האתר לכל המשתמשים, לרבות אנשים עם מוגבלויות. 
              אנו עושים מאמצים מתמשכים להבטיח שהאתר עומד בדרישות הנגישות המחמירות ביותר.
            </p>
          </section>

          {/* Compliance Standards */}
          <section aria-labelledby="standards-heading" className="bg-white p-6 rounded-lg shadow-md">
            <h2 id="standards-heading" className="text-2xl font-semibold text-text-dark mb-4">תקנים ותאימות</h2>
            <div className="space-y-3 text-foreground">
              <p>האתר עומד בדרישות התקנים הבאים:</p>
              <ul className="list-disc pr-6 space-y-2" role="list">
                <li>
                  <strong>תקן ישראלי 5568</strong> - התקן הישראלי לנגישות תכנים באינטרנט
                </li>
                <li>
                  <strong>WCAG 2.1 Level AA</strong> (Web Content Accessibility Guidelines) - קווים מנחים בינלאומיים לנגישות תכנים באינטרנט
                </li>
              </ul>
              <p className="mt-4">
                התאימות לתקנים אלה מבטיחה שהאתר נגיש לאנשים עם מגוון רחב של מוגבלויות, 
                לרבות לקויות ראייה, שמיעה, תנועה וקוגניציה.
              </p>
            </div>
          </section>

          {/* Accessibility Features */}
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-2xl font-semibold text-text-dark mb-4">תכונות נגישות באתר</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-accent mb-2">ניווט במקלדת</h3>
                <p className="text-sm text-foreground">
                  ניתן לנווט באתר באמצעות מקלדת בלבד, כולל קישור לדילוג לתוכן העיקרי
                </p>
              </div>
              <div className="bg-primary/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-accent mb-2">ניגודיות צבעים</h3>
                <p className="text-sm text-foreground">
                  כל הטקסטים עומדים בדרישות הניגודיות המינימליות של WCAG AA
                </p>
              </div>
              <div className="bg-primary/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-accent mb-2">התאמת גודל טקסט</h3>
                <p className="text-sm text-foreground">
                  אפשרות להגדלת גודל הטקסט באמצעות כפתורי הבקרה בפינה השמאלית התחתונה
                </p>
              </div>
              <div className="bg-primary/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-accent mb-2">תמיכה בקוראי מסך</h3>
                <p className="text-sm text-foreground">
                  האתר תומך בקוראי מסך מובילים כמו NVDA, JAWS ו-VoiceOver
                </p>
              </div>
              <div className="bg-primary/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-accent mb-2">תמיכה בעברית (RTL)</h3>
                <p className="text-sm text-foreground">
                  האתר מותאם במלואו לשפה העברית ולכתיבה מימין לשמאל
                </p>
              </div>
              <div className="bg-primary/30 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-accent mb-2">הפחתת תנועה</h3>
                <p className="text-sm text-foreground">
                  האתר מכבד העדפות מערכת להפחתת אנימציות ותנועות
                </p>
              </div>
            </div>
          </section>

          {/* Assistive Technologies */}
          <section aria-labelledby="tech-heading" className="bg-white p-6 rounded-lg shadow-md">
            <h2 id="tech-heading" className="text-2xl font-semibold text-text-dark mb-4">טכנולוגיות מסייעות נתמכות</h2>
            <p className="text-foreground mb-3">האתר נבדק ונמצא תואם לעבודה עם הטכנולוגיות המסייעות הבאות:</p>
            <ul className="list-disc pr-6 space-y-2 text-foreground" role="list">
              <li>קוראי מסך: NVDA, JAWS, VoiceOver (iOS), TalkBack (Android)</li>
              <li>דפדפנים: Chrome, Firefox, Safari, Edge (גרסאות עדכניות)</li>
              <li>תוכנות הגדלת מסך</li>
              <li>תוכנות הכתבה קולית</li>
              <li>ניווט באמצעות מקלדת או מכשירי קלט חלופיים</li>
            </ul>
          </section>

          {/* Limitations */}
          <section aria-labelledby="limitations-heading">
            <h2 id="limitations-heading" className="text-2xl font-semibold text-text-dark mb-4">מגבלות ידועות ושיפורים מתוכננים</h2>
            <p className="text-foreground mb-3">
              אנו עובדים באופן מתמיד לשיפור נגישות האתר. כרגע אין מגבלות נגישות ידועות באתר.
            </p>
            <p className="text-foreground">
              אם נתקלת בבעיית נגישות, נשמח לשמוע ממך כדי שנוכל לטפל בה בהקדם האפשרי.
            </p>
          </section>

          {/* Feedback and Contact */}
          <section aria-labelledby="feedback-heading" className="bg-accent/10 p-6 rounded-lg border-2 border-accent">
            <h2 id="feedback-heading" className="text-2xl font-semibold text-text-dark mb-4">משוב ויצירת קשר</h2>
            <p className="text-foreground mb-4">
              אנו מעודדים משוב על נגישות האתר. אם נתקלת בבעיות נגישות או יש לך הצעות לשיפור, 
              נשמח לשמוע ממך:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl" aria-hidden="true">📧</span>
                <div>
                  <strong className="text-text-dark">דוא״ל:</strong>{' '}
                  <a href="mailto:dr.lisa@example.com" className="text-accent hover:underline">
                    dr.lisa@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl" aria-hidden="true">📞</span>
                <div>
                  <strong className="text-text-dark">טלפון:</strong>{' '}
                  <a href="tel:050-123-4567" className="text-accent hover:underline">
                    050-123-4567
                  </a>
                </div>
              </div>
              <p className="text-sm text-foreground mt-4">
                אנו שואפים להגיב לכל פניות הנגישות תוך 3 ימי עסקים ולפתור בעיות תוך 14 ימי עסקים.
              </p>
            </div>
          </section>

          {/* Certification and Audit */}
          <section aria-labelledby="audit-heading" className="bg-white p-6 rounded-lg shadow-md">
            <h2 id="audit-heading" className="text-2xl font-semibold text-text-dark mb-4">ביקורת והסמכה</h2>
            <p className="text-foreground">
              האתר עובר בדיקות נגישות אוטומטיות באמצעות כלי <strong>axe-core</strong> ובדיקות ידניות 
              לוודא עמידה בתקני WCAG 2.1 Level AA והתקן הישראלי 5568.
            </p>
            <p className="text-foreground mt-3">
              תאריך הבדיקה האחרונה: {lastUpdated}
            </p>
          </section>

          {/* Legal */}
          <section aria-labelledby="legal-heading" className="text-sm text-foreground">
            <h2 id="legal-heading" className="text-xl font-semibold text-text-dark mb-3">מידע משפטי</h2>
            <p>
              הצהרת נגישות זו עודכנה לאחרונה ב{lastUpdated} ומשקפת את המצב הנוכחי של האתר. 
              אנו מתחייבים לעדכן הצהרה זו ככל שיבוצעו שינויים באתר.
            </p>
          </section>

        </div>
      </main>

      {/* Footer link back */}
      <div className="py-8 px-6 md:px-12 bg-primary/30 border-t border-primary text-center">
        <Link 
          href="/"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all min-h-[44px]"
        >
          חזור לדף הבית
        </Link>
      </div>
    </div>
  )
}
