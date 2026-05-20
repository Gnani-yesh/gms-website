import ToonhubHero from './ToonhubHero'
import Marquee from './sections/Marquee'
import Collection from './sections/Collection'
import Features from './sections/Features'
import Process from './sections/Process'
import Stats from './sections/Stats'
import Testimonials from './sections/Testimonials'
import DropCta from './sections/DropCta'
import Footer from './sections/Footer'
import { INK } from './theme'

export default function App() {
  return (
    <div style={{ backgroundColor: INK }}>
      <ToonhubHero />
      <Marquee />
      <Collection />
      <Features />
      <Process />
      <Stats />
      <Testimonials />
      <DropCta />
      <Footer />
    </div>
  )
}
