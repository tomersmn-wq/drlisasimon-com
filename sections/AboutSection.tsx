import ScrollSection from '@/components/ScrollSection'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <ScrollSection id="about">
      <div className="space-y-10">
        <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-text-dark text-center">
          אודות
        </h2>

        {/* Profile Image - Centered at top of section */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full shadow-2xl overflow-hidden ring-4 ring-primary/30">
            <Image 
              src="/images/lisa-profile.jpg"
              alt="ד״ר ליסה סיימון - תמונת פרופיל"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 288px, 384px"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-2 space-y-8">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              אני ליסה סיימון, פסיכולוגית בהתמחות קלינית, בעלת ניסיון בעבודה טיפולית ובמחקר. אני בעלת דוקטורט בנוירופסיכולוגיה קלינית מאוניברסיטת חיפה, ועוסקת בטיפול פסיכולוגי במבוגרים בקליניקה פרטית בצפון תל אביב.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              במהלך השנים עבדתי עם מגוון רחב של אוכלוסיות ומצבים קליניים, במסגרת קליניקה פרטית, שירותי ייעוץ פסיכולוגיים, מרפאות לבריאות הנפש ובתי חולים. בעבודתי אני משלבת ידע אקדמי ומחקרי עדכני עם גישה אנושית, קשובה ומכבדת, תוך התאמה לצרכים הייחודיים של כל אדם.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              לצד העבודה הקלינית, אני פעילה גם בתחום המחקר האקדמי. עבודתי מתמקדת בהבנת תגובות לסטרס ולטראומה, ובקשר בין תהליכים פיזיולוגיים, רגשיים והתנהגותיים. מחקריי פורסמו בכתבי עת מדעיים מובילים בתחום הפסיכולוגיה והנוירופסיכולוגיה הקלינית.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              בנוסף, אני עוסקת בהעברת הרצאות והדרכות מקצועיות בעברית ובאנגלית, לאנשי מקצוע ולקהלים שונים, בנושאים הקשורים לבריאות הנפש, סטרס, טראומה ותהליכי החלמה.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/50 p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark mb-4">השכלה והסמכות</h3>
              <ul className="space-y-3 text-base text-foreground" role="list">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>דוקטורט (PhD) בנוירופסיכולוגיה קלינית, אוניברסיטת חיפה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>פסיכולוגית בהתמחות קלינית, בעלת רישיון מטעם משרד הבריאות</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>הכשרה בגישות קוגניטיביות־התנהגותיות (CBT, ACT ומיינדפולנס)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>הכשרה בטיפול דינמי קצר מועד</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  )
}
