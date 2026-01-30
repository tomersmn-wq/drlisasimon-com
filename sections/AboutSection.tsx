import ScrollSection from '@/components/ScrollSection'

export default function AboutSection() {
  return (
    <ScrollSection id="about">
      <div className="space-y-10">
        <h2 className="text-4xl md:text-5xl font-bold text-text-dark text-center">
          אודות
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-base md:text-lg text-foreground">
              ד״ר ליסה סיימון היא פסיכולוגית קלינית בעלת ניסיון רב בתחום הפסיכותרפיה והמחקר. היא בעלת דוקטורט בפסיכולוגיה קלינית מאוניברסיטת תל אביב, והשלימה התמחות מתקדמת בטיפול קוגניטיבי התנהגותי.
            </p>
            <p className="text-base md:text-lg text-foreground">
              במהלך הקריירה שלה, ד״ר סיימון עבדה עם מגוון רחב של אוכלוסיות ומצבים קליניים, כולל עבודה במרכזים לבריאות הנפש, בתי חולים, ומסגרות פרטיות. היא משלבת בעבודתה את הידע האקדמי העדכני ביותר עם גישה אנושית וחמה.
            </p>
            <p className="text-base md:text-lg text-foreground">
              ד״ר סיימון פעילה גם בתחום המחקר האקדמי, ומתמחה במחקרים על יעילות טיפולית, פסיכופתולוגיה, ותהליכי שינוי טיפולי. מחקריה פורסמו בכתבי עת מובילים בתחום.
            </p>
            <p className="text-base md:text-lg text-foreground">
              בנוסף לעבודתה הקלינית והאקדמית, ד״ר סיימון נותנת הרצאות והדרכות לאנשי מקצוע ולקהל הרחב בנושאים הקשורים לבריאות הנפש ורווחה פסיכולוגית.
            </p>
          </div>

          <div className="space-y-6">
            <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-500" role="img" aria-label="מקום לתמונה נוספת">
              [תמונה נוספת]
            </div>
            <div className="bg-primary/50 p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark mb-4">השכלה והסמכות</h3>
              <ul className="space-y-3 text-base text-foreground" role="list">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>דוקטורט בפסיכולוגיה קלינית</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>רישיון לעסוק בפסיכולוגיה קלינית</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>הסמכה בטיפול CBT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">•</span>
                  <span>הסמכה בטיפול DBT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  )
}
