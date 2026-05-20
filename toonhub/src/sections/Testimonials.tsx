import { Quote } from 'lucide-react'
import Grain from '../components/Grain'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { CREAM, INK } from '../theme'

const QUOTES = [
  {
    accent: '#E85E92',
    quote:
      'Velvet Chocolate ruined every other milkshake for me. It is basically dessert in a cup.',
    name: 'Aarav K.',
    meta: 'MELTD regular · Hyderabad',
  },
  {
    accent: '#8FA84C',
    quote:
      'Got Pink Static on drop day and came back twice the same week. The texture is unreal.',
    name: 'Zoya R.',
    meta: 'Regular since Drop 04',
  },
  {
    accent: '#E0A04C',
    quote:
      'Matcha Melt is the most premium shake I have had in the city. Worth every rupee.',
    name: 'Karthik V.',
    meta: 'Collector · Hyderabad',
  },
]

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden px-5 py-24 sm:px-10 sm:py-32"
      style={{ backgroundColor: INK }}
    >
      <Grain opacity={0.5} />
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <Reveal>
          <SectionHeading
            label="From The Counter"
            accent="#E85E92"
            title={
              <>
                People don't gatekeep{' '}
                <span style={{ color: '#E85E92' }}>MELTD</span>.
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 110} className="h-full">
              <figure
                className="flex h-full flex-col rounded-[26px] p-8"
                style={{
                  border: '2px solid rgba(244,238,226,0.12)',
                  backgroundColor: 'rgba(244,238,226,0.02)',
                }}
              >
                <Quote
                  size={34}
                  strokeWidth={2}
                  fill={q.accent}
                  style={{ color: q.accent }}
                />
                <blockquote
                  className="mt-6 flex-1 text-lg sm:text-xl"
                  style={{ color: CREAM, lineHeight: 1.5 }}
                >
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{ backgroundColor: q.accent, color: INK }}
                  >
                    {q.name.charAt(0)}
                  </span>
                  <span>
                    <span
                      className="block text-sm font-semibold"
                      style={{ color: CREAM }}
                    >
                      {q.name}
                    </span>
                    <span
                      className="block text-[11px] font-semibold uppercase"
                      style={{ letterSpacing: '0.12em', color: 'rgba(244,238,226,0.45)' }}
                    >
                      {q.meta}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
