'use client'

import { useAccessibility } from '@/context/AccessibilityContext'

export default function FontSizeControl() {
  const { fontSize, setFontSize } = useAccessibility()

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-white rounded-lg shadow-lg p-3 border-2 border-primary" role="toolbar" aria-label="בקרת גודל טקסט">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-text-dark mb-1 text-center">גודל טקסט</span>
        <div className="flex gap-2">
          <button
            onClick={() => setFontSize('default')}
            className={`px-3 py-2 rounded-md font-medium text-sm transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
              fontSize === 'default'
                ? 'bg-accent text-white'
                : 'bg-gray-100 text-foreground hover:bg-gray-200'
            }`}
            aria-label="גודל טקסט רגיל"
            aria-pressed={fontSize === 'default'}
          >
            א
          </button>
          <button
            onClick={() => setFontSize('medium')}
            className={`px-3 py-2 rounded-md font-medium text-base transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
              fontSize === 'medium'
                ? 'bg-accent text-white'
                : 'bg-gray-100 text-foreground hover:bg-gray-200'
            }`}
            aria-label="גודל טקסט בינוני"
            aria-pressed={fontSize === 'medium'}
          >
            א
          </button>
          <button
            onClick={() => setFontSize('large')}
            className={`px-3 py-2 rounded-md font-medium text-lg transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
              fontSize === 'large'
                ? 'bg-accent text-white'
                : 'bg-gray-100 text-foreground hover:bg-gray-200'
            }`}
            aria-label="גודל טקסט גדול"
            aria-pressed={fontSize === 'large'}
          >
            א
          </button>
        </div>
      </div>
    </div>
  )
}
