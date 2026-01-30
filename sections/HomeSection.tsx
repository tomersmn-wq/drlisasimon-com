import ScrollSection from '@/components/ScrollSection'

export default function HomeSection() {
  return (
    <ScrollSection id="home" className="flex items-center">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-text-dark leading-tight">
              ד״ר ליסה סיימון
            </h1>
            <p className="text-2xl md:text-3xl text-accent font-medium">
              פסיכולוגית קלינית
            </p>
            <div className="space-y-4 text-base md:text-lg text-foreground">
              <p>
                ברוכים הבאים לאתר שלי. אני עוסקת בפסיכותרפיה, מחקר והרצאות בתחום הבריאות הנפשית.
              </p>
              <p>
                התמחותי כוללת טיפול קוגניטיבי התנהגותי, טיפול במצבי חרדה ודיכאון, וליווי אנשים בתהליכי שינוי ופיתוח אישי.
              </p>
              <p>
                אני מאמינה בגישה אישית ומכבדת, המותאמת לצרכים הייחודיים של כל מטופל.
              </p>
            </div>
          </div>
          <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-500">
            [תמונת פרופיל]
          </div>
        </div>
      </div>
    </ScrollSection>
  )
}
