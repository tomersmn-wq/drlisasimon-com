import ScrollSection from '@/components/ScrollSection'

export default function AcademicSection() {
  return (
    <ScrollSection id="academic" className="bg-primary/30">
      <div className="space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold text-text-dark text-center">
          מחקר אקדמי
        </h2>

        <div className="space-y-8 mt-12">
          <p className="text-base md:text-lg text-foreground text-center max-w-3xl mx-auto">
            המחקר שלי מתמקד בהבנת תהליכים פסיכולוגיים ויעילות טיפולית במגוון הקשרים קליניים. אני חוקרת נושאים הקשורים לחרדה, דיכאון, טראומה ותהליכי שינוי טיפולי.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl md:text-3xl font-semibold text-accent mb-6">תחומי מחקר</h3>
              <ul className="space-y-4 text-base text-foreground" role="list">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-xl" aria-hidden="true">•</span>
                  <span>יעילות של טיפולים קוגניטיביים התנהגותיים</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-xl" aria-hidden="true">•</span>
                  <span>תהליכי שינוי במהלך פסיכותרפיה</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-xl" aria-hidden="true">•</span>
                  <span>התערבויות מבוססות מיינדפולנס</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-xl" aria-hidden="true">•</span>
                  <span>גורמי סיכון וחוסן במצבי משבר</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl md:text-3xl font-semibold text-accent mb-6">פרסומים נבחרים</h3>
              <div className="space-y-5 text-base text-foreground">
                <div>
                  <p className="font-semibold">סיימון, ל. (2024)</p>
                  <p className="text-sm italic mt-1">יעילות טיפול CBT בקרב מבוגרים עם הפרעת חרדה כללית</p>
                </div>
                <div>
                  <p className="font-semibold">סיימון, ל. ושות׳ (2023)</p>
                  <p className="text-sm italic mt-1">תהליכי שינוי במיינדפולנס: מחקר אורך</p>
                </div>
                <div>
                  <p className="font-semibold">סיימון, ל. (2022)</p>
                  <p className="text-sm italic mt-1">חוסן פסיכולוגי בעידן המשברים</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-500" role="img" aria-label="מקום לגרפים או תמונה מחקרית">
            [גרפים או תמונה מחקרית]
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mt-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-accent mb-5">שיתופי פעולה אקדמיים</h3>
            <p className="text-base md:text-lg text-foreground">
              אני משתפת פעולה עם חוקרים מאוניברסיטאות מובילות בארץ ובעולם, ומשתתפת בפרויקטי מחקר בין-תחומיים. כמו כן, אני פעילה בהכשרת דור עתיד של פסיכולוגים קליניים באמצעות הנחיית סטודנטים ודוקטורנטים.
            </p>
          </div>
        </div>
      </div>
    </ScrollSection>
  )
}
