import { GRAIN_URI } from '../theme'

export default function Grain({ opacity = 0.5 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        backgroundImage: `url("${GRAIN_URI}")`,
        backgroundSize: '200px 200px',
      }}
    />
  )
}
