import ScrollSection from '@/components/ScrollSection'
import Image from 'next/image'

export default function LecturesSection() {
  return (
    <ScrollSection id="lectures">
      <div className="space-y-10">
        <h2 id="lectures-heading" className="text-4xl md:text-5xl font-bold text-text-dark text-center">
          הרצאות והדרכות
        </h2>

        <p className="text-base md:text-lg text-foreground text-center max-w-3xl mx-auto mt-6">
          אני מעבירה הרצאות והדרכות בעברית ובאנגלית לאנשי מקצוע ולקהלים שונים בנושאים הקשורים לסטרס, טראומה, שינה ובריאות נפשית. ההרצאות משלבות ידע מדעי עדכני עם ניסיון מחקרי וקליני, ומותאמות לצרכי הקהל והמסגרת.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-accent">נושאי הרצאות</h3>
            <ul className="space-y-4 text-foreground" role="list">
              <li className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-text-dark mb-2 text-lg">סטרס והגוף</h3>
                <p className="text-sm md:text-base">איך סטרס משפיע על הגוף, הרגש וההתנהגות, ומה אפשר לעשות כדי לזהות דפוסים ולשפר ויסות והתמודדות.</p>
              </li>
              <li className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-text-dark mb-2 text-lg">שינה, סטרס וטראומה</h3>
                <p className="text-sm md:text-base">הקשר בין שינה לרגישות לסטרס ולהחלמה, ומה המחקר מלמד על שינה כמרכיב משמעותי ברווחה נפשית.</p>
              </li>
              <li className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-text-dark mb-2 text-lg">טראומה והחלמה אחרי אירועים קיצוניים</h3>
                <p className="text-sm md:text-base">מנגנונים פסיכולוגיים ופיזיולוגיים של תגובות לטראומה, ומה מבדיל בין התאוששות לבין תהליכים שעלולים להפוך לכרוניים.</p>
              </li>
              <li className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-text-dark mb-2 text-lg">חומרים משני תודעה ופסיכותרפיה: מבט מחקרי</h3>
                <p className="text-sm md:text-base">סקירה של הידע המחקרי העדכני על טיפולים חדשניים (כגון MDMA ופסילוסיבין) בשילוב פסיכותרפיה, במסגרת מחקרים קליניים בלבד.</p>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="w-full rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/images/Gemini_Generated_Image_qt2cj9qt2cj9qt2c.png"
                alt="תמונה מהרצאה - ד״ר ליסה סיימון מעבירה הרצאה"
                width={3712}
                height={1152}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="bg-accent/20 p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark mb-4">קהלי יעד</h3>
              <ul className="space-y-3 text-base text-foreground" role="list">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>ארגונים ומקומות עבודה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>מוסדות חינוך והשכלה גבוהה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>צוותים טיפוליים ורפואיים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>כנסים מקצועיים ואקדמיים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>קהילות וקבוצות עניין</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold text-accent mb-4">עדויות</h3>
              <div className="space-y-4 text-sm md:text-base text-foreground italic">
                <p className="border-r-4 border-accent pr-3">״הרצאה בהירה ומעשירה, עם חיבור טוב בין מחקר לפרקטיקה״</p>
                <p className="border-r-4 border-accent pr-3">״תוכן מדויק ומעודכן, הועבר בצורה נגישה״</p>
                <p className="border-r-4 border-accent pr-3">״הדרכה מקצועית שמאפשרת לקחת נקודות חשיבה וכלים להמשך״</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/50 p-8 md:p-10 rounded-lg mt-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-text-dark mb-5">מעוניינים בהרצאה?</h3>
          <p className="text-base md:text-lg text-foreground mb-6 max-w-2xl mx-auto">
            ההרצאות מותאמות באופן אישי לצרכי הקהל והמסגרת. מוזמנים ליצור קשר לקבלת פרטים ותיאום.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all min-h-[44px] text-base"
            aria-label="עבור לסעיף יצירת קשר"
          >
            צור קשר
          </a>
        </div>
      </div>
    </ScrollSection>
  )
}
