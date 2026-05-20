import { Camera, Play, Send } from 'lucide-react'
import Grain from '../components/Grain'
import { CREAM } from '../theme'

const COLUMNS = [
  { title: 'Menu', links: ['All Flavors', 'Limited Drops', 'Gift Cards', 'Find a Studio'] },
  { title: 'Studio', links: ['Our Story', 'The Process', 'Careers', 'Press Kit'] },
  { title: 'Support', links: ['Order Help', 'Catering', 'Contact', 'FAQ'] },
]

const SOCIALS = [
  { Icon: Camera, label: 'Instagram' },
  { Icon: Send, label: 'Twitter' },
  { Icon: Play, label: 'YouTube' },
]

const FOOTER_CSS = `
.meltd-foot-link { color: rgba(244,238,226,0.78); transition: color 160ms ease; }
.meltd-foot-link:hover { color: #E85E92; }
.meltd-foot-dim { color: rgba(244,238,226,0.42); transition: color 160ms ease; }
.meltd-foot-dim:hover { color: #E85E92; }
.meltd-foot-soc {
  color: #F4EEE2;
  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
}
.meltd-foot-soc:hover { background-color: #E85E92; color: #17130E; transform: translateY(-3px); }
`

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden px-5 pb-10 pt-20 sm:px-10"
      style={{ backgroundColor: '#100D09', borderTop: '2px solid rgba(244,238,226,0.1)' }}
    >
      <style>{FOOTER_CSS}</style>
      <Grain opacity={0.4} />
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">
          <div>
            <div
              className="uppercase"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(46px, 6vw, 76px)',
                lineHeight: 0.88,
                letterSpacing: '-0.01em',
                color: CREAM,
              }}
            >
              MELTD
            </div>
            <p
              className="mt-4 max-w-[320px] text-sm"
              style={{ color: 'rgba(244,238,226,0.5)', lineHeight: 1.6 }}
            >
              A premium milkshake studio handcrafting bold, thick, dessert-grade
              shakes. Blended fresh in Hyderabad since 2024.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="meltd-foot-soc flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ border: '2px solid rgba(244,238,226,0.18)' }}
                >
                  <Icon size={18} strokeWidth={2.25} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div
                className="text-[11px] font-bold uppercase"
                style={{ letterSpacing: '0.2em', color: 'rgba(244,238,226,0.4)' }}
              >
                {col.title}
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="meltd-foot-link text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-16 flex flex-col gap-3 border-t pt-7 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: 'rgba(244,238,226,0.1)' }}
        >
          <span className="text-xs" style={{ color: 'rgba(244,238,226,0.4)' }}>
            © 2024 MELTD Milkshake Studio · Hyderabad, India
          </span>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((l) => (
              <a key={l} href="#" className="meltd-foot-dim text-xs">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
