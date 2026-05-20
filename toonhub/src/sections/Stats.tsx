import Grain from '../components/Grain'
import Reveal from '../components/Reveal'
import { INK } from '../theme'

const STATS = [
  { value: '24', label: 'Signature flavors' },
  { value: '11', label: 'Limited drops released' },
  { value: '60K', label: 'Shakes blended' },
  { value: '4.9', label: 'Average rating' },
]

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden px-5 py-20 sm:px-10 sm:py-24"
      style={{ backgroundColor: '#E0A04C' }}
    >
      <Grain opacity={0.55} />
      <div className="relative z-10 mx-auto grid max-w-[1240px] grid-cols-2 gap-y-12 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div
              className="px-1 sm:px-6 lg:border-r lg:[&:last-child]:border-r-0"
              style={{ borderColor: 'rgba(23,19,14,0.2)' }}
            >
              <div
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(62px, 9vw, 116px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.02em',
                  color: INK,
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-3 text-[11px] font-bold uppercase sm:text-xs"
                style={{ letterSpacing: '0.16em', color: 'rgba(23,19,14,0.72)' }}
              >
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
