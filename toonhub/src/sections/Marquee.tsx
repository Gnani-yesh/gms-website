import { Sparkles } from 'lucide-react'

const ITEMS = [
  'Thick Shakes',
  'Small Batch',
  'Studio-Made',
  'Zero Boring Flavors',
  'Topped Heavy',
  'Flavor Drops',
]

const MARQUEE_CSS = `
@keyframes meltd-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.meltd-marquee-track {
  display: flex;
  width: max-content;
  animation: meltd-marquee 34s linear infinite;
}
.meltd-marquee:hover .meltd-marquee-track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .meltd-marquee-track { animation-duration: 200s; }
}
`

function Group({ duplicate }: { duplicate?: boolean }) {
  return (
    <div className="flex flex-shrink-0 items-center" aria-hidden={duplicate}>
      {ITEMS.map((item) => (
        <div key={item} className="flex items-center">
          <span
            className="px-7 uppercase"
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(24px, 3.8vw, 44px)',
              color: '#17130E',
            }}
          >
            {item}
          </span>
          <Sparkles size={24} strokeWidth={2.5} style={{ color: '#E85E92' }} />
        </div>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div
      className="meltd-marquee relative flex overflow-hidden py-5"
      style={{
        backgroundColor: '#F4EEE2',
        borderTop: '2px solid #17130E',
        borderBottom: '2px solid #17130E',
      }}
    >
      <style>{MARQUEE_CSS}</style>
      <div className="meltd-marquee-track">
        <Group />
        <Group duplicate />
      </div>
    </div>
  )
}
