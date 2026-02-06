import ScrollSection from '@/components/ScrollSection'

export default function HowToStartSection() {
  return (
    <ScrollSection id="how-to-start" className="bg-primary/30">
      <div className="space-y-10">
        <h2 id="how-to-start-heading" className="text-4xl md:text-5xl font-bold text-text-dark text-center">
          איך מתחילים?
        </h2>
        
        {/* Opening paragraph */}
        <div className="max-w-4xl mx-auto mt-12 px-4">
          <p className="text-base md:text-lg text-foreground leading-relaxed text-center">
            ההחלטה לפנות לטיפול פסיכולוגי היא החלטה משמעותית, ולעיתים מלווה בשאלות והתלבטויות. תחושות של אי־ודאות או חוסר בהירות הן חלק טבעי מהשלב הזה.
          </p>
        </div>

        {/* Steps grid */}
        <div className="max-w-5xl mx-auto mt-12 px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Step 1: Making Contact */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark mb-3">יצירת קשר</h3>
              <p className="text-base text-foreground leading-relaxed mb-3">
                הצעד הראשון הוא יצירת קשר. ניתן לשלוח הודעת ווטסאפ, להשאיר פרטים באתר או להתקשר. לאחר מכן נקבע שיחת טלפון קצרה להיכרות ראשונית, ובה נבדוק יחד התאמה ונחשוב על המשך התהליך.
              </p>
              <a 
                href="#contact"
                className="inline-block text-accent font-medium hover:text-accent/80 focus:text-accent transition-colors text-base underline underline-offset-2"
                aria-label="עבור לסעיף יצירת קשר"
              >
                צור קשר
              </a>
            </div>

            {/* Step 2: Initial Call */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark mb-3">שיחת היכרות</h3>
              <p className="text-base text-foreground leading-relaxed">
                שיחת הטלפון הראשונית היא הזדמנות להכיר, להבין מה מביא אותך לטיפול, ולבדוק יחד אם יש התאמה. זו שיחה קצרה ונינוחה, ללא התחייבות, שמאפשרת לך להרגיש בנוח ולשאול שאלות.
              </p>
            </div>

            {/* Step 3: First Sessions */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark mb-3">פגישות ראשונות</h3>
              <p className="text-base text-foreground leading-relaxed">
                הפגישות הראשונות מוקדשות להיכרות ולהבנה של מה הביא אותך לטיפול, ומה חשוב לך בתהליך. בהמשך, הטיפול מתקיים במפגש שבועי, ביום ובשעה קבועים.
              </p>
            </div>

            {/* Step 4: Therapy Process */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark mb-3">תהליך הטיפול</h3>
              <p className="text-base text-foreground leading-relaxed">
                המפגש הטיפולי הוא שיחה, מרחב שבו ניתן לדבר בחופשיות ולחקור מחשבות ורגשות, גם כאלה שקשה לבטא. בניית אמון ותחושת נוחות לוקחות זמן, וזהו חלק טבעי מהתהליך.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom emphasis box */}
        <div className="max-w-4xl mx-auto mt-10 px-4">
          <div className="bg-accent/10 border-r-4 border-accent p-5 md:p-6 rounded-lg">
            <p className="text-base text-foreground leading-relaxed">
              המרחב הטיפולי הוא מרחב בטוח, קשוב ונטול שיפוטיות, המאפשר העמקה בהיכרות עם עצמך ופיתוח דרכי התמודדות חדשות וצמיחה.
            </p>
          </div>
        </div>
      </div>
    </ScrollSection>
  )
}
