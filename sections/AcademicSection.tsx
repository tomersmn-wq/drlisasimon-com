import ScrollSection from '@/components/ScrollSection'

export default function AcademicSection() {
  const publications = [
    {
      authors: 'Simon, L., Levi, S., Shapira, S., & Admon, R.',
      year: '2024',
      title: 'Stress-induced increase in heart-rate during sleep as an indicator of PTSD risk among combat soldiers.',
      journal: 'Sleep',
    },
    {
      authors: 'Simon, L., & Admon, R.',
      year: '2023',
      title: 'From childhood adversity to latent stress vulnerability in adulthood: the mediating roles of sleep disturbances and HPA axis dysfunction.',
      journal: 'Neuropsychopharmacology',
      volume: '48(10)',
      pages: '1425–1435',
    },
    {
      authors: 'Simon, L., Rab, S., Goldstein, P., Magal, N., & Admon, R.',
      year: '2022',
      title: 'Multi-trajectory analysis uncovers latent association between psychological and physiological acute stress response patterns.',
      journal: 'Psychoneuroendocrinology',
    },
    {
      authors: 'Simon, L., Jiryis, T., & Admon, R.',
      year: '2021',
      title: 'Now or later? Stress-induced increase and decrease in choice impulsivity are both associated with elevated affective and endocrine responses.',
      journal: 'Brain Sciences',
      volume: '11(9)',
      pages: '1148',
    },
    {
      authors: 'Rab, S. L., Simon, L., Bar-On, A., Richter-Levin, G., & Admon, R.',
      year: '2024',
      title: 'Behavioural profiling following acute stress uncovers associations with future stress sensitivity and past childhood abuse.',
      journal: 'European Journal of Psychotraumatology',
      volume: '15(1)',
      pages: '2420554',
    },
    {
      authors: 'Magal, N., Rab, S., Goldstein, P., Simon, L., Jiryis, T., & Admon, R.',
      year: '2022',
      title: 'Predicting chronic stress among healthy females using daily-life physiological and lifestyle features from wearable sensors.',
      journal: 'Chronic Stress',
    },
  ]

  return (
    <ScrollSection id="academic" className="bg-primary/30">
      <div className="space-y-10">
        <h2 id="academic-heading" className="text-4xl md:text-5xl font-bold text-text-dark text-center">
          מחקר
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* Research Text */}
          <div className="md:col-span-2 space-y-8 order-1">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              לצד עבודתי הקלינית, אני עוסקת במחקר אקדמי בתחום הסטרס, הטראומה ופסיכדלים. כיום אני פוסט־דוקטורנטית באוניברסיטת חיפה, במעבדה לחקר התודעה והעצמי בראשות פרופ׳ רועי סלומון.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              עבודתי המחקרית מתמקדת בהבנת האופן שבו הגוף והנפש מגיבים למצבי סטרס וטראומה, ובזיהוי גורמים המבחינים בין תגובות המאפשרות התאוששות והחלמה לבין כאלה שעלולות להפוך לכרוניות.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              כיום אני מובילה שני פרויקטי מחקר מרכזיים:
              <br />
              האחד בוחן את השפעת הטראומה מאירועי ה־7 באוקטובר על שורדי המסיבה;
              <br />
              והשני עוסק בחקר הבסיס הפיזיולוגי של טיפולים חדשניים המשלבים חומרים משני תודעה, כגון MDMA ופסילוסיבין, יחד עם פסיכותרפיה, למצבים כמו PTSD ודיכאון עמיד לטיפול, במסגרת מחקרים קליניים בלבד.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              העיסוק המחקרי מלווה את עבודתי הקלינית ומאפשר לי להישאר מחוברת לידע עדכני ולהעמקה בהבנת תהליכי טראומה והחלמה, לצד המפגש הטיפולי עצמו.
            </p>
          </div>

          {/* Publications Section */}
          <div className="space-y-6 order-2">
            <h3 id="publications-heading" className="text-xl md:text-2xl font-semibold text-text-dark mb-4 text-center">
              פרסומים מדעיים
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-md max-h-[400px] overflow-y-auto" dir="ltr">
              <div className="space-y-5">
                {publications.map((pub, index) => (
                  <div key={index} className={`pb-5 ${index < publications.length - 1 ? 'border-b border-gray-300' : ''}`}>
                    <p className="text-base text-foreground leading-relaxed text-left">
                      {pub.authors} ({pub.year}).
                      <br />
                      {pub.title}
                      {pub.volume && ` ${pub.volume}`}
                      {pub.pages && `, ${pub.pages}`}.
                      <br />
                      <span className="italic">{pub.journal}</span>.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  )
}
