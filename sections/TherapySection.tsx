import ScrollSection from '@/components/ScrollSection'

export default function TherapySection() {
  return (
    <ScrollSection id="therapy" className="bg-primary/30">
      <div className="space-y-10">
        <h2 id="therapy-heading" className="text-4xl md:text-5xl font-bold text-text-dark text-center">
          טיפול פסיכולוגי
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold text-accent">גישות טיפוליות</h3>
            <p className="text-base md:text-lg text-foreground">
              אני משלבת מגוון גישות טיפוליות המבוססות על מחקר, כולל טיפול קוגניטיבי התנהגותי (CBT), טיפול דיאלקטי התנהגותי (DBT), וגישות מבוססות מיינדפולנס.
            </p>
            <p className="text-base md:text-lg text-foreground">
              הטיפול מותאם באופן אישי לצרכים, המטרות והאישיות של כל מטופל, תוך יצירת מרחב בטוח ותומך לתהליך השינוי.
            </p>
            <p className="text-base md:text-lg text-foreground">
              העבודה הטיפולית מתמקדת בחיזוק כלים להתמודדות, שיפור איכות החיים, והגברת התובנה העצמית והצמיחה האישית.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-semibold text-accent">תחומי התמחות</h3>
            <ul className="space-y-3 text-base md:text-lg text-foreground" role="list">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl" aria-hidden="true">•</span>
                <span>חרדה והפרעות פאניקה</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl" aria-hidden="true">•</span>
                <span>דיכאון ומצבי רוח</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl" aria-hidden="true">•</span>
                <span>טראומה והפרעת דחק פוסט טראומטית</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl" aria-hidden="true">•</span>
                <span>קשיים בקשרים בין אישיים</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl" aria-hidden="true">•</span>
                <span>משברים והתמודדות עם שינויים</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-xl" aria-hidden="true">•</span>
                <span>פיתוח אישי וצמיחה</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-500" role="img" aria-label="מקום לתמונת חדר טיפולים">
          [תמונת חדר טיפולים]
        </div>
      </div>
    </ScrollSection>
  )
}
