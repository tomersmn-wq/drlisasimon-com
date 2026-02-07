import ScrollSection from '@/components/ScrollSection'

export default function TherapySection() {
  return (
    <ScrollSection id="therapy" className="bg-primary/30">
      <div className="space-y-10">
        <h2 id="therapy-heading" className="text-4xl md:text-5xl font-bold text-text-dark text-center">
          טיפול פסיכולוגי | הגישה הטיפולית
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* תחומי התמחות */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="bg-primary/50 p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark mb-4">תחומי התמחות</h3>
              <ul className="space-y-3 text-base text-foreground" role="list">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>חרדה ודיכאון</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>טראומה והפרעת דחק פוסט טראומטית (PTSD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>קשרים בין־אישיים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>משברים והתמודדות עם שינויים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>פיתוח אישי וצמיחה</span>
                </li>
              </ul>
            </div>
          </div>

          {/* טקסט טיפולי */}
          <div className="md:col-span-2 space-y-8 order-1 md:order-2">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              הטיפול הפסיכולוגי שאני מציעה נשען על תפיסה אינטגרטיבית, המשלבת בין הבנה מעמיקה של החוויה הרגשית לבין כלים מעשיים להתמודדות ולשינוי. אני מאמינה בקשר ההדוק בין גוף ונפש, ובהשפעה ההדדית שלהם על האופן שבו אנו חווים ומתמודדים עם מצבי חיים שונים, ובהם גם מצבי סטרס, עומס וטראומה.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              הבסיס לעבודתי הוא הגישה הפסיכודינמית, המתמקדת בהבנת עולמו הפנימי של האדם, דפוסים רגשיים וקשריים, והמשמעויות שנוצרו לאורך החיים. לצד זאת, אני משלבת באופן גמיש ומותאם אישית גישות קוגניטיביות-התנהגותיות מעולמות ה-CBT, ACT ומיינדפולנס, המציעות דרכים פרקטיות להתמודדות, ויסות רגשי ושינוי דפוסי חשיבה והתנהגות.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              מהות הטיפול עבורי היא יצירת מרחב בטוח, קשוב ולא שיפוטי, שבו ניתן לבטא מחשבות, רגשות ותחושות באופן חופשי. בתוך הקשר הטיפולי אנו מתבוננים יחד במה שעולה, חוקרים חוויות עבר והווה, ומנסים להבין כיצד הן משפיעות על החיים כיום.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              התהליך הטיפולי הוא תהליך משותף, המאפשר בהדרגה העמקה בהבנה העצמית, פיתוח דרכי התמודדות חדשות, ויצירת שינוי המבוסס על הקשבה, סקרנות וכבוד לקצב האישי של כל אדם.
            </p>
          </div>
        </div>
      </div>
    </ScrollSection>
  )
}
