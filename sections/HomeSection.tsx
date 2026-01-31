import ScrollSection from '@/components/ScrollSection'

export default function HomeSection() {
  return (
<<<<<<< Current (Your changes)
    <ScrollSection id="home" className="flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Abstract Illustration Area - Centered above text */}
          <div className="relative w-full flex items-center justify-center">
            <div className="w-full max-w-lg h-[300px] md:h-[400px] lg:h-[450px]">
              <svg
                viewBox="0 0 800 500"
                className="w-full h-full"
                style={{ maxWidth: '100%', height: 'auto' }}
                aria-hidden="true"
              >
                {/* Soft background shapes */}
                <ellipse cx="400" cy="250" rx="350" ry="200" fill="#e5dfd5" opacity="0.3" />
                <ellipse cx="450" cy="300" rx="250" ry="150" fill="#7fa99b" opacity="0.15" />
                
                {/* Abstract plant/leaves */}
                <path
                  d="M 650 380 Q 670 350 680 320 Q 685 300 683 280"
                  stroke="#7fa99b"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.7"
                />
                <ellipse cx="688" cy="275" rx="15" ry="25" fill="#7fa99b" opacity="0.6" transform="rotate(-15 688 275)" />
                <ellipse cx="675" cy="295" rx="12" ry="22" fill="#7fa99b" opacity="0.6" transform="rotate(20 675 295)" />
                <ellipse cx="695" cy="305" rx="13" ry="24" fill="#7fa99b" opacity="0.6" transform="rotate(-10 695 305)" />

                {/* Minimalist couch/seating representation */}
                <g opacity="0.8">
                  {/* Couch base */}
                  <rect x="200" y="320" width="300" height="15" rx="8" fill="none" stroke="#2d2d2d" strokeWidth="2.5" />
                  {/* Couch back */}
                  <path
                    d="M 220 240 L 220 320 M 480 240 L 480 320"
                    stroke="#2d2d2d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 220 240 Q 350 230 480 240"
                    stroke="#2d2d2d"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Cushions */}
                  <ellipse cx="300" cy="305" rx="35" ry="15" fill="#e5dfd5" opacity="0.8" />
                  <ellipse cx="400" cy="305" rx="35" ry="15" fill="#e5dfd5" opacity="0.8" />
                </g>

                {/* Small table with book */}
                <g opacity="0.75">
                  <ellipse cx="150" cy="360" rx="45" ry="25" fill="none" stroke="#2d2d2d" strokeWidth="2" />
                  <line x1="150" y1="360" x2="150" y2="400" stroke="#2d2d2d" strokeWidth="2" />
                  <rect x="135" y="335" width="30" height="5" rx="2" fill="#7fa99b" opacity="0.6" />
                </g>

                {/* Flowing wave line at bottom */}
                <path
                  d="M 0 450 Q 200 430 400 450 T 800 450"
                  stroke="#7fa99b"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
              </svg>
            </div>
          </div>

          {/* Text Content - Centered below image */}
          <div className="w-full flex flex-col justify-center items-center space-y-4 md:space-y-6 text-center">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-dark leading-tight">
                ד״ר ליסה סיימון
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-accent/80 font-light">
                פסיכולוגית קלינית
              </p>
=======
    <ScrollSection id="home" className="flex items-center relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Split Layout - Image/Visual on Left, Content on Right */}
        <div className="relative min-h-[85vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-12 lg:py-0">
          
          {/* Visual Side - Abstract Portrait/Silhouette */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Background decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full bg-primary/40 blur-2xl"></div>
              </div>
              
              {/* Main visual container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Organic background shape */}
                  <circle cx="200" cy="200" r="180" fill="#e5dfd5" opacity="0.6" />
                  
                  {/* Abstract silhouette - professional portrait style */}
                  <g opacity="0.8">
                    {/* Head shape */}
                    <ellipse cx="200" cy="150" rx="60" ry="75" fill="#7fa99b" opacity="0.7" />
                    
                    {/* Shoulders/upper body */}
                    <path
                      d="M 140 210 Q 140 225 130 240 L 130 320 Q 130 330 140 330 L 170 330 Q 170 240 180 230 L 200 225 L 220 230 Q 230 240 230 330 L 260 330 Q 270 330 270 320 L 270 240 Q 260 225 260 210 Z"
                      fill="#7fa99b"
                      opacity="0.5"
                    />
                    
                    {/* Stylized hair/head detail */}
                    <path
                      d="M 145 130 Q 150 100 200 95 Q 250 100 255 130"
                      fill="#7fa99b"
                      opacity="0.8"
                    />
                  </g>
                  
                  {/* Decorative botanical elements */}
                  <g opacity="0.6">
                    {/* Leaf cluster - bottom left */}
                    <ellipse cx="80" cy="320" rx="12" ry="25" fill="#7fa99b" opacity="0.5" transform="rotate(-30 80 320)" />
                    <ellipse cx="95" cy="315" rx="10" ry="20" fill="#7fa99b" opacity="0.6" transform="rotate(20 95 315)" />
                    <ellipse cx="70" cy="330" rx="10" ry="18" fill="#7fa99b" opacity="0.4" transform="rotate(-50 70 330)" />
                    
                    {/* Leaf cluster - top right */}
                    <ellipse cx="320" cy="100" rx="12" ry="25" fill="#7fa99b" opacity="0.5" transform="rotate(40 320 100)" />
                    <ellipse cx="305" cy="90" rx="10" ry="20" fill="#7fa99b" opacity="0.6" transform="rotate(-20 305 90)" />
                    <ellipse cx="330" cy="115" rx="10" ry="18" fill="#7fa99b" opacity="0.4" transform="rotate(60 330 115)" />
                  </g>
                  
                  {/* Subtle accent circles */}
                  <circle cx="300" cy="280" r="8" fill="#7fa99b" opacity="0.3" />
                  <circle cx="100" cy="150" r="6" fill="#7fa99b" opacity="0.25" />
                  <circle cx="320" cy="200" r="5" fill="#7fa99b" opacity="0.2" />
                </svg>
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -right-4 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#7fa99b" strokeWidth="1" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#7fa99b" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-right">
            {/* Small decorative element */}
            <div className="flex items-center justify-center lg:justify-end gap-2 mb-4">
              <div className="w-12 h-px bg-accent/30"></div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent opacity-50">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
              <div className="w-12 h-px bg-accent/30"></div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-dark leading-tight">
                ד״ר ליסה סיימון
              </h1>
              
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl text-accent font-light tracking-wide">
                  פסיכולוגית קלינית
                </p>
                <div className="w-24 h-px bg-accent/40 mx-auto lg:mr-0"></div>
              </div>
            </div>

            {/* Tagline/Description */}
            <div className="space-y-4 pt-4">
              <p className="text-lg md:text-xl text-text-dark/70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                מלווה אנשים במסע של צמיחה אישית והבנה עצמית עמוקה
              </p>
              
              {/* Optional credentials badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span>מומחית קלינית מוסמכת</span>
              </div>
>>>>>>> Incoming (Background Agent changes)
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#2d2d2d" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    </ScrollSection>
  )
}
