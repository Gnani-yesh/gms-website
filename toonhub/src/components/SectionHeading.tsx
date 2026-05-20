import type { ReactNode } from 'react'
import { CREAM } from '../theme'

interface SectionHeadingProps {
  label: string
  title: ReactNode
  intro?: string
  accent?: string
}

export default function SectionHeading({
  label,
  title,
  intro,
  accent = '#F4845F',
}: SectionHeadingProps) {
  return (
    <div className="max-w-[660px]">
      <div className="flex items-center gap-3">
        <span
          className="inline-block h-3.5 w-3.5 rounded-[4px]"
          style={{ backgroundColor: accent }}
        />
        <span
          className="text-[11px] font-semibold uppercase sm:text-xs"
          style={{ letterSpacing: '0.24em', color: CREAM }}
        >
          {label}
        </span>
      </div>
      <h2
        className="mt-6 uppercase"
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 'clamp(40px, 6.2vw, 92px)',
          lineHeight: 0.94,
          letterSpacing: '-0.02em',
          color: CREAM,
        }}
      >
        {title}
      </h2>
      {intro && (
        <p
          className="mt-6 text-sm leading-relaxed sm:text-base"
          style={{ color: 'rgba(244,238,226,0.6)' }}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
