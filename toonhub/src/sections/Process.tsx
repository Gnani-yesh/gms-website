import Grain from '../components/Grain'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { CREAM, INK } from '../theme'

const STEPS = [
  {
    n: '01',
    accent: '#8A5A3E',
    title: 'Source',
    body: 'Premium cocoa, real fruit, and small-batch dairy from suppliers we trust.',
  },
  {
    n: '02',
    accent: '#E85E92',
    title: 'Develop',
    body: 'Flavors are built and tasted in the studio until the texture hits exactly right.',
  },
  {
    n: '03',
    accent: '#8FA84C',
    title: 'Blend',
    body: 'Each shake is blended thick and fresh the moment it is ordered — never pre-made.',
  },
  {
    n: '04',
    accent: '#E0A04C',
    title: 'Top & Serve',
    body: 'Topped heavy, drizzled, finished cinematic, and handed over as a signature drop.',
  },
]

export default function Process() {
  return (
    <section
      className="relative overflow-hidden px-5 py-24 sm:px-10 sm:py-32"
      style={{ backgroundColor: INK }}
    >
      <Grain opacity={0.5} />
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <Reveal>
          <SectionHeading
            label="Studio To Cup"
            accent="#8FA84C"
            title={
              <>
                How a <span style={{ color: '#8FA84C' }}>shake</span> happens.
              </>
            }
          />
        </Reveal>

        <div
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[26px] sm:mt-16 sm:grid-cols-2 lg:grid-cols-4"
          style={{ backgroundColor: 'rgba(244,238,226,0.12)' }}
        >
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="h-full">
              <div
                className="flex h-full flex-col p-7 sm:p-8"
                style={{ backgroundColor: INK }}
              >
                <div
                  className="h-1.5 w-12 rounded-full"
                  style={{ backgroundColor: s.accent }}
                />
                <span
                  className="mt-6 block"
                  style={{
                    fontFamily: 'Anton, sans-serif',
                    fontSize: 66,
                    lineHeight: 0.9,
                    color: s.accent,
                  }}
                >
                  {s.n}
                </span>
                <h3
                  className="mt-3 uppercase"
                  style={{
                    fontFamily: 'Anton, sans-serif',
                    fontSize: 26,
                    color: CREAM,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 text-sm"
                  style={{ color: 'rgba(244,238,226,0.58)', lineHeight: 1.65 }}
                >
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
