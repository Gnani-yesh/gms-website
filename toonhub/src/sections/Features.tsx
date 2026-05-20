import { Cherry, CupSoda, Flame } from 'lucide-react'
import Grain from '../components/Grain'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { CREAM, INK } from '../theme'

const FEATURES = [
  {
    icon: Cherry,
    accent: '#E0A04C',
    index: '01',
    title: 'Real Ingredients',
    body: 'Belgian chocolate, Japanese matcha, real fruit, and house-made sauces. Premium in, nothing artificial.',
  },
  {
    icon: CupSoda,
    accent: '#E85E92',
    index: '02',
    title: 'Blended To Order',
    body: 'Every shake is hand-blended the moment you order, then topped heavy and finished by hand.',
  },
  {
    icon: Flame,
    accent: '#8FA84C',
    index: '03',
    title: 'Limited Flavor Drops',
    body: 'New signature flavors land as limited drops. When a run ends, the flavor melts off the menu.',
  },
]

const FEAT_CSS = `
.meltd-feat { transition: transform 240ms cubic-bezier(0.4,0,0.2,1); }
.meltd-feat:hover { transform: translateY(-8px); }
`

export default function Features() {
  return (
    <section
      className="relative overflow-hidden px-5 py-24 sm:px-10 sm:py-32"
      style={{ backgroundColor: INK }}
    >
      <style>{FEAT_CSS}</style>
      <Grain opacity={0.5} />
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <Reveal>
          <SectionHeading
            label="Why People Come Back"
            accent="#E0A04C"
            title={
              <>
                Built to be <span style={{ color: '#E0A04C' }}>craved</span>.
              </>
            }
            intro="MELTD isn't a fast-food shake or a basic café drink. It's a dessert studio obsessed with texture, flavor, and finish."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal key={f.index} delay={i * 110} className="h-full">
                <article
                  className="meltd-feat relative flex h-full flex-col overflow-hidden rounded-[26px] p-8"
                  style={{
                    border: '2px solid rgba(244,238,226,0.12)',
                    backgroundColor: 'rgba(244,238,226,0.02)',
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-3 -top-7 select-none"
                    style={{
                      fontFamily: 'Anton, sans-serif',
                      fontSize: 156,
                      lineHeight: 1,
                      color: 'rgba(244,238,226,0.045)',
                    }}
                  >
                    {f.index}
                  </span>
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: f.accent, color: INK }}
                  >
                    <Icon size={26} strokeWidth={2.5} />
                  </span>
                  <h3
                    className="relative mt-7 uppercase"
                    style={{
                      fontFamily: 'Anton, sans-serif',
                      fontSize: 30,
                      lineHeight: 1.05,
                      color: CREAM,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="relative mt-4 text-sm"
                    style={{ color: 'rgba(244,238,226,0.6)', lineHeight: 1.7 }}
                  >
                    {f.body}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
