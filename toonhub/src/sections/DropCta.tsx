import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import Grain from '../components/Grain'
import Reveal from '../components/Reveal'
import { INK } from '../theme'

const CTA_CSS = `
.meltd-cta-btn { transition: transform 160ms cubic-bezier(0.4,0,0.2,1); }
.meltd-cta-btn:hover { transform: translateY(-3px); }
.meltd-cta-arrow { transition: transform 160ms cubic-bezier(0.4,0,0.2,1); }
.meltd-cta-btn:hover .meltd-cta-arrow { transform: translateX(5px); }
.meltd-cta-input { transition: box-shadow 160ms ease; }
.meltd-cta-input::placeholder { color: rgba(23,19,14,0.42); }
.meltd-cta-input:focus { box-shadow: 0 0 0 3px rgba(23,19,14,0.22); }
`

export default function DropCta() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim().length > 0) setSubmitted(true)
  }

  return (
    <section
      id="order"
      className="relative overflow-hidden px-5 py-24 sm:px-10 sm:py-36"
      style={{ backgroundColor: '#E85E92' }}
    >
      <style>{CTA_CSS}</style>
      <Grain opacity={0.55} />
      <div className="relative z-10 mx-auto max-w-[760px] text-center">
        <Reveal>
          <span
            className="text-[11px] font-bold uppercase sm:text-xs"
            style={{ letterSpacing: '0.24em', color: 'rgba(23,19,14,0.72)' }}
          >
            Drop 12 — Loading
          </span>
          <h2
            className="mt-5 uppercase"
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(46px, 8vw, 116px)',
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              color: INK,
            }}
          >
            Don't miss the next drop.
          </h2>
          <p
            className="mx-auto mt-5 max-w-[470px] text-sm sm:text-base"
            style={{ color: 'rgba(23,19,14,0.74)', lineHeight: 1.65 }}
          >
            MELTD flavor drops sell out fast. Get one message the moment the next
            signature shake lands — nothing else.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-9">
            {submitted ? (
              <div
                className="mx-auto flex max-w-[480px] items-center justify-center gap-3 rounded-2xl px-6 py-5"
                style={{ backgroundColor: INK }}
              >
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#8FA84C', color: INK }}
                >
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold" style={{ color: '#F4EEE2' }}>
                  You're on the list. We'll ping you when Drop 12 lands.
                </span>
              </div>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto flex max-w-[480px] flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    aria-label="Email address"
                    className="meltd-cta-input h-14 flex-1 rounded-2xl px-5 text-sm outline-none"
                    style={{
                      backgroundColor: '#F4EEE2',
                      border: `2px solid ${INK}`,
                      color: INK,
                    }}
                  />
                  <button
                    type="submit"
                    className="meltd-cta-btn flex h-14 items-center justify-center gap-2 rounded-2xl px-7 text-sm font-bold uppercase"
                    style={{
                      backgroundColor: INK,
                      color: '#F4EEE2',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Notify Me
                    <ArrowRight className="meltd-cta-arrow" size={18} strokeWidth={2.75} />
                  </button>
                </form>
                <p className="mt-4 text-xs" style={{ color: 'rgba(23,19,14,0.58)' }}>
                  No spam. Just flavor drops.
                </p>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
