import { useEffect, useState, type CSSProperties } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SHAKES } from './data'
import { GRAIN_URI } from './theme'

type Role = 'center' | 'left' | 'right' | 'back'

const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)'

const ITEM_TRANSITION = [
  `transform 650ms ${EASE}`,
  `filter 650ms ${EASE}`,
  `opacity 650ms ${EASE}`,
  `left 650ms ${EASE}`,
  `bottom 650ms ${EASE}`,
  `height 650ms ${EASE}`,
].join(', ')

const HOVER_CSS = `
.meltd-nav-btn {
  background-color: transparent;
  transition: transform 150ms, background-color 150ms;
}
.meltd-nav-btn:hover {
  transform: scale(1.08);
  background-color: rgba(255, 255, 255, 0.14);
}
.meltd-cta { opacity: 0.95; transition: opacity 200ms; }
.meltd-cta:hover { opacity: 1; }
`

export default function ToonhubHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640)

  useEffect(() => {
    SHAKES.forEach(({ src }) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) =>
      direction === 'next' ? (prev + 1) % 4 : (prev + 3) % 4,
    )
    window.setTimeout(() => setIsAnimating(false), 650)
  }

  const getRole = (index: number): Role => {
    if (index === activeIndex) return 'center'
    if (index === (activeIndex + 3) % 4) return 'left'
    if (index === (activeIndex + 1) % 4) return 'right'
    return 'back'
  }

  const active = SHAKES[activeIndex]

  const itemBaseStyle: CSSProperties = {
    position: 'absolute',
    aspectRatio: '2 / 3',
    transition: ITEM_TRANSITION,
    willChange: 'transform, filter, opacity',
  }

  const roleStyles: Record<Role, CSSProperties> = {
    center: {
      transform: 'translateX(-50%)',
      filter: 'blur(0px)',
      opacity: 1,
      zIndex: 20,
      left: '50%',
      height: isMobile ? '46%' : '74%',
      bottom: isMobile ? '27%' : '6%',
    },
    left: {
      transform: 'translateX(-50%)',
      filter: 'blur(3px)',
      opacity: 0.5,
      zIndex: 10,
      left: isMobile ? '14%' : '24%',
      height: isMobile ? '21%' : '34%',
      bottom: isMobile ? '35%' : '11%',
    },
    right: {
      transform: 'translateX(-50%)',
      filter: 'blur(3px)',
      opacity: 0.5,
      zIndex: 10,
      left: isMobile ? '86%' : '76%',
      height: isMobile ? '21%' : '34%',
      bottom: isMobile ? '35%' : '11%',
    },
    back: {
      transform: 'translateX(-50%)',
      filter: 'blur(7px)',
      opacity: 0.35,
      zIndex: 5,
      left: '50%',
      height: isMobile ? '18%' : '28%',
      bottom: isMobile ? '42%' : '32%',
    },
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: active.bg,
        transition: `background-color 650ms ${EASE}`,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <style>{HOVER_CSS}</style>

      <div
        className="relative w-full"
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 50,
            opacity: 0.4,
            backgroundImage: `url("${GRAIN_URI}")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Giant ghost text */}
        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            zIndex: 2,
            top: '16%',
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(58px, 17vw, 240px)',
            color: '#ffffff',
            opacity: 1,
            lineHeight: 1,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          EXTRA THICK
        </div>

        {/* Brand label */}
        <div
          className="absolute top-6 left-4 sm:left-8 text-xs font-semibold uppercase"
          style={{
            zIndex: 60,
            color: '#ffffff',
            opacity: 0.92,
            letterSpacing: '0.22em',
          }}
        >
          MELTD
        </div>

        {/* Carousel */}
        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          {SHAKES.map((shake, index) => (
            <div
              key={shake.id}
              style={{ ...itemBaseStyle, ...roleStyles[getRole(index)] }}
            >
              <img
                src={shake.src}
                alt={shake.name}
                draggable={false}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom-left: slogan + flavor + nav */}
        <div
          className="absolute bottom-6 left-4 sm:bottom-16 sm:left-16"
          style={{ zIndex: 60, maxWidth: 380 }}
        >
          <p
            className="text-[11px] font-bold uppercase"
            style={{ letterSpacing: '0.18em', color: 'rgba(255,255,255,0.8)' }}
          >
            Now Pouring — {active.name}
          </p>
          <p
            className="mt-2 uppercase"
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(22px, 3.2vw, 36px)',
              lineHeight: 1.04,
              letterSpacing: '-0.01em',
              color: '#ffffff',
            }}
          >
            Thick shakes.
            <br />
            Zero boring flavors.
          </p>
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              aria-label="Previous flavor"
              onClick={() => navigate('prev')}
              className="meltd-nav-btn flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14"
              style={{ border: '2px solid #ffffff', color: '#ffffff' }}
            >
              <ArrowLeft size={24} strokeWidth={2.25} />
            </button>
            <button
              type="button"
              aria-label="Next flavor"
              onClick={() => navigate('next')}
              className="meltd-nav-btn flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14"
              style={{ border: '2px solid #ffffff', color: '#ffffff' }}
            >
              <ArrowRight size={24} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* Bottom-right: order link */}
        <div
          className="absolute bottom-6 right-4 sm:bottom-16 sm:right-10"
          style={{ zIndex: 60 }}
        >
          <a
            href="#order"
            className="meltd-cta flex items-center gap-2 sm:gap-3"
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(20px, 4vw, 54px)',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Order Now
            <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </div>
  )
}
