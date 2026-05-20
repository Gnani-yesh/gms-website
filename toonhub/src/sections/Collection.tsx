import { ArrowUpRight } from 'lucide-react'
import { SHAKES } from '../data'
import { CREAM, INK } from '../theme'
import Grain from '../components/Grain'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const CARD_CSS = `
.meltd-card { transition: transform 240ms cubic-bezier(0.4,0,0.2,1); }
.meltd-card:hover { transform: translateY(-10px); }
.meltd-card-img { transition: transform 600ms cubic-bezier(0.4,0,0.2,1); }
.meltd-card:hover .meltd-card-img { transform: scale(1.06); }
.meltd-card-btn { transition: transform 180ms cubic-bezier(0.4,0,0.2,1); }
.meltd-card:hover .meltd-card-btn { transform: rotate(-18deg) scale(1.12); }
`

export default function Collection() {
  return (
    <section
      className="relative overflow-hidden px-5 py-24 sm:px-10 sm:py-32"
      style={{ backgroundColor: INK }}
    >
      <style>{CARD_CSS}</style>
      <Grain opacity={0.55} />
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <Reveal>
          <SectionHeading
            label="The MELTD Lineup"
            accent="#E85E92"
            title={
              <>
                Four flavors.
                <br />
                One <span style={{ color: '#E85E92' }}>MELTD</span> experience.
              </>
            }
            intro="Every MELTD shake is built like a signature release — premium ingredients, layered textures, house-made sauces, and toppings stacked heavy."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {SHAKES.map((shake, i) => (
            <Reveal key={shake.id} delay={i * 90} className="h-full">
              <article
                className="meltd-card flex h-full flex-col overflow-hidden rounded-[26px]"
                style={{ border: '2px solid rgba(244,238,226,0.12)' }}
              >
                <div
                  className="relative h-[300px] overflow-hidden sm:h-[330px]"
                  style={{ backgroundColor: shake.bg }}
                >
                  <span
                    className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[10px] font-bold uppercase"
                    style={{
                      letterSpacing: '0.14em',
                      backgroundColor: 'rgba(23,19,14,0.82)',
                      color: CREAM,
                    }}
                  >
                    {shake.tag}
                  </span>
                  <img
                    src={shake.src}
                    alt={shake.name}
                    draggable={false}
                    className="meltd-card-img h-full w-full object-contain"
                  />
                </div>
                <div
                  className="flex flex-1 flex-col p-6"
                  style={{ backgroundColor: CREAM }}
                >
                  <h3
                    className="uppercase"
                    style={{
                      fontFamily: 'Anton, sans-serif',
                      fontSize: 27,
                      lineHeight: 1.05,
                      color: INK,
                    }}
                  >
                    {shake.name}
                  </h3>
                  <p
                    className="mt-3 text-sm"
                    style={{ color: 'rgba(23,19,14,0.66)', lineHeight: 1.6 }}
                  >
                    {shake.blurb}
                  </p>
                  <p
                    className="mt-4 text-[11px] font-semibold uppercase"
                    style={{ letterSpacing: '0.14em', color: 'rgba(23,19,14,0.5)' }}
                  >
                    {shake.note}
                  </p>
                  <div
                    className="mt-auto flex items-center justify-between border-t pt-5"
                    style={{ borderColor: 'rgba(23,19,14,0.14)' }}
                  >
                    <span
                      style={{
                        fontFamily: 'Anton, sans-serif',
                        fontSize: 28,
                        color: INK,
                      }}
                    >
                      {shake.price}
                    </span>
                    <button
                      type="button"
                      aria-label={`Order ${shake.name}`}
                      className="meltd-card-btn flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: INK, color: CREAM }}
                    >
                      <ArrowUpRight size={22} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
