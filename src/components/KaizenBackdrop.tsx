import React from 'react'
export default function KaizenBackdrop({ fixed = false }: { fixed?: boolean }){
  return (
    <div aria-hidden className={`pointer-events-none ${fixed ? 'fixed' : 'absolute'} inset-0 overflow-hidden`}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800">
        <defs>
          <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6"/>
          </filter>
        </defs>
        {/* Chinese characters for Kaizen: 改善 */}
        <g filter="url(#softBlur)" fill="#000" opacity="0.06">
          <text x="100" y="400" fontSize="420" fontFamily="'Noto Serif SC','Songti SC','SimSun',serif">改善</text>
          <text x="650" y="720" fontSize="320" fontFamily="'Noto Serif SC','Songti SC','SimSun',serif" transform="rotate(-8 650 720)">改善</text>
        </g>
      </svg>
    </div>
  )
}
